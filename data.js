var APP_DATA = {
  "scenes": [
    {
      "id": "0-house",
      "name": "house",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.4075563740628798
      },
      "linkHotspots": [
        {
          "yaw": -0.9659481067569633,
          "pitch": 0.05392884780099472,
          "rotation": 0,
          "target": "1-street1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.4954146470830114,
          "pitch": 0.13371949072865696,
          "title": "Info PC",
          "text": "SO Linux"
        }
      ]
    },
    {
      "id": "1-street1",
      "name": "street1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.655898387711801,
          "pitch": 0.08949590783797134,
          "rotation": 0,
          "target": "0-house"
        },
        {
          "yaw": 2.651557996605579,
          "pitch": 0.2318896963921624,
          "rotation": 0,
          "target": "2-street2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-street2",
      "name": "street2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.457359431327129,
          "pitch": 0.14041366535635724,
          "rotation": 0,
          "target": "1-street1"
        },
        {
          "yaw": 0.07039183070736144,
          "pitch": 0.2219809653642031,
          "rotation": 0,
          "target": "3-station"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-station",
      "name": "station",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.354213659152256,
          "pitch": -0.06477914716729671,
          "rotation": 0,
          "target": "2-street2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.6603245260466482,
          "pitch": -0.08348024667603049,
          "title": "Info restaurant",
          "text": "<span style=\"color: rgb(249, 247, 245); font-family: &quot;Open Sans&quot;, Arial, sans-serif; font-size: 14px; text-align: justify; background-color: rgb(21, 22, 23);\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus eu ex ac euismod. Quisque ut augue sit amet nunc luctus blandit. Nulla nec molestie eros. Donec mollis ipsum augue, luctus venenatis e</span>"
        }
      ]
    }
  ],
  "name": "UTBVr",
  "settings": {
    "mouseViewMode": "qtvr",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
