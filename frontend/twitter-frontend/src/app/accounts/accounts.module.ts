import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsService } from './accounts.service';
import { AccountSmallComponent } from './account-small/account-small.component';
import { LinkComponent } from "../link/link.component";
import { MatButtonModule } from '@angular/material/button';
import { AccountSmallMobileComponent } from './account-small-mobile/account-small-mobile.component';



@NgModule({
    declarations: [
        AccountSmallComponent,
        AccountSmallMobileComponent
    ],
    exports: [
        AccountSmallComponent,
        AccountSmallMobileComponent
    ],
    imports: [
        CommonModule,
        LinkComponent,
        MatButtonModule
    ]
})
export class AccountsModule { }
