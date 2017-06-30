import {Component} from '@angular/core';
import {NavController, Platform, AlertController} from 'ionic-angular';
import {Transfer, TransferObject} from '@ionic-native/transfer';
import {File} from '@ionic-native/file';

declare var cordova: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Transfer, TransferObject, File]
})

export class HomePage {

  storageDirectory: string = '';

  constructor(public navCtrl: NavController, public platform: Platform, private transfer: Transfer, private file: File, public alertCtrl: AlertController) {
    this.platform.ready().then(() => {
      // make sure this is on a device, not an emulation (e.g. chrome tools device mode)
      if(!this.platform.is('cordova')) {
        return false;
      }

      if (this.platform.is('ios')) {
        this.storageDirectory = cordova.file.documentsDirectory;
      }
      else if(this.platform.is('android')) {
        this.storageDirectory = cordova.file.dataDirectory;
      }
      else {
        // exit otherwise, but you could add further types here e.g. Windows
        return false;
      }
    });
  }

  downloadImage(image) {

    this.platform.ready().then(() => {

      const fileTransfer: TransferObject = this.transfer.create();

      const imageLocation = `${cordova.file.applicationDirectory}www/assets/img/${image}`;

      fileTransfer.download(imageLocation, this.storageDirectory + image).then((entry) => {

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

  retrieveImage(image) {

    this.file.checkFile(this.storageDirectory, image)
      .then(() => {

        const alertSuccess = this.alertCtrl.create({
          title: `File retrieval Succeeded!`,
          subTitle: `${image} was successfully retrieved from: ${this.storageDirectory}`,
          buttons: ['Ok']
        });

        return alertSuccess.present();

      })
      .catch((err) => {

        const alertFailure = this.alertCtrl.create({
          title: `File retrieval Failed!`,
          subTitle: `${image} was not successfully retrieved. Error Code: ${err.code}`,
          buttons: ['Ok']
        });

        return alertFailure.present();

      });
  }

}
