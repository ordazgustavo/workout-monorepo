import React from 'react'

import { Router, Switch, Route } from './Router'
import { WorkoutHistory } from './modules/WorkoutHistory'
import { CurrentWorkout } from './modules/CurrentWorkout'

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={WorkoutHistory} />
        <Route exact path="/current-workout" component={CurrentWorkout} />
      </Switch>
    </Router>
  )
}
