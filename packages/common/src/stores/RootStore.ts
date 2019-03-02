import React from 'react'

import { WorkoutStore } from './WorkoutStore'
import { WorkoutTimerStore } from './WorkoutTimerStore'

export class RootStore {
  workoutStore = new WorkoutStore(this)
  workoutTimerStore = new WorkoutTimerStore(this)
}

export const RootStoreContext = React.createContext(new RootStore())
