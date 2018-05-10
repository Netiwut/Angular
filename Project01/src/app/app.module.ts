import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ModelsService} from './services/models.service';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ModelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
