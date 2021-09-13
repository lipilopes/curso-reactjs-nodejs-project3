import { SectionContainer } from '.';

describe('<SectionContainer />', () => {
  it('should render', () => {
    renderTheme(<SectionContainer>Children</SectionContainer>);
  it('should render content', () => {
    const { container } = renderTheme(
      <SectionContainer>
        <h1>Children</h1>
      </SectionContainer>,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
