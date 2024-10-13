import * as OperationalSettingComponent from '@/components/operationalSettings';
import express from 'express';

const route = express.Router();

/**
 * post /OperationalSettings
 * @summary post one operational setting
 *
 * @tags OperationalSettings
 *
 * @security BearerAuth
 *
 **
 * @return {OperationalSetting} 200 - Return operational setting by id - application/json
 * @return {Error} default - Unexpected error - application/json
 */
route.post('/', OperationalSettingComponent.createOneOperationalSettingHandler);

/**
 * get /OperationalSettings
 * @summary Get list of all operational setting
 *
 * @tags OperationalSettings
 *
 * @security BearerAuth
 *
 **
 * @return {OperationalSettings} 200 - Return operational setting - application/json
 * @return {Error} default - Unexpected error - application/json
 */
route.get('/', OperationalSettingComponent.getAllOperationalSettingHandler);

/**
 * put /OperationalSettings
 * @summary update operational setting
 *
 * @tags OperationalSettings
 *
 * @security BearerAuth
 *
 **
 * @return {OperationalSettings} 200 - Return operational setting - application/json
 * @return {Error} default - Unexpected error - application/json
 */
route.put('/', OperationalSettingComponent.updateOperationalStatusHandler);

/**
 * delete /OperationalSettings/{id}
 * @summary delete an operational setting
 *
 * @tags OperationalSettings
 *
 * @security BearerAuth
 *
 * @param {string} id.path.required - operational setting id
 * @return {void} 204 - No content
 * @return {Error} default - Unexpected error - application/json
 */
route.delete('/:id', OperationalSettingComponent.deleteOperationalSettingHandler);

export default route;
