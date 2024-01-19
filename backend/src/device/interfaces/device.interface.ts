import { Document } from 'mongoose';

export interface Device extends Document {
  readonly _id: string;
  userId: string;
  name: string;
  password: string;
  selected: boolean;
  templateId: string;
  templateName: string;
  createdAt: Date;
  updatedAt: Date;
}
