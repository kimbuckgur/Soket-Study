import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import styled from "styled-components";

interface itemType {
  id: string;
  text?: string;
}

const SoketPage = () => {
  const socket = io("http://localhost:5000/", { transports: ["websocket"] });

  const [text, setText] = useState<string>();
  const [item, setItem] = useState<itemType[]>([]);

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const postText = () => {
    let emitItem: itemType = {
      id: `${item.length - 1}`,
      text: text,
    };
    socket.emit("plus", {
      data: emitItem,
    });
    setText("");
  };

  const deleteText = () => {
    socket.emit("delete", {});
  };

  useEffect(() => {
    socket.connect();
  }, []);

  return (
    <_SoketPageContainer>
      <h1>소켓 통신 테스트</h1>
      <_DisplayFlex>
        <_SoketPageInput onChange={onChangeText} value={text} />
        <_SoketPagePlusButton onClick={postText}>추가</_SoketPagePlusButton>
      </_DisplayFlex>
      <ul>
        {item.map((item: itemType, idx: number) => {
          return (
            <_ListLayout key={idx}>
              <span>{item.text}</span>
              <_DeleteButton name={item.id}>삭제</_DeleteButton>
            </_ListLayout>
          );
        })}
      </ul>
    </_SoketPageContainer>
  );
};

const _DeleteButton = styled.button`
  width: 100px;
  height: 100%;
`;

const _ListLayout = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const _SoketPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-left: 50px; ;
`;

const _DisplayFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const _SoketPagePlusButton = styled.button`
  width: 100px;
  height: 36px;
`;

const _SoketPageInput = styled.input`
  width: 150px;
  height: 36px;
`;

export default SoketPage;
