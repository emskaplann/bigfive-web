const fetch = require('isomorphic-unfetch');
const calculateScore = require('@alheimsins/bigfive-calculate-score')
const getResult = require('b5-result-text-custom')

const connectToDb = require('./lib/connect-to-db')
const validate = require('./lib/validate-test')
const dbCollection = process.env.MONGODB_COLLECTION

module.exports = async (req, res) => {
  const ipAdd = req.headers['x-real-ip']
  
  // var devicetype = deviceAPI.deviceType; //mobile
  // var devicebrand = deviceAPI.deviceBrand; //Apple
  // var devicename = deviceAPI.deviceName; //iPhone XS

  // var browsername = deviceAPI.browserName; //Safari
  // var brversion = deviceAPI.browserVersion; //12.0.1

  // var osname = deviceAPI.osName; //MAC OS X
  // var osversion = deviceAPI.osVersion; //10.14.1

  if (req.method === 'OPTIONS') {
    res.send('ok!')
    return
  }

  const { body: payload } = req

  if (!payload) {
    res.status(400).json({ type: 'error', message: 'Not a valid payload' })
    return
  }

  const { error } = validate(payload)
  const isValid = !error

  if (!isValid) {
    res.status(400).json({ type: 'error', message: error })
    return
  }

  try {
    const db = await connectToDb()
    const collection = db.collection(dbCollection)
    if (ipAdd) {
      // const geoLocationResp = await fetch(`http://www.geoplugin.net/json.gp?ip=${ipAdd}`)
      const geoLocationResp = await fetch(`https://api.ipregistry.co/${ipAdd}?key=${process.env.IP_API_KEY}`)
      const geoLocations = await geoLocationResp.json()
      payload['city'] = geoLocations['location']['city']
      payload['postal'] = geoLocations['location']['postal']
      payload['country'] = geoLocations['location']['country']['name']
      payload['area'] = geoLocations['time_zone']['id']
      payload['ipaddress'] = ipAdd
      // payload['devtype'] = devicetype
      // payload['devbrand'] = devicebrand
      // payload['devname'] = devicename
      // payload['browname'] = browsername
      // payload['browname'] = brversion
      // payload['osname'] = osname
      // payload['osversion'] = osversion
    }
    const scores = calculateScore(payload)
    const results = getResult({ scores, lang: 'tr' })
    payload['results'] = results;
    const data = await collection.insertOne(payload)
    res.send({ id: data.insertedId })
    return
  } catch (error) {
    res.status(500).json({ type: 'error', message: error.message })
  }
}
