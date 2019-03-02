import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'

import { colors } from '../utils/colors'

interface IProps {
  onPress?: () => void
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
