import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import { Home, Counter, NotFound } from './pages';

import { PageLayout } from './components/layouts';

const Routes = ({ someCondition }) =>
  someCondition ? (
    <PageLayout>
      <Switch>
        <Route exact path="/" render={() => 'Some condition was passed'} />
        <Route exact path="/*" render={NotFound} />
      </Switch>
    </PageLayout>
  ) : (
    <PageLayout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/counter" component={Counter} />
        <Route exact path="/*" render={NotFound} />
      </Switch>
    </PageLayout>
  );

Routes.propTypes = {
  someCondition: PropTypes.boolean
};

export default React.memo(Routes);
