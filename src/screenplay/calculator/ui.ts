import {by, Target} from '@serenity-js/webdriverio';

export const textInput = {
  first: () => Target.the('First TextInput').located(by.css("~input1")),
  second: () => Target.the('Second TextInput').located(by.css("~input2"))
}

export const button = {
  submit: () => Target.the('Button Calculate').located(by.css('~submit'))
}

export const label = {
  result: () => Target.the('Label Result').located(by.css('~result'))
}
