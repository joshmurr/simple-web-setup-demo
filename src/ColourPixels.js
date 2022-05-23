

export default class ColourPixels {
  constructor(width, height, pixelSize, speed) {
    this.width = width * pixelSize
    this.height = height * pixelSize
    this.pixelSize = pixelSize
    this.speed = speed
  }

  initCanvas(canvasElement) {
    this.ctx = canvasElement.getContext('2d')
    const width = this.width
    const height = this.width
    canvasElement.width = width
    canvasElement.height = height
  }

  draw(rafTime) {
    const time = rafTime * this.speed
    for (let i = 0; i < this.width / this.pixelSize; i++) {
      for (let j = 0; j < this.height / this.pixelSize; j++) {
        var r = (Math.cos(i + j + time) + 1) * 128
        var g = (Math.sin(j + i + time) + 1) * 128
        var b = 255 - r
        this.ctx.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')'
        this.ctx.fillRect(i * this.pixelSize, j * this.pixelSize, this.pixelSize, this.pixelSize)
      }
    }
    requestAnimationFrame((time) => this.draw(time))
  }
}
