import {
  CreateOneOperationalSettingParams,
  CreateOneOperationalSettingResponse,
  UpdateOneOperationalSettingParams,
  UpdateOneOperationalSettingResponse,
} from '@enigma-laboratory/shared';
import Joi, { ValidationResult } from 'joi';

export class OperationalSettingValidation {
  private static _instance: OperationalSettingValidation;
  public static get instance(): OperationalSettingValidation {
    if (!OperationalSettingValidation._instance) {
      this._instance = new OperationalSettingValidation();
    }
    return this._instance;
  }

  public postAllGroupValidate(
    params: CreateOneOperationalSettingParams,
  ): ValidationResult<CreateOneOperationalSettingResponse> {
    const schema = Joi.object({
      name: Joi.string().required(),
      userIds: Joi.array().items(Joi.string()).optional(),
      description: Joi.string().optional(),
    });
    return schema.validate(params);
  }

  public putOperationalSettingValidate(
    params: UpdateOneOperationalSettingParams,
  ): ValidationResult<UpdateOneOperationalSettingResponse> {
    const schema = Joi.object({
      _id: Joi.string().required(),
      name: Joi.string().optional(),
      status: Joi.string().valid('opening', 'closed').required(),
      userIds: Joi.array().items(Joi.string()).optional(),
      description: Joi.string().optional(),
    });
    return schema.validate(params);
  }
}
