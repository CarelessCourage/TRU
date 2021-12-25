//is number between two numbers
export function between(num, min, max) {
  return num > min && num < max;
}

//clamp function
export function clamp(num, min, max) {
  return num <= min ? min : num >= max ? max : num;
}

export default clamp;