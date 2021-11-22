// Source: https://gist.github.com/chibicode/fe195d792270910226c928b69a468206
import React, { Fragment } from 'react';
import twemoji, { ParseObject, ParseCallback } from 'twemoji';
import { css } from '@emotion/react';

export type TwemojiProps = {
  emoji: string;
  /** @default {} */
  options?: Partial<ParseObject> | ParseCallback;
  /** @default 36 */
  size?: number | string;
  style?: React.CSSProperties;
};

export const Twemoji: React.VFC<TwemojiProps> = props => {
  const { emoji, options: _options = {}, size = 36, style } = props;
  const defaultOption: TwemojiProps['options'] = {
    className: 'tweemoji',
    ext: '.svg',
    folder: 'svg',
  };
  const options = { ...defaultOption, ..._options };

  return (
    <Fragment>
      <span
        css={css({
          '.tweemoji': {
            display: 'inline-block',
            height: size,
            width: 'auto',
            verticalAlign: '-0.125em',
            ...style,
          },
        })}
        dangerouslySetInnerHTML={{
          __html: twemoji.parse(emoji, options),
        }}
      />
    </Fragment>
  );
};
