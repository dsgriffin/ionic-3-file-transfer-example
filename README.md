![Logo](http://dsgriffin.github.io/images/logos/ionic-file-transfer-example.png)

![](https://img.shields.io/badge/ionic-3.5.0-green.svg)

A simple file transfer example in Ionic 3 using Ionic Native's

*  [Transfer](http://ionicframework.com/docs/native/transfer/) module to download a file to the local device
* And then, using the [File](http://ionicframework.com/docs/native/file/) module, retrieve that file

<img src="http://dsgriffin.github.io/images/ionic-file-transfer-example/results.png" width="450" height="450">

## Requirements

* File Transfer will not work on an emulator; you'll need an iOS or Android device
* If you're building/testing for/on iOS, you'll need XCode.

## Build

Clone the repository and follow the steps based on the platform of your device.

#### iOS

1. `npm install`
2. `cordova platform add ios`
3. `ionic cordova build ios`
4. Connect your iOS device and run the application, either by
  1. Opening up the relevant `.xcodeproj` on `Xcode` and clicking the run button (making sure your device is selected)
  2. Running `ionic cordova run ios --device` on your CLI - this requires that the npm package `ios-deploy` is installed globally (`npm install -g ios-deploy`)

### Android

1. `npm install`
2. `cordova platform add android`
3. `ionic cordova build android`
4. Connect your Android device and run the application with `ionic cordova run android` (make sure USB debugging is enabled on your device)

## File Transfer - Storage Locations

The `.jpg` used in this example is saved in different locations dependant on platform:

* **iOS** - in the app-specific `Documents/` folder using `cordova.file.documentsDirectory`

* **Android** - persistent and private data storage within the application's sandbox using `cordova.file.dataDirectory`

[Here's the list](https://github.com/apache/cordova-plugin-file#where-to-store-files) of the different places you can store files using this plugin.

## License

MIT
