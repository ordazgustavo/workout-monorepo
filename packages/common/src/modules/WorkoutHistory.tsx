import React from 'react'
import { View, Text, Button } from 'react-native'
import { observer } from 'mobx-react-lite'

import { RootStoreContext } from '../stores/RootStore'

export const WorkoutHistory = observer(() => {
  const rootStore = React.useContext(RootStoreContext)
  return (
    <View>
      <Text>WorkoutHistory page</Text>
      <Text>{rootStore.routerStore.screen}</Text>
      <Button
        title="Create Workout"
        onPress={() => {
          rootStore.workoutStore.currentExercises.push(
            {
              exercise: 'Squat',
              numSets: 5,
              reps: 5,
              sets: ['', '', '', '', ''],
              weight: 260,
            },
            {
              exercise: 'Bench Press',
              numSets: 5,
              reps: 5,
              sets: ['', '', '', '', ''],
              weight: 200,
            },
            {
              exercise: 'Dead Lift',
              numSets: 1,
              reps: 5,
              sets: ['', 'x', 'x', 'x', 'x'],
              weight: 360,
            },
          )
          rootStore.routerStore.screen = 'CurrentWorkout'
        }}
      />
    </View>
  )
})
