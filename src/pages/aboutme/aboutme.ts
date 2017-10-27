import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';

/**
 * Claire Gizard -- 1106363
 * Pierre Munin -- 1106420
 */

@Component({
  selector: 'page-aboutme',
  templateUrl: 'aboutme.html'
})

export class AboutmePage {

  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, private toast: ToastController) {
  }

  public goTargetedcv(){
    this.navCtrl.push('TargetedcvPage');
  }
 
  public goProjectwork(){
    this.navCtrl.push('ProjectworkPage');
}
 
  public goExtra(){
    this.navCtrl.push('ExtraPage');
  }

  public goContact(){
    this.navCtrl.push('ContactPage');
  }
  rootPage = "LoginPage";  

 //Trang Nguyen 1601798
  
}
