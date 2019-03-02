import React from 'react'
import { View, Text, Button, FlatList, StyleSheet } from 'react-native'
import { observer } from 'mobx-react-lite'
import { RouteComponentProps } from 'react-router'
import dayjs from 'dayjs'

import { HistoryCard } from '../ui/HistoryCard'

import { RootStoreContext } from '../stores/RootStore'

interface IProps extends RouteComponentProps {}

const styles = StyleSheet.create({
  historyContainer: {
    flex: 1,
    marginVertical: 20,
  },
})

export const WorkoutHistory: React.FC<IProps> = observer(({ history }) => {
  const { workoutStore } = React.useContext(RootStoreContext)
  return (
    <View>
      <Text>WorkoutHistory page</Text>
      <Button
        title="Create Workout"
        onPress={() => {
          workoutStore.currentExercises.push(
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
              exercise: 'Deadlift',
              numSets: 1,
              reps: 5,
              sets: ['', 'x', 'x', 'x', 'x'],
              weight: 360,
            },
          )
          history.push('/current-workout')
        }}
      />

      <FlatList
        data={Object.entries(workoutStore.history)}
        style={styles.historyContainer}
        renderItem={({ item: [dt, value], index }) => {
          return (
            <HistoryCard
              key={index}
              header={dayjs(dt).format('ddd, DD MMM')}
              currentExercises={value}
            />
          )
        }}
        numColumns={2}
        keyExtractor={([dt]) => dt}
      />
    </View>
  )
})
