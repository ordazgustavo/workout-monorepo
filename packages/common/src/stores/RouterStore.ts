import React from 'react'
import { observable } from 'mobx'

export type Routes = 'WorkoutHistory' | 'CurrentWorkout'

class RouterStore {
  @observable screen: Routes = 'CurrentWorkout'
}

export const RouterStoreContext = React.createContext(new RouterStore())
