import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

import { colors } from '../utils/colors'

interface IProps {
  currentTime: string
  percent: string
  onClosePress: () => void
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: colors.mid,
  },
  wrapper: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  close: {
    color: colors.white,
    fontSize: 30,
  },
  timeText: {
    color: colors.white,
    fontSize: 18,
  },
  line: {
    height: 4,
    backgroundColor: colors.midDark,
  },
})

export const WorkoutTimer: React.FC<IProps> = ({
  currentTime,
  percent,
  onClosePress,
}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.line, { width: percent }]} />
      <View style={styles.wrapper}>
        <Text style={styles.timeText}>{currentTime}</Text>
        <TouchableOpacity onPress={onClosePress}>
          <Text style={styles.close}>X</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
