import path from 'pathe'
import fs from 'fs-extra'
import type { Plugin } from 'histoire'
import { defu } from 'defu'

interface InteractionPresets {
}

export interface InteractionPluginOptions {
}

const defaultOptions: InteractionPluginOptions = {
}

export function HstInteraction (options: InteractionPluginOptions = {}): Plugin {
  const finalOptions: InteractionPluginOptions = defu(options, defaultOptions)
  return {
    name: '@histoire/plugin-interaction',
  }
}
