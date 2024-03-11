import { S3 } from 'aws-sdk'

export default {
  async uploadS3(file: any, name: string, folderPath: string): Promise<string> {
    const bucket = process.env.AWS_BUCKET_NAME
    const s3 = this.getS3()
    const params: any = {
      Bucket: bucket,
      Key: String(`${folderPath}/` + name),
      Body: file,
      ContentEncoding: 'base64',
      ContentType: 'image/png'
    }
    return new Promise((resolve, reject) => {
      s3.upload(params, (err: any, data: any) => {
        if (err) {
          reject(err.message)
        }
        resolve(data.Location)
      })
    })
  },
  getS3() {
    return new S3({
      accessKeyId: process.env.AWS_ACCESS_KEY,
      secretAccessKey: process.env.AWS_ACCESS_SECRET
    })
  }
}
