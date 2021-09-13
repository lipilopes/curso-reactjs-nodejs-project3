import { useEffect, useState } from "react";

import * as Styled from "./styles";

import { Heading } from "../../components/Heading";
import { GridTwoColumn } from "../../components/GridTwoColumn";
import { GridContent } from "../../components/GridContent";
import { GridText } from "../../components/GridText";
import { GridImage } from "../../components/GridImage";

import { mockBase } from "../Base/mock";
import mapData from "../../api/map-data";
import { Base } from "../Base";
import { PageNotFound } from "../PageNotFound";
import { Loading } from "../Loading";
import { useLocation } from "react-router-dom";

import config from "../../config";

function Home() {
  const [data, setData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname.replace(/^[a-z0-9-_]/gi, "");
    const slug = pathname ? pathname : config.defaultSlug;

    const load = async () => {
      try {
        const data = await fetch(config.url + slug);
        const json = await data.json();
        const pageData = mapData(json);

        setData(pageData[0]);
      } catch (e) {
        setData(undefined);
      }
    };

    load();
  }, [location]);

  useEffect(() => {
    if (data === undefined)
      document.title = `Pagina nao encontrada | ${config.siteName}`;
    else if (!data.slug) document.title = `Carregando | ${config.siteName}`;
    else document.title = `${data.title} | ${config.siteName}`;
  }, [data]);

  if (data === undefined) return <PageNotFound />;
  else if (!data.slug) return <Loading />;

  const { menu, sections, footerHtml, slug } = data;
  const { link, text, links, srcImg } = menu;

  return (
    <Base
      links={links}
      footerHtml={footerHtml}
      logoData={{ text, link, srcImg }}
    >
      {sections.map((section, index) => {
        const { component } = section;
        const key = `${slug}-${index}`;

        switch (component) {
          case "section.section-two-columns":
            return <GridTwoColumn key={key} {...section} />;

          case "section.section-content":
            return <GridContent key={key} {...section} />;

          case "section.section-grid-text":
            return <GridText key={key} {...section} />;

          case "section.section-grid-image":
            return <GridImage key={key} {...section} />;

          default:
            return <PageNotFound />;
        }
      })}
    </Base>
  );
}

export default Home;
