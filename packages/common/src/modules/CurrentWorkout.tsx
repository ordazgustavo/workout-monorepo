import React from 'react'
import { StyleSheet, View } from 'react-native'
import { observer } from 'mobx-react-lite'

import { RootStoreContext } from '../stores/RootStore'
import { WorkoutCard } from '../ui/WorkoutCard'
import { WorkoutTimer } from '../ui/WorkoutTimer'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    padding: 10,
  },
})

export const CurrentWorkout = observer(() => {
  const { workoutStore, workoutTimerStore } = React.useContext(RootStoreContext)

  React.useEffect(() => {
    return () => {
      workoutTimerStore.stopTimer()
    }
  }, [])
  return (
    <View style={styles.container}>
      {workoutStore.currentExercises.map(
        ({ sets, exercise, reps, numSets, weight }, i) => {
          return (
            <WorkoutCard
              key={i}
              sets={sets}
              exercise={exercise}
              repsAndWeight={`${numSets}x${reps} ${weight}`}
              onSetPress={setIndex => {
                workoutTimerStore.startTimer()
                const value = sets[setIndex]
                let newValue: string
                if (value === '') {
                  newValue = reps.toString()
                } else if (value === '0') {
                  newValue = ''
                  workoutTimerStore.stopTimer()
                } else {
                  newValue = `${Number(value) - 1}`
                }

                sets[setIndex] = newValue
              }}
            />
          )
        },
      )}
      {workoutTimerStore.isRunning ? (
        <WorkoutTimer
          currentTime={workoutTimerStore.display}
          percent={workoutTimerStore.percent}
          onClosePress={() => workoutTimerStore.stopTimer()}
        />
      ) : null}
    </View>
  )
})
