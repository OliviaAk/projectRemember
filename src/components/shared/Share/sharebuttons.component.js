import React from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  MailruShareButton,
  MailruIcon,
  OKShareButton,
  OKIcon,
  VKIcon,
  VKShareButton,
  ViberIcon,
  ViberShareButton,
} from 'react-share';

const ShareButtons = ({ title, url, twitterHandle, tags, className }) => (
  <div>
    <FacebookShareButton url={url} className={className}>
      <FacebookIcon size={40} round />
    </FacebookShareButton>
    <MailruShareButton
      url={url}
      title={title}
      via={twitterHandle}
      hashtags={tags}
      className={className}
    >
      <MailruIcon size={40} round />
    </MailruShareButton>
    <OKShareButton
      url={url}
      title={title}
      via={twitterHandle}
      hashtags={tags}
      className={className}
    >
      <OKIcon size={40} round />
    </OKShareButton>
    <VKShareButton
      url={url}
      title={title}
      via={twitterHandle}
      hashtags={tags}
      className={className}
    >
      <VKIcon size={40} round />
    </VKShareButton>
    <ViberShareButton
      url={url}
      title={title}
      via={twitterHandle}
      hashtags={tags}
      className={className}
    >
      <ViberIcon size={40} round />
    </ViberShareButton>
  </div>
);
export default ShareButtons;
