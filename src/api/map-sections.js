/* eslint-disable no-case-declarations */
export const mapSections = (sections = []) => {
  return sections.map((section) => {
    switch (section.__component) {
      case "section.section-two-columns":
        return mapSectionTwoColumns(section);

      case "section.section-content":
        return mapSectionContent(section);

      case "section.section-grid":
        const { text_grid = [], image_grid = [] } = section;

        if (text_grid.lenght > 0) return mapTextGrid(section);

        if (image_grid.lenght > 0) return mapImageGrid(section);

        break;

      default:
        return section;
    }
  });
};

export const mapSectionTwoColumns = (section) => {
  const {
    __component: component = "",
    title = "",
    description: text = "",
    image: { url: srcImg = "" } = "",
    metadata: { background = false, section_id: sectionId = "" } = false,
  } = section;

  return {
    component,
    title,
    text,
    srcImg,
    background,
    sectionId,
  };
};

export const mapSectionContent = (section = {}) => {
  const {
    __component: component = "",
    title = "",
    description: text = "",
    image: { url: srcImg = "" } = "",
    metadata: { background = false, section_id: sectionId = "" } = false,
  } = section;

  return {
    component,
    title,
    text,
    srcImg,
    background,
    sectionId,
  };
};

export const mapTextGrid = (section = {}) => {
  const {
    __component: component = "",
    title = "",
    description = "",
    metadata: { background = false, section_id: sectionId = "" } = false,
    text_grid: grid = [],
  } = section;

  return {
    component: "section.section-grid-text",
    title,
    background,
    sectionId,
    description,
    grid: grid.map((text) => {
      const { title = "", description = "" } = text;

      return {
        title,
        description,
      };
    }),
  };
};

export const mapImageGrid = (section) => {
  const {
    __component: component = "",
    title = "",
    description = "",
    metadata: { background = false, section_id: sectionId = "" } = false,
    text_grid: grid = [],
  } = section;

  return {
    component: "section.section-grid-image",
    title,
    background,
    sectionId,
    description,
    grid: grid.map((img) => {
      const {
        image: {
          url: srcImg = "",
          alternativeText: { altText = "" } = "",
        } = "",
      } = img;

      return {
        srcImg,
        altText,
      };
    }),
  };
};
