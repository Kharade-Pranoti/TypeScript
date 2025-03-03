// The program will take color names as input and output a two digit number, even if the input is more than two colors!
// The band colors are encoded as follows:
// black: 0
// brown: 1
// red: 2
// orange: 3
// yellow: 4
// green: 5
// blue: 6
// violet: 7
// grey: 8
// white: 9
// From the example above: brown-green should return 15, and brown-green-violet should return 15 too, ignoring the third color.

const COLORS: string[] = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]

export function decodedValue(colors: string[]): number {
  // at least 2 colors are required
  if(colors.length < 2) {
    throw new Error("At least two colors are required!");
  }
  
  const indexColor1 = COLORS.indexOf(colors[0].toLowerCase());
  const indexColor2 = COLORS.indexOf(colors[1].toLowerCase());
  return parseInt(`${indexColor1}${indexColor2}`);
}
