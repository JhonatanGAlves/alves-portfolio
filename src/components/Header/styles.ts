import styled from "styled-components";

export const Container = styled.header`
  width: 6.25rem;
  max-width: 6.25rem;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;

  background: var(--primary);
  box-shadow: 1px 0px 8px #00000025;

  .social-media {
    display: flex;
    flex-direction: column;
    padding: 1.25rem 0;

    svg {
      font-size: 1.5rem;
      color: var(--text);
      cursor: pointer;
      
      transition: color 0.2s;

      &+svg {
        margin-top: 0.3rem;
      }

      &:hover {
        color: var(--secundary);
      }
    }

  }

  .lines {
    display: grid;
    grid-template-columns: auto;
    gap: 0.2rem;

    .line-1-switch, .line-2, .line-3, .line-4, .line-5 {
      width: 6.25rem;

      background: var(--secundary);
    }

    .line-1-switch {
      height: 1.875rem;
      padding: 1rem;

      display: flex;
      justify-content: center;
      align-items: center;
      
      .switch-dark-icon {
        display: flex;
        align-items: center;

        padding-left: 0.5rem;
        height: 100%;

        svg {
          font-size: 1rem;
  
          color: var(--text);
        }
      }

      .switch-light-icon {
        display: flex;
        align-items: center;
        justify-content: end;

        padding-right: 0.5rem;
        height: 100%;

        svg {
          font-size: 1rem;
  
          color: var(--text);
        }
      }
    }

    .line-2 {
      height: 0.625rem;
    }

    .line-3 {
      height: 0.3125rem;
    }

    .line-4 {
      height: 0.1875rem;
    }

    .line-5 {
      height: 0.0625rem;
    }
  }

  .nav-menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;

    svg {
      font-size: 2.5rem;
      color: var(--text);
      cursor: pointer;

      margin-bottom: 1.5rem;
      
      transition: color 0.2s;

      &:hover {
        color: var(--secundary);
      }

      &.active {
        color: var(--secundary);
      }
    }
    
  }

  .container-languages {
    display: grid;
    grid-template-columns: auto auto;
    gap: 0.5rem;
    width: 100%;
    padding: 1.25rem 1rem;

    border-top: 1px solid var(--secundary);

    .language {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      img {
        width: 1.5rem;
        cursor: pointer;
      }
    }
  }
`