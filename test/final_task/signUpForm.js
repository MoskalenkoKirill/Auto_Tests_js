class signUpForm{

    get emailField() { return $('//*[@id="email"]')}
    get passwordField() { return $('#password')}
    get usernameField() { return $('#login')}
    get someField() { return $('#opt_in')}
    get emailContinueBtn() { return $('//*[@id="email-container"]/div[2]/button')}
    get paswordContinueBtn() { return $('//*[@id="password-container"]/div[2]/button')}
    get usernameContinueBtn() { return $('//*[@id="username-container"]/div[2]/button')}
    get someContinueBtn() { return $('#opt-in-container > div.d-flex.flex-items-center.flex-column.flex-sm-row > button')}
    get title() { return $('/html/body/div[1]/div[4]/main/div[2]/text-suggester/div[1]/typing-effect/span[1]')}

    async enterEmail(value) {
        await this.emailField.addValue(value)
    }
    async enterPassword(value) {
        await this.passwordField.addValue(value)
    }
    async enterUsername(value) {
        await this.usernameField.addValue(value)
    }
    async enterInSomeField(value) {
        await this.someField.addValue(value)
    }
    async clickOnEmailContinueBtn() {
        await this.emailContinueBtn.click()
    }
    async clickOnPaswordContinueBtn() {
        await this.paswordContinueBtn.click()
    }
    async clickOnUsernameContinueBtn() {
        await this.usernameContinueBtn.click()
    }
    async clickOnSomeContinueBtn() {
        await this.someContinueBtn.click()
    }
}

export default new signUpForm()