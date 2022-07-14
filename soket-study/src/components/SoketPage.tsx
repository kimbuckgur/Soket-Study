import React, { useState } from "react";
import styled from "styled-components";

const SoketPage = () => {
  const [list, setList] = useState<string[]>([]);

  const listMap = list.map((item: string, idx: number) => {
    return <li key={idx}>{item}</li>;
  });

  return (
    <_SoketPageContainer>
      <h1>소켓 통신 테스트</h1>
      <_SoketPageInput />
      <ul>{listMap}</ul>
    </_SoketPageContainer>
  );
};

const _SoketPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-left: 50px; ;
`;

const _SoketPageInput = styled.input`
  width: 150px;
  height: 36px;
`;

export default SoketPage;
