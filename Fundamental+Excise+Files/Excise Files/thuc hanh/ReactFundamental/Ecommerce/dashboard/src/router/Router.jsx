import React from 'react';

import useRoutes from './useRoutes';

const Router = ({allRoutes}) => {
    const routes = useRoutes([...allRoutes]);
    return routes; 
}

export default Router;