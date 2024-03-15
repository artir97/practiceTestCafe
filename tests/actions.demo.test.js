const { Selector } = require("testcafe");

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


fixture.only('actions demo tests 2')
    .page('https://trytestingthis.netlify.app/');


test('TestCafe Actions 2', async t => {
    const dropDown = Selector('#option');
    const dropDownOptions = dropDown.find('option');

    await t
        // Dropdown
        .click(dropDown)
        .click(dropDownOptions.withText('Option 2'))
        .expect(dropDown.value).eql('option 2')
        .wait(1000)
        // Upload a file 
        .setFilesToUpload('#myfile', ['./uploads/abc.txt','./uploads/def.txt'])
        .wait(1000)
        // .click('#upload-btn') if there is an upload button you can access it this way
        // Resize browser window
        .resizeWindow(500,500)
        .wait(500)
        .resizeWindow(1000,1000)
        .wait(500)
        .maximizeWindow()
        // Scroll Page
        .scrollBy(0, 500)
        .wait(500)
        .scrollBy(0,500)
        .wait(500)
        .scrollBy(0, -500)
        .wait(500)
        .scrollBy(0, -500)

        // Assertions
        .expect(Selector('body > div.navbar > a:nth-child(2)').innerText).eql('Home')

        // Navigate to
        .wait(2000)
        .navigateTo('https://google.de')
    })