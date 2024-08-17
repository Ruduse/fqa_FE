import Home from '~/pages/CongNghe';
import tatca from '~/pages/TatCa';
import Toan from '~/pages/Toan';
import Vatly from '~/pages/VatLy';

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/tatca', component: tatca },
  { path: '/toan', component: Toan },
  { path: '/vatly', component: Vatly, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
