import * as React from "react"
import { AppRegistry, YellowBox, View } from "react-native"
import { screensEnabled } from "react-native-screens"
// import Page from './components/Page/Page'

// This puts screens in a native ViewController or Activity
screensEnabled()

YellowBox.ignoreWarnings([
  "componentWillMount is deprecated",
  "componentWillReceiveProps is deprecated",
])

const App: React.FunctionComponent<{}> = () => {
  return (
    // <Page />
    <View />
  )
}

const APP_NAME = "smartechapp"
const SHOW_STORYBOOK = false

let RootComponent = App
if (SHOW_STORYBOOK) {
  const { StorybookUIRoot } = require("../../../storybook")
  RootComponent = StorybookUIRoot
}
AppRegistry.registerComponent(APP_NAME, () => RootComponent)

export default App