Feature: Login

    Verify Login page and its actions

    Background:
        Given Open Login page successfully

    Scenario: Verify page
        Then verify Login screen

    Scenario: Successful login
        When Populate username: "Jekata374952" and password: "pass123"
        Then The login page is displayed