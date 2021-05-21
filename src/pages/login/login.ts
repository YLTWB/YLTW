import { Component } from '@angular/core';
import { ModalController, ToastController, Platform, App, NavController, LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Constants } from '../../util/Constants';
declare var PatternLock: any;
@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})

export class LoginPage {
    public showDate: string = (new Date().getMonth() + 1) + '月' + new Date().getDate();
    public logincode: string = 'luke';
    public loginName: string = '秦';
    public Password: string = 'xxxxxx';
    public ispassword: boolean;
    public loading;
    public isLogin: boolean = false;
    public isPatternLockEnabled: boolean;
    public lockPattern: string;
    userInfo = {
        userName: this.loginName,
        password: this.Password,
        macAddress: 'f4:8e:92:b1:a4:0d',
        appVersion: '1.0',
        osVersion: '6.0'
    }
    constructor(public modalCtrl: ModalController, private toastCtrl: ToastController, private platform: Platform, private app: App, public navCtrl: NavController,
        public loadCtrl: LoadingController) {
    }

    ionViewDidLoad() {
        let $this = this;
        let lock = new PatternLock('#patternContainer', {
            onDraw: function (pattern) {
                $this.loginSuccess();
            }
        });
    }

    ionViewWillEnter() {
        this.isLogin = Constants.isLogin;
        this.isPatternLockEnabled = Constants.isPatternLockEnabled;
        this.lockPattern = Constants.lockPattern;
    }

    // 临时存放登录信息
    tempUserInfo = {
        isAdmin: 0,
        roleID: [],
        userID: "",
    }

    btnClick() {

        let loading = this.loadCtrl.create({
            content: "正在登录..",//loading框显示的内容
            dismissOnPageChange: false, // 是否在切换页面之后关闭loading框
            showBackdrop: false //是否显示遮罩层
        });
        loading.present();// 弹出load框
        setTimeout(() => {
            loading.dismiss();
            this.loginSuccess();
        }, 1000);  
    }

    loginSuccess() {
        this.app.getRootNav().setRoot(HomePage);
        setTimeout(function () {
            this.isLogin = true;
            Constants.isLogin = true;
        }, 500);
    }

    presentToast(message) {
        let toast = this.toastCtrl.create({
            message: message,
            duration: 300,
            position: 'middle'
        });
        toast.present();
    }
}

