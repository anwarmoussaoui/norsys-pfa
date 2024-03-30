import { data } from 'jquery';
export interface Absence {
    id: number;
    absenceDate: Date;
    reason: string | null;
    justified: boolean;
    numberOfDays: number;
    notified: string;
    notes: string | null;
  }