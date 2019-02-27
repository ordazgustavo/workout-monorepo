import React from 'react'
import { View, Text, Button } from 'react-native'
import { observer } from 'mobx-react-lite'

import { RootStoreContext } from '../stores/RootStore'

export const WorkoutHistory = observer(() => {
  const rootStore = React.useContext(RootStoreContext)
  return (
    <View>
      <Text>WorkoutHistory page</Text>
      <Text>{rootStore.routerStore.screen}</Text>
      <Button
        title="Create Workout"
        onPress={() => {
          rootStore.routerStore.screen = 'CurrentWorkout'
        }}
      />
    </View>
  )
})
