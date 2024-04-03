import React from 'react'
import ReactPlayer from 'react-player'
import styles from './VideoPlayer.module.css'

const VideoPlayer = () => {
  return (
    <div className={styles.center}>
        <ReactPlayer url="https://d1fmlek82egk7b.cloudfront.net/set.mp4" controls />
    </div>
  )
}

export default VideoPlayer