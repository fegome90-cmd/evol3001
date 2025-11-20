import { SystemCategory } from '@repo/types';

export const MEDICAL_SCHEMA: SystemCategory[] = [
  {
    id: 'vital_signs',
    title: 'Signos Vitales',
    parameters: [
      {
        id: 'bp',
        label: 'P. Arterial (mmHg)',
        placeholder: '120/80',
        defaultValue: '',
      },
      {
        id: 'hr',
        label: 'F. Cardíaca (lpm)',
        placeholder: '60-100',
        defaultValue: '',
      },
      {
        id: 'rr',
        label: 'F. Respiratoria (rpm)',
        placeholder: '12-20',
        defaultValue: '',
      },
      {
        id: 'temp',
        label: 'Temperatura (°C)',
        placeholder: '36.5',
        defaultValue: '',
      },
      {
        id: 'o2',
        label: 'Saturación O2 (%)',
        placeholder: '>95',
        defaultValue: '',
      },
      {
        id: 'pain',
        label: 'Escala Dolor (0-10)',
        placeholder: '0',
        defaultValue: '0',
      },
    ],
  },
  {
    id: 'anamnesis',
    title: 'Anamnesis',
    parameters: [
      {
        id: 'chief_complaint',
        label: 'Motivo de Consulta',
        placeholder: 'Describe el motivo principal...',
        defaultValue: '',
      },
      {
        id: 'hpi',
        label: 'Historia Enfermedad Actual',
        placeholder: 'Detalles cronológicos...',
        defaultValue: '',
      },
      {
        id: 'allergies',
        label: 'Alergias',
        placeholder: 'Niega o listar...',
        defaultValue: 'Niega alergias conocidas',
      },
    ],
  },
];
