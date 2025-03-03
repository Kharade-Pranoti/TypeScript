// Your task is to determine what you will say as you give away the extra cookie.
// If you know the person's name (e.g. if they're named Do-yun), then you will say: "One for Do-yun, one for me."
// If you don't know the person's name, you will say you instead: "One for you, one for me."

export function twoFer(name: string = "you"): string {
  return `One for ${name}, one for me`
}

// here the parameter name is of string type and it's default value is "you". If the parameter is not passed while calling the function, it will set the \
// name parameter as "you".
