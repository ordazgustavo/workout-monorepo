import React from 'react'
import { StyleSheet, View } from 'react-native'

import { colors } from '../utils/colors'

interface IProps {}

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

export const Card: React.FC<IProps> = ({ children }) => {
  return <View style={styles.card}>{children}</View>
}
