/* eslint-disable react/prop-types */
import P from "prop-types";
import { Container } from "./styles";
import { MenuLink } from "../MenuLink";

export const NavLinks = ({ links = [] }) => {
  return (
    <Container aria-label="Main menu">
      {links.map((link) => (
        <MenuLink key={link.link} {...link} />
      ))}
    </Container>
  );
};

NavLinks.prototype = {
  links: P.arrayOf(
    P.shape({
      children: P.string.isRequired,
      link: P.string,
      newTab: P.bool,
    }).isRequired
  ),
};
