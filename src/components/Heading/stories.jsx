import { Heading } from ".";

export default {
  title: "Heading",
  component: Heading,
  args: {
    children: "Texto Escuro",
  },
  argTypes: {
    children: { type: "string" },
  },

  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const Light = (args) => <Heading {...args} />;
export const Dark = (args) => <Heading {...args} colorDark={true} />;

Light.parameters = {
  backgrounds: {
    default: "dark",
  },
};
Dark.args = {
  children: "Texto Claro",
  colorDark: false,
};
