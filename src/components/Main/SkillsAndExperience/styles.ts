import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  padding-left: 6.25rem;

  width: calc(100% - 6.25rem);
  height: 100vh;

  .content {
    display: grid;
    grid-template-columns: 50% 50%;

    width: 95rem;
    max-width: 95rem;

    margin: auto;
    padding: 0 1rem;

    height: 100vh;

    .skills-charts, .txt-experiences {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;

      padding: 10rem 1rem;
    }

    .skills-charts {

      .chart {
        width: 100%;
        margin-bottom: 2rem;
        padding-right: 4rem;

        span {
          font-size: 1.5rem;
          font-weight: 500;
          margin-bottom: 7px;
          display: block;
        }

        div {
          width: 0;
          height: 100%;
          -webkit-transition: width 1.3s ease-out;
          -o-transition: width 1.3s ease-out;
          transition: width 1.3s ease-out;
        }
        
        .chart-1 {
          background: #FF6B00;
        }

        .chart-2 {
          background: #FFF500;
        }

        .chart-3 {
          background: #00FFD1;
        }

        .chart-4 {
          background: #0085FF;
        }

        .chart-5 {
          background: #EB00FF;
        }

        footer {
          background-color: #373737;
          height: 2px;
        }
      }
    }

    .txt-experiences {
      align-items: start;

      h1 {
        font-size: 4rem;
        margin-bottom: 2rem;

        color: var(--secundary);
      }

      span {
        color: var(--text)
      }
    }
  }
`