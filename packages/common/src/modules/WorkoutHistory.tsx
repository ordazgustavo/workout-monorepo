import React from 'react'
import { View, Text, Button } from 'react-native'
import { observer } from 'mobx-react-lite'

import { RouterStoreContext } from '../stores/RouterStore'

export const WorkoutHistory = observer(() => {
  const routerStore = React.useContext(RouterStoreContext)
  return (
    <View>
      <Text>WorkoutHistory page</Text>
      <Text>{routerStore.screen}</Text>
      <Button
        title="Create Workout"
        onPress={() => {
          routerStore.screen = 'CurrentWorkout'
        }}
      />
    </View>
  )
})
