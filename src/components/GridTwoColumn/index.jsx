/* eslint-disable react/prop-types */
import P from "prop-types";

import { Container, TextContainer, ImgContainer, Image } from "./styled";

import { SectionBackground } from "../SectionBackground";
import { Heading } from "../Heading";
import { TextComponent } from "../TextComponent";

export const GridTwoColumn = ({
  title,
  text,
  srcImg,
  background = false,
  sectionId = "",
}) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Container>
        <TextContainer>
          <Heading uppercase colorDark={!background} as="h2">
            {title}
          </Heading>
          <TextComponent>{text}</TextComponent>
        </TextContainer>
        <ImgContainer>
          <Image scr={srcImg} alt={title} />
        </ImgContainer>
      </Container>
    </SectionBackground>
  );
};

GridTwoColumn.prototype = {
  title: P.string.isRequired,
  text: P.string.isRequired,
  background: P.bool,
  srcImg: P.string.isRequired,
  sectionId: P.string,
};
