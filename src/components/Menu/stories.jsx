import { Menu } from ".";

import linksMock from "../Navlinks/mock";

export default {
  title: "Menu",
  component: Menu,
  args: {
    link: linksMock,
    logoData: {
      text: "Logo",
      link: "#target",
      srcImg: "",
    },
  },
};

export const Template = (args) => {
  return (
    <div style={{ display: "flex" }}>
      <Menu {...args} />
    </div>
  );
};
