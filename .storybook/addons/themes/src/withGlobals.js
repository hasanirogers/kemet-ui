import { useEffect, useGlobals } from '@storybook/addons';

export const withGlobals = (StoryFn, context) => {
  // const [{ activeTheme }, updateGlobals] = useGlobals();

  // // set theme on html tag
  // useEffect(() => {
  //   if (activeTheme) {
  //     document.documentElement.setAttribute('theme', activeTheme);
  //   }
  // });

  // // update the background when the theme is changed
  // useEffect(() => {
  //   if (activeTheme === 'dark') {
  //     updateGlobals({ backgrounds: { name: "Black", value: "#000000" } });
  //   } else {
  //     updateGlobals({ backgrounds: { name: "White", value: "#ffffff" } });
  //   }
  // }, [activeTheme]);

  // return StoryFn();
};
