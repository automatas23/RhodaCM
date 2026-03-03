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
        "yaw": -1.2371213855378542,
        "pitch": 0.13056974921005882,
        "fov": 1.7565418004738071
      },
      "linkHotspots": [
        {
          "yaw": -1.262976330563923,
          "pitch": 0.22930554317524354,
          "rotation": 0,
          "target": "1-cocina"
        },
        {
          "yaw": -1.9210812821223406,
          "pitch": 0.33943693783406914,
          "rotation": 6.283185307179586,
          "target": "3-bao-planta-baja"
        },
        {
          "yaw": -2.746968811328321,
          "pitch": 0.30933781335311394,
          "rotation": 0,
          "target": "4-descanso"
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
        "yaw": 0.09902158965862817,
        "pitch": 0.04594933754279573,
        "fov": 1.7565418004738071
      },
      "linkHotspots": [
        {
          "yaw": 2.083925917784873,
          "pitch": 0.12764050843443364,
          "rotation": 0,
          "target": "2-patio"
        },
        {
          "yaw": -1.8848035268944443,
          "pitch": 0.3249798098112535,
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
        "yaw": 0.7494437481783756,
        "pitch": 0.24818294284225573,
        "fov": 1.7565418004738071
      },
      "linkHotspots": [
        {
          "yaw": 1.5702049743552298,
          "pitch": 0.3009735896561434,
          "rotation": 0.7853981633974483,
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
        "yaw": -0.8216197177820401,
        "pitch": 0.15607767060717315,
        "fov": 1.7565418004738071
      },
      "linkHotspots": [
        {
          "yaw": -1.6433449207555846,
          "pitch": 0.27510155091196964,
          "rotation": 0,
          "target": "0-sala-comedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-descanso",
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
        "yaw": 0.6096372612844547,
        "pitch": 0.13124465112227313,
        "fov": 1.7565418004738071
      },
      "linkHotspots": [
        {
          "yaw": -1.3391101340861447,
          "pitch": 0.1921125850025973,
          "rotation": 0,
          "target": "5-bao-planta-alta"
        },
        {
          "yaw": 0.1285934974132914,
          "pitch": 0.18296035780291753,
          "rotation": 0,
          "target": "6-habitacin-1"
        },
        {
          "yaw": 1.528758040225596,
          "pitch": 0.0682938342756465,
          "rotation": 0,
          "target": "7-habitacin-2"
        },
        {
          "yaw": 2.3933657610830155,
          "pitch": 0.9810650984991813,
          "rotation": 0,
          "target": "0-sala-comedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bao-planta-alta",
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
        "yaw": 1.2314547901863797,
        "pitch": 0.24684058532346853,
        "fov": 1.7565418004738071
      },
      "linkHotspots": [
        {
          "yaw": 0.4027106736069932,
          "pitch": 0.3846422529694582,
          "rotation": 0,
          "target": "4-descanso"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-habitacin-1",
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
        "yaw": -2.2104185089574457,
        "pitch": 0.3201958294551517,
        "fov": 1.7565418004738071
      },
      "linkHotspots": [
        {
          "yaw": -3.0507730159546504,
          "pitch": 0.3051783546191338,
          "rotation": 0,
          "target": "4-descanso"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-habitacin-2",
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
        "yaw": 0.4164185594460026,
        "pitch": 0.2620956502972902,
        "fov": 1.7565418004738071
      },
      "linkHotspots": [
        {
          "yaw": 1.1325096692308918,
          "pitch": 0.2147599500488031,
          "rotation": 0,
          "target": "4-descanso"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Rhoda",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
