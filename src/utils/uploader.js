import * as OSS from 'ali-oss'

const appServer = '<your STS app server>'
const bucket = 'your bucket name'
const region = 'oss-cn-hangzhou'

function* applyToken () {
  const url = appServer
  const result = yield OSS.urllib.requestThunk(url, {
    method: 'GET'
  })
  return JSON.parse(result.data)
}

function* progress  (p) {
  const bar = document.getElementById('progress-bar')
  bar.style.width = Math.floor(p * 100) + '%'
  bar.innerHTML = Math.floor(p * 100) + '%'
}

function withStore (func) {
  return function () {
    OSS.co(function* () {
      const creds = yield applyToken()
      const store = new OSS({
        region: region,
        accessKeyId: creds.AccessKeyId,
        accessKeySecret: creds.AccessKeySecret,
        stsToken: creds.Security,
        bucket: bucket
      })

      const result = yield func(store)

      console.log(result)
    }).catch(function (err) {
      console.log(err)
    })
  }
}
function uploadFile (file, key) {
  return function* (store) {
    console.log(file.name + ' => ' + key)

    const result = yield store.multipartUpload(
      key,
      file,
      { progress: progress }
    )

    return result
  }
};
