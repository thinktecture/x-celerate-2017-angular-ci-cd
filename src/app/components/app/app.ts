import {Component} from '@angular/core';
import {DesktopIntegrationService} from '../../services/desktopIntegration';

@Component({
    selector: 'app-root',
    templateUrl: 'app.html',
    styleUrls: ['app.scss']
})
export class AppComponent {
    constructor(desktopIntegrationService: DesktopIntegrationService) {
        desktopIntegrationService.integrate();
    }
}
