import React from 'react'

import { RouterStore } from './RouterStore'
import { WorkoutStore } from './WorkoutStore'

export class RootStore {
  routerStore = new RouterStore(this)
  workoutStore = new WorkoutStore(this)
}

export const RootStoreContext = React.createContext(new RootStore())
