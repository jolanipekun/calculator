Feature: Calculator Functionality

    Scenario: Display initializes with 0
        Given the calculator app is launched
        Then the display should show "0"

    Scenario: Adding two numbers
        Given the calculator app is launched
        When I press "5", "+", "3", and "="
        Then the display should show "88"

    Scenario: Subtracting two numbers
        Given the calculator app is launched
        When I press "9", "-", "4", and "="
        Then the display should show "5"
