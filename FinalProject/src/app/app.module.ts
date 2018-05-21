import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SidebarModule } from 'ng-sidebar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule
} from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MyNavbeComponent } from './my-navbe/my-navbe.component';
import { SlideshowModule } from 'ng-simple-slideshow';
import { DashComponent } from './dash/dash.component';
import { PeopleComponent } from './components/people/people.component';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
import { MatDatepickerModule, MatNativeDateModule,MatTableModule  } from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CardComponent } from './components/sub-components/card/card.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GalleryAlbumComponent } from './components/sub-components/gallery-album/gallery-album.component';





@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    MyNavbeComponent,
    DashComponent,
    PeopleComponent,
    HomeComponent,
    PostComponent,
    CardComponent,
    GalleryComponent,
    GalleryAlbumComponent
  ],
  imports: [
    BrowserModule,
    SidebarModule.forRoot(),
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    SlideshowModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
