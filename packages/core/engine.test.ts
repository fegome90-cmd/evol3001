import { describe, it, expect } from 'vitest';
import { TextEngine } from './engine';
import { Template } from '@repo/types';

describe('TextEngine', () => {
  describe('compile', () => {
    it('should compile a template with selections', () => {
      const template: Template = {
        id: 'test-template',
        name: 'Test Template',
        category: 'test',
        sections: [
          {
            id: 'section1',
            title: 'Section 1',
            type: 'single',
            options: [
              { id: 'opt1', label: 'Option 1', value: 'Option 1' },
              { id: 'opt2', label: 'Option 2', value: 'Option 2' }
            ]
          }
        ]
      };

      const selections = {
        section1: ['opt1']
      };

      const result = TextEngine.compile(template, selections);
      expect(result).toBe('Section 1: Option 1.');
    });

    it('should handle multiple selections in multi-select sections', () => {
      const template: Template = {
        id: 'test-template',
        name: 'Test Template',
        category: 'test',
        sections: [
          {
            id: 'section1',
            title: 'Symptoms',
            type: 'multi',
            options: [
              { id: 'opt1', label: 'Fever', value: 'fever' },
              { id: 'opt2', label: 'Cough', value: 'cough' },
              { id: 'opt3', label: 'Fatigue', value: 'fatigue' }
            ]
          }
        ]
      };

      const selections = {
        section1: ['opt1', 'opt2']
      };

      const result = TextEngine.compile(template, selections);
      expect(result).toBe('Symptoms: fever, cough.');
    });

    it('should skip sections with no selections', () => {
      const template: Template = {
        id: 'test-template',
        name: 'Test Template',
        category: 'test',
        sections: [
          {
            id: 'section1',
            title: 'Section 1',
            type: 'single',
            options: [
              { id: 'opt1', label: 'Option 1', value: 'Option 1' }
            ]
          },
          {
            id: 'section2',
            title: 'Section 2',
            type: 'single',
            options: [
              { id: 'opt2', label: 'Option 2', value: 'Option 2' }
            ]
          }
        ]
      };

      const selections = {
        section1: ['opt1']
      };

      const result = TextEngine.compile(template, selections);
      expect(result).toBe('Section 1: Option 1.');
    });

    it('should handle multiple sections with selections', () => {
      const template: Template = {
        id: 'test-template',
        name: 'Test Template',
        category: 'test',
        sections: [
          {
            id: 'section1',
            title: 'Section 1',
            type: 'single',
            options: [
              { id: 'opt1', label: 'Option 1', value: 'Option 1' }
            ]
          },
          {
            id: 'section2',
            title: 'Section 2',
            type: 'single',
            options: [
              { id: 'opt2', label: 'Option 2', value: 'Option 2' }
            ]
          }
        ]
      };

      const selections = {
        section1: ['opt1'],
        section2: ['opt2']
      };

      const result = TextEngine.compile(template, selections);
      expect(result).toBe('Section 1: Option 1.\n\nSection 2: Option 2.');
    });

    it('should return empty string when no selections are made', () => {
      const template: Template = {
        id: 'test-template',
        name: 'Test Template',
        category: 'test',
        sections: [
          {
            id: 'section1',
            title: 'Section 1',
            type: 'single',
            options: [
              { id: 'opt1', label: 'Option 1', value: 'Option 1' }
            ]
          }
        ]
      };

      const selections = {};

      const result = TextEngine.compile(template, selections);
      expect(result).toBe('');
    });

    it('should filter out empty option values', () => {
      const template: Template = {
        id: 'test-template',
        name: 'Test Template',
        category: 'test',
        sections: [
          {
            id: 'section1',
            title: 'Section 1',
            type: 'multi',
            options: [
              { id: 'opt1', label: 'Valid option', value: 'Valid option' },
              { id: 'opt2', label: 'Empty', value: '   ' },
              { id: 'opt3', label: 'Another valid', value: 'Another valid' }
            ]
          }
        ]
      };

      const selections = {
        section1: ['opt1', 'opt2', 'opt3']
      };

      const result = TextEngine.compile(template, selections);
      expect(result).toBe('Section 1: Valid option, Another valid.');
    });
  });
});
