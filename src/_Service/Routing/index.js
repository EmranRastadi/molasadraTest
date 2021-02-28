import React , {lazy , memo} from 'react';
import {Route , Redirect, Switch} from 'react-router-dom';

export const createLazy = Route => {
    const component = lazy(() => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(Route);
            }, 1000)
        })
    })
    return component;
}

const Home = createLazy(import('../../_Views/Home'));
// const NotFound = createLazy(import('../../Views/NotFound'));


// We can create a function for each type of root here
// liked Private , Public , ... => check by token

export default memo(()=>{
    return (
        <Switch>
            <Route component={Home} path={"/"} exact />
            <Route component={Home} path={"/home"} />
            {/* <Route component{NotFound} path={"*"} /> */}
        </Switch>
    )
})