import { FacebookShareButton, FacebookIcon } from "next-share";
import * as React from "react";

export interface SharebUttonsRowProps {
  postUrl: string;
}

const QUOTE = "Te invito a leer este artículo de La mente real:";

export const ShareButtonsRow = ({ postUrl }: SharebUttonsRowProps) => {
  console.log(postUrl)
  return (
    <div className="">
      <p>Comparte este post: </p>
      <div className="flex flex-row items-center mt-4">
        <FacebookShareButton url={postUrl} quote={QUOTE}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
      </div>
    </div>
  );
};
