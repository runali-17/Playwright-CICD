export default class MoneysignPage {
    constructor(page) {
        this.page = page;
        this.moneysign = page.locator("//div[contains(@class, 'headerStyles_navLinks__CEkii')]//a[1]");
        this.cardTitle = page.locator("//h4[contains(@class,'moneysign-redesign_swiper_moneysign_titilename__Akj4Q')]");
        this.vigilantTurtle = page.locator("(//div[@class='moneysign-redesign_moneysign_profile_data__gvH1p'])[1]");
        this.vigilantTurtleMobile = page.locator("//div[contains(@class,'moneysign-redesign_swiper_moneysign_turtle')]")
        this.persistantHorse = page.locator("//div[contains(@class, 'moneysign-redesign_moneysign_profile_data') and contains(@class, 'moneysign-redesign_moneysign_profile_horse')]");
        this.persistantHorseMobile = page.locator("//div[contains(@class,'moneysign-redesign_swiper_moneysign_horse')]")
        this.farsightedEagle = page.locator("//div[contains(@class, 'moneysign-redesign_moneysign_profile_data') and contains(@class, 'moneysign-redesign_moneysign_profile_eagle')]");
        this.farsightedEagleMobile = page.locator("//div[contains(@class,'moneysign-redesign_swiper_moneysign_eagle')]")
        this.opportunisticLion = page.locator("//div[contains(@class, 'moneysign-redesign_moneysign_profile_data') and contains(@class, 'moneysign-redesign_moneysign_profile_lion')]");
        this.opportunisticLionMobile = page.locator("//div[contains(@class,'moneysign-redesign_swiper_moneysign_lion')]")
        this.virtuousElephant = page.locator("//div[contains(@class, 'moneysign-redesign_moneysign_profile_data') and contains(@class, 'moneysign-redesign_moneysign_profile_elephant')]");
        this.virtuousElephantMobile = page.locator("//div[contains(@class,'moneysign-redesign_swiper_moneysign_elephant')]")
        this.enlightenedWhale = page.locator("//div[contains(@class, 'moneysign-redesign_moneysign_profile_data') and contains(@class, 'moneysign-redesign_moneysign_profile_wahle')]");
        this.enlightenedWhaleMobile = page.locator("//div[contains(@class,'moneysign-redesign_swiper_moneysign_wahle')]")
        this.tacticalTiger = page.locator("//div[contains(@class, 'moneysign-redesign_moneysign_profile_data') and contains(@class, 'moneysign-redesign_moneysign_profile_tiger')]");
        this.tacticalTigerMobile = page.locator("//div[contains(@class,'moneysign-redesign_swiper_moneysign_tiger')]")
        this.stealthyShark = page.locator("//div[contains(@class, 'moneysign-redesign_moneysign_profile_data') and contains(@class, 'moneysign-redesign_moneysign_profile_shark')]");
        this.stealthySharkMobile = page.locator("//div[contains(@class,'moneysign-redesign_swiper_moneysign_shark')]")
        this.closeCard = page.locator("//button[contains(@aria-label, 'close')]");
        this.nextButtonPreviousPage = page.locator("(//*[name()='svg'][@class='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-a7whoe'])[1]");
        this.nextButtonNextPage = page.locator("(//*[name()='svg'][@class='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-a7whoe'])[2]");
        this.downloadTheApp = page.locator("//button[normalize-space()='Download the app']");
        this.downloadAppContent = page.locator("//h3[normalize-space()='Download 1 Finance']");
        this.readMore = page.locator("//a[normalize-space()='Read more']");
        this.closeButton = page.locator("//button[@id='DownloadAppModal_close__GJWVt']");
        this.swipperBullet = page.locator("//span[@class='swiper-pagination-bullet']");
        this.scrollPage = async (page, iterations) => {
            for (let i = 0; i < iterations; i++) {
                page.keyboard.down('PageDown');
                await page.waitForTimeout(1000);
            }
        };
    }

    async commonStepsToScroll(page) {
        await this.scrollPage(this.page, 2);
    }

    async nextPage(page) {
        await this.nextButtonPreviousPage.click();
        await this.nextButtonNextPage.click();
        await this.nextButtonNextPage.click();
        await this.nextButtonNextPage.click();
        await this.nextButtonNextPage.click();
        await this.nextButtonNextPage.click();
        await this.nextButtonNextPage.click();
    }

    async previousPage(page) {
        await this.nextButtonPreviousPage.click();
        await this.nextButtonPreviousPage.click();
        await this.nextButtonPreviousPage.click();
        await this.nextButtonPreviousPage.click();
        await this.nextButtonPreviousPage.click();
        await this.nextButtonPreviousPage.click();
        await this.nextButtonPreviousPage.click();
        await this.nextButtonPreviousPage.click();
    }
}