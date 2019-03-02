import { observable, action, computed } from 'mobx'
import { persist } from 'mobx-persist'
import dayjs from 'dayjs'

import { RootStore } from './RootStore'

function padZero(n: number) {
  if (n >= 10) {
    return n
  }

  return `0${n}`
}

export class WorkoutTimerStore {
  rootStore: RootStore
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
  }

  @persist('object') @observable startTime = dayjs()
  @persist @observable isRunning = false
  @persist @observable seconds = 0

  @action startTimer() {
    this.isRunning = true
    this.startTime = dayjs()
    this.measure()
  }

  @action stopTimer() {
    this.isRunning = false
    this.seconds = 0
  }

  @action measure() {
    if (!this.isRunning) {
      return
    }

    this.seconds = dayjs().diff(this.startTime, 'second')
    setTimeout(() => {
      this.measure()
    }, 1000)
  }

  @computed get display() {
    const minutes = Math.floor(this.seconds / 60)
    const seconds = this.seconds % 60

    return `${padZero(minutes)}:${padZero(seconds)}`
  }

  @computed get percent() {
    return `${Math.min(100, (this.seconds / 180) * 100)}%`
  }
}
