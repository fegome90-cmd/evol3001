import { create } from 'zustand';
import { Template, Section, Option } from '../../packages/core/types';
import { TextEngine } from '../../packages/core/engine';
import { NURSING_TEMPLATES } from '../../packages/config/templates';

interface AppState {
  activeTemplate: Template;
  // selections: Record<sectionId, optionId[]>
  selections: Record<string, string[]>;
  generatedText: string;
  
  // Actions
  setTemplate: (templateId: string) => void;
  toggleOption: (sectionId: string, optionId: string, type: 'single' | 'multi') => void;
  resetSelections: () => void;
  setGeneratedText: (text: string) => void; // Allow manual overwrite or AI update
}

export const useStore = create<AppState>((set, get) => ({
  activeTemplate: NURSING_TEMPLATES[0],
  selections: {},
  generatedText: '',

  setTemplate: (templateId) => {
    const template = NURSING_TEMPLATES.find(t => t.id === templateId);
    if (template) {
      set({ 
        activeTemplate: template, 
        selections: {},
        generatedText: '' 
      });
    }
  },

  toggleOption: (sectionId, optionId, type) => {
    const currentSelections = get().selections;
    const sectionSelections = currentSelections[sectionId] || [];
    let newSectionSelections: string[] = [];

    if (type === 'single') {
      // If clicking the already selected one, unselect it (toggle off). Otherwise, replace.
      if (sectionSelections.includes(optionId)) {
        newSectionSelections = [];
      } else {
        newSectionSelections = [optionId];
      }
    } else {
      // Multi-select
      if (sectionSelections.includes(optionId)) {
        newSectionSelections = sectionSelections.filter(id => id !== optionId);
      } else {
        newSectionSelections = [...sectionSelections, optionId];
      }
    }

    const newSelections = {
      ...currentSelections,
      [sectionId]: newSectionSelections
    };

    // Auto-compile text on change (Reactive)
    const text = TextEngine.compile(get().activeTemplate, newSelections);

    set({ 
      selections: newSelections,
      generatedText: text
    });
  },

  resetSelections: () => {
    set({ selections: {}, generatedText: '' });
  },

  setGeneratedText: (text: string) => {
    set({ generatedText: text });
  }
}));
