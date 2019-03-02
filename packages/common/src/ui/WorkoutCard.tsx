import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { observer } from 'mobx-react-lite'

import { colors } from '../utils/colors'
import { Card } from './Card'

interface IProps {
  exercise: string
  repsAndWeight: string
  sets: string[]
  onSetPress: (index: number) => void
}

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 10,
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

export const WorkoutCard: React.FC<IProps> = observer(
  ({ exercise, repsAndWeight, sets, onSetPress }) => {
    return (
      <View style={styles.cardContainer}>
        <Card>
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
                  <TouchableOpacity
                    key={set + index}
                    style={[styles.circle, styles.circleFadedBackground]}
                    onPress={() => onSetPress(index)}
                  />
                )
              }

              return (
                <TouchableOpacity
                  key={set + index}
                  style={styles.circle}
                  onPress={() => onSetPress(index)}
                >
                  <Text style={[styles.circleText, styles.circleTextColor]}>
                    {set}
                  </Text>
                </TouchableOpacity>
              )
            })}
          </View>
        </Card>
      </View>
    )
  },
)
