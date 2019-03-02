import React from 'react'
import { View, Text, Button, FlatList, StyleSheet } from 'react-native'
import { observer } from 'mobx-react-lite'
import { RouteComponentProps } from 'react-router'
import dayjs from 'dayjs'

import { HistoryCard } from '../ui/HistoryCard'
import { Fab } from '../ui/Fab'

import { RootStoreContext } from '../stores/RootStore'
import { CurrentExercise } from '../stores/WorkoutStore'

interface IProps extends RouteComponentProps {}

const numColumns = 3

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  cardContainer: {
    flex: 1,
    padding: 10,
  },
})

export const WorkoutHistory: React.FC<IProps> = observer(({ history }) => {
  const { workoutStore } = React.useContext(RootStoreContext)

  const rows: Array<
    Array<{
      date: string
      exercises: CurrentExercise[]
    }>
  > = []

  Object.entries(workoutStore.history).forEach(([date, exercises], i) => {
    if (i % numColumns === 0) {
      rows.push([{ date, exercises }])
    } else {
      rows[rows.length - 1].push({ date, exercises })
    }
  })

  return (
    <View style={styles.container}>
      <FlatList
        data={rows}
        renderItem={({ item }) => {
          const diff = numColumns % item.length
          return (
            <View style={styles.row}>
              {item.map(({ date, exercises }) => (
                <View key={date} style={styles.cardContainer}>
                  <HistoryCard
                    onPress={() => {
                      const [year, month, day] = date.split('-')
                      history.push(`/workout/${year}/${month}/${day}`)
                    }}
                    header={dayjs(date).format('ddd, DD MMM')}
                    currentExercises={exercises}
                  />
                </View>
              ))}
              {Array.from({ length: diff })
                .fill(diff)
                .map((e, i) => (
                  <View key={i} style={styles.cardContainer} />
                ))}
            </View>
          )
        }}
        keyExtractor={item => item.reduce((pv, cv) => `${pv} ${cv.date}`, '')}
      />
      <Fab
        onPress={() => {
          if (!workoutStore.hasCurrentWorkout) {
            const {
              currentBarbellRow,
              currentBenchPress,
              currentDeadlift,
              currentOverheadPress,
              currentSquat,
            } = workoutStore
            const emptySets = ['', '', '', '', '']

            if (workoutStore.lastWorkoutType === 'b') {
              workoutStore.currentExercises.push(
                {
                  exercise: 'Squat',
                  numSets: 5,
                  reps: 5,
                  sets: [...emptySets],
                  weight: currentSquat,
                },
                {
                  exercise: 'Bench Press',
                  numSets: 5,
                  reps: 5,
                  sets: [...emptySets],
                  weight: currentBenchPress,
                },
                {
                  exercise: 'Deadlift',
                  numSets: 1,
                  reps: 5,
                  sets: ['', 'x', 'x', 'x', 'x'],
                  weight: currentDeadlift,
                },
              )
              workoutStore.currentSquat += 5
              workoutStore.currentBenchPress += 5
              workoutStore.currentDeadlift += 5
            } else {
              workoutStore.currentExercises.push(
                {
                  exercise: 'Squat',
                  numSets: 5,
                  reps: 5,
                  sets: [...emptySets],
                  weight: currentSquat,
                },
                {
                  exercise: 'Overhead Press',
                  numSets: 5,
                  reps: 5,
                  sets: [...emptySets],
                  weight: currentOverheadPress,
                },
                {
                  exercise: 'Barbell Row',
                  numSets: 1,
                  reps: 5,
                  sets: [...emptySets],
                  weight: currentBarbellRow,
                },
              )
              workoutStore.currentSquat += 5
              workoutStore.currentOverheadPress += 5
              workoutStore.currentBarbellRow += 5
            }
            workoutStore.lastWorkoutType =
              workoutStore.lastWorkoutType === 'a' ? 'b' : 'a'
          }

          history.push('/current-workout')
        }}
      />
    </View>
  )
})
