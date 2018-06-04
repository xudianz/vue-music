function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// shuffle 无副作用的洗牌函数
export function shuffle (arr) {
  let _arr = arr.slice() // arr的一个副本 防止传入的arr发生变化
  for (let i = 0; i < _arr.length; i++) {
    let j = getRandomInt(0, i)
    let t = _arr[i]
    _arr[i] = _arr[j]
    _arr[j] = t
  }
  return _arr
}

// 输入截留函数
export function debounce (func, delay) {
  let timer
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}