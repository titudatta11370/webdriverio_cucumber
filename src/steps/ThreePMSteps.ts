import {Given} from 'cucumber'
import homePage from "../PageObject/HomePage";
const {user, password} = require ('../support/util/credentials');


Given(/^I login to threePM website$/, function () {
        homePage.enterLoginInformation(user, password)
});