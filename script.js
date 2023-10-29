const textInput = document.querySelector(".text-input")
const imageInput = document.querySelector(".file input")
const img = document.querySelector(".file img")

document.getElementById('encrypt-button').addEventListener('click', () => {
  if (img.src) {
    document.querySelector(".head img").style.display = 'block'
    document.querySelector(".head p").textContent = ''
    Stego.encode_LSB_Stenography(img.src, textInput.value, img => document.querySelector(".head img").src = img)
  }
})

document.getElementById('decrypt-button').addEventListener('click', () => {
  if (img.src) {
    document.querySelector(".head img").style.display = 'none'
    Stego.decode_LSB_Stenography(img.src, txt => document.querySelector(".head p").textContent = txt)
  }
})

imageInput.addEventListener('change', () => {
  img.src = URL.createObjectURL(imageInput.files[0])
  img.style.display = 'block  '
  document.querySelector('.file svg').style.display = 'none'
})

function dragElement(element, trigger) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0
  if (document.getElementById(element.id + "header")) document.getElementById(element.id + "header").onmousedown = dragMouseDown
  else trigger.onmousedown = dragMouseDown

  function dragMouseDown(e) {
    e = e || event
    e.preventDefault()
    pos3 = e.clientX
    pos4 = e.clientY
    document.onmouseup = closeDragElement
    document.onmousemove = elementDrag
  }

  function elementDrag(e) {
    e = e || event
    e.preventDefault()
    pos1 = pos3 - e.clientX
    pos2 = pos4 - e.clientY
    pos3 = e.clientX
    pos4 = e.clientY
    element.style.top = (element.offsetTop - pos2) + "px"
    element.style.left = (element.offsetLeft - pos1) + "px"
  }

  function closeDragElement() {
    document.onmouseup = null
    document.onmousemove = null
  }
}

dragElement(document.querySelector('.card'), document.querySelector('.head'))