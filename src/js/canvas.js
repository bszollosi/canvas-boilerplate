import utils from './utils'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
}

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

const GRAVITY = 1;
const FRICTION = 0.88;

// Event Listeners
addEventListener('mousemove', (event) => {
  mouse.x = event.clientX
  mouse.y = event.clientY
})

addEventListener('resize', () => {
  canvas.width = innerWidth
  canvas.height = innerHeight

  init()
})

// Objects
class Ball {
  constructor(x, y, dy, radius, color) {
    this.x = x
    this.y = y
    this.dy = dy;
    this.radius = radius
    this.color = color
  }

  draw() {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
    c.closePath()
  }

  update() {
    if (this.y + this.radius > canvas.height) {
      this.dy *= -1
      this.dy *= FRICTION
    } else {
      
      this.dy += GRAVITY;
    }
    this.y += this.dy
    this.draw()
  }
}

// Implementation
var ball

function init() {
  ball = new Ball(canvas.width / 2, canvas.height / 2, 2, 30, 'red')
  
  for (let i = 0; i < 400; i++) {
    // objects.push()
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate)

  // Clear the screen.
  c.clearRect(0, 0, canvas.width, canvas.height)

  c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y)
  // objects.forEach(object => {
  //  object.update()
  // })

  ball.update()

}

init()
animate()
