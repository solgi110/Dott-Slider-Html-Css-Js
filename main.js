

const leftButton = document.querySelector('.leftBtn')
const rightButton = document.querySelector('.rightBtn')
const imageSlider = document.querySelector('.img-slider')
const Slide = document.querySelectorAll('.slide')
const slider = document.querySelector('.bildContainer')
const dotContainer = document.querySelector('.dotContainer')


let currentImage = 0;

const transform = () => {
  imageSlider.style.transform = `translateX(-${currentImage * 100}%)  `
}

const rightSide = () => {

  currentImage += 1

  if (currentImage > Slide.length - 1) {
    currentImage = 0
  }

  updateDot()
  transform()
}

const leftSilde = () => {

  currentImage -= 1

  if (currentImage < 0) {
    currentImage = Slide.length - 1
  }
  transform()
  updateDot()
}


////Dot Slider

Slide.forEach((item, index) => {

  const dot = document.createElement('div')
  dot.classList = 'dot';
  dot.dataset.index = index
  index = dot

  if (index == 0) {
    dot[0].classList.add('active')
  }

  dotContainer.appendChild(dot)

})

const dot = document.querySelectorAll('.dot')

dot.forEach((doti) => {
  doti.addEventListener('click', () => {
    const index = doti.dataset.index
    currentImage = index

    updateDot()
    transform()
  })
})


const updateDot = () => {
  dot.forEach((dats, index) => {

    if (index == currentImage) {
      dats.classList.add('active')

    } else {
      dats.classList.remove('active')
    }
  })

}

///Function elements
rightButton.addEventListener('click', rightSide);
leftButton.addEventListener('click', leftSilde);
setInterval(rightSide, 6000)


document.addEventListener('contextmenu', (e) => {
  e.preventDefault()
});
document.addEventListener('DOMContentLoaded', () => {
  updateDot()
});












