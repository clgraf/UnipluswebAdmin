import { NgModule, LOCALE_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import locale from '@angular/common/locales/en';

import {
    UnipluswebAdminSharedLibsModule,
    JhiAlertComponent,
    JhiAlertErrorComponent
} from './';

@NgModule({
    imports: [
        UnipluswebAdminSharedLibsModule
    ],
    declarations: [
        JhiAlertComponent,
        JhiAlertErrorComponent
    ],
    providers: [
        Title,
        {
            provide: LOCALE_ID,
            useValue: 'en'
        },
    ],
    exports: [
        UnipluswebAdminSharedLibsModule,
        JhiAlertComponent,
        JhiAlertErrorComponent
    ]
})
export class UnipluswebAdminSharedCommonModule {
    constructor() {
        registerLocaleData(locale);
    }
}
