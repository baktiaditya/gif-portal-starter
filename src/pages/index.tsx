import React from 'react';
import { NextPage } from 'next';
import { TWITTER_HANDLE, TWITTER_LINK, TEST_GIFS } from 'src/constants';
import { Twemoji } from 'src/components';
import createStyles from 'src/styles/home-page';
import twitterLogo from 'src/assets/twitter-logo.svg';

type CustomWindowType = Window &
  typeof globalThis & { solana?: { isPhantom: boolean; isConnected: boolean; connect: Function } };

const HomePage: NextPage = () => {
  const styles = createStyles();

  const [walletAddress, setWalletAddress] = React.useState<string | null>(null);
  const [inputValue, setInputValue] = React.useState('');
  const [gifList, setGifList] = React.useState<Array<string>>([]);

  /**
   * When our component first mounts, let's check to see if we have a connected
   * Phantom Wallet
   */
  React.useEffect(() => {
    const onLoad = async () => {
      await connectWallet();
    };
    window.addEventListener('load', onLoad);
    return () => window.removeEventListener('load', onLoad);
  }, []);

  /**
   * Fetch gifs
   */
  React.useEffect(() => {
    if (walletAddress) {
      console.log('Fetching GIF list...');

      // Call Solana program here.

      // Set state
      setGifList(TEST_GIFS);
    }
  }, [walletAddress]);

  /**
   * Let's define this method so our code doesn't break.
   * We will write the logic for this next!
   */
  const connectWallet = async () => {
    try {
      const { solana } = window as CustomWindowType;

      if (solana) {
        if (solana.isPhantom) {
          console.log('Phantom wallet found!');

          /*
           * The solana object gives us a function that will allow us to connect
           * directly with the user's wallet!
           */
          const response = await solana.connect();
          console.log('Connected with Public Key:', response.publicKey.toString());

          /*
           * Set the user's publicKey in state to be used later!
           */
          setWalletAddress(response.publicKey.toString());
        }
      } else {
        console.warn('Solana object not found! Get a Phantom Wallet 👻');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue.length > 0) {
      console.log('Gif link:', inputValue);
    } else {
      console.log('Empty input. Try again.');
    }
  };

  return (
    <div css={styles.app}>
      {/* Header */}
      <div css={[styles.headerContainer, !walletAddress && styles.headerContainerEmpty]}>
        <div css={styles.headerContainerInner}>
          <p css={styles.header}>
            <Twemoji size={54} emoji="🖼" /> GIF Portal
          </p>
          <p css={styles.subText}>
            View your GIF collection in the metaverse <Twemoji size={24} emoji="✨" />
          </p>
          {!walletAddress && (
            <button onClick={connectWallet} css={[styles.ctaButton, styles.connectWalletButton]}>
              Connect to Wallet
            </button>
          )}
        </div>

        {/* Gif list */}
        {walletAddress && (
          <div css={styles.connectedContainer}>
            <form onSubmit={handleFormSubmit}>
              <input
                type="text"
                placeholder="Enter gif link!"
                value={inputValue}
                onChange={handleInputChange}
              />
              <button type="submit" css={[styles.ctaButton, styles.submitGifButton]}>
                Submit
              </button>
            </form>
            <div css={styles.gifGrid}>
              {gifList.map(gif => (
                <div key={gif} css={styles.gifItem}>
                  <img src={gif} alt={gif} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div css={styles.footerContainer}>
        <img alt="Twitter Logo" css={styles.twitterLogo} src={twitterLogo} />
        <a css={styles.footerText} href={TWITTER_LINK} target="_blank" rel="noreferrer">
          built on {TWITTER_HANDLE}
        </a>
      </div>
    </div>
  );
};

export default HomePage;
