import styled from "styled-components";

export const WeatherBanner = styled.div`
  width: 100%;
  position: absolute;
  z-index: 1;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  padding: 2rem;

  @media only screen and (max-width: 600px) {
    padding: 8px;
  }
  @media only screen and (max-height: 400px) {
    display: none;
  }
  .ant-spin-dot-item {
    background-color: rgb(229 231 235);
  }
`;

export const LoadingText = styled.div`
  color: rgb(229 231 235);
  padding-right: 1rem;
`;
