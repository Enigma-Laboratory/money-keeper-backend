import { BadRequestError } from '@/errors';
import OrderModel from '@/models/order.model';
import { removeFieldsNotUse } from '@/shared/transformedData';
import { FindAllOrderParams, FindAllOrderResponse, InternalServerError, Order } from '@enigma-laboratory/shared';
import { OrderValidation } from '../validation';

export async function getAllOrders(params: FindAllOrderParams): Promise<FindAllOrderResponse> {
  try {
    const validate = OrderValidation.instance.getAllOrderValidate(params);
    if (validate.error) throw new BadRequestError(validate.error.message);

    const { sorters, page, pageSize, start, end } = params;
    const sortOptions: Record<string, any> = {};

    if (sorters) {
      sorters.forEach(sorter => {
        const [field, orderBy] = sorter.split(':');
        sortOptions[field] = orderBy === 'desc' ? -1 : 1;
      });
    }

    const query = OrderModel.find().sort(sortOptions);

    if (start || end) {
      const dateQuery: { $gte?: Date; $lte?: Date } = {};
      if (start) dateQuery.$gte = start;
      if (end) dateQuery.$lte = end;
      query.where('createdAt', dateQuery);
    }
    if (page && pageSize) {
      const skip = (page - 1) * pageSize;
      query.skip(skip).limit(pageSize);
    }

    const orders = await query.lean().exec();
    const totalOrders = await OrderModel.countDocuments();

    const convertOrder: Order[] = orders.map(order => removeFieldsNotUse(order));

    return {
      count: totalOrders,
      rows: convertOrder,
    };
  } catch (error: any) {
    throw new InternalServerError(error.message);
  }
}
