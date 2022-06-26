import styled from "styled-components"

export const LiCartStyled = styled.li`
  @media screen and (min-width: 320px) {
    display: flex;
    width: 251px;
    height: 346px;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: space-around;
    align-items: flex-start;
    padding: 0.5em;
    border: var(--ligth-salmon) 2px solid;
    border-radius: 4px;

    :hover {
      border-radius: 4px;
      border: var(--salmon) 2px solid;
      transition: 0.5s;
    }

    img {
      width: 75%;
      height: 50%;
      margin-left: 2em;
    }

    div {
      height: 24px;
      border-radius: 4px;

      span {
        font-size: 10px;
        text-align: center;
        margin: 5px;
        color: var(--gray);
      }
    }

    p {
      color: var(--salmon);
    }

    h2 {
      font-size: 1rem;
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
      width: 98%;
      border-radius: 4px;
      color: var(--white);

      &:hover {
        background-color: var(--ligth-salmon);
        transition: 0.5s;
      }
    }
  }

  @media screen and (min-width: 1440px) {
    width: 260px;
    height: 388px;
    gap: 15px;

    button {
      height: 40px;
      width: 98%;
    }
  }

  @media screen and (min-width: 1920px) {
    width: 350px;
    height: 480px;
    gap: 20px;
  }
`
