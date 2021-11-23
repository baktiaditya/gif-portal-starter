import { css } from '@emotion/react';

export default function createStyles() {
  const footerHeight = 114;

  return {
    app: css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
    `,

    headerContainer: css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 30px;
      padding-top: 60px;
    `,
    headerContainerEmpty: css`
      flex: 1;
      padding-top: 30px;
      padding-top: ${footerHeight}px;
    `,
    headerContainerInner: css`
      display: flex;
      flex-direction: column;
      align-items: center;
    `,
    header: css`
      margin: 0;
      font-size: 50px;
      font-weight: bold;
      color: white;
    `,
    subText: css`
      font-size: 25px;
      color: white;
    `,

    connectedContainer: css`
      padding: 30px 30px 0;

      form {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 10px;
        margin-bottom: 50px;

        input[type='text'] {
          flex: 1;
          color: white;
          padding: 10px;
          width: 50%;
          height: 50px;
          font-size: 16px;
          box-sizing: border-box;
          background-color: rgba(0, 0, 0, 0.25);
          border: none;
          border-radius: 10px;
        }

        button {
          height: 50px;
        }
      }
    `,
    gifGrid: css`
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 1.5rem;
    `,
    gifItem: css`
      position: relative;
      display: flex;
      flex-direction: column;
      justify-self: center;
      align-self: center;

      img {
        width: 100%;
        height: 300px;
        border-radius: 10px;
        object-fit: cover;
      }
    `,
    connectWalletButton: css`
      background: -webkit-linear-gradient(left, #60c657, #35aee2);
      background-size: 200% 200%;
    `,
    submitGifButton: css`
      background: -webkit-linear-gradient(left, #4e44ce, #35aee2);
      background-size: 200% 200%;
      margin-left: 10px;
    `,

    footerContainer: css`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin-top: auto;
      height: ${footerHeight}px;
      padding: 0 30px;
    `,
    twitterLogo: css`
      width: 24px;
      height: auto;
      margin-right: 4px;
    `,
    footerText: css`
      color: white;
      font-size: 16px;
      font-weight: bold;
    `,

    gradientText: css`
      background: -webkit-linear-gradient(left, #60c657 30%, #35aee2 60%);
      background-clip: text;
    `,
    ctaButton: css`
      height: 45px;
      border: 0;
      width: auto;
      padding-left: 40px;
      padding-right: 40px;
      border-radius: 10px;
      cursor: pointer;
      font-size: 16px;
      font-weight: bold;
      color: white;
    `,
  };
}
