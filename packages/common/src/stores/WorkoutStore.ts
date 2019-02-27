import { observable } from 'mobx'

import { RootStore } from './RootStore'

type WorkoutDay = 'a' | 'b'

interface WorkoutHistory {
  [key: string]: Array<{
    exercise: string
    value: number
  }>
}

export class WorkoutStore {
  rootStore: RootStore
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
  }

  @observable currentSquat: number
  @observable currentBenchPress: number
  @observable currentOverheadPress: number
  @observable currentDeadlift: number
  @observable currentBarbellRow: number
  @observable lastWorkoutTay: WorkoutDay
  @observable history: WorkoutHistory
}
