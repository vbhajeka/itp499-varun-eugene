import React from 'react';
import ImageMapper from 'react-image-mapper';

export const ImgComp = () => {
  const MAP = {
    name: 'my-map',
    areas: [
      {
        name: '1',
        shape: 'poly',
        coords: [25, 33, 27, 300, 128, 240, 128, 94],
        preFillColor: 'green',
        fillColor: 'blue',
      },
      {
        name: '2',
        shape: 'poly',
        coords: [219, 118, 220, 210, 283, 210, 284, 119],
        preFillColor: 'pink',
      },
      {
        name: '3',
        shape: 'poly',
        coords: [381, 241, 383, 94, 462, 53, 457, 282],
        fillColor: 'yellow',
      },
      {
        name: '4',
        shape: 'poly',
        coords: [245, 285, 290, 285, 274, 239, 249, 238],
        preFillColor: 'red',
      },
      { name: '5', shape: 'circle', coords: [170, 100, 25] },
    ],
  };

  return (
    <div>
      <ImageMapper
        src={
          'https://redcap.stanford.edu/surveys/index.php?pid=21691&__passthru=DataEntry%2Fimage_view.php&doc_id_hash=c29c36c994ecdc13b826e4512112785fa8c0594c&id=1165309&instance=1&s=3YFJPJAHNE'
        }
        map={MAP}
        width={500}
        onClick={(e) => console.log(e)}
      ></ImageMapper>
    </div>
  );
};
