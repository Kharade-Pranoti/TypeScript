// The color bands are encoded as follows:
// black: 0, brown: 1, red: 2, orange: 3, yellow: 4, green: 5, blue: 6, violet: 7, grey: 8, white: 9

// In Resistor Color Duo you decoded the first two colors. For instance: orange-orange got the main value 33. 
// The third color stands for how many zeros need to be added to the main value. The main value plus the zeros gives us a value in ohms. 
// For the exercise it doesn't matter what ohms really are. For example:

// orange-orange-black would be 33 and no zeros, which becomes 33 ohms.
// orange-orange-red would be 33 and 2 zeros, which becomes 3300 ohms.
// orange-orange-orange would be 33 and 3 zeros, which becomes 33000 ohms.

const COLORS: string[] = ["black", "brown", "red", "orange", "yellow",
                         "green", "blue", "violet", "grey", "white"] as const; // as const makes the array readonly

// to restrict other colors other than from the COLORS array
export type colr = typeof COLORS[number];

export function decodedResistorValue([color1, color2, color3]: colr[]): string {
   let value = (10 * COLORS.indexOf(color1) + COLORS.indexOf(color2)) * Math.pow(10, COLORS.indexOf(color3))
  
  // formatting the output
  let unit: string = " ohms";

  if(value > 1000000000 && value % 1000000000 == 0) {
    value = value / 1000000000;
    unit = " gigaohms";
  }
  else if(value > 1000000 && value % 1000000 == 0) {
    value = value / 1000000;
    unit = " megaohms";
  }
  else if(value > 1000 && value % 1000 == 0) {
    value = value / 1000;
    unit = " kiloohms";
  }

return (`${value}${unit)`);
}
