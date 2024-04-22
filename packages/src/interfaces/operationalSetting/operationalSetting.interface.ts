import { FindAllResponse, GetOneParams } from '../common';

export interface OperationalSetting {
  _id: string;
  group: string;
}

export interface FindAllOperationalSettingResponse extends FindAllResponse<OperationalSetting> {}

export interface CreateOneOperationalSettingParams extends Pick<OperationalSetting, 'group'> {}

export interface CreateOneOperationalSettingResponse extends OperationalSetting {}

export interface UpdateOneOperationalSettingParams extends Partial<OperationalSetting> {}

export interface UpdateOneOperationalSettingResponse extends OperationalSetting {}

export interface DeleteOneOperationalSettingParams extends GetOneParams {}

export interface DeleteOneOperationalSettingResponse {
  result: number;
}
