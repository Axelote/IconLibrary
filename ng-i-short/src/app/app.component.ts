import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  searchTerm: string;

  uploadPercent: Observable<number>;
  downloadURL: string;
  _db:AngularFirestore;
  imageSrc = 'https://firebasestorage.googleapis.com/v0/b/'+environment.firebaseConfig.storageBucket+'/o/';

  constructor(db: AngularFirestore, private storage: AngularFireStorage) {
    this._db = db;
  }

  uploadFile(event: { target: { files: any[]; }; }) {
    const file = event.target.files[0];
    const filePath = file.name;
    const fileRef = this.storage.ref('icons/').child(filePath);
    const task = this.storage.upload(filePath, file);
    const iconsCollection = this._db.collection('icons');
    iconsCollection.add({url: file.name});
    
    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    // task.snapshotChanges().pipe(
    //     finalize( () => this.downloadURL = this.success )
    // )
    // .subscribe()
  }
  receivedData(value) {
    this.searchTerm = value;
  }
}
