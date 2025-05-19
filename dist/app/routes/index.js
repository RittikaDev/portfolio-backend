"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_route_1 = require("../modules/auth/auth.route");
const user_route_1 = require("../modules/user/user.route");
const projects_route_1 = require("../modules/projects/projects.route");
const blog_route_1 = require("../modules/blog/blog.route");
const contact_route_1 = require("../modules/contact/contact.route");
const skills_route_1 = require("../modules/skills/skills.route");
const experience_route_1 = require("../modules/experience/experience.route");
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
        path: '/blog',
        route: blog_route_1.BlogRoute,
    },
    {
        path: '/projects',
        route: projects_route_1.ProjectRoute,
    },
    {
        path: '/skills',
        route: skills_route_1.SkillRoutes,
    },
    {
        path: '/experience',
        route: experience_route_1.ExperienceRoutes,
    },
    {
        path: '/contact',
        route: contact_route_1.ContactRoute,
    },
];
moduleRoutes.forEach((route) => {
    router.use(route.path, route.route);
});
exports.default = router;
