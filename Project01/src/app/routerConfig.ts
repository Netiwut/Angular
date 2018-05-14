import { Routes } from '@angular/router';

import { GeneralComponent } from './components/ui-backend/backendComponent/general/general.component'
// import { GallerySecondComponent } from './components/ui-backend/backendComponent/gallery/gallery.component'
import { OtopComponent } from './components/ui-backend/backendComponent/otop/otop.component'
import { PeopleComponent } from './components/ui-backend/backendComponent/people/people.component'
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
        component: GeneralComponent
    },
    {
        path: 'ui-backend',
        component: GeneralComponent
    },
    {
        path: 'ui-backend/general',
        component: GeneralComponent
    },
    {
        path: 'ui-backend/people',
        component: PeopleComponent
    }, 
    // {
    //     path: 'ui-backend/gallery',
    //     component: GallerySecondComponent
    // }, 
    {
        path: 'ui-backend/otop',
        component: OtopComponent
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
