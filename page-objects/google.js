import { Selector, t } from 'testcafe';

class GoogleHome {
  async search(keyword) {
    await t
      .typeText(Selector('[name="q"]'), keyword)
      .wait(1000)
      .pressKey('enter')
      .wait(1000);
  }
}
  
export default new GoogleHome();