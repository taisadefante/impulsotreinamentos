export default function GlobalStyle() {
  return (
    <style>{`
      * {
        box-sizing: border-box;
      }

      html {
        scroll-behavior: smooth;
        -webkit-font-smoothing: antialiased;
        text-rendering: geometricPrecision;
      }

      body {
        margin: 0;
        font-family: var(--font-body);
      }

      a {
        color: inherit;
        text-decoration: none;
        transition: .25s ease;
      }

      a:hover {
        opacity: .86;
        transform: translateY(-1px);
      }

      button {
        font-family: var(--font-heading);
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      .heroTitle,
      .sectionTitle,
      .cardTitle {
        font-family: var(--font-heading) !important;
        font-weight: 750 !important;
        letter-spacing: -0.7px !important;
      }

      p,
      span,
      li {
        font-family: var(--font-body);
      }

      @keyframes floatPulse {
        0%,100% {
          transform: translateY(0) scale(1);
        }

        50% {
          transform: translateY(-10px) scale(1.02);
        }
      }

      @keyframes shine {
        0% {
          transform: translateX(-120%);
        }

        100% {
          transform: translateX(120%);
        }
      }

      @media (max-width: 1100px) {
        .heroGrid {
          grid-template-columns: 1fr !important;
          padding-top: 60px !important;
        }

        .trainingGrid {
          grid-template-columns: repeat(2,1fr) !important;
        }

        .aboutGrid,
        .contactGrid {
          grid-template-columns: 1fr !important;
        }

        .metricsGrid,
        .benefitGrid {
          grid-template-columns: repeat(2,1fr) !important;
        }
      }

      @media (max-width: 760px) {
        .desktopNav,
        .desktopCta {
          display: none !important;
        }

        .mobileMenuBtn {
          display: inline-flex !important;
        }

        .heroGrid {
          padding: 42px 20px 70px !important;
        }

        .sectionPad {
          padding: 70px 20px !important;
        }

        .trainingGrid,
        .metricsGrid,
        .benefitGrid,
        .peopleGrid,
        .contactGrid {
          grid-template-columns: 1fr !important;
        }

        .heroButtons {
          flex-direction: column !important;
        }

        .heroTitle {
          font-size: 42px !important;
          letter-spacing: -1.2px !important;
        }

        .header {
          padding: 14px 20px !important;
        }

        .brandText {
          display: none !important;
        }

        .modalCard {
          width: calc(100vw - 28px) !important;
          max-height: 88vh !important;
          padding: 24px !important;
        }
      }

      @media (min-width: 761px) {
        .mobileMenuBtn {
          display: none !important;
        }
      }
    `}</style>
  );
}
