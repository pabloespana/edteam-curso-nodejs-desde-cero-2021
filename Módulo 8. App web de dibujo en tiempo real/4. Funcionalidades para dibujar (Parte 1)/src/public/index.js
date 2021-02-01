const socket = io()
var click = false
var moving_mouse = false
var x_position = 0
var y_position = 0
var previous_position = {x_position:0, y_position:0}
var color = 'black'

const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')

const width = window.innerWidth
const height = window.innerHeight

canvas.width = width
canvas.height = height

canvas.addEventListener('mousedown', ()=>{
    click = true
})

canvas.addEventListener('mouseup', ()=>{
    click = false
})

canvas.addEventListener('mousemove', (e)=>{
    x_position = e.clientX
    y_position = e.clientY
    moving_mouse = true
})