import {Injectable, NgZone} from '@angular/core';
import {Router} from '@angular/router';
import {PlatformService} from './platform';
import {ElectronService} from './electron';

@Injectable()
export class DesktopIntegrationService {
  constructor(private _router: Router, private _electronService: ElectronService, private _zone: NgZone) {
  }

  public integrate() {
    if (!PlatformService.isElectronApplication()) {
      return;
    }

    this._electronService.electron.ipcRenderer.on('toHome', (event, data) => {
      this._zone.run(() => {
        this._handleNavigateTo(data);
      });
    });
  }

  private _handleNavigateTo(data) {
    switch (data) {
      case 'starwars-people':
        this._router.navigate(['/people/1']);
        break;
    }
  }
}
