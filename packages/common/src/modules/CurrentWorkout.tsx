import React from 'react'
import { StyleSheet, View } from 'react-native'
import { observer } from 'mobx-react-lite'

import { RootStoreContext } from '../stores/RootStore'
import { WorkoutCard } from '../ui/WorkoutCard'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    padding: 10,
  },
})

export const CurrentWorkout = observer(() => {
  const { workoutStore } = React.useContext(RootStoreContext)
  return (
    <View style={styles.container}>
      {workoutStore.currentExercises.map(
        ({ sets, exercise, reps, numSets, weight }) => {
          return (
            <WorkoutCard
              sets={sets}
              exercise={exercise}
              repsAndWeight={`${numSets}x${reps} ${weight}`}
              onSetPress={setIndex => {
                const value = sets[setIndex]
                let newValue: string
                if (value === '') {
                  newValue = reps.toString()
                } else if (value === '0') {
                  newValue = ''
                } else {
                  newValue = `${Number(value) - 1}`
                }

                sets[setIndex] = newValue
              }}
            />
          )
        },
      )}
    </View>
  )
})
