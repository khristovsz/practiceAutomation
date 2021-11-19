Feature: Cart

Background:
        Given Open Login page successfully

Scenario: Add product in shopping cart
	And navigate to MEN section
	And click on Fragrance sets and choose item
	When click on cart button
	Then added item in shopping cart is displayed



Scenario: Remove product from shopping cart
	And add product in shopping cart
	And navigate to shopping cart
	And item is added in shopping cart
	When click on Remove button
	Then shopping cart is empty


Scenario: Change currency to Euro
	When click on currency drop-down and choose Euro
	And navigate to MEN section
	Then all prices are in Euro