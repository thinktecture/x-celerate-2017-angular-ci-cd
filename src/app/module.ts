import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {AppComponent} from './components/app/app';
import {HeaderComponent} from './components/header/header';
import {HomeComponent} from './components/home/home';
import {MenuComponent} from './components/menu/menu';
import {PeopleDetailComponent} from './components/people/detail/detail';
import {PeopleListComponent} from './components/people/list/list';
import {ROUTES} from './routes';
import {StarwarsService} from './services/starwars';
import {WindowRef} from './services/windowRef';
import {ShareService, shareServiceFactory, shareServiceFactoryDeps} from './services/share';
import {ElectronService} from './services/electron';
import {DesktopIntegrationService} from './services/desktopIntegration';

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        HeaderComponent,
        HomeComponent,
        PeopleListComponent,
        PeopleDetailComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(ROUTES, { useHash: true })
    ],
    providers: [
        StarwarsService,
        WindowRef,
        ElectronService,
        DesktopIntegrationService,
        {
            provide: ShareService,
            useFactory: shareServiceFactory,
            deps: shareServiceFactoryDeps
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
