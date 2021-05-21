import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { WelcomePage } from '../pages/welcome/welcome';
import { ProgressBarComponent } from '../components/progressbar/progress-bar';
import { SearchPage } from '../pages/search/search';
import { AdvisorListPage } from '../pages/advisor/advisor-list';
import { BillListPage } from '../pages/bill/bill-list';
import { ChargePage } from '../pages/charge/charge';
import { SettingsPage } from '../pages/settings/settings';
import { RealTimeProPage } from '../pages/realtimepro/realtimepro';
import { OrderPage } from '../pages/order/order';
import { MapPage } from '../pages/map/map';
import { AttentionPage } from '../pages/attention/attention';
import { AttentionProblemsPage } from '../pages/attention/attention-problems';
import { SettingsPasswordPage } from '../pages/settings/settings-password';
import { SettingsPatternLockPage } from '../pages/settings/settings-patternlock';
import { ChatPage } from '../pages/chat/chat';


import { HttpService } from '../providers/HttpService';


@NgModule({
    declarations: [
        MyApp,
        HomePage,
        LoginPage,
        WelcomePage,
        ProgressBarComponent,
        SearchPage,
        AdvisorListPage,
        BillListPage,
        ChargePage,
        SettingsPage,
        RealTimeProPage,
        OrderPage,
        MapPage,
        AttentionPage,
        AttentionProblemsPage,
        SettingsPasswordPage,
        SettingsPatternLockPage,
        ChatPage
    ],
    imports: [
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        LoginPage,
        WelcomePage,
        SearchPage,
        AdvisorListPage,
        BillListPage,
        ChargePage,
        SettingsPage,
        RealTimeProPage,
        OrderPage,
        MapPage,
        AttentionPage,
        AttentionProblemsPage,
        SettingsPasswordPage,
        SettingsPatternLockPage,
        ChatPage
    ],
    providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, HttpService ]
})
export class AppModule { }
