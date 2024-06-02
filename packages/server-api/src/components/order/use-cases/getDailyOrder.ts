import OrderModel from '@/models/order.model';
import {
  BadRequestError,
  FindAllDailyOrderParams,
  FindAllDailyOrderResponse,
  InternalServerError,
} from '@enigma-laboratory/shared';

import { OrderValidation } from '../validation';

export async function getDailyOrder(params: FindAllDailyOrderParams): Promise<FindAllDailyOrderResponse> {
  try {
    const validate = OrderValidation.instance.getDailyOrderValidate(params);
    if (validate.error) throw new BadRequestError(validate.error.message);

    // Get all orders within the specified date range
    const orders = await OrderModel.find(
      {
        createdOrderAt: { $gte: params.start, $lte: params.end },
      },
      'createdOrderAt',
    )
      .lean()
      .exec();

    // Initialize map to store daily order counts
    const dailyOrderMap = new Map<string, number>();

    // Loop through each date in the specified range
    for (let date = params.start; date <= params.end; date.setDate(date.getDate() + 1)) {
      const dateString = date.toDateString();

      // Count orders for the current date
      const ordersForDate = orders.filter(order => new Date(order.createdOrderAt).toDateString() === dateString);
      const orderCount = ordersForDate.length;

      // Store order count in the map
      dailyOrderMap.set(dateString, orderCount);
    }

    // Convert map to array of objects
    const dailyOrders: { date: Date; value: number }[] = [];
    dailyOrderMap.forEach((value, date) => dailyOrders.push({ date: new Date(date), value }));

    // Calculate total sum of daily order counts
    const total = dailyOrders.reduce((acc, daily) => acc + daily.value, 0);

    // Calculate trend (percentage change in total orders)
    let trend = 0;
    if (dailyOrders.length > 1) {
      const previousTotal = dailyOrders[dailyOrders.length - 2].value;
      if (previousTotal !== 0) {
        trend = Math.round(((total - previousTotal) / previousTotal) * 100);
      }
    }
    // Return the response with total and trend
    return {
      total,
      data: dailyOrders,
      trend,
    };
  } catch (error: any) {
    throw new InternalServerError(error.message);
  }
}
