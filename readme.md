# Image Resizer

Electron application that allows you to select an image and easily change the width and/or height.

<div style="display: flex; justify-content: center">
<img src="./assets/screen.png" width="400" />
</div>

## Usage

Install dependencies:

```bash

npm install
```

Run:

```bash
npm start
```

You can also use `Electronmon` to constantly run and not have to reload after making changes

```bash
npx electronmon .
```

## Packaging

There are multiple ways to package Electron apps. I would suggest [Electron Forge](https://www.electronforge.io/). I did not implement any packaging into this app.

## Developer Mode

If your `NODE_ENV` is set to `development` then you will have the dev tools enabled and available in the menu bar. It will also open them by default.

When set to `production`, the dev tools will not be available.
# Image Resizer Electron App

## Setup WDIO
Install WDIO and necessary dependencies:
```sh
npm init wdio .
```
Configure WDIO:
When running wdio setup, choose the options as follows:

  1.Where should your tests be launched? local
  2.Where is your automation backend located? On my local machine
  3.Which framework do you want to use? mocha
  4.Do you want to use a compiler? No
  5.Where are your test specs located? ./test/specs//*.js**
  6.Do you want WebdriverIO to autogenerate some test files? Yes
  7.Which reporter do you want to use? spec
  8.Do you want to add a plugin to your test setup? No
  9.Do you want to add a service to your test setup? electron
  10.What is the base URL? http://localhost

#Install mocha
```sh
npm install mocha chai --save-dev
```
## Testing
## Path Changing

It is necessary to change the binary and app path accordingly in the wdio.conf.js

### End-to-End (E2E) Testing

E2E tests are implemented using WebdriverIO. To run the tests:

```sh
cd image-resizer-electron
npm install chai --save-dev
npm test
```
if you dont get output or if you encounter any errors then replace .js to .cjs to solve the error
