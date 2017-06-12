import { ToDOListPage } from './app.po';

describe('to-dolist App', () => {
  let page: ToDOListPage;

  beforeEach(() => {
    page = new ToDOListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
