import { Routes } from '@angular/router';


import { UserComponent } from './components/user/user.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { UiBackendComponent } from './components/ui-backend/ui-backend.component';
import { IndexComponent } from './components/index/index.component';
import { PostComponent } from './components/post/post.component';
import { DetailComponent } from './components/detail/detail.component';
import { GalleryComponent } from './components/gallery/gallery.component';

export const appRoutes: Routes = [
    {
        path: '',
        component: IndexComponent
    },
    {
        path: 'ui-backend',
        component: UiBackendComponent
    },
    {
        path: 'post',
        component: PostComponent
    },
    {
        path: 'detail',
        component: DetailComponent
    },
    {
        path: 'gallery',
        component: GalleryComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'aboutus',
        component: AboutusComponent
    }
  ];
