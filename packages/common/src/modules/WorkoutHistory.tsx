import React from 'react'
import { View, Text, Button } from 'react-native'
import { observer } from 'mobx-react-lite'
import { RouteComponentProps } from 'react-router'

import { RootStoreContext } from '../stores/RootStore'

interface IProps extends RouteComponentProps {}

export const WorkoutHistory: React.FC<IProps> = observer(({ history }) => {
  const rootStore = React.useContext(RootStoreContext)
  return (
    <View>
      <Text>WorkoutHistory page</Text>
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
          history.push('/current-workout')
        }}
      />
    </View>
  )
})
