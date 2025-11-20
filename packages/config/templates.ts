import { Template } from '@repo/types';

export const NURSING_TEMPLATES: Template[] = [
  {
    id: 'shift_assessment',
    name: 'Valoración de Turno',
    category: 'Rutina',
    sections: [
      {
        id: 'neuro',
        title: 'Neurológico',
        type: 'single',
        options: [
          {
            id: 'clote',
            label: 'CLOTE',
            value: 'Conciente, Lucido y Orientado en Tiempo y Espacio',
            isDefault: true,
          },
          {
            id: 'confused',
            label: 'Confuso',
            value: 'Paciente se muestra confuso',
          },
          { id: 'sedated', label: 'Sedado', value: 'Paciente bajo sedación' },
          {
            id: 'lethargic',
            label: 'Letárgico',
            value: 'Paciente letárgico pero responde a estímulos',
          },
        ],
      },
      {
        id: 'cardio',
        title: 'Cardiovascular',
        type: 'multi',
        options: [
          { id: 'nsr', label: 'RSN', value: 'Ritmo Sinusal Normal en monitor' },
          {
            id: 'no_edema',
            label: 'Sin Edema',
            value: 'sin edema periférico notable',
          },
          {
            id: 'edema_1',
            label: 'Edema +1',
            value: 'edema con fóvea +1 en extremidades inferiores',
          },
          {
            id: 'cap_refill',
            label: 'Llenado Cap. <3s',
            value: 'llenado capilar < 3 segundos',
          },
          {
            id: 'chest_pain',
            label: 'Dolor Torácico',
            value: 'refiere dolor torácico',
          },
        ],
      },
      {
        id: 'resp',
        title: 'Respiratorio',
        type: 'multi',
        options: [
          {
            id: 'clear',
            label: 'Campos Limpios',
            value: 'campos pulmonares limpios a la auscultación bilateral',
          },
          {
            id: 'diminished',
            label: 'Disminuido',
            value: 'ruidos respiratorios disminuidos en bases',
          },
          {
            id: 'wheeze',
            label: 'Sibilancias',
            value: 'se aprecian sibilancias espiratorias',
          },
          {
            id: 'room_air',
            label: 'Aire Ambiente',
            value: 'saturando adecuadamente al aire ambiente',
          },
          {
            id: 'o2_nc',
            label: 'O2 CN',
            value: 'con oxígeno suplementario por cánula nasal a 2L',
          },
        ],
      },
      {
        id: 'gi',
        title: 'Gastrointestinal',
        type: 'multi',
        options: [
          {
            id: 'bs_active',
            label: 'RHA Presentes',
            value: 'ruidos hidroaéreos presentes en los 4 cuadrantes',
          },
          { id: 'npo', label: 'NPO', value: 'paciente en ayuno (NPO)' },
          {
            id: 'soft',
            label: 'Blando/Depresible',
            value: 'abdomen blando y depresible, no doloroso',
          },
          { id: 'distended', label: 'Distendido', value: 'abdomen distendido' },
        ],
      },
      {
        id: 'pain',
        title: 'Dolor',
        type: 'single',
        options: [
          {
            id: 'denies',
            label: 'Niega',
            value: 'niega dolor en este momento',
          },
          {
            id: 'managed',
            label: 'Controlado',
            value: 'dolor controlado con el régimen actual de analgésicos',
          },
          {
            id: 'severe',
            label: 'Severo',
            value: 'refiere dolor severo 8/10 EVA',
          },
        ],
      },
    ],
  },
  {
    id: 'wound_care',
    name: 'Curación de Heridas',
    category: 'Intervención',
    sections: [
      {
        id: 'location',
        title: 'Ubicación',
        type: 'single',
        options: [
          {
            id: 'sacrum',
            label: 'Sacro',
            value: 'lesión ubicada en zona sacra',
          },
          {
            id: 'heel_l',
            label: 'Talón Izq',
            value: 'lesión en talón izquierdo',
          },
          {
            id: 'heel_r',
            label: 'Talón Der',
            value: 'lesión en talón derecho',
          },
        ],
      },
      {
        id: 'appearance',
        title: 'Apariencia',
        type: 'multi',
        options: [
          {
            id: 'pink',
            label: 'Rosado/Granulando',
            value: 'lecho de la herida rosado y con tejido de granulación',
          },
          {
            id: 'slough',
            label: 'Esfacelo',
            value: 'presencia de esfacelo amarillo',
          },
          {
            id: 'necrotic',
            label: 'Necrótico',
            value: 'tejido necrótico observado',
          },
          {
            id: 'erythema',
            label: 'Eritema',
            value: 'piel perilesional eritematosa',
          },
        ],
      },
      {
        id: 'treatment',
        title: 'Tratamiento',
        type: 'multi',
        options: [
          {
            id: 'clean',
            label: 'Limpieza',
            value: 'limpieza con solución salina normal',
          },
          {
            id: 'dry_dressing',
            label: 'Apósito Seco',
            value: 'cubierto con apósito estéril seco',
          },
          {
            id: 'foam',
            label: 'Espuma',
            value: 'aplicación de apósito de espuma',
          },
          {
            id: 'barrier',
            label: 'Crema Barrera',
            value: 'aplicación de crema barrera en bordes',
          },
        ],
      },
    ],
  },
  {
    id: 'psych_progress',
    name: 'Evolución Psiquiátrica',
    category: 'Especialidad',
    sections: [
      {
        id: 'mood',
        title: 'Estado de Ánimo/Afecto',
        type: 'multi',
        options: [
          { id: 'calm', label: 'Tranquilo', value: 'ánimo tranquilo' },
          { id: 'anxious', label: 'Ansioso', value: 'se muestra ansioso' },
          { id: 'labile', label: 'Lábil', value: 'ánimo lábil' },
          { id: 'flat', label: 'Afecto Plano', value: 'afecto aplanado' },
        ],
      },
      {
        id: 'behavior',
        title: 'Comportamiento',
        type: 'multi',
        options: [
          {
            id: 'cooperative',
            label: 'Cooperador',
            value: 'cooperador con la atención',
          },
          {
            id: 'guarded',
            label: 'Suspicaz',
            value: 'actitud suspicaz durante la interacción',
          },
          {
            id: 'responding',
            label: 'Alucinaciones',
            value: 'parece responder a estímulos internos',
          },
          {
            id: 'pacing',
            label: 'Deambula',
            value: 'deambula por el pasillo frecuentemente',
          },
        ],
      },
      {
        id: 'safety',
        title: 'Seguridad',
        type: 'multi',
        options: [
          {
            id: 'contract',
            label: 'Contrato Seguridad',
            value: 'establece compromiso de seguridad',
          },
          {
            id: 'obs_15',
            label: 'Obs 15min',
            value: 'con indicación de observación cada 15 minutos',
          },
          {
            id: 'no_si_hi',
            label: 'Niega IS/IH',
            value: 'niega ideación suicida o ideación homicida',
          },
        ],
      },
    ],
  },
];
