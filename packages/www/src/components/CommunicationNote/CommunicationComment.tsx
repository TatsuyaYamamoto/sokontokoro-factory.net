import React, { FC } from "react"
import { youtube_v3 } from "googleapis"

import * as styles from "./styles.module.scss"

const CHANNEL_ID = "UCf-Z2GqqJs6-Sy7rpy0GHsg"

interface CommentProps {
  comment: youtube_v3.Schema$CommentThread
  showThumbnail: boolean
}

const CommunicationComment: FC<CommentProps> = props => {
  const { comment, showThumbnail } = props
  const channelComment = comment.replies?.comments?.find(c => {
    return c.snippet?.authorChannelId.value === CHANNEL_ID
  })
  const date = new Date(
    comment.snippet?.topLevelComment?.snippet?.publishedAt || 0
  )
  const dateText = `${date.getFullYear()}/${
    date.getMonth() + 1
  }/${date.getDate()}`
  const userComment = comment.snippet?.topLevelComment?.snippet?.textDisplay
  const userName = comment.snippet?.topLevelComment?.snippet?.authorDisplayName
  const channelCommentText = channelComment?.snippet?.textDisplay

  const videoId = comment.snippet?.videoId
  const videoThumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`

  return (
    <div className={styles.comment}>
      {showThumbnail && (
        <a href={videoUrl} target="__blank">
          <div className={styles.videoThumbnail}>
            <div className={styles.videoThumbnail__tape} />
            <img
              className={styles.videoThumbnail__image}
              src={videoThumbnailUrl}
            />
          </div>
        </a>
      )}
      <div className={styles.userComment}>
        <span className={styles.userComment__date}>{dateText}</span>
        <span
          className={styles.userComment__text}
          dangerouslySetInnerHTML={{ __html: userComment || "" }}
        />
        <span
          className={styles.userComment__name}
          dangerouslySetInnerHTML={{ __html: userName || "" }}
        />
      </div>

      <div className={styles.channelComment}>
        <span
          className={styles.channelComment__text}
          dangerouslySetInnerHTML={{ __html: channelCommentText || "" }}
        />
      </div>
    </div>
  )
}

export default CommunicationComment
