const colors = {
  names: ['slate', 'gray', 'neutral', 'stone', 'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'],
  items: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
  themeable: ['primary', 'foreground', 'background', 'text', 'success', 'error', 'neutral', 'warning'],
}


export const makeColors = () => {
  const colorList: string[] = ['black', 'white'];

  colors.themeable.forEach(name => {
    colorList.push(name);
  });

  colors.names.forEach(name => {
    colors.items.forEach(item => {
      colorList.push(`${name}-${item}`);
    });
  });

  return colorList;
}
