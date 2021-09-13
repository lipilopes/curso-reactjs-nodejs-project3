import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { MenuLink } from ".";

describe("<MenuLink />", () => {
  it("should render a link", () => {
    renderTheme(<MenuLink link={"http://localhost"}> Children</MenuLink>);
    expect(screen.getByRole("link", { name: "Children" })).toHaveAttribute(
      "target",
      "_self"
    );
  });

  it("should open a newTab", () => {
    renderTheme(
      <MenuLink link={"http://localhost"} newTab={true}>
        Children
      </MenuLink>
    );
    expect(screen.getByRole("link", { name: "Children" })).toHaveAttribute(
      "target",
      "_blank"
    );
  });

  it("should open a newTab", () => {
    const { container } = renderTheme(
      <MenuLink link={"http://localhost"} newTab={false}>
        Children
      </MenuLink>
    );
    expect(container.firstChild).toMatchInlineSnapshot();
  });
});
