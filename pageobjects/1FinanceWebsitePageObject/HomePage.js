export default class HomePage {
    constructor(page){
        this.page = page;
        this.titleContent = page.locator("//div[@class='HomeSection_Container_Hero_One_Part_title_one__Vqav3']");
        this.bookAnAppointment = page.locator("//button[@class='HomeSection_CTAButton__yzbyv']");
        this.bookAnAppointment2 = page.locator("(//button[contains(@class,'ButtonCTA_BTNContainer__kyG9m')])[2]");
        this.bookAnAppointment3 = page.locator("//button[@class='DownloadCTA_CTAButton__ldBRh']");
        this.faqFirstTile =page.locator("(//div[@class='FAQSection_AccordionContent__c40Z9'])[1]");
        this.faqSecondTile = page.locator("(//div[@class='FAQSection_AccordionContent__c40Z9'])[2]");
        this.faqThirdTile = page.locator("(//div[@class='FAQSection_AccordionContent__c40Z9'])[3]");
        this.faqFourthTile = page.locator("(//div[@class='FAQSection_AccordionContent__c40Z9'])[4]");
        this.faqFifthTile = page.locator("(//div[@class='FAQSection_AccordionContent__c40Z9'])[5]");
        this.faqSixthTile = page.locator("(//div[@class='FAQSection_AccordionContent__c40Z9'])[6]");
        this.faqSeventhTile = page.locator("(//div[@class='FAQSection_AccordionContent__c40Z9'])[7]");
        this.faqEighthTile = page.locator("(//div[@class='FAQSection_AccordionContent__c40Z9'])[8]");
        this.faqNinthTile = page.locator("(//div[@class='FAQSection_AccordionContent__c40Z9'])[9]");
    }

    async goToHomePage(page, baseUrl) {
        await this.page.goto(baseUrl);
    }
}


