import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { MatNativeDateModule } from '@angular/material/core';
import { User } from '../../models/user.class';
import { MatCardModule } from '@angular/material/card';
import { Firestore, collection, collectionData, deleteDoc, doc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from "@angular/router";
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatNativeDateModule,
    MatCardModule,
    AsyncPipe,
    RouterLink,
    MatMenuModule
],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  users$: Observable<User[]>;
  private dialog = inject(MatDialog);
  firestore = inject(Firestore);
  loading = false;

  constructor() {
    const usersCollection = collection(this.firestore, 'users');
    this.users$ = collectionData(usersCollection, {idField: 'id',}) as Observable<User[]>;

    this.users$.subscribe(users => {
      console.log('Received changes from DB:', users);
  });
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }

  async deleteUser(userId: string, user: User) {
    const confirmDelete = confirm(`Möchtest du den Benutzer "${user.firstName} ${user.lastName}" wirklich löschen?`);
    if (!confirmDelete) return;

    try {
      this.loading = true;
      const userDocRef = doc(this.firestore, `users/${userId}`);
      await deleteDoc(userDocRef);
      console.log('User erfolgreich gelöscht');
    } catch (error) {
      console.error('Fehler beim Löschen des Benutzers:', error);
    } finally {
      this.loading = false;
    }
  }
}
