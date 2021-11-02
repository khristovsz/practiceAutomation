Feature: Languages

    Background:
    Given: Opened Nexo app

    Scenario: Switch language
        When  switch language through switching language icon at right
        Then The language is changed
            | English | Chinese  |
            | Korean  | Ciganian |