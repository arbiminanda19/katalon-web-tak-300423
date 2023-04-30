#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
@HighPriority
Feature: Product
  I want to use this template for my feature file

  @Positive
  Scenario Outline: User successfully access product page
    Given user is on login page
    When user input <email> as email
    And user input <password> as password
    And user click login button
    And user click products button
    
    Examples: 
      | email									| password |
      | test30Apr1@gmail.com 	| password |