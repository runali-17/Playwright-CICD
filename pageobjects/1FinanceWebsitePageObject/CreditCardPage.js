export default class CreditCardPage {
    constructor(page){
        this.page = page; 
        this.viewDetail = page.locator("//div[@id='bestCard-0']//a[@class='bestcardcredit_view_deatil__bD_I3'][normalize-space()='View details']");
        this.clickHere = page.locator("div[class='creditcard_methodology_para_open__X1qPt'] a[class='creditcard_methodology_Click__CUgwG']")
    }

    async scrollPage(page, iterations) {
        for (let i = 0; i < iterations; i++) {
            page.keyboard.down('PageDown');
            page.waitForTimeout(2000);
        }
    }
}