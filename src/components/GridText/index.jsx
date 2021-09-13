import P from "prop-types";
import { SectionBackground } from "../SectionBackground";
import { TextComponent } from "../TextComponent";
import { Heading } from "../Heading";
import { Container, Grid, GridElement } from "./styles";

export const GridText = ({
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
          {/* aula 124 */}
          {grid.map((el) => (
            <GridElement key={el.title}>
              <Heading size="medium" colorDark={!background} as="h3">
                {el.title}
              </Heading>
              <TextComponent>{el.description}</TextComponent>
            </GridElement>
          ))}
        </Grid>
      </Container>
    </SectionBackground>
  );
};

GridText.prototype = {
  background: P.bool,
  title: P.string.isRequired,
  description: P.string.isRequired,
  grid: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      description: P.string.isRequired,
    })
  ).isRequired,
  sectionId: P.string,
};
