import * as mongoose from 'mongoose';
const Types = mongoose.Types;
export const deviceSchema = new mongoose.Schema(
  {
    userId: { type: Types.ObjectId, ref: 'User' },
    name: { type: String, required: true },
    password: { type: String, required: true },
    selected: { type: Boolean, required: true, default: false },
    templateId: { type: String, required: true },
    templateName: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);
