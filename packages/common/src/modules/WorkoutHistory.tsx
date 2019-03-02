import React from 'react'
import { View, Text, Button, FlatList, StyleSheet } from 'react-native'
import { observer } from 'mobx-react-lite'
import { RouteComponentProps } from 'react-router'
import dayjs from 'dayjs'

import { HistoryCard } from '../ui/HistoryCard'

import { RootStoreContext } from '../stores/RootStore'
import { CurrentExercise } from '../stores/WorkoutStore'

interface IProps extends RouteComponentProps {}

const numColumns = 3

const styles = StyleSheet.create({
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
    </View>
  )
})
