import styled from "styled-components";

export const MenuContainer = styled.div`
  svg {
    width: 20%;
  }
`;

export const UserProfileContainer = styled.div`
  display: flex;
`;

export const RotatedDiv = styled.div`
  margin-left: 0.5rem;
  transform: ${(props) =>
    props.upsideDown ? "rotate(180deg)" : "rotate(180deg)"};
`;

export const NavbarContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
