import { CapboxWebCliPage } from './app.po';

describe('capbox-web-cli App', function() {
  let page: CapboxWebCliPage;

  beforeEach(() => {
    page = new CapboxWebCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
