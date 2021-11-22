import { NextPage } from 'next';
import { Twemoji } from 'src/components';
import createStyles from 'src/styles/home-page';
import twitterLogo from 'src/assets/twitter-logo.svg';

// Constants
const TWITTER_HANDLE = '_buildspace';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const HomePage: NextPage = () => {
  const styles = createStyles();

  return (
    <div css={styles.app}>
      {/* Header */}
      <div css={styles.headerContainer}>
        <p css={styles.header}>
          <Twemoji size={54} emoji="🖼" /> GIF Portal
        </p>
        <p css={styles.subText}>
          View your GIF collection in the metaverse <Twemoji size={24} emoji="✨" />
        </p>
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
