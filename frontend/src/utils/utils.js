export const variables = {
  production: {
    BASE_API: process.env.REACT_APP_BASE_API,
    PHOTO_API: process.env.REACT_APP_PHOTO,
  },
  development: {
    BASE_API: "http://localhost:3002/"
  }
}
