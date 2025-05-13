// src/app/models/contact.model.ts
export interface Contact {
    id: number;
    first_name: string;
    last_name: string;
    fullname: string;
    prefix?: string;
    job_title?: string;
    gender?: string;
    start_date?: string;
    end_date?: string;
    email?: string;
    phones?: string;
    mails?: string;
    notes?: number;
    country?: string;
  }
  