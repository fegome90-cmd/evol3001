export interface Option {
  id: string;
  label: string; // The UI text (e.g., "Alert")
  value: string; // The output text (e.g., "patient is alert and oriented")
  isDefault?: boolean;
}

export interface Section {
  id: string;
  title: string;
  type: 'single' | 'multi'; // Radio vs Checkbox behavior
  options: Option[];
}

export interface Template {
  id: string;
  name: string;
  category: string;
  sections: Section[];
}
