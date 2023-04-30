import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  formGroup: FormGroup = new FormGroup({
    displayname: new FormControl(""),
    name: new FormControl(""),
    phone: new FormControl("")
  })
  constructor(
      private dialogRef: MatDialogRef<LoginComponent>,
      @Inject(MAT_DIALOG_DATA) data: any) {
  }
  save() {
      this.dialogRef.close(this.formGroup.value);
  }

  close() {
      this.dialogRef.close();
  }
}
