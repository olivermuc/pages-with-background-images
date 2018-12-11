import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.page.html',
  styleUrls: ['./page-two.page.scss'],
})
export class PageTwoPage {

  constructor(private barcodeScanner: BarcodeScanner) { }

  public startCam() {
    this.barcodeScanner.scan()
      .then(barcodeData => {
        console.log('Barcode data', barcodeData);
      })
      .catch(err => {
        console.log('Error', err);
      });
  }
  
}