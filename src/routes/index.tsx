import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Layout from '../components/Layout';

import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/Signup';
import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';
import { Plates } from '../pages/Plates';
import { SearchMusicPlayer } from '../pages/SearchMusicPlayer';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/sign-up" exact component={SignUp} />

    <Layout>
      <Route path="/home" component={Home} isPrivate />
      <Route path="/me" component={Profile} isPrivate />
      <Route path="/food" component={Plates} isPrivate />
      <Route path="/music" component={SearchMusicPlayer} isPrivate />
    </Layout>
  </Switch>
);

export default Routes;
