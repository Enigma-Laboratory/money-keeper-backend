import { BadRequestError, ConflictError } from '@/errors';
import OrderModel from '@/models/order.model';
import { OrderValidation } from '../validation';
import { CreateOneOrderParams, CreateOneOrderResponse, OrderStatus } from '@/enigma-laboratory/sdk';
import { removeFieldsNotUse } from '@/shared/transformedData';
import OperationalSettingModel from '@/models/operationalSetting.model';

export async function postCreateOneOrder(params: CreateOneOrderParams): Promise<CreateOneOrderResponse> {
  try {
    const validate = OrderValidation.instance.createOneOrderValidate(params);
    if (validate.error) throw new BadRequestError(validate.error.message);

    const operationalSetting = await OperationalSettingModel.findById(params.groupId);

    if (operationalSetting?.status === 'closed') {
      throw new BadRequestError(' The group name is closed');
    }

    const newEvent = {
      ...(!params.event && {
        event: [
          {
            date: new Date(),
            status: OrderStatus.PENDING,
          },
        ],
      }),
    };

    const order = await OrderModel.create({ ...params, ...newEvent });
    if (!order) throw new BadRequestError('Can not create order.');

    return removeFieldsNotUse(order.toJSON());
  } catch (error: any) {
    throw new ConflictError(error.message);
  }
}
