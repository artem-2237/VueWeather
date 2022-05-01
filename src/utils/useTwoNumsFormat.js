export function useTwoNumsFormat (num) {
  if (`${num}`.length === 1) {
    return `0${num}`
  } else if (`${num}`.length === 2) {
    return num
  }
}