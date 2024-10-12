import { FindAllResponse, GetOneParams } from '../common';

export interface OperationalSetting {
  _id: string;
  name: string;
  status: 'opening' | 'closed';
  createdAt: Date;
  description?: string;
  userIds?: string[] /** The user associated with the order. */;
}

export interface FindAllOperationalSettingResponse extends FindAllResponse<OperationalSetting> {}

export interface CreateOneOperationalSettingParams extends Pick<OperationalSetting, 'name'> {}

export interface CreateOneOperationalSettingResponse extends OperationalSetting {}

export interface UpdateOneOperationalSettingParams extends Partial<OperationalSetting> {}

export interface UpdateOneOperationalSettingResponse extends OperationalSetting {}

export interface DeleteOneOperationalSettingParams extends GetOneParams {}

export interface DeleteOneOperationalSettingResponse {
  result: number;
}
