const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/', async (req, res) => {
  console.log(req.body);
  const { pre, dest, arrivalTime } = req.body.ecoData;

  const lat_long_pre_resp = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${pre}&key=AIzaSyC8XUHzHj-4Fwjv_-lS04AplPam2cZ0PVc`
  );

  const lat_long_dest_resp = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${dest}&key=AIzaSyC8XUHzHj-4Fwjv_-lS04AplPam2cZ0PVc`
  );

  const lat_pre = lat_long_pre_resp.data.results[0].geometry.location.lat;
  const long_pre = lat_long_pre_resp.data.results[0].geometry.location.lng;

  const lat_dest = lat_long_dest_resp.data.results[0].geometry.location.lat;
  const long_dest = lat_long_dest_resp.data.results[0].geometry.location.lng;

  console.log({
    pre: { lat: lat_pre, long: long_pre },
    dest: { lat: lat_dest, long: long_dest },
  });

  const jsonReqTrans = {
    origin: lat_pre + ',' + long_pre,
    destination: lat_dest + ',' + long_dest,
    provideRouteAlternatives: true,
    mode: 'transit',
    arrivalTime: arrivalTime,
  };
  const responseTransit = await axios.get(
    'https://maps.googleapis.com/maps/api/directions/json?key=AIzaSyC8XUHzHj-4Fwjv_-lS04AplPam2cZ0PVc',
    { params: jsonReqTrans }
  );

  const jsonReqDrive = {
    origin: lat_pre + ',' + long_pre,
    destination: lat_dest + ',' + long_dest,
    provideRouteAlternatives: true,
    mode: 'driving',
  };
  const responseDrive = await axios.get(
    'https://maps.googleapis.com/maps/api/directions/json?key=AIzaSyC8XUHzHj-4Fwjv_-lS04AplPam2cZ0PVc',
    { params: jsonReqDrive }
  );

  const jsonReqBike = {
    origin: lat_pre + ',' + long_pre,
    destination: lat_dest + ',' + long_dest,
    provideRouteAlternatives: true,
    mode: 'bicycling',
  };
  const responseBike = await axios.get(
    'https://maps.googleapis.com/maps/api/directions/json?key=AIzaSyC8XUHzHj-4Fwjv_-lS04AplPam2cZ0PVc',
    { params: jsonReqBike }
  );

  const respFinal = {
    transit: responseTransit.data,
    drive: responseDrive.data,
    bike: responseBike.data,
  };

  console.log(respFinal);
  res.send(respFinal);

  // .then((response) => {
  //   console.log(JSON.stringify(response.data));
  //   res.send(response.data);
  //   // console.log(response.data.url);
  //   // console.log(response.data.explanation);
  // })
  // .catch((error) => {
  //   console.log(error);
  // });

  // res.send('hello new');
});

module.exports = router;
