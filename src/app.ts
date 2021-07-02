import express from "express";
import shippingRouter from "./shipping/shippingRouter";

const app = express();
var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
/* CORS IF NEEDED*/
// app.use((req : any, res : any,next : any) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//     res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
//     next();
// });
app.use("/",shippingRouter);
app.all('*', (req : any, res : any,next : any) => {
    const err = new Error(`Can't find ${req.originalUrl} on this server!`);
    next(err);
});

// Error handler called with next(error)
app.use(function (err: Error, req: any, res: any, next: any) {
    console.error(err.stack)
    res.status(500).json({
        status: err.name,
        message: err.message
    });
})

export default app;

