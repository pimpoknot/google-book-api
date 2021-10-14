import styled from "styled-components";


export const Container = styled.section`
    padding: 1rem 0 1rem 1rem;
`

export const ContainerBook = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 5rem;
`


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
        url("/img/Oval-no-bg.svg"), url("/img/Oval-3.svg"), url("/img/Oval-bg.svg");
      background-repeat: no-repeat;
      background-position: 25% 48%, 74% 95%, 72% 28%, 15% 43%, 100% 0%;
    }
  
`;

export const BookDetailsContent = styled.div`
    width: 90%;
    margin: 4.2rem auto 0;
    padding-bottom: 6rem;
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
  background: #FFFFFF;
  position: fixed;
  display: flex;

  bottom: 3.5rem;
  align-items: center;
  justify-content: space-around;
  height: 3.5rem;
  width: 100%;
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

    & + a {
      padding-left: 1.625rem;
      border-left: 1px solid #979797;
    }
  }
`;