import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { Footer } from ".";

describe("<Footer />", () => {
  it("should render grid content", () => {
    const { container } = renderTheme(
      <Footer footerHtml="<h1>Ola mundo</h1>" />
    );
    expect(
      screen.getByRole("heading", { name: "Ola mundo" })
    ).toBeInTheDocument();
    expect(container).toMatchInlineSnapshot();
  });
});
