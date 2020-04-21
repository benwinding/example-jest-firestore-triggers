# example-jest-firestore-triggers

This is an example of using [Jest](https://jestjs.io/) with the [Firestore emulator](https://firebase.google.com/docs/emulator-suite). It does:

- Example firestore trigger
- Example test of firestore trigger
- Debug tests in VSCode
- Debug firestore triggers in VSCode

# Get Started
Please note:

- To test this repository, you need to connect it to a *real* firebase project (although when running the firebase emulator, none of database will be changed).
- These scripts depend on `yarn` ([install yarn here](https://classic.yarnpkg.com/en/docs/install/)), if you want to use `npm` or you will need to modify the `pacakge.json` scripts.
- I was unable to get triggers working with [@firebase/testing](https://www.npmjs.com/package/@firebase/testing) (hopefully this will change), so although firestore is running in the emulator, it's does require a *real* firebase project.

## Initialize Project

1. clone this repo
2. `yarn` (to install dependencies)
3. add a `serviceAccountKey.json` to this folder ([from your firebase project](https://firebase.google.com/docs/admin/setup#initialize-sdk))
4. change `firebase.rc` to use the same projectid as the `serviceAccountKey.json`

### Commands

- `yarn test`  
  - *This should start the emulator and execute the jest script, then terminate. Good for a CI pipeline.*
- `yarn test-watch`
  - *This should start the emulator and execute the jest script in watch-mode. Good for developing.*
- `yarn start-emulator`
  -  *This should start the emulator. Good for debugging tests.
  -  **Debug .spec.js files**
     -  *When it has started, go to VSCode and click debug "Jest Current File" (while in a .spec.js file). You can now step through the jest file.*
  -  **Debug firestore triggers**
     -  *When it has started, go to VSCode and click debug "Attach (to start-emulator)". This connects the debugger to the emulator and you can set breakpoints in the firestore triggers.*

## Why?
For me it was extremely confusing to setup testing for firebase functions and triggers, this project helped me understand what was going on.
