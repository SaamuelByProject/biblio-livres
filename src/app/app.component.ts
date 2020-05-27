import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {
    var firebaseConfig = {
      apiKey: 'AIzaSyD76Ig1dNS4Dj9cNJ7uqaa8DaFZ2pd_d04',
      authDomain: 'biblio-livres-13a8a.firebaseapp.com',
      databaseURL: 'https://biblio-livres-13a8a.firebaseio.com',
      projectId: 'biblio-livres-13a8a',
      storageBucket: 'biblio-livres-13a8a.appspot.com',
      messagingSenderId: '988783325155',
      appId: '1:988783325155:web:b52db2b76ca1817c957ad6',
    };
    firebase.initializeApp(firebaseConfig);
  }
}
