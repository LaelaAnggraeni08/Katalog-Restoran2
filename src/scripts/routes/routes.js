import Home from '../views/pages/home';
import Upcoming from '../views/pages/favorite';
import Detail from '../views/pages/detail';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/favorite': Upcoming,
  '/detail/:id': Detail,
};

export default routes;
