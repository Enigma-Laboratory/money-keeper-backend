import { BadRequestError, FindAllParams } from '@enigma-laboratory/shared';

type QueryParams = {
  sorters?: string;
  page?: string;
  pageSize?: string;
  start?: string;
  end?: string;
};

export function parseQueryParams(query: QueryParams): FindAllParams {
  const params: FindAllParams = {};

  if (query.sorters) {
    try {
      params.sorters = JSON.parse(query.sorters);
    } catch (e) {
      throw new BadRequestError('Invalid format for sorters parameter');
    }
  }

  if (query.page) {
    const page = parseInt(query.page, 10);
    if (isNaN(page) || page <= 0) {
      throw new BadRequestError('Invalid value for page parameter');
    }
    params.page = page;
  }

  if (query.pageSize) {
    const pageSize = parseInt(query.pageSize, 10);
    if (isNaN(pageSize) || pageSize <= 0) {
      throw new BadRequestError('Invalid value for pageSize parameter');
    }
    params.pageSize = pageSize;
  }

  if (query.start) {
    const startDate = new Date(query.start);
    if (isNaN(startDate.getTime())) {
      throw new BadRequestError('Invalid value for start date parameter');
    }
    params.start = startDate;
  }

  if (query.end) {
    const endDate = new Date(query.end);
    if (isNaN(endDate.getTime())) {
      throw new BadRequestError('Invalid value for end date parameter');
    }
    params.end = endDate;
  }

  return params;
}
