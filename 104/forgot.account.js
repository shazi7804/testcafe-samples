import { Selector, t } from 'testcafe';

fixture`Getting Started`
    .page`https://www.104.com.tw/jobs/main/`;

test('Identity ID input checked', async t => {
    await t
        .click(Selector('header span').withText('求職登入/註冊'))
        .click(Selector('main h2').withText('忘記帳號或密碼'))
        .click(Selector('#notloging a').withText('忘記帳號 Email'))
        .click('#iforgot [name="reType"]')
        // .click(Selector('[input[type=radio]'))
        .typeText(Selector('[name="identity"]'), '1')
        .expect(Selector('[name="identity"]').withAttribute(/class/, /fill-text fill-item/).exists).ok()

        .selectText(Selector('[name="identity"]')).pressKey('delete')
        .expect(Selector('[name="identity"]').withAttribute(/class/, /fill-text fill-item errored/).exists).ok()

        .expect(Selector('[class="btn primary js-submit"]').withAttribute(/disabled/, /disabled/).exists).ok();
});

