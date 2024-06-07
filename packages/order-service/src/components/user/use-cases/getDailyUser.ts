import UserModel from '@/models/user.model';
import {
  BadRequestError,
  FindAllDailyUserParams,
  FindAllDailyUserResponse,
  InternalServerError,
} from '@enigma-laboratory/shared';

import { UserValidation } from '../validation';

export async function getDailyUser(params: FindAllDailyUserParams): Promise<FindAllDailyUserResponse> {
  try {
    const validate = UserValidation.instance.getDailyUserValidate(params);
    if (validate.error) throw new BadRequestError(validate.error.message);

    // Get all users within the specified date range
    const users = await UserModel.find(
      {
        createdAt: { $gte: params.start, $lte: params.end },
      },
      'createdAt',
    )
      .lean()
      .exec();

    // Initialize map to store daily user counts
    const dailyUserMap = new Map<string, number>();

    // Loop through each date in the specified range
    for (let date = params.start; date <= params.end; date.setDate(date.getDate() + 1)) {
      const dateString = date.toDateString();

      // Count users registered on the current date
      const usersForDate = users.filter(user => new Date(user.createdAt).toDateString() === dateString);
      const userCount = usersForDate.length;

      // Store user count in the map
      dailyUserMap.set(dateString, userCount);
    }

    // Convert map to array of objects
    const dailyUsers: { date: Date; value: number }[] = [];
    dailyUserMap.forEach((value, date) => dailyUsers.push({ date: new Date(date), value }));

    // Calculate total sum of daily user counts
    const total = dailyUsers.reduce((acc, daily) => acc + daily.value, 0);

    // Calculate trend (percentage change in total users)
    let trend = 0;
    if (dailyUsers.length > 1) {
      const previousTotal = dailyUsers[dailyUsers.length - 2].value;
      if (previousTotal !== 0) {
        trend = Math.round(((total - previousTotal) / previousTotal) * 100);
      }
    }

    // Return the response with total and trend
    return {
      total,
      data: dailyUsers,
      trend,
    };
  } catch (error: any) {
    throw new InternalServerError(error.message);
  }
}
