import styled from "styled-components"

export const OrderSummaryStyle = styled.aside`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    border: 1px solid var(--ligth-salmon);
    width: 251px;
    gap: 30px;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    margin-left: 2rem;
    margin-top: 2rem;

    div {
      width: 101%;
      height: 52px;
      background-color: var(--salmon);
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;

      p {
        color: var(--white);
        font-size: 14px;
      }
    }

    span {
      color: var(--gray);
    }

    button {
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      background: var(--salmon);
      height: 40px;
      width: 101%;
      border-radius: 4px;
      color: var(--white);

      &:hover {
        background-color: var(--ligth-salmon);
        transition: 0.5s;
      }
    }
  }

  @media screen and (min-width: 375px) {
    margin-left: 4rem;
  }

  @media screen and (min-width: 425px) {
    width: 250px;
    margin-left: 5.5rem;
  }

  @media screen and (min-width: 768px) {
    float: right;
    margin-right: 3rem;
  }

  @media screen and (min-width: 1024px) {
    float: right;
    margin-right: 4rem;
  }

  @media screen and (min-width: 1920px) {
    float: right;
    margin-right: 8rem;
    width: 350px;

    div {
      height: 70px;

      p {
        font-size: 18px;
      }
    }

    span {
      font-size: 18px;
    }

    button {
      height: 60px;
      font-size: 18px;
    }
  }
`
