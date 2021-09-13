import P from "prop-types";

import { Heading } from "../Heading";

import { Container } from "./styles";

export const LogoLink = ({ text, srcImg = "", link }) => {
  return (
    <Heading size="small" uppercase>
      <Container href={link}>
        {!!srcImg && <img src={srcImg} alt={text} />}
        {!srcImg && text}
      </Container>
    </Heading>
  );
};

LogoLink.prototype = {
  text: P.string.isRequired,
  srcImg: P.string,
  link: P.string.isRequired,
};
