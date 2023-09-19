import signUpForm from "../final_task/signUpForm.js";
import mainPage from "../final_task/main_page.js"
import trialPlan from "../final_task/trialPlan.js";
import footer from "../final_task/footer.js"
import subscribe from "../final_task/subscribe.js";
import pricing from "../final_task/pricing.js";
import search from "../final_task/search.js";
describe("final_task", () => {

    it("test case 1", async () => {
        
        await browser.url('https://github.com/');
        await mainPage.clickOnSignUpBtn()

        await browser.waitUntil(async () => {
            return signUpForm.title.isDisplayed();
        }, 5000 , "title is not displayed")
        await browser.pause(5000)
        
        await signUpForm.enterEmail("smth@mail.com")
        await browser.pause(1000)
        await signUpForm.clickOnEmailContinueBtn()
        await browser.pause(5000)

        await signUpForm.enterPassword("supermegapassword12345!!!")
        await browser.pause(1000)
        await signUpForm.clickOnPaswordContinueBtn()
        await browser.pause(5000)

        await signUpForm.enterUsername("qwertyuiopkcbbjnvads")
        await browser.pause(1000)
        await signUpForm.clickOnUsernameContinueBtn()
        await browser.pause(5000)

        await signUpForm.enterInSomeField("y")
        await browser.pause(1000)
        await signUpForm.clickOnSomeContinueBtn()
        await browser.pause(5000)
    });

    it("test case 2", async () => {
        await browser.url('https://github.com/');

        await mainPage.titleTrial.scrollIntoView()
        let titleTrialBool = await mainPage.titleTrial.isDisplayedInViewport();
        console.log("Is title displayed in viewport: " + titleTrialBool)
        expect(mainPage.titleTrial).toHaveValue("The place for anyone from anywhere to build anything")

        let LinkTrialBool = await mainPage.trialLink.isDisplayedInViewport();
        console.log("Is btn displayed in viewport: " + LinkTrialBool)
        expect(mainPage.trialLink).toHaveValue("Start a free enterprise trial")
        await mainPage.trialLink.isDisplayed()
        await browser.pause(2000)

        await mainPage.clickOnTrialLink()
        await browser.pause(2000)

        expect(trialPlan.titleTrialPlan).toHaveValue("Peack your trial plan")
        await browser.pause(2000)

        await trialPlan.clickOnEterpriseCloudBtn()
        await browser.pause(2000)
    });

    it("test case 3", async () => {
        await browser.url('https://github.com/');

        await footer.footer.scrollIntoView()
        await footer.subscribeBtn.isClickable()
        await browser.pause(2000)

        await footer.clickOnSubscribeBtn()
        await browser.pause(2000)

        await expect(browser).toHaveTitle('GitHub - Newsletter Sign-up | GitHub Resources - GitHub Resources')
        
        await subscribe.titleSubscribe.isDisplayed()
        await browser.pause(2000)
        
        await subscribe.scrollPoint.scrollIntoView()
        await browser.pause(2000)
        await subscribe.enterEmail("smth@mail.com")
        await browser.pause(2000)
        await subscribe.clickOnCheckBox()
        await subscribe.clickOnCountryFild()
        await browser.pause(2000)
        await browser.keys(['ArrowDown']);
        await browser.pause(2000)
        await browser.keys(['Enter']);
        await browser.pause(2000)
        await browser.pause(2000)
        await subscribe.clickOnSubscribeBtn()
        await browser.pause(2000)

        await subscribe.lastTitle.isDisplayed()
    });

    it("test case 4", async () => {
        await browser.url('https://github.com/');

        await mainPage.clickOnSearch()
        await browser.pause(2000)
        
        await mainPage.enterToSearch("neko")
        await browser.pause(2000)
        await browser.keys(['Enter']);
        await browser.pause(2000)

        await expect(search.arrOfResultsOfSearch.$$('.fIqerb')[1]).toHaveHrefContaining("neko")
        await browser.pause(2000)
             

    });

    it("test case 5", async () => {
        await browser.url('https://github.com/');

        await mainPage.clickOnPricingBtn()
        await browser.pause(2000)

        await pricing.title1.isDisplayed()

        await pricing.pointToScroll.scrollIntoView()
        await pricing.link.isDisplayed()
        await browser.pause(2000)

        await pricing.clickOnLink()
        await browser.pause(2000)

        await  pricing.title2.isDisplayedInViewport()
    })
})