import React, { FC, useEffect, useMemo, useState } from "react"
import { youtube_v3 } from "googleapis"

import Page from "./CommunicationNotePage"
import { YOUTUBE_COMMUNICATION_COMMENTS_API_URL } from "../../configs"
import * as styles from "./styles.module.scss"

// https://www.nxworld.net/tips/js-array-chunk.html
const arrayChunk = ([...array], size = 1) => {
  return array.reduce(
    (acc, value, index) =>
      index % size ? acc : [...acc, array.slice(index, index + size)],
    []
  )
}

interface CommunicationNoteProps {}

const CommunicationNote: FC<CommunicationNoteProps> = props => {
  const [comments, setComments] = useState<youtube_v3.Schema$CommentThread[]>(
    []
  )

  const commentBlocks = useMemo<youtube_v3.Schema$CommentThread[][]>(() => {
    return arrayChunk(comments, 5)
  }, [comments])

  useEffect(() => {
    fetch(YOUTUBE_COMMUNICATION_COMMENTS_API_URL)
      .then(res => res.json())
      .then(data => {
        setComments(data)
      })
  }, [])

  return (
    <div className={styles.note}>
      {commentBlocks.length === 0 && <Page comments={[]} />}

      {commentBlocks.map((commentBlock, index) => {
        return <Page key={index} comments={commentBlock} />
      })}
    </div>
  )
}

export default CommunicationNote
