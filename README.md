# Ionic 2 File Transfer Example

![](https://img.shields.io/badge/ionic-2.0.0--rc.2-green.svg)

A very simple file transfer example for Ionic 2 using TypeScript and the [Transfer](http://ionicframework.com/docs/v2/native/transfer/) module from `ionic-native`.

<div style="display:flex">
     <div style="flex:1;">
          <img src="http://dsgriffin.github.io/images/ionic-2-file-transfer-example/result-1.png" style="display:inline-block; width:60%">
     </div>
     <div style="flex:1;">
          <img src="http://dsgriffin.github.io/images/ionic-2-file-transfer-example/result-2.png" style="display:inline-block; width:60%">
     </div>
</div>

## Build

Clone the repository and follow the steps based on the platform of your device.

#### iOS

*Note*: building iOS requires a Mac OS.

1. `npm install`
2. `ionic build ios`
3. Connect your iOS device and run the application, either by
  1. Opening up the relevant `.xcodeproj` on `Xcode` and clicking the run button (making sure your device is selected)
  2. Running `ionic run ios --device` on your CLI - this requires that the npm package `ios-deploy` is installed globally (`npm install -g ios-deploy`)

### Android

1. `npm install`
2. `ionic build android`
3. Connect your Android device and run the application with `ionic run android` (make sure USB debugging is enabled on your device)

## File Transfer - Storage Locations

The `.jpg` used in this example is saved in different locations dependant on platform:

* **iOS** - in the app-specific `Documents/` folder using `cordova.file.documentsDirectory`

* **Android** - persistent and private data storage within the application's sandbox using `cordova.file.dataDirectory`

[Here's the list](https://github.com/apache/cordova-plugin-file#where-to-store-files) of the different places you can store files using this plugin.

## Testing

#### iOS

Using `Xcode`, go to `Window` and selected `Devices`, then
 
1. Select the device you downloaded the file to
2. Select the application you used to download the file (in this case `Ionic2FileTransferExample`)
3. You should see the folder `Documents`, inside of which you'll find the image.

#### Android

Use `adb`:

```bash
adb shell
run-as com.ionicframework.ionic2filetransferexample648376
cd files
ls
```

## License

MIT
