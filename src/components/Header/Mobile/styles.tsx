import styled from "styled-components";

export const Container = styled.header`
  display: none;

  @media (max-width: 390px) {
    display: block;
    width: 100%;
    position: fixed;

    z-index: 3;


    .menu-open {
      display: flex;
      justify-content: space-between;
      align-items: center;

      padding: 1rem;

      .mobile-switch-dark-icon {
        display: flex;
        align-items: center;

        padding-left: 0.5rem;
        height: 100%;

        svg {
          font-size: 1rem;
  
          color: var(--text);
        }
      }

      .mobile-switch-light-icon {
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

      svg.hamburguer-icon {
        font-size: 2rem;
      }
    }

    .content-menu {
      display: flex;
      flex-direction: column;

      position: absolute;
      top: 0;

      width: 100%;
      height: 100vh;
      padding: 1rem;

      background: var(--primary);

      .close-button {
        display: flex;
        justify-content: right;

        svg {
          font-size: 2rem;
        }

        background: aquamarine;
      }

      .hamburguer-menu {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1;

        background: blue;

        a {
          font-size: 2.5rem;
          text-transform: capitalize;
          text-decoration: none;
          
          margin-bottom: 1.5rem;
          
          color: var(--text);
          
          transition: color 0.2s;

          &.active {
            color: var(--secundary);
          }
        }
      }

      .translations-mobile {
        display: grid;
        grid-template-columns: auto auto;
        gap: 0.5rem;
        width: 100%;
        padding: 1.25rem 1rem;
        
        border-top: 1px solid var(--secundary);

        background: greenyellow;

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
    }
  }
`