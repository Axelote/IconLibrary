import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SpriteComponent } from './components/sprite/sprite.component';
import { IconsListComponent } from './components/icons-list/icons-list.component';
import { IconsItemComponent } from './components/icons-list/icons-item/icons-item.component';
import { IconFilterPipe } from './pipes/icon-filter.pipe';
import { IconSelectedComponent } from './components/icons-list/icon-selected/icon-selected.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SpriteComponent,
    IconsListComponent,
    IconsItemComponent,
    IconFilterPipe,
    IconSelectedComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    FormsModule
  ],
  exports: [
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
