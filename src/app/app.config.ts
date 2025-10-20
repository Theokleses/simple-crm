import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'simple-crm-ed655',
        appId: '1:805053212381:web:42420641dee8cabb809d34',
        storageBucket: 'simple-crm-ed655.firebasestorage.app',
        apiKey: 'AIzaSyB1Pvh92OiLFF17wmldbK1g0_NoiGeHk6s',
        authDomain: 'simple-crm-ed655.firebaseapp.com',
        messagingSenderId: '805053212381',
        // projectNumber: '805053212381',
        // version: '2',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
};
