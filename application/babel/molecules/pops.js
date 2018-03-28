var Pops = {
	density: 20,
	drawDistance: 0,
	baseRadius: 4,
	maxLineThickness: 4,
	reactionSensitivity: 0.5,
	lineThickness: 1,

	points: [],
	mouse: { x: -1000, y: -1000, down: false, move: false },

	animation: null,

	canvas: null,
	context: null,

	imageInput: null,
	bgImage: null,
	bgCanvas: null,
	bgContext: null,
	bgContextPixelData: null,

	init: function() {
		this.canvas = document.getElementById('pops')
		this.context = this.canvas.getContext('2d')
		this.context.globalCompositeOperation = 'lighter'
		this.canvas.style.display = 'block'

		this.canvas.addEventListener('mousemove', this.mouseMove, false)
		this.canvas.addEventListener('mousedown', this.mouseDown, false)
		this.canvas.addEventListener('mouseup',   this.mouseUp,   false)
		this.canvas.addEventListener('mouseout',  this.mouseOut,  false)

		this.preparePoints()
		this.draw()
	},

	preparePoints: function() {

		this.points = []

		var width, height, i, j, pop

		var color = '0, 0, 0'
		var offset = 420/4
		var that = this

		function pushPoint(x, y, originalX, originalY, radius, opacityDelay) {
			that.points.push({
				x: x + offset,
				y: y + offset,
				originalX: originalX + offset,
				originalY: originalY + offset,
				radius: radius,
				opacityDelay: opacityDelay,
				color: color
			})
		}

		//	POPS 14
		pop = 14
		pushPoint(170, 50, 170, 50, pop, - 0.7)
		pushPoint(131, 177, 131, 177, pop, - 0.4)

		//	POPS 12
		pop = 12
		pushPoint(68, 23, 68, 23, pop, - 0.2)
		pushPoint(128, 48, 128, 48, pop, 0)
		pushPoint(21, 64, 21, 64, pop, - 0.6)
		pushPoint(182, 119, 182, 119, pop, 0)
		pushPoint(92, 127, 92, 127, pop, - 0.4)
		pushPoint(47, 153, 47, 153, pop, - 0.9)
		pushPoint(88, 198, 88, 198, pop, - 0.1)

		//	POPS 10
		pop = 10
		pushPoint(118, 10, 118, 10, pop, - 0.7)
		pushPoint(50, 50, 50, 50, pop, - 0.3)
		pushPoint(51, 86, 51, 86, pop, 0)
		pushPoint(166, 88, 166, 88, pop, - 0.1)
		pushPoint(17, 115, 17, 115, pop, - 0.6)
		pushPoint(184, 156, 184, 156, pop, 0)
		pushPoint(55, 188, 55, 188, pop, - 0.5)

		//	POPS 7
		pop = 7
		pushPoint(94, 10, 94, 10, pop, - 0.1)
		pushPoint(139, 23, 139, 23, pop, - 0.2)
		pushPoint(98, 40, 98, 40, pop, - 0.9)
		pushPoint(74, 59, 74, 59, pop, - 0.4)
		pushPoint(191, 63, 191, 63, pop, - 0.6)
		pushPoint(145, 73, 145, 73, pop, - 0.3)
		pushPoint(26, 88, 26, 88, pop, - 0.7)
		pushPoint(7, 93, 7, 93, pop, 0)
		pushPoint(105, 92, 105, 92, pop, - 0.1)
		pushPoint(203, 102, 203, 102, pop, - 0.7)
		pushPoint(156, 110, 156, 110, pop, 0)
		pushPoint(48, 126, 48, 126, pop, - 0.8)
		pushPoint(119, 144, 119, 144, pop, - 0.8)
		pushPoint(16, 148, 16, 148, pop, 0)
		pushPoint(155, 151, 155, 151, pop, - 0.9)
		pushPoint(85, 158, 85, 158, pop, - 0.7)
		pushPoint(157, 185, 157, 185, pop, - 0.5)
		pushPoint(112, 198, 112, 198, pop, - 0.4)

		//	POPS 5
		pop = 5
		pushPoint(162, 23, 162, 23, pop, - 0.4)
		pushPoint(114, 31, 114, 31, pop, - 0.1)
		pushPoint(77, 42, 77, 42, pop, 0)
		pushPoint(29, 44, 29, 44, pop, - 0.8)
		pushPoint(148, 56, 148, 56, pop, - 0.1)
		pushPoint(187, 86, 187, 86, pop, - 0.2)
		pushPoint(90, 99, 90, 99, pop, - 0.5)
		pushPoint(118, 102, 118, 102, pop, 0)
		pushPoint(32, 104, 32, 104, pop, - 0.4)
		pushPoint(120, 124, 120, 124, pop, - 0.6)
		pushPoint(157, 131, 157, 131, pop, 0)
		pushPoint(32, 133, 32, 133, pop, - 0.5)
		pushPoint(196, 136, 196, 136, pop, - 0.4)
		pushPoint(105, 160, 105, 160, pop, - 0.2)
		pushPoint(27, 164, 27, 164, pop, - 0.8)
		pushPoint(164, 166, 164, 166, pop, - 0.2)
		pushPoint(75, 178, 75, 178, pop, - 0.6)

		//	POPS 4
		pop = 4
		pushPoint(103, 24, 103, 24, pop, - 0.5)
		pushPoint(87, 26, 87, 26, pop, - 0.1)
		pushPoint(49, 31, 49, 31, pop, - 0.5)
		pushPoint(152, 35, 152, 35, pop, - 0.7)
		pushPoint(95, 56, 95, 56, pop, - 0.3)
		pushPoint(44, 69, 44, 69, pop, - 0.9)
		pushPoint(159, 70, 159, 70, pop, 0)
		pushPoint(201, 78, 201, 78, pop, - 0.1)
		pushPoint(44, 110, 44, 110, pop, - 0.5)
		pushPoint(111, 117, 111, 117, pop, 0)
		pushPoint(9, 131, 9, 131, pop, - 0.1)
		pushPoint(170, 139, 170, 139, pop, - 0.3)
		pushPoint(98, 146, 98, 146, pop, - 0.7)
		pushPoint(149, 165, 149, 165, pop, 0)
		pushPoint(68, 166, 68, 166, pop, - 0.5)
		pushPoint(38, 179, 38, 179, pop, 0)
		pushPoint(101, 179, 101, 179, pop, - 0.7)
		pushPoint(131, 202, 131, 202, pop, - 0.9)

		//	POPS 3
		pop = 3
		pushPoint(151, 16, 151, 16, pop, - 0.6)
		pushPoint(126, 29, 126, 29, pop, - 0.1)
		pushPoint(65, 44, 65, 44, pop, - 0.4)
		pushPoint(110, 56, 110, 56, pop, 0)
		pushPoint(59, 66, 59, 66, pop, - 0.8)
		pushPoint(178, 74, 178, 74, pop, - 0.1)
		pushPoint(7, 77, 7, 77, pop, - 0.7)
		pushPoint(150, 88, 150, 88, pop, - 0.6)
		pushPoint(187, 99, 187, 99, pop, - 0.4)
		pushPoint(20, 100, 20, 100, pop, - 0.8)
		pushPoint(52, 103, 52, 103, pop, 0)
		pushPoint(169, 105, 169, 105, pop, - 0.1)
		pushPoint(3, 107, 3, 107, pop, - 0.7)
		pushPoint(97, 108, 97, 108, pop, - 0.3)
		pushPoint(34, 119, 34, 119, pop, - 0.3)
		pushPoint(204, 123, 204, 123, pop, - 0.1)
		pushPoint(109, 132, 109, 132, pop, 0)
		pushPoint(20, 135, 20, 135, pop, - 0.4)
		pushPoint(118, 159, 118, 159, pop, - 0.8)
		pushPoint(57, 171, 57, 171, pop, - 0.7)
		pushPoint(89, 174, 89, 174, pop, - 0.1)
		pushPoint(174, 175, 174, 175, pop, - 0.6)
		pushPoint(143, 195, 143, 195, pop, 0)

		//	POPS 2
		pop = 2
		pushPoint(134, 9, 134, 9, pop, - 0.1)
		pushPoint(81, 10, 81, 10, pop, - 0.8)
		pushPoint(51, 20, 51, 20, pop, - 0.2)
		pushPoint(170, 30, 170, 30, pop, - 0.4)
		pushPoint(39, 36, 39, 36, pop, - 0.8)
		pushPoint(111, 42, 111, 42, pop, - 0.2)
		pushPoint(146, 43, 146, 43, pop, - 0.3)
		pushPoint(85, 50, 85, 50, pop, - 0.6)
		pushPoint(39, 59, 39, 59, pop, - 0.8)
		pushPoint(135, 65, 135, 65, pop, - 0.1)
		pushPoint(63, 75, 63, 75, pop, 0)
		pushPoint(191, 76, 191, 76, pop, - 0.7)
		pushPoint(36, 77, 36, 77, pop, 0)
		pushPoint(196, 91, 196, 91, pop, - 0.4)
		pushPoint(38, 94, 38, 94, pop, - 0.2)
		pushPoint(107, 106, 107, 106, pop, - 0.3)
		pushPoint(86, 109, 86, 109, pop, 0)
		pushPoint(121, 113, 121, 113, pop, - 0.6)
		pushPoint(165, 121, 165, 121, pop, - 0.2)
		pushPoint(30, 148, 30, 148, pop, - 0.8)
		pushPoint(108, 149, 108, 149, pop, - 0.4)
		pushPoint(129, 155, 129, 155, pop, - 0.6)
		pushPoint(64, 157, 64, 157, pop, - 0.3)
		pushPoint(139, 157, 139, 157, pop, 0)
		pushPoint(97, 167, 97, 167, pop, - 0.1)
		pushPoint(37, 169, 37, 169, pop, - 0.7)
		pushPoint(111, 171, 111, 171, pop, 0)
		pushPoint(47, 174, 47, 174, pop, - 0.7)
		pushPoint(169, 182, 169, 182, pop, - 0.3)
		pushPoint(110, 186, 110, 186, pop, - 0.2)
		pushPoint(71, 188, 71, 188, pop, - 0.6)
	},

	love: [
		//	POPS 14
		{x: 170, y: 50},
		{x: 150, y: 181},

		//	POPS 12
		{x: 69, y: 22},
		{x: 127, y: 47},
		{x: 22, y: 63},
		{x: 183, y: 118},
		{x: 107, y: 169},
		{x: 48, y: 151},
		{x: 76, y: 194},

		//	POPS 10
		{x: 118, y: 10},
		{x: 49, y: 48},
		{x: 45, y: 81},
		{x: 170, y: 89},
		{x: 17, y: 115},
		{x: 186, y: 151},
		{x: 50, y: 183},

		//	POPS 7
		{x: 96, y: 9},
		{x: 138, y: 22},
		{x: 98, y: 39},
		{x: 86, y: 56},
		{x: 192, y: 62},
		{x: 150, y: 65},
		{x: 21, y: 85},
		{x: 7, y: 93},
		{x: 137, y: 140},
		{x: 203, y: 102},
		{x: 158, y: 111},
		{x: 44, y: 114},
		{x: 124, y: 196},
		{x: 16, y: 148},
		{x: 161, y: 129},
		{x: 60, y: 122},
		{x: 167, y: 161},
		{x: 100, y: 203},

		//	POPS 5
		{x: 162, y: 23},
		{x: 114, y: 31},
		{x: 80, y: 41},
		{x: 30, y: 45},
		{x: 147, y: 49},
		{x: 187, y: 86},
		{x: 85, y: 145},
		{x: 131, y: 165},
		{x: 30, y: 101},
		{x: 124, y: 180},
		{x: 145, y: 126},
		{x: 37, y: 129},
		{x: 197, y: 136},
		{x: 72, y: 133},
		{x: 27, y: 164},
		{x: 152, y: 153},
		{x: 65, y: 173},

		//	POPS 4
		{x: 103, y: 23},
		{x: 89, y: 25},
		{x: 51, y: 30},
		{x: 151, y: 31},
		{x: 105, y: 66},
		{x: 60, y: 65},
		{x: 164, y: 71},
		{x: 201, y: 78},
		{x: 42, y: 100},
		{x: 123, y: 146},
		{x: 9, y: 131},
		{x: 168, y: 145},
		{x: 85, y: 169},
		{x: 138, y: 154},
		{x: 68, y: 151},
		{x: 34, y: 176},
		{x: 96, y: 154},
		{x: 138, y: 200},

		//	POPS 3
		{x: 151, y: 16},
		{x: 126, y: 28},
		{x: 64, y: 40},
		{x: 115, y: 60},
		{x: 69, y: 51},
		{x: 179, y: 73},
		{x: 7, y: 77},
		{x: 156, y: 79},
		{x: 187, y: 99},
		{x: 20, y: 100},
		{x: 51, y: 95},
		{x: 170, y: 106},
		{x: 3, y: 107},
		{x: 85, y: 157},
		{x: 32, y: 112},
		{x: 204, y: 123},
		{x: 100, y: 188},
		{x: 20, y: 135},
		{x: 109, y: 194},
		{x: 73, y: 163},
		{x: 62, y: 138},
		{x: 181, y: 171},
		{x: 171, y: 174},

		//	POPS 2
		{x: 134, y: 9},
		{x: 82, y: 9},
		{x: 51, y: 20},
		{x: 170, y: 30},
		{x: 39, y: 32},
		{x: 109, y: 49},
		{x: 143, y: 38},
		{x: 99, y: 56},
		{x: 39, y: 61},
		{x: 136, y: 61},
		{x: 71, y: 61},
		{x: 192, y: 76},
		{x: 48, y: 65},
		{x: 197, y: 91},
		{x: 33, y: 90},
		{x: 116, y: 154},
		{x: 54, y: 168},
		{x: 115, y: 186},
		{x: 178, y: 136},
		{x: 30, y: 140},
		{x: 126, y: 155},
		{x: 152, y: 141},
		{x: 50, y: 129},
		{x: 143, y: 163},
		{x: 76, y: 142},
		{x: 29, y: 150},
		{x: 115, y: 205},
		{x: 38, y: 168},
		{x: 171, y: 183},
		{x: 90, y: 180},
		{x: 78, y: 177}
	],

	loveTime: function() {
		var i, currentPoint
		var offset = 420/4

		for (i = 0; i < this.points.length; i++) {

			currentPoint = this.points[i]

			currentPoint.originalX = Pops.love[i].x + offset
			currentPoint.originalY = Pops.love[i].y + offset
		}
	},

	rdm: function(from, to) {
		return Math.floor(Math.random() * (to - from + 1) + from)
	},

	updatePoints: function() {

		var i, currentPoint, theta, distance

		for (i = 0; i < this.points.length; i++) {

			currentPoint = this.points[i]

			theta = Math.atan2(currentPoint.y - this.mouse.y, currentPoint.x - this.mouse.x)


			if (this.mouse.down) {
				distance = this.reactionSensitivity * 200 / Math.sqrt((this.mouse.x - currentPoint.x) * (this.mouse.x - currentPoint.x) +
				 (this.mouse.y - currentPoint.y) * (this.mouse.y - currentPoint.y))
			} else {
				distance = this.reactionSensitivity * 100 / Math.sqrt((this.mouse.x - currentPoint.x) * (this.mouse.x - currentPoint.x) +
				 (this.mouse.y - currentPoint.y) * (this.mouse.y - currentPoint.y))
			}

			currentPoint.x += Math.cos(theta) * distance + (currentPoint.originalX - currentPoint.x) * 0.05
			currentPoint.y += Math.sin(theta) * distance + (currentPoint.originalY - currentPoint.y) * 0.05

		}
	},

	drawPoints: function() {
		var i, currentPoint

		for (i = 0; i < this.points.length; i++) {
			currentPoint = this.points[i]

			this.context.fillStyle = 'rgba('+currentPoint.color+','+currentPoint.opacityDelay+')'
			if(currentPoint.opacityDelay < 1) currentPoint.opacityDelay = currentPoint.opacityDelay + 0.025
			this.context.strokeStyle = 'rgb('+currentPoint.color+')'

			this.context.beginPath()
			this.context.arc(currentPoint.x, currentPoint.y, currentPoint.radius ,0 , Math.PI*2, true)
			this.context.closePath()
			this.context.fill()
		}
	},

	draw: function() {
		this.animation = requestAnimationFrame(function() {
			Pops.draw()
		})

		this.clear()
		this.updatePoints()
		this.drawPoints()

	},

	clear: function() {
		this.canvas.width = this.canvas.width
	},

	mouseDown: function(event) {
		Pops.mouse.down = true
	},

	mouseUp: function(event) {
		Pops.mouse.down = false
	},

	mouseMove: function(event) {
		for (var i = 0; i < Pops.points.length; i++) {
			$(Pops.points[i]).stop()
		}
		Pops.mouse.x = event.offsetX || (event.layerX - Pops.canvas.offsetLeft)
		Pops.mouse.y = event.offsetY || (event.layerY - Pops.canvas.offsetTop)
		Pops.mouse.move = true
	},

	mouseOut: function(event) {
		Pops.mouse.x = -1000
		Pops.mouse.y = -1000
		Pops.mouse.down = false
		Pops.mouse.move = false
	}
}
