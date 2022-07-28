import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import styled from "styled-components";

const SoketPage = () => {
  const socket = io("http://localhost:5000/", { transports: ["websocket"] });
  const [list, setList] = useState<string[]>([]);

  const listMap = list.map((item: string, idx: number) => {
    return <li key={idx}>{item}</li>;
  });

  useEffect(() => {
    socket.emit("message", {
      body: "",
    });
  }, []);

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
