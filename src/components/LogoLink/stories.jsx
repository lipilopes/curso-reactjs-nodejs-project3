import { Logolink } from ".";

export default {
  title: "Logolink",
  component: Logolink,
  args: {
    children: "Logolink",
    srcImg: "assests/images/logo.svg",
    link: "https://www.google.com",
  },
  argTypes: {
    children: { type: "string" },
  },
};

export const ImageOnly = (args) => {
  return (
    <div>
      <Logolink {...args} />
    </div>
  );
};

export const TextOnly = (args) => {
  return (
    <div>
      <Logolink {...args} />
    </div>
  );
};

TextOnly.args = { srcImg: "" };
