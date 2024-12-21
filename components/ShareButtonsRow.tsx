import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappIcon,
  WhatsappShareButton,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterIcon,
  TwitterShareButton,
} from "next-share";
import * as React from "react";

export interface SharebUttonsRowProps {
  postUrl: string;
}

const QUOTE = "Te invito a leer este artículo de La mente real:";

export const ShareButtonsRow = ({ postUrl }: SharebUttonsRowProps) => {
  console.log(postUrl);
  return (
    <div className="">
      <p>Comparte este post: </p>
      <div className="flex flex-row items-center mt-4">
        <FacebookShareButton url={postUrl} quote={QUOTE}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <WhatsappShareButton url={postUrl} title={QUOTE} separator=":: ">
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
        <LinkedinShareButton url={postUrl}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        <TwitterShareButton url={postUrl} title={QUOTE}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
      </div>
    </div>
  );
};
