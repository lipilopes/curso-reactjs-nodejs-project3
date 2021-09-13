/* eslint-disable react/prop-types */
import { useState } from "react";
import P from "prop-types";

import { Container, MenuContainer, Button } from "./styles";
import { SectionContainer } from "../SectionContainer";
import { LogoLink } from "../LogoLink";
import { NavLinks } from "../NavLinks";

import { Menu as MenuIcon } from "@styled-icons/material-outlined/Menu";
import { Close as CloseIcon } from "@styled-icons/material-outlined/Close";

export const Menu = ({ links = [], logoData }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button
        aria-label="Open/Close menu"
        visible={visible}
        onClick={() => setVisible(true)}
      >
        {visible ? (
          <CloseIcon aria-label="Close menu" />
        ) : (
          <MenuIcon aria-label="Open menu" />
        )}
      </Button>
      <Container onClick={() => setVisible(false)}>
        <SectionContainer visible={visible}>
          <MenuContainer>
            <LogoLink {...logoData} />
            <NavLinks links={links} />
          </MenuContainer>
        </SectionContainer>
      </Container>
    </>
  );
};

Menu.prototype = {
  ...NavLinks.propTypes,
  //links: P.node.isRequired,
  logoData: P.shape(LogoLink.propTypes).isRequired,
};
