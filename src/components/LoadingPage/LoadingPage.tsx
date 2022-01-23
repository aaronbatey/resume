import PageContainer from "../shared/PageContainer";
import React from "react";
import { Paper, CircularProgress } from "@mui/material";
import styled from "styled-components";

const PaperFullHeight = styled(Paper)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 98vh;
`;

const LoadingPage = () => {
  return (
    <PageContainer>
      <PaperFullHeight>
        <CircularProgress size={90} />
      </PaperFullHeight>
    </PageContainer>
  );
};

export default LoadingPage;
