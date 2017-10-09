import { browser, by, element } from 'protractor';

export class AppPage {
    toHome() {
        return browser.get('/');
    }

    toSwapi() {
        return browser.get('/#/people');
    }

    toPeople() {
        return browser.get('/#/people/1');
    }

    getHeadline() {
        return element(by.css('app-root h1')).getText();
    }

    getSwapiMenu() {
        return element(by.css('app-menu li:nth-child(2)'));
    }

    getTable() {
        return browser.executeScript("return arguments[0].innerHTML;", element(by.css('table.table')));
    }
}
