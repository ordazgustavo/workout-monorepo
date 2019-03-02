import { observable } from 'mobx'
import { persist } from 'mobx-persist'

import { RootStore } from './RootStore'

type WorkoutDay = 'a' | 'b'

export interface CurrentExercise {
  weight: number
  reps: number
  numSets: number
  exercise: string
  sets: string[]
}

export interface WorkoutHistory {
  [key: string]: CurrentExercise[]
}

export class WorkoutStore {
  rootStore: RootStore
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
  }

  @persist @observable currentSquat: number
  @persist @observable currentBenchPress: number
  @persist @observable currentOverheadPress: number
  @persist @observable currentDeadlift: number
  @persist @observable currentBarbellRow: number
  @persist @observable lastWorkoutTay: WorkoutDay
  @persist('list') @observable currentExercises: CurrentExercise[] = []
  @persist('object') @observable history: WorkoutHistory = {}
}
