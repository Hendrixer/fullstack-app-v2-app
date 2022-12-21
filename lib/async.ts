export const delay = (time) => new Promise((resolve) => {
  setTimeout(() => resolve(1), time)
})