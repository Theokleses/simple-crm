import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { Firestore, doc, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from '../../models/user.class';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss',
})
export class UserDetailComponent {
  route = inject(ActivatedRoute);
  firestore = inject(Firestore);

  user$?: Observable<User>;
  userId: string | null;
  user: User = new User();

  constructor() {
    // console.log('Current user ID:', this.route.snapshot.paramMap.get('id'));
    this.userId = this.route.snapshot.paramMap.get('id');
    if (this.userId) {
      const userDocRef = doc(this.firestore, `users/${this.userId}`);
      this.user$ = docData(userDocRef, { idField: 'id' }) as Observable<User>;
      this.user$.subscribe((userData) => {
        this.user = new User(userData);
        console.log('Retrieved user data:', userData);
      });
    }
  }
}
