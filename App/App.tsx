import React from "react"
import { AppRegistry, YellowBox } from "react-native"
import { screensEnabled } from "react-native-screens"
import Page from './components/Page/Page'

// This puts screens in a native ViewController or Activity
screensEnabled()

YellowBox.ignoreWarnings([
  "componentWillMount is deprecated",
  "componentWillReceiveProps is deprecated",
])

/**
 * Storybook still wants to use ReactNative's AsyncStorage instead of the
 * react-native-community package; this causes a YellowBox warning. 
 */
const ReactNative = require("react-native")
Object.defineProperty(ReactNative, "AsyncStorage", {
  get(): any {
    return require("@react-native-community/async-storage").default
  },
})

const App: React.FunctionComponent<{}> = () => {
  return (
    <Page />
  )
}

const APP_NAME = "smartechapp"
const SHOW_STORYBOOK = process.env.STORYBOOK || false

let RootComponent = App
if (__DEV__) {
  // Only include Storybook if we're in dev mode
  const { StorybookUIRoot } = require("../storybook")

  if (SHOW_STORYBOOK) RootComponent = StorybookUIRoot
}
AppRegistry.registerComponent(APP_NAME, () => RootComponent)

export default App