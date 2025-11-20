import { describe, it, expect } from 'vitest';
import { TextEngine } from './engine';
import { Template } from '@repo/types';

describe('TextEngine', () => {
  it('should compile a basic template selection', () => {
    const mockTemplate: Template = {
      id: 'test',
      name: 'Test Template',
      category: 'Test',
      sections: [
        {
          id: 's1',
          title: 'Section 1',
          type: 'single',
          options: [
            { id: 'o1', label: 'Opt 1', value: 'Value 1' }
          ]
        }
      ]
    };

    const selections = {
      's1': ['o1']
    };

    const result = TextEngine.compile(mockTemplate, selections);
    expect(result).toBe('Section 1: Value 1.');
  });

  it('should handle multiple sections', () => {
    const mockTemplate: Template = {
      id: 'test',
      name: 'Test Template',
      category: 'Test',
      sections: [
        {
          id: 's1',
          title: 'S1',
          type: 'single',
          options: [{ id: 'o1', label: 'L1', value: 'V1' }]
        },
        {
          id: 's2',
          title: 'S2',
          type: 'multi',
          options: [{ id: 'o2', label: 'L2', value: 'V2' }]
        }
      ]
    };

    const selections = {
      's1': ['o1'],
      's2': ['o2']
    };

    const result = TextEngine.compile(mockTemplate, selections);
    expect(result).toContain('S1: V1.');
    expect(result).toContain('S2: V2.');
  });
});
