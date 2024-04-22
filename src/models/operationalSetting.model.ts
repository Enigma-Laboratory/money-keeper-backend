import { Schema, Document, model } from 'mongoose';

export interface OperationalSetting extends Document {
  group: string;
}
export const operationalSettingSchema = new Schema(
  { group: { type: String, required: true } },
  {
    timestamps: true,
  },
);

const OperationalSettingModel = model<OperationalSetting>('Operational_settings', operationalSettingSchema);

export default OperationalSettingModel;
