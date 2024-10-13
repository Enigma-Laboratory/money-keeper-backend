import { Document, Schema, Types, model } from 'mongoose';

export interface OperationalSetting extends Document {
  name: string;
  status: 'opening' | 'closed';
  createdAt: Date;
}
export const operationalSettingSchema = new Schema(
  {
    name: { type: String, required: true },
    status: { type: String, required: true, enum: ['opening', 'closed'] },
    userIds: [{ type: String, required: true }],
    description: { type: String },
  },
  {
    timestamps: true,
  },
);

const OperationalSettingModel = model<OperationalSetting>('Operational_settings', operationalSettingSchema);

export default OperationalSettingModel;
