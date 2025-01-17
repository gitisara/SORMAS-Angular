export type CardAppearance = 'standard' | 'card' | 'outlined';
export type CardStatus =
  | 'confirmed'
  | 'undetermined'
  | 'completed'
  | 'good'
  | 'critical'
  | 'unclassified'
  | 'selected';
export type CardType =
  | 'sample'
  | 'case'
  | 'case_event'
  | 'case_contact'
  | 'case_task'
  | 'address'
  | 'hospitalization'
  | 'activity'
  | 'source'
  | 'prescription'
  | 'treatment'
  | 'event'
  | 'event_actions'
  | 'additional_tests'
  | 'pathogen_tests'
  | 'person_case'
  | 'person_contact'
  | 'person_event'
  | undefined;
