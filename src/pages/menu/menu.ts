import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  rootPage = "TabsPage";
  @ViewChild(Nav) nav: Nav;

  pages: PageInterface[] = [
    { title: 'About Me', pageName: 'TabsPage', tabComponent: 'AboutmePage', index: 0, icon: 'home' },
    { title: 'My CV', pageName: 'TabsPage', tabComponent: 'TargetedcvPage', index: 1, icon: 'create' },
    { title: 'Contact', pageName: 'TabsPage', tabComponent: 'ContactPage', index: 2, icon: 'information-circle' },
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openPage(page: PageInterface) {
    let params = {};

    if (page.index) {
      params = { tabIndex: page.index };
    }
    if (this.nav.getActiveChildNavs() && page.index != undefined) {
      this.nav.getActiveChildNavs()[0].select(page.index);
    } else {
      this.nav.setRoot(page.pageName, params);
    }
  }
  isActive(page: PageInterface) {
    let childNav = this.nav.getActiveChildNavs()[0];

    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'bgreen';
      }
      return 'dgreen';
    }
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'bgreen';
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }
//Trang Nguyen 1601798
}