import React from 'react'
import { StyleSheet, View } from 'react-native'
import { WorkoutCard } from '../ui/WorkoutCard'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
    margin: 10,
  },
})

export function CurrentWorkout() {
  return (
    <View style={styles.container}>
      <WorkoutCard
        sets={['5', '5', '5', '', 'x']}
        exercise="Squat"
        repsAndWeight="5x5 260"
      />
    </View>
  )
}
