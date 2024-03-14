fixture('actions demo tests')
    .page('https://trytestingthis.netlify.app/');

test('TetsCafe actions', async t => {
    await t
        // click
        .click('body > div.navbar > a:nth-child(1)')
        // .wait(2000)
        .click('body > div.navbar > a:nth-child(2)')
        // .wait(2000)
        // type text 'locator' 'actual text'
        .wait(2000)
        .typeText('#fname', 'Artir')
        .typeText('#lname', 'Guri')
        .wait(2000)
        // double click
        .doubleClick('body > div.row > div.side.ex1 > button')
        // .wait(2000)
        // right click
        .rightClick('#fname')
        // .expect(Selector('#cell-popup-menu').exists).notOk()
        // .wait(2000)
        // hover
        .hover('.tooltip')
        .wait(2000)
        // Drag and Drop
        .dragToElement('#drag1', '#div1')
        .wait(2000)
        // scroll to element 
        .scrollIntoView('body > div.footer > h4:nth-child(4) > a')
        .wait(2000)
        // Alert or popup
        .setNativeDialogHandler(() => true)
        .click('body > div.row > div.side.ex1 > div.pop-up-alert > button')
        .wait(2000)

        // Screenshot
        // .takeScreenshot('screenshot1.png')
})