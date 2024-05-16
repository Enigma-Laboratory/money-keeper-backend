import { Document, Schema, Types } from 'mongoose';

export interface FinalSettlement extends Document {
  operationalSettingId: Types.ObjectId;
  orderIds: Types.ObjectId[];
}

const FinalSettlementModel = new Schema(
  {
    operationalSettingId: {
      type: Schema.Types.ObjectId,
      ref: 'OperationalSetting',
      required: true,
    },
    orderIds: [{ type: Schema.Types.ObjectId, ref: 'Order' }],
  },
  { timestamps: true },
);

export default FinalSettlementModel;
