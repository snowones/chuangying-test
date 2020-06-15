import Index from './component/Index/index';

import MobileTest from './component/MobileTest/index';

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

]

export default Routes