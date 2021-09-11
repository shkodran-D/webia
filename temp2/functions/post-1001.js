<<<<<<< HEAD
exports.handler = async event => {
  if (event.queryStringParameters.fbclid) {
    return {
      statusCode: 301,
      headers: {
        'cache-control': 'public, max-age=0, must-revalidate',
        location: 'https://www.google.com/'
      }
    }
  } else {
    let pathName = event.path.split('/')[3].split('-')
    return {
      statusCode: 301,
      headers: {
        'cache-control': 'public, max-age=0, must-revalidate',
        location: process.env.URL + '/' + pathName[0] + '/' + pathName[1] + '/'
      }
=======
exports.handler = async () => {
  return {
    statusCode: 301,
    headers: {
      location: 'https://www.google.com/'
>>>>>>> 30bda4dc97e263d2fa3234a3597ee4831b353621
    }
  }
}