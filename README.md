![Logo](http://dsgriffin.github.io/images/logos/ionic-2-file-transfer-example.png)

![](https://img.shields.io/badge/ionic-2.0.0-green.svg)

A very simple file transfer example for Ionic 2 using TypeScript and the [Transfer](http://ionicframework.com/docs/v2/native/transfer/) module from `ionic-native`.

<img src="http://dsgriffin.github.io/images/ionic-2-file-transfer-example/results.png" width="675">

## Requirements

* Either an iPhone or Android device (File Transfer will not work on an emulator)
* If you're building for iOS, you'll need XCode. 

## Build

Clone the repository and follow the steps based on the platform of your device.

#### iOS

1. `npm install`
2. `ionic server`
3. `cordova platform install ios`
4. `ionic build ios --prod`
5. Connect your iOS device and run the application, either by
  1. Opening up the relevant `.xcodeproj` on `Xcode` and clicking the run button (making sure your device is selected)
  2. Running `ionic run ios --device` on your CLI - this requires that the npm package `ios-deploy` is installed globally (`npm install -g ios-deploy`)

### Android 

1. `npm install`
2. `ionic server`
3. `cordova platform install android`
4. `ionic build android --prod`
5. Connect your Android device and run the application with `ionic run android` (make sure USB debugging is enabled on your device)

## File Transfer - Storage Locations

The `.jpg` used in this example is saved in different locations dependant on platform:

* **iOS** - in the app-specific `Documents/` folder using `cordova.file.documentsDirectory`

* **Android** - persistent and private data storage within the application's sandbox using `cordova.file.dataDirectory`

[Here's the list](https://github.com/apache/cordova-plugin-file#where-to-store-files) of the different places you can store files using this plugin.

## License

MIT
