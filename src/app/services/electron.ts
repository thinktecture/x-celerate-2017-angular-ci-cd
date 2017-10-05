///<reference path="../../../node_modules/electron/electron.d.ts"/>

interface ElectronWindow extends Window {
  require(module: string): Electron.RendererInterface;
}

declare const window: ElectronWindow;

export class ElectronService {
  private _electron: Electron.RendererInterface;

  public get electron(): Electron.RendererInterface {
    if (!this._electron) {
      this._electron = window.require ? window.require('electron') : null;
    }

    return this._electron;
  }
}
