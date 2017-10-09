import {PlatformService} from './platform';
import {_finally} from 'rxjs/operator/finally';

describe('PlatformService', () => {
    const changeUserAgent = newUserAgent => {
        (navigator as any).__defineGetter__('userAgent', () => newUserAgent);
    };


    describe('isBrowserApplication', () => {
        it('returns true on browser platform', () => {
            expect(PlatformService.isBrowserApplication()).toEqual(true);
        });

        it('returns false on cordova platform', () => {
            window.cordova = {} as any;
            expect(PlatformService.isBrowserApplication()).toEqual(false);
        });
    });

    describe('isCordovaApplication', () => {
        it('returns true on cordova platform', () => {
            window.cordova = {} as any;
            expect(PlatformService.isCordovaApplication()).toEqual(true);
        });

        it('returns false on non cordova platform', () => {
            window.cordova = void 0;
            expect(PlatformService.isCordovaApplication()).toEqual(false);
        });
    });

    describe('isElectronApplication', () => {
        it('returns true on electron platform', () => {
            const userAgent = navigator.userAgent;

            changeUserAgent('Electron');

            try {
                expect(PlatformService.isElectronApplication()).toEqual(true);
            }
            finally {
                changeUserAgent(userAgent);
            }
        });

        it('returns false on non electron platform', () => {
            expect(PlatformService.isElectronApplication()).toEqual(false);
        });
    });
});
