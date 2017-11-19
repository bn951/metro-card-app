import { MetroCardAppPage } from './app.po';

describe('metro-card-app App', () => {
  let page: MetroCardAppPage;

  beforeEach(() => {
    page = new MetroCardAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
