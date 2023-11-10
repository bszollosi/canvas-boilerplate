import utils, { randomColor, randomIntFromRange } from './utils'

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

addEventListener('click', () => {
  init()
})

// Objects
class Ball {
  constructor({ x, y, dx, dy, radius, color }) {
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy;
    this.radiusX = radius
    this.radiusY = radius
    this.color = color
  }

  draw() {
    c.beginPath()
    //c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.ellipse(this.x, this.y, this.radiusX, this.radiusY, 0, 0, 2 * Math.PI);
    c.fillStyle = this.color
    c.fill()
    c.stroke()
    c.closePath()
  }

  update() {
    if (this.y + this.radiusY + this.dy > canvas.height) { // Hozzá kell adni a csorsulást is hogy ne ragadjanak hozzá a talajhoz.
      this.dy *= -1
      this.dy *= FRICTION
      this.dx *= FRICTION
    } else {
      
      this.dy += GRAVITY;
    }

    if (this.x + this.radiusX + this.dx > canvas.width) {
      this.dx *= -1
      this.dx *= FRICTION
    }

    if (this.x - this.radiusX<= 0) {
      this.dx *= -1
      this.dx *= FRICTION
    }

    this.x += this.dx
    this.y += this.dy
    this.draw()
  }
}

// Implementation
var ballArray = []

function init() {
  
  const radius = 30

  ballArray = []

  for (let i = 0; i < 10; i++) {
    const ball = new Ball({
      x: randomIntFromRange(radius, canvas.width - radius),
      y: randomIntFromRange(canvas.height / 2 - 300, canvas.height / 2 + 100),
      dx: randomIntFromRange(-10, 10),
      dy: randomIntFromRange(-10, 10),
      radius: radius,
      color: randomColor(colors)})
    ballArray.push(ball)
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

  ballArray.forEach(ball => {
      ball.update()
  })

}

init()
animate()