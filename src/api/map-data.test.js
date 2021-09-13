import { mapData } from "./map-data";
import { mapMenuLinks } from "./map-menu";

describe("map-data", () => {
  it("should map data even if there is no data", () => {
    const pagesData = mapData()[0];
    expect(pagesData.footerHtml).toBe("");
    expect(pagesData.slug).toBe("");
    expect(pagesData.title).toBe("");
    // expect(pagesData.sections).toEqual([]);
    // expect(pagesData.menu).toEqual({});
  });

  it("should map data if there are data", () => {
    const pagesData = mapData([
      {
        footer_text: "<p>Hey</p>",
        slug: "slug",
        title: "title",
        sections: [1, 2, 3, 4],
        menu: { a: "b" },
      },
    ])[0];
    expect(pagesData.footerHtml).toBe("<p>Hey</p>");
    expect(pagesData.slug).toBe("slug");
    expect(pagesData.title).toBe("title");
  });

  it("should return an empty array if no links", () => {
    const links = mapMenuLinks();
    expect(links).toEqual([]);
  });

  it("should map links if links passed", () => {
    const links = mapMenuLinks([
      {
        open_in_new_tab: false,
        link_text: "pricing",
        url: "#pricing",
      },
      {},
    ]);
    expect(links[0].newTab).toEqual(false);
    expect(links[0].children).toEqual("pricing");
    expect(links[0].link).toEqual("#pricing");
  });
});
