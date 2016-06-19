export function toDateString(date) {
    return new Date(date).toLocaleDateString();
}

export function defaultFunction(...args) {
   console.log(args);
}
