fixture('Getting Started')
    .page('https://google.com');

test('1st test', async t => {
    await t
        .typeText('#APjFqb', 'Learning TestCafe')
        .click('.gNO89b')
        .wait(2000);
});

test('2nd test', async t => {

})