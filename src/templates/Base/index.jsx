/* eslint-disable react/prop-types */
import P from "prop-types";
import { Container } from "./styles";
import { Menu } from "../../components/Menu";
import { Footer } from "../../components/Footer";
import { GoTop } from "../../components/GoTop";

export const Base = ({ links = [], logoData, footerHtml, children }) => {
  return (
    <>
      <Menu links={links} logoData={logoData} />

      <Container>
        {children}
        <Footer footerHtml={footerHtml} />
      </Container>
      <GoTop />
    </>
  );
};

Base.prototype = {
  html: P.string.isRequired,
  ...Menu.propTypes,
  footerHtml: P.string.isRequired,
};
