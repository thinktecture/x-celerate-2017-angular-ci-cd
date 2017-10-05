import {DemoPage} from './app.po';

describe('x-celerate-2017-angular-ci-cd App', () => {
    let page: DemoPage;

    beforeEach(() => {
        page = new DemoPage();
    });

    it('should display message saying app works', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('app works!');
    });
});
