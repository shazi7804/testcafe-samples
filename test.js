import GoogleHome from "./page-objects/google-search";

fixture`Getting Started`
    .page`https://google.com/`;

test("Search website", async t => {
    await GoogleHome.search("momo");
    await GoogleHome.search("yahoo");
});


