import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
`

export const ContainerProductsCart = styled.div`
  @media screen and (min-width: 320px) {
    ul {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: flex-start;
      gap: 1em;
      margin-top: 2em;
      margin-bottom: 2em;
    }
  }

  @media screen and (min-width: 768px) {
    ul {
      display: flex;
      gap: 10px;
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
    }
  }

  @media screen and (min-width: 1024px) {
    ul {
      margin-left: 6rem;
      width: 54%;
    }
  }

  @media screen and (min-width: 1440px) {
    ul {
      display: flex;
      gap: 20px;
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
      width: 58%;
      margin-left: 12rem;
    }
  }

  @media screen and (min-width: 1920px) {
    ul {
      display: flex;
      gap: 50px;
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
      width: 70%;
      margin-left: 9rem;
    }
  }
`
