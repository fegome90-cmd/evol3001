import { useState } from 'react';
import { useStore } from './store';
import { NURSING_TEMPLATES } from '@repo/config/templates';
import { Chip, SectionHeader, Card } from '@repo/ui/components';
import { Button } from '@repo/ui';
import { GoogleGenAI } from '@google/genai';

export const App = () => {
  const {
    activeTemplate,
    selections,
    toggleOption,
    setTemplate,
    generatedText,
    resetSelections,
    setGeneratedText,
  } = useStore();

  const [isThinking, setIsThinking] = useState(false);
  const [copyFeedback, setCopyFeedback] = useState(false);

  const handlePolish = async () => {
    if (!generatedText) return;

    setIsThinking(true);
    try {
      // The API key must be obtained from Vite's environment variable
      const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_API_KEY });

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
      console.error('AI Error:', error);
      alert('No se pudo conectar con el servicio de IA. Verifica tu API Key.');
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
    <div className="bg-background flex min-h-screen flex-col md:flex-row">
      {/* Sidebar / Template Selector */}
      <aside className="w-full flex-shrink-0 overflow-y-auto border-r border-slate-200 bg-white p-4 md:h-screen md:w-64">
        <div className="mb-8 flex items-center gap-2">
          <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-lg font-bold text-white">
            NE
          </div>
          <h1 className="font-bold text-slate-800">Nursing Evo 3000</h1>
        </div>

        <nav className="space-y-1">
          <SectionHeader title="Plantillas" />
          {NURSING_TEMPLATES.map((t) => (
            <button
              key={t.id}
              onClick={() => setTemplate(t.id)}
              className={`w-full rounded-md px-3 py-2 text-left text-sm font-medium transition-colors ${
                activeTemplate.id === t.id
                  ? 'bg-primary/10 text-primary'
                  : 'text-slate-600 hover:bg-slate-50'
              } `}
            >
              {t.name}
            </button>
          ))}
        </nav>

        <div className="mt-auto pt-8">
          <div className="rounded-lg bg-slate-50 p-3 text-xs text-slate-500">
            <p className="mb-1 font-medium text-slate-700">
              Estado del Sistema
            </p>
            <p>Motor: Core v1.0.0</p>
            <p>Datos: Config v1.2.0 (ES)</p>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex h-screen flex-1 flex-col overflow-hidden">
        {/* Top Bar (Mobile Header usually, or Breadcrumbs) */}
        <header className="flex h-14 flex-shrink-0 items-center justify-between border-b border-slate-200 bg-white px-6">
          <h2 className="font-semibold text-slate-800">
            {activeTemplate.name}
          </h2>
          <Button variant="ghost" onClick={resetSelections} className="text-sm">
            Reiniciar
          </Button>
        </header>

        <div className="flex flex-1 flex-col overflow-hidden md:flex-row">
          {/* Form Section (Scrollable) */}
          <div className="flex-1 space-y-8 overflow-y-auto p-6 pb-24">
            {activeTemplate.sections.map((section) => (
              <section key={section.id}>
                <SectionHeader title={section.title} />
                <div className="flex flex-wrap gap-2">
                  {section.options.map((option) => {
                    const isSelected =
                      selections[section.id]?.includes(option.id) || false;
                    return (
                      <Chip
                        key={option.id}
                        label={option.label}
                        selected={isSelected}
                        onClick={() =>
                          toggleOption(section.id, option.id, section.type)
                        }
                      />
                    );
                  })}
                </div>
              </section>
            ))}
          </div>

          {/* Preview Section (Fixed on Desktop, Bottom on Mobile usually but here side-by-side) */}
          <div className="flex h-[50vh] w-full flex-col border-l border-t border-slate-200 bg-slate-50 md:h-auto md:w-[450px] md:border-t-0">
            <div className="flex items-center justify-between border-b border-slate-200 bg-white p-4">
              <h3 className="font-semibold text-slate-700">Registro en Vivo</h3>
              <div className="flex gap-2">
                {/* AI Magic Button */}
                <Button
                  variant="secondary"
                  onClick={handlePolish}
                  disabled={!generatedText || isThinking}
                  className="h-8 px-3 py-1 text-xs"
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

            <div className="flex-1 overflow-y-auto p-4">
              <Card className="h-full whitespace-pre-wrap border-slate-200 bg-white p-4 font-mono text-sm leading-relaxed text-slate-700 shadow-none">
                {generatedText || (
                  <span className="italic text-slate-400">
                    Selecciona opciones para generar la nota...
                  </span>
                )}
              </Card>
            </div>

            <div className="border-t border-slate-200 bg-white p-4">
              <Button
                onClick={handleCopy}
                className="w-full"
                disabled={!generatedText}
              >
                {copyFeedback ? '¡Copiado al portapapeles!' : 'Copiar Registro'}
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
