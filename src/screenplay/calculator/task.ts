import {Task} from '@serenity-js/core';
import {Click, Enter, Text} from '@serenity-js/webdriverio';
import {button, label, textInput} from './ui';
import {Ensure, includes} from '@serenity-js/assertions';

export const seeCalculatorPage = () => Task.where(
  "#actor open calculator page",
    Ensure.that(Text.of(label.result()), includes("0"))
  )

export const doCalculate = (firstInput: string, secondInput: string) => Task.where(
  "#actor do calculate",
  Enter.theValue(firstInput).into(textInput.first()),
  Enter.theValue(secondInput).into(textInput.second()),
  Click.on(button.submit())
)

export const hasResult = (resultCalculator: string) => Task.where(
  "#actor will see the result",
    Ensure.that(Text.of(label.result()), includes(resultCalculator))
  )
