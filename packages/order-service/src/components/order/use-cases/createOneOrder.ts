import { CreateApplication } from '@/app';
import { BadRequestError, ConflictError } from '@/errors';
import OperationalSettingModel from '@/models/operationalSetting.model';
import OrderModel from '@/models/order.model';
import { removeFieldsNotUse } from '@/shared/transformedData';
import {
  CreateOneOrderParams,
  CreateOneOrderResponse,
  OrderEvent,
  OrderStatus,
  User,
  uniqueUserIdsByProduct,
} from '@enigma-laboratory/shared';
import { OrderValidation } from '../validation';

export async function postCreateOneOrder(user: User, params: CreateOneOrderParams): Promise<CreateOneOrderResponse> {
  try {
    const validate = OrderValidation.instance.createOneOrderValidate(params);
    if (validate.error) throw new BadRequestError(validate.error.message);

    const operationalSetting = await OperationalSettingModel.findById(params.groupId);

    if (operationalSetting?.status === 'closed') {
      throw new BadRequestError(' The group name is closed');
    }

    const userIds = uniqueUserIdsByProduct(params.products);

    if (!userIds.includes(params.userId)) {
      userIds.push(params.userId);
    }

    const newEvent = {
      usersStatus: userIds.reduce(
        (acc, userId) => {
          acc[userId] = OrderStatus.PROCESSING;
          return acc;
        },
        {} as { [key: string]: OrderStatus },
      ),
      event: userIds.map(userId => ({ userId, date: new Date(), status: OrderStatus.PROCESSING })),
    };

    const order = await OrderModel.create({ ...params, ...newEvent });
    if (!order) throw new BadRequestError('Can not create order.');

    CreateApplication.instance.broadcastEvent(OrderEvent.CREATED, order.toJSON());

    return removeFieldsNotUse(order.toJSON());
  } catch (error: any) {
    throw new ConflictError(error.message);
  }
}
