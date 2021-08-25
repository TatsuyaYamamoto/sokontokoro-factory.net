import React, { FC, useMemo } from "react"
import { youtube_v3 } from "googleapis"

import Comment from "./CommunicationComment"

import * as styles from "./styles.module.scss"

interface CommunicationNotePageProps {
  comments: youtube_v3.Schema$CommentThread[]
}

const CommunicationNotePage: FC<CommunicationNotePageProps> = props => {
  const comments = useMemo(() => {
    const _comments = []
    let prevVideoId: string | null = null

    for (const comment of props.comments) {
      const videoId = comment.snippet?.videoId
      if (!videoId) {
        continue
      }
      const showThumbnail = prevVideoId !== videoId
      prevVideoId = videoId

      _comments.push({
        comment,
        showThumbnail,
      })
    }

    return _comments
  }, [props.comments])

  return (
    <div className={styles.page}>
      <div className={styles.page__sen} />

      {comments.map(({ comment, showThumbnail }) => {
        return (
          <Comment
            key={comment.id}
            comment={comment}
            showThumbnail={showThumbnail}
          />
        )
      })}
    </div>
  )
}

export default CommunicationNotePage
