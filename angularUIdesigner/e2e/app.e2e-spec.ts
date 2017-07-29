import { AngularUIdesignerPage } from './app.po';

describe('angular-uidesigner App', () => {
  let page: AngularUIdesignerPage;

  beforeEach(() => {
    page = new AngularUIdesignerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
