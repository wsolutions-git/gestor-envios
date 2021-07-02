import express from 'express';
import catchAsyncForMiddleware from '../infrastructure/catchAsyncForMiddleware';
import * as shippingService from './shippingService';
const shippingRouter = express.Router();

shippingRouter.get('/', catchAsyncForMiddleware(async function (req : any, res : any) {
    res.send("ok");
}));

shippingRouter.get('/selectall', catchAsyncForMiddleware(async function (req : any, res : any) {
    const result = shippingService.getAllRegisters();
    res.send(result);
}));


shippingRouter.post('/createshipping', catchAsyncForMiddleware(async function (req : any, res : any) {
    await shippingService.createShipment(req.body).then(function (response) {
        console.log(response);
        res.send(response);
    });

}));
export default shippingRouter;
