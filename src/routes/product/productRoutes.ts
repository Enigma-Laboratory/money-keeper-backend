import express from 'express';
import * as ProductComponent from '@/components/product';

const route = express.Router();

route.post('/create-product', ProductComponent.createProductHandler);

route.get('/get-one-product/:id', ProductComponent.getOneProductHandler);

// route.delete('/:id', ProductComponent.deleteOneProductHandler);

route.get('/all-product', ProductComponent.getAllProductHandler);
export default route;
