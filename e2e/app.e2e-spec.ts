import { Ng2Test2Page } from './app.po';

describe('ng2-test2 App', function() {
  let page: Ng2Test2Page;

  beforeEach(() => {
    page = new Ng2Test2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
