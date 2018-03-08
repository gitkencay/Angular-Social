import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

///// Start FireStarter

// Core
import { CoreModule } from './core/core.module';

// Shared/Widget
import { SharedModule } from './shared/shared.module';

// Feature Modules
import { ItemModule } from './items/shared/item.module';
import { UploadModule } from './uploads/shared/upload.module';
import { UiModule } from './ui/shared/ui.module';
import { NotesModule } from './notes/notes.module';
///// End FireStarter


import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyC5lJra_1yVraJDeDuFUTOjrdGd1nYNVyI",
  authDomain: "angular-social-d897c.firebaseapp.com",
  databaseURL: "https://angular-social-d897c.firebaseio.com",
  projectId: "angular-social-d897c",
  storageBucket: "angular-social-d897c.appspot.com",
  messagingSenderId: "806726911085"
}


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    ItemModule,
    UiModule,
    NotesModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
