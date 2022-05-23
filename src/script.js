import ColorPixels from './ColourPixels'


const colorPixels = new ColorPixels(10, 10, 30, 0.001)

const canvas = document.getElementsByTagName('canvas')[0]

colorPixels.initCanvas(canvas)

colorPixels.draw()
