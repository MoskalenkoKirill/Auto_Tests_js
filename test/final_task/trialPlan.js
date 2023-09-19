class trialPlan{
    get titleTrialPlan() {return $('body > div.logged-out.env-production.page-responsive > div.application-main > main > div > div.mb-4.mb-md-8.container-xl > h1')}
    get eterpriseCloudBtn() { return $('body > div.logged-out.env-production.page-responsive > div.application-main > main > div > div:nth-child(2) > div > div > div:nth-child(1) > a > div > div')}
    
    async clickOnEterpriseCloudBtn() {
        await this.eterpriseCloudBtn.click()
    }
}


export default new trialPlan()