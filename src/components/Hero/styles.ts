import styled from "styled-components";

export const Container = styled.section`
  display: flex;

  position: absolute;
  left: 6.25rem;
  
  width: calc(100% - 6.25rem);
  height: 100vh;

  video {
    position: absolute;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    z-index: -2;
    opacity: 0.1;

    filter: blur(4px);
  }

  .content-hero {
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 95rem;
    max-width: 95rem;

    margin: auto;
    padding: 0 1rem;

    height: 100vh;

    position: relative;

    h1 {
      padding: 0;
      margin: 0;

      font-size: 4rem;
      font-weight: 900;

      color: var(--text);
  
      span {
        padding: 0;
        margin: 0;

        font-size: 2rem;
        font-weight: 400;
      }
    }

    .Typewriter span {
      font-size: 1.5rem;
      font-weight: 500;

      color: #8D8D8D;

      .Typewriter__cursor {
        color: var(--secundary) !important;
      }
    }
    
    a {
      width: 12.5rem;

      button {
        font-size: 2rem;
        font-weight: 500;
        text-transform: capitalize;
  
        margin-top: 2rem;
        padding: 1rem 2rem;
        border: none;
        box-shadow: -4px 4px 0 var(--secundary);
  
        color: var(--secundary);
  
        transition: filter 0.2s;
  
        &:hover {
          filter: brightness(0.9);
        }
      }
    }
  

    .photo-hero {
      position: absolute;
      bottom: 6rem;
      right: 0;
      z-index: -2;

      width: 40rem;
      height: 15rem;

      border-radius: 0 15rem 0 15rem ;
      box-shadow: -30px 25px 0 var(--secundary);

      background: var(--primary);

      img {
        position: absolute;
        bottom: 5.5rem;
        right: 3rem;
        z-index: -1;

        width: 35rem;
      }
    }

  }

`