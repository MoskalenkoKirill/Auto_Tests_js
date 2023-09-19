class footer{
    get footer() { return $('body > div.logged-out.env-production.page-responsive.header-overlay.home-campaign > footer')}
    get subscribeBtn() { return $('body > div.logged-out.env-production.page-responsive.header-overlay.home-campaign > footer > div.container-xl.p-responsive > div > div.col-12.col-lg-4.mb-5 > div > a')}

    async clickOnSubscribeBtn() {
        await this.subscribeBtn.click()
    }
}

export default new footer()