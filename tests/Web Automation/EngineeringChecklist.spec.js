const { test, expect } = require('@playwright/test');

import { CommonFunctions, HomePage, CalculatorPage, ScoringAndRanking, MoneysignPage, MagazinePage, OurStoryPage, Careers, BlogPage, CommunityPage, MasterclassPage, SupportPage, BecomeQfaPage, GfpSummitPage, SitemapPage, LegalAndRegulatoryPage, TermsOfUsePage, PrivacyPolicyPage, BlogsPage, CircleOfTrust, SurrenderValue } from '../../pageobjects/index.js';

const baseUrl = "https://1finance.co.in/";

test.describe("QA Automation", () => {

    let commonFunctions;

    test.describe.only('Homepage', () => {

        let homePage;

        test.beforeEach(async ({ page }) => {
            homePage = new HomePage(page);
            commonFunctions = new CommonFunctions(page);
            await homePage.goToHomePage(page, baseUrl);
        });

        test('Go to home page and assert title of the page', async ({ page }) => {
            await expect.soft(homePage.titleContent).toContainText("Get Holistic Financial Planning");
            await expect.soft(page).toHaveTitle("Personal Financial Management & Planning - Best Personal Finance Advisory in India | 1Finance");
        });

        test('Click on download the App present on 1 Finance Landing Page', async ({ page }) => {
            await homePage.downloadAppButton.click();
            await page.waitForTimeout(2000);
            // const url = page.url();

            // if (url === baseUrl) {
            //     await expect(homePage.downloadTheAppContent).toContainText("Download 1 Finance");
            //     await homePage.closeDownloadScreen.click();
            // }
            // else {
            //     expect(page.url()).toContain("https://1finance.onelink.me");
            // }

        });

        test('Click on cashflow planning and assert response', async ({ page }) => {
            // await commonFunctions.scrollPage(page, 1);
            await homePage.cashFlowPlanning.click();
            await expect(homePage.cashFlowContent).toContainText("Cashflow Planning");
        });

        test('Click on liability planning and assert response', async ({ page }) => {
            await homePage.liabilityPlanning.click();
            await expect(homePage.liabilityContent).toContainText("Liability Planning");
        });

        test('Click on tax planning and assert response', async ({ page }) => {
            await homePage.taxPlanning.click();
            await expect(homePage.taxContent).toContainText("Tax Planning");
        });

        test('Click on insurance planning and assert response', async ({ page }) => {
            await homePage.insurancePlanning.click();
            await expect(homePage.insuranceContent).toContainText("Insurance Planning");
        });

        test('Click on investment planning and assert response', async ({ page }) => {
            await homePage.investmentPlanning.click();
            await expect(homePage.investmentContent).toContainText("Investment Planning");
        });

        test('Click on will planning and assert response', async ({ page }) => {
            await homePage.willPlanning.click();
            await expect(homePage.willContent).toContainText("Will & Estate Planning");
        });

        test('Click on download the app in How it Works ? section of Home Page', async ({ page }) => {
            // await commonFunctions.scrollPage(page, 2);
            await homePage.downloadAppButtonTwo.click();
            await page.waitForTimeout(2000);
            // const url = page.url();
            // if (url === baseUrl) {
            //     await expect(homePage.downloadTheAppContent).toContainText("Download 1 Finance");
            //     await homePage.closeDownloadScreen.click();
            // }
            // else {
            //     expect(page.url()).toContain("https://1finance.onelink.me");
            // }
        });

        test('Click on download the app of FWP section on Home Page', async ({ page }) => {
            // await commonFunctions.scrollPage(page, 3);
            await homePage.downloadAppButtonThree.click();
            await page.waitForTimeout(2000);

            // const url = page.url();

            // if (url === baseUrl) {
            //     await expect(homePage.downloadTheAppContent).toContainText("Download 1 Finance");
            //     await homePage.closeDownloadScreen.click();
            // }
            // else {
            //     expect(page.url()).toContain("https://1finance.onelink.me");
            // }
        });

        test('To check expansion and collapse tile in FAQ section', async ({ page }) => {
            await homePage.faqFirstTile.click();
            await homePage.faqSecondTile.click();
            await homePage.faqThirdTile.click();
            await homePage.faqFourthTile.click();
            await homePage.faqFifthTile.click();
        });
    })

    test.describe.only("Calculator's Landing Page", async () => {

        let calculatorPage;

        test.beforeEach(async ({ page }) => {
            calculatorPage = new CalculatorPage(page);
            commonFunctions = new CommonFunctions(page);
            await calculatorPage.goToCalLanding(page, baseUrl);
        });

        test('To check the title on Calculator Page', async ({ page }) => {
            await expect(page).toHaveTitle('Calculators | Personal Finance | Financial Planning | 1 Finance');
        });

        test('To click on HRA Exemption and assert response', async ({ page }) => {
            await calculatorPage.hraExemption.click();
            await page.waitForTimeout(2000);
            await expect.soft(page).toHaveURL(baseUrl + "calculator/hra-exemption");
        });

        test('To click on Old Vs New Calculator and assert response', async ({ page }) => {
            await calculatorPage.oldVsNewCalculator.click();
            await page.waitForTimeout(2000);
            await expect.soft(page).toHaveURL(baseUrl + "calculator/old-vs-new");
        });

        test('To click on Mutual Fund Portfolio Overlap and assert response', async ({ page }) => {
            await calculatorPage.mFPortfolioOverlap.click();
            await page.waitForTimeout(2000);
            await expect.soft(page).toHaveURL(baseUrl + "calculator/portfolio-review");
        });

        test('To click on Increasing Contribution and assert response', async ({ page }) => {
            await calculatorPage.increasingContribution.click();
            await page.waitForTimeout(2000);
            await expect.soft(page).toHaveURL(baseUrl + "calculator/increasing-contribution");
        });

        test('To click on Insurance and assert response', async ({ page }) => {
            await calculatorPage.insurance.click();
            await page.waitForTimeout(2000);
            await expect.soft(page).toHaveURL(baseUrl + "calculator/insurance")
        })

        test('To click on Mutual Funds and assert response', async ({ page }) => {
            await calculatorPage.mutualFund.click();
            await page.waitForTimeout(2000);
            await expect.soft(page).toHaveURL(baseUrl + "calculator/mutual-funds");
        })

        test('To click on Loan Refinance and assert response', async ({ page }) => {
            await calculatorPage.loanRefinance.click();
            await page.waitForTimeout(2000);
            await expect.soft(page).toHaveURL(baseUrl + "calculator/loan-refinance");
        })

        test('To click on NPS Calculator and assert response', async ({ page }) => {
            await calculatorPage.npsCalculator.click();
            await page.waitForTimeout(2000);
            await expect.soft(page).toHaveURL(baseUrl + "calculator/nps");
        });

        test('To click on Retirement Corpus and assert response', async ({ page }) => {
            await calculatorPage.retirementCorpus.click();
            await page.waitForTimeout(2000);
            await expect.soft(page).toHaveURL(baseUrl + "calculator/retirement-corpus");
        });

    });

    test.describe("Scoring and Ranking's Landing Page", async () => {

        let scoringAndRanking;

        test.beforeEach(async ({ page }) => {
            scoringAndRanking = new ScoringAndRanking(page);
            commonFunctions = new CommonFunctions(page);
            await scoringAndRanking.goToScoringRanking(page, baseUrl);
        });

        test('To check the title on Scoring and Ranking Landing Page', async ({ page }) => {
            await expect(page).toHaveTitle('Financial Products | Scoring & Ranking Model | 1 Finance');
        });

        test('To click on Term Insurance and assert response', async ({ page }) => {
            await scoringAndRanking.termInsurance.click();
            await page.waitForTimeout(2000)
            await expect.soft(page).toHaveURL(baseUrl + "product-scoring/term-insurance");
        });

        test('To click on Health Insurance and assert response', async ({ page }) => {
            await scoringAndRanking.healthInsurance.click();
            await page.waitForTimeout(2000)
            await expect.soft(page).toHaveURL(baseUrl + "product-scoring/health-insurance");
        });

        test('To click on Credit Card and assert response', async ({ page }) => {
            await scoringAndRanking.creditCard.click();
            await page.waitForTimeout(2000)
            await expect.soft(page).toHaveURL(baseUrl + "product-scoring/credit-card");
        });

        test('To click on Mutual Fund and assert response', async ({ page }) => {
            await scoringAndRanking.mutualFunds.click();
            await page.waitForTimeout(2000)
            await expect.soft(page).toHaveURL(baseUrl + "product-scoring/mutual-funds?type=equity");
        });

        test('To click on Crypto and assert response', async ({ page }) => {
            await scoringAndRanking.crypto.click();
            await page.waitForTimeout(2000)
            await expect.soft(page).toHaveURL(baseUrl + "product-scoring/crypto")
        })

        test("To check if the expansion and collapse tile is functional and assert response", async ({ page }) => {
            await scoringAndRanking.firstTile.click();
            await scoringAndRanking.secondTile.click();
            await scoringAndRanking.thirdTile.click();
            await scoringAndRanking.fourthTile.click();
            await scoringAndRanking.fifthTile.click();
            await scoringAndRanking.sixthTile.click();
        })

    })

    test.describe("MoneySign Guide Page", async () => {
        let moneysignPage;

        test.beforeEach(async ({ page }) => {
            moneysignPage = new MoneysignPage(page);
            commonFunctions = new CommonFunctions(page);
            await page.goto(baseUrl + "moneysign-guide");
        });

        test('To launch Moneysign page and assert title', async ({ page }) => {
            await expect(page).toHaveTitle('MoneySign® - Smart & Accurate Personal Financial Solutions App| 1Finance');
        });

        test('Click on vigilant turtle, assert response, and then close the card', async ({ page, isMobile }) => {
            if (isMobile) {
                await moneysignPage.vigilantTurtleMobile.click();
            } else {
                await moneysignPage.vigilantTurtle.click();
            }
            const title = await moneysignPage.cardTitle.innerText();
            expect(title).toContain("Vigilant Turtle");
            await moneysignPage.closeCard.click();
        });

        test('Click on Persistant Horse, assert response, and then close the card', async ({ page, isMobile }) => {
            if (isMobile) {
                await moneysignPage.persistantHorseMobile.click();
            } else {
                await moneysignPage.persistantHorse.click();
            }
            const title = await moneysignPage.cardTitle.innerText();
            expect(title).toContain("Persistent Horse");
            await moneysignPage.closeCard.click();
        });

        test('Click on Far-Sighted Eagle, assert response, and then close the card', async ({ page, isMobile }) => {
            if (isMobile) {
                await moneysignPage.farsightedEagleMobile.click();
            } else {
                await moneysignPage.farsightedEagle.click();
            }
            const title = await moneysignPage.cardTitle.innerText();
            expect(title).toContain("Far-Sighted Eagle");
            await moneysignPage.closeCard.click();
        });

        test('Click on Opportunistic Lion, assert response, and then close the card', async ({ page, isMobile }) => {
            if (isMobile) {
                await moneysignPage.opportunisticLionMobile.click();
            } else {
                await moneysignPage.opportunisticLion.click();
            }

            const title = await moneysignPage.cardTitle.innerText();
            expect(title).toContain("Opportunistic Lion");
            await moneysignPage.closeCard.click();
        });

        test('Click on Virtuous Elephant, assert response, and then close the card', async ({ page, isMobile }) => {
            if (isMobile) {
                await moneysignPage.swipperBullet.click();
                await moneysignPage.virtuousElephantMobile.click();
            } else {
                await moneysignPage.virtuousElephant.click();
            }

            const title = await moneysignPage.cardTitle.innerText();
            expect(title).toContain("Virtuous Elephant");
            await moneysignPage.closeCard.click();
        });

        test('Click on Enlightened Whale, assert response, and then close the card', async ({ page, isMobile }) => {
            if (isMobile) {
                await moneysignPage.swipperBullet.click();
                await moneysignPage.enlightenedWhaleMobile.click();
            } else {
                await moneysignPage.enlightenedWhale.click();
            }

            const title = await moneysignPage.cardTitle.innerText();
            expect(title).toContain("Enlightened Whale");
            await moneysignPage.closeCard.click();
        });

        test('Click on Tactical Tiger, assert response, and then close the card', async ({ page, isMobile }) => {
            if (isMobile) {
                await moneysignPage.swipperBullet.click();
                await moneysignPage.tacticalTigerMobile.click();
            } else {
                await moneysignPage.tacticalTiger.click();
            }

            const title = await moneysignPage.cardTitle.innerText();
            expect(title).toContain("Tactical Tiger");
            await moneysignPage.closeCard.click();
        });

        test('Click on Stealthy Shark, assert response, and then close the card', async ({ page, isMobile }) => {
            if (isMobile) {
                await moneysignPage.swipperBullet.click();
                await moneysignPage.stealthySharkMobile.click();
            } else {
                await moneysignPage.stealthyShark.click();
            }

            const title = await moneysignPage.cardTitle.innerText();
            expect(title).toContain("Stealthy Shark");
            await moneysignPage.closeCard.click();
        });

        test("Click on Download the App present on the MoneySign Page", async ({ page }) => {
            await moneysignPage.downloadTheApp.click();
        });

        test("Click on the Read More present on the MoneySign Page", async ({ page }) => {
            await moneysignPage.readMore.click();
            await page.waitForTimeout(2000);
            await expect(page).toHaveURL("https://1finance.co.in/blogs/science-behind-moneysign");
        });
    });

    test.describe("Magazine Page", async () => {

        let magazinePage;

        test.beforeEach(async ({ page }) => {
            magazinePage = new MagazinePage(page);
            commonFunctions = new CommonFunctions(page);
            await page.goto(baseUrl + "magazine/");
        })

        test('Go to magazine Landing page and assert response', async ({ page }) => {
            await expect.soft(page).toHaveTitle("1 Finance Magazine- India's 1st Personal Finance Magazine Online");
        });

        test('Go to Magazine section, click on every title and go back to the landing page', async ({ page }) => {
            await page.pause();
            await magazinePage.askAQFA.click();
            await expect.soft(page).toHaveTitle("Ask a QFA Archives – 1 Finance Magazine");
            await page.waitForTimeout(1000)
            await page.goBack();
            await magazinePage.dispatchOneFinance.click();
            await page.waitForTimeout(1000)
            await expect.soft(page).toHaveTitle("Dispatch from 1 Finance Archives – 1 Finance Magazine");
            await page.goBack();
            await page.waitForTimeout(1000)
            await magazinePage.longStoryShort.click();
            await page.waitForTimeout(1000)
            await expect.soft(page).toHaveTitle("Long Story Short Archives – 1 Finance Magazine");
            await page.goBack();
            await page.waitForTimeout(1000)
            await magazinePage.personalEssay.click();
            await page.waitForTimeout(1000)
            await expect.soft(page).toHaveTitle("Personal Essays Archives – 1 Finance Magazine");
            await page.goBack();
            await page.waitForTimeout(1000)
            await magazinePage.thingAboutMoney.click();
            await page.waitForTimeout(1000)
            await expect.soft(page).toHaveTitle("The Thing About Money Archives – 1 Finance Magazine");
            await page.goBack();
            await page.waitForTimeout(1000)
        });

        test('Go to Dispatch One Finance section, assert response and go back to the landing pagge', async ({ page }) => {
            await magazinePage.dispatchOneFinance.click();
            await expect.soft(page).toHaveTitle("Dispatch from 1 Finance Archives – 1 Finance Magazine");
            await page.goBack();
        });

        test('Go to Long Story Short section, assert response and go back to the landing pagge', async ({ page }) => {
            await magazinePage.longStoryShort.click();
            await expect.soft(page).toHaveTitle("Long Story Short Archives – 1 Finance Magazine");
            await page.goBack();
        });

        test('Go to Personal Essay, assert response and go back to the landing pagge', async ({ page }) => {
            await magazinePage.personalEssay.click();
            await expect.soft(page).toHaveTitle("Personal Essays Archives – 1 Finance Magazine");
            await page.goBack();
        });

        test('Go to The thing about money section, assert response and go back to the landing pagge', async ({ page }) => {
            await magazinePage.thingAboutMoney.click();
            await expect.soft(page).toHaveTitle("The Thing About Money Archives – 1 Finance Magazine");
            await page.goBack();
        });
    })

    test.describe('Our Story', () => {

        let ourStoryPage;

        test.beforeEach(async ({ page }) => {
            ourStoryPage = new OurStoryPage(page);
            commonFunctions = new CommonFunctions(page);
            await page.goto(baseUrl + "story");
        })

        test('Go Our Story and assert title', async ({ page }) => {
            await expect.soft(page).toHaveTitle("Certified Financial Advisor & Planner India - Active and Passive Funds, Retirement Planning");
        })

        test('Go Helping you achieve financial well-being section and click on expansion and collapse tile', async ({ page, browser }) => {
            await commonFunctions.scrollPage(page, 4);
            await ourStoryPage.firstExpansionTile.click();
            await ourStoryPage.secondExpansionTile.click();
            await ourStoryPage.thirdExpansionTile.click();
            await ourStoryPage.fourthExpansionTile.click();
        });

        test('Click on read full article of first business card', async ({ page }) => {
            await commonFunctions.scrollPage(page, 9);

            const [newPage] = await Promise.all([
                page.waitForEvent('popup'),
                ourStoryPage.firstStoryCard.click(),
            ]);

            if (newPage) {
                await newPage.waitForEvent('load');
                expect(newPage.url()).toBe("https://www.business-standard.com/content/press-releases-ani/this-t20-season-1-finance-becomes-official-sponsor-for-kolkata-knight-riders-122032900400_1.html");
            } else {
                console.error("New page is not opened.");
            }
        })

        test('Click on read full article of second business card', async ({ page }) => {
            await commonFunctions.scrollPage(page, 9);

            const [newPage] = await Promise.all([
                page.waitForEvent('popup'),
                ourStoryPage.secondStoryCard.click(),
            ]);

            if (newPage) {
                await newPage.waitForEvent('load');
                expect(newPage.url()).toBe("https://www.business-standard.com/content/press-releases-ani/1-finance-launches-advisory-committee-for-qualified-financial-advisors-mumbai-chapter-122062900958_1.html");
            } else {
                console.error("New page is not opened.");
            }
        })

        test('Click on read full article of third business card', async ({ page }) => {
            await commonFunctions.scrollPage(page, 9);

            const [newPage] = await Promise.all([
                page.waitForEvent('popup'),
                ourStoryPage.thirdStoryCard.click(),
            ]);

            if (newPage) {
                await newPage.waitForEvent('load');
                expect(newPage.url()).toBe("https://www.business-standard.com/content/press-releases-ani/1-finance-collaborates-with-aafm-india-to-bring-financial-well-being-awareness-for-affluent-indians-122092801046_1.html");
            } else {
                console.error("New page is not opened.");
            }
        })

        test('Click on read full article of fourth business card', async ({ page }) => {
            await commonFunctions.scrollPage(page, 9);

            const [newPage] = await Promise.all([
                page.waitForEvent('popup'),
                ourStoryPage.fourthStoryCard.click(),
            ]);

            if (newPage) {
                await newPage.waitForEvent('load');
                expect(newPage.url()).toBe("https://theprint.in/ani-press-releases/1-finances-associates-with-network-fp-as-growth-partner-2022-23/1045580/");
            } else {
                console.error("New page is not opened.");
            }
        })
    })

    test.describe("Circle Of Trust", async () => {

        let circleOfTrust;

        test.beforeEach(async ({ page }) => {
            circleOfTrust = new CircleOfTrust(page);
            commonFunctions = new CommonFunctions(page);
            await page.goto(baseUrl + "circle-of-trust");
        })

        test('Go to Circle of Trust Landing page and assert response', async ({ page }) => {
            await expect.soft(page).toHaveTitle("Circle of Trust - Featured Work | 1 Finance");
        });

        test('Click on the Circle of Trusts Load More section', async ({ page }) => {
            await commonFunctions.scrollPage(page, 3);

            const [newPage] = await Promise.all([
                page.waitForEvent('popup'),
                circleOfTrust.loadMore.click(),
            ]);

            if (newPage) {
                await newPage.waitForEvent('load');
                expect(newPage.url()).toBe("https://twitter.com/1financehq?s=21&t=N1gRzEtuF1wYDghm4w1pGA");
            } else {
                console.error("New page is not opened.");
            }
        });

    })

    test.describe("Career Page", async () => {

        let careers;

        test.beforeEach(async ({ page }) => {
            careers = new Careers(page);
            commonFunctions = new CommonFunctions(page);
            await page.goto(baseUrl + "careers");
        })

        test('Go to Careers Landing page and assert response', async ({ page }) => {
            await expect.soft(page).toHaveTitle("Jobs / Career Opportunities at 1 Finance | Personal Finance Advisory Company in India");
        });

        test('Click on Explore Opportunities of careers page and assert response', async ({ page }) => {
            await careers.exploreOpportunities.click();
            await expect.soft(page).toHaveURL(baseUrl + "positions");
        });

        test('Click on the next arrow present on featured postions', async ({ page }) => {
            await careers.exploreOpportunities.click();
            await commonFunctions.scrollPage(page, 1);
            await careers.nextArrow.click();
        });

        test('Click on the previous arrow present on featured postions', async ({ page }) => {
            await careers.exploreOpportunities.click();
            await commonFunctions.scrollPage(page, 1);
            await careers.previousArrow.click();
        });

        test('Click on first job title from featured positions and click on the back button', async ({ page }) => {
            await careers.exploreOpportunities.click();
            await careers.firstTeam.click();
            await expect.soft(page).toHaveURL(baseUrl + "jobrole?RequestID=319&RequestNo=RA-0623-1092&Department=Member+Success&SubDepartment=&DesignationName=Customer+Service+Representative&RoleName=Member+Success+-+Team");
            await page.goBack();
        });

        test('Click on second job title from featured positions and click on the back button', async ({ page }) => {
            await careers.exploreOpportunities.click();
            await careers.secondTeam.click();
            await expect.soft(page).toHaveURL(baseUrl + "jobrole?RequestID=329&RequestNo=RA-0924-1102&Department=Strategy&SubDepartment=&DesignationName=Assistant+Manager-+Tax+Planning&RoleName=Strategy+-+Team");
            await page.goBack();
        });

        test('Click on third job title from featured positions and click on the back button', async ({ page }) => {
            await careers.exploreOpportunities.click();
            await careers.thirdTeam.click();
            await expect.soft(page).toHaveURL(baseUrl + "jobrole?RequestID=330&RequestNo=RA-1024-1103&Department=Strategy&SubDepartment=&DesignationName=Journalist&RoleName=Strategy+-+Team");
            await page.goBack();
        });

        test('Click on fourth job title from featured positions and click on the back button', async ({ page }) => {
            await careers.exploreOpportunities.click();
            await careers.fourthTeam.click();
            await expect.soft(page).toHaveURL(baseUrl + "jobrole?RequestID=334&RequestNo=RA-0724-1107&Department=Member+Success&SubDepartment=&DesignationName=Assistant+Vice+President+%28AVP%29&RoleName=Member+Success+-+HOD");
            await page.goBack();
        });

        test('Click on fifth job title from featured positions and click on the back button', async ({ page }) => {
            await careers.exploreOpportunities.click();
            await careers.fifthTeam.click();
            await expect.soft(page).toHaveURL(baseUrl + "jobrole?RequestID=339&RequestNo=RA-1224-1112&Department=Financial+Concierge&SubDepartment=&DesignationName=Financial+Concierge+Specialist&RoleName=Financial+concierge-Team");
            await page.goBack();
        });

        test('Click on sixth job title from featured positions and click on the back button', async ({ page }) => {
            await careers.exploreOpportunities.click();
            await careers.sixthTeam.click();
            await expect.soft(page).toHaveURL(baseUrl + "jobrole?RequestID=340&RequestNo=RA-1524-1113&Department=Marketing&SubDepartment=&DesignationName=Executive+-+Video+Editor&RoleName=Marketing++-+Team");
            await page.goBack();
        })

        test('Click on Apply Now for job postion and assert response', async ({ page }) => {
            await careers.exploreOpportunities.click();
            await careers.sixthTeam.click();
            await careers.apply.click();
            await expect.soft(page).toHaveURL(baseUrl + "apply");
        });
    })

    test.describe("Blog Page", async () => {

        let blogPage;

        test.beforeEach(async ({ page }) => {
            blogPage = new BlogPage(page);
            commonFunctions = new CommonFunctions(page);
            await page.goto(baseUrl + "blog/");
        })

        test('Go to Blog Landing page and assert response', async ({ page }) => {
            await expect.soft(page).toHaveTitle("Blog – 1 Finance Blog");
        });

        test('Go to Blog landing page and click on first category', async ({ page }) => {
            await blogPage.all.click();
            await expect.soft(page).toHaveURL(baseUrl + "blog/");
        });

        test('Go to Blog landing page and click on second category', async ({ page }) => {
            await blogPage.first.click();
            await expect.soft(page).toHaveURL(baseUrl + "blog/category/mutual-fund/");
            await page.goBack();
        });

        test('Go to Blog landing page and click on third category', async ({ page }) => {
            await blogPage.second.click();
            await expect.soft(page).toHaveURL(baseUrl + "blog/category/investing/");
            await page.goBack();
        });

        test('Go to Blog landing page and click on fourth category', async ({ page }) => {
            await blogPage.third.click();
            await expect.soft(page).toHaveURL(baseUrl + "blog/category/liability-planning/");
            await page.goBack();
        });

        test('Go to Blog landing page and click on fifth category', async ({ page }) => {
            await blogPage.fourth.click();
            await expect.soft(page).toHaveURL(baseUrl + "blog/category/retirement-planning/");
            await page.goBack();
        });

        test('Go to Blog landing page and click on sixth category', async ({ page }) => {
            await blogPage.fifth.click();
            await expect.soft(page).toHaveURL(baseUrl + "blog/category/insurance/");
            await page.goBack();
        });

        test('Go to Blog landing page and click on seventh category', async ({ page }) => {
            await blogPage.sixth.click();
            await expect.soft(page).toHaveURL(baseUrl + "blog/category/crypto/");
            await page.goBack();
        });

        test('Go to Blog landing page and click on eighth category', async ({ page }) => {
            await blogPage.seventh.click();
            await expect.soft(page).toHaveURL(baseUrl + "blog/category/tax-planning/");
            await page.goBack();
        });

        test('Go to Blog landing page and click on ninth category', async ({ page }) => {
            await blogPage.eighth.click();
            await expect.soft(page).toHaveURL(baseUrl + "blog/category/credit-cards/");
            await page.goBack();
        });

        test('Go to Blog landing page and click on tenth category', async ({ page }) => {
            await blogPage.ninth.click();
            await expect.soft(page).toHaveURL(baseUrl + "blog/category/personal-finance/");
            await page.goBack();
        });

        test('Go to Blog landing page and click on eleventh category', async ({ page }) => {
            await blogPage.tenth.click();
            await expect.soft(page).toHaveURL(baseUrl + "blog/category/will-planning/");
            await page.goBack();
        });

        test('Go to Blog landing page and click on twelveth category', async ({ page }) => {
            await blogPage.eleventh.click();
            await expect.soft(page).toHaveURL(baseUrl + "blog/category/learn/");
            await page.goBack();
        });

        test('Go to Blog landing page and click on thirteenth category', async ({ page }) => {
            await blogPage.twelveth.click();
            await expect.soft(page).toHaveURL(baseUrl + "blog/category/behavioural-finance/");
            await page.goBack();
        });

        test('Go to Blog landing page and click on fourteenth category', async ({ page }) => {
            await blogPage.thirteenth.click();
            await expect.soft(page).toHaveURL(baseUrl + "blog/category/temperament/");
            await page.goBack();
        });

        test('Click on second button of pagination present on blog landing page', async ({ page }) => {
            await commonFunctions.scrollPage(page, 4);
            await blogPage.secondPage.click();
            await expect.soft(page).toHaveURL(baseUrl + "blog/page/2/");
        })

        test('Click on Download the app and click on cancel button', async ({ page }) => {
            await page.setViewportSize({ width: 1920, height: 1080 });
            await commonFunctions.scrollPage(page, 3);
            await blogPage.downloadTheApp.click();
            await blogPage.closeButton.click();
        });

        test('Go to blog detail page and click on download the app', async ({ page }) => {
            await blogPage.blog.click();
            await blogPage.downloadTheApp2.click();
            await blogPage.closeButton.click();
        })

        test('Scroll down and click on Whatsapp Share Icon', async ({ page }) => {
            await blogPage.blog.click();
            await commonFunctions.scrollPage(page, 5);
            await blogPage.whatsapp.click();
        })

        test('Scroll down and click on LinkedIn Share Icon', async ({ page }) => {
            await blogPage.blog.click();
            await commonFunctions.scrollPage(page, 5);
            await blogPage.linkedIn.click();
        })

        test('Scroll down and click on Copy Link Icon', async ({ page }) => {
            await blogPage.blog.click();
            await commonFunctions.scrollPage(page, 5);
            await blogPage.copy.click();
        })
    })

    test.describe("Community", () => {

        let communityPage;

        test.beforeEach(async ({ page }) => {
            communityPage = new CommunityPage(page);
            commonFunctions = new CommonFunctions(page);
            await page.goto(baseUrl);
            await page.mouse.wheel(0, 3000);
        })

        test('Go to  the footer and click on Community page', async ({ page }) => {
            await communityPage.community.click();
            expect(page).toHaveURL("https://community.1finance.co.in/");
        });

        test("Click on the One Fin Logo and check if the user is navigating back to the base URL", async ({ page }) => {
            await communityPage.community.click();
            await communityPage.oneFinLogo.click();
            await expect.soft(page).toHaveURL(baseUrl);
        })
    })

    test.describe("Masterclass", () => {

        let masterclassPage;

        test.beforeEach(async ({ page }) => {
            masterclassPage = new MasterclassPage(page);
            commonFunctions = new CommonFunctions(page);
            await page.goto(baseUrl);
            await commonFunctions.scrollPage(page, 5);
            await masterclassPage.masterclass.click();
        });

        test('Go to Masterclass landing page and click on the previous card', async ({ page }) => {
            await commonFunctions.scrollPage(page, 2);
            await masterclassPage.firstCard.click();
            await page.goBack();
        });

        test('Check if the expansion and collapse tile for Masterclass landing page', async ({ page }) => {
            await commonFunctions.scrollPage(page, 4);
            await masterclassPage.firstTile.click();
            await masterclassPage.secondTile.click();
            await masterclassPage.thirdTile.click();
            await masterclassPage.fourthTile.click();
            await masterclassPage.fifthTile.click();
            await masterclassPage.sixthTile.click();
            await masterclassPage.seventhTile.click();
            await masterclassPage.eighthTile.click();
            await masterclassPage.ninethTile.click();
            await masterclassPage.tenthTile.click();
            await masterclassPage.eleventhTile.click();
        })

        test('Go to Masterclass detail page and check for the overall functionality ', async ({ page }) => {
            await commonFunctions.scrollPage(page, 2);
            await masterclassPage.firstCard.click();
            await masterclassPage.watchFullMasterclass.click();
            await masterclassPage.name.type("Runali");
            await masterclassPage.name.press("Tab");
            await masterclassPage.email.type("runalipainaik@gmail.com");
            await masterclassPage.name.press("Tab");
            await commonFunctions.scrollPage(page, 2);
            await masterclassPage.positiveFeedback.click();
            await masterclassPage.viewAllMasterclasses.click();
            await expect.soft(page).toHaveURL(baseUrl + "masterclass?scroll=catchUp");
        });
    })

    test.describe('Our Story', () => {

        let supportPage;

        test.beforeEach(async ({ page }) => {
            supportPage = new SupportPage(page);
            commonFunctions = new CommonFunctions(page);
            await page.goto(baseUrl + "support");
        })

        test('Check the title for support page', async ({ page }) => {
            expect(page).toHaveTitle("Support | Most Trusted Financial / Investment Advisory Company in Mumbai, India | 1Finance");
        });

        test('Go to support landing page and assert response', async ({ page }) => {
            expect(supportPage.supportTitle).toContainText("How can we assist you?");
        });

        test('Click on the expansion and collapse tile present on Support page', async ({ page }) => {
            await supportPage.firstTile.click();
            await supportPage.secondTile.click();
            await supportPage.thirdTile.click();
            await supportPage.fourthTile.click();
            await supportPage.fifthTile.click();
            await supportPage.sixthTile.click();
        })

        test('Click on whatsapp icon present on the support page', async ({ page }) => {
            await supportPage.whatsapp.click();
        })

    })

    test.describe('Become a QFA', () => {

        let becomeAQfa;

        test.beforeEach(async ({ page }) => {
            becomeAQfa = new BecomeQfaPage(page);
            commonFunctions = new CommonFunctions(page);
            await page.goto(baseUrl + "become-a-qfa");
        });

        test("Assert title of the page for Become a QFA", async ({ page }) => {
            expect(page).toHaveTitle("Partner as a Qualified Financial Advisor (QFA) | Financial Advisory Company | 1Finance");
        })

        test('Click on Join Now button', async ({ page }) => {
            await becomeAQfa.joinNow.click();
        })

        test('Fill in full name and press tab button to switch the tab ', async ({ page }) => {
            await becomeAQfa.joinNow.click();
            await page.waitForTimeout(1000);
            await becomeAQfa.fullName.type("Runali Painaik");
            await becomeAQfa.fullName.press("Tab");
        })

        test('Fill in email address and press tab button to switch the tab ', async ({ page }) => {
            await becomeAQfa.joinNow.click();
            await page.waitForTimeout(1000);
            await becomeAQfa.emailId.type("runalipainaik@gmail.com");
            await becomeAQfa.emailId.press("Tab");
        })

        test('Fill in mobile number and press tab button to switch the tab', async ({ page }) => {
            await becomeAQfa.joinNow.click();
            await page.waitForTimeout(1000);
            await becomeAQfa.mobileNumber.type('8291684040');
            await becomeAQfa.fullName.press("Tab");
        })

        test('Fill in city and press tab button to switch the tab', async ({ page }) => {
            await becomeAQfa.joinNow.click();
            await page.waitForTimeout(1000);
            await becomeAQfa.city.type('Thane');
            await becomeAQfa.city.press("Tab");
        })

        test('To assert toast for email which already exists', async ({ page }) => {
            await becomeAQfa.allDetails("runalipainaik@gmail.com", '8291684040');
            const toastElement = await (becomeAQfa.phoneNoEmailErrorToast).textContent();
            const expectedToastMessage = 'Your email is already registered !';
            expect.soft(toastElement).toEqual(expectedToastMessage);
            if (toastElement.includes(expectedToastMessage)) {
                console.log('Toast message assertion passed.');
            } else {
                console.error('Toast message assertion failed.');
            }
        })

        test('To check the functionality for expansion and collapse tile', async ({ page }) => {
            await commonFunctions.scrollPage(page, 4);
            await becomeAQfa.faqFirstTile.click();
            await commonFunctions.scrollPage(page, 1);
            await becomeAQfa.faqSecondTile.click();
            await commonFunctions.scrollPage(page, 1);
            await becomeAQfa.faqThirdTile.click();
            await becomeAQfa.faqFourthTile.click();
            await becomeAQfa.faqFifthTile.click();
            await becomeAQfa.faqSixthTile.click();
            await becomeAQfa.faqSeventhTile.click();
            await becomeAQfa.faqEighthTile.click();
            await becomeAQfa.faqEighthTile.click();
            await becomeAQfa.faqNinthTile.click();
        })
    })

    test.describe("GFP Summit", () => {

        let gfpSummitPage;

        test.beforeEach(async ({ page }) => {
            gfpSummitPage = new GfpSummitPage(page);
            commonFunctions = new CommonFunctions(page);
            await page.goto("https://gfpsummit.com/");
        });

        test("Assert Url for the page", async({page})=>{
            expect(gfpSummitPage.title).toHaveText("Global Financial Planners Summit 2023");
        })

        test("Click on watch Now and assert response", async({page})=>{
            await gfpSummitPage.watchNow.click();
            await page.waitForTimeout(1000);
        })

        test('Go to GFP Summit 2023 landing page and assert response ', async ({ page }) => {
            await gfpSummitPage.watchNow.click();
            await page.waitForTimeout(1000);
            await gfpSummitPage.fullName.click();
            await gfpSummitPage.fullName.type("Runali Ashok Painaik");
            await gfpSummitPage.fullName.press("Tab");
            await gfpSummitPage.email.type("runalipainaik@gmail.com");
            await gfpSummitPage.fullName.press("Tab");
            await gfpSummitPage.mobileNumber.type("8291684040");
            await gfpSummitPage.mobileNumber.press("Tab");
            await gfpSummitPage.companyName.type("Atriina Technologies");
            await gfpSummitPage.fullName.press("Tab");
            await gfpSummitPage.designation.type("Automation Engineer");
            await gfpSummitPage.fullName.press("Tab");
            await gfpSummitPage.currentCity.type("Airoli");
            await gfpSummitPage.submitButton.click();
            await page.waitForTimeout(5000);
        });
    })

    test.describe("Sitemap", () => {

        let sitemapPage;

        test.beforeEach(async ({ page }) => {
            sitemapPage = new SitemapPage(page);
            commonFunctions = new CommonFunctions(page);
            await page.goto(baseUrl + "sitemap");
        });

        test('Go to Sitemap landing page and assert response ', async ({ page }) => {
            expect.soft(sitemapPage.title).toHaveText("Sitemap Links");
            expect.soft(page).toHaveTitle("1 Finance");
        });
    })

    test.describe("Legal and Regulatory", () => {

        let legalAndRegulatory;

        test.beforeEach(async ({ page }) => {
            legalAndRegulatory = new LegalAndRegulatoryPage(page);
            commonFunctions = new CommonFunctions(page);
            await page.goto(baseUrl + "legal-and-regulatory");
        });

        test('Go to Legal & Regulatory landing page and assert response ', async ({ page }) => {
            expect.soft(legalAndRegulatory.title).toHaveText("Legal & Regulatory");
            expect.soft(page).toHaveTitle("Legal & Regulatory Support | 1 Finance");
        });

        test('Go to Legal & Regulatory and check if all the agreement pages can be visited', async ({ page }) => {
            await page.goto(baseUrl + "legal-and-regulatory");
            await legalAndRegulatory.sebiInvestment.click();
            await expect.soft(page).toHaveURL(baseUrl + "legal-and-regulatory/investor");
            await page.goBack();
            await legalAndRegulatory.complaintStatus.click();
            await page.bringToFront();
            await legalAndRegulatory.dosAndDonts.click();
            await expect.soft(page).toHaveURL(baseUrl + "legal-and-regulatory/dosdont")
            await page.goBack();
            await legalAndRegulatory.clientInvestmentAdvisory.click();
            await expect.soft(page).toHaveURL(baseUrl + "legal-and-regulatory/advisory");
            await page.goBack();
            await legalAndRegulatory.GreviancePolicy.click();
            await expect.soft(page).toHaveURL(baseUrl + "legal-and-regulatory/policy");
            await page.goBack();
            await legalAndRegulatory.annualReturns.click();
            await expect.soft(page).toHaveURL(baseUrl + "legal-and-regulatory/annual-return");
        });
    })

    test.describe("Terms of use", () => {

        let termsOfUsePage;

        test.beforeEach(async ({ page }) => {
            termsOfUsePage = new TermsOfUsePage(page);
            commonFunctions = new CommonFunctions(page);
            await page.goto(baseUrl + "terms-of-use");
        });


        test('Go to Terms of Use landing page and assert response ', async ({ page }) => {
            expect(termsOfUsePage.title).toHaveText("Terms Of Use");
            expect(page).toHaveTitle("Terms & Conditions | Financial Well Being / Advice / Recommendation | 1 Finance");
        });
    })

    test.describe("Privacy Policy", () => {

        let privacyPolicyPage;

        test.beforeEach(async ({ page }) => {
            privacyPolicyPage = new PrivacyPolicyPage(page);
            commonFunctions = new CommonFunctions(page);
            await page.goto(baseUrl + "privacy-policy");
        });

        test('Go to Privacy Policy landing page and assert response ', async ({ page }) => {
            expect(privacyPolicyPage.title).toHaveText("Privacy Policy");
        });
    })

    test.describe("Blogs", () => {

        let blogsPage;

        test.beforeEach(async ({ page }) => {
            blogsPage = new BlogsPage(page);
            commonFunctions = new CommonFunctions(page);
            await page.goto(baseUrl + "blogs/science-behind-moneysign");
        });

        test('Go to Blogs landing page and assert response ', async ({ page }) => {
            expect(blogsPage.scienceBehindMs).toHaveText("The Science behind MoneySign®");
        });
    })

    test.describe('Scoring and Ranking --> all modules', () => {

        let scoringAndRanking;

        test.beforeEach(async({page}) => {
            scoringAndRanking = new ScoringAndRanking(page);
            commonFunctions = new CommonFunctions(page);
        })

        test('Go to Term Insurance and check for the overall functionality ', async ({ page }) => {
            await page.goto(baseUrl + "product-scoring/term-insurance");
            await commonFunctions.scrollPage(page, 3);
            await scoringAndRanking.ourMethodologyTermIns.click();
            await scoringAndRanking.methodologyCloseButton.click();
            await scoringAndRanking.firstTileScoringRanking.click();
            await scoringAndRanking.secondTileScoringRanking.click();
            await scoringAndRanking.thirdTileScoringRanking.click();
            await scoringAndRanking.fourthTileScoringRanking.click();
            await scoringAndRanking.fifthTileScoringRanking.click();
            await scoringAndRanking.sixthTileScoringRanking.click();
            await scoringAndRanking.seventhTileScoringRanking.click();
        });

        test('Go to Term Insurance Input page and check for the overall functionality ', async ({ page }) => {
            await page.goto(baseUrl + "product-scoring/term-insurance/browse-by-policy?age_group=30-34&gender=Male&sum_assured=1");
            await commonFunctions.scrollPage(page, 2);
            await scoringAndRanking.secondPageTermIns.click();
        });

        test('Go to Term Insurance detail page and check for the overall functionality ', async ({ page }) => {
            await page.goto(baseUrl + "product-scoring/term-insurance");
            await scoringAndRanking.viewDetailTermIns.click();
            await commonFunctions.scrollPage(page, 2);
            await scoringAndRanking.positiveFeedbackTermIns.click();
            await page.waitForTimeout(1000);
            await commonFunctions.scrollPage(page, 1);
            await scoringAndRanking.downloadButton.click();
            await scoringAndRanking.closeButton.click();
            await scoringAndRanking.viewMoreTermIns.click();
        });

        test('Go to Health Insurance landing page and check for the overall functionality ', async ({ page }) => {
            await page.goto(baseUrl + "product-scoring/health-insurance?gender=male&age=36-40&family=self-&sum=10+Lacs");
            await commonFunctions.scrollPage(page, 3);
            await scoringAndRanking.firstTileScoringRanking.click();
            await scoringAndRanking.secondTileScoringRanking.click();
            await scoringAndRanking.thirdTileScoringRanking.click();
            await scoringAndRanking.fourthTileScoringRanking.click();
            await scoringAndRanking.fifthTileScoringRanking.click();
            await scoringAndRanking.sixthTileScoringRanking.click();
            await scoringAndRanking.seventhTileScoringRanking.click();
            await scoringAndRanking.eighthTileScoringRanking.click();
            await scoringAndRanking.ninthTileScoringRanking.click();
            await scoringAndRanking.tenthTileScoringRanking.click();
            await scoringAndRanking.viewDetailHealthIns.click();
        });

        test('Go to Health Insurance Input page and check for the overall functionality ', async ({ page }) => {
            const scoringAndRanking = new ScoringAndRanking(page);
            await page.goto(baseUrl + "product-scoring/health-insurance/browse-by-policy?gender=male&age=36-40&family=self-&sum=10+Lacs");
            await commonFunctions.scrollPage(page, 2);
            await scoringAndRanking.secondPageTermIns.click();
        });

        test('Go to Health Insurance detail page and check for the overall functionality ', async ({ page }) => {
            const scoringAndRanking = new ScoringAndRanking(page);
            await page.goto(baseUrl + "product-scoring/health-insurance/manipal-cigna-pro-health-prime-protect?gender=male&age=36-40&family=self-&sum=10%20Lacs");
            await commonFunctions.scrollPage(page, 3);
            await scoringAndRanking.positiveFeedbackHealthIns.click();
            await scoringAndRanking.viewMoreHealthIns.click();
        });

        test('Go to Credit Card landing page and check for the overall functionality ', async ({ page }) => {
            const scoringAndRanking = new ScoringAndRanking(page);
            await page.goto(baseUrl + "product-scoring/credit-card");
            await commonFunctions.scrollPage(page, 7);
            await scoringAndRanking.firstTileScoringRanking.click();
            await scoringAndRanking.secondTileScoringRanking.click();
            await scoringAndRanking.thirdTileScoringRanking.click();
            await scoringAndRanking.fourthTileScoringRanking.click();
            await scoringAndRanking.fifthTileScoringRanking.click();
            await scoringAndRanking.sixthTileScoringRanking.click();
            await scoringAndRanking.seventhTileScoringRanking.click();
            await scoringAndRanking.eighthTileScoringRanking.click();
            await scoringAndRanking.ninthTileScoringRanking.click();
            await scoringAndRanking.tenthTileScoringRanking.click();
        });

        test('Go to Credit Card detail page and check for the overall functionality ', async ({ page }) => {
            const scoringAndRanking = new ScoringAndRanking(page);
            await page.goto(baseUrl + "product-scoring/credit-card/hdfc-infinia-metal-card?score=84")
            await commonFunctions.scrollPage(page, 3);
            await scoringAndRanking.positiveFeedbackCreditCard.click();
            await commonFunctions.scrollPage(page, 1);
            await scoringAndRanking.downloadButtonCreditCard.click();
            await scoringAndRanking.closeButton.click();
        });

        test('Go to Mutual funds landing page and check for the overall functionality ', async ({ page }) => {
            const scoringAndRanking = new ScoringAndRanking(page);
            await page.goto(baseUrl + "product-scoring/mutual-funds?type=equity");
            await commonFunctions.scrollPage(page, 3);
            await scoringAndRanking.firstTileScoringRanking.click();
            await scoringAndRanking.secondTileScoringRanking.click();
            await scoringAndRanking.thirdTileScoringRanking.click();
            await scoringAndRanking.fourthTileScoringRanking.click();
            await scoringAndRanking.fifthTileScoringRanking.click();
        });

        test('Go to Mutual Funds detail page and check for the overall functionality ', async ({ page }) => {
            const scoringAndRanking = new ScoringAndRanking(page);
            await page.goto(baseUrl + "product-scoring/mutual-funds/parag-parikh-flexi-cap-fundg-direct-plan?type=equity")
            await commonFunctions.scrollPage(page, 1);
            await scoringAndRanking.positiveFeedbackMutualFunds.click();
            await commonFunctions.scrollPage(page, 1);
            await scoringAndRanking.downloadButtonCreditCard.click();
            await scoringAndRanking.closeButton.click();
        });

        test('Go to Crypto landing page and check for the overall functionality ', async ({ page }) => {
            const scoringAndRanking = new ScoringAndRanking(page);
            await page.goto(baseUrl + "product-scoring/crypto");
            await commonFunctions.scrollPage(page, 13);
            await scoringAndRanking.firstTileCrypto.click();
            await scoringAndRanking.secondTileCrypto.click();
            await scoringAndRanking.thirdTileCrypro.click();
            await scoringAndRanking.fourthTileCrypto.click();
            await scoringAndRanking.fifthTileCrypto.click();
            await scoringAndRanking.sixthTileCrypto.click();
            await scoringAndRanking.seventhTileCrypto.click();
            await scoringAndRanking.eighthTileCrypto.click();
            await scoringAndRanking.ninthTileCrypto.click();
        });
    })

    // test.describe('Calculators', () => {

    //     test.describe('HRA Exemption', async ({page}) => {

    //         let calculatorPage;

    //         test.beforeEach("Calculators", async({page}) => {
    //             calculatorPage = new CalculatorPage(page);
    //             commonFunctions = new CommonFunctions(page);
    //         })
    //     })

    // })
})


// test.describe("Health Insurance", () => {
//     test('Select age range 35-40 and assert response', async ({ page }) => {

//         const scoringAndRanking = new ScoringAndRanking(page);

//         await page.goto(baseUrl + "product-scoring/health-insurance?gender=male&family=self-")

//         await scoringAndRanking.healthInsuranceDropdown.click();

//         const options = await page.$$('ul.CustomDropdown_option-list__KzI1d li.CustomDropdown_option-item__ZJcH2');

//         const age = ['26-30', '31-35', '36-40', '41-45', '46-50', '51-55', '56-60'];

//         for (let i = 0; i < options.length; i++) {
//             debugger;
//             const optionText = await options[i].innerText();
//             expect(optionText).toEqual(age[i]);
//         }
//     });
// })









