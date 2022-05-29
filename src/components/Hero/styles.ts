import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  padding-left: 6.25rem;
  
  width: calc(100% - 6.25rem);
  height: 100vh;

  @media (max-width: 390px) {
    width: 100%;
    right: 0rem;
    left: 0rem;
    padding-left: 0;
  }

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

    @media (max-width: 820px) {
      padding: 0 5rem 4rem;
      justify-content: flex-end;
    }

    @media (max-width: 390px) {
      width: 100%;
      justify-content: center;
      text-align: center;
      align-items: center;
    }

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

    .Typewriter {
      @media (max-width: 820px) {
        height: 3.5rem;
      }

      @media (max-width: 390px) {
        height: 7.5rem;
      }

      span {
        font-size: 1.5rem;
        font-weight: 500;
  
        color: #8D8D8D;
  
        .Typewriter__cursor {
          color: var(--secundary) !important;
        }
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

      @media (max-width: 820px) {
        top: 34rem;
        right: 3rem;
      }

      @media (max-width: 390px) {
        display: none;
      }

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