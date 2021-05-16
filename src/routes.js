import React from "react";
import Homepage from "./pages/Homepage/Homepage";
import Manager from "./pages/Manager/Manager";
import ActionManager from "./pages/ActionManager/ActionManager";

import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
const routes = [
  {
    path: '/',
    exact: true,
    main: () => <Homepage />,
  },
  {
    path: '/manager',
    exact: true,
    main: () => <Manager/>
  },
  
  {
    path: '/student/add',
    exact:false,
    main: ()=><ActionManager/>
},
{
    path: '',
    exact:false,
    main: ()=><NotFoundPage/>
}
];
export default routes;
