"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const car_route_1 = require("../modules/car/car.route");
const order_route_1 = require("../modules/order/order.route");
const auth_route_1 = require("../modules/auth/auth.route");
const user_route_1 = require("../modules/user/user.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/auth',
        route: auth_route_1.AuthRoutes,
    },
    {
        path: '/user',
        route: user_route_1.UserRoute,
    },
    {
        path: '/cars',
        route: car_route_1.CarRoute,
    },
    {
        path: '/orders',
        route: order_route_1.OrderRoute,
    },
];
moduleRoutes.forEach((route) => {
    router.use(route.path, route.route);
});
exports.default = router;
