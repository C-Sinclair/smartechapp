# Initial Notes from Spec

1. Develop an app for a single platform (iOS or Android) the choice is yours
    -   Using `react-native` to develop across both platforms

2. That resembles as best possible the look of the design as provided (by the marketing team)
    -   Use `storybook` to work component by component to match the spec

3. Using the ‘default’ icons provided to show 5 top menu options (lighting, heating, cooking,
connections, and grid)
4. Selecting an item should highlight it using its corresponding ‘selected’ icon.
    -   Create a component which can switch between static image files

5. Selecting the heating item should display a temperature wheel (as per the design)
    -   `react-native-router-flux` can handle actions changing scenes from any component, as the position of the icons will not allow a native tabbar to be used

6. Selecting any other item can be empty (for this proof-of-concept)
    -   Leave other scenes blank for now

7. Provide a carousel at the bottom for switching between different rooms (i.e. Living Room,
Kitchen, Bedroom)
    -   Create a component to handle the carousel at the bottom of the view
    -   Update the data on the temperature wheel on room change

8. Allow the temperature to be adjusted when a user moves the ‘filled circle’ around the 360-
degree temperature wheel (corresponding to a temperature range 0 degrees to 36 degrees
centigrade)
    -   Create a custom dial which can handle touch events changing the temperature data
    -   Bonus: Screen could go all red if the temp is pushed near the top, likewise blue if close to the bottom

# Component breakdown

| Component | Description | Function |
|-----------|-------------|----------|
| Header | Display settings icon, menu icon and hardcoded string "UTILITIES" | None specified |
| Icon | Display either the selected or unselected static image icon | On click: <br><ul><li>Alternate selected/unselected image to display.</li><li>Unselect other icons <i>(will probably need to be handled in the parent component)</i></li><li>Update text in header?</li></ul> |
| Carousel | Display which room data is currently being displayed | On change: <br><ul><li>Change displayed placeholder number on temperature dial.</li></ul> |
| Dial | Display current room temperature as a number and visually as a function of rotation in the range of 0 to 36 degrees | On change: <br><ul><li>Update the central number with the new value</li><li>Change the displayed rotation on the coloured temperature dial</li></ul> |
| OutsideTemp | Display outside temperature | Nice to have: <br><ul><li>Display actual outside temperature, not hardcoded placeholder</li></ul> |
| OutsideHumid | Display outside humidity | Nice to have: <br><ul><li>Display actual outside humidity, not hardcoded placeholder</li></ul> |