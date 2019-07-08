import React from 'react';
import { Router, Route, Switch,Redirect,routerRedux } from 'dva/router';
import IndexPage from './routes/IndexPage';
import dynamic from 'dva/dynamic';
import App from './routes/App';

const { ConnectedRouter } = routerRedux

function RouterConfig({ history,app }) {
  const IndexPage = dynamic({
    app,
    component:() => import('./routes/IndexPage')
  })
  const Users = dynamic({
    app,
    component:() => import('./routes/Users')
  })
  return (
    <ConnectedRouter history = {history}>
      <App>
        <Switch>
          <Route path="/" exact component = {IndexPage}/>
          <Route path="/users" exact component = {Users}/>
          <Route path="*" render={()=><Redirect to = "users"/>}/>
        </Switch>
      </App>
    </ConnectedRouter>
  )
}

export default RouterConfig;
