import styled, { css } from "styled-components";
import { Title } from "../Heading/styles";

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template: 1fr 2fr;
    align-items: center;
    gap: ${theme.spacings.large};

    @media ${theme.media.ltMedium} {
      grid-grid-template-columns: 1fr;
      text-align: center;
    }

    ${Title} {
      margin-bottom: ${theme.spacings.xlarge};
    }
  `}
`;

export const TextContainer = styled.div`
  ${({ theme }) => css`
    @media ${theme.media.ltMedium} {
      margin-bottom: ${theme.spacings.large};
    }
  `}
`;

export const ImgContainer = styled.div`
  ${({ theme }) => css``}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    width: 100%;
  `}
`;
