import Index from './component/Index/index';
import MobileTest from './component/MobileTest/index';
import Marquee from './component/Debounce/index';

var Routes = [ 
    {
        path: '/',
        exact: true,
        component: Index
    },
    {
        path: '/index',
        exact: true,
        component: Index
    },
    {
        path: '/mobileTest',
        exact: true,
        component: MobileTest
    },
    {
        path: '/Marquee',
        exact: true,
        component: Marquee
    },

]

export default Routes