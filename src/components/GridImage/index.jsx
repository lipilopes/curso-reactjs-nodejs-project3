/* eslint-disable react/prop-types */
import P from "prop-types";
import { SectionBackground } from "../SectionBackground";
import { TextComponent } from "../TextComponent";
import { Heading } from "../Heading";
import { Container, Grid, GridElement, Image } from "./styles";

export const GridImage = ({
  title,
  description,
  grid,
  background = false,
  sectionId = "",
}) => {
  return (
    <SectionBackground colorDark={background} sectionId={sectionId}>
      <Container>
        <Heading size="huge" uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Grid>
          {/* aula 126 */}
          {grid.map((el) => (
            <GridElement key={el.srcImg}>
              <Image src={el.srcImg} alt={el.altText} />
            </GridElement>
          ))}
        </Grid>
      </Container>
    </SectionBackground>
  );
};

GridImage.prototype = {
  background: P.bool,
  title: P.string.isRequired,
  description: P.string.isRequired,
  grid: P.arrayOf(
    P.shape({
      altText: P.string.isRequired,
      srcImg: P.string.isRequired,
    })
  ).isRequired,
  sectionId: P.string,
};
