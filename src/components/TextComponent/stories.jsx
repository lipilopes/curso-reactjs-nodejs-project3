import { TextComponent } from ".";

export default {
  title: "TextComponent",
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Id obcaecati est dicta quidem, officiis velit soluta illum maxime
      sapiente et? Repudiandae qui praesentium, officia nulla voluptates magni
      facilis minima est!`,
  },
  argTypes: {
    children: { type: "string" },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
