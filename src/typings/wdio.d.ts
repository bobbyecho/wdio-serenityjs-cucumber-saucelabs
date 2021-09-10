import {
  Browser as WdioBrowser,
  Element as WdioElement,
  MultiRemoteBrowser as WdioMultiRemoteBrowser
} from 'webdriverio/build/types'
import {Activity} from "@serenity-js/core";

declare global {
  interface Browser extends WdioBrowser<'sync'> {}
  // @ts-ignore
  interface MultiRemoteBrowser extends WdioMultiRemoteBrowser<'sync'> {}

  interface Element extends WdioElement<'sync'> {}

  function $(...args: Parameters<Browser['$']>): Element
  function $$(...args: Parameters<Browser['$$']>): ReturnType<Browser['$$']>
}
