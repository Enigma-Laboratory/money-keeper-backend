import { Document, Schema, model } from 'mongoose';

export interface OperationalSetting extends Document {
  group: string;
  status: 'opening' | 'closed';
}
export const operationalSettingSchema = new Schema(
  {
    group: { type: String, required: true },
    status: { type: String, required: true, enum: ['opening', 'closed'] },
  },
  {
    timestamps: true,
  },
);

const OperationalSettingModel = model<OperationalSetting>('Operational_settings', operationalSettingSchema);

export default OperationalSettingModel;
