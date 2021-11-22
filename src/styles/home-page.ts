import { css } from '@emotion/react';

export default function createStyles() {
  return {
    app: css`
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
    `,
    authedContainer: css`
      height: 100%;
      display: flex;
      flex-direction: column;
      padding: 30px;
    `,
    headerContainer: css`
      padding: 0 30px 0 30px;
      text-align: center;
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
    gradientText: css`
      background: linear-gradient(left, #60c657 30%, #35aee2 60%);
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
    connectWalletButton: css`
      background: linear-gradient(left, #60c657, #35aee2);
      background-size: 200% 200%;
      animation: gradient-animation 4s ease infinite;
    `,
    submitGifButton: css`
      background: linear-gradient(left, #4e44ce, #35aee2);
      background-size: 200% 200%;
      animation: gradient-animation 4s ease infinite;
      margin-left: 10px;
    `,
    footerContainer: css`
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      padding: 0 30px 45px 30px;
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
    gifGrid: css`
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
      grid-gap: 1.5rem;
      justify-items: center;
      margin: 0;
      padding: 0;
    `,
    gifItem: css`
      display: flex;
      flex-direction: column;
      position: relative;
      justify-self: center;
      align-self: center;

      img {
        width: 100%;
        height: 300px;
        border-radius: 10px;
        object-fit: cover;
      }
    `,
    connectedContainer: css`
      input[type='text'] {
        display: inline-block;
        color: white;
        padding: 10px;
        width: 50%;
        height: 60px;
        font-size: 16px;
        box-sizing: border-box;
        background-color: rgba(0, 0, 0, 0.25);
        border: none;
        border-radius: 10px;
        margin: 50px auto;
      }

      button {
        height: 50px;
      }
    `,
  };
}
