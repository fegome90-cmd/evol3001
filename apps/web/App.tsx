import React, { useState } from 'react';
import { useStore } from './store';
import { NURSING_TEMPLATES } from '../../packages/config/templates';
import { Chip, SectionHeader, Card, Button } from '../../packages/ui/components';
import { GoogleGenAI } from "@google/genai";

export const App = () => {
  const { 
    activeTemplate, 
    selections, 
    toggleOption, 
    setTemplate, 
    generatedText,
    resetSelections,
    setGeneratedText
  } = useStore();

  const [isThinking, setIsThinking] = useState(false);
  const [copyFeedback, setCopyFeedback] = useState(false);

  const handlePolish = async () => {
    if (!generatedText) return;
    
    setIsThinking(true);
    try {
        // The API key must be obtained exclusively from process.env.API_KEY
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        
        const prompt = `
          Actúa como un redactor médico experto y enfermero profesional.
          Reescribe las siguientes notas de enfermería para que sean gramaticalmente fluidas, profesionales y concisas en ESPAÑOL.
          Mantén un tono clínico estricto. No inventes información que no esté presente.
          Combina oraciones relacionadas lógicamente.
          
          Notas de entrada:
          ${generatedText}
        `;

        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: prompt,
        });

        if (response.text) {
          setGeneratedText(response.text);
        }
    } catch (error) {
      console.error("AI Error:", error);
      alert("No se pudo conectar con el servicio de IA. Verifica tu API Key.");
    } finally {
      setIsThinking(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedText);
    setCopyFeedback(true);
    setTimeout(() => setCopyFeedback(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row">
      {/* Sidebar / Template Selector */}
      <aside className="w-full md:w-64 bg-white border-r border-slate-200 flex-shrink-0 p-4 md:h-screen overflow-y-auto">
        <div className="mb-8 flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
            NE
          </div>
          <h1 className="font-bold text-slate-800">Nursing Evo 3000</h1>
        </div>
        
        <nav className="space-y-1">
          <SectionHeader title="Plantillas" />
          {NURSING_TEMPLATES.map(t => (
            <button
              key={t.id}
              onClick={() => setTemplate(t.id)}
              className={`
                w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors
                ${activeTemplate.id === t.id 
                  ? 'bg-primary/10 text-primary' 
                  : 'text-slate-600 hover:bg-slate-50'}
              `}
            >
              {t.name}
            </button>
          ))}
        </nav>

        <div className="mt-auto pt-8">
          <div className="bg-slate-50 rounded-lg p-3 text-xs text-slate-500">
            <p className="font-medium text-slate-700 mb-1">Estado del Sistema</p>
            <p>Motor: Core v1.0.0</p>
            <p>Datos: Config v1.2.0 (ES)</p>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        
        {/* Top Bar (Mobile Header usually, or Breadcrumbs) */}
        <header className="h-14 border-b border-slate-200 bg-white flex items-center justify-between px-6 flex-shrink-0">
          <h2 className="font-semibold text-slate-800">{activeTemplate.name}</h2>
          <Button variant="ghost" onClick={resetSelections} className="text-sm">
            Reiniciar
          </Button>
        </header>

        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          
          {/* Form Section (Scrollable) */}
          <div className="flex-1 overflow-y-auto p-6 space-y-8 pb-24">
            {activeTemplate.sections.map(section => (
              <section key={section.id}>
                <SectionHeader title={section.title} />
                <div className="flex flex-wrap gap-2">
                  {section.options.map(option => {
                    const isSelected = selections[section.id]?.includes(option.id) || false;
                    return (
                      <Chip
                        key={option.id}
                        label={option.label}
                        selected={isSelected}
                        onClick={() => toggleOption(section.id, option.id, section.type)}
                      />
                    );
                  })}
                </div>
              </section>
            ))}
          </div>

          {/* Preview Section (Fixed on Desktop, Bottom on Mobile usually but here side-by-side) */}
          <div className="w-full md:w-[450px] bg-slate-50 border-l border-slate-200 flex flex-col h-[50vh] md:h-auto border-t md:border-t-0">
            <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-white">
              <h3 className="font-semibold text-slate-700">Registro en Vivo</h3>
              <div className="flex gap-2">
                 {/* AI Magic Button */}
                <Button 
                  variant="secondary" 
                  onClick={handlePolish}
                  disabled={!generatedText || isThinking}
                  className="text-xs px-3 py-1 h-8"
                >
                  {isThinking ? (
                    <span className="flex items-center gap-2">
                       <span className="animate-spin">✨</span> Puliendo...
                    </span>
                  ) : (
                    <span className="flex items-center gap-1">
                       <span>✨</span> IA Mejorar
                    </span>
                  )}
                </Button>
              </div>
            </div>
            
            <div className="flex-1 p-4 overflow-y-auto">
              <Card className="h-full p-4 bg-white font-mono text-sm text-slate-700 leading-relaxed whitespace-pre-wrap shadow-none border-slate-200">
                {generatedText || <span className="text-slate-400 italic">Selecciona opciones para generar la nota...</span>}
              </Card>
            </div>

            <div className="p-4 bg-white border-t border-slate-200">
              <Button 
                onClick={handleCopy} 
                className="w-full"
                disabled={!generatedText}
              >
                {copyFeedback ? "¡Copiado al portapapeles!" : "Copiar Registro"}
              </Button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};