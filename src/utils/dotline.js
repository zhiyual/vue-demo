/* eslint-disable no-useless-return */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-useless-constructor */

var getRandom = function (min, max) {
  return Math.floor(Math.random() * (max - min) * 100) / 100 + min
}

const stageId = 'dot-line'

var mouseTarget = {
  x: 0,
  y: 0
}

const mouseR = 100

class Dot {
  constructor (width, height) {
    this._w = width
    this._h = height

    this.x = getRandom(0, width)
    this.y = getRandom(0, height)
    this.vx = Math.pow(-1, Math.floor(Math.random() * 2)) * (Math.random() * 0.6 + 0.1)
    this.vy = Math.pow(-1, Math.floor(Math.random() * 2)) * (Math.random() * 0.5 + 0.1)

    this.r = 5

    this.catched = false
  }

  run () {
    const mx = mouseTarget.x
    const my = mouseTarget.y
    const d = mouseR
    if (this.catched) {
      // const dx = Math.abs(mx - this.x)
      // const dy = Math.abs(my - this.y)
      const dx = Math.abs(mx - this.x - this.vx)
      const dy = Math.abs(my - this.y - this.vy)
      const d2 = d + 50
      if (dx * dx + dy * dy < d * d) {
        this.x += this.vx
        this.y += this.vy
      } else if (dx * dx + dy * dy > d * d && dx * dx + dy * dy < d2 * d2) {
        this.runTo(mx, my, d)
      } else if (dx * dx + dy * dy >= d2 * d2) {
        this.x += this.vx
        this.y += this.vy
      }
      // this.x += 0
      // this.y += 0
    } else {
      this.x += this.vx
      this.y += this.vy
    }
  }

  runTo (mx, my, d) {
    const dx = Math.abs(mx - this.x)
    const dy = Math.abs(my - this.y)
    const dd = Math.sqrt(dx * dx + dy * dy)
    // if (dd <= d) return
    const _dx = dx * d / dd
    const _dy = dy * d / dd
    this.x = this.x < mx ? mx - _dx : mx + _dx
    this.y = this.y < my ? my - _dy : my + _dy
  }

  isalive () {
    return this.x > 0 && this.x < this._w && this.y > 0 && this.y < this._h
  }

  isCatch () {
    const mx = mouseTarget.x
    const my = mouseTarget.y
    const d = mouseR
    if (mx > d && my > d && mx < this._w - d && my < this._h - d) {
      const dx = Math.abs(mx - this.x)
      const dy = Math.abs(my - this.y)
      this.catched = dx * dx + dy * dy <= d * d
    } else {
      this.catched = false
    }
  }
}

class dotline {
  constructor (params) {
    this._animation = null

    this.dotList = []
    this.dotMax = 100

    this.elDom = params.el

    this._w = window.innerWidth
    this._h = window.innerHeight

    this.stage = document.getElementById(stageId)
    if (!this.stage) {
      this.stage = document.createElement('canvas')
      this.stage.id = stageId
    }
    this.stage.width = this._w
    this.stage.height = this._h
    this.stage.style.cssText = 'display: block;position: fixed;top: 0;left: 0;margin: 0;padding: 0;border: none;background: none;pointer-events: none;'
    document.body.appendChild(this.stage)
    this.ctx = this.stage.getContext('2d')
    this.ctx.fillStyle = '#ffffff'
    this.ctx.strokeStyle = '#ffffff'

    this.init()
  }
  addDot (n) {
    if (!n && n === 0) return
    if (n > 1) {
      let i = 0
      while (i < n) {
        i++
        this.dotList.push(new Dot(this._w, this._h))
      }
    } else {
      this.dotList.push(new Dot(this._w, this._h))
    }
  }

  init () {
    this.dotList = []
    console.log(111)
    this.addDot(this.dotMax)
    // window.addEventListener('mousemove', this.onMouseMove)
    const stageBox = this.stage.parentElement
    stageBox.onmousemove = this.onMouseMove
  }

  onMouseMove (e) {
    const me = e || window.event
    console.log('mouse', me.clientX, me.clientY)
    mouseTarget.x = me.clientX
    mouseTarget.y = me.clientY
  }
  
  render () {
    this.ctx.clearRect(0, 0, this._w, this._h)
    this.drawDot({
      x: mouseTarget.x,
      y: mouseTarget.y,
      r: 5
    })
    for (let i = 0; i < this.dotList.length; i++) {
      let _dot = this.dotList[i]
      this.drawDot(_dot)

      _dot.run()
      if (!_dot.isalive()) {
        this.dotList.splice(i, 1)
        i--
      } else {
        _dot.isCatch()
      }
    }

    this.drawLine()

    this.addDot(this.dotMax - this.dotList.length)
    
    // console.log('count: ', this.dotList.length)
    this._animation = requestAnimationFrame(() => {
      this.render()
    })
  }

  drawDot (_dot) {
    this.ctx.beginPath()
    this.ctx.arc(_dot.x, _dot.y, _dot.r, 0, 2 * Math.PI)
    this.ctx.fill()
    this.ctx.closePath()
  }

  drawLine () {
    this.ctx.beginPath()
    const dd = 100
    let l = this.dotList.length
    for (let i = 0; i < l; i++) {
      const dt = this.dotList[i]
      if (dt.catched) {
        this.ctx.moveTo(dt.x, dt.y)
        this.ctx.lineTo(mouseTarget.x, mouseTarget.y)
        this.ctx.stroke()
      }
    }
    for (let i = 0; i < l - 1; i++) {
      for (let j = i + 1; j < l; j++) {
        const _d1 = this.dotList[i]
        const _d2 = this.dotList[j]
        const dx = Math.abs(_d1.x - _d2.x)
        const dy = Math.abs(_d1.y - _d2.y)
        if (dx > dd || dy > dd || (Math.pow(dx, 2) + Math.pow(dy, 2)) > (dd * dd)) continue
        this.ctx.moveTo(_d1.x, _d1.y)
        this.ctx.lineTo(_d2.x, _d2.y)
        this.ctx.stroke()
      }
    }
    this.ctx.closePath()
  }

  start () {
    this.render()
  }

  stop () {
    cancelAnimationFrame(this._animation)
  }
}

export default dotline
