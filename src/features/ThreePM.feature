Feature: Home Page

  Home page should work

#  Scenario: Home page should work fine
#    Given I open the url "https://insight.exiger.com/"
#    And I set "tdatta@exiger.com" to the inputfield "#UserName"
#    And I click on the button ".btn-submit"
#    When  I pause for 3000ms
#    And I set "Admin1234$" to the inputfield "#Password"
#    When  I pause for 1000ms
#    And I click on the button "#auth-submit-button"
#    And I expect that the title is "Exiger Insight | Dashboard"
    
   Scenario: User should be able to create a third-party
    Given I open the url "./Auth/Login"
     And I login to threePM website
     And I expect that the title is "Exiger Insight | Dashboard"

     
    