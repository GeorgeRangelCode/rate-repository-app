import React from 'react'
import { View } from 'react-native'
import { Redirect, Route, Switch } from 'react-router-native'
import RepositoryList from './RepositoryList'
import AppBar from './AppBar'
import LogInPage from '../pages/Login'

const Main = () => {
  return (
    <View style={{ flex: 1 }}>     
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Route path="/signin" exact>
          <LogInPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;
