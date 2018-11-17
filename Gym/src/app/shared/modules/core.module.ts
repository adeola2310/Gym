import {APP_INITIALIZER, ModuleWithProviders, NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {TitleService} from '../services/title.service';
import {Bootstrapper, init_app} from '../services/bootstrapper.service';
import {RouterModule} from '@angular/router';
import {HomeComponent} from '../../home/home.component';
import {Settings} from '../services/settings.service';
import {AppHttpClient} from '../services/http/app-http-client.service';
import {HttpErrorHandler} from '../services/http/http-error-handler.service';
import {HttpCacheClient} from '../services/http/http-cache-client';
import {AboutComponent} from '../../about/about.component';
import {ServicesComponent} from '../../services/services.component';
import {ContactComponent} from '../../contact/contact.component';
import {GalleryComponent} from '../../gallery/gallery.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forRoot([
        { path: '', redirectTo: 'index', pathMatch: 'full' },
        { path: 'index', component: HomeComponent },
          {path: 'about', component: AboutComponent},
          {path: 'services', component: ServicesComponent},
          {path: 'contact', component: ContactComponent},
            {path: 'gallery', component: GalleryComponent},
            {path: '**', component: HomeComponent}

        ]),
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule
    ],
})
export class CoreModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
              TitleService,
              Bootstrapper,
              Settings,
              HttpErrorHandler,
              AppHttpClient,
              HttpCacheClient,
                {
                    provide: APP_INITIALIZER,
                    useFactory: init_app,
                    deps: [Bootstrapper],
                    multi: true,
                },
            ]
        };
    }
}

