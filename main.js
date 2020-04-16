// console.log('hi')确定js是否成功链接到html
var div = document.createElement('div')
// 创建一个div  扩展：搜索 js create div mdn

div.className = 'demo'
div.style.top = 'auto'

document.body.appendChild(div)
// 把div放到body里

var dragging = false

var lastX
var lastY

div.onmousedown = function (e) {
    lastX = e.clientX
    lastY = e.clientY
    dragging = true
}

document.onmousemove = function (e) {
    if (dragging == true) {
        var deltaX = e.clientX - lastX
        var deltaY = e.clientY - lastY
        var top = parseInt(div.style.top) || 0
        var left = parseInt(div.style.left) || 0
        div.style.top = top + deltaY + 'px'
        div.style.left = left + deltaX + 'px'
        lastX = e.clientX
        lastY = e.clientY

    }
}
document.onmouseup = function () {
    dragging = false
}
