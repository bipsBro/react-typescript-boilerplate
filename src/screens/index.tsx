import React from "react";
import styled from "styled-components";
import Header from "components/Header/index";
import { Card } from "components/UI/index";
import { Link, NavLink } from "react-router-dom";
import img from "assets/italy-maria.gif";

const PageWrapper = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background-color: ${({ theme }) => theme.colors.dLightWhite};
`;

const PageBodyContainer = styled.div`
  padding: 1rem 2rem;
`;

const CompanyCard = styled.div`
  background: #ffffff;
  position: relative;
  min-height: 1px;
`;

const StyledCard = styled(Card)`
  line-height: 1.25rem;
  border-radius: 0.25rem;
`;

type bannerType = {
  background: any;
};

const CompanyBaner = styled("div")<bannerType>`
  background-image: url(${({ background }) => background});
  background-position: 50% 50% !important;
  background-origin: border-box !important;
  background-size: cover !important;
  background-color: #f0f0f0 !important;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  width: 100% !important;
  height: 100px !important;
`;

const CompanyDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  height: 180px;
`;

const StyledLink = styled(NavLink)`
  flex: 1;
`;

// type font = {
//   size?: number;
//   weight?: number;
// }
interface ITextProps {
  bold?: boolean;
  xx?: boolean;
}

const Text = styled.p<ITextProps>`
  line-height: 1.8rem;
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
  font-size: ${({ xx }) => (xx ? "1.3rem" : "1rem")};
`;

const App: React.FC = () => {
  return (
    <PageWrapper>
      <Header />
      <PageBodyContainer>
        <CompanyCard>
          <StyledCard>
            <Link to="/">
              <CompanyBaner background={img} />
            </Link>
            <CompanyDetail>
              <StyledLink to="/">
                <Text>E-commerce Category</Text>
                <Text bold xx>
                  Company Name
                </Text>
              </StyledLink>
            </CompanyDetail>
          </StyledCard>
        </CompanyCard>
      </PageBodyContainer>
    </PageWrapper>
  );
};

export default App;
