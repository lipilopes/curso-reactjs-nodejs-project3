import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { Logolink } from ".";

describe("<Logolink />", () => {
  it("should render text logo", () => {
    renderTheme(<Logolink Link="#target" text="Hello World" />);
    expect(
      screen.getByRole("heading", { name: "Hello World" })
    ).toBeInTheDocument();

    expect(screen.getByRole("img", { name: "Hello World" })).toHaveAttribute(
      "href",
      "#target"
    );
  });

  it("should render text logo", () => {
    renderTheme(
      <Logolink Link="#target" text="Hello World" srcImg="image.jpg" />
    );
    screen.getByRole("heading", { name: "Hello World" });
    expect(screen.getByRole("img", { name: "Hello World" })).toHaveAttribute(
      "href",
      "image.jpg"
    );
  });

  it("should match snapshot", () => {
    const { container } = renderTheme(
      <Logolink Link="#target" text="Hello World" srcImg="image.jpg" />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
