  
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

// why not create a slider to set the size of the paint brush ? 🤔
let paintBrushSize = 10

// why not create a colorpicker to set the color of brush ? 🤔
let paintBrushColor = 'black'
ctx.fillStyle = paintBrushColor

let isMouseClickPressed = false

canvas.addEventListener('mousedown', () => {
  isMouseClickPressed = true
})

canvas.addEventListener('mouseup', () => {
  isMouseClickPressed = false
})

canvas.addEventListener('mousemove', e => {
  if(isMouseClickPressed){ // equivalent of isMouseClickPressed === true
    const x = e.offsetX
    const y = e.offsetY

    ctx.fillRect(x, y, paintBrushSize, paintBrushSize)
  }
})