Feature: Perform basic smoke checks of the Wealth Wizards homepage

Scenario: Visit Wealth Wizards Homepage
    Given I open the homepage
    Then I see "Wealth Wizards" in the title

Scenario: Header should exist
    Given I open the homepage
    Then the header should exist

Scenario: Navigation bar should exist
    Given I open the homepage
    Then the navigation bar should exist

Scenario: Body section bar should exist
    Given I open the homepage
    Then the body section should exist

Scenario: Visit the contact us page using the dropdown link 
    Given I open the homepage
    When I expand the "About us" dropdown
    And I click on "Contact"
    Then I should be taken to the contact page    

# Next scenario should include a Percy test...Also need to change the Given above to background for optimisation and use Utils class. Must do actual work now! 