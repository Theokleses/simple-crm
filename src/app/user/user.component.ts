import {Component, inject} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {DialogAddUserComponent} from '../dialog-add-user/dialog-add-user.component';
import {MatNativeDateModule} from '@angular/material/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatTooltipModule, MatDialogModule, MatNativeDateModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  private dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }

}
