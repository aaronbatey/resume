import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: grey;
`;

const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};

export default PageContainer;
