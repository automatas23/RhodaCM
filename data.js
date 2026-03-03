var APP_DATA = {
  "scenes": [
    {
      "id": "0-sala-comedor",
      "name": "Sala-comedor",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": -1.2007353564209957,
        "pitch": 0.02487635065720184,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.206558242441357,
          "pitch": 0.4862143630804585,
          "rotation": 0,
          "target": "1-cocina"
        },
        {
          "yaw": -1.8388446117854258,
          "pitch": 0.6950693317880585,
          "rotation": 6.283185307179586,
          "target": "3-bao-planta-baja"
        },
        {
          "yaw": -2.8252409483560452,
          "pitch": 0.5774717393463717,
          "rotation": 0,
          "target": "4-escaleras"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-cocina",
      "name": "Cocina",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": 0.3416156169628586,
        "pitch": 0.21892363412205817,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.850053671307676,
          "pitch": 0.3568715083552245,
          "rotation": 0,
          "target": "2-patio"
        },
        {
          "yaw": -1.8373628511356497,
          "pitch": 0.5951302755310834,
          "rotation": 0,
          "target": "0-sala-comedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-patio",
      "name": "Patio",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": 0.22194164277895467,
        "pitch": 0.27683046146390033,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5465601369590836,
          "pitch": 0.5498124873955206,
          "rotation": 0,
          "target": "1-cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bao-planta-baja",
      "name": "Baño planta baja",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6488444169875471,
          "pitch": 0.5702570242449081,
          "rotation": 0,
          "target": "0-sala-comedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-escaleras",
      "name": "Escaleras",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.058882220432274,
          "pitch": 0.8243569833069966,
          "rotation": 0,
          "target": "0-sala-comedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-descanso",
      "name": "Descanso",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": -0.5036115621211792,
        "pitch": 0.1983019228418641,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.3281918271964361,
          "pitch": 0.668656253859945,
          "rotation": 0,
          "target": "6-bao-planta-alta"
        },
        {
          "yaw": 0.13086782602154834,
          "pitch": 0.5223771936700068,
          "rotation": 0,
          "target": "7-habitacin-1"
        },
        {
          "yaw": 1.5630757588424578,
          "pitch": 0.3885691071576769,
          "rotation": 0,
          "target": "8-habitacin-2"
        },
        {
          "yaw": 2.3933657610830155,
          "pitch": 0.9810650984991813,
          "rotation": 0,
          "target": "4-escaleras"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bao-planta-alta",
      "name": "Baño planta alta",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": 2.0471772034838693,
        "pitch": 0.3820731314533994,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.39785988641195935,
          "pitch": 0.8059509707546422,
          "rotation": 0,
          "target": "5-descanso"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-habitacin-1",
      "name": "Habitación 1",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": -0.021794236877042295,
        "pitch": 0.30468032200763595,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0526446634727016,
          "pitch": 0.5657996053874363,
          "rotation": 0,
          "target": "5-descanso"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-habitacin-2",
      "name": "Habitación 2",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": -1.0885431001220685,
        "pitch": 0.3996961992544925,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.1208871596732237,
          "pitch": 0.430692775924328,
          "rotation": 0,
          "target": "5-descanso"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Rhoda",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
