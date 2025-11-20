import { Template } from '@repo/types';

/**
 * The Engine is responsible for deterministic text generation.
 * It accepts a Template and a Map of selections, and returns a string.
 * No UI logic allowed here.
 */
export class TextEngine {
  static compile(
    template: Template,
    selections: Record<string, string[]>
  ): string {
    const outputParts: string[] = [];

    // Iterate through sections in order
    for (const section of template.sections) {
      const selectedOptionIds = selections[section.id];

      if (!selectedOptionIds || selectedOptionIds.length === 0) {
        continue;
      }

      // Map IDs back to the full Option objects
      const activeOptions = section.options.filter((opt) =>
        selectedOptionIds.includes(opt.id)
      );

      if (activeOptions.length === 0) continue;

      // Compile text for this section
      const texts = activeOptions
        .map((opt) => opt.value)
        .filter((t) => t.trim() !== '');

      if (texts.length > 0) {
        // Basic grammar construction: Join with commas, end with period if needed
        // Note: A more advanced engine might handle sentence structure better,
        // but the AI Polish feature will handle the final smoothing.
        const sectionText = texts.join(', ');
        outputParts.push(`${section.title}: ${sectionText}.`);
      }
    }

    return outputParts.join('\n\n');
  }
}
