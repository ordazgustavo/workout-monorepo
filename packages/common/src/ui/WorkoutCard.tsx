import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import { colors } from '../utils/colors'

interface IProps {
  exercise: string
  repsAndWeight: string
  sets: string[]
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 3,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    flexDirection: 'column',
    padding: 10,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardHeaderText: {
    fontSize: 16,
  },
  cardBottom: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  circle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: colors.dark,
  },
  circleFadedBackground: {
    backgroundColor: colors.grey,
  },
  circleText: {
    fontSize: 16,
    margin: 'auto',
  },
  circleTextColor: {
    color: colors.white,
  },
})

export const WorkoutCard: React.FC<IProps> = ({
  exercise,
  repsAndWeight,
  sets,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardHeaderText}>{exercise}</Text>
        <Text style={styles.cardHeaderText}>{repsAndWeight}</Text>
      </View>
      <View style={styles.cardBottom}>
        {sets.map((set, index) => {
          if (set === 'x') {
            return (
              <View
                key={set + index}
                style={[styles.circle, styles.circleFadedBackground]}
              >
                <Text style={[styles.circleText, styles.circleTextColor]}>
                  X
                </Text>
              </View>
            )
          }

          if (set === '') {
            return (
              <View
                key={set + index}
                style={[styles.circle, styles.circleFadedBackground]}
              />
            )
          }

          return (
            <View key={set + index} style={styles.circle}>
              <Text style={[styles.circleText, styles.circleTextColor]}>
                {set}
              </Text>
            </View>
          )
        })}
      </View>
    </View>
  )
}
