import { Router } from 'express';
import { AuthRoutes } from '../modules/auth/auth.route';
import { UserRoute } from '../modules/user/user.route';
import { ProjectRoute } from '../modules/projects/projects.route';
import { BlogRoute } from '../modules/blog/blog.route';
import { ContactRoute } from '../modules/contact/contact.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/user',
    route: UserRoute,
  },
  {
    path: '/blog',
    route: BlogRoute,
  },
  {
    path: '/projects',
    route: ProjectRoute,
  },
  {
    path: '/contact',
    route: ContactRoute,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
