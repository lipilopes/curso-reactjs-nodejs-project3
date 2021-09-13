import P from "prop-types";
import { GridContent } from "../../components/GridContent";

export const PageNotFound = () => {
  return (
    <GridContent
      title="Erro 404"
      html="<p>Pagina nao encontrada</p>. <a href='/'>Clique Aqui para voltar</a>"
    />
  );
};
