<p align="center">
  <a href="https://datan.fr" target="blank"><img src="https://datan.fr/assets/imgs/datan/logo_svg.svg" width="200" alt="Datan Logo" /></a>
</p>

# Datan mobile app

Mobile app of website [datan.fr](https://datan.fr)

Using [Ionic](https://ionicframework.com/docs/)

## Installations required

1. [Android Studio](https://developer.android.com/studio)
2. [Xcode](https://developer.apple.com/xcode) (Works only with mac)
3. [Capacitor](https://capacitorjs.com/docs)
4. [Ionic](https://ionicframework.com/docs/intro/cli)

## Init Project

```shell
$ npm i
```

## Tests

If problems with cypress, run

```shell
npx cypress install
```

### E2E

[Cypress doc](https://docs.cypress.io/app/get-started/why-cypress)

```shell
# run end to end tests. On localhost, don't forget to start app before
npm run test.e2e

# run end to end tests on specific baseUrl
CYPRESS_BASE_URL=https://specific-url.fr npm run test.e2e
```

### Unit tests

- [React testing library doc](https://testing-library.com/docs/react-testing-library/intro)
- [Jest doc](https://jestjs.io/docs/getting-started)
- [vitest](https://vitest.dev/guide)

```shell
npm run test.unit
```

## Commands

```shell
# init folder for ios
$ npm run add-ios

# init folder for android
$ npm run add-android

# build native code on both OS
$ npm run sync

# build native code on android
$ npm run sync-android

# build native code on ios
$ npm run sync-ios

# open android studio
$ npm run open-android

# open xcode
$ npm run open-ios

# open app on android emulator with live reload
$ npm run android-live-reload

# open app on ios emulator with live reload
$ npm run ios-live-reload

# format code with prettier and eslint
$ npm run format
```
