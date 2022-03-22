import { Selector, t } from 'testcafe';

fixture`Getting Started`
    .page`https://www.104.com.tw/jobs/search/?ro=0&expansionType=area%2Cspec%2Ccom%2Cjob%2Cwf%2Cwktm&order=16&asc=0&page=1&mode=s&jobsource=2018indexpoc&langFlag=0&langStatus=0&recommendJob=1&hotJob=1`;

const checkbox = Selector('[class="b-checkbox gtm-highend-switch"]');

test("Checkbox checked", async t => {
    await t
        .click(checkbox)
        .expect(checkbox.checked).ok()
});

