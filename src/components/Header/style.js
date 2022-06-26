import styled from "styled-components"

export const HeaderStyle = styled.header`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 70px;
    justify-content: space-between;
    background-color: var(--grey);
    align-items: center;

    h1 {
      color: salmon;
      margin-left: 1rem;
      font-size: 1em;
    }

    div {
      display: flex;
      margin-right: 1rem;
    }

    span {
      position: relative;
      bottom: 10px;
      left: -5px;
      background: salmon;
      color: var(--white);
      width: 25px;
      height: 25px;
      border-radius: 80%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  @media screen and (min-width: 768px) {
    height: 80px;

    h1 {
      margin-left: 2rem;
      font-size: 1.5em;
    }

    div {
      margin-right: 2rem;
    }
  }

  @media screen and (min-width: 1024px) {
    h1 {
      margin-left: 8rem;
    }

    div {
      margin-right: 8rem;
    }
  }

  @media screen and (min-width: 1440px) {
    justify-content: space-between;
    h1 {
      font-size: 2em;
      margin-left: 12rem;
    }

    div {
      margin-right: 7rem;
    }
  }

  @media screen and (min-width: 1920px) {
    height: 100px;
    justify-content: space-between;

    h1 {
      font-size: 3em;
      margin-left: 23rem;
    }

    div {
      margin-right: 10rem;
    }
  }
`
