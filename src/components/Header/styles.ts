import styled from "styled-components";

export const Container = styled.header`
  width: 6.25rem;
  max-width: 6.24rem;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.25rem;

  position: fixed;

  background: var(--gray-900);

  .social-media {
    display: flex;
    flex-direction: column;

    svg {
      font-size: 1.5rem;
      color: var(--gray-500);
      cursor: pointer;
      
      transition: color 0.2s;

      &+svg {
        margin-top: 0.3rem;
      }

      &:hover {
        color: #838383;
      }
    }

  }
`