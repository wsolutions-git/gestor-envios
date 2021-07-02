const catchAsyncForMiddleware = (fn: (arg0: any, arg1: any, arg2: any) => Promise<any>) => {
    return (req: any, res: any, next: any) => {
        fn(req, res, next).catch((err: any) => {
            console.error("Catch async error");
            next(err);
        });
    };
};

export default catchAsyncForMiddleware;
