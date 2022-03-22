import React from "react";

// Components
import YardageForm from "../../components/yardages/YardageForm";
import YardageTable from "../../components/yardages/YardageTable";

// Styles
import * as S from "./Yardages.styles";

const Yardages = () => {
  return (
    <S.YardageContainer>
      <YardageForm />
      <YardageTable />
    </S.YardageContainer>
  );
};

export default Yardages;
