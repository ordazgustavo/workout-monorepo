import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'

import { colors } from '../utils/colors'
import { shadows } from '../utils/shadows'

interface IProps {
  onPress?: () => void
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 3,
    backgroundColor: colors.white,
    flexDirection: 'column',
    padding: 10,
    ...shadows,
  },
})

export const Card: React.FC<IProps> = ({ onPress, children }) => {
  if (onPress) {
    return (
      <TouchableOpacity style={styles.card} onPress={onPress}>
        {children}
      </TouchableOpacity>
    )
  }
  return <View style={styles.card}>{children}</View>
}
