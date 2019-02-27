import React from 'react'
import { observable } from 'mobx'

type WorkoutDay = 'a' | 'b'

interface WorkoutHistory {
  [key: string]: Array<{
    exercise: string
    value: number
  }>
}

class WorkoutStore {
  @observable currentSquat: number
  @observable currentBenchPress: number
  @observable currentOverheadPress: number
  @observable currentDeadlift: number
  @observable currentBarbellRow: number
  @observable lastWorkoutTay: WorkoutDay
  @observable history: WorkoutHistory
}

export const RouterStoreContext = React.createContext(new WorkoutStore())
