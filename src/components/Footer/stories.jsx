import { Footer } from ".";

export default {
  title: "Footer",
  component: Footer,
  args: {
    footerHtml: `<p>&lt;p&gt;&lt;a rel=\"nofollow\" target=\"_blank\" href="https://beacons.page/otaviomiranda"&gt;Feito com &lt;span class=\"heart\"&gt;❤&lt;/span&gt; por Otávio Miranda&lt;/a&gt;&lt;/p&gt;</p>`,
  },
};

export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
