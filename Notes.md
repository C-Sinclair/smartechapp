# Initial Notes From Spec

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

# Component Breakdown

| Component | Description | Function |
|-----------|-------------|----------|
| Header | Display settings icon, menu icon and hardcoded string "UTILITIES" | None specified |
| Icon | Display either the selected or unselected static image icon | On click: <br><ul><li>Alternate selected/unselected image to display.</li><li>Unselect other icons <i>(will probably need to be handled in the parent component)</i></li><li>Update text in header?</li></ul> |
| Carousel | Display which room data is currently being displayed | On change: <br><ul><li>Change displayed placeholder number on temperature dial.</li></ul> |
| Dial | Display current room temperature as a number and visually as a function of rotation in the range of 0 to 36 degrees | On change: <br><ul><li>Update the central number with the new value</li><li>Change the displayed rotation on the coloured temperature dial</li></ul>On click +/-: <br><ul><li>Change value by +/- 1 degree</li></ul> |
| OutsideTemp | Display outside temperature | Nice to have: <br><ul><li>Display actual outside temperature, not hardcoded placeholder</li></ul> |
| OutsideHumid | Display outside humidity | <b>Is this outside or inside humidity?</b><br><br> Nice to have: <br><ul><li>Display actual outside humidity, not hardcoded placeholder</li></ul> |

### Header
-   It should display `menu-white.png`
-   It should display "UTILITIES"  
-   It should display `cogwheel-white.png` 

### Icon
-   It should have a `selected` property, either `true` or `false`
-   It should hold `selected` and `unselected` versions of each icon in state
-   On click it should alternate which version of the icon is displayed

### Carousel
-   It should have a `selected` property
-   It should display options: `["Living Room",
"Kitchen", "Bedroom"]`
-   On swipe, it should change which option is selected

### Dial
-   It should have a `temperature` property 
-   It should display value for temperature at centre
-   It should display equivalent temperature as a rotation around dial with 0&deg; relating to 0&deg;C and 360&deg; to 36&deg;C <i>Well aren't those nice numbers!</i>
-   On click plus, temperature value should increase by 1
-   On click minus, temperature value should decrease by 1
-   On drag pointer on outer circle, adjust temperature value
-   Pointer shouldn't be able to be dragged below 0&deg; 
-   Pointer shouldn't be able to be dragged above 36&deg; 

### OutsideTemp
-   It should display "OUTSIDE"
-   It should display "14&deg;"

### OutsideHumid
-   It should display "HUMIDITY"
-   It should display "44%"

### Page
-   Should display all 5 `Icon`'s: `[bulb, centralheating, fire, connections, worldgrid]`
-   Only one `Icon` should be selected at any one time
-   On `Carousel` change, data should change

