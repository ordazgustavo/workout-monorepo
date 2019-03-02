import React from 'react'
import { AsyncStorage } from 'react-native'
import { create } from 'mobx-persist'

import { WorkoutStore } from './WorkoutStore'
import { WorkoutTimerStore } from './WorkoutTimerStore'

const hydrate = create({
  storage: AsyncStorage,
  jsonify: true,
})

export class RootStore {
  workoutStore = new WorkoutStore(this)
  workoutTimerStore = new WorkoutTimerStore(this)

  constructor() {
    hydrate('workout', this.workoutStore).then(() => {
      if (this.workoutTimerStore.isRunning) {
        this.workoutTimerStore.measure()
      }
    })
    hydrate('workoutTimer', this.workoutTimerStore)
  }
}

export const RootStoreContext = React.createContext(new RootStore())
