Build status: [![Build Status](https://travis-ci.org/greenaddress/WalletCordova.png?branch=master)](https://travis-ci.org/greenaddress/WalletCordova) 

## How to update web assets

 1. `npm install`
 2. `npm run build`

See [here](https://github.com/greenaddress/WalletCrx/tree/browserify#updating-greenaddresswebfiles) for details instructions on working with local npm modules.

## How to build on Android

 1. Install Android SDK and Cordova 5.4
 2. `cd` to the WalletCordova directory
 5. Run `cordova prepare android`
 5. Run `cordova compile android`

After following these steps you should get a debug apk file in `platforms/android/build/outputs/apk/android-debug.apk`.

## How to build on iOS

There's an issue with `xcode` node library causing `cordova prepare ios` to fail silently. See https://github.com/apla/me.apla.cordova.app-preferences/issues/65 for a workaround.

 1. Install Xcode and Cordova 5.4
 2. `cd` to the WalletCordova directory
 3. Run `cordova prepare ios`
 4. Run `cordova compile ios`

After following these steps you should get an .app in platforms/ios/build/emulator/GreenAddress.It.app.

You can also run BIP38 unit tests by copying them from `plugins/it.greenaddress.cordova/bip38/BIP38Tests.m` manually and adding a new testing target in XCode.

## Pull Requests

Before making a Pull Request for WalletCordova check if what you want to modify is present in https://github.com/greenaddress/GreenAddressWebFiles - if it is then you should do the PR there.

This repo is updated every time GreenAddressWebFiles is.
