import { FoodeePage } from './app.po';

describe('foodee App', () => {
  let page: FoodeePage;

  beforeEach(() => {
    page = new FoodeePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
