import { AppPage } from './app.po';

describe('x-celerate-2017-angular-ci-cd App', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it('should display welcome message', () => {
        page.toHome();
        expect(page.getHeadline()).toEqual('x-celerate 2017 Demo');
    });

    it('should click SWAPI to open the submenu', async () => {
        page.toHome();
        await page.getSwapiMenu().click();
        const cssClasses = await page.getSwapiMenu().getAttribute('class');

        expect(cssClasses).toContain('show');
    });

    it('should display swapi headline', () => {
        page.toSwapi();
        expect(page.getHeadline()).toEqual('People List');
    });

    it('should contain Luke Skywalker in list table', async () => {
        page.toSwapi();
        expect(page.getTable()).toContain('Luke Skywalker');
    });

    it('should display swapi detail headline', () => {
        page.toPeople();
        expect(page.getHeadline()).toEqual('People Detail');
    });

    it('should contain Luke Skywalker in detail table', async () => {
        page.toPeople();
        expect(page.getTable()).toContain('Luke Skywalker');
    });
});
