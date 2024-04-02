export default class CommonFunctions {
    constructor(page) {}

    async scrollPage(page, iterations) {
        for (let i = 0; i < iterations; i++) {
            await page.keyboard.down('PageDown');
        }
    }
}

