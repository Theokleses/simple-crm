import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user.class';
import { MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-dialog-edit-address',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatProgressBarModule, FormsModule, MatButtonModule, MatInputModule],
  templateUrl: './dialog-edit-address.component.html',
  styleUrl: './dialog-edit-address.component.scss'
})
export class DialogEditAddressComponent {
  constructor(public dialogRef: MatDialogRef<DialogEditAddressComponent>) {[]}
  loading = false;
  user: User = new User();

  saveUser(){

  }

}
