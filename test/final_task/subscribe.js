class subscribe{
    get titleSubscribe() { return $('//*[@id="hero-section-brand-heading"]')}
    get emailField() { return $('//*[@id=":R8d7m:"]')}
    get countryFild() { return $('//*[@id="country"]')}
    get checkBox() { return $('#gated-agree-marketingEmailOptin1')}
    get subscribeBtn() { return $('#form > form > div > button')}
    get scrollPoint() { return $('#form')}
    get lastTitle() {return $('#hero-section-brand-heading')}

    async clickOnSubscribeBtn() {
        await this.subscribeBtn.click()
    }
    async clickOnCheckBox() {
        await this.checkBox.click()
    }
    async clickOnCountryFild() {
        await this.countryFild.click()
    }
    async enterEmail(value) {
        await this.emailField.addValue(value)
    }
}
export default new subscribe()