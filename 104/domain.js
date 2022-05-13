import { Selector, t, ClientFunction } from 'testcafe';

fixture`Getting Started`
    .page`https://www.104.com.tw/jobs/main/`;

test('Domain checked', async t => {
    const getPageUrl = await ClientFunction(() => window.location.href)();
    await t 
       .expect(getPageUrl).eql("https://www.104.comdd.tw/joddbs/main/");
    console.log(getPageUrl)
});

