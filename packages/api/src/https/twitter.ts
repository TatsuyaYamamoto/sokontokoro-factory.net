import { URL } from "url";

import * as Twitter from "twitter";
import * as express from "express";

import config from "../config";

const client = new Twitter({
  consumer_key: config.twitter_media_app.consumer_key,
  consumer_secret: config.twitter_media_app.consumer_secret,
  access_token_key: config.twitter_media_app.access_token_key,
  access_token_secret: config.twitter_media_app.access_token_secret
});

const projectId = process.env.GCLOUD_PROJECT;

const twitterRouter = express.Router();

/**
 * POST twitter/media/upload
 * 画像用Twitterアカウントに{@code mediaData}付きのツイートを投稿し、mediaDataのURLを返却する
 *
 * @param mediaData base64形式の画像 Twitter API media/upload に従う
 *
 * @example
 * curl -XPOST  -H "Content-Type: application/json" http://localhost:5001/sokontokoro-factory-develop/us-central1/httpsApp/twitter/media/upload -d "{\"mediaData\":\"$(base64 image.jpg)\"}"
 */
twitterRouter.post("/media/upload", (req, res, next) => {
  const { mediaData } = req.body;

  if (!mediaData) {
    res.status(400).json({
      error: true,
      message: "mediaData is required."
    });
    return;
  }

  const referer = req.get("referer");
  let sourceData = "no-source-data";
  if (referer) {
    const parsedUrl = new URL(referer ?? "");
    sourceData = `${parsedUrl.host}${parsedUrl.pathname}`.replace(/\.-/,"_");
  }

  (async () => {
    const media = await client.post("media/upload", {
      media_data: mediaData
    });
    console.log(`media id: ${media.media_id_string}`);

    const date = new Date().toDateString();
    const status = `${sourceData} / ${projectId} / ${date}`;
    const tweet = await client.post("statuses/update.json", {
      status,
      media_ids: media.media_id_string
    });
    console.log(`tweet id: ${tweet.id_str}`);

    res.json({
      mediaUrl: tweet.entities.media[0].url,
      rows: {
        tweet,
        media
      }
    });
  })().catch(next);
});

export default twitterRouter;
