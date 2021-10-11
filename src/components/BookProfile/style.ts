import styled from "styled-components";

export const BookDetailsContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    background: #F2F2F2;
    section {
      position: relative;
      height: 17.5rem;
      background: rgba(255, 246, 229, 1);
      border-radius: 0 0 100px 0;
      background-image: url("/img/Oval-1.svg"), url("/img/Oval-4.svg"),
        url("/img/Oval-2.svg"), url("/img/Oval-3.svg"), url("/img/Oval.png");
      background-repeat: no-repeat;
      background-position: 125% -20%, 74% 95%, 72% 28%, 22% 53%, 11% 47%;
    }
  
`;

export const BookDetailsContent = styled.div`
    width: 90%;
    margin: 4.2rem auto 0;
    h1 {
      color: #333;
      font-size: 1.5rem;
    }
    h2 {
      margin-top: 0.5rem;
      font-size: 1rem;
      color:#333;
      font-weight: 600;
    }
    p {
      margin-top: 0.5rem;
      font-family: "SFProText";
      font-size: 1rem;
      color: #333;
      line-height: 1.5;
      opacity: 0.5;
    }
`;

export const BookCover = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
`;

export const ArrowBack = styled.div`
  position: sticky;
  top: 3.5rem;
  margin-left: 2rem;
  img {
    height: 1.2rem;
    width: 1.2rem;
  }
`;

export const BookDetailsBar = styled.div`
  background: ${({ theme }) => theme.colors.navDetailsBackground};
  position: fixed;
  display: flex;
  left: 50%;
  transform: translateX(-50%);
  bottom: 3.5rem;
  align-items: center;
  justify-content: space-around;
  height: 3.5rem;
  width: 23rem;
  border-radius: 4px;
  margin: 0 auto;
  box-shadow: 6px 6px 23px rgba(107, 103, 70, 0.2);
  a {
    display: flex;
    align-items: center;
    height: 1rem;
    gap: 0.5rem;
    font-size: 1rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.textPrimary};
    & + a {
      padding-left: 1.625rem;
      border-left: 1px solid #979797;
    }
  }
`;