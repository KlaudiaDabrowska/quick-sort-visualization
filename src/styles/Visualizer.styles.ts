import styled from "styled-components";

export const VisualizerWrapper = styled.div`
  display: flex;
  column-gap: 1px;
`;

export const Bar = styled.div<{
  $height: number;
  $backgroundColor: string;
}>`
  flex: 1;
  height: ${(props) => props?.$height}rem;
  background-color: ${(props) => props?.$backgroundColor};
`;
