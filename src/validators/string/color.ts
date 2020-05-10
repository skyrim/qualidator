const hslCommaRegEx = /^(hsl)a?\(\s*((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?))(deg|grad|rad|turn|\s*)(\s*,\s*(\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%){2}\s*(,\s*((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%?)\s*)?\)$/i
const hslSpaceRegEx = /^(hsl)a?\(\s*((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?))(deg|grad|rad|turn|\s)(\s*(\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%){2}\s*(\/\s*((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%?)\s*)?\)$/i

export function hsl(value: string) {
  return hslCommaRegEx.test(value) || hslSpaceRegEx.test(value)
}

export const isHsl = hsl

const rgbColor = /^rgb\((([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),\s*){2}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\)$/
const rgbColorPercent = /^rgb\((([0-9]%|[1-9][0-9]%|100%),\s*){2}([0-9]%|[1-9][0-9]%|100%)\)$/

export function rgb(value: string) {
  return rgbColor.test(value) || rgbColorPercent.test(value)
}

export const isRgb = rgb

const rgbaColor = /^rgba\((([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),\s*){3}(0?\.\d|1(\.0)?|0(\.0)?)\)$/
const rgbaColorPercent = /^rgba\((([0-9]%|[1-9][0-9]%|100%),\s*){3}(0?\.\d+|1(\.0)?|0(\.0)?)\)$/

export function rgba(value: string) {
  return rgbaColor.test(value) || rgbaColorPercent.test(value)
}

export const isRgba = rgba

const hexColorRegEx = /^#?([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i

export function hexColor(value: string) {
  return hexColorRegEx.test(value)
}

export const isHexColor = hexColor
