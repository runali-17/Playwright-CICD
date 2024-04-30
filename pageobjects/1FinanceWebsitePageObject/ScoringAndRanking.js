export default class ScoringAndRanking {
  constructor(page) {
    this.page = page;
    this.termInsurance = page.locator("//a[@href='/product-scoring/term-insurance']");
    this.healthInsurance = page.locator("//a[@href='/product-scoring/health-insurance']");
    this.creditCard = page.locator("//a[@href='/product-scoring/credit-card']");
    this.mutualFunds = page.locator("//a[@href='/product-scoring/mutual-funds?type=equity']");
    this.crypto = page.locator("//a[@href='/product-scoring/crypto']")
    this.titleContent = page.locator("//h1[normalize-space()='Scoring and Ranking']");
    this.firstTile = page.locator("//div[contains(@class, 'Accordion_accordion__gJ319')][1]");
    this.secondTile = page.locator("//div[contains(@class, 'Accordion_accordion__gJ319')][2]");
    this.thirdTile = page.locator("//div[contains(@class, 'Accordion_accordion__gJ319')][3]");
    this.fourthTile = page.locator("//div[contains(@class, 'Accordion_accordion__gJ319')][4]");
    this.fifthTile = page.locator("//div[contains(@class, 'Accordion_accordion__gJ319')][5]");
    this.sixthTile = page.locator("//div[contains(@class, 'Accordion_accordion__gJ319')][6]");
    this.globalSearchOption = page.locator("//div[@class='search_placeholder-container__gHXbf']");
    this.firstTileScoringRanking = page.locator("//div[contains(@class, 'mf-accordion_accordion__rIrR8')][1]");
    this.secondTileScoringRanking = page.locator("//div[contains(@class, 'mf-accordion_accordion__rIrR8')][2]");
    this.thirdTileScoringRanking = page.locator("//div[contains(@class, 'mf-accordion_accordion__rIrR8')][3]");
    this.fourthTileScoringRanking = page.locator("//div[contains(@class, 'mf-accordion_accordion__rIrR8')][4]");
    this.fifthTileScoringRanking = page.locator("//div[contains(@class, 'mf-accordion_accordion__rIrR8')][5]");
    this.sixthTileScoringRanking = page.locator("//div[contains(@class, 'mf-accordion_accordion__rIrR8')][6]");
    this.seventhTileScoringRanking = page.locator("//div[contains(@class, 'mf-accordion_accordion__rIrR8')][7]");
    this.eighthTileScoringRanking = page.locator("//div[contains(@class, 'mf-accordion_accordion__rIrR8')][8]");
    this.ninthTileScoringRanking = page.locator("//div[contains(@class, 'mf-accordion_accordion__rIrR8')][9]");
    this.tenthTileScoringRanking = page.locator("//div[contains(@class, 'mf-accordion_accordion__rIrR8')][10]");
    this.ourMethodologyTermIns = page.locator("//div[@class='termlandingPage_methodology_button__eucM_']");
    this.methodologyCloseButton = page.locator("(//*[name()='svg'][@role='button'])[1]");
    this.secondPageTermIns = page.locator("//button[normalize-space()='2']");
    this.viewDetailTermIns = page.locator("(//a[contains(text(),'View details')])[1]");
    this.positiveFeedbackTermIns = page.locator("//img[@class='feedback_feedback_img_like__r8MHL']");
    this.viewMoreTermIns = page.locator("//span[@class='featuredlistterm_view_more_title__OTE76']");
    this.downloadButton = page.locator("//button[contains(@class, 'downloadbtn_download-btn')]");
    this.closeButton = page.locator("//button[@id='DownloadAppModal_close__GJWVt']");
    this.searchBarHealthInsurance = page.locator("//div[@class='search_search-box__10Uuv']");
    this.viewDetailHealthIns = page.locator("//a[normalize-space()='View more plans']");
    this.viewMoreHealthIns = page.locator("//span[@class='FeaturedL_view_more_title__93HZ0']");
    this.positiveFeedbackHealthIns = page.locator("//img[@src='/images/masterclass/positive-feedback.svg']");
    this.positiveFeedbackCreditCard = page.locator("//div[@class='feedback_feedback_type_image__F1fkA']//div[1]");
    this.downloadButtonCreditCard = page.locator("//button[normalize-space()='Download the app']");
    this.positiveFeedbackMutualFunds = page.locator("//div[@class='feedback_feedback_type_image__bdm5_']//div[1]");
    this.firstTileCrypto = page.locator("(//div[@class='crypto-accordion_accordion__0N5k8'])[1]");
    this.secondTileCrypto = page.locator("(//div[@class='crypto-accordion_accordion__0N5k8'])[2]");
    this.thirdTileCrypro = page.locator("(//div[@class='crypto-accordion_accordion__0N5k8'])[3]");
    this.fourthTileCrypto = page.locator("(//div[@class='crypto-accordion_accordion__0N5k8'])[4]");
    this.fifthTileCrypto = page.locator("(//div[@class='crypto-accordion_accordion__0N5k8'])[5]");
    this.sixthTileCrypto = page.locator("(//div[@class='crypto-accordion_accordion__0N5k8'])[6]");
    this.seventhTileCrypto = page.locator("(//div[@class='crypto-accordion_accordion__0N5k8'])[7]");
    this.eighthTileCrypto = page.locator("(//div[@class='crypto-accordion_accordion__0N5k8'])[8]");
    this.ninthTileCrypto = page.locator("(//div[@class='crypto-accordion_accordion__0N5k8'])[9]");
    this.tenthTileCrypto = page.locator("(//div[@class='crypto-accordion_accordion__0N5k8'])[10]");
    this.healthInsuranceDropdown = page.locator("//div[@id='AgeGroup']");
    this.firstTileScoringParameter = page.locator()
  }

  async goToScoringRanking(page, baseUrl) {
    await this.page.goto(baseUrl + "product-scoring");
  }
}
