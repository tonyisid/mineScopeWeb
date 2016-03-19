import React from 'react'
import pause from '../../../assets/images/pause-60.png'
import resume from '../../../assets/images/continue-60.png'
import loading from '../../../assets/images/spin.gif'

export default class UploadThumbnail extends React.Component {
  static propTypes = {
    work : React.PropTypes.object,
    actions : React.PropTypes.any
  }
  constructor (props) {
    super(props)
    this.updateStatus = this.updateStatus.bind(this)
  }
  componentDidMount () {
    if (this.props.work.uploader.progress !== 1)
      this.props.work.uploader.setUpdateStatus(this.updateStatus)
    else if (!this.props.work.uploader.isGetingBackendStatus) {
      this.props.work.uploader.isGetingBackendStatus = true
      this.getBackendProgress()
    }
  }
  getBackendProgress () {
    const { work } = this.props
    if (work.progress !== 1) {
      this.props.actions.getUploadingWork(work.id)
      setTimeout(()=>{
        this.getBackendProgress()
      }.bind(this),2000)
    } else {
      this.props.actions.finishUploadWork(work)
    }
  }
  updateStatus () {
    const { work } = this.props
    if (work.uploader.progress === 1) {
      work.uploader.isGetingBackendStatus = true
      this.getBackendProgress()
    }
    this.props.actions.updateUploadStatus(work)
  }
  pauseUpload (e) {
    e.preventDefault()
    const { uploader } = this.props.work
    uploader.pauseUpload()
  }
  resumeUpload (e) {
    e.preventDefault()
    const { uploader } = this.props.work
    uploader.beginUpload()
  }
  render () {
    const { uploader } = this.props.work
    const progressHeight = (uploader.progress + this.props.work.progress)/2*140
    //const backendProgressHeight = this.props.work.progress *134
    const styles = {
      main : {
        width : '140px',
        height : '140px',
        //border : '2px solid #DDD',
        borderRadius : '4px',
        opacity : 0.7
      },
      progress : {
        position : 'absolute',
        bottom : '1px',
        width : '138px',
        opacity : 0.8,
        height : progressHeight + 'px',
        backgroundColor : '#2196d8',
        borderBottomRightRadius : '4px',
        borderBottomLeftRadius : '4px',
        color : '#EEE',
        fontWeight : 700,
        textAlign : 'center',
        transition : '0.5s'
      },
      backendProgress : {
        position : 'absolute',
        bottom : '2px',
        width : '132px',
        opacity : 0.8,
        //height : backendProgressHeight + 'px',
        backgroundColor : 'red',
        transition : '0.5s'
      },
      imgStyle : {
        width : '30px',
        height : '30px',
        borderRadius : '15px'
      },
      pauseStyle : {
        position : 'absolute',
        width : '30px',
        height : '30px',
        top : '50%',
        left : '50%',
        marginLeft : '-15px',
        marginTop : '-15px',
      },
      progressText : {
        position : 'absolute',
        width : '138px',
        bottom : '0px',
        padding : '0px',
        fontWeight : 700,
        fontSize : '35px',
        color : '#EEE',
        textAlign : 'center',
      },
      loading : {
        position : 'absolute',
        bottom : '-20px',
        right : '0px'
      }
    }
    let goOnButton
    if (!uploader.isPause)
      goOnButton = (
        <span
          style={ styles.pauseStyle }
          onClick={ ::this.pauseUpload }>
          <img style={ styles.imgStyle } src={ pause } title="Pause upload" />
        </span>)
    else
      goOnButton = (
        <span
          style={ styles.pauseStyle }
          onClick={ ::this.resumeUpload }>
          <img style={ styles.imgStyle } src={ resume } title="go on upload" />
        </span>)
    const progressText = Math.floor((uploader.progress + this.props.work.progress)/2 * 100) + '%'
    return (
      <div style = { styles.main }>
        <div style={ styles.progress }>
          <img style={ styles.loading } width='16' height='16' src= { loading } />
        </div>
        <div style={ styles.progressText }>
          { progressText }
        </div>
        { uploader.progress < 1 ? goOnButton : null}
      </div>
    )
  }
}
