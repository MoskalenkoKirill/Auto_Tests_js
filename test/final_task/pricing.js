class pricing{
    get title1() { return $('body > div.logged-out.env-production.page-responsive.header-white > div.application-main > main > div.p-responsive.container-xl.text-center.mt-7.mt-md-8.mt-lg-9.mb-5.mb-lg-9 > h1')}
    get title2() { return $('body > div.logged-out.env-production.page-responsive.header-white > div.application-main > main > div.d-md-block.p-responsive.container-xl.text-center.my-8.my-md-9.js-compare-features-item > h1')}
    get pointToScroll() { return $('body > div.logged-out.env-production.page-responsive.header-white > div.application-main > main > div.position-relative > div.p-responsive.container-xl.text-center > div.text-left > div.text-center.my-7 > h2')}
    get link() { return $('body > div.logged-out.env-production.page-responsive.header-white > div.application-main > main > div.position-relative > div.p-responsive.container-xl.text-center > div.mt-6.mt-md-7 > a')}

    async clickOnLink() {
        await this.link.click()
    }
}

export default new pricing()