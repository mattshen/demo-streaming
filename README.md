# Challenge 001

## Code Structure
- All JS code are in `src` folder
- `assets` folder for images
- `components` folder for all fine-grained components
- `screens` folder for screens. `Components` are composed inside screens directly
- `App.js` is the start point of the app

## Used Libraries
- **create-react-app**, easy to start a ReactJs project
- **lodash**, very popular lib
- **eslint**, not to make common mistake while coding


## Improvements
- Add more test cases
- Use redux to manage state
- Centralize CSS management
- Create a `container` layer between `components` and `screens`

## Testing Instructions
- Home Page, http://{host}:{port}/
- Series Page, http://{host}:{port}/#/series
- Movies Page, http://{host}:{port}/#/movies
- Go back to home, click "Categories" within Nav Bar when on Page "Series" and "Movies", or click "Home" within footer (site links)