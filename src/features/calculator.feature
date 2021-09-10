Feature: Menghitung Pertambahan

  Background:
    Given Bob starts with the Calculator application

  Scenario Outline: Pertambahan

    When Bob input these two textBox with "<firstInput>" and "<secondInput>"
    Then Bob should see that the result is "<resultCalculator>"

    Examples:
      | firstInput  | secondInput  | resultCalculator |
      | 20          | 50           | 70               |
