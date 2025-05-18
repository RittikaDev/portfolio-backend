import { Router } from 'express';
import { AuthRoutes } from '../modules/auth/auth.route';
import { UserRoute } from '../modules/user/user.route';
import { ProjectRoute } from '../modules/projects/projects.route';
import { BlogRoute } from '../modules/blog/blog.route';
import { ContactRoute } from '../modules/contact/contact.route';
import { SkillRoutes } from '../modules/skills/skills.route';
import { ExperienceRoutes } from '../modules/experience/experience.route';

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
    path: '/skills',
    route: SkillRoutes,
  },
  {
    path: '/experience',
    route: ExperienceRoutes,
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
