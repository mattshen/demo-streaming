# Demo Streaming

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
- **gh-page**, easiest way to deploy the app to github pages


## Build
- run `yarn build` to build the project
- `output` folder is `build` instead of `dist`


## Testing Instructions
- App accessible via https://www.mattshen.com/demo-streaming
- Home Page, http://{host}:{port}/
- Series Page, http://{host}:{port}/#/series
- Movies Page, http://{host}:{port}/#/movies
- Go back to home, click "Categories" within Nav Bar when on Page "Series" and "Movies", or click "Home" within footer (site links)


## Improvements
- Add more test cases
- Use redux to manage state
- Create a `container` layer between `components` and `screens`
- Centralize CSS management
- Optimize for responsiveness
- Replace "px" in CSS styles
