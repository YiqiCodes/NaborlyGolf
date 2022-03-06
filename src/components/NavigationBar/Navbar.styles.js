import styled from "styled-components";

export const MenuContainer = styled.div`
  svg {
    width: 20%;
  }
`;

export const UserProfileContainer = styled.div``;

export const RotatedDiv = styled.div`
  margin-left: 0.5rem;
  transform: ${(props) =>
    props.upsideDown ? "rotate(180deg)" : "rotate(180deg)"};
`;
