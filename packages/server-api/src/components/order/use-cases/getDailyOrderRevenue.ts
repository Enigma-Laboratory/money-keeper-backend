import OrderModel from '@/models/order.model';
import {
  BadRequestError,
  FindAllDailyOrderRevenueParams,
  FindAllDailyOrderRevenueResponse,
  InternalServerError,
} from '@enigma-laboratory/shared';

import { OrderValidation } from '../validation';

export async function getDailyOrderRevenue(
  params: FindAllDailyOrderRevenueParams,
): Promise<FindAllDailyOrderRevenueResponse> {
  try {
    const validate = OrderValidation.instance.getDailyOrderRevenueValidate(params);
    if (validate.error) throw new BadRequestError(validate.error.message);

    // Get all orders within the specified date range
    const orders = await OrderModel.find(
      {
        createdOrderAt: { $gte: params.start, $lte: params.end },
      },
      'createdOrderAt products.price',
    )
      .lean()
      .exec();

    // Initialize map to store daily revenue
    const dailyRevenueMap = new Map<string, number>();

    // Loop through each date in the specified range
    for (let date = params.start; date <= params.end; date.setDate(date.getDate() + 1)) {
      const dateString = date.toDateString();
      let revenue = 0;

      // If orders exist for the current date, calculate revenue
      const ordersForDate = orders.filter(order => new Date(order.createdOrderAt).toDateString() === dateString);
      if (ordersForDate.length > 0) {
        revenue = ordersForDate.reduce((acc, order) => {
          return acc + order.products.reduce((productAcc, product) => productAcc + product.price, 0);
        }, 0);
      }

      // Store revenue in the map
      dailyRevenueMap.set(dateString, revenue);
    }

    // Convert map to array of objects
    const dailyRevenue: { date: Date; value: number }[] = [];
    dailyRevenueMap.forEach((value, date) => dailyRevenue.push({ date: new Date(date), value }));

    // Calculate total sum of daily revenue values
    const total = dailyRevenue.reduce((acc, daily) => acc + daily.value, 0);

    // Calculate trend (percentage change in total revenue)
    let trend = 0;
    if (dailyRevenue.length > 1) {
      const previousTotal = dailyRevenue[dailyRevenue.length - 2].value;
      trend = Math.round(((total - previousTotal) / previousTotal) * 100);
    }

    // Return the response with total and trend
    return {
      total,
      data: dailyRevenue,
      trend,
    };
  } catch (error: any) {
    throw new InternalServerError(error.message);
  }
}
