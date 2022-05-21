import styled from "styled-components";

export const Container = styled.header`
  width: 6.25rem;
  max-width: 6.25rem;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;

  background: var(--gray-900);

  .social-media {
    display: flex;
    flex-direction: column;
    padding: 1.25rem 0;

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

  .lines {
    display: grid;
    grid-template-columns: auto;
    gap: 0.2rem;

    .line-1-switch {
      width: 6.25rem;
      height: 1.875rem;

      background: var(--orange);
    }

    .line-2 {
      width: 6.25rem;
      height: 0.625rem;

      background: var(--orange);
    }

    .line-3 {
      width: 6.25rem;
      height: 0.3125rem;

      background: var(--orange);
    }

    .line-4 {
      width: 6.25rem;
      height: 0.1875rem;

      background: var(--orange);
    }

    .line-5 {
      width: 6.25rem;
      height: 0.0625rem;

      background: var(--orange);
    }
  }
`