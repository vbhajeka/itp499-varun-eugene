const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/', async (req, res) => {
  const { lat_pre, long_pre, lat_dest, long_dest, pre, dest } =
    req.body.ecoData;
  const jsonReqTrans = {
    origin: lat_pre + ',' + long_pre,
    destination: lat_dest + ',' + long_dest,
    provideRouteAlternatives: true,
    mode: 'transit',
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

  const respFinal = {
    transit: responseTransit.data,
    drive: responseDrive.data,
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
