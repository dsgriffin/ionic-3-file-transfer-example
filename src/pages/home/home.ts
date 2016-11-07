import {Component} from '@angular/core';

import {NavController, Platform, AlertController} from 'ionic-angular';

import {Transfer} from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController, public platform: Platform, public alertCtrl: AlertController) {
  }

  downloadImage(image) {

    this.platform.ready().then(() => {

      const fileTransfer = new Transfer();
      const imageLocation = `${cordova.file.applicationDirectory}www/assets/img/${image}`;

      let targetPath;

      // make sure this is on a device, not an emulation (e.g. chrome tools device mode)
      if(!this.platform.is('cordova')) {
        return false;
      }

      if (this.platform.is('ios')) {
        targetPath = cordova.file.documentsDirectory + image;
      }
      else if(this.platform.is('android')) {
        targetPath = cordova.file.dataDirectory + image;
      }
      else {
        // exit otherwise, but you could add further types here e.g. Windows
        return false;
      }

      fileTransfer.download(imageLocation, targetPath).then((entry) => {

        const alertSuccess = this.alertCtrl.create({
          title: `Download Succeeded!`,
          subTitle: `${image} was successfully downloaded to: ${entry.toURL()}`,
          buttons: ['Ok']
        });

        alertSuccess.present();

      }, (error) => {

        const alertFailure = this.alertCtrl.create({
          title: `Download Failed!`,
          subTitle: `${image} was not successfully downloaded. Error code: ${error.code}`,
          buttons: ['Ok']
        });

        alertFailure.present();

      });

    });

  }

}
