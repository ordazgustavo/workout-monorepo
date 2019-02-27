import React from 'react'
import { observer } from 'mobx-react-lite'

import { WorkoutHistory } from './modules/WorkoutHistory'
import { CurrentWorkout } from './modules/CurrentWorkout'
import { RouterStoreContext } from './stores/RouterStore'

export const Router = observer(() => {
  const store = React.useContext(RouterStoreContext)
  return store.screen === 'WorkoutHistory' ? (
    <WorkoutHistory />
  ) : (
    <CurrentWorkout />
  )
})
