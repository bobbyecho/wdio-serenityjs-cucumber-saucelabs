import 'expect-webdriverio';

import { Given, Then, When } from '@cucumber/cucumber';
import { Actor } from '@serenity-js/core';
import {doCalculate, seeCalculatorPage, hasResult} from '@screenplay/calculator/task';

Given('{actor} starts with the Calculator application', async (actor: Actor) =>
  actor.attemptsTo(seeCalculatorPage())
);

When('{actor} input these two textBox with {string} and {string}', async (actor: Actor, firstInput: string, secondInput: string) =>
  actor.attemptsTo(
    doCalculate(firstInput, secondInput)
  )
);

Then('{actor} should see that the result is {string}', async (actor: Actor, resultCalculator: string) =>
  actor.attemptsTo(
    hasResult(resultCalculator)
  )
)
