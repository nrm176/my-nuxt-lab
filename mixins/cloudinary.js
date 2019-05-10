export default {
  data() {
    return {
      env: {
        baseImageURL: process.env.baseImageURL,
        imagePathId: process.env.imagePathId,
        cloudinary_param: process.env.cloudinary_param,
      }
    }

  }
}
