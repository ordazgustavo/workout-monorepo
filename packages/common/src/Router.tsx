import React from 'react'
import { observer } from 'mobx-react-lite'

import { WorkoutHistory } from './modules/WorkoutHistory'
import { CurrentWorkout } from './modules/CurrentWorkout'
import { RootStoreContext } from './stores/RootStore'

export const Router = observer(() => {
  const rootStore = React.useContext(RootStoreContext)
  return rootStore.routerStore.screen === 'WorkoutHistory' ? (
    <WorkoutHistory />
  ) : (
    <CurrentWorkout />
  )
})
