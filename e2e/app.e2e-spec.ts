import { MlPresentationPage } from './app.po';

describe('ml-presentation App', () => {
  let page: MlPresentationPage;

  beforeEach(() => {
    page = new MlPresentationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
