export const Colors = {
  darkElements: 'hsl(209, 23%, 22%)',
  darkBackground: 'hsl(207, 26%, 17%)',
  lightText: 'hsl(200, 15%, 8%)',
  lightInput: 'hsl(0, 0%, 52%)',
  lightBackground: 'hsl(0, 0%, 98%)',
  darkText: 'hsl(0, 0%, 100%)',
  lightElements: 'hsl(0, 0%, 100%)',
};

export function colorBackground(darkmode: boolean): string {
  return darkmode ? Colors.darkBackground : Colors.lightBackground;
}

export function colorElements(darkmode: boolean): string {
  return darkmode ? Colors.darkElements : Colors.lightElements;
}

export function colorText(darkmode: boolean): string {
  return darkmode ? Colors.darkText : Colors.lightText;
}

export function colorInput(darkmode: boolean): string {
  return darkmode ? Colors.darkText : Colors.lightInput;
}

export default Colors;
