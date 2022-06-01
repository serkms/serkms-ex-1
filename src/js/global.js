const WINDOW_HEIGHT = document.documentElement.clientHeight

const positionElementTop = (selector) => {
   return WINDOW_HEIGHT - selector.getBoundingClientRect().top
}

