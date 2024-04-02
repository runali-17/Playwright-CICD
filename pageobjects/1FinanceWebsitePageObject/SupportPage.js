export default class SupportPage {
    constructor(page){
        //this will make the page availabe to every other method
        this.page = page;
        this.supportTitle = page.locator("//h1[normalize-space()='How can we assist you?']");
        this.whatsappButton = page.locator("//img[@alt='whatsapp']");
        this.firstTile = page.locator("(//button[@type='button'])[1]");
        this.secondTile = page.locator("(//button[@type='button'])[2]");
        this.thirdTile = page.locator("(//button[@type='button'])[3]");
        this.fourthTile = page.locator("(//button[@type='button'])[4]");
        this.fifthTile = page.locator("(//button[@type='button'])[5]");
        this.sixthTile = page.locator("(//button[@type='button'])[6]");
        this.whatsapp = page.locator("//img[@alt='whatsapp']");
    }
}

