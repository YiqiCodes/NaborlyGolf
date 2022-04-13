import styled from "styled-components";

export const WeatherBanner = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: transparent;
  padding: 2rem 4rem 2rem 2rem;

  @media only screen and (max-width: 600px) {
    padding-right: 2rem;
  }
  .ant-spin-dot-item {
    background-color: rgb(229 231 235);
  }
`;

export const LoadingText = styled.div`
  color: rgb(229 231 235);
  padding-right: 1rem;
`;
