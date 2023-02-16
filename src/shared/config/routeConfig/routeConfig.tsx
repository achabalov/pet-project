import React, {Suspense} from 'react';
import {Routes, Route} from "react-router-dom";
import {routeConfig} from "app/router";

function RouteConfig() {
    return (
        <Suspense fallback={<div>Идет загрузка</div>}>
            <Routes>
                {Object.values(routeConfig).map(({path, element}) =>
                    <Route key={path} path={path} element={(
                        <div className='page-wrapper'>
                            {element}
                        </div>
                    )} />
                )}
            </Routes>
        </Suspense>
    );
}

export default RouteConfig;