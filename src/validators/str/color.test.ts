import { hsl, isHsl, rgb, isRgb, rgba, isRgba, hexColor, isHexColor } from './color'

describe('color', () => {
  test('validate hsl color', () => {
    expect(hsl('hsl(0,0%,0%)')).toBe(true)
    expect(hsl('hsl(0, 0%, 0%)')).toBe(true)
    expect(hsl('hsl(10, 20%, 30%)')).toBe(true)
    expect(hsl('hsl(10,20%,30%)')).toBe(true)
    expect(hsl('hsl(100, 100%, 100%)')).toBe(true)
    expect(hsl('hsl(100,100%,100%)')).toBe(true)

    expect(hsl('hsl(120%, 22%, 34%)')).toBe(false)
    expect(hsl('hsl(0, 22, 34%)')).toBe(false)
    expect(hsl('hsl(0, 22%, 34)')).toBe(false)
    expect(hsl('hsl(0, 22, 34)')).toBe(false)
    expect(hsl('hsl(!@#*())')).toBe(false)
    expect(hsl('asdfghjk')).toBe(false)
  })

  test('validate rgb color', () => {
    expect(rgb('rgb(0,0,0)')).toBe(true)
    expect(rgb('rgb(0, 0, 0)')).toBe(true)
    expect(rgb('rgb(128, 0, 0)')).toBe(true)
    expect(rgb('rgb(128, 128, 128)')).toBe(true)

    expect(rgb('rgb(999,0,0)')).toBe(false)
    expect(rgb('rgb(0,0,256)')).toBe(false)
    expect(rgb('rgb(0, 0, 256)')).toBe(false)

    expect(rgb('rgb(0%, 0%, 0%)')).toBe(true)
    expect(rgb('rgb(1%, 1%, 1%)')).toBe(true)
    expect(rgb('rgb(10%, 20%, 30%)')).toBe(true)
    expect(rgb('rgb(100%, 100%, 100%)')).toBe(true)

    expect(rgb('rgb(101%, 101%, 101%)')).toBe(false)
    expect(rgb('rgb(#$%^&*ASDFGH')).toBe(false)
    expect(rgb('asdfghj')).toBe(false)
  })

  test('validate rgba color', () => {
    expect(rgba('rgba(0,0,0,0)')).toBe(true)
    expect(rgba('rgba(0, 0, 0, 0)')).toBe(true)
    expect(rgba('rgba(128, 0, 0, 0.0)')).toBe(true)
    expect(rgba('rgba(128, 0, 0, .0)')).toBe(true)
    expect(rgba('rgba(128, 128, 128, .5)')).toBe(true)
    expect(rgba('rgba(128, 128, 128, 0.5)')).toBe(true)
    expect(rgba('rgba(255, 255, 255, 1.0)')).toBe(true)

    expect(rgba('rgba(999,0,0,0)')).toBe(false)
    expect(rgba('rgba(0,0,256,0)')).toBe(false)
    expect(rgba('rgba(0, 0, 256,1.01)')).toBe(false)

    expect(rgba('rgba(0%, 0%, 0%, 0)')).toBe(true)
    expect(rgba('rgba(1%, 1%, 1%, 0.01)')).toBe(true)
    expect(rgba('rgba(10%, 20%, 30%, 0.4)')).toBe(true)
    expect(rgba('rgba(100%, 100%, 100%, 1.0)')).toBe(true)

    expect(rgba('rgba(#$%^&*ASDFGH')).toBe(false)
    expect(rgba('asdfghj')).toBe(false)
  })

  test('validate hex color', () => {
    expect(hexColor('#000')).toBe(true)
    expect(hexColor('#111')).toBe(true)
    expect(hexColor('#123')).toBe(true)
    expect(hexColor('#bf0')).toBe(true)
    expect(hexColor('#fff')).toBe(true)
    expect(hexColor('#ggg')).toBe(false)
    expect(hexColor('#xxx')).toBe(false)

    expect(hexColor('#0000')).toBe(true)
    expect(hexColor('#1111')).toBe(true)
    expect(hexColor('#1234')).toBe(true)
    expect(hexColor('#1ab2')).toBe(true)
    expect(hexColor('#ffff')).toBe(true)
    expect(hexColor('#gggg')).toBe(false)

    expect(hexColor('#000000')).toBe(true)
    expect(hexColor('#111111')).toBe(true)
    expect(hexColor('#123456')).toBe(true)
    expect(hexColor('#1a2bc3')).toBe(true)
    expect(hexColor('#ffffff')).toBe(true)
    expect(hexColor('#gggggg')).toBe(false)

    expect(hexColor('#00000000')).toBe(true)
    expect(hexColor('#11111111')).toBe(true)
    expect(hexColor('#1a2b3c4d')).toBe(true)
    expect(hexColor('#ffffffff')).toBe(true)
    expect(hexColor('#gggggggg')).toBe(false)
  })

  test('test aliases', () => {
    expect(isHsl).toBe(hsl)
    expect(isRgb).toBe(rgb)
    expect(isRgba).toBe(rgba)
    expect(isHexColor).toBe(hexColor)
  })
})