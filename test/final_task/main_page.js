class mainPage{

    get signUpBtn() { return $('/html/body/div[1]/div[1]/header/div/div[2]/div/div/a')}
    get titleTrial() { return $('body > div.logged-out.env-production.page-responsive.header-overlay.home-campaign > div.application-main > main > div.position-relative.overflow-hidden > div.container-xl.position-relative.z-2 > div > div > div > h2')}
    get trialLink() { return $('body > div.logged-out.env-production.page-responsive.header-overlay.home-campaign > div.application-main > main > div.position-relative.overflow-hidden > div.container-xl.position-relative.z-2 > div > div > div > div > div > a.btn-mktg.btn-large-mktg.btn-muted-mktg')}
    get footer() { return $('body > div.logged-out.env-production.page-responsive.header-overlay.home-campaign > footer')}
    get search1() { return $('body > div.logged-out.env-production.page-responsive.header-overlay.home-campaign > div.position-relative.js-header-wrapper > header > div > div.HeaderMenu--logged-out.p-responsive.height-fit.position-lg-relative.d-lg-flex.flex-column.flex-auto.pt-7.pb-4.top-0 > div > div > qbsearch-input > div.search-input-container.search-with-dialog.position-relative.d-flex.flex-row.flex-items-center.mr-4.rounded > button > span')}
    get search2() { return $('#query-builder-test')}
    get pricingBtn() { return $('body > div.logged-out.env-production.page-responsive.header-overlay.home-campaign > div.position-relative.js-header-wrapper > header > div > div.HeaderMenu--logged-out.p-responsive.height-fit.position-lg-relative.d-lg-flex.flex-column.flex-auto.pt-7.pb-4.top-0 > div > nav > ul > li:nth-child(4) > a')}

    async clickOnSignUpBtn() {
        await this.signUpBtn.click()
    }
    async clickOnTrialLink() {
        await this.trialLink.click()
    }
    async clickOnSearch() {
        await this.search1.click()
    }
    async clickOnPricingBtn() {
        await this.pricingBtn.click()
    }
    async enterToSearch(value) {
        await this.search2.setValue(value)
    }
}

export default new mainPage()