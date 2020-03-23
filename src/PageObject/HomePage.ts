import {waitFor} from "../support/action/waitFor";
import {waitForDisplayed} from "../support/action/waitForDisplayed";


class HomePage {
    
    get username() {
        return $('#UserName');
    }

    get password(){
        return $('#Password');
    }

    get continueButton() {
        return $('#auth-continue-button');
    }

    get loginButton() {
        return $('#auth-submit-button');
    }

      enterLoginInformation(usernameValue, passwordValue){
        this.username.setValue(usernameValue);
        this.continueButton.click();
        this.password.isClickable()
        this.password.setValue(passwordValue);
        this.loginButton.click()
    }
    
    open() {
        browser.url('https://insight.exiger.com/Auth/Login')
    }
}

export default new HomePage();


