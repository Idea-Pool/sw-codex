const { default: teremock } = require('teremock');

exports.start = async () => {
    const puppeteer = await browser.getPuppeteer();
    const page = (await puppeteer.browser.pages())[0];
    await teremock.start({ page });
}

exports.stop = async () => {
    await teremock.stop();
}