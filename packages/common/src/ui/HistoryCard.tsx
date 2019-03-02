import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import { Card } from './Card'
import { CurrentExercise } from '../stores/WorkoutStore'

interface IProps {
  header: string
  currentExercises: CurrentExercise[]
}

const styles = StyleSheet.create({
  cardContainer: {},
})

const exerciseShortName = {
  Squat: 'SQ',
  Deadlift: 'DL',
  'Bench Press': 'BP',
  'Overhead Press': 'OP',
  'Barbell Row': 'BR',
}

export const HistoryCard: React.FC<IProps> = ({ header, currentExercises }) => {
  return (
    <View style={styles.cardContainer}>
      <Card>
        <Text>{header}</Text>
        {currentExercises.map(ce => (
          <Text key={ce.exercise}>
            {exerciseShortName[ce.exercise as keyof typeof exerciseShortName]}{' '}
            {ce.numSets}x{ce.reps} {ce.weight}
          </Text>
        ))}
      </Card>
    </View>
  )
}
