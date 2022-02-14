
import { Dashboard } from "../../support/OrangeHRM/Dashboard";

describe('verfiy the functionality of Dashboard', () => {
    let dh = new Dashboard()
    beforeEach(function () {
        dh.login('Admin', 'admin123')
    })

    it('validate the Main menu elements', () => {
        dh.validateMenu()
    })

    it('validate the Dashboard Tab', () => {
        dh.validateDashboardTab()
    })

    it.only('validate the logout functionality 1', () => {
        dh.validateLogout()
    })

    it('validate the logout functionality 2', () => {
        dh.validateLogout2()
    })
})
