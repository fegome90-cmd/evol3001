import { Template } from '../core/types';

export const NURSING_TEMPLATES: Template[] = [
  {
    id: 'shift_assessment',
    name: 'Shift Assessment',
    category: 'Routine',
    sections: [
      {
        id: 'neuro',
        title: 'Neurological',
        type: 'single',
        options: [
          { id: 'aaox3', label: 'AAOx3', value: 'Alert and oriented x3', isDefault: true },
          { id: 'confused', label: 'Confused', value: 'Patient is confused' },
          { id: 'sedated', label: 'Sedated', value: 'Patient is sedated' },
          { id: 'lethargic', label: 'Lethargic', value: 'Patient is lethargic but rousable' }
        ]
      },
      {
        id: 'cardio',
        title: 'Cardiovascular',
        type: 'multi',
        options: [
          { id: 'nsr', label: 'NSR', value: 'Normal Sinus Rhythm on monitor' },
          { id: 'no_edema', label: 'No Edema', value: 'no peripheral edema noted' },
          { id: 'edema_1', label: '+1 Edema', value: '+1 pitting edema to lower extremities' },
          { id: 'cap_refill', label: 'Cap Refill <3s', value: 'capillary refill < 3 seconds' },
          { id: 'chest_pain', label: 'Chest Pain', value: 'complains of chest pain' }
        ]
      },
      {
        id: 'resp',
        title: 'Respiratory',
        type: 'multi',
        options: [
          { id: 'clear', label: 'Lungs Clear', value: 'lungs clear to auscultation bilaterally' },
          { id: 'diminished', label: 'Diminished', value: 'diminished breath sounds in bases' },
          { id: 'wheeze', label: 'Wheezing', value: 'expiratory wheezes noted' },
          { id: 'room_air', label: 'Room Air', value: 'saturating well on room air' },
          { id: 'o2_nc', label: 'O2 NC', value: 'on 2L NC' }
        ]
      },
      {
        id: 'gi',
        title: 'Gastrointestinal',
        type: 'multi',
        options: [
          { id: 'bs_active', label: 'BS Active', value: 'bowel sounds active x4 quadrants' },
          { id: 'npo', label: 'NPO', value: 'patient is NPO' },
          { id: 'soft', label: 'Abd Soft', value: 'abdomen soft and non-tender' },
          { id: 'distended', label: 'Distended', value: 'abdomen distended' }
        ]
      },
      {
        id: 'pain',
        title: 'Pain',
        type: 'single',
        options: [
          { id: 'denies', label: 'Denies', value: 'denies pain at this time' },
          { id: 'managed', label: 'Managed', value: 'pain managed with current medication regimen' },
          { id: 'severe', label: 'Severe', value: 'reports severe pain 8/10' }
        ]
      }
    ]
  },
  {
    id: 'wound_care',
    name: 'Wound Care',
    category: 'Intervention',
    sections: [
      {
        id: 'location',
        title: 'Location',
        type: 'single',
        options: [
          { id: 'sacrum', label: 'Sacrum', value: 'wound located on sacrum' },
          { id: 'heel_l', label: 'L Heel', value: 'wound located on left heel' },
          { id: 'heel_r', label: 'R Heel', value: 'wound located on right heel' }
        ]
      },
      {
        id: 'appearance',
        title: 'Appearance',
        type: 'multi',
        options: [
          { id: 'pink', label: 'Pink/Granulating', value: 'wound bed pink and granulating' },
          { id: 'slough', label: 'Slough', value: 'yellow slough present' },
          { id: 'necrotic', label: 'Necrotic', value: 'necrotic tissue observed' },
          { id: 'erythema', label: 'Erythema', value: 'surrounding skin erythematous' }
        ]
      },
      {
        id: 'treatment',
        title: 'Treatment',
        type: 'multi',
        options: [
          { id: 'clean', label: 'Cleansed', value: 'cleansed with normal saline' },
          { id: 'dry_dressing', label: 'Dry Dressing', value: 'covered with dry sterile dressing' },
          { id: 'foam', label: 'Foam', value: 'foam dressing applied' },
          { id: 'barrier', label: 'Barrier Cream', value: 'barrier cream applied to perimeter' }
        ]
      }
    ]
  },
  {
    id: 'psych_progress',
    name: 'Psych Progress Note',
    category: 'Specialty',
    sections: [
      {
        id: 'mood',
        title: 'Mood/Affect',
        type: 'multi',
        options: [
          { id: 'calm', label: 'Calm', value: 'mood is calm' },
          { id: 'anxious', label: 'Anxious', value: 'appears anxious' },
          { id: 'labile', label: 'Labile', value: 'mood is labile' },
          { id: 'flat', label: 'Flat Affect', value: 'affect is flat' }
        ]
      },
      {
        id: 'behavior',
        title: 'Behavior',
        type: 'multi',
        options: [
          { id: 'cooperative', label: 'Cooperative', value: 'cooperative with care' },
          { id: 'guarded', label: 'Guarded', value: 'guarded during interaction' },
          { id: 'responding', label: 'Responding to Internal Stimuli', value: 'appears to be responding to internal stimuli' },
          { id: 'pacing', label: 'Pacing', value: 'pacing in hallway' }
        ]
      },
      {
        id: 'safety',
        title: 'Safety',
        type: 'multi',
        options: [
          { id: 'contract', label: 'Safety Contract', value: 'contracts for safety' },
          { id: 'obs_15', label: '15min Obs', value: 'on 15 minute observations' },
          { id: 'no_si_hi', label: 'No SI/HI', value: 'denies suicidal or homicidal ideation' }
        ]
      }
    ]
  }
];
