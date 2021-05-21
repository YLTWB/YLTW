import { Component, Input } from '@angular/core';
import { NavController, MenuController, App } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { MapPage } from '../map/map';
import { SettingsPasswordPage } from '../settings/settings-password';


@Component({
    selector: 'settings-page',
    templateUrl: 'settings.html'
})
export class SettingsPage {

    @Input('isComponent') isComponent: boolean = false;

    constructor(private app: App, private menuCtrl: MenuController) {

    }

    gotoMap() {
        this.menuCtrl.close();
        this.app.getActiveNav().push(MapPage);
    }

    updatePassword() {
        this.menuCtrl.close();
        this.app.getActiveNav().push(SettingsPasswordPage);
    }

    logout() {
        this.menuCtrl.close();
        this.app.getRootNav().setRoot(LoginPage);
    }

}
