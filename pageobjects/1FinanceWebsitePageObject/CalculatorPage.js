export default class CalculatorPage {
  constructor(page) {
    this.page = page;
    this.titleContent = page.locator("//h1[normalize-space()='Calculators']");
    this.calculator = page.locator("//a[@class='headerStyles_navLink__r3hGb'][normalize-space()='Calculators']");
    this.hraExemption = page.locator("//a[@href='/calculator/hra-exemption']");
    this.oldVsNewCalculator = page.locator("//a[@href='/calculator/old-vs-new']");
    this.mFPortfolioOverlap = page.locator("//a[@href='/calculator/portfolio-review']");
    this.increasingContribution = page.locator("//a[@href='/calculator/increasing-contribution']");
    this.insurance = page.locator("//a[@href='/calculator/insurance']");
    this.mutualFund = page.locator("//a[@href='/calculator/mutual-funds']");
    this.loanRefinance = page.locator("//a[@href='/calculator/loan-refinance']")
    this.retirementCorpus = page.locator("//a[@href='/calculator/retirement-corpus']");
    this.npsCalculator = page.locator("//a[@href='/calculator/nps']");
    this.calcBack = page.locator("//a[contains(@class,'calculators_nav-left')]");
    this.readMore = page.locator("//a[normalize-space()='Read more']");
    this.targetElement = page.locator("//div[normalize-space()='What is a HRA Calculator?']");
    this.firstTile = page.locator("(//div[contains(@class,'accordion_accordionHeader')])[1]");
    this.secondTile = page.locator("(//div[contains(@class,'accordion_accordionHeader')])[2]");
    this.thirdTile = page.locator("(//div[contains(@class,'accordion_accordionHeader')])[3]");
    this.fourthTile = page.locator("(//div[contains(@class,'accordion_accordionHeader')])[4]");
    this.downloadTheApp = page.locator("(//div[contains(@class,'download-app_btn-container')])[1]");
    this.cancelButton = page.locator("//button[contains(@id,'DownloadAppModal_close')]");
    this.npsCal = page.locator("//a[@href='/calculator/nps']");
    this.insuranceCal = page.locator("//a[@href='/calculator/insurance']");
    this.mutualFundCal = page.locator("//a[@href='/calculator/mutual-funds']");
    this.basicHra = page.locator("//div[contains(@class,'calculators_hra-form-content-container')]//div[2]//div[1]");
    this.errorStateBasicOne = page.locator("//div[contains(@class, 'calculators_hra-form-content-container')]//div[2]//span[2]");
    this.hra = page.locator("(//div[contains(@class, 'calculators_hra-form-input-container')])[3]");
    this.errorStateHra = page.locator("//span[contains(@class,'calculators_hra-form-warn')]");
    this.rentPaid = page.locator("//div[contains(@class,'calculators_hra-form__oke9l')]//div[4]//div[1]");
    this.toolTip = page.locator("//*[name()='path' and contains(@d,'M9 1.5C4.8')]");
    this.toolTipText = page.locator("//span[contains(@class, 'calculators_hra-form-question-icon-msg')]");
    this.yearly = page.locator("//button[normalize-space()='Yearly']");
    this.noRadioButton = page.locator("(//span[@class='custom-radio-button_customRadio__m3gcY'])[2]");
    this.donut = page.locator("//div[@class=\'calculators_donut-chart-container__nGCEE\']//canvas");
    this.calculated = page.locator("//div[@class='calculators_hra-chart-calculation-title__4zokU']//span//img");
    this.downloadResult = page.locator("//div[@class='calculators_hra-chart-download-result__lwncj']");
    this.viewMore = page.locator("//div[@class='calculators_hra-ideal-rent-view__kcRVo']");
    this.editButton = page.locator("//div[@class='calculators_hra-form-edit-container__pYO6Q']//span[2]");
    this.calculateAgain = page.locator("//button[normalize-space()='Calculate Again']");
    this.firstTile = page.locator("(//div[contains(@class,'accordion_accordion__3tr6O')])[1]");
    this.secondTile = page.locator("(//div[contains(@class,'accordion_accordion__3tr6O')])[2]");
    this.thirdTile = page.locator("(//div[contains(@class,'accordion_accordion__3tr6O')])[3]");
    this.fourthTile = page.locator("(//div[contains(@class,'accordion_accordion__3tr6O')])[4]");
    this.fifthTile = page.locator("(//div[contains(@class,'accordion_accordion__3tr6O')])[5]");
    this.sixthTile = page.locator("(//div[contains(@class,'accordion_accordion__3tr6O')])[6]");
    this.seventhTile = page.locator("(//div[contains(@class,'accordion_accordion__3tr6O')])[7]");
    this.eighthTile = page.locator("(//div[contains(@class,'accordion_accordion__3tr6O')])[8]");
    this.moreAboutNps = page.locator("//div[normalize-space()='More about NPS']");
    this.share = page.locator("//button[@class='NPSInvestmentperiodShare']");
    this.calcBackNps = page.locator("//a[contains(@class,'nps_nav-left')]");
    this.age = page.locator("(//div[contains(@class,'nps_hra-form-input-container')])[1]");
    this.currentAge = page.locator("(//div[contains(@class,'nps_hra-form-input-container-2__I9ggO')])[1]");
    this.errorStateCurrentAge = page.locator("//span[@class='nps_hra-form-warn__eQPOv']");
    this.investmentYears = page.locator("(//div[@class='nps_hra-form-input-container-2__I9ggO'])[2]");
    this.errorStateInvestmentYears = page.locator("//span[@class='nps_hra-form-warn__eQPOv']");
    this.nextButton = page.locator("//button[@type='button']");
    this.monthlyNps = page.locator("//button[normalize-space()='Monthly']");
    this.yearlyNps = page.locator("//button[normalize-space()='Yearly']");
    this.npsAmount = page.locator("//div[@class='nps_hra-form-input-container-2__I9ggO']");
    this.errorStateNpsAmount = page.locator("//span[@class='nps_hra-form-warn__eQPOv']");
    this.errorStateMaxLimit = page.locator("//span[normalize-space()='Maximum limit reached']");
    this.npsSliderContainer = page.locator("//div[@class='custom-slider_sliderContainer__HZONV']")
    this.npsSliderOverallWidth = page.locator('//div[contains(@class, "custom-slider_sliderContainer__HZONV")]//input');
    this.npsSliderWidth = page.locator('//div[contains(@class, "custom-slider_sliderContainer__HZONV")]/div[contains(@class, "custom-slider_track__7CPUw")]');
    this.sliderElement = page.locator('.custom-slider_slider__ZYAcO');
    this.tooltipElement = page.locator('.custom-slider_tooltip__9S615');
    this.npsNextButton2 = page.locator("//button[@class='nps_nps_right_arrow_btn__xZhlH NPSInvestmentperiod2click NPSInvestmentperiodEditDetailsclick2']");
    this.npsDropdownTaxSlab = page.locator("//div[@class='custom-dropdown_selectedOption__DT94Q']");
    this.npsCustomDropdownTaxSlab = page.locator("//div[@class='custom-dropdown_options__3d6Zo']");
    this.npsDropdown5 = page.locator("//div[@class='custom-dropdown_option__DHK9u NPSInvestmentperiodExpectedReturnOnInvestment5%']");
    this.npsDropdown10 = page.locator("//div[@class='custom-dropdown_option__DHK9u NPSInvestmentperiodExpectedReturnOnInvestment10%']");
    this.npsDropdown15 = page.locator("//div[@class='custom-dropdown_option__DHK9u NPSInvestmentperiodExpectedReturnOnInvestment15%']");
    this.npsDropdown20 = page.locator("//div[@class='custom-dropdown_option__DHK9u NPSInvestmentperiodExpectedReturnOnInvestment20%']");
    this.npsDropdown25 = page.locator("//div[@class='custom-dropdown_option__DHK9u NPSInvestmentperiodExpectedReturnOnInvestment25%']");
    this.npsDropdown30 = page.locator("//div[@class='custom-dropdown_option__DHK9u NPSInvestmentperiodExpectedReturnOnInvestment30%']");
    this.npsRadioButtonEquity = page.locator("(//span[@class='custom-radio-button_customRadio__m3gcY'])[1]");
    this.npsRadioButtonDebt = page.locator("(//span[@class='custom-radio-button_customRadio__m3gcY'])[2]");
    this.npsRadioButtonPpf = page.locator("(//span[@class='custom-radio-button_customRadio__m3gcY'])[3]");
    this.npsRadioButtonOthers = page.locator("(//span[@class='custom-radio-button_customRadio__m3gcY'])[4]");
    this.npsOthersToolTip = page.locator("//span[@class='nps_hra-form-question-icon__FQxp9 NPSInvestmentRadioButtonOthersInfoclick']");
    this.npsKnowMore1 = page.locator("//div[@class='nps_hra-form-input-container___dziW']//span[@class='nps_nps_know_more__ahpJW'][normalize-space()='Know More']");
    this.npsKnowMoreContent1 = page.locator("//div[@class='nps_npsia_title__ffTVR']");
    this.npsKnowMoreCancelButton1 = page.locator("//div[@class='nps_npsia_closeBtn__sukM8']//*[name()='svg']");
    this.npsKnowMore2 = page.locator("//span[contains(text(),'Historically, returns of 8% - 13% have been observ')]//span[@class='nps_nps_know_more__ahpJW'][normalize-space()='Know More']");
    this.npsKnowMoreContent2 = page.locator("//div[@class='nps_eroi_title__3gcBo']");
    this.npsKnowMoreCancelButton2 = page.locator("//div[@class='nps_eroi_closeBtn__3JjX6']");
    this.npsKnowMore3 = page.locator("(//span[@class='nps_nps_know_more__ahpJW'][normalize-space()='Know More'])[1]");
    this.npsKnowMoreContent3 = page.locator("//div[@class='nps_its_title__jIzm3']");
    this.npsKnowMoreCancelButton3 = page.locator("//div[@class='nps_its_closeBtn__1Z_2A']");
    this.npsKnowMore4 = page.locator("(//span[@class='nps_nps_know_more__ahpJW'][normalize-space()='Know More'])[2]");
    this.npsKnowMoreContent4 = page.locator("//div[@class='nps_rooi_title__UFbKm']");
    this.npsKnowMoreCancelButton4 = page.locator("//div[@class='nps_rooi_closeBtn__QJw8Z']");
    this.rccCalculator = page.locator("//a[@href='/calculator/retirement-corpus']");
    this.rccReadMoreScroll = page.locator("//div[normalize-space()='How will this Retirement Corpus Calculator help you?']");
    this.calcBackRcc = page.locator("//a[@class='RetirementCorpus_nav-left__VSuY6 retirement_corpus_to_all_calculator']//img");
    this.rccFirstContainer = page.locator("(//div[@class='RetirementCorpus_hra-form-input-container-2__gE_bM'])[1]")
    this.errorStateRccLanding = page.locator("(//span[contains(@class,'RetirementCorpus_hra-form-warn')])[1]");
    this.rccSecondContainer = page.locator("(//div[@class='RetirementCorpus_hra-form-input-container-2__gE_bM'])[2]");
    this.rccThirdContainer = page.locator("(//div[@class='RetirementCorpus_hra-form-input-container-2__gE_bM'])[3]");
    this.rccKnowMore1 = page.locator("(//span[contains(text(),'Know More')])[1]");
    this.rccKnowMore2 = page.locator("(//span[contains(text(),'Know More')])[2]");
    this.rccCloseButton = page.locator("//div[@class='RetirementCorpus_npsia_closeBtn__ItVgH']");
    this.calculateButton = page.locator("//button[normalize-space()='Calculate']");
    this.rccEditButton = page.locator("//span[@class='retirement_corpus_edit_details']");
    this.calculateAgainButton = page.locator("//button[normalize-space()='Calculate Again']");
    this.lfcCalculator = page.locator("//a[@href='/calculator/loan-refinance']");
    this.lfcReadMoreScroll = page.locator("//div[normalize-space()='Common Types of Loan Refinancing']");
    this.calcBackLfc = page.locator("//a[@class='LoanRefinance_nav-left__D7L3q']//img");
    this.lfcFirstContainer = page.locator("(//div[contains(@class,'LoanRefinance_hra-form-input-container')])[1]")
    this.lfcSecondContainer = page.locator("(//div[contains(@class,'LoanRefinance_hra-form-input-container')])[3]")
    this.lfcThirdContainer = page.locator("(//div[contains(@class,'LoanRefinance_hra-form-input-container')])[5]")
    this.errorStateLfcLanding = page.locator("//span[@class='LoanRefinance_hra-form-warn__JtNR6']")
    this.errorStateLfcLanding2 = page.locator("(//span[contains(@class,'LoanRefinance_hra-form-warn')])[1]");
    this.lfcEditButton = page.locator("//span[@class='LoanRefinanceEditDetails']");
    this.whatsapp = page.locator("//a[normalize-space()='WhatsApp Us']");
    this.lfcChartExpansion = page.locator("//span[@class='LoanRefinance_lfc_chart_detail_img__Jp0uT']");
    this.oldVsNewReadMoreScroll = page.locator("//div[normalize-space()='What are the old and new tax regimes?']");
    this.calcBackOldVsNew = page.locator("//a[@class='OldVsNew_nav-left__44Xl3']");
    this.oldVsNewSecondContainer = page.locator("(//div[@class='OldVsNew_hra-form-input-container-2__RzJ4F'])[1]");
    this.oldVsNewThirdContainer = page.locator("(//div[@class='OldVsNew_hra-form-input-container-2__RzJ4F'])[2]");
    this.errorStateOldVsNewLanding = page.locator("//span[@class='OldVsNew_hra-form-warn__u460x']");
    this.oldVsNewNextButton = page.locator("//button[@type='button']");
    this.oldVsNewToast = page.locator("//p[@class='OldVsNew_toast-alert-text__Szxv0']");
    this.oldVsNewRadioButton2 = page.locator("(//span[contains(@class, 'customRadio')])[2]");
    this.oldVsNewAgeDropdown = page.locator("//img[@class='BasicDetailDropdown_downArrow__rHgZh']");
    this.oldVsNewDropdownOptions = page.locator('.BasicDetailDropdown_option__oOZum');
    this.oldVsNewSelectedDropdownOption = page.locator("//span[@class='BasicDetailDropdown_selectedOptionText__S_Ciw']");
    this.oldVsNewFirstOption = page.locator("//div[normalize-space()='0-59']");
    this.oldVsNewSecondOption = page.locator("//div[normalize-space()='60-79']");
    this.oldVsNewThirdOption = page.locator("//div[normalize-space()='80 and above']");
    this.oldVsNewExemptionDropdown = page.locator("//div[@class='ExemptionDropdown_selectedOption__y5AwR']//img");
    this.oldVsNewDropdownList = page.locator("//div[@class='ExemptionDropdown_options__BoZ4B ExemptionDropdown_open__0VauG']");
    this.oldVsNewExemptionFirstOption = page.locator("//div[normalize-space()='Exempted HRA, 10(13A)']");
    this.oldVsNewExemptionSelectedOption = page.locator("//span[@class='AllExemptions_section_title__it5ls']");
    this.oldVsNewAddMoreButton = page.locator("//button[normalize-space()='Add More']");
    this.oldVsNewDropdownContainer = page.locator("//div[@class='ExemptionDropdown_selectedOption__y5AwR']");
    this.oldVsNewCrossButton = page.locator("//div[@class='AllExemptions_closebtn_container__sT5Ld']//button//img");
    this.errorStateOldVsNew = page.locator("//span[@class='OldVsNew_hra-form-warn__u460x']");
    this.oldVsNewCalculate = page.locator("//div[@class='OldVsNew_hra-form-cal__Qag2s']//div");
    this.oldVsNewAmountSection = page.locator("//div[@class='OldVsNew_hra-form-input-container-2__RzJ4F']");
    this.oldVsNewPreviousButton = page.locator("//button[@class='OldVsNew_nps_right_arrow_btn__NsTGc']");
    this.oldVsNewCalculateButton = page.locator("//button[contains(@class, 'OldVsNew_hra-form-cal-btn__HkmvB')]");
    this.insuranceTitle = page.locator("//h3[normalize-space()='Type of insurance']");
    this.mutualFundTitle = page.locator("//h1[normalize-space()='Mutual fund']");
    this.mutualFundPortfolioOverlapTitle = page.locator("(//h1[normalize-space()='Mutual Fund Portfolio Overlap'])[1]");
    this.mFPortfolioCurrentFund = page.locator("(//div[@class='portfolio-review_card__4Fjk6'])[1]");
    this.increasingContributionTitle = page.locator("//h1[normalize-space()='Increasing Contribution Calculator']");
    this.increasingContributionInvestmentAmount = page.locator("//input[@name='investmentAmount']");
    this.increasingContributionAnnualStepUp = page.locator("//input[@name='annualStepUp']");
    this.increasingContributionRateOfReturn = page.locator("//input[@name='rateofReturn']");
    this.increasingContributionTimePeriod = page.locator("//input[@name='timePeriod']");
    this.increasingContributionResultPage = page.locator("//div[@class='IncreasingContribution_hra-chart-title__nF2e9']");
    this.downloadTheAppTitle = page.locator("//h3[normalize-space()='Download 1 Finance']");
    this.tryOtherCal = page.locator("//div[@class='IncreasingContribution_other_investment_calculator__YETJc']")
    this.tryOtherCalculatorSection = page.locator("//a[normalize-space()='Try other calculators']")
    this.shareButton = page.locator("//img[@class='IncreasingContribution_share-nav-img__V0nHH']")
    this.calcBackIncreasingContribution = page.locator("//a[@class='IncreasingContribution_nav-left__znDPy']");
    this.surrenderValueTitle = page.locator("//body/div[@id='__next']/div/section[@class='Header_section_container__ry5p9']/h1[1]");
    this.clickOnHowItIsUseBtn = page.locator("//button[normalize-space()='How to use the calculator?']");
    this.howItIsUsePopup = page.locator("//h4[@class='HowModal_informationText_content_box_title__fFwwb']");
    this.clickOnCrossBtn = page.locator("//div[@class='HowModal_cross_svg__fztHn']//*[name()='svg']");
    this.policyDetailsTitle = page.locator("//span[@class='Step1_header_text__lqaPn']");
    this.clickOnPolicyStartYear = page.locator("//input[@placeholder='eg. 2020']");
    this.errorStatePolicyStartYear1 = page.locator("//p[@class='Input_error__rY4Ym']");
    this.errorStatePolicyStartYear2 = page.locator("//p[@class='Input_error__rY4Ym']");
    this.clickOnPolicyTerm = page.locator("//input[@placeholder='eg. 5']");
    this.errorStatePolicyTerm1 = page.locator("//p[@class='Input_error__rY4Ym']");
    this.clickOnPremiumPaymentType = page.locator("//input[@placeholder='Select Options']");
    this.clickOnRegularPay = page.locator("//span[normalize-space()='Regular Pay']");
    this.clickOnNextBtn = page.locator("//button[@class='PptModal_btn__8WcME']//*[name()='svg']");
    this.errorStatePremiumPaymentType1 = page.locator("//p[@class='Input_error__rY4Ym']"); //error for without filling above 2 fields
    this.clickOnLastPremiumPaid = page.locator("//input[@placeholder='eg. 2023']");
    this.nextButton = page.locator("//button[@class='Step1_btn__bU1Xc']");
    this.clickOnSumAssured = page.locator("//input[@placeholder='eg. ₹15,00,000']");
    this.clickOnAnnualPremium = page.locator("//div[@class='Step2_inputs_container__YFLAh']//div[2]//div[2]//input[1]");
    this.clickOnCalculateBtn = page.locator("//button[normalize-space()='Calculate']");
    this.clickOnBookaSlotBtn = page.locator("//button[@class='StillConfused_btn__fA_BS']");
    this.toBookaSlotText = page.locator("//div[@class='BookSlotModal_modal__szohq BookSlotModal_open__8jPps']//div//h3[@class='BookSlotModal_qa_title__E1czt'][normalize-space()='To book a slot kindly download the app']");
    this.haveAnyQueries = page.locator("//div[@class='BookSlotModal_modal__szohq BookSlotModal_open__8jPps']//div//h3[@class='BookSlotModal_whatpp_title__2YOFA'][normalize-space()='Have any queries?']");
    this.whatsappUsCta = page.locator("//div[@class='BookSlotModal_modal__szohq BookSlotModal_open__8jPps']//div//button[@class='BookSlotModal_whatsaap_button__efFxT'][normalize-space()='WhatsApp Us']");
    this.crossBtnBookaSlot = page.locator("//body/div[@id='__next']/div/section[@class='Calculator_section_container__fkk4F']/div[@class='Calculator_banner_section__8CAiB']/div[@class='InfoCards_info_cards__ULBKm']/div[@class='StillConfused_card__I2ZC7']/div[@class='BookSlotModal_modal__szohq BookSlotModal_open__8jPps']/div/div[@class='BookSlotModal_bookslot_qr__Q02az']/div[1]//*[name()='svg']");
    this.tableOfContentTitle1 = page.locator("//a[contains(text(),'Surrendering a Life Insurance Policy: Insights fro')]");
    this.tableOfContentTitle2 = page.locator("//a[contains(text(),'Why consider surrendering your endowment policy?')]");
    this.tableOfContentTitle3 = page.locator("//a[normalize-space()='Why does one surrender a policy?']");
    this.tableOfContentTitle4 = page.locator("//a[normalize-space()='When can the policy be surrendered?']");
    this.tableOfContentTitle5 = page.locator("//a[normalize-space()='How is the surrender value calculated?']");
    this.tableOfContentTitle6 = page.locator("//a[normalize-space()='Documents required for surrendering the policy']");
    this.tableOfContentTitle7 = page.locator("//a[normalize-space()='How to use the Surrender Value Calculator?']");
    this.tableOfContentTitle8 = page.locator("//a[contains(text(),'Key factors to consider when using the Surrender V')]");
    this.tableOfContentTitle9 = page.locator("//a[contains(text(),'IRDAI regulatory changes and the Surrender Value C')]");
    this.faqTitle = page.locator("//p[normalize-space()='FAQ']");
    this.faqTitleMain = page.locator("//div[@class='StaticText_faq_container_web__bFsrw']//h3[@class='StaticText_faq_main_title__f8sdp'][normalize-space()='Frequently Asked Questions']");
    this.otherCalTitle = page.locator("//p[normalize-space()='OTHER CALCULATORS']");
    this.clickOnEditDetails = page.locator("//span[@class='Result_edit_details__RmdqQ']");
    this.howItIsCalculated = page.locator("//div[@class='Result_surrender_how__xkOIT']");
    this.svfFormula = page.locator("//div[@class='FormulaModal_formula_svf_text__tSduA']");
    this.svfCrossBtn = page.locator("(//*[name()='svg'][@class='FormulaModal_cross_button__pKCVN'])");
    this.downloadResult = page.locator("//span[@class='Result_download_report__c25eD']");
    this.clickOnKnowMore = page.locator("//span[@class='Result_know_more_text__u_exN']");
    this.whyConsiderSurrenderTitle = page.locator("//h4[normalize-space()='Why consider surrender?']");
    this.knowMoreCrossBtn = page.locator("(//*[name()='svg'][@class='KnowMoreModal_cross_button__jy_fo'])[1]");
    this.firstTileSurrender = page.locator("//div[contains(@class,'accordion_accordion__3tr6O surrender-valueFAQ')][1]")
    this.secondTileSurrender = page.locator("//div[contains(@class,'accordion_accordion__3tr6O surrender-valueFAQ')][2]")
    this.thirdTileSurrender = page.locator("//div[contains(@class,'accordion_accordion__3tr6O surrender-valueFAQ')][3]")
    this.fourthTileSurrender = page.locator("//div[contains(@class,'accordion_accordion__3tr6O surrender-valueFAQ')][4]")
    this.fifthTileSurrender = page.locator("//div[contains(@class,'accordion_accordion__3tr6O surrender-valueFAQ')][5]")
    this.sixthTileSurrender = page.locator("//div[contains(@class,'accordion_accordion__3tr6O surrender-valueFAQ')][6]")
    this.seventhTileSurrender = page.locator("//div[contains(@class,'accordion_accordion__3tr6O surrender-valueFAQ')][7]")
    this.eighthTileSurrender = page.locator("//div[contains(@class,'accordion_accordion__3tr6O surrender-valueFAQ')][8]")
    this.bookASlot = page.locator("//button[@class='StaticText_bookslot_button__gSsOG']");
    this.bookASlotContent = page.locator("//div[@class='BookSlotModal_modal__szohq BookSlotModal_open__8jPps']//div//h3[@class='BookSlotModal_qa_title__E1czt'][normalize-space()='To book a slot kindly download the app']");
    this.firstCal = page.locator("(//div[@class='StaticText_other_cal_card___h7m7'])[2]")
    this.secondCal = page.locator("(//div[@class='StaticText_other_cal_card___h7m7'])[3]")
    this.thirdCal = page.locator("(//div[@class='StaticText_other_cal_card___h7m7'])[4]")
    this.fourthCal = page.locator("(//div[@class='StaticText_other_cal_card___h7m7'])[5]")
    this.fifthCal = page.locator("(//div[@class='StaticText_other_cal_card___h7m7'])[6]")
    this.sixthCal = page.locator("(//div[@class='StaticText_other_cal_card___h7m7'])[7]")
    this.seventhCal = page.locator("(//div[@class='StaticText_other_cal_card___h7m7'])[8]")
    this.eighthCal = page.locator("(//div[@class='StaticText_other_cal_card___h7m7'])[9]")
  }

  async goToCalLanding(page, baseUrl) {
    await this.page.goto(baseUrl + "calculator");
  }

  async surrenderValueInput(page) {
    await this.clickOnPolicyStartYear.click();
    await this.clickOnPolicyStartYear.fill("2015");
    await this.clickOnPolicyTerm.click()
    await this.clickOnPolicyTerm.fill("40");
    await this.clickOnPremiumPaymentType.click();
    await this.clickOnRegularPay.click();
    await this.clickOnNextBtn.click();
    await this.clickOnLastPremiumPaid.click()
    await this.clickOnLastPremiumPaid.fill("2024");
    await this.nextButton.click();
    await this.clickOnSumAssured.click();
    await this.clickOnSumAssured.fill("2000000");
    await this.clickOnAnnualPremium.click();
    await this.clickOnAnnualPremium.fill("500000");
    await this.clickOnCalculateBtn.click()
}
}
