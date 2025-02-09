import { Router } from 'express';
import { CarRoute } from '../modules/car/car.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { UserRoute } from '../modules/user/user.route';
import { ProjectRoute } from '../modules/projects/projects.route';

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
    route: CarRoute,
  },
  {
    path: '/projects',
    route: ProjectRoute,
  },
  // {
  //   path: '/contact',
  //   route: OrderRoute,
  // },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
