import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'

import { colors } from '../utils/colors'
import { shadows } from '../utils/shadows'

interface IProps {
  onPress: () => void
}

const styles = StyleSheet.create({
  fab: {
    width: 60,
    height: 60,
    bottom: 20,
    right: 20,
    position: 'absolute',
    backgroundColor: colors.midDark,
    borderRadius: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    ...shadows,
  },
  text: {
    fontSize: 18,
    color: colors.white,
    marginBottom: 2,
  },
})

export const Fab: React.FC<IProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.fab} onPress={onPress}>
      <Text style={styles.text}>+</Text>
    </TouchableOpacity>
  )
}
