import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';

import { AdvisorListPage, AdvisorBean } from '../advisor/advisor-list';

@Component({
    selector: 'order-page',
    templateUrl: 'order.html'
})
export class OrderPage {
    order: OrderBean = new OrderBean('', '', '', [], [], [], [], 0, '', '');
    problemTypeList: string[] = ['情感类', '婚恋类', '健康类', '社交类'];
    areaList: string[] = [
        '华东区', '华南区', '华北区', '西部'
    ];
    constructor(public navCtrl: NavController, public loadCtrl: LoadingController, private toastCtrl: ToastController) {

    }

    selectAdvisor() {
        this.navCtrl.push(AdvisorListPage);
    }

    submit() {
        let loading = this.loadCtrl.create({
            content: "正在提交..",//loading框显示的内容
            dismissOnPageChange: false, // 是否在切换页面之后关闭loading框
            showBackdrop: false //是否显示遮罩层
        });
        loading.present();// 弹出load框
        setTimeout(() => {
            loading.dismiss();
            this.submitSuccess();
        }, 1000);
    }

    submitSuccess() {
        this.presentToast('提交成功');
        this.navCtrl.pop();
    }

    presentToast(message) {
        let toast = this.toastCtrl.create({
            message: message,
            duration: 500,
            position: 'middle'
        });
        toast.present();
    }

}

export class OrderBean {
    constructor(public id: string, public problemContent: string, public problemType: string, public advisorExcludeList: AdvisorBean[], public advisorList: AdvisorBean[], public areaList: string[], public areaExcludeList: string[], public amount: number, public createUser: string, public createUserName: string) {

    }
}
