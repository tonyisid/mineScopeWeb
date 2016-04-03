import React from 'react'

export default class Player extends React.Component {
  static propTypes = {
    video : React.PropTypes.object
  }
  constructor (props) {
    super(props)
  }

  render () {
    const videoSrc = [{ type: 'video/mp4',
      src: 'http://video-js.zencoder.com/oceans-clip.mp4' }]
    const styles = {
      video : {
        width : '100%',
        height : 'auto',
      }
    }
    return (
      <div>
        <video
          style = { styles.video }
          id="my-video"
          controls preload="auto"
          width="640"
          height="264"
          data-setup="{}">
          <source
            src="http://v.theonion.com/onionstudios/video/3158/640.mp4"
            type='video/mp4' />
        </video>
      </div>
    )
  }
}
