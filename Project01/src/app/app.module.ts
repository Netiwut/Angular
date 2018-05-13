import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ModelsService} from './services/models.service';

import { appRoutes } from './routerConfig';
import { IndexComponent } from './components/index/index.component';
import { PostComponent } from './components/post/post.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { DetailComponent } from './components/detail/detail.component';
import { UiBackendComponent } from './components/ui-backend/ui-backend.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutusComponent,
    IndexComponent,
    PostComponent,
    GalleryComponent,
    DetailComponent,
    UiBackendComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    FormsModule,
    HttpModule
  ],
  providers: [ModelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
