import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import { scrollBefore } from './utils/routerInterceptor';

// Front
import App from './App';
import Home from './front/Home';
import Portal from './front/Portal';
import Eventos from './front/Eventos';
import Profissionais from './front/Profissionais';
import Forum from './front/Forum';
import Contato from './front/Contato';

// Dashboard
import Dashboard from './dashboard/dashboard';
import Signin from './dashboard/auth/signin';
import Signout from './dashboard/auth/signout';
import Signup from './dashboard/auth/signup';
import Feature from './dashboard/feature';
import RequireAuth from './dashboard/auth/require_auth';
import Welcome from './dashboard/welcome';

export default (
  <Router >
    <Route path="/" component={App}>
      <IndexRoute component={Home} onEnter={scrollBefore} />
      <Route path="/portal" component={Portal} onEnter={scrollBefore} />
      <Route path="/profissionais" component={Profissionais} onEnter={scrollBefore} />
      <Route path="/forum" component={Forum} onEnter={scrollBefore} />
      <Route path="/eventos" component={Eventos} onEnter={scrollBefore} />
      <Route path="/contato" component={Contato} onEnter={scrollBefore} />

    </Route>
    <Route path="/dashboard" component={Dashboard}>
      <IndexRoute component={Welcome} />
      <Route path="/" component={RequireAuth(Feature)} />
    </Route>
    <Route path="signin" component={Signin} />
    <Route path="signout" component={Signout} />
    <Route path="signup" component={Signup} />
  </Router>
);
