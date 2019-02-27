import React from 'react'
import { StyleSheet, View } from 'react-native'

import { Router } from './Router'

import { colors } from './utils/colors'

export function App() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Router />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  wrapper: {
    flex: 1,
    backgroundColor: colors.light,
    width: '100%',
    maxWidth: 425,
  },
})
