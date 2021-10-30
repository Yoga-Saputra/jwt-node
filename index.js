const jwt = require('jsonwebtoken')

const JWT_SECRET = 'bwamicro!123'

//1. create basic token dengan proses syncronnus
// const token = jwt.sign({ 
//   data: {
//     kelas: 'bwamicro'
//   }
// }, JWT_SECRET, { expiresIn: '5m' })
// console.log(token);

// 2. asyncronous create token
// jwt.sign({
//   data: {
//     kelas: 'bwamicro'
//   }
// }, JWT_SECRET, {expiresIn: '1m'}, (err, token) => {
//   console.log(token);
// })

// verify token cara 1

const token1 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImtlbGFzIjoiYndhbWljcm8ifSwiaWF0IjoxNjMyOTA2OTIyLCJleHAiOjE2MzI5MDcyMjJ9.7xHdiI_wvXGiLlAAXXIienESL3CVk6Gan12jJGflowk';
// jwt.verify(token1, JWT_SECRET, (err, decoded) => {
//   if (err) {
//     console.log(err.message);
//     return
//   }
//   console.log(decoded);
// })
// token github : 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

// cara 2 verify

try {
  const decoded = jwt.verify(token1, JWT_SECRET)
  console.log(decoded);
} catch (error) {
  console.log(error.message);
}