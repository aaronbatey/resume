import { Container } from "@mui/material";
import React from "react";
import styled from "styled-components";

const ContainerFullWidthMobile = styled(Container)`
  @media (max-width: 998px) {
    padding: 0px;
  }
`;

const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <ContainerFullWidthMobile maxWidth="lg">
      {children}
    </ContainerFullWidthMobile>
  );
};

export default PageContainer;
