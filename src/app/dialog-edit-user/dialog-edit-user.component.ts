import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user.class';
import { MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-dialog-edit-user',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatProgressBarModule, FormsModule, MatButtonModule, MatInputModule, MatDatepickerModule, MatNativeDateModule],
  templateUrl: './dialog-edit-user.component.html',
  styleUrl: './dialog-edit-user.component.scss'
})
export class DialogEditUserComponent {
  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>) {[]}
  loading = false;
  user: User = new User();
  birthDate: Date = new Date();


  saveUser(){

  }
}
