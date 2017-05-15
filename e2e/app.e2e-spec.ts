import { Build2Page } from './app.po';

describe('build2 App', function() {
  let page: Build2Page;

  beforeEach(() => {
    page = new Build2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
