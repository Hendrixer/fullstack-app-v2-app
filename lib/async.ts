export const delay = (time:number) => new Promise((resolve) => {
    setTimeout(() => resolve(1), time)
})