import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountSmallComponent } from './account-small/account-small.component';
import { LinkComponent } from "../link/link.component";
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        AccountSmallComponent,
        LoginComponent,
    ],
    exports: [
        AccountSmallComponent,
    ],
    imports: [
        CommonModule,
        LinkComponent,
        MatButtonModule,
        MatFormFieldModule,
        MatDialogModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class AccountsModule { }
