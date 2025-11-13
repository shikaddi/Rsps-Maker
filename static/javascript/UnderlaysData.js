const BRIGHT_TAB = [-16, -8, 0, 8, 16, 24, 32, 40];

const underlays = [
  {
    "id": 0,
    "rgb": 2631712,
    "hex": "#282820",
    "textureId": 2,
    "walkable": true,
    "hsl": {
      "h": 42,
      "s": 28,
      "l": 36
    },
    "hueMultiplier": 8,
    "weightedHue": 1,
    "minimapColor": 10258
  },
  {
    "id": 1,
    "rgb": 12047514,
    "hex": "#b7d49a",
    "textureId": 238,
    "walkable": true,
    "hsl": {
      "h": 64,
      "s": 101,
      "l": 183
    },
    "hueMultiplier": 58,
    "weightedHue": 14,
    "minimapColor": 16603
  },
  {
    "id": 2,
    "rgb": 11116512,
    "hex": "#a99fe0",
    "textureId": 238,
    "walkable": true,
    "hsl": {
      "h": 177,
      "s": 128,
      "l": 191
    },
    "hueMultiplier": 65,
    "weightedHue": 45,
    "minimapColor": 45407
  },
  {
    "id": 3,
    "rgb": 16533930,
    "hex": "#fc49aa",
    "textureId": 238,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 245,
      "l": 162
    },
    "hueMultiplier": 179,
    "weightedHue": -16,
    "minimapColor": -5167
  },
  {
    "id": 4,
    "rgb": 6307904,
    "hex": "#604040",
    "textureId": 152,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 51,
      "l": 80
    },
    "hueMultiplier": 32,
    "weightedHue": 0,
    "minimapColor": 168
  },
  {
    "id": 5,
    "rgb": 3153952,
    "hex": "#302020",
    "textureId": 81,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 51,
      "l": 40
    },
    "hueMultiplier": 16,
    "weightedHue": 0,
    "minimapColor": 148
  },
  {
    "id": 6,
    "rgb": 9463856,
    "hex": "#906830",
    "textureId": 3,
    "walkable": true,
    "hsl": {
      "h": 24,
      "s": 128,
      "l": 96
    },
    "hueMultiplier": 96,
    "weightedHue": 9,
    "minimapColor": 6704
  },
  {
    "id": 7,
    "rgb": 3684400,
    "hex": "#383830",
    "textureId": 241,
    "walkable": true,
    "hsl": {
      "h": 42,
      "s": 19,
      "l": 52
    },
    "hueMultiplier": 8,
    "weightedHue": 1,
    "minimapColor": 10266
  },
  {
    "id": 8,
    "rgb": 8026240,
    "hex": "#7a7880",
    "textureId": 152,
    "walkable": true,
    "hsl": {
      "h": 181,
      "s": 8,
      "l": 124
    },
    "hueMultiplier": 8,
    "weightedHue": 5,
    "minimapColor": 46142
  },
  {
    "id": 9,
    "rgb": 2629656,
    "hex": "#282018",
    "textureId": 160,
    "walkable": true,
    "hsl": {
      "h": 21,
      "s": 64,
      "l": 32
    },
    "hueMultiplier": 16,
    "weightedHue": 1,
    "minimapColor": 5392
  },
  {
    "id": 10,
    "rgb": 5261376,
    "hex": "#504840",
    "textureId": 152,
    "walkable": true,
    "hsl": {
      "h": 21,
      "s": 28,
      "l": 72
    },
    "hueMultiplier": 16,
    "weightedHue": 1,
    "minimapColor": 5156
  },
  {
    "id": 11,
    "rgb": 4735032,
    "hex": "#484038",
    "textureId": 160,
    "walkable": true,
    "hsl": {
      "h": 21,
      "s": 32,
      "l": 64
    },
    "hueMultiplier": 16,
    "weightedHue": 1,
    "minimapColor": 5280
  },
  {
    "id": 12,
    "rgb": 8417352,
    "hex": "#807048",
    "textureId": 66,
    "walkable": true,
    "hsl": {
      "h": 30,
      "s": 71,
      "l": 100
    },
    "hueMultiplier": 56,
    "weightedHue": 6,
    "minimapColor": 7474
  },
  {
    "id": 13,
    "rgb": 5785640,
    "hex": "#584828",
    "textureId": 66,
    "walkable": true,
    "hsl": {
      "h": 28,
      "s": 96,
      "l": 64
    },
    "hueMultiplier": 48,
    "weightedHue": 5,
    "minimapColor": 7584
  },
  {
    "id": 14,
    "rgb": 3684392,
    "hex": "#383828",
    "textureId": 84,
    "walkable": true,
    "hsl": {
      "h": 42,
      "s": 42,
      "l": 48
    },
    "hueMultiplier": 16,
    "weightedHue": 2,
    "minimapColor": 10392
  },
  {
    "id": 15,
    "rgb": 13158630,
    "hex": "#c8c8e6",
    "textureId": 151,
    "walkable": true,
    "hsl": {
      "h": 170,
      "s": 93,
      "l": 215
    },
    "hueMultiplier": 30,
    "weightedHue": 20,
    "minimapColor": 43115
  },
  {
    "id": 16,
    "rgb": 14392,
    "hex": "#003838",
    "textureId": 5,
    "walkable": true,
    "hsl": {
      "h": 128,
      "s": 255,
      "l": 28
    },
    "hueMultiplier": 56,
    "weightedHue": 28,
    "minimapColor": 33806
  },
  {
    "id": 17,
    "rgb": 5127210,
    "hex": "#4e3c2a",
    "textureId": 82,
    "walkable": true,
    "hsl": {
      "h": 21,
      "s": 76,
      "l": 60
    },
    "hueMultiplier": 36,
    "weightedHue": 3,
    "minimapColor": 5406
  },
  {
    "id": 18,
    "rgb": 10514504,
    "hex": "#a07048",
    "textureId": 66,
    "walkable": true,
    "hsl": {
      "h": 19,
      "s": 97,
      "l": 116
    },
    "hueMultiplier": 88,
    "weightedHue": 6,
    "minimapColor": 4538
  },
  {
    "id": 19,
    "rgb": 5793803,
    "hex": "#58680b",
    "textureId": 58,
    "walkable": true,
    "hsl": {
      "h": 50,
      "s": 207,
      "l": 57
    },
    "hueMultiplier": 93,
    "weightedHue": 18,
    "minimapColor": 13084
  },
  {
    "id": 20,
    "rgb": 4202496,
    "hex": "#402000",
    "textureId": 3,
    "walkable": true,
    "hsl": {
      "h": 21,
      "s": 255,
      "l": 32
    },
    "hueMultiplier": 64,
    "weightedHue": 5,
    "minimapColor": 6160
  },
  {
    "id": 21,
    "rgb": 3502602,
    "hex": "#35720a",
    "textureId": 8,
    "walkable": true,
    "hsl": {
      "h": 67,
      "s": 214,
      "l": 62
    },
    "hueMultiplier": 104,
    "weightedHue": 27,
    "minimapColor": 17183
  },
  {
    "id": 22,
    "rgb": 3686959,
    "hex": "#38422f",
    "textureId": 7,
    "walkable": true,
    "hsl": {
      "h": 65,
      "s": 43,
      "l": 56
    },
    "hueMultiplier": 19,
    "weightedHue": 4,
    "minimapColor": 16540
  },
  {
    "id": 23,
    "rgb": 3686959,
    "hex": "#38422f",
    "textureId": 8,
    "walkable": true,
    "hsl": {
      "h": 65,
      "s": 43,
      "l": 56
    },
    "hueMultiplier": 19,
    "weightedHue": 4,
    "minimapColor": 16540
  },
  {
    "id": 24,
    "rgb": 3507722,
    "hex": "#35860a",
    "textureId": 20,
    "walkable": true,
    "hsl": {
      "h": 70,
      "s": 220,
      "l": 72
    },
    "hueMultiplier": 124,
    "weightedHue": 34,
    "minimapColor": 18212
  },
  {
    "id": 25,
    "rgb": 15132395,
    "hex": "#e6e6eb",
    "textureId": 246,
    "walkable": true,
    "hsl": {
      "h": 170,
      "s": 27,
      "l": 232
    },
    "hueMultiplier": 5,
    "weightedHue": 3,
    "minimapColor": 43124
  },
  {
    "id": 26,
    "rgb": 15132395,
    "hex": "#e6e6eb",
    "textureId": 242,
    "walkable": true,
    "hsl": {
      "h": 170,
      "s": 27,
      "l": 232
    },
    "hueMultiplier": 5,
    "weightedHue": 3,
    "minimapColor": 43124
  },
  {
    "id": 27,
    "rgb": 12626024,
    "hex": "#c0a868",
    "textureId": 169,
    "walkable": true,
    "hsl": {
      "h": 31,
      "s": 104,
      "l": 148
    },
    "hueMultiplier": 88,
    "weightedHue": 10,
    "minimapColor": 7626
  },
  {
    "id": 28,
    "rgb": 3685433,
    "hex": "#383c39",
    "textureId": 2,
    "walkable": true,
    "hsl": {
      "h": 96,
      "s": 8,
      "l": 58
    },
    "hueMultiplier": 4,
    "weightedHue": 1,
    "minimapColor": 24605
  },
  {
    "id": 29,
    "rgb": 5003600,
    "hex": "#4c5950",
    "textureId": 167,
    "walkable": true,
    "hsl": {
      "h": 98,
      "s": 20,
      "l": 82
    },
    "hueMultiplier": 12,
    "weightedHue": 4,
    "minimapColor": 24617
  },
  {
    "id": 30,
    "rgb": 6189924,
    "hex": "#5e7364",
    "textureId": 168,
    "walkable": true,
    "hsl": {
      "h": 97,
      "s": 25,
      "l": 104
    },
    "hueMultiplier": 21,
    "weightedHue": 8,
    "minimapColor": 24628
  },
  {
    "id": 31,
    "rgb": 6389353,
    "hex": "#617e69",
    "textureId": 185,
    "walkable": true,
    "hsl": {
      "h": 97,
      "s": 33,
      "l": 111
    },
    "hueMultiplier": 28,
    "weightedHue": 10,
    "minimapColor": 24759
  },
  {
    "id": 32,
    "rgb": 8362630,
    "hex": "#7f9a86",
    "textureId": 66,
    "walkable": true,
    "hsl": {
      "h": 96,
      "s": 29,
      "l": 140
    },
    "hueMultiplier": 27,
    "weightedHue": 10,
    "minimapColor": 24646
  },
  {
    "id": 33,
    "rgb": 9152146,
    "hex": "#8ba692",
    "textureId": 66,
    "walkable": true,
    "hsl": {
      "h": 96,
      "s": 33,
      "l": 152
    },
    "hueMultiplier": 27,
    "weightedHue": 10,
    "minimapColor": 24780
  },
  {
    "id": 34,
    "rgb": 4931092,
    "hex": "#4b3e14",
    "textureId": 197,
    "walkable": true,
    "hsl": {
      "h": 32,
      "s": 148,
      "l": 47
    },
    "hueMultiplier": 55,
    "weightedHue": 7,
    "minimapColor": 8727
  },
  {
    "id": 35,
    "rgb": 1121818,
    "hex": "#111e1a",
    "textureId": 154,
    "walkable": true,
    "hsl": {
      "h": 114,
      "s": 70,
      "l": 23
    },
    "hueMultiplier": 13,
    "weightedHue": 5,
    "minimapColor": 28939
  },
  {
    "id": 36,
    "rgb": 6573598,
    "hex": "#644e1e",
    "textureId": 154,
    "walkable": true,
    "hsl": {
      "h": 29,
      "s": 137,
      "l": 65
    },
    "hueMultiplier": 70,
    "weightedHue": 8,
    "minimapColor": 7712
  },
  {
    "id": 37,
    "rgb": 14474480,
    "hex": "#dcdcf0",
    "textureId": 13,
    "walkable": true,
    "hsl": {
      "h": 170,
      "s": 98,
      "l": 230
    },
    "hueMultiplier": 20,
    "weightedHue": 13,
    "minimapColor": 43123
  },
  {
    "id": 38,
    "rgb": 2829869,
    "hex": "#2b2e2d",
    "textureId": 249,
    "walkable": true,
    "hsl": {
      "h": 113,
      "s": 8,
      "l": 44
    },
    "hueMultiplier": 3,
    "weightedHue": 1,
    "minimapColor": 28694
  },
  {
    "id": 39,
    "rgb": 15132395,
    "hex": "#e6e6eb",
    "textureId": 10,
    "walkable": true,
    "hsl": {
      "h": 170,
      "s": 27,
      "l": 232
    },
    "hueMultiplier": 5,
    "weightedHue": 3,
    "minimapColor": 43124
  },
  {
    "id": 40,
    "rgb": 15132395,
    "hex": "#e6e6eb",
    "textureId": 11,
    "walkable": true,
    "hsl": {
      "h": 170,
      "s": 27,
      "l": 232
    },
    "hueMultiplier": 5,
    "weightedHue": 3,
    "minimapColor": 43124
  },
  {
    "id": 41,
    "rgb": 15132395,
    "hex": "#e6e6eb",
    "textureId": 14,
    "walkable": true,
    "hsl": {
      "h": 170,
      "s": 27,
      "l": 232
    },
    "hueMultiplier": 5,
    "weightedHue": 3,
    "minimapColor": 43124
  },
  {
    "id": 42,
    "rgb": 15132395,
    "hex": "#e6e6eb",
    "textureId": 12,
    "walkable": true,
    "hsl": {
      "h": 170,
      "s": 27,
      "l": 232
    },
    "hueMultiplier": 5,
    "weightedHue": 3,
    "minimapColor": 43124
  },
  {
    "id": 43,
    "rgb": 13351542,
    "hex": "#cbba76",
    "textureId": 45,
    "walkable": true,
    "hsl": {
      "h": 34,
      "s": 113,
      "l": 160
    },
    "hueMultiplier": 85,
    "weightedHue": 11,
    "minimapColor": 8656
  },
  {
    "id": 44,
    "rgb": 4473924,
    "hex": "#444444",
    "textureId": 0,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 0,
      "l": 68
    },
    "hueMultiplier": 1,
    "weightedHue": 0,
    "minimapColor": 34
  },
  {
    "id": 45,
    "rgb": 13752039,
    "hex": "#d1d6e7",
    "textureId": 239,
    "walkable": true,
    "hsl": {
      "h": 160,
      "s": 78,
      "l": 220
    },
    "hueMultiplier": 22,
    "weightedHue": 13,
    "minimapColor": 41070
  },
  {
    "id": 46,
    "rgb": 15324807,
    "hex": "#e9d687",
    "textureId": 245,
    "walkable": true,
    "hsl": {
      "h": 34,
      "s": 174,
      "l": 184
    },
    "hueMultiplier": 98,
    "weightedHue": 13,
    "minimapColor": 8540
  },
  {
    "id": 47,
    "rgb": 3502602,
    "hex": "#35720a",
    "textureId": 7,
    "walkable": true,
    "hsl": {
      "h": 67,
      "s": 214,
      "l": 62
    },
    "hueMultiplier": 104,
    "weightedHue": 27,
    "minimapColor": 17183
  },
  {
    "id": 48,
    "rgb": 5793803,
    "hex": "#58680b",
    "textureId": 239,
    "walkable": true,
    "hsl": {
      "h": 50,
      "s": 207,
      "l": 57
    },
    "hueMultiplier": 93,
    "weightedHue": 18,
    "minimapColor": 13084
  },
  {
    "id": 49,
    "rgb": 7890955,
    "hex": "#78680b",
    "textureId": 56,
    "walkable": true,
    "hsl": {
      "h": 36,
      "s": 213,
      "l": 65
    },
    "hueMultiplier": 109,
    "weightedHue": 15,
    "minimapColor": 10016
  },
  {
    "id": 50,
    "rgb": 7121936,
    "hex": "#6cac10",
    "textureId": 20,
    "walkable": true,
    "hsl": {
      "h": 60,
      "s": 212,
      "l": 94
    },
    "hueMultiplier": 156,
    "weightedHue": 36,
    "minimapColor": 16175
  },
  {
    "id": 51,
    "rgb": 8492337,
    "hex": "#819531",
    "textureId": 8,
    "walkable": true,
    "hsl": {
      "h": 51,
      "s": 129,
      "l": 99
    },
    "hueMultiplier": 100,
    "weightedHue": 20,
    "minimapColor": 12849
  },
  {
    "id": 52,
    "rgb": 5591562,
    "hex": "#55520a",
    "textureId": 235,
    "walkable": true,
    "hsl": {
      "h": 40,
      "s": 202,
      "l": 47
    },
    "hueMultiplier": 75,
    "weightedHue": 12,
    "minimapColor": 11031
  },
  {
    "id": 53,
    "rgb": 1202241,
    "hex": "#125841",
    "textureId": 235,
    "walkable": true,
    "hsl": {
      "h": 113,
      "s": 169,
      "l": 53
    },
    "hueMultiplier": 70,
    "weightedHue": 31,
    "minimapColor": 29338
  },
  {
    "id": 54,
    "rgb": 7763574,
    "hex": "#767676",
    "textureId": 152,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 0,
      "l": 118
    },
    "hueMultiplier": 1,
    "weightedHue": 0,
    "minimapColor": 59
  },
  {
    "id": 55,
    "rgb": 5066061,
    "hex": "#4d4d4d",
    "textureId": 241,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 0,
      "l": 77
    },
    "hueMultiplier": 1,
    "weightedHue": 0,
    "minimapColor": 38
  },
  {
    "id": 56,
    "rgb": 3026478,
    "hex": "#2e2e2e",
    "textureId": 129,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 0,
      "l": 46
    },
    "hueMultiplier": 1,
    "weightedHue": 0,
    "minimapColor": 23
  },
  {
    "id": 57,
    "rgb": 15132395,
    "hex": "#e6e6eb",
    "textureId": 238,
    "walkable": true,
    "hsl": {
      "h": 170,
      "s": 27,
      "l": 232
    },
    "hueMultiplier": 5,
    "weightedHue": 3,
    "minimapColor": 43124
  },
  {
    "id": 58,
    "rgb": 14474480,
    "hex": "#dcdcf0",
    "textureId": 151,
    "walkable": true,
    "hsl": {
      "h": 170,
      "s": 98,
      "l": 230
    },
    "hueMultiplier": 20,
    "weightedHue": 13,
    "minimapColor": 43123
  },
  {
    "id": 59,
    "rgb": 13756374,
    "hex": "#d1e7d6",
    "textureId": 151,
    "walkable": true,
    "hsl": {
      "h": 95,
      "s": 78,
      "l": 220
    },
    "hueMultiplier": 22,
    "weightedHue": 8,
    "minimapColor": 23662
  },
  {
    "id": 60,
    "rgb": 11639357,
    "hex": "#b19a3d",
    "textureId": 128,
    "walkable": true,
    "hsl": {
      "h": 34,
      "s": 124,
      "l": 119
    },
    "hueMultiplier": 116,
    "weightedHue": 15,
    "minimapColor": 8635
  },
  {
    "id": 61,
    "rgb": 13680756,
    "hex": "#d0c074",
    "textureId": 128,
    "walkable": true,
    "hsl": {
      "h": 35,
      "s": 125,
      "l": 162
    },
    "hueMultiplier": 92,
    "weightedHue": 12,
    "minimapColor": 8657
  },
  {
    "id": 62,
    "rgb": 4008715,
    "hex": "#3d2b0b",
    "textureId": 181,
    "walkable": true,
    "hsl": {
      "h": 27,
      "s": 177,
      "l": 36
    },
    "hueMultiplier": 50,
    "weightedHue": 5,
    "minimapColor": 6802
  },
  {
    "id": 63,
    "rgb": 6573598,
    "hex": "#644e1e",
    "textureId": 154,
    "walkable": true,
    "hsl": {
      "h": 29,
      "s": 137,
      "l": 65
    },
    "hueMultiplier": 70,
    "weightedHue": 8,
    "minimapColor": 7712
  },
  {
    "id": 64,
    "rgb": 6638859,
    "hex": "#654d0b",
    "textureId": 254,
    "walkable": true,
    "hsl": {
      "h": 31,
      "s": 205,
      "l": 56
    },
    "hueMultiplier": 90,
    "weightedHue": 11,
    "minimapColor": 7964
  },
  {
    "id": 65,
    "rgb": 6697728,
    "hex": "#663300",
    "textureId": 248,
    "walkable": true,
    "hsl": {
      "h": 21,
      "s": 255,
      "l": 51
    },
    "hueMultiplier": 102,
    "weightedHue": 8,
    "minimapColor": 6169
  },
  {
    "id": 66,
    "rgb": 6702097,
    "hex": "#664411",
    "textureId": 241,
    "walkable": true,
    "hsl": {
      "h": 25,
      "s": 182,
      "l": 59
    },
    "hueMultiplier": 85,
    "weightedHue": 8,
    "minimapColor": 6813
  },
  {
    "id": 67,
    "rgb": 13351542,
    "hex": "#cbba76",
    "textureId": 240,
    "walkable": true,
    "hsl": {
      "h": 34,
      "s": 113,
      "l": 160
    },
    "hueMultiplier": 85,
    "weightedHue": 11,
    "minimapColor": 8656
  },
  {
    "id": 68,
    "rgb": 6573598,
    "hex": "#644e1e",
    "textureId": 154,
    "walkable": true,
    "hsl": {
      "h": 29,
      "s": 137,
      "l": 65
    },
    "hueMultiplier": 70,
    "weightedHue": 8,
    "minimapColor": 7712
  },
  {
    "id": 69,
    "rgb": 6638859,
    "hex": "#654d0b",
    "textureId": 154,
    "walkable": true,
    "hsl": {
      "h": 31,
      "s": 205,
      "l": 56
    },
    "hueMultiplier": 90,
    "weightedHue": 11,
    "minimapColor": 7964
  },
  {
    "id": 70,
    "rgb": 6697728,
    "hex": "#663300",
    "textureId": 154,
    "walkable": true,
    "hsl": {
      "h": 21,
      "s": 255,
      "l": 51
    },
    "hueMultiplier": 102,
    "weightedHue": 8,
    "minimapColor": 6169
  },
  {
    "id": 71,
    "rgb": 197379,
    "hex": "#030303",
    "textureId": 9,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 0,
      "l": 3
    },
    "hueMultiplier": 1,
    "weightedHue": 0,
    "minimapColor": 1
  },
  {
    "id": 72,
    "rgb": 5601177,
    "hex": "#557799",
    "textureId": 152,
    "walkable": true,
    "hsl": {
      "h": 149,
      "s": 73,
      "l": 119
    },
    "hueMultiplier": 68,
    "weightedHue": 39,
    "minimapColor": 38203
  },
  {
    "id": 73,
    "rgb": 10048870,
    "hex": "#995566",
    "textureId": 95,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 73,
      "l": 119
    },
    "hueMultiplier": 68,
    "weightedHue": -2,
    "minimapColor": -2757
  },
  {
    "id": 74,
    "rgb": 5601177,
    "hex": "#557799",
    "textureId": 7,
    "walkable": true,
    "hsl": {
      "h": 149,
      "s": 73,
      "l": 119
    },
    "hueMultiplier": 68,
    "weightedHue": 39,
    "minimapColor": 38203
  },
  {
    "id": 75,
    "rgb": 14526173,
    "hex": "#dda6dd",
    "textureId": 245,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 112,
      "l": 193
    },
    "hueMultiplier": 55,
    "weightedHue": -9,
    "minimapColor": -11168
  },
  {
    "id": 76,
    "rgb": 4537633,
    "hex": "#453d21",
    "textureId": 107,
    "walkable": true,
    "hsl": {
      "h": 33,
      "s": 90,
      "l": 51
    },
    "hueMultiplier": 36,
    "weightedHue": 4,
    "minimapColor": 8473
  },
  {
    "id": 77,
    "rgb": 14269331,
    "hex": "#d9bb93",
    "textureId": 58,
    "walkable": true,
    "hsl": {
      "h": 24,
      "s": 121,
      "l": 182
    },
    "hueMultiplier": 70,
    "weightedHue": 6,
    "minimapColor": 6363
  },
  {
    "id": 78,
    "rgb": 6702097,
    "hex": "#664411",
    "textureId": 88,
    "walkable": true,
    "hsl": {
      "h": 25,
      "s": 182,
      "l": 59
    },
    "hueMultiplier": 85,
    "weightedHue": 8,
    "minimapColor": 6813
  },
  {
    "id": 79,
    "rgb": 4008715,
    "hex": "#3d2b0b",
    "textureId": 3,
    "walkable": true,
    "hsl": {
      "h": 27,
      "s": 177,
      "l": 36
    },
    "hueMultiplier": 50,
    "weightedHue": 5,
    "minimapColor": 6802
  },
  {
    "id": 80,
    "rgb": 4008715,
    "hex": "#3d2b0b",
    "textureId": 154,
    "walkable": true,
    "hsl": {
      "h": 27,
      "s": 177,
      "l": 36
    },
    "hueMultiplier": 50,
    "weightedHue": 5,
    "minimapColor": 6802
  },
  {
    "id": 81,
    "rgb": 4013373,
    "hex": "#3d3d3d",
    "textureId": 92,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 0,
      "l": 61
    },
    "hueMultiplier": 1,
    "weightedHue": 0,
    "minimapColor": 30
  },
  {
    "id": 82,
    "rgb": 4473924,
    "hex": "#444444",
    "textureId": 88,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 0,
      "l": 68
    },
    "hueMultiplier": 1,
    "weightedHue": 0,
    "minimapColor": 34
  },
  {
    "id": 83,
    "rgb": 8550724,
    "hex": "#827944",
    "textureId": 3,
    "walkable": true,
    "hsl": {
      "h": 36,
      "s": 80,
      "l": 99
    },
    "hueMultiplier": 62,
    "weightedHue": 8,
    "minimapColor": 9521
  },
  {
    "id": 84,
    "rgb": 3502602,
    "hex": "#35720a",
    "textureId": 161,
    "walkable": true,
    "hsl": {
      "h": 67,
      "s": 214,
      "l": 62
    },
    "hueMultiplier": 104,
    "weightedHue": 27,
    "minimapColor": 17183
  },
  {
    "id": 85,
    "rgb": 5793803,
    "hex": "#58680b",
    "textureId": 161,
    "walkable": true,
    "hsl": {
      "h": 50,
      "s": 207,
      "l": 57
    },
    "hueMultiplier": 93,
    "weightedHue": 18,
    "minimapColor": 13084
  },
  {
    "id": 86,
    "rgb": 3692079,
    "hex": "#38562f",
    "textureId": 161,
    "walkable": true,
    "hsl": {
      "h": 75,
      "s": 75,
      "l": 66
    },
    "hueMultiplier": 39,
    "weightedHue": 11,
    "minimapColor": 18721
  },
  {
    "id": 87,
    "rgb": 5200214,
    "hex": "#4f5956",
    "textureId": 144,
    "walkable": true,
    "hsl": {
      "h": 115,
      "s": 15,
      "l": 84
    },
    "hueMultiplier": 10,
    "weightedHue": 4,
    "minimapColor": 28714
  },
  {
    "id": 88,
    "rgb": 6714223,
    "hex": "#66736f",
    "textureId": 152,
    "walkable": true,
    "hsl": {
      "h": 114,
      "s": 15,
      "l": 108
    },
    "hueMultiplier": 13,
    "weightedHue": 5,
    "minimapColor": 28726
  },
  {
    "id": 89,
    "rgb": 4605502,
    "hex": "#46463e",
    "textureId": 144,
    "walkable": true,
    "hsl": {
      "h": 42,
      "s": 15,
      "l": 66
    },
    "hueMultiplier": 8,
    "weightedHue": 1,
    "minimapColor": 10273
  },
  {
    "id": 90,
    "rgb": 4605502,
    "hex": "#46463e",
    "textureId": 152,
    "walkable": true,
    "hsl": {
      "h": 42,
      "s": 15,
      "l": 66
    },
    "hueMultiplier": 8,
    "weightedHue": 1,
    "minimapColor": 10273
  },
  {
    "id": 91,
    "rgb": 6050884,
    "hex": "#5c5444",
    "textureId": 167,
    "walkable": true,
    "hsl": {
      "h": 28,
      "s": 38,
      "l": 80
    },
    "hueMultiplier": 24,
    "weightedHue": 2,
    "minimapColor": 7336
  },
  {
    "id": 92,
    "rgb": 3692079,
    "hex": "#38562f",
    "textureId": 20,
    "walkable": true,
    "hsl": {
      "h": 75,
      "s": 75,
      "l": 66
    },
    "hueMultiplier": 39,
    "weightedHue": 11,
    "minimapColor": 18721
  },
  {
    "id": 93,
    "rgb": 4603956,
    "hex": "#464034",
    "textureId": 185,
    "walkable": true,
    "hsl": {
      "h": 28,
      "s": 37,
      "l": 61
    },
    "hueMultiplier": 18,
    "weightedHue": 2,
    "minimapColor": 7326
  },
  {
    "id": 94,
    "rgb": 4090261,
    "hex": "#3e6995",
    "textureId": 152,
    "walkable": true,
    "hsl": {
      "h": 149,
      "s": 105,
      "l": 105
    },
    "hueMultiplier": 87,
    "weightedHue": 50,
    "minimapColor": 38324
  },
  {
    "id": 95,
    "rgb": 4931092,
    "hex": "#4b3e14",
    "textureId": 3,
    "walkable": true,
    "hsl": {
      "h": 32,
      "s": 148,
      "l": 47
    },
    "hueMultiplier": 55,
    "weightedHue": 7,
    "minimapColor": 8727
  },
  {
    "id": 96,
    "rgb": 6050876,
    "hex": "#5c543c",
    "textureId": 247,
    "walkable": true,
    "hsl": {
      "h": 32,
      "s": 53,
      "l": 76
    },
    "hueMultiplier": 32,
    "weightedHue": 4,
    "minimapColor": 8358
  },
  {
    "id": 97,
    "rgb": 3091231,
    "hex": "#2f2b1f",
    "textureId": 6,
    "walkable": true,
    "hsl": {
      "h": 32,
      "s": 52,
      "l": 39
    },
    "hueMultiplier": 16,
    "weightedHue": 2,
    "minimapColor": 8339
  },
  {
    "id": 98,
    "rgb": 2583847,
    "hex": "#276d27",
    "textureId": 7,
    "walkable": true,
    "hsl": {
      "h": 85,
      "s": 121,
      "l": 74
    },
    "hueMultiplier": 70,
    "weightedHue": 23,
    "minimapColor": 21925
  },
  {
    "id": 99,
    "rgb": 3760661,
    "hex": "#396215",
    "textureId": 8,
    "walkable": true,
    "hsl": {
      "h": 65,
      "s": 165,
      "l": 59
    },
    "hueMultiplier": 77,
    "weightedHue": 19,
    "minimapColor": 17053
  },
  {
    "id": 100,
    "rgb": 2763301,
    "hex": "#2a2a25",
    "textureId": 152,
    "walkable": true,
    "hsl": {
      "h": 42,
      "s": 16,
      "l": 39
    },
    "hueMultiplier": 5,
    "weightedHue": 0,
    "minimapColor": 10259
  },
  {
    "id": 101,
    "rgb": 2631712,
    "hex": "#282820",
    "textureId": 2,
    "walkable": true,
    "hsl": {
      "h": 42,
      "s": 28,
      "l": 36
    },
    "hueMultiplier": 8,
    "weightedHue": 1,
    "minimapColor": 10258
  },
  {
    "id": 102,
    "rgb": 1121818,
    "hex": "#111e1a",
    "textureId": 239,
    "walkable": true,
    "hsl": {
      "h": 114,
      "s": 70,
      "l": 23
    },
    "hueMultiplier": 13,
    "weightedHue": 5,
    "minimapColor": 28939
  },
  {
    "id": 103,
    "rgb": 12047514,
    "hex": "#b7d49a",
    "textureId": 238,
    "walkable": true,
    "hsl": {
      "h": 64,
      "s": 101,
      "l": 183
    },
    "hueMultiplier": 58,
    "weightedHue": 14,
    "minimapColor": 16603
  },
  {
    "id": 104,
    "rgb": 11116512,
    "hex": "#a99fe0",
    "textureId": 238,
    "walkable": true,
    "hsl": {
      "h": 177,
      "s": 128,
      "l": 191
    },
    "hueMultiplier": 65,
    "weightedHue": 45,
    "minimapColor": 45407
  },
  {
    "id": 105,
    "rgb": 16533930,
    "hex": "#fc49aa",
    "textureId": 238,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 245,
      "l": 162
    },
    "hueMultiplier": 179,
    "weightedHue": -16,
    "minimapColor": -5167
  },
  {
    "id": 106,
    "rgb": 6307904,
    "hex": "#604040",
    "textureId": 152,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 51,
      "l": 80
    },
    "hueMultiplier": 32,
    "weightedHue": 0,
    "minimapColor": 168
  },
  {
    "id": 107,
    "rgb": 3153952,
    "hex": "#302020",
    "textureId": 81,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 51,
      "l": 40
    },
    "hueMultiplier": 16,
    "weightedHue": 0,
    "minimapColor": 148
  },
  {
    "id": 108,
    "rgb": 9463856,
    "hex": "#906830",
    "textureId": 3,
    "walkable": true,
    "hsl": {
      "h": 24,
      "s": 128,
      "l": 96
    },
    "hueMultiplier": 96,
    "weightedHue": 9,
    "minimapColor": 6704
  },
  {
    "id": 109,
    "rgb": 3684400,
    "hex": "#383830",
    "textureId": 241,
    "walkable": true,
    "hsl": {
      "h": 42,
      "s": 19,
      "l": 52
    },
    "hueMultiplier": 8,
    "weightedHue": 1,
    "minimapColor": 10266
  },
  {
    "id": 110,
    "rgb": 6710886,
    "hex": "#666666",
    "textureId": 81,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 0,
      "l": 102
    },
    "hueMultiplier": 1,
    "weightedHue": 0,
    "minimapColor": 51
  },
  {
    "id": 111,
    "rgb": 3355443,
    "hex": "#333333",
    "textureId": 82,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 0,
      "l": 51
    },
    "hueMultiplier": 1,
    "weightedHue": 0,
    "minimapColor": 25
  },
  {
    "id": 112,
    "rgb": 2829869,
    "hex": "#2b2e2d",
    "textureId": 152,
    "walkable": true,
    "hsl": {
      "h": 113,
      "s": 8,
      "l": 44
    },
    "hueMultiplier": 3,
    "weightedHue": 1,
    "minimapColor": 28694
  },
  {
    "id": 113,
    "rgb": 8026240,
    "hex": "#7a7880",
    "textureId": 152,
    "walkable": true,
    "hsl": {
      "h": 181,
      "s": 8,
      "l": 124
    },
    "hueMultiplier": 8,
    "weightedHue": 5,
    "minimapColor": 46142
  },
  {
    "id": 114,
    "rgb": 3362846,
    "hex": "#33501e",
    "textureId": 239,
    "walkable": true,
    "hsl": {
      "h": 67,
      "s": 116,
      "l": 55
    },
    "hueMultiplier": 50,
    "weightedHue": 13,
    "minimapColor": 16795
  },
  {
    "id": 115,
    "rgb": 7411036,
    "hex": "#71155c",
    "textureId": 152,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 175,
      "l": 67
    },
    "hueMultiplier": 92,
    "weightedHue": -11,
    "minimapColor": -7519
  },
  {
    "id": 116,
    "rgb": 2629656,
    "hex": "#282018",
    "textureId": 160,
    "walkable": true,
    "hsl": {
      "h": 21,
      "s": 64,
      "l": 32
    },
    "hueMultiplier": 16,
    "weightedHue": 1,
    "minimapColor": 5392
  },
  {
    "id": 117,
    "rgb": 7676450,
    "hex": "#752222",
    "textureId": 181,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 140,
      "l": 75
    },
    "hueMultiplier": 83,
    "weightedHue": 0,
    "minimapColor": 549
  },
  {
    "id": 118,
    "rgb": 5261376,
    "hex": "#504840",
    "textureId": 152,
    "walkable": true,
    "hsl": {
      "h": 21,
      "s": 28,
      "l": 72
    },
    "hueMultiplier": 16,
    "weightedHue": 1,
    "minimapColor": 5156
  },
  {
    "id": 119,
    "rgb": 4735032,
    "hex": "#484038",
    "textureId": 160,
    "walkable": true,
    "hsl": {
      "h": 21,
      "s": 32,
      "l": 64
    },
    "hueMultiplier": 16,
    "weightedHue": 1,
    "minimapColor": 5280
  },
  {
    "id": 120,
    "rgb": 6303784,
    "hex": "#603028",
    "textureId": 161,
    "walkable": true,
    "hsl": {
      "h": 6,
      "s": 105,
      "l": 68
    },
    "hueMultiplier": 56,
    "weightedHue": 1,
    "minimapColor": 1442
  },
  {
    "id": 121,
    "rgb": 3145728,
    "hex": "#300000",
    "textureId": 161,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 255,
      "l": 24
    },
    "hueMultiplier": 48,
    "weightedHue": 0,
    "minimapColor": 1036
  },
  {
    "id": 122,
    "rgb": 8417352,
    "hex": "#807048",
    "textureId": 66,
    "walkable": true,
    "hsl": {
      "h": 30,
      "s": 71,
      "l": 100
    },
    "hueMultiplier": 56,
    "weightedHue": 6,
    "minimapColor": 7474
  },
  {
    "id": 123,
    "rgb": 12103832,
    "hex": "#b8b098",
    "textureId": 251,
    "walkable": true,
    "hsl": {
      "h": 32,
      "s": 46,
      "l": 168
    },
    "hueMultiplier": 32,
    "weightedHue": 4,
    "minimapColor": 8404
  },
  {
    "id": 124,
    "rgb": 10854025,
    "hex": "#a59e89",
    "textureId": 88,
    "walkable": true,
    "hsl": {
      "h": 32,
      "s": 34,
      "l": 151
    },
    "hueMultiplier": 28,
    "weightedHue": 3,
    "minimapColor": 8395
  },
  {
    "id": 125,
    "rgb": 10720843,
    "hex": "#a3964b",
    "textureId": 100,
    "walkable": true,
    "hsl": {
      "h": 36,
      "s": 94,
      "l": 119
    },
    "hueMultiplier": 88,
    "weightedHue": 12,
    "minimapColor": 9531
  },
  {
    "id": 126,
    "rgb": 5785640,
    "hex": "#584828",
    "textureId": 66,
    "walkable": true,
    "hsl": {
      "h": 28,
      "s": 96,
      "l": 64
    },
    "hueMultiplier": 48,
    "weightedHue": 5,
    "minimapColor": 7584
  },
  {
    "id": 127,
    "rgb": 3684392,
    "hex": "#383828",
    "textureId": 84,
    "walkable": true,
    "hsl": {
      "h": 42,
      "s": 42,
      "l": 48
    },
    "hueMultiplier": 16,
    "weightedHue": 2,
    "minimapColor": 10392
  },
  {
    "id": 128,
    "rgb": 8550724,
    "hex": "#827944",
    "textureId": 92,
    "walkable": true,
    "hsl": {
      "h": 36,
      "s": 80,
      "l": 99
    },
    "hueMultiplier": 62,
    "weightedHue": 8,
    "minimapColor": 9521
  },
  {
    "id": 129,
    "rgb": 13158630,
    "hex": "#c8c8e6",
    "textureId": 151,
    "walkable": true,
    "hsl": {
      "h": 170,
      "s": 93,
      "l": 215
    },
    "hueMultiplier": 30,
    "weightedHue": 20,
    "minimapColor": 43115
  },
  {
    "id": 130,
    "rgb": 14392,
    "hex": "#003838",
    "textureId": 5,
    "walkable": true,
    "hsl": {
      "h": 128,
      "s": 255,
      "l": 28
    },
    "hueMultiplier": 56,
    "weightedHue": 28,
    "minimapColor": 33806
  },
  {
    "id": 131,
    "rgb": 5127210,
    "hex": "#4e3c2a",
    "textureId": 82,
    "walkable": true,
    "hsl": {
      "h": 21,
      "s": 76,
      "l": 60
    },
    "hueMultiplier": 36,
    "weightedHue": 3,
    "minimapColor": 5406
  },
  {
    "id": 132,
    "rgb": 10514504,
    "hex": "#a07048",
    "textureId": 66,
    "walkable": true,
    "hsl": {
      "h": 19,
      "s": 97,
      "l": 116
    },
    "hueMultiplier": 88,
    "weightedHue": 6,
    "minimapColor": 4538
  },
  {
    "id": 133,
    "rgb": 5793803,
    "hex": "#58680b",
    "textureId": 58,
    "walkable": true,
    "hsl": {
      "h": 50,
      "s": 207,
      "l": 57
    },
    "hueMultiplier": 93,
    "weightedHue": 18,
    "minimapColor": 13084
  },
  {
    "id": 134,
    "rgb": 4202496,
    "hex": "#402000",
    "textureId": 3,
    "walkable": true,
    "hsl": {
      "h": 21,
      "s": 255,
      "l": 32
    },
    "hueMultiplier": 64,
    "weightedHue": 5,
    "minimapColor": 6160
  },
  {
    "id": 135,
    "rgb": 3502602,
    "hex": "#35720a",
    "textureId": 8,
    "walkable": true,
    "hsl": {
      "h": 67,
      "s": 214,
      "l": 62
    },
    "hueMultiplier": 104,
    "weightedHue": 27,
    "minimapColor": 17183
  },
  {
    "id": 136,
    "rgb": 3686959,
    "hex": "#38422f",
    "textureId": 7,
    "walkable": true,
    "hsl": {
      "h": 65,
      "s": 43,
      "l": 56
    },
    "hueMultiplier": 19,
    "weightedHue": 4,
    "minimapColor": 16540
  },
  {
    "id": 137,
    "rgb": 12615752,
    "hex": "#c08048",
    "textureId": 92,
    "walkable": true,
    "hsl": {
      "h": 19,
      "s": 123,
      "l": 132
    },
    "hueMultiplier": 120,
    "weightedHue": 9,
    "minimapColor": 4546
  },
  {
    "id": 138,
    "rgb": 65793,
    "hex": "#010101",
    "textureId": 160,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 0,
      "l": 1
    },
    "hueMultiplier": 1,
    "weightedHue": 0,
    "minimapColor": 0
  },
  {
    "id": 139,
    "rgb": 11051160,
    "hex": "#a8a098",
    "textureId": 92,
    "walkable": true,
    "hsl": {
      "h": 21,
      "s": 21,
      "l": 160
    },
    "hueMultiplier": 16,
    "weightedHue": 1,
    "minimapColor": 5200
  },
  {
    "id": 140,
    "rgb": 3942435,
    "hex": "#3c2823",
    "textureId": 113,
    "walkable": true,
    "hsl": {
      "h": 8,
      "s": 67,
      "l": 47
    },
    "hueMultiplier": 25,
    "weightedHue": 0,
    "minimapColor": 2327
  },
  {
    "id": 141,
    "rgb": 14526173,
    "hex": "#dda6dd",
    "textureId": 58,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 112,
      "l": 193
    },
    "hueMultiplier": 55,
    "weightedHue": -9,
    "minimapColor": -11168
  },
  {
    "id": 142,
    "rgb": 5284024,
    "hex": "#50a0b8",
    "textureId": 8,
    "walkable": true,
    "hsl": {
      "h": 137,
      "s": 107,
      "l": 132
    },
    "hueMultiplier": 104,
    "weightedHue": 56,
    "minimapColor": 35266
  },
  {
    "id": 143,
    "rgb": 22632,
    "hex": "#005868",
    "textureId": 7,
    "walkable": true,
    "hsl": {
      "h": 134,
      "s": 255,
      "l": 52
    },
    "hueMultiplier": 104,
    "weightedHue": 54,
    "minimapColor": 34842
  },
  {
    "id": 144,
    "rgb": 4210752,
    "hex": "#404040",
    "textureId": 168,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 0,
      "l": 64
    },
    "hueMultiplier": 1,
    "weightedHue": 0,
    "minimapColor": 32
  },
  {
    "id": 145,
    "rgb": 3684408,
    "hex": "#383838",
    "textureId": 185,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 0,
      "l": 56
    },
    "hueMultiplier": 1,
    "weightedHue": 0,
    "minimapColor": 28
  },
  {
    "id": 146,
    "rgb": 3158064,
    "hex": "#303030",
    "textureId": 5,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 0,
      "l": 48
    },
    "hueMultiplier": 1,
    "weightedHue": 0,
    "minimapColor": 24
  },
  {
    "id": 147,
    "rgb": 2631720,
    "hex": "#282828",
    "textureId": 167,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 0,
      "l": 40
    },
    "hueMultiplier": 1,
    "weightedHue": 0,
    "minimapColor": 20
  },
  {
    "id": 148,
    "rgb": 2105376,
    "hex": "#202020",
    "textureId": 2,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 0,
      "l": 32
    },
    "hueMultiplier": 1,
    "weightedHue": 0,
    "minimapColor": 16
  },
  {
    "id": 149,
    "rgb": 1579032,
    "hex": "#181818",
    "textureId": 245,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 0,
      "l": 24
    },
    "hueMultiplier": 1,
    "weightedHue": 0,
    "minimapColor": 12
  }
];

const overlays = [
  {
    "id": 0,
    "rgb": 2631719,
    "hex": "#282827",
    "textureId": 408,
    "walkable": true,
    "hsl": {
      "h": 42,
      "s": 3,
      "l": 39
    },
    "hueMultiplier": 0,
    "weightedHue": 1,
    "minimapColor": 10259
  },
  {
    "id": 1,
    "rgb": 4473924,
    "hex": "#444444",
    "textureId": 501,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 0,
      "l": 68
    },
    "hueMultiplier": 0,
    "weightedHue": 1,
    "minimapColor": 34
  },
  {
    "id": 2,
    "rgb": 6710886,
    "hex": "#666666",
    "textureId": 408,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 0,
      "l": 102
    },
    "hueMultiplier": 0,
    "weightedHue": 1,
    "minimapColor": 51
  },
  {
    "id": 3,
    "rgb": 8947848,
    "hex": "#888888",
    "textureId": 501,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 0,
      "l": 136
    },
    "hueMultiplier": 0,
    "weightedHue": 1,
    "minimapColor": 68
  },
  {
    "id": 4,
    "rgb": 5979170,
    "hex": "#5B3C22",
    "textureId": 595,
    "walkable": true,
    "hsl": {
      "h": 19,
      "s": 116,
      "l": 62
    },
    "hueMultiplier": 4,
    "weightedHue": 57,
    "minimapColor": 4511
  },
  {
    "id": 5,
    "rgb": 7509687,
    "hex": "#7296B7",
    "textureId": 24,
    "walkable": true,
    "hsl": {
      "h": 148,
      "s": 82,
      "l": 148
    },
    "hueMultiplier": 40,
    "weightedHue": 69,
    "minimapColor": 38218
  },
  {
    "id": 6,
    "rgb": 0,
    "hex": "#000000",
    "textureId": 137,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 0,
      "l": 0
    },
    "hueMultiplier": 0,
    "weightedHue": 1,
    "minimapColor": 0
  },
  {
    "id": 7,
    "rgb": 5987163,
    "hex": "#5B5B5B",
    "textureId": 615,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 0,
      "l": 91
    },
    "hueMultiplier": 0,
    "weightedHue": 1,
    "minimapColor": 45
  },
  {
    "id": 8,
    "rgb": 16777205,
    "hex": "#FFFFF5",
    "textureId": 629,
    "walkable": true,
    "hsl": {
      "h": 42,
      "s": 213,
      "l": 250
    },
    "hueMultiplier": 1,
    "weightedHue": 10,
    "minimapColor": 10365
  },
  {
    "id": 9,
    "rgb": 5263440,
    "hex": "#505050",
    "textureId": 499,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 0,
      "l": 80
    },
    "hueMultiplier": 0,
    "weightedHue": 1,
    "minimapColor": 40
  },
  {
    "id": 10,
    "rgb": 2236962,
    "hex": "#222222",
    "textureId": 616,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 0,
      "l": 34
    },
    "hueMultiplier": 0,
    "weightedHue": 1,
    "minimapColor": 17
  },
  {
    "id": 11,
    "rgb": 6708568,
    "hex": "#665D58",
    "textureId": 505,
    "walkable": true,
    "hsl": {
      "h": 15,
      "s": 18,
      "l": 95
    },
    "hueMultiplier": 0,
    "weightedHue": 13,
    "minimapColor": 3119
  },
  {
    "id": 12,
    "rgb": 10040115,
    "hex": "#993333",
    "textureId": 301,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 128,
      "l": 102
    },
    "hueMultiplier": 0,
    "weightedHue": 102,
    "minimapColor": 563
  },
  {
    "id": 13,
    "rgb": 4008715,
    "hex": "#3D2B0B",
    "textureId": 602,
    "walkable": true,
    "hsl": {
      "h": 27,
      "s": 177,
      "l": 36
    },
    "hueMultiplier": 5,
    "weightedHue": 50,
    "minimapColor": 6802
  },
  {
    "id": 14,
    "rgb": 4008715,
    "hex": "#3D2B0B",
    "textureId": 154,
    "walkable": true,
    "hsl": {
      "h": 27,
      "s": 177,
      "l": 36
    },
    "hueMultiplier": 5,
    "weightedHue": 50,
    "minimapColor": 6802
  },
  {
    "id": 15,
    "rgb": 6697728,
    "hex": "#663300",
    "textureId": 513,
    "walkable": true,
    "hsl": {
      "h": 21,
      "s": 255,
      "l": 51
    },
    "hueMultiplier": 8,
    "weightedHue": 102,
    "minimapColor": 6041
  },
  {
    "id": 16,
    "rgb": 6697728,
    "hex": "#663300",
    "textureId": 513,
    "walkable": true,
    "hsl": {
      "h": 21,
      "s": 255,
      "l": 51
    },
    "hueMultiplier": 8,
    "weightedHue": 102,
    "minimapColor": 6041
  },
  {
    "id": 17,
    "rgb": 204,
    "hex": "#0000CC",
    "textureId": 43,
    "walkable": true,
    "hsl": {
      "h": 170,
      "s": 255,
      "l": 102
    },
    "hueMultiplier": 136,
    "weightedHue": 204,
    "minimapColor": 43955
  },
  {
    "id": 18,
    "rgb": 0,
    "hex": "#000000",
    "textureId": 31,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 0,
      "l": 0
    },
    "hueMultiplier": 0,
    "weightedHue": 1,
    "minimapColor": 0
  },
  {
    "id": 19,
    "rgb": 0,
    "hex": "#000000",
    "textureId": 15,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 0,
      "l": 0
    },
    "hueMultiplier": 0,
    "weightedHue": 1,
    "minimapColor": 0
  },
  {
    "id": 20,
    "rgb": 10053120,
    "hex": "#996600",
    "textureId": 99,
    "walkable": true,
    "hsl": {
      "h": 28,
      "s": 255,
      "l": 76
    },
    "hueMultiplier": 17,
    "weightedHue": 153,
    "minimapColor": 8102
  },
  {
    "id": 21,
    "rgb": 7166763,
    "hex": "#6D5B2B",
    "textureId": 181,
    "walkable": true,
    "hsl": {
      "h": 31,
      "s": 111,
      "l": 76
    },
    "hueMultiplier": 8,
    "weightedHue": 66,
    "minimapColor": 7590
  },
  {
    "id": 22,
    "rgb": 7166763,
    "hex": "#6D5B2B",
    "textureId": 181,
    "walkable": true,
    "hsl": {
      "h": 31,
      "s": 111,
      "l": 76
    },
    "hueMultiplier": 8,
    "weightedHue": 66,
    "minimapColor": 7590
  },
  {
    "id": 23,
    "rgb": 0,
    "hex": "#000000",
    "textureId": 47,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 0,
      "l": 0
    },
    "hueMultiplier": 0,
    "weightedHue": 1,
    "minimapColor": 0
  },
  {
    "id": 24,
    "rgb": 13351542,
    "hex": "#CBBA76",
    "textureId": 499,
    "walkable": true,
    "hsl": {
      "h": 34,
      "s": 113,
      "l": 160
    },
    "hueMultiplier": 11,
    "weightedHue": 85,
    "minimapColor": 8656
  },
  {
    "id": 25,
    "rgb": 8550724,
    "hex": "#827944",
    "textureId": 348,
    "walkable": true,
    "hsl": {
      "h": 36,
      "s": 80,
      "l": 99
    },
    "hueMultiplier": 8,
    "weightedHue": 62,
    "minimapColor": 9521
  },
  {
    "id": 26,
    "rgb": 0,
    "hex": "#000000",
    "textureId": 23,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 0,
      "l": 0
    },
    "hueMultiplier": 0,
    "weightedHue": 1,
    "minimapColor": 0
  },
  {
    "id": 27,
    "rgb": 0,
    "hex": "#000000",
    "textureId": 2,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 0,
      "l": 0
    },
    "hueMultiplier": 0,
    "weightedHue": 1,
    "minimapColor": 0
  },
  {
    "id": 28,
    "rgb": 3502602,
    "hex": "#35720A",
    "textureId": 276,
    "walkable": true,
    "hsl": {
      "h": 67,
      "s": 214,
      "l": 62
    },
    "hueMultiplier": 27,
    "weightedHue": 104,
    "minimapColor": 17183
  },
  {
    "id": 29,
    "rgb": 15132395,
    "hex": "#E6E6EB",
    "textureId": 502,
    "walkable": true,
    "hsl": {
      "h": 170,
      "s": 27,
      "l": 232
    },
    "hueMultiplier": 3,
    "weightedHue": 5,
    "minimapColor": 43124
  },
  {
    "id": 30,
    "rgb": 3932160,
    "hex": "#3C0000",
    "textureId": 493,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 255,
      "l": 30
    },
    "hueMultiplier": 0,
    "weightedHue": 60,
    "minimapColor": 911
  },
  {
    "id": 31,
    "rgb": 0,
    "hex": "#000000",
    "textureId": 11,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 0,
      "l": 0
    },
    "hueMultiplier": 0,
    "weightedHue": 1,
    "minimapColor": 0
  },
  {
    "id": 32,
    "rgb": 13170175,
    "hex": "#C8F5FF",
    "textureId": 494,
    "walkable": true,
    "hsl": {
      "h": 135,
      "s": 247,
      "l": 227
    },
    "hueMultiplier": 29,
    "weightedHue": 55,
    "minimapColor": 33905
  },
  {
    "id": 33,
    "rgb": 3932160,
    "hex": "#3C0000",
    "textureId": 178,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 255,
      "l": 30
    },
    "hueMultiplier": 0,
    "weightedHue": 60,
    "minimapColor": 911
  },
  {
    "id": 34,
    "rgb": 5979170,
    "hex": "#5B3C22",
    "textureId": 595,
    "walkable": true,
    "hsl": {
      "h": 19,
      "s": 116,
      "l": 62
    },
    "hueMultiplier": 4,
    "weightedHue": 57,
    "minimapColor": 4511
  },
  {
    "id": 35,
    "rgb": 6702097,
    "hex": "#664411",
    "textureId": 58,
    "walkable": true,
    "hsl": {
      "h": 25,
      "s": 182,
      "l": 59
    },
    "hueMultiplier": 8,
    "weightedHue": 85,
    "minimapColor": 6813
  },
  {
    "id": 36,
    "rgb": 65793,
    "hex": "#010101",
    "textureId": -1,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 0,
      "l": 1
    },
    "hueMultiplier": 0,
    "weightedHue": 1,
    "minimapColor": 0
  },
  {
    "id": 37,
    "rgb": 5601177,
    "hex": "#557799",
    "textureId": 493,
    "walkable": true,
    "hsl": {
      "h": 149,
      "s": 73,
      "l": 119
    },
    "hueMultiplier": 39,
    "weightedHue": 68,
    "minimapColor": 38203
  },
  {
    "id": 38,
    "rgb": 0,
    "hex": "#000000",
    "textureId": 17,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 0,
      "l": 0
    },
    "hueMultiplier": 0,
    "weightedHue": 1,
    "minimapColor": 0
  },
  {
    "id": 39,
    "rgb": 4671907,
    "hex": "#4749A3",
    "textureId": 493,
    "walkable": true,
    "hsl": {
      "h": 169,
      "s": 100,
      "l": 117
    },
    "hueMultiplier": 60,
    "weightedHue": 92,
    "minimapColor": 43450
  },
  {
    "id": 40,
    "rgb": 4153729,
    "hex": "#3F6181",
    "textureId": -1,
    "walkable": true,
    "hsl": {
      "h": 148,
      "s": 88,
      "l": 96
    },
    "hueMultiplier": 38,
    "weightedHue": 66,
    "minimapColor": 38192
  },
  {
    "id": 41,
    "rgb": 16711935,
    "hex": "#FF00FF",
    "textureId": -1,
    "walkable": true,
    "hsl": {
      "h": -42,
      "s": 255,
      "l": 127
    },
    "hueMultiplier": -42,
    "weightedHue": 255,
    "minimapColor": -10305
  },
  {
    "id": 42,
    "rgb": 16711935,
    "hex": "#FF00FF",
    "textureId": -1,
    "walkable": true,
    "hsl": {
      "h": -42,
      "s": 255,
      "l": 127
    },
    "hueMultiplier": -42,
    "weightedHue": 255,
    "minimapColor": -10305
  },
  {
    "id": 43,
    "rgb": 5263440,
    "hex": "#505050",
    "textureId": -1,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 0,
      "l": 80
    },
    "hueMultiplier": 0,
    "weightedHue": 1,
    "minimapColor": 40
  },
  {
    "id": 44,
    "rgb": 0,
    "hex": "#000000",
    "textureId": 3,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 0,
      "l": 0
    },
    "hueMultiplier": 0,
    "weightedHue": 1,
    "minimapColor": 0
  },
  {
    "id": 45,
    "rgb": 0,
    "hex": "#000000",
    "textureId": 23,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 0,
      "l": 0
    },
    "hueMultiplier": 0,
    "weightedHue": 1,
    "minimapColor": 0
  },
  {
    "id": 46,
    "rgb": 0,
    "hex": "#000000",
    "textureId": 2,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 0,
      "l": 0
    },
    "hueMultiplier": 0,
    "weightedHue": 1,
    "minimapColor": 0
  },
  {
    "id": 47,
    "rgb": 2631712,
    "hex": "#282820",
    "textureId": 424,
    "walkable": true,
    "hsl": {
      "h": 42,
      "s": 28,
      "l": 36
    },
    "hueMultiplier": 1,
    "weightedHue": 8,
    "minimapColor": 10258
  },
  {
    "id": 48,
    "rgb": 2631712,
    "hex": "#282820",
    "textureId": 348,
    "walkable": true,
    "hsl": {
      "h": 42,
      "s": 28,
      "l": 36
    },
    "hueMultiplier": 1,
    "weightedHue": 8,
    "minimapColor": 10258
  },
  {
    "id": 49,
    "rgb": 3153952,
    "hex": "#302020",
    "textureId": 593,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 51,
      "l": 40
    },
    "hueMultiplier": 0,
    "weightedHue": 16,
    "minimapColor": 148
  },
  {
    "id": 50,
    "rgb": 16711935,
    "hex": "#FF00FF",
    "textureId": -1,
    "walkable": true,
    "hsl": {
      "h": -42,
      "s": 255,
      "l": 127
    },
    "hueMultiplier": -42,
    "weightedHue": 255,
    "minimapColor": -10305
  },
  {
    "id": 51,
    "rgb": 0,
    "hex": "#000000",
    "textureId": -1,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 0,
      "l": 0
    },
    "hueMultiplier": 0,
    "weightedHue": 1,
    "minimapColor": 0
  },
  {
    "id": 52,
    "rgb": 16711935,
    "hex": "#FF00FF",
    "textureId": -1,
    "walkable": true,
    "hsl": {
      "h": -42,
      "s": 255,
      "l": 127
    },
    "hueMultiplier": -42,
    "weightedHue": 255,
    "minimapColor": -10305
  },
  {
    "id": 53,
    "rgb": 16711935,
    "hex": "#FF00FF",
    "textureId": -1,
    "walkable": true,
    "hsl": {
      "h": -42,
      "s": 255,
      "l": 127
    },
    "hueMultiplier": -42,
    "weightedHue": 255,
    "minimapColor": -10305
  },
  {
    "id": 54,
    "rgb": 16711935,
    "hex": "#FF00FF",
    "textureId": -1,
    "walkable": true,
    "hsl": {
      "h": -42,
      "s": 255,
      "l": 127
    },
    "hueMultiplier": -42,
    "weightedHue": 255,
    "minimapColor": -10305
  },
  {
    "id": 55,
    "rgb": 6316120,
    "hex": "#606058",
    "textureId": 301,
    "walkable": true,
    "hsl": {
      "h": 42,
      "s": 11,
      "l": 92
    },
    "hueMultiplier": 1,
    "weightedHue": 8,
    "minimapColor": 10286
  },
  {
    "id": 56,
    "rgb": 16711935,
    "hex": "#FF00FF",
    "textureId": -1,
    "walkable": true,
    "hsl": {
      "h": -42,
      "s": 255,
      "l": 127
    },
    "hueMultiplier": -42,
    "weightedHue": 255,
    "minimapColor": -10305
  },
  {
    "id": 57,
    "rgb": 4008715,
    "hex": "#3D2B0B",
    "textureId": 600,
    "walkable": true,
    "hsl": {
      "h": 27,
      "s": 177,
      "l": 36
    },
    "hueMultiplier": 5,
    "weightedHue": 50,
    "minimapColor": 6802
  },
  {
    "id": 58,
    "rgb": 16711935,
    "hex": "#FF00FF",
    "textureId": -1,
    "walkable": true,
    "hsl": {
      "h": -42,
      "s": 255,
      "l": 127
    },
    "hueMultiplier": -42,
    "weightedHue": 255,
    "minimapColor": -10305
  },
  {
    "id": 59,
    "rgb": 8544278,
    "hex": "#826016",
    "textureId": 66,
    "walkable": true,
    "hsl": {
      "h": 29,
      "s": 181,
      "l": 76
    },
    "hueMultiplier": 12,
    "weightedHue": 108,
    "minimapColor": 7846
  },
  {
    "id": 60,
    "rgb": 16711935,
    "hex": "#FF00FF",
    "textureId": -1,
    "walkable": true,
    "hsl": {
      "h": -42,
      "s": 255,
      "l": 127
    },
    "hueMultiplier": -42,
    "weightedHue": 255,
    "minimapColor": -10305
  },
  {
    "id": 61,
    "rgb": 16711935,
    "hex": "#FF00FF",
    "textureId": -1,
    "walkable": true,
    "hsl": {
      "h": -42,
      "s": 255,
      "l": 127
    },
    "hueMultiplier": -42,
    "weightedHue": 255,
    "minimapColor": -10305
  },
  {
    "id": 62,
    "rgb": 14392,
    "hex": "#003838",
    "textureId": 416,
    "walkable": true,
    "hsl": {
      "h": 128,
      "s": 255,
      "l": 28
    },
    "hueMultiplier": 28,
    "weightedHue": 56,
    "minimapColor": 33678
  },
  {
    "id": 63,
    "rgb": 16711935,
    "hex": "#FF00FF",
    "textureId": -1,
    "walkable": true,
    "hsl": {
      "h": -42,
      "s": 255,
      "l": 127
    },
    "hueMultiplier": -42,
    "weightedHue": 255,
    "minimapColor": -10305
  },
  {
    "id": 64,
    "rgb": 2107432,
    "hex": "#202828",
    "textureId": 598,
    "walkable": true,
    "hsl": {
      "h": 128,
      "s": 28,
      "l": 36
    },
    "hueMultiplier": 4,
    "weightedHue": 8,
    "minimapColor": 32786
  },
  {
    "id": 65,
    "rgb": 16711935,
    "hex": "#FF00FF",
    "textureId": -1,
    "walkable": true,
    "hsl": {
      "h": -42,
      "s": 255,
      "l": 127
    },
    "hueMultiplier": -42,
    "weightedHue": 255,
    "minimapColor": -10305
  },
  {
    "id": 66,
    "rgb": 4206608,
    "hex": "#403010",
    "textureId": 501,
    "walkable": true,
    "hsl": {
      "h": 28,
      "s": 153,
      "l": 40
    },
    "hueMultiplier": 5,
    "weightedHue": 48,
    "minimapColor": 7700
  },
  {
    "id": 67,
    "rgb": 16711935,
    "hex": "#FF00FF",
    "textureId": -1,
    "walkable": true,
    "hsl": {
      "h": -42,
      "s": 255,
      "l": 127
    },
    "hueMultiplier": -42,
    "weightedHue": 255,
    "minimapColor": -10305
  },
  {
    "id": 68,
    "rgb": 16711935,
    "hex": "#FF00FF",
    "textureId": -1,
    "walkable": true,
    "hsl": {
      "h": -42,
      "s": 255,
      "l": 127
    },
    "hueMultiplier": -42,
    "weightedHue": 255,
    "minimapColor": -10305
  },
  {
    "id": 69,
    "rgb": 10514504,
    "hex": "#A07048",
    "textureId": 66,
    "walkable": true,
    "hsl": {
      "h": 19,
      "s": 97,
      "l": 116
    },
    "hueMultiplier": 6,
    "weightedHue": 88,
    "minimapColor": 4538
  },
  {
    "id": 70,
    "rgb": 10512711,
    "hex": "#A06947",
    "textureId": 301,
    "walkable": true,
    "hsl": {
      "h": 16,
      "s": 98,
      "l": 115
    },
    "hueMultiplier": 5,
    "weightedHue": 89,
    "minimapColor": 4537
  },
  {
    "id": 71,
    "rgb": 16711935,
    "hex": "#FF00FF",
    "textureId": -1,
    "walkable": true,
    "hsl": {
      "h": -42,
      "s": 255,
      "l": 127
    },
    "hueMultiplier": -42,
    "weightedHue": 255,
    "minimapColor": -10305
  },
  {
    "id": 72,
    "rgb": 5781528,
    "hex": "#583818",
    "textureId": 508,
    "walkable": true,
    "hsl": {
      "h": 21,
      "s": 146,
      "l": 56
    },
    "hueMultiplier": 5,
    "weightedHue": 64,
    "minimapColor": 5660
  },
  {
    "id": 73,
    "rgb": 11063360,
    "hex": "#A8D040",
    "textureId": -1,
    "walkable": true,
    "hsl": {
      "h": 54,
      "s": 153,
      "l": 136
    },
    "hueMultiplier": 30,
    "weightedHue": 144,
    "minimapColor": 13892
  },
  {
    "id": 74,
    "rgb": 4473924,
    "hex": "#444444",
    "textureId": 600,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 0,
      "l": 68
    },
    "hueMultiplier": 0,
    "weightedHue": 1,
    "minimapColor": 34
  },
  {
    "id": 75,
    "rgb": 12889166,
    "hex": "#C4AC4E",
    "textureId": 425,
    "walkable": true,
    "hsl": {
      "h": 33,
      "s": 126,
      "l": 137
    },
    "hueMultiplier": 15,
    "weightedHue": 118,
    "minimapColor": 8644
  },
  {
    "id": 76,
    "rgb": 12031847,
    "hex": "#B79767",
    "textureId": 512,
    "walkable": true,
    "hsl": {
      "h": 25,
      "s": 90,
      "l": 143
    },
    "hueMultiplier": 7,
    "weightedHue": 80,
    "minimapColor": 6471
  },
  {
    "id": 77,
    "rgb": 4008715,
    "hex": "#3D2B0B",
    "textureId": 300,
    "walkable": true,
    "hsl": {
      "h": 27,
      "s": 177,
      "l": 36
    },
    "hueMultiplier": 5,
    "weightedHue": 50,
    "minimapColor": 6802
  },
  {
    "id": 78,
    "rgb": 9930575,
    "hex": "#97874F",
    "textureId": -1,
    "walkable": true,
    "hsl": {
      "h": 33,
      "s": 80,
      "l": 115
    },
    "hueMultiplier": 9,
    "weightedHue": 72,
    "minimapColor": 8505
  },
  {
    "id": 79,
    "rgb": 8215339,
    "hex": "#7D5B2B",
    "textureId": 99,
    "walkable": true,
    "hsl": {
      "h": 24,
      "s": 124,
      "l": 84
    },
    "hueMultiplier": 7,
    "weightedHue": 82,
    "minimapColor": 6570
  },
  {
    "id": 80,
    "rgb": 5259296,
    "hex": "#504020",
    "textureId": 129,
    "walkable": true,
    "hsl": {
      "h": 28,
      "s": 109,
      "l": 56
    },
    "hueMultiplier": 5,
    "weightedHue": 48,
    "minimapColor": 7580
  },
  {
    "id": 81,
    "rgb": 6050884,
    "hex": "#5C5444",
    "textureId": 508,
    "walkable": true,
    "hsl": {
      "h": 28,
      "s": 38,
      "l": 80
    },
    "hueMultiplier": 2,
    "weightedHue": 24,
    "minimapColor": 7336
  },
  {
    "id": 82,
    "rgb": 4603956,
    "hex": "#464034",
    "textureId": 508,
    "walkable": true,
    "hsl": {
      "h": 28,
      "s": 37,
      "l": 61
    },
    "hueMultiplier": 2,
    "weightedHue": 18,
    "minimapColor": 7326
  },
  {
    "id": 83,
    "rgb": 0,
    "hex": "#000000",
    "textureId": 35,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 0,
      "l": 0
    },
    "hueMultiplier": 0,
    "weightedHue": 1,
    "minimapColor": 0
  },
  {
    "id": 84,
    "rgb": 3159333,
    "hex": "#303525",
    "textureId": 668,
    "walkable": true,
    "hsl": {
      "h": 56,
      "s": 45,
      "l": 45
    },
    "hueMultiplier": 3,
    "weightedHue": 16,
    "minimapColor": 14486
  },
  {
    "id": 85,
    "rgb": 3932160,
    "hex": "#3C0000",
    "textureId": 493,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 255,
      "l": 30
    },
    "hueMultiplier": 0,
    "weightedHue": 60,
    "minimapColor": 911
  },
  {
    "id": 86,
    "rgb": 4341619,
    "hex": "#423F73",
    "textureId": 408,
    "walkable": true,
    "hsl": {
      "h": 173,
      "s": 74,
      "l": 89
    },
    "hueMultiplier": 35,
    "weightedHue": 52,
    "minimapColor": 44332
  },
  {
    "id": 87,
    "rgb": 5524791,
    "hex": "#544D37",
    "textureId": 181,
    "walkable": true,
    "hsl": {
      "h": 32,
      "s": 53,
      "l": 69
    },
    "hueMultiplier": 3,
    "weightedHue": 29,
    "minimapColor": 8354
  },
  {
    "id": 88,
    "rgb": 6178332,
    "hex": "#5E461C",
    "textureId": 197,
    "walkable": true,
    "hsl": {
      "h": 27,
      "s": 138,
      "l": 61
    },
    "hueMultiplier": 7,
    "weightedHue": 66,
    "minimapColor": 6686
  },
  {
    "id": 89,
    "rgb": 3025184,
    "hex": "#2E2920",
    "textureId": 416,
    "walkable": true,
    "hsl": {
      "h": 27,
      "s": 45,
      "l": 39
    },
    "hueMultiplier": 1,
    "weightedHue": 14,
    "minimapColor": 6291
  },
  {
    "id": 90,
    "rgb": 5259296,
    "hex": "#504020",
    "textureId": 505,
    "walkable": true,
    "hsl": {
      "h": 28,
      "s": 109,
      "l": 56
    },
    "hueMultiplier": 5,
    "weightedHue": 48,
    "minimapColor": 7580
  },
  {
    "id": 91,
    "rgb": 14540253,
    "hex": "#DDDDDD",
    "textureId": 301,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 0,
      "l": 221
    },
    "hueMultiplier": 0,
    "weightedHue": 1,
    "minimapColor": 110
  },
  {
    "id": 92,
    "rgb": 6697728,
    "hex": "#663300",
    "textureId": 328,
    "walkable": true,
    "hsl": {
      "h": 21,
      "s": 255,
      "l": 51
    },
    "hueMultiplier": 8,
    "weightedHue": 102,
    "minimapColor": 6041
  },
  {
    "id": 93,
    "rgb": 5259296,
    "hex": "#504020",
    "textureId": 492,
    "walkable": true,
    "hsl": {
      "h": 28,
      "s": 109,
      "l": 56
    },
    "hueMultiplier": 5,
    "weightedHue": 48,
    "minimapColor": 7580
  },
  {
    "id": 94,
    "rgb": 6639128,
    "hex": "#654E18",
    "textureId": 595,
    "walkable": true,
    "hsl": {
      "h": 29,
      "s": 157,
      "l": 62
    },
    "hueMultiplier": 9,
    "weightedHue": 77,
    "minimapColor": 7711
  },
  {
    "id": 95,
    "rgb": 9203260,
    "hex": "#8C6E3C",
    "textureId": 355,
    "walkable": true,
    "hsl": {
      "h": 26,
      "s": 102,
      "l": 100
    },
    "hueMultiplier": 8,
    "weightedHue": 80,
    "minimapColor": 6578
  },
  {
    "id": 96,
    "rgb": 6178332,
    "hex": "#5E461C",
    "textureId": 506,
    "walkable": true,
    "hsl": {
      "h": 27,
      "s": 138,
      "l": 61
    },
    "hueMultiplier": 7,
    "weightedHue": 66,
    "minimapColor": 6686
  },
  {
    "id": 97,
    "rgb": 7166763,
    "hex": "#6D5B2B",
    "textureId": 492,
    "walkable": true,
    "hsl": {
      "h": 31,
      "s": 111,
      "l": 76
    },
    "hueMultiplier": 8,
    "weightedHue": 66,
    "minimapColor": 7590
  },
  {
    "id": 98,
    "rgb": 16711935,
    "hex": "#FF00FF",
    "textureId": -1,
    "walkable": true,
    "hsl": {
      "h": -42,
      "s": 255,
      "l": 127
    },
    "hueMultiplier": -42,
    "weightedHue": 255,
    "minimapColor": -10305
  },
  {
    "id": 99,
    "rgb": 16711935,
    "hex": "#FF00FF",
    "textureId": -1,
    "walkable": true,
    "hsl": {
      "h": -42,
      "s": 255,
      "l": 127
    },
    "hueMultiplier": -42,
    "weightedHue": 255,
    "minimapColor": -10305
  },
  {
    "id": 100,
    "rgb": 5521943,
    "hex": "#544217",
    "textureId": 512,
    "walkable": true,
    "hsl": {
      "h": 30,
      "s": 145,
      "l": 53
    },
    "hueMultiplier": 7,
    "weightedHue": 60,
    "minimapColor": 7706
  },
  {
    "id": 101,
    "rgb": 3159333,
    "hex": "#303525",
    "textureId": 596,
    "walkable": true,
    "hsl": {
      "h": 56,
      "s": 45,
      "l": 45
    },
    "hueMultiplier": 3,
    "weightedHue": 16,
    "minimapColor": 14486
  },
  {
    "id": 102,
    "rgb": 7893088,
    "hex": "#787060",
    "textureId": 505,
    "walkable": true,
    "hsl": {
      "h": 28,
      "s": 28,
      "l": 108
    },
    "hueMultiplier": 2,
    "weightedHue": 24,
    "minimapColor": 7222
  },
  {
    "id": 103,
    "rgb": 8635338,
    "hex": "#83C3CA",
    "textureId": 174,
    "walkable": true,
    "hsl": {
      "h": 132,
      "s": 101,
      "l": 166
    },
    "hueMultiplier": 36,
    "weightedHue": 71,
    "minimapColor": 34259
  },
  {
    "id": 104,
    "rgb": 6710886,
    "hex": "#666666",
    "textureId": 593,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 0,
      "l": 102
    },
    "hueMultiplier": 0,
    "weightedHue": 1,
    "minimapColor": 51
  },
  {
    "id": 105,
    "rgb": 6707515,
    "hex": "#66593B",
    "textureId": 301,
    "walkable": true,
    "hsl": {
      "h": 29,
      "s": 68,
      "l": 80
    },
    "hueMultiplier": 5,
    "weightedHue": 43,
    "minimapColor": 7464
  },
  {
    "id": 106,
    "rgb": 3820341,
    "hex": "#3A4B35",
    "textureId": 328,
    "walkable": true,
    "hsl": {
      "h": 75,
      "s": 44,
      "l": 64
    },
    "hueMultiplier": 6,
    "weightedHue": 22,
    "minimapColor": 18592
  },
  {
    "id": 107,
    "rgb": 4206608,
    "hex": "#403010",
    "textureId": 400,
    "walkable": true,
    "hsl": {
      "h": 28,
      "s": 153,
      "l": 40
    },
    "hueMultiplier": 5,
    "weightedHue": 48,
    "minimapColor": 7700
  },
  {
    "id": 108,
    "rgb": 4008715,
    "hex": "#3D2B0B",
    "textureId": 602,
    "walkable": true,
    "hsl": {
      "h": 27,
      "s": 177,
      "l": 36
    },
    "hueMultiplier": 5,
    "weightedHue": 50,
    "minimapColor": 6802
  },
  {
    "id": 109,
    "rgb": 3684384,
    "hex": "#383820",
    "textureId": 516,
    "walkable": true,
    "hsl": {
      "h": 42,
      "s": 69,
      "l": 44
    },
    "hueMultiplier": 4,
    "weightedHue": 24,
    "minimapColor": 10518
  },
  {
    "id": 110,
    "rgb": 16490810,
    "hex": "#FBA13A",
    "textureId": 61,
    "walkable": true,
    "hsl": {
      "h": 22,
      "s": 243,
      "l": 154
    },
    "hueMultiplier": 17,
    "weightedHue": 193,
    "minimapColor": 6093
  },
  {
    "id": 111,
    "rgb": 16777215,
    "hex": "#FFFFFF",
    "textureId": 669,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 0,
      "l": 255
    },
    "hueMultiplier": 0,
    "weightedHue": 1,
    "minimapColor": 127
  },
  {
    "id": 112,
    "rgb": 12098407,
    "hex": "#B89B67",
    "textureId": 301,
    "walkable": true,
    "hsl": {
      "h": 27,
      "s": 92,
      "l": 143
    },
    "hueMultiplier": 8,
    "weightedHue": 81,
    "minimapColor": 6471
  },
  {
    "id": 113,
    "rgb": 16777215,
    "hex": "#FFFFFF",
    "textureId": 651,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 0,
      "l": 255
    },
    "hueMultiplier": 0,
    "weightedHue": 1,
    "minimapColor": 127
  },
  {
    "id": 114,
    "rgb": 6708568,
    "hex": "#665D58",
    "textureId": 505,
    "walkable": true,
    "hsl": {
      "h": 15,
      "s": 18,
      "l": 95
    },
    "hueMultiplier": 0,
    "weightedHue": 13,
    "minimapColor": 3119
  },
  {
    "id": 115,
    "rgb": 3159333,
    "hex": "#303525",
    "textureId": 596,
    "walkable": true,
    "hsl": {
      "h": 56,
      "s": 45,
      "l": 45
    },
    "hueMultiplier": 3,
    "weightedHue": 16,
    "minimapColor": 14486
  },
  {
    "id": 116,
    "rgb": 5197647,
    "hex": "#4F4F4F",
    "textureId": 597,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 0,
      "l": 79
    },
    "hueMultiplier": 0,
    "weightedHue": 1,
    "minimapColor": 39
  },
  {
    "id": 117,
    "rgb": 5259296,
    "hex": "#504020",
    "textureId": 492,
    "walkable": true,
    "hsl": {
      "h": 28,
      "s": 109,
      "l": 56
    },
    "hueMultiplier": 5,
    "weightedHue": 48,
    "minimapColor": 7580
  },
  {
    "id": 118,
    "rgb": 6050876,
    "hex": "#5C543C",
    "textureId": 424,
    "walkable": true,
    "hsl": {
      "h": 32,
      "s": 53,
      "l": 76
    },
    "hueMultiplier": 4,
    "weightedHue": 32,
    "minimapColor": 8358
  },
  {
    "id": 119,
    "rgb": 3091231,
    "hex": "#2F2B1F",
    "textureId": 424,
    "walkable": true,
    "hsl": {
      "h": 32,
      "s": 52,
      "l": 39
    },
    "hueMultiplier": 2,
    "weightedHue": 16,
    "minimapColor": 8339
  },
  {
    "id": 120,
    "rgb": 6708811,
    "hex": "#665E4B",
    "textureId": 500,
    "walkable": true,
    "hsl": {
      "h": 30,
      "s": 39,
      "l": 88
    },
    "hueMultiplier": 3,
    "weightedHue": 27,
    "minimapColor": 7340
  },
  {
    "id": 121,
    "rgb": 5260845,
    "hex": "#50462D",
    "textureId": 619,
    "walkable": true,
    "hsl": {
      "h": 30,
      "s": 71,
      "l": 62
    },
    "hueMultiplier": 4,
    "weightedHue": 35,
    "minimapColor": 7455
  },
  {
    "id": 122,
    "rgb": 12103832,
    "hex": "#B8B098",
    "textureId": 507,
    "walkable": true,
    "hsl": {
      "h": 32,
      "s": 46,
      "l": 168
    },
    "hueMultiplier": 4,
    "weightedHue": 32,
    "minimapColor": 8404
  },
  {
    "id": 123,
    "rgb": 3159333,
    "hex": "#303525",
    "textureId": 623,
    "walkable": true,
    "hsl": {
      "h": 56,
      "s": 45,
      "l": 45
    },
    "hueMultiplier": 3,
    "weightedHue": 16,
    "minimapColor": 14486
  },
  {
    "id": 124,
    "rgb": 16711935,
    "hex": "#FF00FF",
    "textureId": -1,
    "walkable": true,
    "hsl": {
      "h": -42,
      "s": 255,
      "l": 127
    },
    "hueMultiplier": -42,
    "weightedHue": 255,
    "minimapColor": -10305
  },
  {
    "id": 125,
    "rgb": 12291432,
    "hex": "#BB8D68",
    "textureId": 512,
    "walkable": true,
    "hsl": {
      "h": 19,
      "s": 96,
      "l": 145
    },
    "hueMultiplier": 6,
    "weightedHue": 83,
    "minimapColor": 4552
  },
  {
    "id": 126,
    "rgb": 4210744,
    "hex": "#404038",
    "textureId": 424,
    "walkable": true,
    "hsl": {
      "h": 42,
      "s": 17,
      "l": 60
    },
    "hueMultiplier": 1,
    "weightedHue": 8,
    "minimapColor": 10270
  },
  {
    "id": 127,
    "rgb": 7841669,
    "hex": "#77A785",
    "textureId": 58,
    "walkable": true,
    "hsl": {
      "h": 97,
      "s": 54,
      "l": 143
    },
    "hueMultiplier": 18,
    "weightedHue": 48,
    "minimapColor": 24775
  },
  {
    "id": 128,
    "rgb": 16777215,
    "hex": "#FFFFFF",
    "textureId": 671,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 0,
      "l": 255
    },
    "hueMultiplier": 0,
    "weightedHue": 1,
    "minimapColor": 127
  },
  {
    "id": 129,
    "rgb": 8570040,
    "hex": "#82C4B8",
    "textureId": 58,
    "walkable": true,
    "hsl": {
      "h": 120,
      "s": 90,
      "l": 163
    },
    "hueMultiplier": 31,
    "weightedHue": 66,
    "minimapColor": 31057
  },
  {
    "id": 130,
    "rgb": 2565904,
    "hex": "#272710",
    "textureId": 181,
    "walkable": true,
    "hsl": {
      "h": 42,
      "s": 107,
      "l": 27
    },
    "hueMultiplier": 3,
    "weightedHue": 23,
    "minimapColor": 10637
  },
  {
    "id": 131,
    "rgb": 3617321,
    "hex": "#373229",
    "textureId": 500,
    "walkable": true,
    "hsl": {
      "h": 27,
      "s": 37,
      "l": 48
    },
    "hueMultiplier": 1,
    "weightedHue": 14,
    "minimapColor": 6296
  },
  {
    "id": 132,
    "rgb": 3160104,
    "hex": "#303828",
    "textureId": 593,
    "walkable": true,
    "hsl": {
      "h": 64,
      "s": 42,
      "l": 48
    },
    "hueMultiplier": 4,
    "weightedHue": 16,
    "minimapColor": 16536
  },
  {
    "id": 133,
    "rgb": 4210756,
    "hex": "#404044",
    "textureId": 301,
    "walkable": true,
    "hsl": {
      "h": 170,
      "s": 7,
      "l": 66
    },
    "hueMultiplier": 2,
    "weightedHue": 4,
    "minimapColor": 43041
  },
  {
    "id": 134,
    "rgb": 16711935,
    "hex": "#FF00FF",
    "textureId": -1,
    "walkable": true,
    "hsl": {
      "h": -42,
      "s": 255,
      "l": 127
    },
    "hueMultiplier": -42,
    "weightedHue": 255,
    "minimapColor": -10305
  },
  {
    "id": 135,
    "rgb": 16711935,
    "hex": "#FF00FF",
    "textureId": -1,
    "walkable": true,
    "hsl": {
      "h": -42,
      "s": 255,
      "l": 127
    },
    "hueMultiplier": -42,
    "weightedHue": 255,
    "minimapColor": -10305
  },
  {
    "id": 136,
    "rgb": 7629129,
    "hex": "#746949",
    "textureId": 608,
    "walkable": true,
    "hsl": {
      "h": 31,
      "s": 58,
      "l": 94
    },
    "hueMultiplier": 5,
    "weightedHue": 43,
    "minimapColor": 7343
  },
  {
    "id": 137,
    "rgb": 16777215,
    "hex": "#FFFFFF",
    "textureId": 670,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 0,
      "l": 255
    },
    "hueMultiplier": 0,
    "weightedHue": 1,
    "minimapColor": 127
  },
  {
    "id": 138,
    "rgb": 3617826,
    "hex": "#373422",
    "textureId": 621,
    "walkable": true,
    "hsl": {
      "h": 36,
      "s": 60,
      "l": 44
    },
    "hueMultiplier": 3,
    "weightedHue": 21,
    "minimapColor": 9366
  },
  {
    "id": 139,
    "rgb": 7166763,
    "hex": "#6D5B2B",
    "textureId": 181,
    "walkable": true,
    "hsl": {
      "h": 31,
      "s": 111,
      "l": 76
    },
    "hueMultiplier": 8,
    "weightedHue": 66,
    "minimapColor": 7590
  },
  {
    "id": 140,
    "rgb": 15132395,
    "hex": "#E6E6EB",
    "textureId": 274,
    "walkable": true,
    "hsl": {
      "h": 170,
      "s": 27,
      "l": 232
    },
    "hueMultiplier": 3,
    "weightedHue": 5,
    "minimapColor": 43124
  },
  {
    "id": 141,
    "rgb": 13170175,
    "hex": "#C8F5FF",
    "textureId": 494,
    "walkable": true,
    "hsl": {
      "h": 135,
      "s": 247,
      "l": 227
    },
    "hueMultiplier": 29,
    "weightedHue": 55,
    "minimapColor": 33905
  },
  {
    "id": 142,
    "rgb": 65793,
    "hex": "#010101",
    "textureId": -1,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 0,
      "l": 1
    },
    "hueMultiplier": 0,
    "weightedHue": 1,
    "minimapColor": 0
  },
  {
    "id": 143,
    "rgb": 12031847,
    "hex": "#B79767",
    "textureId": 512,
    "walkable": true,
    "hsl": {
      "h": 25,
      "s": 90,
      "l": 143
    },
    "hueMultiplier": 7,
    "weightedHue": 80,
    "minimapColor": 6471
  },
  {
    "id": 144,
    "rgb": 6178332,
    "hex": "#5E461C",
    "textureId": 197,
    "walkable": true,
    "hsl": {
      "h": 27,
      "s": 138,
      "l": 61
    },
    "hueMultiplier": 7,
    "weightedHue": 66,
    "minimapColor": 6686
  },
  {
    "id": 145,
    "rgb": 3820341,
    "hex": "#3A4B35",
    "textureId": -1,
    "walkable": true,
    "hsl": {
      "h": 75,
      "s": 44,
      "l": 64
    },
    "hueMultiplier": 6,
    "weightedHue": 22,
    "minimapColor": 18592
  },
  {
    "id": 146,
    "rgb": 8570040,
    "hex": "#82C4B8",
    "textureId": 274,
    "walkable": true,
    "hsl": {
      "h": 120,
      "s": 90,
      "l": 163
    },
    "hueMultiplier": 31,
    "weightedHue": 66,
    "minimapColor": 31057
  },
  {
    "id": 147,
    "rgb": 5657162,
    "hex": "#56524A",
    "textureId": 422,
    "walkable": true,
    "hsl": {
      "h": 28,
      "s": 19,
      "l": 80
    },
    "hueMultiplier": 1,
    "weightedHue": 12,
    "minimapColor": 7208
  },
  {
    "id": 148,
    "rgb": 14526173,
    "hex": "#DDA6DD",
    "textureId": 274,
    "walkable": true,
    "hsl": {
      "h": -42,
      "s": 112,
      "l": 193
    },
    "hueMultiplier": -9,
    "weightedHue": 55,
    "minimapColor": -11168
  },
  {
    "id": 149,
    "rgb": 16711935,
    "hex": "#FF00FF",
    "textureId": -1,
    "walkable": true,
    "hsl": {
      "h": -42,
      "s": 255,
      "l": 127
    },
    "hueMultiplier": -42,
    "weightedHue": 255,
    "minimapColor": -10305
  },
  {
    "id": 150,
    "rgb": 7509687,
    "hex": "#7296B7",
    "textureId": -1,
    "walkable": true,
    "hsl": {
      "h": 148,
      "s": 82,
      "l": 148
    },
    "hueMultiplier": 40,
    "weightedHue": 69,
    "minimapColor": 38218
  },
  {
    "id": 151,
    "rgb": 16711935,
    "hex": "#FF00FF",
    "textureId": -1,
    "walkable": true,
    "hsl": {
      "h": -42,
      "s": 255,
      "l": 127
    },
    "hueMultiplier": -42,
    "weightedHue": 255,
    "minimapColor": -10305
  },
  {
    "id": 152,
    "rgb": 16711935,
    "hex": "#FF00FF",
    "textureId": -1,
    "walkable": true,
    "hsl": {
      "h": -42,
      "s": 255,
      "l": 127
    },
    "hueMultiplier": -42,
    "weightedHue": 255,
    "minimapColor": -10305
  },
  {
    "id": 153,
    "rgb": 16711935,
    "hex": "#FF00FF",
    "textureId": -1,
    "walkable": true,
    "hsl": {
      "h": -42,
      "s": 255,
      "l": 127
    },
    "hueMultiplier": -42,
    "weightedHue": 255,
    "minimapColor": -10305
  },
  {
    "id": 154,
    "rgb": 16711935,
    "hex": "#FF00FF",
    "textureId": -1,
    "walkable": true,
    "hsl": {
      "h": -42,
      "s": 255,
      "l": 127
    },
    "hueMultiplier": -42,
    "weightedHue": 255,
    "minimapColor": -10305
  },
  {
    "id": 155,
    "rgb": 4491374,
    "hex": "#44886E",
    "textureId": -1,
    "walkable": true,
    "hsl": {
      "h": 111,
      "s": 85,
      "l": 102
    },
    "hueMultiplier": 29,
    "weightedHue": 68,
    "minimapColor": 27955
  },
  {
    "id": 156,
    "rgb": 16430903,
    "hex": "#FAB737",
    "textureId": 61,
    "walkable": true,
    "hsl": {
      "h": 28,
      "s": 241,
      "l": 152
    },
    "hueMultiplier": 21,
    "weightedHue": 195,
    "minimapColor": 8140
  },
  {
    "id": 157,
    "rgb": 4293295,
    "hex": "#4182AF",
    "textureId": -1,
    "walkable": true,
    "hsl": {
      "h": 145,
      "s": 117,
      "l": 120
    },
    "hueMultiplier": 62,
    "weightedHue": 110,
    "minimapColor": 37308
  },
  {
    "id": 158,
    "rgb": 3942435,
    "hex": "#3C2823",
    "textureId": 625,
    "walkable": true,
    "hsl": {
      "h": 8,
      "s": 67,
      "l": 47
    },
    "hueMultiplier": 0,
    "weightedHue": 25,
    "minimapColor": 2327
  },
  {
    "id": 159,
    "rgb": 14526173,
    "hex": "#DDA6DD",
    "textureId": 274,
    "walkable": true,
    "hsl": {
      "h": -42,
      "s": 112,
      "l": 193
    },
    "hueMultiplier": -9,
    "weightedHue": 55,
    "minimapColor": -11168
  },
  {
    "id": 160,
    "rgb": 16711935,
    "hex": "#FF00FF",
    "textureId": -1,
    "walkable": true,
    "hsl": {
      "h": -42,
      "s": 255,
      "l": 127
    },
    "hueMultiplier": -42,
    "weightedHue": 255,
    "minimapColor": -10305
  },
  {
    "id": 161,
    "rgb": 4412737,
    "hex": "#435541",
    "textureId": 493,
    "walkable": true,
    "hsl": {
      "h": 81,
      "s": 34,
      "l": 75
    },
    "hueMultiplier": 6,
    "weightedHue": 20,
    "minimapColor": 20645
  },
  {
    "id": 162,
    "rgb": 7224879,
    "hex": "#6E3E2F",
    "textureId": 493,
    "walkable": true,
    "hsl": {
      "h": 10,
      "s": 102,
      "l": 78
    },
    "hueMultiplier": 2,
    "weightedHue": 63,
    "minimapColor": 2471
  },
  {
    "id": 163,
    "rgb": 4206608,
    "hex": "#403010",
    "textureId": 400,
    "walkable": true,
    "hsl": {
      "h": 28,
      "s": 153,
      "l": 40
    },
    "hueMultiplier": 5,
    "weightedHue": 48,
    "minimapColor": 7700
  },
  {
    "id": 164,
    "rgb": 4473924,
    "hex": "#444444",
    "textureId": 512,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 0,
      "l": 68
    },
    "hueMultiplier": 0,
    "weightedHue": 1,
    "minimapColor": 34
  },
  {
    "id": 165,
    "rgb": 10053120,
    "hex": "#996600",
    "textureId": 20,
    "walkable": true,
    "hsl": {
      "h": 28,
      "s": 255,
      "l": 76
    },
    "hueMultiplier": 17,
    "weightedHue": 153,
    "minimapColor": 8102
  },
  {
    "id": 166,
    "rgb": 10053120,
    "hex": "#996600",
    "textureId": 20,
    "walkable": true,
    "hsl": {
      "h": 28,
      "s": 255,
      "l": 76
    },
    "hueMultiplier": 17,
    "weightedHue": 153,
    "minimapColor": 8102
  },
  {
    "id": 167,
    "rgb": 4341619,
    "hex": "#423F73",
    "textureId": 408,
    "walkable": true,
    "hsl": {
      "h": 173,
      "s": 74,
      "l": 89
    },
    "hueMultiplier": 35,
    "weightedHue": 52,
    "minimapColor": 44332
  },
  {
    "id": 168,
    "rgb": 16777215,
    "hex": "#FFFFFF",
    "textureId": 637,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 0,
      "l": 255
    },
    "hueMultiplier": 0,
    "weightedHue": 1,
    "minimapColor": 127
  },
  {
    "id": 169,
    "rgb": 5521943,
    "hex": "#544217",
    "textureId": 422,
    "walkable": true,
    "hsl": {
      "h": 30,
      "s": 145,
      "l": 53
    },
    "hueMultiplier": 7,
    "weightedHue": 60,
    "minimapColor": 7706
  },
  {
    "id": 170,
    "rgb": 7893088,
    "hex": "#787060",
    "textureId": 505,
    "walkable": true,
    "hsl": {
      "h": 28,
      "s": 28,
      "l": 108
    },
    "hueMultiplier": 2,
    "weightedHue": 24,
    "minimapColor": 7222
  },
  {
    "id": 171,
    "rgb": 7891794,
    "hex": "#786B52",
    "textureId": 66,
    "walkable": true,
    "hsl": {
      "h": 28,
      "s": 48,
      "l": 101
    },
    "hueMultiplier": 4,
    "weightedHue": 38,
    "minimapColor": 7346
  },
  {
    "id": 172,
    "rgb": 7891016,
    "hex": "#786848",
    "textureId": 66,
    "walkable": true,
    "hsl": {
      "h": 28,
      "s": 64,
      "l": 96
    },
    "hueMultiplier": 5,
    "weightedHue": 48,
    "minimapColor": 7472
  },
  {
    "id": 173,
    "rgb": 6316120,
    "hex": "#606058",
    "textureId": 43,
    "walkable": true,
    "hsl": {
      "h": 42,
      "s": 11,
      "l": 92
    },
    "hueMultiplier": 1,
    "weightedHue": 8,
    "minimapColor": 10286
  },
  {
    "id": 174,
    "rgb": 5260845,
    "hex": "#50462D",
    "textureId": 619,
    "walkable": true,
    "hsl": {
      "h": 30,
      "s": 71,
      "l": 62
    },
    "hueMultiplier": 4,
    "weightedHue": 35,
    "minimapColor": 7455
  },
  {
    "id": 175,
    "rgb": 8414502,
    "hex": "#806526",
    "textureId": 617,
    "walkable": true,
    "hsl": {
      "h": 29,
      "s": 138,
      "l": 83
    },
    "hueMultiplier": 10,
    "weightedHue": 90,
    "minimapColor": 7721
  },
  {
    "id": 176,
    "rgb": 3617321,
    "hex": "#373229",
    "textureId": 500,
    "walkable": true,
    "hsl": {
      "h": 27,
      "s": 37,
      "l": 48
    },
    "hueMultiplier": 1,
    "weightedHue": 14,
    "minimapColor": 6296
  },
  {
    "id": 177,
    "rgb": 5723469,
    "hex": "#57554D",
    "textureId": 600,
    "walkable": true,
    "hsl": {
      "h": 34,
      "s": 15,
      "l": 82
    },
    "hueMultiplier": 1,
    "weightedHue": 10,
    "minimapColor": 8233
  },
  {
    "id": 178,
    "rgb": 7957076,
    "hex": "#796A54",
    "textureId": 608,
    "walkable": true,
    "hsl": {
      "h": 25,
      "s": 46,
      "l": 102
    },
    "hueMultiplier": 3,
    "weightedHue": 37,
    "minimapColor": 6323
  },
  {
    "id": 179,
    "rgb": 16711935,
    "hex": "#FF00FF",
    "textureId": -1,
    "walkable": true,
    "hsl": {
      "h": -42,
      "s": 255,
      "l": 127
    },
    "hueMultiplier": -42,
    "weightedHue": 255,
    "minimapColor": -10305
  },
  {
    "id": 180,
    "rgb": 8683381,
    "hex": "#847F75",
    "textureId": 600,
    "walkable": true,
    "hsl": {
      "h": 28,
      "s": 15,
      "l": 124
    },
    "hueMultiplier": 1,
    "weightedHue": 15,
    "minimapColor": 7230
  },
  {
    "id": 181,
    "rgb": 10040115,
    "hex": "#993333",
    "textureId": 58,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 128,
      "l": 102
    },
    "hueMultiplier": 0,
    "weightedHue": 102,
    "minimapColor": 563
  },
  {
    "id": 182,
    "rgb": 65793,
    "hex": "#010101",
    "textureId": 505,
    "walkable": true,
    "hsl": {
      "h": 0,
      "s": 0,
      "l": 1
    },
    "hueMultiplier": 0,
    "weightedHue": 1,
    "minimapColor": 0
  },
  {
    "id": 183,
    "rgb": 4153729,
    "hex": "#3F6181",
    "textureId": -1,
    "walkable": true,
    "hsl": {
      "h": 148,
      "s": 88,
      "l": 96
    },
    "hueMultiplier": 38,
    "weightedHue": 66,
    "minimapColor": 38192
  },
  {
    "id": 184,
    "rgb": 16711935,
    "hex": "#FF00FF",
    "textureId": -1,
    "walkable": true,
    "hsl": {
      "h": -42,
      "s": 255,
      "l": 127
    },
    "hueMultiplier": -42,
    "weightedHue": 255,
    "minimapColor": -10305
  }
]

window.HslToRgb = ["#000001","#050303","#090707","#0C0A0A","#0F0E0E","#131111","#161414","#191717","#1D1A1A","#1F1B1B","#221E1E","#252121","#272323","#2A2626","#2C2929","#2F2B2B","#322E2E","#35302F","#373131","#393434","#3C3636","#3E3838","#403B3B","#433D3D","#463F3F","#484140","#4A4443","#4C4545","#4F4747","#514949","#534B4B","#554E4E","#585050","#5A5251","#5C5453","#5E5655","#605757","#625959","#645B5B","#665D5D","#695F5F","#6B6160","#6D6362","#6F6564","#716766","#736868","#756A6A","#776C6C","#7A6E6E","#7C706F","#7E7271","#807473","#827675","#847777","#867979","#877B7B","#8A7D7D","#8C7F7E","#8E8180","#908382","#928584","#938686","#958787","#978989","#9A8B8B","#9B8D8D","#9D8F8F","#9E9291","#A09393","#A29594","#A49796","#A69998","#A79B9B","#A89D9D","#AA9E9E","#ACA0A0","#AEA3A2","#AFA5A4","#B1A6A6","#B3A8A7","#B5AAAA","#B5ACAC","#B7AEAE","#B9AFAF","#BBB2B1","#BCB4B3","#BEB5B5","#C0B7B6","#C1B9B9","#C2BBBB","#C4BCBC","#C6BEBE","#C7C0C0","#C9C2C1","#CBC4C3","#CDC6C5","#CEC7C7","#CFC9C9","#D1CBCB","#D2CDCD","#D4CECE","#D6D0D0","#D7D2D2","#D9D4D3","#DBD6D6","#DCD7D7","#DDD9D9","#DFDBDB","#E1DCDC","#E2DEDE","#E4E0E0","#E6E2E1","#E7E4E4","#E8E6E6","#EAE7E7","#EBE9E9","#EDEAEA","#EFECEC","#F0EEEE","#F2EFEF","#F3F2F2","#F4F3F3","#F6F5F5","#F7F7F7","#F9F8F8","#FBFAFA","#FCFBFB","#FEFDFD","#000001","#050303","#090707","#0E0909","#110C0C","#140F0F","#191111","#1B1414","#1F1717","#221919","#251B1B","#291E1D","#2B1F1F","#2E2222","#312523","#342626","#372929","#392B2A","#3C2C2C","#3F2F2E","#413130","#443232","#473534","#493736","#4C3838","#4F3B39","#513D3C","#543E3D","#56403F","#584341","#5B4443","#5D4645","#604847","#624948","#644B4A","#674E4B","#694F4E","#6B5150","#6E5351","#705453","#735655","#755856","#775958","#7A5B59","#7C5D5B","#7E5E5D","#81605E","#836260","#866362","#876563","#896765","#8C6866","#8E6A68","#906B6A","#936D6B","#946F6D","#97706F","#997270","#9B7472","#9D7573","#9F7775","#A17977","#A47A78","#A67C7A","#A87E7C","#A9807E","#AB8280","#AC8583","#AE8685","#AF8886","#B08B89","#B28D8B","#B48F8E","#B59290","#B69392","#B79594","#B99896","#BB9A98","#BB9D9B","#BD9E9D","#BFA09F","#C0A3A1","#C1A5A3","#C2A6A6","#C4A9A7","#C6ABA9","#C7ADAC","#C8AFAE","#CAB1B0","#CBB3B2","#CDB5B4","#CDB7B6","#CFB9B8","#D1BBBA","#D2BDBC","#D3BFBE","#D5C1C1","#D6C3C2","#D7C5C4","#D8C7C7","#DAC9C8","#DCCBCA","#DCCDCD","#DECFCE","#E0D1D1","#E1D3D2","#E2D5D4","#E3D7D7","#E5D9D8","#E6DBDA","#E7DCDC","#E9DFDE","#EAE1E1","#EBE2E2","#EDE5E4","#EEE6E6","#EFE8E8","#F1EAEA","#F2ECEC","#F3EEEE","#F5F0F0","#F6F2F2","#F7F3F3","#F8F6F6","#FAF7F7","#FBF9F9","#FCFBFB","#FEFDFD","#000001","#050303","#0A0505","#0E0909","#130A0A","#170E0C","#1A0F0F","#1E1311","#221414","#251616","#291917","#2B1A1A","#2F1D1B","#321E1D","#35211F","#382221","#3C2323","#3E2625","#412726","#442A29","#472B2A","#4A2E2B","#4C2F2E","#50302F","#533231","#553432","#583634","#5A3736","#5D3937","#603B38","#623D3B","#653E3C","#683F3E","#6A413F","#6D4340","#6F4543","#724644","#754845","#774947","#7A4A48","#7D4C4A","#7F4E4B","#82504C","#84514F","#865350","#895451","#8B5553","#8E5754","#915856","#935A57","#955B58","#975D5A","#9A5E5B","#9D5F5C","#9E615E","#A1625F","#A46461","#A66562","#A86763","#AA6865","#AD6A66","#AF6B67","#B16C69","#B46E6A","#B66F6C","#B7726E","#B87471","#BA7773","#BB7A76","#BB7C79","#BD7F7B","#BE817E","#C08481","#C18683","#C18886","#C38A87","#C48D8A","#C5908D","#C7928F","#C79492","#C99694","#CA9996","#CB9B99","#CD9D9B","#CDA09D","#CEA2A0","#D0A5A2","#D1A6A5","#D2A9A7","#D3ABA9","#D4AEAC","#D6B0AE","#D7B2B0","#D7B5B3","#D9B6B5","#DAB9B7","#DCBBBA","#DCBDBB","#DDC0BE","#DFC1C0","#E0C4C2","#E1C6C5","#E2C8C7","#E3CAC9","#E5CDCC","#E6CECD","#E6D1D0","#E8D3D2","#E9D5D4","#EAD7D7","#EBD9D8","#ECDCDB","#EEDDDD","#EFE0DF","#EFE2E1","#F1E4E3","#F2E6E6","#F3E8E8","#F4EAEA","#F5ECEC","#F7EFEF","#F7F1F0","#F8F3F3","#FAF5F4","#FBF7F7","#FBF9F9","#FDFBFB","#FEFDFD","#000001","#050303","#0A0505","#0F0707","#140909","#190C0A","#1D0E0C","#210F0E","#251111","#271313","#2B1614","#2F1716","#321917","#361A19","#391B1A","#3D1E1B","#401F1E","#43211F","#462221","#492322","#4C2623","#502725","#532926","#562A27","#592B2A","#5B2E2B","#5E2F2C","#61302E","#64312F","#673430","#6A3531","#6D3632","#703735","#723836","#753B37","#783C38","#7B3D39","#7E3E3B","#813F3C","#84413D","#86433F","#884440","#8B4541","#8E4643","#914844","#934945","#964A46","#994B47","#9C4C49","#9D4F4A","#A0504B","#A3514C","#A6524E","#A8534F","#AB5550","#AE5651","#B05753","#B25854","#B55A55","#B75B56","#BA5C57","#BC5D58","#BF5E59","#C1605A","#C4615C","#C5645E","#C66661","#C76964","#C76C67","#C86F6A","#C9726D","#CA7470","#CC7773","#CD7A75","#CD7D78","#CE7F7B","#CF827E","#D08581","#D18784","#D28A86","#D38C89","#D48F8B","#D5928E","#D69491","#D79793","#D79996","#D89C99","#D99E9C","#DBA19E","#DCA4A0","#DCA6A3","#DDA8A6","#DEABA8","#DFAEAB","#E0B0AE","#E1B2B0","#E2B5B3","#E3B7B5","#E4BAB7","#E5BCBA","#E6BEBC","#E6C1BF","#E7C3C1","#E8C6C4","#EAC7C7","#EACAC8","#EBCDCB","#ECCFCD","#EDD2D0","#EED3D2","#EFD6D5","#EFD8D7","#F1DBDA","#F2DDDC","#F3DFDE","#F3E1E1","#F4E4E3","#F5E6E6","#F6E9E8","#F7EAEA","#F8EDED","#F9EFEF","#FAF2F1","#FBF4F3","#FBF6F6","#FCF8F8","#FDFBFB","#FEFDFD","#000001","#070000","#0C0303","#110505","#160707","#1A0909","#1E0A0A","#220C0C","#270E0E","#2B0F0E","#2F110F","#321311","#361413","#391614","#3D1716","#401917","#451A19","#481B19","#4B1D1A","#4F1E1B","#521F1D","#55211E","#58221F","#5B2321","#5F2522","#622622","#652723","#682925","#6B2A26","#6E2B27","#712C29","#742E2A","#782F2B","#7B302B","#7E312C","#81322E","#84342F","#863530","#893631","#8C3732","#903834","#933934","#953B35","#983C36","#9B3D37","#9D3E38","#A03F39","#A3403B","#A6413C","#A9433C","#AC443D","#AE453E","#B1453F","#B44640","#B64741","#B94843","#BC4944","#BF4A44","#C14B45","#C44C46","#C74E47","#C94F48","#CC5049","#CE514A","#D2524B","#D2554F","#D25852","#D35B55","#D45E58","#D5615B","#D6645E","#D76761","#D76A65","#D76D68","#D8706B","#D9736E","#DA7671","#DB7A74","#DC7D77","#DC807A","#DD837E","#DD8681","#DE8884","#DF8B86","#E08E89","#E1918C","#E1938F","#E29692","#E39995","#E39C98","#E49E9B","#E5A19D","#E6A4A0","#E6A6A3","#E7A9A6","#E8ACA8","#E9AEAC","#E9B1AE","#EAB4B1","#EAB6B4","#EBB9B6","#ECBBB9","#EDBEBB","#EEC1BE","#EFC3C1","#EFC6C4","#EFC8C7","#F0CBC9","#F1CDCC","#F2D0CE","#F3D2D1","#F3D5D3","#F4D7D7","#F4DAD9","#F5DCDC","#F6DFDE","#F7E1E1","#F7E4E3","#F8E6E6","#F9E9E8","#FAEBEB","#FAEEEE","#FBF0F0","#FBF3F3","#FCF5F5","#FDF7F7","#FEFAFA","#FFFCFC","#000001","#070000","#0C0303","#130503","#170705","#1B0707","#210907","#250A09","#2A0C0A","#2E0C0A","#310E0C","#360F0C","#39110E","#3D110F","#41130F","#451411","#491613","#4C1613","#501714","#541914","#571A16","#5A1A17","#5E1B17","#611D19","#651E1A","#681E1A","#6B1F1B","#6F211B","#72221D","#75221E","#79231E","#7C251F","#802621","#832621","#862722","#892922","#8C2A23","#8F2A25","#932B25","#952C26","#992E27","#9C2E27","#9E2F29","#A23029","#A5312A","#A7312B","#AB322B","#AE342C","#B1352E","#B4352E","#B6362F","#BA372F","#BC3830","#BF3831","#C23931","#C53B32","#C83C34","#CB3C34","#CD3D35","#D13E35","#D33F36","#D63F37","#D94037","#DC4138","#DF4339","#DF463D","#E04940","#E04C45","#E15148","#E1544B","#E15750","#E25A53","#E35E57","#E3615A","#E4645D","#E46761","#E56B64","#E66E67","#E6716B","#E6746E","#E77872","#E77B75","#E87E78","#E8817C","#E9857F","#EA8782","#EA8A86","#EA8D88","#EB918C","#EB938F","#EC9692","#EC9995","#ED9D98","#EE9F9B","#EEA29E","#EFA5A1","#EFA8A5","#EFABA7","#F0AEAA","#F0B0AE","#F1B4B0","#F2B6B3","#F2B9B6","#F3BBB9","#F3BFBC","#F3C1BF","#F4C4C1","#F4C7C5","#F5CAC7","#F6CDCA","#F6CFCD","#F7D2D0","#F7D5D3","#F7D7D6","#F8DAD8","#F8DCDC","#F9E0DE","#FAE2E1","#FAE5E4","#FBE7E6","#FBEAEA","#FBEDEC","#FCEFEF","#FCF2F2","#FDF5F4","#FEF7F7","#FEFAFA","#FFFCFC","#000001","#070000","#0E0300","#130303","#190503","#1E0503","#220705","#270705","#2C0907","#300907","#350A07","#380A09","#3D0C09","#410C09","#450E0A","#490E0A","#4E0F0C","#510F0C","#55110C","#58130E","#5C130E","#60140E","#63140F","#67160F","#6B1611","#6E1711","#721711","#751913","#791913","#7D1A13","#801A14","#841B14","#871B16","#8A1D16","#8E1D16","#911E17","#941E17","#981F17","#9B2119","#9E2119","#A2221A","#A5221A","#A8231A","#AB231B","#AE251B","#B2251B","#B5261D","#B8261D","#BB271E","#BE271E","#C1291E","#C4291F","#C72A1F","#CB2A1F","#CD2B21","#D12C21","#D42C22","#D72E22","#DA2E22","#DC2F23","#E02F23","#E33023","#E63025","#E93125","#EC3126","#EC362A","#EC392F","#ED3E32","#ED4137","#ED463C","#EE493F","#EE4E44","#EF5148","#EF554B","#EF5850","#EF5B53","#EF5F57","#EF625B","#F0665E","#F06962","#F16D66","#F17069","#F1746D","#F27770","#F27B74","#F27E78","#F3827B","#F3857F","#F38883","#F38B86","#F38F89","#F4928C","#F49490","#F49893","#F59B96","#F59E9A","#F6A19D","#F6A5A0","#F6A7A4","#F7ABA6","#F7AEAA","#F7B1AE","#F7B4B0","#F7B7B4","#F8BAB7","#F8BDBA","#F8C0BD","#F9C3C0","#F9C6C3","#F9C9C7","#FACCC9","#FACECD","#FBD2D0","#FBD4D2","#FBD7D6","#FBDAD8","#FBDDDC","#FBE0DF","#FCE3E1","#FCE6E5","#FDE9E8","#FDEBEA","#FDEFEE","#FEF1F0","#FEF4F3","#FEF7F7","#FFFAF9","#FFFCFC","#000001","#070000","#0E0000","#140000","#1A0300","#1F0300","#250300","#2A0500","#2F0503","#320503","#370703","#3C0703","#400703","#450703","#490903","#4E0903","#520905","#550A05","#590A05","#5D0A05","#610C05","#650C05","#690C05","#6D0C05","#710E07","#740E07","#780E07","#7C0F07","#800F07","#840F07","#871107","#8B1107","#8F1109","#921109","#951309","#991309","#9D1309","#A01409","#A41409","#A71409","#AB160A","#AE160A","#B1160A","#B5160A","#B8170A","#BB170A","#BF170A","#C2190A","#C6190C","#C8190C","#CC1A0C","#CF1A0C","#D21A0C","#D61A0C","#D91B0C","#DC1B0C","#E01B0E","#E21D0E","#E61D0E","#E91D0E","#EC1E0E","#EF1E0E","#F31E0E","#F61E0E","#F91F0F","#F92314","#F9291A","#F92E1F","#F93225","#F9362A","#F93B2F","#F93F34","#FA4338","#FA473C","#FA4B40","#FA4F45","#FA5349","#FA574E","#FA5B52","#FA5E56","#FB625A","#FB665D","#FB6961","#FB6D65","#FB7169","#FB746D","#FB7871","#FB7C75","#FB8079","#FB837C","#FB8680","#FB8A84","#FB8D87","#FB918B","#FB948F","#FB9793","#FC9B96","#FC9E99","#FCA29D","#FCA5A0","#FCA8A4","#FCACA7","#FCAEAB","#FCB2AE","#FDB5B2","#FDB8B5","#FDBBB8","#FDBFBB","#FDC2BF","#FDC5C2","#FDC8C6","#FDCCC9","#FECECD","#FED2CF","#FED5D2","#FED7D6","#FEDBD9","#FEDEDC","#FEE1E0","#FEE4E3","#FFE7E6","#FFEAE9","#FFEDEC","#FFF0EF","#FFF3F3","#FFF6F6","#FFF9F9","#FFFCFC","#000001","#050303","#090707","#0C0A0A","#0F0E0E","#131111","#161414","#191717","#1D1A1A","#1F1D1B","#221F1E","#252221","#272323","#2A2626","#2C2929","#2F2B2B","#322E2E","#35302F","#373231","#393534","#3C3736","#3E3938","#403C3B","#433D3D","#463F3F","#484140","#4A4443","#4C4645","#4F4847","#514A49","#534C4B","#554F4E","#585150","#5A5351","#5C5453","#5E5655","#605857","#625A59","#645C5B","#665E5D","#69605F","#6B6260","#6D6462","#6F6664","#716866","#736968","#756B6A","#776D6C","#7A6F6E","#7C716F","#7E7371","#807573","#827775","#847977","#867B79","#877D7B","#8A7E7D","#8C807E","#8E8280","#908482","#928684","#938786","#958987","#978B89","#9A8D8B","#9B8F8D","#9D918F","#9E9391","#A09493","#A29694","#A49896","#A69A98","#A79C9B","#A89E9D","#AAA09E","#ACA2A0","#AEA4A2","#AFA6A4","#B1A7A6","#B3A9A7","#B5ABAA","#B5ADAC","#B7AEAE","#B9B0AF","#BBB3B1","#BCB5B3","#BEB6B5","#C0B8B6","#C1BAB9","#C2BBBB","#C4BDBC","#C6BFBE","#C7C1C0","#C9C2C1","#CBC4C3","#CDC7C5","#CEC8C7","#CFCAC9","#D1CCCB","#D2CDCD","#D4CFCE","#D6D1D0","#D7D2D2","#D9D4D3","#DBD6D6","#DCD7D7","#DDDAD9","#DFDCDB","#E1DDDC","#E2DFDE","#E4E1E0","#E6E2E1","#E7E4E4","#E8E6E6","#EAE7E7","#EBE9E9","#EDEAEA","#EFEDEC","#F0EFEE","#F2F0EF","#F3F2F2","#F4F3F3","#F6F5F5","#F7F7F7","#F9F8F8","#FBFAFA","#FCFBFB","#FEFDFD","#000001","#050303","#090707","#0E0A09","#110C0C","#140F0F","#191311","#1B1614","#1F1717","#221A19","#251D1B","#291F1D","#2B211F","#2E2322","#312623","#342726","#372A29","#392C2A","#3C2F2C","#3F302E","#413230","#443532","#473734","#493836","#4C3B38","#4F3D39","#513E3C","#54403D","#56433F","#584541","#5B4643","#5D4845","#604A47","#624C48","#644E4A","#67504B","#69524E","#6B5450","#6E5551","#705753","#735955","#755A56","#775C58","#7A5E59","#7C605B","#7E615D","#81635E","#836560","#866762","#876863","#896A65","#8C6C66","#8E6D68","#906F6A","#93716B","#94736D","#97746F","#997670","#9B7872","#9D7A73","#9F7B75","#A17D77","#A47F78","#A6817A","#A8827C","#A9857E","#AB8680","#AC8883","#AE8A85","#AF8D86","#B08F89","#B2918B","#B4938E","#B59590","#B69792","#B79994","#B99B96","#BB9D98","#BB9F9B","#BDA19D","#BFA49F","#C0A6A1","#C1A7A3","#C2A9A6","#C4ACA7","#C6AEA9","#C7AFAC","#C8B1AE","#CAB4B0","#CBB5B2","#CDB7B4","#CDBAB6","#CFBBB8","#D1BDBA","#D2BFBC","#D3C1BE","#D5C3C1","#D6C5C2","#D7C7C4","#D8C9C7","#DACBC8","#DCCDCA","#DCCECD","#DED1CE","#E0D2D1","#E1D4D2","#E2D7D4","#E3D8D7","#E5DAD8","#E6DCDA","#E7DEDC","#E9E0DE","#EAE1E1","#EBE3E2","#EDE6E4","#EEE7E6","#EFE9E8","#F1EBEA","#F2EDEC","#F3EFEE","#F5F0F0","#F6F3F2","#F7F4F3","#F8F6F6","#FAF7F7","#FBFAF9","#FCFBFB","#FEFDFD","#000001","#050303","#0A0705","#0E0909","#130C0A","#170E0C","#1A110F","#1E1311","#221614","#251716","#291A17","#2B1D1A","#2F1E1B","#32211D","#35221F","#382521","#3C2623","#3E2925","#412A26","#442C29","#472F2A","#4A302B","#4C322E","#50342F","#533631","#553732","#583934","#5A3B36","#5D3D37","#603E38","#62403B","#65433C","#68443E","#6A463F","#6D4740","#6F4943","#724A44","#754C45","#774E47","#7A5048","#7D524A","#7F534B","#82554C","#84564F","#865850","#895951","#8B5B53","#8E5C54","#915E56","#935F57","#956158","#97635A","#9A645B","#9D665C","#9E675E","#A1695F","#A46A61","#A66C62","#A86D63","#AA6F65","#AD7166","#AF7267","#B17469","#B4756A","#B6776C","#B7796E","#B87C71","#BA7E73","#BB8176","#BB8379","#BD857B","#BE877E","#C08981","#C18C83","#C18E86","#C39187","#C4938A","#C5958D","#C7978F","#C79992","#C99C94","#CA9D96","#CBA099","#CDA29B","#CDA59D","#CEA6A0","#D0A9A2","#D1ABA5","#D2AEA7","#D3AFA9","#D4B1AC","#D6B4AE","#D7B5B0","#D7B8B3","#D9BAB5","#DABCB7","#DCBEBA","#DCC1BB","#DDC2BE","#DFC4C0","#E0C7C2","#E1C8C5","#E2CBC7","#E3CDC9","#E5CFCC","#E6D1CD","#E6D3D0","#E8D5D2","#E9D7D4","#EAD9D7","#EBDBD8","#ECDDDB","#EEDFDD","#EFE1DF","#EFE3E1","#F1E6E3","#F2E7E6","#F3EAE8","#F4EBEA","#F5EDEC","#F7EFEF","#F7F1F0","#F8F3F3","#FAF5F4","#FBF7F7","#FBF9F9","#FDFBFB","#FEFDFD","#000001","#050303","#0A0505","#0F0907","#140A09","#190C0A","#1D0F0C","#21110E","#251311","#271613","#2B1714","#2F1A16","#321B17","#361D19","#391F1A","#3D211B","#40221E","#43251F","#462621","#492922","#4C2A23","#502B25","#532E26","#562F27","#59302A","#5B322B","#5E342C","#61362E","#64372F","#673830","#6A3B31","#6D3C32","#703D35","#723F36","#754037","#784138","#7B4439","#7E453B","#81473C","#84483D","#86493F","#884B40","#8B4C41","#8E4E43","#915044","#935145","#965346","#995447","#9C5549","#9D574A","#A0584B","#A3594C","#A65B4E","#A85C4F","#AB5E50","#AE5F51","#B06053","#B26254","#B56355","#B76456","#BA6657","#BC6758","#BF6959","#C16A5A","#C46B5C","#C56E5E","#C67161","#C77364","#C77667","#C8786A","#C97B6D","#CA7E70","#CC8073","#CD8375","#CD8678","#CE877B","#CF8A7E","#D08C81","#D18F84","#D29286","#D39389","#D4968B","#D5998E","#D69B91","#D79D93","#D79F96","#D8A299","#D9A59C","#DBA69E","#DCA9A0","#DCACA3","#DDAEA6","#DEB0A8","#DFB2AB","#E0B5AE","#E1B7B0","#E2B9B3","#E3BBB5","#E4BEB7","#E5C0BA","#E6C2BC","#E6C5BF","#E7C7C1","#E8C9C4","#EACBC7","#EACDC8","#EBD0CB","#ECD2CD","#EDD4D0","#EED7D2","#EFD8D5","#EFDBD7","#F1DCDA","#F2DFDC","#F3E1DE","#F3E3E1","#F4E6E3","#F5E8E6","#F6EAE8","#F7ECEA","#F8EEED","#F9F0EF","#FAF3F1","#FBF4F3","#FBF7F6","#FCF9F8","#FDFBFB","#FEFDFD","#000001","#070300","#0C0503","#110705","#160907","#1A0A09","#1E0E0A","#220F0C","#27110E","#2B130E","#2F140F","#321711","#361913","#391A14","#3D1B16","#401D17","#451F19","#482119","#4B221A","#4F231B","#52251D","#55271E","#58291F","#5B2A21","#5F2B22","#622C22","#652E23","#683025","#6B3126","#6E3227","#713429","#74352A","#78372B","#7B382B","#7E392C","#813B2E","#843C2F","#863E30","#893F31","#8C4032","#904134","#934334","#954535","#984636","#9B4737","#9D4838","#A04939","#A34A3B","#A64C3C","#A94E3C","#AC4F3D","#AE503E","#B1513F","#B45340","#B65441","#B95543","#BC5644","#BF5744","#C15945","#C45A46","#C75B47","#C95C48","#CC5D49","#CE5F4A","#D2604B","#D2634F","#D26552","#D36855","#D46B58","#D56E5B","#D6715E","#D77361","#D77665","#D77968","#D87C6B","#D97F6E","#DA8171","#DB8474","#DC8677","#DC897A","#DD8C7E","#DD8E81","#DE9184","#DF9386","#E09689","#E1998C","#E19C8F","#E29D92","#E3A095","#E3A398","#E4A69B","#E5A89D","#E6AAA0","#E6ADA3","#E7AFA6","#E8B2A8","#E9B5AC","#E9B6AE","#EAB9B1","#EABBB4","#EBBEB6","#ECC1B9","#EDC2BB","#EEC5BE","#EFC7C1","#EFCAC4","#EFCDC7","#F0CFC9","#F1D1CC","#F2D3CE","#F3D6D1","#F3D8D3","#F4DBD7","#F4DCD9","#F5DFDC","#F6E1DE","#F7E4E1","#F7E6E3","#F8E8E6","#F9EAE8","#FAEDEB","#FAEFEE","#FBF2F0","#FBF3F3","#FCF6F5","#FDF8F7","#FEFBFA","#FFFDFC","#000001","#070300","#0C0503","#130703","#170905","#1B0A07","#210C07","#250E09","#2A0F0A","#2E110A","#31130C","#36140C","#39160E","#3D170F","#41190F","#451A11","#491B13","#4C1D13","#501E14","#541F14","#572116","#5A2217","#5E2317","#612519","#65261A","#68271A","#6B291B","#6F2A1B","#722B1D","#752C1E","#792E1E","#7C2F1F","#803021","#833121","#863222","#893422","#8C3523","#8F3625","#933725","#953826","#993927","#9C3B27","#9E3C29","#A23D29","#A53E2A","#A73F2B","#AB402B","#AE412C","#B1432E","#B4442E","#B6452F","#BA462F","#BC4730","#BF4831","#C24931","#C54A32","#C84B34","#CB4C34","#CD4E35","#D14F35","#D35036","#D65137","#D95237","#DC5338","#DF5439","#DF573D","#E05A40","#E05D45","#E16048","#E1634B","#E16650","#E26953","#E36C57","#E36F5A","#E4725D","#E47561","#E57864","#E67B67","#E67E6B","#E6816E","#E78472","#E78675","#E88978","#E88C7C","#E98F7F","#EA9282","#EA9486","#EA9788","#EB9A8C","#EB9D8F","#EC9F92","#ECA295","#EDA598","#EEA79B","#EEAA9E","#EFADA1","#EFAFA5","#EFB2A7","#F0B5AA","#F0B7AE","#F1BAB0","#F2BCB3","#F2BFB6","#F3C1B9","#F3C4BC","#F3C7BF","#F4C9C1","#F4CCC5","#F5CEC7","#F6D1CA","#F6D3CD","#F7D6D0","#F7D8D3","#F7DBD6","#F8DDD8","#F8E0DC","#F9E2DE","#FAE5E1","#FAE7E4","#FBEAE6","#FBECEA","#FBEFEC","#FCF1EF","#FCF3F2","#FDF6F4","#FEF8F7","#FEFBFA","#FFFDFC","#000001","#070000","#0E0300","#130503","#190703","#1E0903","#220905","#270A05","#2C0C07","#300E07","#350F07","#381109","#3D1109","#411309","#45140A","#49160A","#4E170C","#51190C","#55190C","#581A0E","#5C1B0E","#601D0E","#631E0F","#671F0F","#6B1F11","#6E2111","#722211","#752313","#792513","#7D2613","#802614","#842714","#872916","#8A2A16","#8E2B16","#912C17","#942C17","#982E17","#9B2F19","#9E3019","#A2311A","#A5321A","#A8321A","#AB341B","#AE351B","#B2361B","#B5371D","#B8381D","#BB381E","#BE391E","#C13B1E","#C43C1F","#C73D1F","#CB3E1F","#CD3E21","#D13F21","#D44022","#D74122","#DA4322","#DC4423","#E04423","#E34523","#E64625","#E94725","#EC4826","#EC4B2A","#EC4F2F","#ED5232","#ED5537","#ED593C","#EE5C3F","#EE5F44","#EF6248","#EF654B","#EF6850","#EF6C53","#EF6F57","#EF725B","#F0755E","#F07862","#F17B66","#F17F69","#F1826D","#F28570","#F28774","#F28A78","#F38D7B","#F3917F","#F39383","#F39686","#F39989","#F49C8C","#F49E90","#F4A293","#F5A596","#F5A79A","#F6AA9D","#F6ADA0","#F6AFA4","#F7B3A6","#F7B5AA","#F7B8AE","#F7BBB0","#F7BDB4","#F8C0B7","#F8C3BA","#F8C6BD","#F9C8C0","#F9CBC3","#F9CDC7","#FAD0C9","#FAD3CD","#FBD6D0","#FBD8D2","#FBDBD6","#FBDDD8","#FBE0DC","#FBE3DF","#FCE6E1","#FCE8E5","#FDEAE8","#FDEDEA","#FDEFEE","#FEF3F0","#FEF5F3","#FEF7F7","#FFFAF9","#FFFCFC","#000001","#070000","#0E0300","#140300","#1A0500","#1F0700","#250700","#2A0900","#2F0A03","#320A03","#370C03","#3C0E03","#400E03","#450F03","#491103","#4E1103","#521305","#551405","#591405","#5D1605","#611705","#651705","#691905","#6D1A05","#711A07","#741B07","#781B07","#7C1D07","#801E07","#841E07","#871F07","#8B2107","#8F2109","#922209","#952309","#992309","#9D2509","#A02609","#A42609","#A72709","#AB290A","#AE290A","#B12A0A","#B52B0A","#B82B0A","#BB2C0A","#BF2E0A","#C22E0A","#C62F0C","#C82F0C","#CC300C","#CF310C","#D2310C","#D6320C","#D9340C","#DC340C","#E0350E","#E2360E","#E6360E","#E9370E","#EC380E","#EF380E","#F3390E","#F63B0E","#F93B0F","#F93F14","#F9431A","#F9461F","#F94A25","#F94E2A","#F9512F","#F95534","#FA5838","#FA5B3C","#FA5F40","#FA6245","#FA6549","#FA694E","#FA6C52","#FA6F56","#FB735A","#FB765D","#FB7A61","#FB7D65","#FB8069","#FB846D","#FB8671","#FB8975","#FB8D79","#FB907C","#FB9380","#FB9684","#FB9987","#FB9C8B","#FB9F8F","#FBA293","#FCA596","#FCA899","#FCAB9D","#FCAEA0","#FCB1A4","#FCB4A7","#FCB6AB","#FCBAAE","#FDBCB2","#FDC0B5","#FDC2B8","#FDC5BB","#FDC8BF","#FDCBC2","#FDCDC6","#FDD1C9","#FED3CD","#FED6CF","#FED9D2","#FEDCD6","#FEDED9","#FEE1DC","#FEE4E0","#FEE6E3","#FFEAE6","#FFECE9","#FFEFEC","#FFF2EF","#FFF4F3","#FFF7F6","#FFFAF9","#FFFCFC","#000001","#050303","#090707","#0C0A0A","#0F0E0E","#131111","#161414","#191717","#1D1A1A","#1F1D1B","#221F1E","#252221","#272523","#2A2726","#2C2A29","#2F2C2B","#322E2E","#35302F","#373231","#393534","#3C3736","#3E3938","#403C3B","#433E3D","#46403F","#484340","#4A4543","#4C4745","#4F4947","#514B49","#534E4B","#554F4E","#585150","#5A5351","#5C5553","#5E5755","#605957","#625B59","#645D5B","#665F5D","#69615F","#6B6360","#6D6562","#6F6764","#716966","#736B68","#756C6A","#776E6C","#7A706E","#7C726F","#7E7471","#807673","#827875","#847A77","#867C79","#877E7B","#8A807D","#8C827E","#8E8480","#908682","#928784","#938886","#958A87","#978C89","#9A8E8B","#9B908D","#9D928F","#9E9391","#A09693","#A29894","#A49A96","#A69C98","#A79D9B","#A89F9D","#AAA19E","#ACA3A0","#AEA5A2","#AFA6A4","#B1A8A6","#B3AAA7","#B5ACAA","#B5AEAC","#B7AFAE","#B9B2AF","#BBB4B1","#BCB5B3","#BEB7B5","#C0B9B6","#C1BBB9","#C2BCBB","#C4BEBC","#C6C0BE","#C7C1C0","#C9C3C1","#CBC5C3","#CDC7C5","#CEC8C7","#CFCAC9","#D1CDCB","#D2CECD","#D4D0CE","#D6D2D0","#D7D3D2","#D9D5D3","#DBD7D6","#DCD8D7","#DDDAD9","#DFDCDB","#E1DDDC","#E2DFDE","#E4E1E0","#E6E2E1","#E7E4E4","#E8E6E6","#EAE8E7","#EBEAE9","#EDEBEA","#EFEDEC","#F0EFEE","#F2F0EF","#F3F2F2","#F4F3F3","#F6F5F5","#F7F7F7","#F9F8F8","#FBFAFA","#FCFBFB","#FEFDFD","#000001","#050303","#090707","#0E0A09","#110E0C","#14110F","#191311","#1B1614","#1F1917","#221B19","#251E1B","#291F1D","#2B221F","#2E2522","#312723","#342A26","#372B29","#392E2A","#3C302C","#3F322E","#413530","#443632","#473834","#493B36","#4C3D38","#4F3F39","#51403C","#54433D","#56453F","#584741","#5B4943","#5D4A45","#604C47","#624F48","#64514A","#67534B","#69544E","#6B5650","#6E5851","#705A53","#735C55","#755D56","#775F58","#7A6159","#7C635B","#7E655D","#81665E","#836860","#866A62","#876C63","#896E65","#8C6F66","#8E7168","#90736A","#93756B","#94776D","#97786F","#997A70","#9B7C72","#9D7E73","#9F8075","#A18177","#A48378","#A6857A","#A8867C","#A9887E","#AB8A80","#AC8C83","#AE8F85","#AF9186","#B09389","#B2948B","#B4968E","#B59990","#B69B92","#B79D94","#B99E96","#BBA098","#BBA39B","#BDA59D","#BFA69F","#C0A8A1","#C1AAA3","#C2ADA6","#C4AEA7","#C6B0A9","#C7B2AC","#C8B4AE","#CAB6B0","#CBB8B2","#CDBAB4","#CDBBB6","#CFBDB8","#D1C0BA","#D2C1BC","#D3C3BE","#D5C5C1","#D6C7C2","#D7C9C4","#D8CBC7","#DACDC8","#DCCECA","#DCD0CD","#DED2CE","#E0D4D1","#E1D6D2","#E2D7D4","#E3D9D7","#E5DCD8","#E6DDDA","#E7DFDC","#E9E1DE","#EAE2E1","#EBE5E2","#EDE6E4","#EEE8E6","#EFEAE8","#F1EBEA","#F2EEEC","#F3EFEE","#F5F1F0","#F6F3F2","#F7F4F3","#F8F7F6","#FAF8F7","#FBFAF9","#FCFBFB","#FEFDFD","#000001","#050303","#0A0705","#0E0A09","#130C0A","#170F0C","#1A130F","#1E1411","#221714","#251A16","#291B17","#2B1E1A","#2F211B","#32221D","#35251F","#382721","#3C2923","#3E2B25","#412E26","#442F29","#47312A","#4A342B","#4C352E","#50372F","#533931","#553B32","#583D34","#5A3F36","#5D4037","#604338","#62453B","#65463C","#68483E","#6A4A3F","#6D4B40","#6F4E43","#725044","#755145","#775347","#7A5548","#7D564A","#7F584B","#825A4C","#845B4F","#865D50","#895F51","#8B6053","#8E6254","#916456","#936557","#956758","#97695A","#9A6A5B","#9D6C5C","#9E6E5E","#A16F5F","#A47161","#A67362","#A87463","#AA7665","#AD7866","#AF7967","#B17B69","#B47D6A","#B67E6C","#B7816E","#B88371","#BA8573","#BB8776","#BB8979","#BD8B7B","#BE8E7E","#C09081","#C19283","#C19486","#C39687","#C4988A","#C59B8D","#C79D8F","#C79E92","#C9A194","#CAA396","#CBA599","#CDA79B","#CDA99D","#CEABA0","#D0AEA2","#D1AFA5","#D2B1A7","#D3B4A9","#D4B5AC","#D6B7AE","#D7BAB0","#D7BBB3","#D9BDB5","#DAC0B7","#DCC1BA","#DCC3BB","#DDC6BE","#DFC7C0","#E0C9C2","#E1CCC5","#E2CDC7","#E3CFC9","#E5D2CC","#E6D3CD","#E6D5D0","#E8D7D2","#E9D9D4","#EADBD7","#EBDDD8","#ECDFDB","#EEE1DD","#EFE3DF","#EFE5E1","#F1E6E3","#F2E9E6","#F3EAE8","#F4ECEA","#F5EFEC","#F7F0EF","#F7F2F0","#F8F4F3","#FAF6F4","#FBF7F7","#FBFAF9","#FDFBFB","#FEFDFD","#000001","#050303","#0A0705","#0F0907","#140C09","#190E0A","#1D110C","#21130E","#251611","#271713","#2B1A14","#2F1B16","#321E17","#361F19","#39221A","#3D251B","#40261E","#43291F","#462A21","#492C22","#4C2E23","#503025","#533126","#563427","#59352A","#5B372B","#5E382C","#613B2E","#643C2F","#673E30","#6A4031","#6D4132","#704435","#724536","#754737","#784838","#7B4A39","#7E4B3B","#814E3C","#844F3D","#86513F","#885240","#8B5441","#8E5643","#915744","#935945","#965A46","#995C47","#9C5D49","#9D5F4A","#A0604B","#A3624C","#A6634E","#A8654F","#AB6650","#AE6851","#B06953","#B26B54","#B56D55","#B76E56","#BA7057","#BC7158","#BF7359","#C1745A","#C4765C","#C5785E","#C67B61","#C77D64","#C78067","#C8826A","#C9856D","#CA8670","#CC8873","#CD8B75","#CD8D78","#CE907B","#CF927E","#D09481","#D19684","#D29986","#D39B89","#D49D8B","#D59F8E","#D6A291","#D7A493","#D7A696","#D8A899","#D9AA9C","#DBAD9E","#DCAEA0","#DCB1A3","#DDB3A6","#DEB5A8","#DFB7AB","#E0BAAE","#E1BBB0","#E2BEB3","#E3C0B5","#E4C2B7","#E5C4BA","#E6C6BC","#E6C8BF","#E7CAC1","#E8CDC4","#EACEC7","#EAD1C8","#EBD2CB","#ECD5CD","#EDD7D0","#EED9D2","#EFDBD5","#EFDDD7","#F1DFDA","#F2E1DC","#F3E3DE","#F3E5E1","#F4E7E3","#F5E9E6","#F6EBE8","#F7EDEA","#F8EFED","#F9F1EF","#FAF3F1","#FBF5F3","#FBF7F6","#FCF9F8","#FDFBFB","#FEFDFD","#000001","#070300","#0C0503","#110905","#160A07","#1A0E09","#1E0F0A","#22110C","#27140E","#2B160E","#2F190F","#321A11","#361B13","#391E14","#3D1F16","#402217","#452319","#482519","#4B271A","#4F291B","#522B1D","#552C1E","#582E1F","#5B3021","#5F3122","#623422","#653523","#683625","#6B3826","#6E3927","#713C29","#743D2A","#783E2B","#7B402B","#7E412C","#81442E","#84452F","#864630","#894831","#8C4932","#904B34","#934C34","#954E35","#985036","#9B5137","#9D5338","#A05439","#A3553B","#A6573C","#A9583C","#AC5A3D","#AE5B3E","#B15C3F","#B45E40","#B65F41","#B96143","#BC6244","#BF6344","#C16545","#C46646","#C76847","#C96948","#CC6A49","#CE6C4A","#D26D4B","#D2704F","#D27252","#D37555","#D47858","#D57A5B","#D67D5E","#D77F61","#D78265","#D78568","#D8866B","#D9896E","#DA8B71","#DB8E74","#DC9177","#DC937A","#DD957E","#DD9781","#DE9A84","#DF9D86","#E09E89","#E1A18C","#E1A38F","#E2A692","#E3A895","#E3AA98","#E4AD9B","#E5AE9D","#E6B1A0","#E6B4A3","#E7B5A6","#E8B8A8","#E9BAAC","#E9BCAE","#EABFB1","#EAC1B4","#EBC3B6","#ECC5B9","#EDC7BB","#EECABE","#EFCCC1","#EFCEC4","#EFD0C7","#F0D2C9","#F1D5CC","#F2D7CE","#F3D9D1","#F3DBD3","#F4DDD7","#F4E0D9","#F5E1DC","#F6E4DE","#F7E6E1","#F7E8E3","#F8EAE6","#F9ECE8","#FAEFEB","#FAF0EE","#FBF3F0","#FBF5F3","#FCF7F5","#FDF9F7","#FEFBFA","#FFFDFC","#000001","#070300","#0C0503","#130703","#170A05","#1B0C07","#210E07","#250F09","#2A130A","#2E140A","#31160C","#36170C","#391A0E","#3D1B0F","#411D0F","#451F11","#492113","#4C2213","#502314","#542614","#572716","#5A2917","#5E2A17","#612C19","#652E1A","#682F1A","#6B311B","#6F321B","#72341D","#75351E","#79371E","#7C381F","#803921","#833B21","#863D22","#893E22","#8C3F23","#8F4025","#934325","#954426","#994527","#9C4727","#9E4829","#A24929","#A54A2A","#A74C2B","#AB4E2B","#AE4F2C","#B1502E","#B4522E","#B6532F","#BA542F","#BC5630","#BF5731","#C25831","#C55932","#C85B34","#CB5C34","#CD5D35","#D15E35","#D36036","#D66137","#D96237","#DC6338","#DF6539","#DF673D","#E06A40","#E06D45","#E17048","#E1724B","#E17550","#E27853","#E37B57","#E37D5A","#E4805D","#E48361","#E58664","#E68767","#E68A6B","#E68D6E","#E78F72","#E79275","#E89478","#E8977C","#E9997F","#EA9C82","#EA9E86","#EAA188","#EBA38C","#EBA68F","#ECA892","#ECAA95","#EDAD98","#EEAF9B","#EEB29E","#EFB4A1","#EFB6A5","#EFB9A7","#F0BBAA","#F0BDAE","#F1C0B0","#F2C2B3","#F2C5B6","#F3C7B9","#F3C9BC","#F3CCBF","#F4CDC1","#F4D0C5","#F5D2C7","#F6D5CA","#F6D7CD","#F7D9D0","#F7DCD3","#F7DED6","#F8E0D8","#F8E2DC","#F9E5DE","#FAE6E1","#FAE9E4","#FBEBE6","#FBEEEA","#FBEFEC","#FCF2EF","#FCF4F2","#FDF7F4","#FEF8F7","#FEFBFA","#FFFDFC","#000001","#070300","#0E0500","#130703","#190903","#1E0A03","#220C05","#270E05","#2C1107","#301307","#351407","#381609","#3D1709","#411909","#451A0A","#491D0A","#4E1E0C","#511F0C","#55210C","#58220E","#5C230E","#60250E","#63270F","#67290F","#6B2A11","#6E2B11","#722C11","#752E13","#792F13","#7D3013","#803214","#843414","#873516","#8A3616","#8E3716","#913817","#943917","#983C17","#9B3D19","#9E3E19","#A23F1A","#A5401A","#A8411A","#AB431B","#AE451B","#B2461B","#B5471D","#B8481D","#BB491E","#BE4A1E","#C14B1E","#C44C1F","#C74F1F","#CB501F","#CD5121","#D15221","#D45322","#D75422","#DA5522","#DC5723","#E05823","#E35923","#E65A25","#E95B25","#EC5C26","#EC5F2A","#EC622F","#ED6532","#ED6837","#ED6B3C","#EE6D3F","#EE7044","#EF7348","#EF764B","#EF7950","#EF7C53","#EF7F57","#EF815B","#F0845E","#F08662","#F18966","#F18C69","#F18F6D","#F29270","#F29474","#F29678","#F3997B","#F39C7F","#F39E83","#F3A186","#F3A489","#F4A68C","#F4A890","#F4AB93","#F5AE96","#F5B09A","#F6B39D","#F6B5A0","#F6B8A4","#F7BAA6","#F7BCAA","#F7BFAE","#F7C1B0","#F7C4B4","#F8C7B7","#F8C9BA","#F8CCBD","#F9CDC0","#F9D0C3","#F9D2C7","#FAD5C9","#FAD7CD","#FBDAD0","#FBDCD2","#FBDED6","#FBE1D8","#FBE3DC","#FBE6DF","#FCE8E1","#FCEAE5","#FDEDE8","#FDEFEA","#FDF1EE","#FEF3F0","#FEF6F3","#FEF8F7","#FFFBF9","#FFFDFC","#000001","#070300","#0E0500","#140700","#1A0900","#1F0A00","#250C00","#2A0E00","#2F0F03","#321103","#371303","#3C1403","#401603","#451703","#491903","#4E1A03","#521B05","#551D05","#591E05","#5D1F05","#612105","#652205","#692305","#6D2505","#712607","#742707","#782907","#7C2A07","#802B07","#842C07","#872E07","#8B2F07","#8F3009","#923109","#953209","#993409","#9D3509","#A03609","#A43709","#A73809","#AB390A","#AE3B0A","#B13C0A","#B53D0A","#B83E0A","#BB3F0A","#BF400A","#C2410A","#C6430C","#C8440C","#CC450C","#CF460C","#D2470C","#D6480C","#D9490C","#DC4A0C","#E04B0E","#E24C0E","#E64E0E","#E94F0E","#EC500E","#EF510E","#F3520E","#F6530E","#F9540F","#F95714","#F95A1A","#F95D1F","#F96025","#F9632A","#F9662F","#F96934","#FA6C38","#FA6F3C","#FA7240","#FA7545","#FA7849","#FA7B4E","#FA7E52","#FA8156","#FB845A","#FB865D","#FB8961","#FB8C65","#FB8F69","#FB926D","#FB9471","#FB9775","#FB9A79","#FB9D7C","#FB9F80","#FBA284","#FBA587","#FBA78B","#FBAA8F","#FBAD93","#FCAF96","#FCB299","#FCB59D","#FCB7A0","#FCBAA4","#FCBCA7","#FCBFAB","#FCC1AE","#FDC4B2","#FDC7B5","#FDC9B8","#FDCCBB","#FDCEBF","#FDD1C2","#FDD3C6","#FDD6C9","#FED8CD","#FEDBCF","#FEDDD2","#FEE0D6","#FEE2D9","#FEE5DC","#FEE7E0","#FEEAE3","#FFECE6","#FFEFE9","#FFF1EC","#FFF3EF","#FFF6F3","#FFF8F6","#FFFBF9","#FFFDFC","#000001","#050303","#090707","#0C0A0A","#0F0E0E","#131111","#161414","#191717","#1D1A1A","#1F1D1B","#221F1E","#252221","#272523","#2A2726","#2C2A29","#2F2C2B","#322F2E","#35312F","#373431","#393634","#3C3836","#3E3B38","#403D3B","#433F3D","#46403F","#484340","#4A4543","#4C4745","#4F4947","#514B49","#534E4B","#55504E","#585250","#5A5451","#5C5653","#5E5855","#605A57","#625C59","#645E5B","#66605D","#69625F","#6B6460","#6D6662","#6F6864","#716A66","#736C68","#756E6A","#776F6C","#7A716E","#7C736F","#7E7571","#807773","#827975","#847B77","#867D79","#877F7B","#8A817D","#8C837E","#8E8580","#908682","#928884","#938A86","#958C87","#978E89","#9A908B","#9B928D","#9D938F","#9E9591","#A09793","#A29994","#A49B96","#A69D98","#A79E9B","#A8A09D","#AAA29E","#ACA4A0","#AEA6A2","#AFA7A4","#B1A9A6","#B3ABA7","#B5ADAA","#B5AEAC","#B7B1AE","#B9B3AF","#BBB5B1","#BCB6B3","#BEB8B5","#C0BAB6","#C1BBB9","#C2BDBB","#C4BFBC","#C6C1BE","#C7C2C0","#C9C4C1","#CBC6C3","#CDC7C5","#CEC9C7","#CFCBC9","#D1CDCB","#D2CECD","#D4D0CE","#D6D2D0","#D7D3D2","#D9D5D3","#DBD7D6","#DCD9D7","#DDDBD9","#DFDCDB","#E1DEDC","#E2E0DE","#E4E1E0","#E6E3E1","#E7E5E4","#E8E6E6","#EAE8E7","#EBEAE9","#EDEBEA","#EFEDEC","#F0EFEE","#F2F0EF","#F3F2F2","#F4F3F3","#F6F5F5","#F7F7F7","#F9F8F8","#FBFAFA","#FCFBFB","#FEFDFD","#000001","#050303","#090707","#0E0A09","#110E0C","#14110F","#191411","#1B1714","#1F1917","#221B19","#251E1B","#29211D","#2B231F","#2E2622","#312923","#342B26","#372C29","#392F2A","#3C312C","#3F342E","#413630","#443832","#473B34","#493D36","#4C3E38","#4F4039","#51433C","#54453D","#56473F","#584941","#5B4B43","#5D4E45","#604F47","#625148","#64534A","#67554B","#69574E","#6B5950","#6E5B51","#705C53","#735E55","#756056","#776258","#7A6459","#7C665B","#7E685D","#816A5E","#836B60","#866D62","#876F63","#897165","#8C7366","#8E7568","#90776A","#93796B","#947A6D","#977C6F","#997E70","#9B8072","#9D8273","#9F8475","#A18677","#A48778","#A6887A","#A88A7C","#A98C7E","#AB8F80","#AC9183","#AE9385","#AF9486","#B09689","#B2988B","#B49A8E","#B59C90","#B69E92","#B7A094","#B9A296","#BBA498","#BBA69B","#BDA79D","#BFA99F","#C0ABA1","#C1AEA3","#C2AFA6","#C4B1A7","#C6B3A9","#C7B5AC","#C8B6AE","#CAB8B0","#CBBAB2","#CDBCB4","#CDBEB6","#CFC0B8","#D1C1BA","#D2C3BC","#D3C5BE","#D5C7C1","#D6C9C2","#D7CBC4","#D8CDC7","#DACEC8","#DCD0CA","#DCD2CD","#DED3CE","#E0D5D1","#E1D7D2","#E2D9D4","#E3DBD7","#E5DCD8","#E6DEDA","#E7E0DC","#E9E1DE","#EAE3E1","#EBE6E2","#EDE7E4","#EEE9E6","#EFEAE8","#F1ECEA","#F2EEEC","#F3EFEE","#F5F1F0","#F6F3F2","#F7F5F3","#F8F7F6","#FAF8F7","#FBFAF9","#FCFBFB","#FEFDFD","#000001","#050303","#0A0705","#0E0A09","#130E0A","#170F0C","#1A130F","#1E1611","#221914","#251B16","#291D17","#2B1F1A","#2F221B","#32251D","#35261F","#382921","#3C2B23","#3E2E25","#413026","#443129","#47342A","#4A362B","#4C382E","#503B2F","#533C31","#553E32","#584034","#5A4336","#5D4437","#604638","#62483B","#654A3C","#684C3E","#6A4E3F","#6D5040","#6F5243","#725444","#755645","#775747","#7A5948","#7D5B4A","#7F5D4B","#825E4C","#84604F","#866250","#896451","#8B6653","#8E6754","#916956","#936B57","#956D58","#976F5A","#9A705B","#9D725C","#9E745E","#A1765F","#A47761","#A67962","#A87B63","#AA7D65","#AD7F66","#AF8067","#B18269","#B4846A","#B6866C","#B7876E","#B88971","#BA8B73","#BB8E76","#BB9079","#BD927B","#BE937E","#C09581","#C19883","#C19A86","#C39C87","#C49D8A","#C5A08D","#C7A28F","#C7A492","#C9A694","#CAA796","#CBAA99","#CDAC9B","#CDAE9D","#CEAFA0","#D0B1A2","#D1B4A5","#D2B5A7","#D3B7A9","#D4B9AC","#D6BBAE","#D7BDB0","#D7BFB3","#D9C1B5","#DAC2B7","#DCC5BA","#DCC7BB","#DDC8BE","#DFCAC0","#E0CCC2","#E1CEC5","#E2D0C7","#E3D2C9","#E5D3CC","#E6D6CD","#E6D7D0","#E8D9D2","#E9DBD4","#EADCD7","#EBDFD8","#ECE1DB","#EEE2DD","#EFE4DF","#EFE6E1","#F1E8E3","#F2EAE6","#F3EBE8","#F4EDEA","#F5EFEC","#F7F1EF","#F7F3F0","#F8F4F3","#FAF6F4","#FBF8F7","#FBFAF9","#FDFBFB","#FEFDFD","#000001","#050303","#0A0705","#0F0A07","#140C09","#190F0A","#1D130C","#21140E","#251711","#271A13","#2B1B14","#2F1E16","#322117","#362319","#39251A","#3D271B","#402A1E","#432B1F","#462E21","#493022","#4C3123","#503425","#533626","#563827","#59392A","#5B3C2B","#5E3E2C","#613F2E","#64412F","#674430","#6A4531","#6D4732","#704935","#724B36","#754C37","#784F38","#7B5139","#7E523B","#81543C","#84563D","#86573F","#885940","#8B5B41","#8E5D43","#915E44","#936045","#966246","#996347","#9C6549","#9D674A","#A0684B","#A36A4C","#A66C4E","#A86E4F","#AB6F50","#AE7151","#B07353","#B27454","#B57655","#B77856","#BA7957","#BC7B58","#BF7D59","#C17F5A","#C4805C","#C5835E","#C68561","#C78664","#C78867","#C88B6A","#C98D6D","#CA8F70","#CC9273","#CD9375","#CD9578","#CE987B","#CF9A7E","#D09C81","#D19D84","#D2A086","#D3A289","#D4A48B","#D5A68E","#D6A891","#D7AA93","#D7AD96","#D8AE99","#D9B09C","#DBB29E","#DCB5A0","#DCB6A3","#DDB8A6","#DEBBA8","#DFBCAB","#E0BEAE","#E1C1B0","#E2C2B3","#E3C4B5","#E4C6B7","#E5C8BA","#E6CABC","#E6CCBF","#E7CEC1","#E8D0C4","#EAD2C7","#EAD4C8","#EBD6CB","#ECD7CD","#EDD9D0","#EEDCD2","#EFDDD5","#EFDFD7","#F1E1DA","#F2E3DC","#F3E5DE","#F3E7E1","#F4E9E3","#F5EAE6","#F6ECE8","#F7EFEA","#F8F0ED","#F9F2EF","#FAF4F1","#FBF6F3","#FBF7F6","#FCFAF8","#FDFBFB","#FEFDFD","#000001","#070300","#0C0703","#110905","#160C07","#1A0F09","#1E110A","#22140C","#27160E","#2B190E","#2F1B0F","#321D11","#361F13","#392114","#3D2316","#402617","#452719","#482A19","#4B2C1A","#4F2E1B","#52301D","#55311E","#58341F","#5B3621","#5F3722","#623922","#653B23","#683D25","#6B3F26","#6E4027","#714329","#74452A","#78462B","#7B482B","#7E492C","#814B2E","#844E2F","#864F30","#895131","#8C5232","#905434","#935634","#955735","#985936","#9B5A37","#9D5C38","#A05E39","#A35F3B","#A6613C","#A9633C","#AC643D","#AE663E","#B1673F","#B46940","#B66B41","#B96C43","#BC6E44","#BF6F44","#C17145","#C47346","#C77447","#C97648","#CC7849","#CE794A","#D27B4B","#D27D4F","#D28052","#D38255","#D48458","#D5865B","#D6885E","#D78A61","#D78D65","#D78F68","#D8926B","#D9936E","#DA9571","#DB9874","#DC9A77","#DC9D7A","#DD9E7E","#DDA081","#DEA384","#DFA586","#E0A689","#E1A98C","#E1AB8F","#E2AE92","#E3AF95","#E3B198","#E4B49B","#E5B59D","#E6B8A0","#E6BAA3","#E7BBA6","#E8BEA8","#E9C0AC","#E9C2AE","#EAC4B1","#EAC6B4","#EBC8B6","#ECCAB9","#EDCCBB","#EECEBE","#EFD0C1","#EFD2C4","#EFD4C7","#F0D6C9","#F1D8CC","#F2DACE","#F3DCD1","#F3DED3","#F4E0D7","#F4E2D9","#F5E4DC","#F6E6DE","#F7E8E1","#F7EAE3","#F8ECE6","#F9EEE8","#FAEFEB","#FAF2EE","#FBF3F0","#FBF6F3","#FCF7F5","#FDF9F7","#FEFBFA","#FFFDFC","#000001","#070300","#0C0703","#130903","#170C05","#1B0E07","#211107","#251309","#2A160A","#2E170A","#311A0C","#361B0C","#391E0E","#3D1F0F","#41220F","#452311","#492613","#4C2713","#502A14","#542C14","#572E16","#5A3017","#5E3117","#613419","#65351A","#68371A","#6B381B","#6F3B1B","#723C1D","#753E1E","#793F1E","#7C411F","#804321","#834521","#864622","#894822","#8C4923","#8F4B25","#934E25","#954F26","#995127","#9C5227","#9E5429","#A25529","#A5572A","#A7582B","#AB5A2B","#AE5B2C","#B15D2E","#B45E2E","#B6602F","#BA612F","#BC6330","#BF6431","#C26631","#C56832","#C86934","#CB6B34","#CD6C35","#D16E35","#D36F36","#D67137","#D97237","#DC7438","#DF7539","#DF783D","#E07A40","#E07D45","#E17F48","#E1824B","#E18450","#E28653","#E38857","#E38B5A","#E48D5D","#E48F61","#E59264","#E69367","#E6966B","#E6986E","#E79B72","#E79D75","#E89F78","#E8A17C","#E9A47F","#EAA682","#EAA886","#EAAA88","#EBAD8C","#EBAE8F","#ECB192","#ECB395","#EDB598","#EEB79B","#EEB99E","#EFBBA1","#EFBDA5","#EFC0A7","#F0C1AA","#F0C4AE","#F1C6B0","#F2C8B3","#F2CAB6","#F3CDB9","#F3CEBC","#F3D1BF","#F4D2C1","#F4D5C5","#F5D7C7","#F6D9CA","#F6DBCD","#F7DCD0","#F7DFD3","#F7E1D6","#F8E3D8","#F8E5DC","#F9E7DE","#FAE9E1","#FAEBE4","#FBEDE6","#FBEFEA","#FBF1EC","#FCF3EF","#FCF5F2","#FDF7F4","#FEF9F7","#FEFBFA","#FFFDFC","#000001","#070300","#0E0500","#130903","#190A03","#1E0E03","#220F05","#271305","#2C1407","#301607","#351907","#381A09","#3D1D09","#411E09","#45210A","#49220A","#4E250C","#51260C","#55270C","#582A0E","#5C2B0E","#602E0E","#632F0F","#67310F","#6B3211","#6E3511","#723611","#753713","#793913","#7D3B13","#803D14","#843E14","#874016","#8A4116","#8E4416","#914517","#944617","#984817","#9B4919","#9E4B19","#A24C1A","#A54F1A","#A8501A","#AB511B","#AE531B","#B2541B","#B5561D","#B8571D","#BB591E","#BE5A1E","#C15C1E","#C45D1F","#C75E1F","#CB601F","#CD6121","#D16321","#D46422","#D76622","#DA6722","#DC6923","#E06A23","#E36B23","#E66D25","#E96E25","#EC7026","#EC722A","#EC752F","#ED7732","#ED7A37","#ED7D3C","#EE7F3F","#EE8244","#EF8448","#EF864B","#EF8850","#EF8B53","#EF8D57","#EF905B","#F0935E","#F09462","#F19766","#F19969","#F19C6D","#F29D70","#F2A074","#F2A278","#F3A57B","#F3A77F","#F3A983","#F3AC86","#F3AE89","#F4B08C","#F4B290","#F4B593","#F5B796","#F5B99A","#F6BB9D","#F6BDA0","#F6C0A4","#F7C1A6","#F7C4AA","#F7C6AE","#F7C8B0","#F7CBB4","#F8CDB7","#F8CFBA","#F8D1BD","#F9D3C0","#F9D5C3","#F9D7C7","#FAD9C9","#FADCCD","#FBDED0","#FBE0D2","#FBE2D6","#FBE4D8","#FBE6DC","#FBE8DF","#FCEAE1","#FCECE5","#FDEFE8","#FDF1EA","#FDF3EE","#FEF5F0","#FEF7F3","#FEF9F7","#FFFBF9","#FFFDFC","#000001","#070300","#0E0500","#140900","#1A0A00","#1F0C00","#250F00","#2A1100","#2F1303","#321603","#371703","#3C1903","#401B03","#451D03","#491E03","#4E2103","#522205","#552505","#592605","#5D2705","#612A05","#652B05","#692C05","#6D2F05","#713007","#743107","#783407","#7C3507","#803607","#843807","#873907","#8B3C07","#8F3D09","#923E09","#954009","#994109","#9D4309","#A04509","#A44609","#A74709","#AB490A","#AE4A0A","#B14B0A","#B54E0A","#B84F0A","#BB500A","#BF520A","#C2530A","#C6550C","#C8560C","#CC570C","#CF590C","#D25A0C","#D65B0C","#D95D0C","#DC5E0C","#E05F0E","#E2610E","#E6620E","#E9630E","#EC650E","#EF660E","#F3680E","#F6690E","#F96A0F","#F96D14","#F9701A","#F9721F","#F97525","#F9772A","#F97A2F","#F97D34","#FA7F38","#FA823C","#FA8540","#FA8645","#FA8949","#FA8C4E","#FA8E52","#FA9156","#FB935A","#FB955D","#FB9861","#FB9A65","#FB9D69","#FB9F6D","#FBA171","#FBA475","#FBA679","#FBA87C","#FBAB80","#FBAE84","#FBAF87","#FBB28B","#FBB58F","#FBB693","#FCB996","#FCBB99","#FCBD9D","#FCC0A0","#FCC1A4","#FCC4A7","#FCC7AB","#FCC8AE","#FDCBB2","#FDCDB5","#FDCFB8","#FDD2BB","#FDD4BF","#FDD6C2","#FDD8C6","#FDDBC9","#FEDCCD","#FEDFCF","#FEE1D2","#FEE3D6","#FEE6D9","#FEE7DC","#FEEAE0","#FEECE3","#FFEEE6","#FFF0E9","#FFF3EC","#FFF4EF","#FFF7F3","#FFF9F6","#FFFBF9","#FFFDFC","#000001","#050303","#090707","#0C0A0A","#0F0E0E","#131111","#161414","#191717","#1D1A1A","#1F1D1B","#221F1E","#252221","#272523","#2A2726","#2C2A29","#2F2C2B","#322F2E","#35312F","#373431","#393634","#3C3836","#3E3B38","#403D3B","#433F3D","#46413F","#484440","#4A4643","#4C4845","#4F4A47","#514C49","#534F4B","#55514E","#585350","#5A5551","#5C5753","#5E5955","#605B57","#625D59","#645F5B","#66615D","#69635F","#6B6560","#6D6762","#6F6964","#716B66","#736D68","#756F6A","#77716C","#7A736E","#7C756F","#7E7771","#807973","#827A75","#847C77","#867E79","#87807B","#8A827D","#8C847E","#8E8680","#908782","#928984","#938B86","#958D87","#978F89","#9A918B","#9B938D","#9D948F","#9E9691","#A09893","#A29A94","#A49C96","#A69D98","#A79F9B","#A8A19D","#AAA39E","#ACA5A0","#AEA6A2","#AFA9A4","#B1ABA6","#B3ADA7","#B5AEAA","#B5B0AC","#B7B2AE","#B9B4AF","#BBB5B1","#BCB7B3","#BEB9B5","#C0BBB6","#C1BCB9","#C2BEBB","#C4C0BC","#C6C1BE","#C7C3C0","#C9C5C1","#CBC7C3","#CDC8C5","#CECAC7","#CFCCC9","#D1CDCB","#D2CFCD","#D4D1CE","#D6D2D0","#D7D4D2","#D9D6D3","#DBD7D6","#DCD9D7","#DDDBD9","#DFDCDB","#E1DEDC","#E2E0DE","#E4E1E0","#E6E3E1","#E7E5E4","#E8E6E6","#EAE8E7","#EBEAE9","#EDEBEA","#EFEDEC","#F0EFEE","#F2F0EF","#F3F2F2","#F4F3F3","#F6F5F5","#F7F7F7","#F9F8F8","#FBFAFA","#FCFBFB","#FEFDFD","#000001","#050303","#090707","#0E0A09","#110E0C","#14110F","#191411","#1B1714","#1F1A17","#221D19","#251F1B","#29221D","#2B251F","#2E2722","#312A23","#342C26","#372F29","#39312A","#3C322C","#3F352E","#413730","#443932","#473C34","#493E36","#4C4038","#4F4339","#51453C","#54473D","#56493F","#584B41","#5B4E43","#5D5045","#605247","#625448","#64564A","#67574B","#69594E","#6B5B50","#6E5D51","#705F53","#736155","#756356","#776558","#7A6759","#7C695B","#7E6B5D","#816D5E","#836F60","#867162","#877363","#897565","#8C7766","#8E7868","#907A6A","#937C6B","#947E6D","#97806F","#998270","#9B8472","#9D8673","#9F8775","#A18977","#A48B78","#A68D7A","#A88F7C","#A9917E","#AB9380","#AC9483","#AE9685","#AF9886","#B09A89","#B29C8B","#B49D8E","#B59F90","#B6A192","#B7A394","#B9A596","#BBA798","#BBA99B","#BDAB9D","#BFAD9F","#C0AEA1","#C1B0A3","#C2B2A6","#C4B4A7","#C6B5A9","#C7B7AC","#C8B9AE","#CABBB0","#CBBCB2","#CDBEB4","#CDC0B6","#CFC1B8","#D1C3BA","#D2C6BC","#D3C7BE","#D5C9C1","#D6CBC2","#D7CDC4","#D8CEC7","#DAD0C8","#DCD2CA","#DCD3CD","#DED5CE","#E0D7D1","#E1D8D2","#E2DAD4","#E3DCD7","#E5DDD8","#E6DFDA","#E7E1DC","#E9E3DE","#EAE5E1","#EBE6E2","#EDE8E4","#EEEAE6","#EFEBE8","#F1EDEA","#F2EFEC","#F3F0EE","#F5F2F0","#F6F3F2","#F7F5F3","#F8F7F6","#FAF8F7","#FBFAF9","#FCFBFB","#FEFDFD","#000001","#050303","#0A0705","#0E0A09","#130E0A","#17110C","#1A140F","#1E1711","#221A14","#251D16","#291F17","#2B211A","#2F231B","#32261D","#35291F","#382B21","#3C2E23","#3E3025","#413226","#443529","#47372A","#4A382B","#4C3B2E","#503D2F","#533F31","#554132","#584434","#5A4636","#5D4837","#604A38","#624C3B","#654E3C","#68503E","#6A523F","#6D5440","#6F5643","#725844","#755A45","#775C47","#7A5E48","#7D604A","#7F614B","#82634C","#84654F","#866750","#896951","#8B6B53","#8E6D54","#916F56","#937157","#957358","#97755A","#9A765B","#9D785C","#9E7A5E","#A17C5F","#A47E61","#A68062","#A88263","#AA8465","#AD8666","#AF8767","#B18869","#B48A6A","#B68C6C","#B78E6E","#B89071","#BA9373","#BB9476","#BB9679","#BD987B","#BE9A7E","#C09C81","#C19D83","#C19F86","#C3A187","#C4A38A","#C5A68D","#C7A78F","#C7A992","#C9AB94","#CAAD96","#CBAE99","#CDB09B","#CDB29D","#CEB4A0","#D0B5A2","#D1B7A5","#D2BAA7","#D3BBA9","#D4BDAC","#D6BFAE","#D7C1B0","#D7C2B3","#D9C4B5","#DAC6B7","#DCC7BA","#DCC9BB","#DDCCBE","#DFCDC0","#E0CFC2","#E1D1C5","#E2D2C7","#E3D4C9","#E5D6CC","#E6D7CD","#E6D9D0","#E8DBD2","#E9DDD4","#EADFD7","#EBE1D8","#ECE2DB","#EEE4DD","#EFE6DF","#EFE7E1","#F1E9E3","#F2EAE6","#F3ECE8","#F4EFEA","#F5F0EC","#F7F2EF","#F7F3F0","#F8F5F3","#FAF7F4","#FBF8F7","#FBFAF9","#FDFBFB","#FEFDFD","#000001","#050303","#0A0705","#0F0A07","#140E09","#19110A","#1D140C","#21170E","#251911","#271B13","#2B1E14","#2F2116","#322317","#362619","#39291A","#3D2A1B","#402C1E","#432F1F","#463121","#493422","#4C3623","#503825","#533926","#563C27","#593E2A","#5B402B","#5E432C","#61452E","#64472F","#674930","#6A4A31","#6D4C32","#704F35","#725136","#755337","#785538","#7B5739","#7E583B","#815A3C","#845C3D","#865E3F","#886040","#8B6241","#8E6443","#916544","#936745","#966946","#996B47","#9C6D49","#9D6F4A","#A0714B","#A3734C","#A6744E","#A8764F","#AB7850","#AE7A51","#B07C53","#B27E54","#B58055","#B78156","#BA8357","#BC8558","#BF8659","#C1885A","#C48A5C","#C58C5E","#C68E61","#C79064","#C79267","#C8936A","#C9966D","#CA9870","#CC9A73","#CD9C75","#CD9D78","#CE9F7B","#CFA17E","#D0A481","#D1A684","#D2A786","#D3A989","#D4AB8B","#D5AD8E","#D6AE91","#D7B093","#D7B396","#D8B599","#D9B69C","#DBB89E","#DCBAA0","#DCBBA3","#DDBDA6","#DEC0A8","#DFC1AB","#E0C3AE","#E1C5B0","#E2C7B3","#E3C8B5","#E4CAB7","#E5CDBA","#E6CEBC","#E6D0BF","#E7D2C1","#E8D3C4","#EAD5C7","#EAD7C8","#EBD8CB","#ECDBCD","#EDDCD0","#EEDED2","#EFE0D5","#EFE1D7","#F1E3DA","#F2E5DC","#F3E7DE","#F3E9E1","#F4EAE3","#F5ECE6","#F6EEE8","#F7EFEA","#F8F1ED","#F9F3EF","#FAF5F1","#FBF7F3","#FBF8F6","#FCFAF8","#FDFBFB","#FEFDFD","#000001","#070300","#0C0703","#110A05","#160E07","#1A1109","#1E130A","#22160C","#27190E","#2B1B0E","#2F1E0F","#322111","#362213","#392514","#3D2716","#402A17","#452C19","#482F19","#4B301A","#4F321B","#52351D","#55371E","#58391F","#5B3B21","#5F3D22","#623F22","#654123","#684425","#6B4626","#6E4727","#714929","#744B2A","#784E2B","#7B502B","#7E522C","#81532E","#84552F","#865730","#895931","#8C5B32","#905C34","#935E34","#956035","#986236","#9B6437","#9D6638","#A06739","#A3693B","#A66B3C","#A96D3C","#AC6F3D","#AE713E","#B1723F","#B47440","#B67641","#B97843","#BC7A44","#BF7B44","#C17D45","#C47F46","#C78147","#C98348","#CC8549","#CE864A","#D2874B","#D2894F","#D28C52","#D38E55","#D49058","#D5925B","#D6935E","#D79561","#D79865","#D79A68","#D89C6B","#D99D6E","#DA9F71","#DBA274","#DCA477","#DCA67A","#DDA77E","#DDA981","#DEAB84","#DFAE86","#E0AF89","#E1B18C","#E1B38F","#E2B592","#E3B695","#E3B998","#E4BB9B","#E5BC9D","#E6BEA0","#E6C0A3","#E7C2A6","#E8C4A8","#E9C6AC","#E9C7AE","#EAC9B1","#EACBB4","#EBCDB6","#ECCFB9","#EDD1BB","#EED2BE","#EFD4C1","#EFD6C4","#EFD8C7","#F0DAC9","#F1DCCC","#F2DDCE","#F3DFD1","#F3E1D3","#F4E3D7","#F4E5D9","#F5E6DC","#F6E8DE","#F7EAE1","#F7ECE3","#F8EEE6","#F9EFE8","#FAF1EB","#FAF3EE","#FBF4F0","#FBF7F3","#FCF8F5","#FDFAF7","#FEFBFA","#FFFDFC","#000001","#070300","#0C0703","#130A03","#170E05","#1B0F07","#211307","#251609","#2A190A","#2E1B0A","#311D0C","#361F0C","#39220E","#3D250F","#41260F","#452911","#492B13","#4C2E13","#503014","#543114","#573416","#5A3617","#5E3817","#613B19","#653C1A","#683E1A","#6B401B","#6F431B","#72441D","#75461E","#79481E","#7C4A1F","#804C21","#834E21","#865022","#895222","#8C5423","#8F5625","#935725","#955926","#995B27","#9C5D27","#9E5E29","#A26029","#A5622A","#A7642B","#AB662B","#AE672C","#B1692E","#B46B2E","#B66D2F","#BA6F2F","#BC7030","#BF7231","#C27431","#C57632","#C87734","#CB7934","#CD7B35","#D17D35","#D37F36","#D68037","#D98237","#DC8438","#DF8639","#DF873D","#E08940","#E08B45","#E18E48","#E1904B","#E19250","#E29353","#E39557","#E3985A","#E49A5D","#E49C61","#E59D64","#E6A067","#E6A26B","#E6A46E","#E7A672","#E7A775","#E8AA78","#E8AC7C","#E9AE7F","#EAAF82","#EAB186","#EAB488","#EBB58C","#EBB78F","#ECB992","#ECBB95","#EDBD98","#EEBF9B","#EEC19E","#EFC2A1","#EFC5A5","#EFC7A7","#F0C8AA","#F0CAAE","#F1CCB0","#F2CEB3","#F2D0B6","#F3D2B9","#F3D3BC","#F3D6BF","#F4D7C1","#F4D9C5","#F5DBC7","#F6DCCA","#F6DFCD","#F7E1D0","#F7E2D3","#F7E4D6","#F8E6D8","#F8E8DC","#F9EADE","#FAEBE1","#FAEDE4","#FBEFE6","#FBF1EA","#FBF3EC","#FCF4EF","#FCF6F2","#FDF8F4","#FEFAF7","#FEFBFA","#FFFDFC","#000001","#070300","#0E0700","#130A03","#190C03","#1E0F03","#221305","#271605","#2C1707","#301A07","#351D07","#381F09","#3D2109","#412309","#45260A","#49290A","#4E2A0C","#512C0C","#552F0C","#58310E","#5C320E","#60350E","#63370F","#67390F","#6B3B11","#6E3D11","#723F11","#754113","#794313","#7D4513","#804714","#844914","#874A16","#8A4C16","#8E4F16","#915117","#945217","#985417","#9B5619","#9E5819","#A2591A","#A55B1A","#A85D1A","#AB5F1B","#AE601B","#B2621B","#B5641D","#B8661D","#BB671E","#BE691E","#C16B1E","#C46D1F","#C76E1F","#CB701F","#CD7221","#D17421","#D47522","#D77722","#DA7922","#DC7B23","#E07C23","#E37E23","#E68025","#E98225","#EC8326","#EC862A","#EC872F","#ED8932","#ED8B37","#ED8E3C","#EE903F","#EE9244","#EF9348","#EF964B","#EF9850","#EF9A53","#EF9C57","#EF9E5B","#F0A05E","#F0A262","#F1A466","#F1A669","#F1A86D","#F2AA70","#F2AC74","#F2AE78","#F3B07B","#F3B27F","#F3B483","#F3B686","#F3B889","#F4BA8C","#F4BB90","#F4BE93","#F5C096","#F5C19A","#F6C39D","#F6C6A0","#F6C7A4","#F7C9A6","#F7CBAA","#F7CDAE","#F7CFB0","#F7D1B4","#F8D2B7","#F8D5BA","#F8D7BD","#F9D8C0","#F9DAC3","#F9DCC7","#FADEC9","#FAE0CD","#FBE1D0","#FBE4D2","#FBE6D6","#FBE7D8","#FBE9DC","#FBEBDF","#FCEDE1","#FCEFE5","#FDF0E8","#FDF3EA","#FDF4EE","#FEF6F0","#FEF7F3","#FEFAF7","#FFFBF9","#FFFDFC","#000001","#070300","#0E0700","#140A00","#1A0C00","#1F0F00","#251300","#2A1400","#2F1703","#321A03","#371D03","#3C1E03","#402103","#452303","#492503","#4E2703","#522A05","#552C05","#592E05","#5D3005","#613205","#653405","#693605","#6D3805","#713907","#743C07","#783E07","#7C4007","#804107","#844407","#874607","#8B4707","#8F4909","#924B09","#954E09","#994F09","#9D5109","#A05309","#A45409","#A75609","#AB580A","#AE590A","#B15B0A","#B55D0A","#B85F0A","#BB600A","#BF620A","#C2640A","#C6650C","#C8670C","#CC690C","#CF6B0C","#D26C0C","#D66E0C","#D9700C","#DC710C","#E0730E","#E2750E","#E6770E","#E9780E","#EC7A0E","#EF7C0E","#F37D0E","#F67F0E","#F9810F","#F98314","#F9851A","#F9871F","#F98925","#F98B2A","#F98E2F","#F99034","#FA9238","#FA933C","#FA9640","#FA9845","#FA9A49","#FA9D4E","#FA9E52","#FAA056","#FBA25A","#FBA55D","#FBA661","#FBA865","#FBAB69","#FBAD6D","#FBAE71","#FBB075","#FBB379","#FBB57C","#FBB680","#FBB984","#FBBB87","#FBBC8B","#FBBF8F","#FBC193","#FCC296","#FCC499","#FCC79D","#FCC8A0","#FCCAA4","#FCCDA7","#FCCEAB","#FCD0AE","#FDD2B2","#FDD4B5","#FDD6B8","#FDD7BB","#FDDABF","#FDDCC2","#FDDDC6","#FDE0C9","#FEE1CD","#FEE3CF","#FEE5D2","#FEE7D6","#FEE9D9","#FEEADC","#FEEDE0","#FEEFE3","#FFF0E6","#FFF2E9","#FFF4EC","#FFF6EF","#FFF7F3","#FFFAF6","#FFFBF9","#FFFDFC","#000001","#050503","#090907","#0C0C0A","#0F0F0E","#131311","#161614","#191917","#1D1B1A","#1F1E1B","#22211E","#252321","#272623","#2A2926","#2C2B29","#2F2E2B","#32302E","#35322F","#373531","#393734","#3C3936","#3E3C38","#403E3B","#43403D","#46433F","#484540","#4A4743","#4C4945","#4F4B47","#514E49","#53504B","#55524E","#585450","#5A5651","#5C5853","#5E5A55","#605C57","#625E59","#64605B","#66625D","#69645F","#6B6660","#6D6862","#6F6A64","#716C66","#736E68","#75706A","#77726C","#7A746E","#7C766F","#7E7871","#807A73","#827C75","#847E77","#868079","#87827B","#8A847D","#8C867E","#8E8780","#908982","#928B84","#938D86","#958F87","#979189","#9A938B","#9B948D","#9D968F","#9E9891","#A09A93","#A29C94","#A49D96","#A69F98","#A7A19B","#A8A39D","#AAA59E","#ACA6A0","#AEA8A2","#AFAAA4","#B1ACA6","#B3AEA7","#B5AFAA","#B5B1AC","#B7B3AE","#B9B5AF","#BBB6B1","#BCB8B3","#BEBAB5","#C0BBB6","#C1BDB9","#C2BFBB","#C4C1BC","#C6C2BE","#C7C4C0","#C9C6C1","#CBC7C3","#CDC9C5","#CECBC7","#CFCDC9","#D1CECB","#D2D0CD","#D4D2CE","#D6D3D0","#D7D5D2","#D9D7D3","#DBD8D6","#DCDAD7","#DDDCD9","#DFDDDB","#E1DFDC","#E2E1DE","#E4E2E0","#E6E4E1","#E7E6E4","#E8E7E6","#EAE9E7","#EBEAE9","#EDECEA","#EFEEEC","#F0EFEE","#F2F1EF","#F3F3F2","#F4F4F3","#F6F6F5","#F7F7F7","#F9F9F8","#FBFBFA","#FCFCFB","#FEFEFD","#000001","#050503","#090907","#0E0C09","#110F0C","#14130F","#191611","#1B1914","#1F1B17","#221E19","#25211B","#29231D","#2B261F","#2E2922","#312B23","#342E26","#373029","#39322A","#3C352C","#3F372E","#413930","#443C32","#473E34","#494036","#4C4338","#4F4539","#51473C","#54493D","#564B3F","#584E41","#5B5043","#5D5245","#605447","#625648","#64584A","#675A4B","#695C4E","#6B5E50","#6E6051","#706253","#736455","#756656","#776858","#7A6A59","#7C6C5B","#7E6E5D","#81705E","#837260","#867462","#877663","#897865","#8C7A66","#8E7C68","#907E6A","#93806B","#94826D","#97846F","#998670","#9B8772","#9D8973","#9F8B75","#A18D77","#A48F78","#A6917A","#A8937C","#A9947E","#AB9680","#AC9883","#AE9A85","#AF9C86","#B09D89","#B29F8B","#B4A18E","#B5A390","#B6A592","#B7A694","#B9A896","#BBAA98","#BBAC9B","#BDAE9D","#BFAF9F","#C0B1A1","#C1B3A3","#C2B5A6","#C4B6A7","#C6B8A9","#C7BAAC","#C8BBAE","#CABDB0","#CBBFB2","#CDC1B4","#CDC2B6","#CFC4B8","#D1C6BA","#D2C7BC","#D3C9BE","#D5CBC1","#D6CDC2","#D7CEC4","#D8D0C7","#DAD2C8","#DCD3CA","#DCD5CD","#DED7CE","#E0D8D1","#E1DAD2","#E2DCD4","#E3DDD7","#E5DFD8","#E6E1DA","#E7E2DC","#E9E4DE","#EAE6E1","#EBE7E2","#EDE9E4","#EEEAE6","#EFECE8","#F1EEEA","#F2EFEC","#F3F1EE","#F5F3F0","#F6F4F2","#F7F6F3","#F8F7F6","#FAF9F7","#FBFBF9","#FCFCFB","#FEFEFD","#000001","#050503","#0A0905","#0E0C09","#130F0A","#17130C","#1A160F","#1E1911","#221B14","#251E16","#292117","#2B231A","#2F261B","#32291D","#352B1F","#382E21","#3C3023","#3E3225","#413526","#443729","#47392A","#4A3C2B","#4C3E2E","#50402F","#534331","#554532","#584734","#5A4936","#5D4B37","#604E38","#62503B","#65523C","#68543E","#6A563F","#6D5840","#6F5A43","#725C44","#755E45","#776047","#7A6248","#7D644A","#7F664B","#82684C","#846A4F","#866C50","#896E51","#8B7053","#8E7254","#917456","#937657","#957858","#977A5A","#9A7D5B","#9D7F5C","#9E815E","#A1835F","#A48561","#A68662","#A88863","#AA8A65","#AD8C66","#AF8E67","#B19069","#B4926A","#B6936C","#B7956E","#B89771","#BA9973","#BB9B76","#BB9D79","#BD9E7B","#BEA07E","#C0A281","#C1A483","#C1A686","#C3A787","#C4A98A","#C5AA8D","#C7AC8F","#C7AE92","#C9AF94","#CAB196","#CBB399","#CDB59B","#CDB69D","#CEB8A0","#D0BAA2","#D1BBA5","#D2BDA7","#D3BFA9","#D4C1AC","#D6C2AE","#D7C4B0","#D7C6B3","#D9C7B5","#DAC9B7","#DCCBBA","#DCCDBB","#DDCEBE","#DFD0C0","#E0D2C2","#E1D3C5","#E2D5C7","#E3D7C9","#E5D8CC","#E6DACD","#E6DCD0","#E8DDD2","#E9DFD4","#EAE1D7","#EBE2D8","#ECE4DB","#EEE6DD","#EFE7DF","#EFE9E1","#F1EAE3","#F2ECE6","#F3EEE8","#F4EFEA","#F5F1EC","#F7F3EF","#F7F4F0","#F8F6F3","#FAF7F4","#FBF9F7","#FBFBF9","#FDFCFB","#FEFEFD","#000001","#050503","#0A0905","#0F0C07","#140F09","#19130A","#1D160C","#21190E","#251B11","#271E13","#2B2114","#2F2316","#322617","#362919","#392B1A","#3D2E1B","#40301E","#43321F","#463521","#493722","#4C3923","#503C25","#533E26","#564027","#59432A","#5B452B","#5E472C","#61492E","#644B2F","#674E30","#6A5031","#6D5232","#705435","#725636","#755837","#785A38","#7B5C39","#7E5F3B","#81613C","#84633D","#86653F","#886740","#8B6941","#8E6B43","#916D44","#936F45","#967146","#997347","#9C7549","#9D774A","#A0794B","#A37B4C","#A67D4E","#A87F4F","#AB8150","#AE8351","#B08553","#B28654","#B58855","#B78A56","#BA8C57","#BC8E58","#BF9059","#C1925A","#C4935C","#C5955E","#C69761","#C79964","#C79B67","#C89D6A","#C99E6D","#CAA070","#CCA273","#CDA475","#CDA678","#CEA77B","#CFA97E","#D0AB81","#D1AD84","#D2AE86","#D3B089","#D4B28B","#D5B48E","#D6B591","#D7B793","#D7B996","#D8BB99","#D9BC9C","#DBBE9E","#DCC0A0","#DCC1A3","#DDC3A6","#DEC4A8","#DFC6AB","#E0C7AE","#E1C9B0","#E2CBB3","#E3CDB5","#E4CEB7","#E5D0BA","#E6D2BC","#E6D3BF","#E7D5C1","#E8D7C4","#EAD8C7","#EADAC8","#EBDCCB","#ECDDCD","#EDDFD0","#EEE1D2","#EFE2D5","#EFE4D7","#F1E6DA","#F2E7DC","#F3E9DE","#F3EAE1","#F4ECE3","#F5EEE6","#F6EFE8","#F7F1EA","#F8F3ED","#F9F4EF","#FAF6F1","#FBF7F3","#FBF9F6","#FCFBF8","#FDFCFB","#FEFEFD","#000001","#070500","#0C0903","#110C05","#160F07","#1A1309","#1E160A","#22190C","#271B0E","#2B1E0E","#2F210F","#322311","#362613","#392914","#3D2B16","#402E17","#453019","#483219","#4B351A","#4F371B","#52391D","#553C1E","#583E1F","#5B4021","#5F4322","#624522","#654723","#684925","#6B4B26","#6E4F27","#715129","#74532A","#78552B","#7B572B","#7E592C","#815B2E","#845D2F","#865F30","#896131","#8C6332","#906534","#936734","#956935","#986B36","#9B6D37","#9D6F38","#A07139","#A3733B","#A6753C","#A9773C","#AC793D","#AE7B3E","#B17D3F","#B47F40","#B68141","#B98343","#BC8544","#BF8744","#C18945","#C48B46","#C78D47","#C98F48","#CC9149","#CE934A","#D2944B","#D2964F","#D29852","#D39A55","#D49C58","#D59D5B","#D69F5E","#D7A161","#D7A265","#D7A468","#D8A66B","#D9A76E","#DAA971","#DBAB74","#DCAD77","#DCAE7A","#DDB07E","#DDB281","#DEB484","#DFB586","#E0B789","#E1B98C","#E1BB8F","#E2BC92","#E3BE95","#E3C098","#E4C19B","#E5C39D","#E6C5A0","#E6C7A3","#E7C8A6","#E8CAA8","#E9CCAC","#E9CDAE","#EACFB1","#EAD1B4","#EBD2B6","#ECD3B9","#EDD5BB","#EED7BE","#EFD8C1","#EFDAC4","#EFDCC7","#F0DDC9","#F1DFCC","#F2E1CE","#F3E2D1","#F3E4D3","#F4E6D7","#F4E7D9","#F5E9DC","#F6EADE","#F7ECE1","#F7EEE3","#F8EFE6","#F9F1E8","#FAF3EB","#FAF4EE","#FBF6F0","#FBF7F3","#FCF9F5","#FDFBF7","#FEFCFA","#FFFEFC","#000001","#070500","#0C0903","#130C03","#170F05","#1B1307","#211607","#251909","#2A1B0A","#2E1E0A","#31210C","#36230C","#39260E","#3D290F","#412B0F","#452E11","#493013","#4C3213","#503514","#543714","#573916","#5A3C17","#5E3E17","#614019","#65441A","#68461A","#6B481B","#6F4A1B","#724C1D","#754F1E","#79511E","#7C531F","#805521","#835721","#865922","#895B22","#8C5D23","#8F5F25","#936125","#956326","#996527","#9C6727","#9E6929","#A26B29","#A56D2A","#A76F2B","#AB712B","#AE742C","#B1762E","#B4782E","#B67A2F","#BA7C2F","#BC7E30","#BF8031","#C28231","#C58432","#C88634","#CB8734","#CD8935","#D18B35","#D38D36","#D68F37","#D99137","#DC9338","#DF9439","#DF963D","#E09840","#E09A45","#E19C48","#E19D4B","#E19F50","#E2A153","#E3A357","#E3A55A","#E4A65D","#E4A861","#E5AA64","#E6AC67","#E6AE6B","#E6AF6E","#E7B172","#E7B375","#E8B478","#E8B57C","#E9B77F","#EAB982","#EABB86","#EABC88","#EBBE8C","#EBC08F","#ECC192","#ECC395","#EDC598","#EEC79B","#EEC89E","#EFCAA1","#EFCCA5","#EFCDA7","#F0CFAA","#F0D1AE","#F1D2B0","#F2D4B3","#F2D6B6","#F3D7B9","#F3D9BC","#F3DABF","#F4DCC1","#F4DDC5","#F5DFC7","#F6E1CA","#F6E2CD","#F7E4D0","#F7E6D3","#F7E7D6","#F8E9D8","#F8EADC","#F9ECDE","#FAEEE1","#FAEFE4","#FBF1E6","#FBF3EA","#FBF4EC","#FCF6EF","#FCF7F2","#FDF9F4","#FEFBF7","#FEFCFA","#FFFEFC","#000001","#070500","#0E0900","#130C03","#190F03","#1E1303","#221605","#271905","#2C1B07","#301E07","#352107","#382309","#3D2609","#412909","#452B0A","#492E0A","#4E300C","#51320C","#55350C","#58370E","#5C3B0E","#603D0E","#633F0F","#67410F","#6B4411","#6E4611","#724811","#754A13","#794C13","#7D4F13","#805114","#845314","#875516","#8A5716","#8E5916","#915B17","#945D17","#985F17","#9B6119","#9E6319","#A2661A","#A5681A","#A86A1A","#AB6C1B","#AE6E1B","#B2701B","#B5721D","#B8741D","#BB761E","#BE781E","#C17A1E","#C47C1F","#C77E1F","#CB801F","#CD8221","#D18421","#D48622","#D78722","#DA8922","#DC8B23","#E08E23","#E39023","#E69225","#E99325","#EC9526","#EC972A","#EC992F","#ED9B32","#ED9D37","#ED9D3C","#EE9F3F","#EEA144","#EFA348","#EFA54B","#EFA650","#EFA853","#EFAA57","#EFAC5B","#F0AE5E","#F0AF62","#F1B166","#F1B369","#F1B56D","#F2B670","#F2B874","#F2BA78","#F3BB7B","#F3BD7F","#F3BF83","#F3C086","#F3C189","#F4C38C","#F4C590","#F4C793","#F5C896","#F5CA9A","#F6CC9D","#F6CDA0","#F6CFA4","#F7D1A6","#F7D2AA","#F7D4AE","#F7D6B0","#F7D7B4","#F8D9B7","#F8DBBA","#F8DCBD","#F9DEC0","#F9E0C3","#F9E1C7","#FAE2C9","#FAE4CD","#FBE6D0","#FBE7D2","#FBE9D6","#FBEAD8","#FBECDC","#FBEEDF","#FCEFE1","#FCF1E5","#FDF3E8","#FDF4EA","#FDF6EE","#FEF7F0","#FEF9F3","#FEFBF7","#FFFCF9","#FFFEFC","#000001","#070500","#0E0900","#140C00","#1A0F00","#1F1300","#251600","#2A1900","#2F1B03","#321E03","#372103","#3C2303","#402603","#452903","#492B03","#4E2E03","#523005","#553205","#593605","#5D3805","#613B05","#653D05","#693F05","#6D4105","#714407","#744607","#784807","#7C4A07","#804C07","#844F07","#875107","#8B5307","#8F5509","#925709","#955909","#995C09","#9D5E09","#A06009","#A46209","#A76409","#AB660A","#AE680A","#B16A0A","#B56C0A","#B86E0A","#BB700A","#BF720A","#C2740A","#C6760C","#C8780C","#CC7A0C","#CF7C0C","#D27F0C","#D6810C","#D9830C","#DC850C","#E0860E","#E2880E","#E68A0E","#E98C0E","#EC8E0E","#EF900E","#F3920E","#F6930E","#F9950F","#F99714","#F9991A","#F99B1F","#F99D25","#F99E2A","#F9A02F","#F9A234","#FAA438","#FAA63C","#FAA740","#FAA945","#FAAB49","#FAAC4E","#FAAE52","#FAAF56","#FBB15A","#FBB35D","#FBB561","#FBB665","#FBB869","#FBBA6D","#FBBB71","#FBBD75","#FBBF79","#FBC17C","#FBC280","#FBC484","#FBC687","#FBC78B","#FBC88F","#FBCA93","#FCCC96","#FCCD99","#FCCF9D","#FCD1A0","#FCD2A4","#FCD4A7","#FCD6AB","#FCD7AE","#FDD9B2","#FDDBB5","#FDDCB8","#FDDEBB","#FDE0BF","#FDE1C2","#FDE3C6","#FDE4C9","#FEE6CD","#FEE7CF","#FEE9D2","#FEEAD6","#FEECD9","#FEEEDC","#FEEFE0","#FEF1E3","#FFF3E6","#FFF4E9","#FFF6EC","#FFF7EF","#FFF9F3","#FFFBF6","#FFFCF9","#FFFEFC","#000001","#050503","#090907","#0C0C0A","#0F0F0E","#131311","#161614","#191917","#1D1B1A","#1F1E1B","#22211E","#252321","#272623","#2A2926","#2C2B29","#2F2E2B","#32302E","#35322F","#373531","#393734","#3C3936","#3E3C38","#403E3B","#43403D","#46433F","#484540","#4A4743","#4C4945","#4F4B47","#514E49","#53504B","#55524E","#585450","#5A5651","#5C5853","#5E5A55","#605C57","#625F59","#64615B","#66635D","#69655F","#6B6760","#6D6962","#6F6B64","#716D66","#736F68","#75716A","#77736C","#7A756E","#7C776F","#7E7971","#807B73","#827D75","#847F77","#868179","#87837B","#8A857D","#8C867E","#8E8880","#908A82","#928C84","#938E86","#959087","#979289","#9A938B","#9B958D","#9D978F","#9E9991","#A09B93","#A29D94","#A49E96","#A6A098","#A7A29B","#A8A49D","#AAA69E","#ACA7A0","#AEA9A2","#AFABA4","#B1ADA6","#B3AEA7","#B5B0AA","#B5B2AC","#B7B4AE","#B9B5AF","#BBB7B1","#BCB9B3","#BEBBB5","#C0BCB6","#C1BEB9","#C2C0BB","#C4C1BC","#C6C3BE","#C7C4C0","#C9C6C1","#CBC7C3","#CDC9C5","#CECBC7","#CFCDC9","#D1CECB","#D2D0CD","#D4D2CE","#D6D3D0","#D7D5D2","#D9D7D3","#DBD8D6","#DCDAD7","#DDDCD9","#DFDDDB","#E1DFDC","#E2E1DE","#E4E2E0","#E6E4E1","#E7E6E4","#E8E7E6","#EAE9E7","#EBEAE9","#EDECEA","#EFEEEC","#F0EFEE","#F2F1EF","#F3F3F2","#F4F4F3","#F6F6F5","#F7F7F7","#F9F9F8","#FBFBFA","#FCFCFB","#FEFEFD","#000001","#050503","#090907","#0E0C09","#110F0C","#14130F","#191611","#1B1914","#1F1B17","#221E19","#25211B","#29231D","#2B261F","#2E2A22","#312C23","#342F26","#373129","#39342A","#3C362C","#3F382E","#413B30","#443D32","#473F34","#494136","#4C4438","#4F4739","#51493C","#544B3D","#564E3F","#585041","#5B5243","#5D5445","#605647","#625848","#645A4A","#675C4B","#695E4E","#6B6150","#6E6351","#706553","#736755","#756956","#776B58","#7A6D59","#7C6F5B","#7E715D","#81735E","#837560","#867762","#877A63","#897C65","#8C7E66","#8E8068","#90826A","#93846B","#94866D","#97876F","#998970","#9B8B72","#9D8D73","#9F8F75","#A19277","#A49378","#A6957A","#A8977C","#A9997E","#AB9B80","#AC9D83","#AE9D85","#AF9F86","#B0A189","#B2A38B","#B4A58E","#B5A690","#B6A892","#B7AA94","#B9AC96","#BBAE98","#BBAF9B","#BDB19D","#BFB29F","#C0B4A1","#C1B5A3","#C2B7A6","#C4B9A7","#C6BBA9","#C7BCAC","#C8BEAE","#CAC0B0","#CBC1B2","#CDC3B4","#CDC5B6","#CFC6B8","#D1C7BA","#D2C9BC","#D3CBBE","#D5CDC1","#D6CEC2","#D7D0C4","#D8D2C7","#DAD3C8","#DCD5CA","#DCD7CD","#DED8CE","#E0D9D1","#E1DBD2","#E2DCD4","#E3DED7","#E5E0D8","#E6E1DA","#E7E3DC","#E9E5DE","#EAE6E1","#EBE8E2","#EDEAE4","#EEEBE6","#EFECE8","#F1EEEA","#F2EFEC","#F3F1EE","#F5F3F0","#F6F4F2","#F7F6F3","#F8F7F6","#FAF9F7","#FBFBF9","#FCFCFB","#FEFEFD","#000001","#050503","#0A0905","#0E0C09","#130F0A","#17130C","#1A160F","#1E1911","#221D14","#251F16","#292217","#2B251A","#2F271B","#322A1D","#352C1F","#383021","#3C3223","#3E3525","#413726","#443929","#473C2A","#4A3E2B","#4C412E","#50442F","#534631","#554832","#584A34","#5A4C36","#5D4F37","#605138","#62543B","#65563C","#68583E","#6A5A3F","#6D5C40","#6F5E43","#726044","#756345","#776547","#7A6748","#7D694A","#7F6B4B","#826D4C","#846F4F","#867250","#897451","#8B7653","#8E7854","#917A56","#937C57","#957E58","#97805A","#9A835B","#9D855C","#9E865E","#A1885F","#A48A61","#A68C62","#A88E63","#AA9165","#AD9366","#AF9467","#B19669","#B4986A","#B69A6C","#B79C6E","#B89D71","#BA9F73","#BBA176","#BBA379","#BDA47B","#BEA67E","#C0A781","#C1A983","#C1AB86","#C3AD87","#C4AE8A","#C5AF8D","#C7B18F","#C7B392","#C9B594","#CAB696","#CBB899","#CDBA9B","#CDBB9D","#CEBCA0","#D0BEA2","#D1C0A5","#D2C1A7","#D3C3A9","#D4C5AC","#D6C7AE","#D7C7B0","#D7C9B3","#D9CBB5","#DACDB7","#DCCEBA","#DCD0BB","#DDD2BE","#DFD2C0","#E0D4C2","#E1D6C5","#E2D7C7","#E3D9C9","#E5DBCC","#E6DCCD","#E6DED0","#E8DFD2","#E9E1D4","#EAE2D7","#EBE4D8","#ECE6DB","#EEE7DD","#EFE9DF","#EFEAE1","#F1EBE3","#F2EDE6","#F3EFE8","#F4F0EA","#F5F2EC","#F7F3EF","#F7F4F0","#F8F6F3","#FAF7F4","#FBF9F7","#FBFBF9","#FDFCFB","#FEFEFD","#000001","#050503","#0A0905","#0F0C07","#140F09","#19130A","#1D170C","#211A0E","#251D11","#271F13","#2B2214","#2F2616","#322917","#362B19","#392E1A","#3D301B","#40341E","#43361F","#463821","#493B22","#4C3D23","#504025","#534326","#564527","#59472A","#5B492B","#5E4B2C","#614F2E","#64512F","#675330","#6A5531","#6D5732","#705A35","#725C36","#755E37","#786038","#7B6239","#7E653B","#81673C","#84693D","#866B3F","#886D40","#8B7041","#8E7243","#917444","#937645","#967846","#997A47","#9C7D49","#9D7F4A","#A0814B","#A3834C","#A6854E","#A8874F","#AB8950","#AE8B51","#B08D53","#B28F54","#B59255","#B79356","#BA9557","#BC9758","#BF9959","#C19C5A","#C49D5C","#C59F5E","#C6A061","#C7A264","#C7A467","#C8A66A","#C9A76D","#CAA870","#CCAA73","#CDAC75","#CDAE78","#CEAF7B","#CFB07E","#D0B281","#D1B484","#D2B586","#D3B789","#D4B88B","#D5BA8E","#D6BB91","#D7BD93","#D7BF96","#D8C199","#D9C19C","#DBC39E","#DCC5A0","#DCC7A3","#DDC8A6","#DEC9A8","#DFCBAB","#E0CDAE","#E1CEB0","#E2D0B3","#E3D1B5","#E4D2B7","#E5D4BA","#E6D6BC","#E6D7BF","#E7D8C1","#E8DAC4","#EADCC7","#EADDC8","#EBDFCB","#ECE1CD","#EDE1D0","#EEE3D2","#EFE5D5","#EFE6D7","#F1E8DA","#F2E9DC","#F3EADE","#F3ECE1","#F4EEE3","#F5EFE6","#F6F0E8","#F7F2EA","#F8F3ED","#F9F5EF","#FAF7F1","#FBF7F3","#FBF9F6","#FCFBF8","#FDFCFB","#FEFEFD","#000001","#070500","#0C0903","#110C05","#160F07","#1A1409","#1E170A","#221A0C","#271D0E","#2B210E","#2F230F","#322611","#362913","#392C14","#3D2F16","#403117","#453419","#483719","#4B391A","#4F3C1B","#523E1D","#55411E","#58441F","#5B4621","#5F4822","#624B22","#654E23","#685025","#6B5226","#6E5527","#715729","#74592A","#785B2B","#7B5E2B","#7E602C","#81622E","#84642F","#866730","#896931","#8C6B32","#906D34","#937034","#957235","#987436","#9B7637","#9D7938","#A07B39","#A37D3B","#A67F3C","#A9823C","#AC843D","#AE863E","#B1873F","#B48A40","#B68C41","#B98E43","#BC9044","#BF9344","#C19445","#C49646","#C79847","#C99B48","#CC9D49","#CE9E4A","#D2A04B","#D2A24F","#D2A452","#D3A655","#D4A658","#D5A85B","#D6AA5E","#D7AC61","#D7AD65","#D7AE68","#D8B06B","#D9B26E","#DAB371","#DBB574","#DCB677","#DCB87A","#DDB97E","#DDBB81","#DEBC84","#DFBE86","#E0BF89","#E1C18C","#E1C28F","#E2C492","#E3C595","#E3C798","#E4C89B","#E5CA9D","#E6CBA0","#E6CDA3","#E7CEA6","#E8D0A8","#E9D1AC","#E9D2AE","#EAD4B1","#EAD6B4","#EBD7B6","#ECD8B9","#EDDABB","#EEDCBE","#EFDCC1","#EFDEC4","#EFE0C7","#F0E1C9","#F1E2CC","#F2E4CE","#F3E6D1","#F3E7D3","#F4E8D7","#F4EAD9","#F5EBDC","#F6EDDE","#F7EEE1","#F7EFE3","#F8F1E6","#F9F3E8","#FAF3EB","#FAF5EE","#FBF7F0","#FBF8F3","#FCF9F5","#FDFBF7","#FEFCFA","#FFFEFC","#000001","#070500","#0C0903","#130C03","#171105","#1B1407","#211707","#251B09","#2A1E0A","#2E210A","#31250C","#36270C","#392A0E","#3D2C0F","#41300F","#453211","#493513","#4C3813","#503B14","#543D14","#574016","#5A4317","#5E4517","#614719","#654A1A","#684C1A","#6B4F1B","#6F521B","#72541D","#75561E","#79591E","#7C5B1F","#805D21","#835F21","#866222","#896422","#8C6623","#8F6925","#936B25","#956D26","#997027","#9C7227","#9E7429","#A27629","#A5792A","#A77B2B","#AB7D2B","#AE802C","#B1822E","#B4842E","#B6862F","#BA882F","#BC8A30","#BF8C31","#C28F31","#C59132","#C89334","#CB9534","#CD9735","#D19935","#D39C36","#D69D37","#D99F37","#DCA138","#DFA439","#DFA53D","#E0A640","#E0A845","#E1AA48","#E1AB4B","#E1AD50","#E2AE53","#E3AF57","#E3B15A","#E4B35D","#E4B461","#E5B564","#E6B767","#E6B96B","#E6BA6E","#E7BB72","#E7BD75","#E8BE78","#E8C07C","#E9C17F","#EAC282","#EAC486","#EAC688","#EBC78C","#EBC88F","#ECCA92","#ECCC95","#EDCD98","#EECE9B","#EED09E","#EFD1A1","#EFD2A5","#EFD4A7","#F0D6AA","#F0D7AE","#F1D8B0","#F2DAB3","#F2DBB6","#F3DCB9","#F3DEBC","#F3DFBF","#F4E1C1","#F4E2C5","#F5E4C7","#F6E5CA","#F6E6CD","#F7E8D0","#F7E9D3","#F7EAD6","#F8ECD8","#F8EDDC","#F9EFDE","#FAF0E1","#FAF2E4","#FBF3E6","#FBF4EA","#FBF6EC","#FCF7EF","#FCF8F2","#FDFAF4","#FEFBF7","#FEFCFA","#FFFEFC","#000001","#070500","#0E0900","#130E03","#191103","#1E1403","#221905","#271B05","#2C1E07","#302207","#352507","#382709","#3D2B09","#412E09","#45300A","#49340A","#4E360C","#51390C","#553C0C","#583E0E","#5C410E","#60440E","#63460F","#67490F","#6B4B11","#6E4E11","#725111","#755313","#795513","#7D5813","#805A14","#845D14","#875F16","#8A6116","#8E6416","#916617","#946817","#986B17","#9B6D19","#9E6F19","#A2721A","#A5741A","#A8761A","#AB791B","#AE7B1B","#B27D1B","#B5801D","#B8821D","#BB851E","#BE861E","#C1881E","#C48B1F","#C78D1F","#CB8F1F","#CD9221","#D19321","#D49522","#D79822","#DA9A22","#DC9C23","#E09E23","#E3A023","#E6A325","#E9A525","#ECA626","#ECA82A","#ECAA2F","#EDAB32","#EDAD37","#EDAE3C","#EEAF3F","#EEB144","#EFB248","#EFB44B","#EFB550","#EFB653","#EFB857","#EFBA5B","#F0BB5E","#F0BC62","#F1BE66","#F1BF69","#F1C16D","#F2C170","#F2C374","#F2C578","#F3C67B","#F3C77F","#F3C983","#F3CA86","#F3CC89","#F4CD8C","#F4CE90","#F4D093","#F5D296","#F5D29A","#F6D49D","#F6D6A0","#F6D7A4","#F7D8A6","#F7D9AA","#F7DBAE","#F7DCB0","#F7DDB4","#F8DFB7","#F8E1BA","#F8E1BD","#F9E3C0","#F9E5C3","#F9E6C7","#FAE7C9","#FAE9CD","#FBEAD0","#FBEBD2","#FBECD6","#FBEED8","#FBEFDC","#FBF0DF","#FCF2E1","#FCF3E5","#FDF4E8","#FDF6EA","#FDF7EE","#FEF8F0","#FEFAF3","#FEFBF7","#FFFCF9","#FFFEFC","#000001","#070500","#0E0900","#140E00","#1A1100","#1F1600","#251900","#2A1B00","#2F1F03","#322203","#372603","#3C2903","#402B03","#452F03","#493103","#4E3503","#523705","#553905","#593D05","#5D3F05","#614305","#654505","#694805","#6D4A05","#714C07","#745007","#785207","#7C5507","#805707","#845907","#875C07","#8B5E07","#8F6109","#926309","#956509","#996809","#9D6A09","#A06D09","#A46F09","#A77109","#AB740A","#AE760A","#B1790A","#B57B0A","#B87E0A","#BB800A","#BF820A","#C2850A","#C6860C","#C8890C","#CC8B0C","#CF8D0C","#D2900C","#D6920C","#D9940C","#DC960C","#E0980E","#E29B0E","#E69D0E","#E99F0E","#ECA10E","#EFA40E","#F3A60E","#F6A70E","#F9AA0F","#F9AB14","#F9AD1A","#F9AE1F","#F9AF25","#F9B12A","#F9B22F","#F9B434","#FAB538","#FAB63C","#FAB840","#FAB945","#FABB49","#FABB4E","#FABD52","#FABF56","#FBC05A","#FBC15D","#FBC261","#FBC465","#FBC669","#FBC76D","#FBC871","#FBC975","#FBCB79","#FBCC7C","#FBCD80","#FBCF84","#FBD087","#FBD28B","#FBD28F","#FBD493","#FCD696","#FCD799","#FCD89D","#FCD9A0","#FCDBA4","#FCDCA7","#FCDDAB","#FCDFAE","#FDE0B2","#FDE1B5","#FDE3B8","#FDE4BB","#FDE6BF","#FDE6C2","#FDE8C6","#FDE9C9","#FEEACD","#FEECCF","#FEEDD2","#FEEFD6","#FEEFD9","#FEF1DC","#FEF3E0","#FEF3E3","#FFF5E6","#FFF6E9","#FFF7EC","#FFF9EF","#FFFAF3","#FFFBF6","#FFFCF9","#FFFEFC","#000001","#050503","#090907","#0C0C0A","#0F0F0E","#131311","#161614","#191917","#1D1B1A","#1F1E1B","#22211E","#252321","#272623","#2A2926","#2C2B29","#2F2E2B","#32302E","#35322F","#373531","#393734","#3C3B36","#3E3D38","#403F3B","#43413D","#46443F","#484640","#4A4843","#4C4A45","#4F4C47","#514F49","#53514B","#55534E","#585550","#5A5751","#5C5953","#5E5B55","#605D57","#625F59","#64615B","#66635D","#69665F","#6B6860","#6D6A62","#6F6C64","#716E66","#737068","#75726A","#77746C","#7A766E","#7C786F","#7E7A71","#807C73","#827E75","#848077","#868279","#87847B","#8A867D","#8C877E","#8E8980","#908B82","#928E84","#939086","#959287","#979389","#9A958B","#9B978D","#9D998F","#9E9B91","#A09D93","#A29D94","#A49F96","#A6A198","#A7A39B","#A8A59D","#AAA69E","#ACA8A0","#AEAAA2","#AFACA4","#B1AEA6","#B3AFA7","#B5B1AA","#B5B3AC","#B7B5AE","#B9B6AF","#BBB8B1","#BCBAB3","#BEBBB5","#C0BDB6","#C1BFB9","#C2C0BB","#C4C1BC","#C6C3BE","#C7C5C0","#C9C7C1","#CBC8C3","#CDCAC5","#CECCC7","#CFCDC9","#D1CFCB","#D2D1CD","#D4D2CE","#D6D4D0","#D7D6D2","#D9D7D3","#DBD9D6","#DCDBD7","#DDDCD9","#DFDEDB","#E1E0DC","#E2E1DE","#E4E2E0","#E6E4E1","#E7E6E4","#E8E7E6","#EAE9E7","#EBEAE9","#EDECEA","#EFEEEC","#F0EFEE","#F2F1EF","#F3F3F2","#F4F4F3","#F6F6F5","#F7F7F7","#F9F9F8","#FBFBFA","#FCFCFB","#FEFEFD","#000001","#050503","#090907","#0E0C09","#110F0C","#14130F","#191611","#1B1A14","#1F1D17","#221F19","#25221B","#29251D","#2B271F","#2E2A22","#312E23","#343026","#373229","#39352A","#3C372C","#3F392E","#413D30","#443F32","#474134","#494436","#4C4638","#4F4839","#514A3C","#544E3D","#56503F","#585241","#5B5443","#5D5645","#605847","#625B48","#645D4A","#675F4B","#69614E","#6B6350","#6E6551","#706753","#736A55","#756C56","#776E58","#7A7059","#7C725B","#7E745D","#81775E","#837960","#867B62","#877D63","#897F65","#8C8166","#8E8368","#90866A","#93876B","#94896D","#978B6F","#998D70","#9B8F72","#9D9173","#9F9375","#A19577","#A49778","#A6997A","#A89B7C","#A99D7E","#AB9E80","#ACA083","#AEA285","#AFA386","#B0A589","#B2A68B","#B4A88E","#B5AA90","#B6AC92","#B7AE94","#B9AE96","#BBB098","#BBB29B","#BDB49D","#BFB59F","#C0B7A1","#C1B9A3","#C2BAA6","#C4BBA7","#C6BDA9","#C7BFAC","#C8C1AE","#CAC2B0","#CBC3B2","#CDC5B4","#CDC7B6","#CFC8B8","#D1CABA","#D2CCBC","#D3CDBE","#D5CEC1","#D6D0C2","#D7D2C4","#D8D3C7","#DAD5C8","#DCD7CA","#DCD7CD","#DED9CE","#E0DBD1","#E1DCD2","#E2DED4","#E3E0D7","#E5E1D8","#E6E2DA","#E7E4DC","#E9E6DE","#EAE7E1","#EBE9E2","#EDEAE4","#EEEBE6","#EFEDE8","#F1EFEA","#F2F0EC","#F3F2EE","#F5F3F0","#F6F5F2","#F7F6F3","#F8F7F6","#FAF9F7","#FBFBF9","#FCFCFB","#FEFEFD","#000001","#050503","#0A0905","#0E0C09","#13110A","#17140C","#1A170F","#1E1A11","#221E14","#252116","#292317","#2B261A","#2F2A1B","#322C1D","#352F1F","#383121","#3C3523","#3E3725","#413926","#443C29","#473F2A","#4A412B","#4C442E","#50462F","#534931","#554B32","#584E34","#5A5036","#5D5337","#605538","#62573B","#65593C","#685C3E","#6A5E3F","#6D6040","#6F6243","#726544","#756745","#776947","#7A6B48","#7D6E4A","#7F704B","#82724C","#84744F","#867750","#897951","#8B7B53","#8E7D54","#918056","#938257","#958458","#97865A","#9A885B","#9D8A5C","#9E8C5E","#A18E5F","#A49161","#A69362","#A89463","#AA9665","#AD9966","#AF9B67","#B19D69","#B49E6A","#B6A16C","#B7A26E","#B8A471","#BAA673","#BBA776","#BBA879","#BDAA7B","#BEAC7E","#C0AE81","#C1AE83","#C1B086","#C3B287","#C4B48A","#C5B58D","#C7B68F","#C7B892","#C9BA94","#CABB96","#CBBC99","#CDBE9B","#CDC09D","#CEC1A0","#D0C2A2","#D1C4A5","#D2C6A7","#D3C7A9","#D4C8AC","#D6CAAE","#D7CCB0","#D7CDB3","#D9CEB5","#DAD0B7","#DCD2BA","#DCD2BB","#DDD4BE","#DFD6C0","#E0D7C2","#E1D8C5","#E2DAC7","#E3DCC9","#E5DDCC","#E6DECD","#E6E0D0","#E8E1D2","#E9E3D4","#EAE4D7","#EBE6D8","#ECE7DB","#EEE9DD","#EFEADF","#EFEBE1","#F1EDE3","#F2EFE6","#F3EFE8","#F4F1EA","#F5F3EC","#F7F4EF","#F7F5F0","#F8F7F3","#FAF8F4","#FBFAF7","#FBFBF9","#FDFCFB","#FEFEFD","#000001","#050503","#0A0905","#0F0E07","#141109","#19140A","#1D190C","#211B0E","#251E11","#272213","#2B2514","#2F2716","#322B17","#362E19","#39301A","#3D341B","#40361E","#43391F","#463C21","#493E22","#4C4123","#504425","#534626","#564927","#594B2A","#5B4E2B","#5E512C","#61532E","#64552F","#675830","#6A5A31","#6D5D32","#705F35","#726136","#756437","#786638","#7B6839","#7E6B3B","#816D3C","#846F3D","#86723F","#887440","#8B7641","#8E7943","#917B44","#937D45","#968046","#998247","#9C8549","#9D864A","#A0884B","#A38B4C","#A68D4E","#A88F4F","#AB9250","#AE9351","#B09553","#B29854","#B59A55","#B79C56","#BA9E57","#BCA058","#BFA359","#C1A55A","#C4A65C","#C5A85E","#C6AA61","#C7AB64","#C7AD67","#C8AE6A","#C9AF6D","#CAB170","#CCB273","#CDB475","#CDB578","#CEB67B","#CFB87E","#D0BA81","#D1BB84","#D2BC86","#D3BE89","#D4BF8B","#D5C18E","#D6C191","#D7C393","#D7C596","#D8C699","#D9C79C","#DBC99E","#DCCAA0","#DCCCA3","#DDCDA6","#DECEA8","#DFD0AB","#E0D2AE","#E1D2B0","#E2D4B3","#E3D6B5","#E4D7B7","#E5D8BA","#E6D9BC","#E6DBBF","#E7DCC1","#E8DDC4","#EADFC7","#EAE1C8","#EBE1CB","#ECE3CD","#EDE5D0","#EEE6D2","#EFE7D5","#EFE9D7","#F1EADA","#F2EBDC","#F3ECDE","#F3EEE1","#F4EFE3","#F5F0E6","#F6F2E8","#F7F3EA","#F8F4ED","#F9F6EF","#FAF7F1","#FBF8F3","#FBFAF6","#FCFBF8","#FDFCFB","#FEFEFD","#000001","#070500","#0C0903","#110E05","#161107","#1A1609","#1E190A","#221D0C","#271F0E","#2B230E","#2F260F","#322A11","#362C13","#392F14","#3D3216","#403517","#453819","#483B19","#4B3E1A","#4F401B","#52441D","#55461E","#58491F","#5B4B21","#5F4E22","#625122","#655323","#685625","#6B5826","#6E5B27","#715D29","#74602A","#78622B","#7B652B","#7E672C","#81692E","#846C2F","#866E30","#897131","#8C7332","#907634","#937834","#957B35","#987D36","#9B8037","#9D8238","#A08539","#A3863B","#A6883C","#A98B3C","#AC8D3D","#AE903E","#B1923F","#B49440","#B69641","#B99943","#BC9B44","#BF9D44","#C19F45","#C4A146","#C7A447","#C9A648","#CCA849","#CEAA4A","#D2AD4B","#D2AE4F","#D2AF52","#D3B055","#D4B258","#D5B35B","#D6B55E","#D7B661","#D7B765","#D7B968","#D8BA6B","#D9BB6E","#DABC71","#DBBE74","#DCBF77","#DCC17A","#DDC17E","#DDC381","#DEC584","#DFC686","#E0C789","#E1C88C","#E1CA8F","#E2CB92","#E3CD95","#E3CD98","#E4CF9B","#E5D09D","#E6D2A0","#E6D2A3","#E7D4A6","#E8D6A8","#E9D7AC","#E9D8AE","#EAD9B1","#EADBB4","#EBDCB6","#ECDDB9","#EDDEBB","#EEE0BE","#EFE1C1","#EFE2C4","#EFE4C7","#F0E5C9","#F1E6CC","#F2E7CE","#F3E9D1","#F3EAD3","#F4EBD7","#F4ECD9","#F5EEDC","#F6EFDE","#F7F0E1","#F7F2E3","#F8F3E6","#F9F4E8","#FAF5EB","#FAF7EE","#FBF7F0","#FBF9F3","#FCFAF5","#FDFBF7","#FEFCFA","#FFFEFC","#000001","#070500","#0C0A03","#130E03","#171305","#1B1607","#211A07","#251D09","#2A210A","#2E250A","#31270C","#362B0C","#392E0E","#3D310F","#41340F","#453711","#493913","#4C3D13","#504014","#544314","#574616","#5A4817","#5E4B17","#614E19","#65511A","#68531A","#6B561B","#6F591B","#725B1D","#755E1E","#79601E","#7C631F","#806521","#836821","#866A22","#896D22","#8C7023","#8F7225","#937525","#957726","#997A27","#9C7C27","#9E7F29","#A28229","#A5842A","#A7862B","#AB882B","#AE8B2C","#B18D2E","#B4902E","#B6922F","#BA942F","#BC9730","#BF9931","#C29C31","#C59D32","#C8A034","#CBA234","#CDA535","#D1A635","#D3A936","#D6AC37","#D9AE37","#DCB038","#DFB239","#DFB43D","#E0B540","#E0B645","#E1B748","#E1B84B","#E1BA50","#E2BB53","#E3BC57","#E3BD5A","#E4BF5D","#E4C061","#E5C164","#E6C267","#E6C36B","#E6C56E","#E7C672","#E7C775","#E8C878","#E8CA7C","#E9CB7F","#EACD82","#EACD86","#EACE88","#EBD08C","#EBD18F","#ECD292","#ECD395","#EDD598","#EED69B","#EED79E","#EFD8A1","#EFD9A5","#EFDBA7","#F0DCAA","#F0DDAE","#F1DEB0","#F2E0B3","#F2E1B6","#F3E1B9","#F3E3BC","#F3E4BF","#F4E6C1","#F4E6C5","#F5E8C7","#F6E9CA","#F6EACD","#F7EBD0","#F7ECD3","#F7EED6","#F8EFD8","#F8F0DC","#F9F1DE","#FAF3E1","#FAF3E4","#FBF5E6","#FBF6EA","#FBF7EC","#FCF8EF","#FCF9F2","#FDFBF4","#FEFBF7","#FEFDFA","#FFFEFC","#000001","#070500","#0E0A00","#130E03","#191303","#1E1703","#221A05","#271E05","#2C2207","#302507","#352907","#382C09","#3D2F09","#413209","#45360A","#49380A","#4E3C0C","#513F0C","#55410C","#58450E","#5C480E","#604A0E","#634E0F","#67510F","#6B5311","#6E5611","#725911","#755B13","#795E13","#7D6113","#806314","#846614","#876916","#8A6B16","#8E6E16","#917117","#947317","#987617","#9B7919","#9E7B19","#A27E1A","#A5811A","#A8831A","#AB861B","#AE881B","#B28A1B","#B58D1D","#B8901D","#BB921E","#BE941E","#C1971E","#C4991F","#C79C1F","#CB9D1F","#CDA021","#D1A321","#D4A522","#D7A722","#DAAA22","#DCAC23","#E0AE23","#E3B123","#E6B325","#E9B525","#ECB826","#ECB92A","#ECBA2F","#EDBB32","#EDBC37","#EDBD3C","#EEBF3F","#EEC044","#EFC148","#EFC24B","#EFC350","#EFC453","#EFC657","#EFC75B","#F0C85E","#F0C962","#F1CA66","#F1CC69","#F1CD6D","#F2CD70","#F2CF74","#F2D078","#F3D17B","#F3D27F","#F3D383","#F3D486","#F3D689","#F4D78C","#F4D790","#F4D993","#F5DA96","#F5DB9A","#F6DC9D","#F6DDA0","#F6DEA4","#F7E0A6","#F7E1AA","#F7E1AE","#F7E3B0","#F7E4B4","#F8E5B7","#F8E6BA","#F8E7BD","#F9E8C0","#F9EAC3","#F9EAC7","#FAEBC9","#FAEDCD","#FBEED0","#FBEFD2","#FBF0D6","#FBF1D8","#FBF2DC","#FBF3DF","#FCF4E1","#FCF5E5","#FDF7E8","#FDF7EA","#FDF8EE","#FEFAF0","#FEFBF3","#FEFBF7","#FFFDF9","#FFFEFC","#000001","#070500","#0E0A00","#140F00","#1A1400","#1F1700","#251B00","#2A1F00","#2F2303","#322603","#372A03","#3C2E03","#403103","#453403","#493703","#4E3B03","#523E05","#554005","#594405","#5D4705","#614A05","#654C05","#695005","#6D5305","#715607","#745907","#785B07","#7C5E07","#806107","#846407","#876607","#8B6907","#8F6C09","#926F09","#957109","#997409","#9D7709","#A07A09","#A47C09","#A77F09","#AB820A","#AE850A","#B1860A","#B5890A","#B88C0A","#BB8F0A","#BF920A","#C2930A","#C6960C","#C8990C","#CC9C0C","#CF9D0C","#D2A00C","#D6A30C","#D9A60C","#DCA70C","#E0AA0E","#E2AD0E","#E6AF0E","#E9B10E","#ECB40E","#EFB60E","#F3B90E","#F6BB0E","#F9BD0F","#F9BE14","#F9C01A","#F9C11F","#F9C125","#F9C22A","#F9C42F","#F9C534","#FAC638","#FAC73C","#FAC840","#FAC945","#FACA49","#FACB4E","#FACD52","#FACD56","#FBCE5A","#FBCF5D","#FBD161","#FBD265","#FBD269","#FBD36D","#FBD471","#FBD675","#FBD779","#FBD77C","#FBD880","#FBDA84","#FBDB87","#FBDC8B","#FBDC8F","#FBDE93","#FCDF96","#FCE099","#FCE19D","#FCE2A0","#FCE3A4","#FCE4A7","#FCE5AB","#FCE6AE","#FDE7B2","#FDE8B5","#FDE9B8","#FDEABB","#FDEBBF","#FDECC2","#FDEDC6","#FDEEC9","#FEEFCD","#FEF0CF","#FEF1D2","#FEF2D6","#FEF3D9","#FEF4DC","#FEF5E0","#FEF6E3","#FFF7E6","#FFF8E9","#FFF9EC","#FFFAEF","#FFFBF3","#FFFCF6","#FFFDF9","#FFFEFC","#000001","#050503","#090907","#0C0C0A","#0F0F0E","#131311","#161614","#191917","#1D1B1A","#1F1E1B","#22211E","#252321","#272623","#2A2926","#2C2C29","#2F2F2B","#32312E","#35342F","#373631","#393834","#3C3B36","#3E3D38","#403F3B","#43413D","#46443F","#484640","#4A4843","#4C4B45","#4F4E47","#515049","#53524B","#55544E","#585650","#5A5851","#5C5A53","#5E5C55","#605E57","#626059","#64625B","#66645D","#69665F","#6B6960","#6D6B62","#6F6D64","#716F66","#737168","#75736A","#77756C","#7A776E","#7C796F","#7E7B71","#807D73","#827F75","#848177","#868479","#87867B","#8A877D","#8C897E","#8E8B80","#908D82","#928F84","#939186","#959387","#979489","#9A968B","#9B988D","#9D9A8F","#9E9C91","#A09D93","#A29F94","#A4A196","#A6A398","#A7A59B","#A8A69D","#AAA89E","#ACA9A0","#AEABA2","#AFADA4","#B1AEA6","#B3B0A7","#B5B2AA","#B5B4AC","#B7B5AE","#B9B7AF","#BBB9B1","#BCBBB3","#BEBCB5","#C0BEB6","#C1BFB9","#C2C1BB","#C4C2BC","#C6C4BE","#C7C6C0","#C9C7C1","#CBC9C3","#CDCBC5","#CECDC7","#CFCEC9","#D1D0CB","#D2D2CD","#D4D3CE","#D6D5D0","#D7D6D2","#D9D7D3","#DBD9D6","#DCDBD7","#DDDCD9","#DFDEDB","#E1E0DC","#E2E1DE","#E4E3E0","#E6E5E1","#E7E6E4","#E8E8E6","#EAEAE7","#EBEAE9","#EDECEA","#EFEEEC","#F0EFEE","#F2F1EF","#F3F3F2","#F4F4F3","#F6F6F5","#F7F7F7","#F9F9F8","#FBFBFA","#FCFCFB","#FEFEFD","#000001","#050503","#090907","#0E0C09","#110F0C","#14140F","#191711","#1B1A14","#1F1D17","#222119","#25231B","#29261D","#2B291F","#2E2B22","#312F23","#343126","#373429","#39362A","#3C392C","#3F3C2E","#413E30","#444032","#474334","#494636","#4C4838","#4F4A39","#514C3C","#54503D","#56523F","#585441","#5B5643","#5D5845","#605B47","#625D48","#645F4A","#67614B","#69644E","#6B6650","#6E6851","#706A53","#736C55","#756F56","#777158","#7A7359","#7C755B","#7E785D","#817A5E","#837C60","#867E62","#878063","#898365","#8C8566","#8E8668","#90886A","#938B6B","#948D6D","#978F6F","#999170","#9B9372","#9D9573","#9F9775","#A19977","#A49B78","#A69D7A","#A89F7C","#A9A17E","#ABA280","#ACA483","#AEA685","#AFA786","#B0A889","#B2AA8B","#B4AC8E","#B5AE90","#B6AF92","#B7B094","#B9B296","#BBB498","#BBB59B","#BDB69D","#BFB89F","#C0BAA1","#C1BBA3","#C2BDA6","#C4BEA7","#C6C0A9","#C7C1AC","#C8C3AE","#CAC4B0","#CBC6B2","#CDC7B4","#CDC9B6","#CFCBB8","#D1CCBA","#D2CDBC","#D3CFBE","#D5D1C1","#D6D2C2","#D7D3C4","#D8D5C7","#DAD7C8","#DCD8CA","#DCD9CD","#DEDBCE","#E0DCD1","#E1DED2","#E2DFD4","#E3E1D7","#E5E2D8","#E6E4DA","#E7E6DC","#E9E6DE","#EAE8E1","#EBEAE2","#EDEBE4","#EEECE6","#EFEEE8","#F1EFEA","#F2F1EC","#F3F3EE","#F5F3F0","#F6F5F2","#F7F7F3","#F8F8F6","#FAF9F7","#FBFBF9","#FCFCFB","#FEFEFD","#000001","#050503","#0A0905","#0E0E09","#13110A","#17140C","#1A190F","#1E1B11","#221E14","#252216","#292517","#2B291A","#2F2B1B","#322E1D","#35311F","#383421","#3C3623","#3E3925","#413C26","#443F29","#47412A","#4A442B","#4C472E","#50492F","#534B31","#554F32","#585134","#5A5436","#5D5637","#605838","#625B3B","#655D3C","#685F3E","#6A623F","#6D6440","#6F6643","#726944","#756B45","#776E47","#7A7048","#7D724A","#7F754B","#82774C","#84794F","#867C50","#897E51","#8B8153","#8E8354","#918556","#938757","#958958","#978B5A","#9A8E5B","#9D905C","#9E935E","#A1945F","#A49661","#A69962","#A89B63","#AA9D65","#AD9F66","#AFA167","#B1A469","#B4A66A","#B6A76C","#B7A96E","#B8AB71","#BAAC73","#BBAE76","#BBAE79","#BDB07B","#BEB27E","#C0B381","#C1B583","#C1B686","#C3B787","#C4B98A","#C5BA8D","#C7BB8F","#C7BD92","#C9BE94","#CAC096","#CBC199","#CDC29B","#CDC49D","#CEC5A0","#D0C7A2","#D1C8A5","#D2C9A7","#D3CBA9","#D4CDAC","#D6CDAE","#D7CFB0","#D7D0B3","#D9D2B5","#DAD3B7","#DCD4BA","#DCD6BB","#DDD7BE","#DFD8C0","#E0DAC2","#E1DCC5","#E2DCC7","#E3DEC9","#E5DFCC","#E6E1CD","#E6E2D0","#E8E3D2","#E9E5D4","#EAE6D7","#EBE7D8","#ECE9DB","#EEEADD","#EFEBDF","#EFEDE1","#F1EEE3","#F2EFE6","#F3F1E8","#F4F2EA","#F5F3EC","#F7F4EF","#F7F6F0","#F8F7F3","#FAF8F4","#FBFAF7","#FBFBF9","#FDFCFB","#FEFEFD","#000001","#050503","#0A0A05","#0F0E07","#141309","#19160A","#1D1A0C","#211D0E","#252111","#272313","#2B2714","#2F2A16","#322E17","#363019","#39341A","#3D361B","#40391E","#433C1F","#463F21","#494122","#4C4523","#504725","#534A26","#564C27","#59502A","#5B522B","#5E552C","#61582E","#645A2F","#675D30","#6A5F31","#6D6232","#706435","#726736","#756937","#786C38","#7B6E39","#7E713B","#81733C","#84763D","#86783F","#887B40","#8B7D41","#8E8043","#918244","#938545","#968646","#998947","#9C8B49","#9D8E4A","#A0904B","#A3934C","#A6954E","#A8974F","#AB9A50","#AE9C51","#B09E53","#B2A054","#B5A355","#B7A556","#BAA757","#BCA958","#BFAC59","#C1AE5A","#C4B05C","#C5B15E","#C6B361","#C7B464","#C7B567","#C8B66A","#C9B86D","#CAB970","#CCBB73","#CDBB75","#CDBD78","#CEBE7B","#CFC07E","#D0C181","#D1C184","#D2C386","#D3C489","#D4C68B","#D5C78E","#D6C891","#D7C993","#D7CB96","#D8CC99","#D9CD9C","#DBCE9E","#DCD0A0","#DCD1A3","#DDD2A6","#DED3A8","#DFD5AB","#E0D6AE","#E1D7B0","#E2D8B3","#E3DAB5","#E4DBB7","#E5DCBA","#E6DDBC","#E6DFBF","#E7E0C1","#E8E1C4","#EAE2C7","#EAE3C8","#EBE5CB","#ECE6CD","#EDE7D0","#EEE8D2","#EFEAD5","#EFEAD7","#F1ECDA","#F2EDDC","#F3EFDE","#F3EFE1","#F4F1E3","#F5F2E6","#F6F3E8","#F7F4EA","#F8F6ED","#F9F7EF","#FAF8F1","#FBF9F3","#FBFBF6","#FCFBF8","#FDFDFB","#FEFEFD","#000001","#070500","#0C0A03","#110F05","#161307","#1A1709","#1E1B0A","#221E0C","#27220E","#2B260E","#2F290F","#322C11","#363013","#393214","#3D3616","#403917","#453C19","#483F19","#4B431A","#4F451B","#52481D","#554B1E","#584E1F","#5B5121","#5F5422","#625622","#655923","#685C25","#6B5E26","#6E6127","#716429","#74662A","#78692B","#7B6C2B","#7E6E2C","#81712E","#84742F","#867630","#897931","#8C7C32","#907E34","#938134","#958435","#988636","#9B8837","#9D8B38","#A08D39","#A3903B","#A6933C","#A9943C","#AC973D","#AE9A3E","#B19C3F","#B49E40","#B6A141","#B9A343","#BCA644","#BFA844","#C1AA45","#C4AD46","#C7AF47","#C9B148","#CCB449","#CEB64A","#D2B84B","#D2BA4F","#D2BB52","#D3BB55","#D4BD58","#D5BE5B","#D6BF5E","#D7C161","#D7C165","#D7C268","#D8C46B","#D9C56E","#DAC671","#DBC774","#DCC877","#DCC97A","#DDCB7E","#DDCC81","#DECD84","#DFCE86","#E0CF89","#E1D08C","#E1D28F","#E2D292","#E3D395","#E3D598","#E4D69B","#E5D79D","#E6D8A0","#E6D9A3","#E7DAA6","#E8DCA8","#E9DCAC","#E9DDAE","#EADFB1","#EAE0B4","#EBE1B6","#ECE2B9","#EDE3BB","#EEE4BE","#EFE6C1","#EFE6C4","#EFE7C7","#F0E9C9","#F1EACC","#F2EACE","#F3ECD1","#F3EDD3","#F4EED7","#F4EFD9","#F5F0DC","#F6F1DE","#F7F3E1","#F7F3E3","#F8F4E6","#F9F6E8","#FAF7EB","#FAF7EE","#FBF9F0","#FBFAF3","#FCFBF5","#FDFCF7","#FEFDFA","#FFFEFC","#000001","#070500","#0C0A03","#130F03","#171405","#1B1907","#211B07","#251F09","#2A230A","#2E270A","#312B0C","#362E0C","#39310E","#3D350F","#41380F","#453C11","#493F13","#4C4113","#504514","#544814","#574B16","#5A4F17","#5E5117","#615419","#65571A","#685A1A","#6B5D1B","#6F601B","#72621D","#75651E","#79681E","#7C6B1F","#806E21","#837021","#867322","#897622","#8C7923","#8F7C25","#937F25","#958126","#998427","#9C8627","#9E8929","#A28C29","#A58E2A","#A7912B","#AB932B","#AE962C","#B1992E","#B49C2E","#B69D2F","#BAA02F","#BCA330","#BFA631","#C2A831","#C5AA32","#C8AD34","#CBAF34","#CDB235","#D1B535","#D3B636","#D6B937","#D9BB37","#DCBE38","#DFC139","#DFC13D","#E0C240","#E0C345","#E1C448","#E1C64B","#E1C750","#E2C753","#E3C857","#E3C95A","#E4CB5D","#E4CC61","#E5CD64","#E6CD67","#E6CE6B","#E6D06E","#E7D172","#E7D275","#E8D278","#E8D37C","#E9D47F","#EAD682","#EAD786","#EAD788","#EBD88C","#EBD98F","#ECDB92","#ECDC95","#EDDC98","#EEDD9B","#EEDE9E","#EFDFA1","#EFE1A5","#EFE1A7","#F0E2AA","#F0E3AE","#F1E4B0","#F2E6B3","#F2E6B6","#F3E7B9","#F3E8BC","#F3E9BF","#F4EAC1","#F4EBC5","#F5ECC7","#F6EDCA","#F6EECD","#F7EFD0","#F7F0D3","#F7F1D6","#F8F2D8","#F8F3DC","#F9F3DE","#FAF4E1","#FAF6E4","#FBF7E6","#FBF7EA","#FBF8EC","#FCF9EF","#FCFBF2","#FDFBF4","#FEFCF7","#FEFDFA","#FFFEFC","#000001","#070500","#0E0A00","#130F03","#191403","#1E1903","#221D05","#272105","#2C2507","#302907","#352C07","#383009","#3D3409","#413709","#453B0A","#493E0A","#4E410C","#51450C","#55480C","#584B0E","#5C4F0E","#60520E","#63550F","#67580F","#6B5B11","#6E5E11","#726111","#756413","#796713","#7D6913","#806C14","#846F14","#877216","#8A7516","#8E7816","#917B17","#947E17","#988117","#9B8419","#9E8619","#A2891A","#A58C1A","#A88F1A","#AB921B","#AE941B","#B2971B","#B59A1D","#B89D1D","#BB9F1E","#BEA21E","#C1A51E","#C4A71F","#C7AA1F","#CBAD1F","#CDAF21","#D1B221","#D4B522","#D7B622","#DAB922","#DCBB23","#E0BE23","#E3C123","#E6C325","#E9C625","#ECC826","#ECC92A","#ECCA2F","#EDCB32","#EDCC37","#EDCD3C","#EECD3F","#EECE44","#EFD048","#EFD14B","#EFD250","#EFD253","#EFD357","#EFD45B","#F0D55E","#F0D662","#F1D766","#F1D769","#F1D86D","#F2D970","#F2DA74","#F2DB78","#F3DC7B","#F3DC7F","#F3DD83","#F3DE86","#F3DF89","#F4E08C","#F4E190","#F4E193","#F5E296","#F5E39A","#F6E49D","#F6E5A0","#F6E6A4","#F7E6A6","#F7E8AA","#F7E9AE","#F7EAB0","#F7EAB4","#F8EBB7","#F8ECBA","#F8EDBD","#F9EEC0","#F9EFC3","#F9EFC7","#FAF0C9","#FAF1CD","#FBF2D0","#FBF3D2","#FBF3D6","#FBF4D8","#FBF5DC","#FBF6DF","#FCF7E1","#FCF7E5","#FDF8E8","#FDF9EA","#FDFAEE","#FEFBF0","#FEFBF3","#FEFCF7","#FFFDF9","#FFFEFC","#000001","#070700","#0E0C00","#141100","#1A1600","#1F1A00","#251E00","#2A2200","#2F2603","#322B03","#372F03","#3C3203","#403603","#453903","#493D03","#4E4003","#524405","#554705","#594B05","#5D4F05","#615205","#655505","#695805","#6D5B05","#715E07","#746107","#786407","#7C6807","#806B07","#846E07","#877107","#8B7407","#8F7709","#927A09","#957D09","#998009","#9D8409","#A08609","#A48909","#A78C09","#AB8F0A","#AE920A","#B1940A","#B5970A","#B89A0A","#BB9D0A","#BFA00A","#C2A30A","#C6A60C","#C8A80C","#CCAB0C","#CFAE0C","#D2B00C","#D6B40C","#D9B60C","#DCB90C","#E0BB0E","#E2BE0E","#E6C10E","#E9C30E","#ECC60E","#EFC80E","#F3CC0E","#F6CE0E","#F9D10F","#F9D214","#F9D21A","#F9D21F","#F9D325","#F9D42A","#F9D52F","#F9D634","#FAD738","#FAD73C","#FAD840","#FAD945","#FAD949","#FADA4E","#FADB52","#FADC56","#FBDC5A","#FBDD5D","#FBDE61","#FBDF65","#FBDF69","#FBE06D","#FBE171","#FBE175","#FBE279","#FBE37C","#FBE480","#FBE584","#FBE687","#FBE68B","#FBE68F","#FBE793","#FCE896","#FCE999","#FCEA9D","#FCEAA0","#FCEBA4","#FCECA7","#FCECAB","#FCEDAE","#FDEEB2","#FDEFB5","#FDEFB8","#FDF0BB","#FDF1BF","#FDF2C2","#FDF3C6","#FDF3C9","#FEF3CD","#FEF4CF","#FEF5D2","#FEF6D6","#FEF7D9","#FEF7DC","#FEF8E0","#FEF9E3","#FFF9E6","#FFFAE9","#FFFBEC","#FFFBEF","#FFFCF3","#FFFDF6","#FFFEF9","#FFFFFC","#000001","#050503","#090907","#0C0C0A","#0F0F0E","#131311","#161614","#191917","#1D1B1A","#1F1E1B","#22211E","#252521","#272723","#2A2A26","#2C2C29","#2F2F2B","#32312E","#35342F","#373631","#393834","#3C3B36","#3E3E38","#40403B","#43433D","#46453F","#484740","#4A4943","#4C4B45","#4F4E47","#515049","#53524B","#55554E","#585750","#5A5951","#5C5B53","#5E5D55","#605F57","#626159","#64635B","#66655D","#69675F","#6B6A60","#6D6C62","#6F6E64","#717066","#737268","#75746A","#77766C","#7A786E","#7C7A6F","#7E7C71","#807E73","#828175","#848377","#868579","#87867B","#8A887D","#8C8A7E","#8E8C80","#908E82","#929084","#939286","#959487","#979689","#9A988B","#9B9A8D","#9D9C8F","#9E9D91","#A09E93","#A2A094","#A4A296","#A6A498","#A7A69B","#A8A79D","#AAA99E","#ACABA0","#AEADA2","#AFAEA4","#B1AFA6","#B3B1A7","#B5B3AA","#B5B5AC","#B7B6AE","#B9B8AF","#BBBAB1","#BCBBB3","#BEBDB5","#C0BFB6","#C1C0B9","#C2C1BB","#C4C3BC","#C6C5BE","#C7C7C0","#C9C8C1","#CBCAC3","#CDCCC5","#CECDC7","#CFCFC9","#D1D0CB","#D2D2CD","#D4D3CE","#D6D5D0","#D7D7D2","#D9D8D3","#DBDAD6","#DCDCD7","#DDDDD9","#DFDFDB","#E1E0DC","#E2E1DE","#E4E3E0","#E6E5E1","#E7E6E4","#E8E8E6","#EAEAE7","#EBEBE9","#EDEDEA","#EFEFEC","#F0EFEE","#F2F1EF","#F3F3F2","#F4F4F3","#F6F6F5","#F7F7F7","#F9F9F8","#FBFBFA","#FCFCFB","#FEFEFD","#000001","#050503","#090907","#0E0C09","#11110C","#14140F","#191711","#1B1B14","#1F1E17","#222119","#25231B","#29271D","#2B2A1F","#2E2C22","#313023","#343226","#373529","#39372A","#3C3B2C","#3F3D2E","#413F30","#444332","#474534","#494736","#4C4A38","#4F4C39","#514F3C","#54513D","#56543F","#585641","#5B5843","#5D5B45","#605D47","#625F48","#64614A","#67644B","#69664E","#6B6850","#6E6B51","#706D53","#736F55","#757256","#777458","#7A7659","#7C785B","#7E7B5D","#817D5E","#837F60","#868262","#878463","#898665","#8C8766","#8E8A68","#908C6A","#938E6B","#94916D","#97936F","#999470","#9B9672","#9D9973","#9F9B75","#A19D77","#A49F78","#A6A17A","#A8A37C","#A9A57E","#ABA680","#ACA783","#AEA985","#AFAB86","#B0AC89","#B2AE8B","#B4AF8E","#B5B190","#B6B292","#B7B494","#B9B596","#BBB698","#BBB89B","#BDBA9D","#BFBB9F","#C0BCA1","#C1BEA3","#C2C0A6","#C4C1A7","#C6C2A9","#C7C4AC","#C8C6AE","#CAC7B0","#CBC8B2","#CDCAB4","#CDCBB6","#CFCDB8","#D1CEBA","#D2CFBC","#D3D1BE","#D5D2C1","#D6D4C2","#D7D5C4","#D8D7C7","#DAD8C8","#DCD9CA","#DCDBCD","#DEDCCE","#E0DED1","#E1DFD2","#E2E1D4","#E3E2D7","#E5E3D8","#E6E5DA","#E7E6DC","#E9E7DE","#EAE9E1","#EBEAE2","#EDECE4","#EEEDE6","#EFEFE8","#F1F0EA","#F2F1EC","#F3F3EE","#F5F4F0","#F6F6F2","#F7F7F3","#F8F8F6","#FAFAF7","#FBFBF9","#FCFCFB","#FEFEFD","#000001","#050503","#0A0905","#0E0E09","#13110A","#17160C","#1A190F","#1E1D11","#221F14","#252316","#292617","#2B2A1A","#2F2C1B","#32301D","#35321F","#383621","#3C3823","#3E3C25","#413E26","#444129","#47442A","#4A472B","#4C492E","#504C2F","#534F31","#555232","#585434","#5A5736","#5D5937","#605C38","#625E3B","#65613C","#68633E","#6A663F","#6D6840","#6F6B43","#726D44","#757045","#777247","#7A7548","#7D774A","#7F7A4B","#827C4C","#847E4F","#868150","#898351","#8B8653","#8E8754","#918A56","#938C57","#958F58","#97915A","#9A935B","#9D955C","#9E985E","#A19A5F","#A49D61","#A69E62","#A8A163","#AAA365","#ADA666","#AFA767","#B1AA69","#B4AC6A","#B6AE6C","#B7AF6E","#B8B171","#BAB273","#BBB476","#BBB579","#BDB67B","#BEB77E","#C0B981","#C1BA83","#C1BB86","#C3BC87","#C4BE8A","#C5BF8D","#C7C18F","#C7C192","#C9C394","#CAC496","#CBC699","#CDC79B","#CDC89D","#CEC9A0","#D0CBA2","#D1CDA5","#D2CDA7","#D3CFA9","#D4D0AC","#D6D2AE","#D7D2B0","#D7D4B3","#D9D5B5","#DAD7B7","#DCD7BA","#DCD9BB","#DDDABE","#DFDCC0","#E0DCC2","#E1DEC5","#E2DFC7","#E3E1C9","#E5E1CC","#E6E3CD","#E6E4D0","#E8E6D2","#E9E6D4","#EAE8D7","#EBE9D8","#ECEADB","#EEEBDD","#EFEDDF","#EFEEE1","#F1EFE3","#F2F0E6","#F3F2E8","#F4F3EA","#F5F4EC","#F7F5EF","#F7F7F0","#F8F7F3","#FAF9F4","#FBFAF7","#FBFBF9","#FDFCFB","#FEFEFD","#000001","#050503","#0A0A05","#0F0F07","#141309","#19170A","#1D1B0C","#211E0E","#252211","#272613","#2B2914","#2F2C16","#323017","#363219","#39361A","#3D391B","#403C1E","#433F1F","#464321","#494522","#4C4823","#504B25","#534F26","#565127","#59542A","#5B572B","#5E592C","#615C2E","#645F2F","#676130","#6A6431","#6D6732","#706935","#726C36","#756F37","#787138","#7B7439","#7E773B","#81793C","#847C3D","#867F3F","#888240","#8B8441","#8E8643","#918944","#938B45","#968E46","#999147","#9C9349","#9D954A","#A0984B","#A39A4C","#A69D4E","#A89F4F","#ABA150","#AEA451","#B0A653","#B2A854","#B5AB55","#B7AE56","#BAB057","#BCB258","#BFB559","#C1B75A","#C4B95C","#C5BB5E","#C6BB61","#C7BC64","#C7BE67","#C8BF6A","#C9C06D","#CAC170","#CCC273","#CDC375","#CDC478","#CEC67B","#CFC77E","#D0C781","#D1C984","#D2CA86","#D3CB89","#D4CD8B","#D5CD8E","#D6CE91","#D7D093","#D7D196","#D8D299","#D9D39C","#DBD49E","#DCD5A0","#DCD6A3","#DDD7A6","#DED8A8","#DFD9AB","#E0DBAE","#E1DCB0","#E2DCB3","#E3DEB5","#E4DFB7","#E5E0BA","#E6E1BC","#E6E2BF","#E7E3C1","#E8E5C4","#EAE6C7","#EAE6C8","#EBE8CB","#ECE9CD","#EDEAD0","#EEEAD2","#EFECD5","#EFEDD7","#F1EEDA","#F2EFDC","#F3F0DE","#F3F1E1","#F4F3E3","#F5F3E6","#F6F4E8","#F7F6EA","#F8F7ED","#F9F7EF","#FAF9F1","#FBFAF3","#FBFBF6","#FCFCF8","#FDFDFB","#FEFEFD","#000001","#070500","#0C0A03","#110F05","#161407","#1A1909","#1E1D0A","#22210C","#27250E","#2B270E","#2F2B0F","#322F11","#363213","#393614","#3D3916","#403D17","#454019","#484319","#4B461A","#4F491B","#524C1D","#55501E","#58531F","#5B5621","#5F5922","#625B22","#655E23","#686125","#6B6426","#6E6727","#716A29","#746D2A","#78702B","#7B732B","#7E752C","#81782E","#847B2F","#867E30","#898131","#8C8432","#908634","#938934","#958B35","#988E36","#9B9137","#9D9338","#A09639","#A3993B","#A69C3C","#A99E3C","#ACA03D","#AEA33E","#B1A63F","#B4A840","#B6AB41","#B9AE43","#BCB044","#BFB344","#C1B545","#C4B746","#C7BA47","#C9BC48","#CCBF49","#CEC14A","#D2C44B","#D2C54F","#D2C652","#D3C755","#D4C758","#D5C85B","#D6C95E","#D7CB61","#D7CC65","#D7CD68","#D8CD6B","#D9CE6E","#DACF71","#DBD074","#DCD177","#DCD27A","#DDD37E","#DDD481","#DED584","#DFD686","#E0D789","#E1D78C","#E1D88F","#E2DA92","#E3DB95","#E3DC98","#E4DC9B","#E5DD9D","#E6DEA0","#E6DFA3","#E7E0A6","#E8E1A8","#E9E2AC","#E9E3AE","#EAE4B1","#EAE5B4","#EBE6B6","#ECE6B9","#EDE7BB","#EEE8BE","#EFEAC1","#EFEAC4","#EFEBC7","#F0ECC9","#F1EDCC","#F2EECE","#F3EFD1","#F3EFD3","#F4F1D7","#F4F2D9","#F5F3DC","#F6F3DE","#F7F4E1","#F7F5E3","#F8F6E6","#F9F7E8","#FAF8EB","#FAF9EE","#FBFAF0","#FBFBF3","#FCFBF5","#FDFCF7","#FEFDFA","#FFFEFC","#000001","#070700","#0C0C03","#131103","#171605","#1B1A07","#211E07","#252209","#2A260A","#2E2A0A","#312E0C","#36310C","#39350E","#3D380F","#413D0F","#454011","#494413","#4C4713","#504A14","#544E14","#575116","#5A5417","#5E5717","#615A19","#655D1A","#68601A","#6B631B","#6F671B","#726A1D","#756D1E","#79701E","#7C731F","#807621","#837921","#867C22","#897F22","#8C8223","#8F8525","#938725","#958A26","#998D27","#9C9127","#9E9329","#A29629","#A5992A","#A79C2B","#AB9E2B","#AEA12C","#B1A42E","#B4A62E","#B6A92F","#BAAC2F","#BCAE30","#BFB131","#C2B531","#C5B732","#C8BA34","#CBBC34","#CDBF35","#D1C135","#D3C436","#D6C737","#D9C937","#DCCC38","#DFCE39","#DFCF3D","#E0D040","#E0D145","#E1D248","#E1D24B","#E1D350","#E2D453","#E3D557","#E3D65A","#E4D75D","#E4D761","#E5D764","#E6D867","#E6D96B","#E6DA6E","#E7DB72","#E7DC75","#E8DC78","#E8DD7C","#E9DE7F","#EADF82","#EAE086","#EAE188","#EBE18C","#EBE18F","#ECE292","#ECE395","#EDE498","#EEE59B","#EEE69E","#EFE6A1","#EFE7A5","#EFE8A7","#F0E9AA","#F0EAAE","#F1EAB0","#F2EBB3","#F2EBB6","#F3ECB9","#F3EDBC","#F3EEBF","#F4EFC1","#F4EFC5","#F5F0C7","#F6F1CA","#F6F2CD","#F7F3D0","#F7F3D3","#F7F4D6","#F8F5D8","#F8F5DC","#F9F6DE","#FAF7E1","#FAF7E4","#FBF8E6","#FBF9EA","#FBFAEC","#FCFBEF","#FCFBF2","#FDFCF4","#FEFDF7","#FEFEFA","#FFFFFC","#000001","#070700","#0E0C00","#131103","#191703","#1E1B03","#221F05","#272305","#2C2907","#302C07","#353007","#383409","#3D3809","#413C09","#453F0A","#49440A","#4E470C","#514A0C","#554E0C","#58520E","#5C550E","#60580E","#635B0F","#675F0F","#6B6211","#6E6511","#726911","#756C13","#796F13","#7D7213","#807614","#847914","#877C16","#8A7F16","#8E8316","#918617","#948817","#988B17","#9B8F19","#9E9219","#A2941A","#A5981A","#A89B1A","#AB9D1B","#AEA01B","#B2A41B","#B5A61D","#B8A91D","#BBAC1E","#BEAF1E","#C1B21E","#C4B51F","#C7B81F","#CBBB1F","#CDBD21","#D1C021","#D4C322","#D7C622","#DAC822","#DCCB23","#E0CE23","#E3D123","#E6D325","#E9D625","#ECD926","#ECD92A","#ECDA2F","#EDDB32","#EDDC37","#EDDC3C","#EEDC3F","#EEDD44","#EFDE48","#EFDE4B","#EFDF50","#EFE053","#EFE157","#EFE15B","#F0E15E","#F0E262","#F1E266","#F1E369","#F1E46D","#F2E570","#F2E574","#F2E678","#F3E67B","#F3E77F","#F3E783","#F3E886","#F3E989","#F4E98C","#F4EA90","#F4EA93","#F5EB96","#F5EB9A","#F6EC9D","#F6EDA0","#F6EEA4","#F7EEA6","#F7EFAA","#F7EFAE","#F7F0B0","#F7F0B4","#F8F1B7","#F8F2BA","#F8F2BD","#F9F3C0","#F9F3C3","#F9F4C7","#FAF4C9","#FAF5CD","#FBF6D0","#FBF7D2","#FBF7D6","#FBF7D8","#FBF8DC","#FBF8DF","#FCF9E1","#FCFAE5","#FDFBE8","#FDFBEA","#FDFBEE","#FEFCF0","#FEFDF3","#FEFDF7","#FFFEF9","#FFFFFC","#000001","#070700","#0E0C00","#141300","#1A1700","#1F1D00","#252100","#2A2600","#2F2A03","#322F03","#373203","#3C3703","#403B03","#453F03","#494303","#4E4603","#524A05","#554E05","#595205","#5D5505","#615905","#655C05","#696005","#6D6305","#716707","#746A07","#786E07","#7C7107","#807507","#847807","#877B07","#8B7F07","#8F8209","#928609","#958809","#998C09","#9D8F09","#A09309","#A49509","#A79909","#AB9C0A","#AE9F0A","#B1A20A","#B5A50A","#B8A80A","#BBAB0A","#BFAE0A","#C2B10A","#C6B50C","#C8B70C","#CCBB0C","#CFBD0C","#D2C10C","#D6C30C","#D9C70C","#DCC90C","#E0CD0E","#E2CF0E","#E6D20E","#E9D50E","#ECD70E","#EFDB0E","#F3DD0E","#F6E10E","#F9E30F","#F9E414","#F9E41A","#F9E51F","#F9E525","#F9E62A","#F9E62F","#F9E634","#FAE738","#FAE73C","#FAE840","#FAE845","#FAE949","#FAE94E","#FAEA52","#FAEA56","#FBEA5A","#FBEA5D","#FBEB61","#FBEB65","#FBEC69","#FBEC6D","#FBED71","#FBEE75","#FBEE79","#FBEF7C","#FBEF80","#FBEF84","#FBEF87","#FBF08B","#FBF08F","#FBF193","#FCF196","#FCF299","#FCF29D","#FCF3A0","#FCF3A4","#FCF3A7","#FCF4AB","#FCF4AE","#FDF5B2","#FDF5B5","#FDF6B8","#FDF6BB","#FDF7BF","#FDF7C2","#FDF7C6","#FDF7C9","#FEF8CD","#FEF8CF","#FEF9D2","#FEFAD6","#FEFAD9","#FEFBDC","#FEFBE0","#FEFBE3","#FFFBE6","#FFFCE9","#FFFCEC","#FFFDEF","#FFFDF3","#FFFEF6","#FFFEF9","#FFFFFC","#000001","#050503","#090907","#0C0C0A","#0F0F0E","#131311","#161614","#191917","#1D1B1A","#1F1F1B","#22221E","#252521","#272723","#2A2A26","#2C2C29","#2F2F2B","#32312E","#35352F","#373731","#393934","#3C3C36","#3E3E38","#40403B","#43433D","#46453F","#484840","#4A4A43","#4C4C45","#4F4F47","#515149","#53534B","#55554E","#585750","#5A5951","#5C5C53","#5E5E55","#606057","#626259","#64645B","#66665D","#69685F","#6B6A60","#6D6D62","#6F6F64","#717166","#737368","#75756A","#77776C","#7A796E","#7C7B6F","#7E7E71","#808073","#828275","#848477","#868679","#87877B","#8A897D","#8C8B7E","#8E8E80","#909082","#929284","#939386","#959587","#979789","#9A998B","#9B9B8D","#9D9D8F","#9E9E91","#A0A093","#A2A294","#A4A496","#A6A598","#A7A69B","#A8A89D","#AAAA9E","#ACACA0","#AEAEA2","#AFAFA4","#B1B1A6","#B3B2A7","#B5B4AA","#B5B5AC","#B7B7AE","#B9B9AF","#BBBBB1","#BCBCB3","#BEBEB5","#C0BFB6","#C1C1B9","#C2C2BB","#C4C4BC","#C6C6BE","#C7C7C0","#C9C9C1","#CBCBC3","#CDCCC5","#CECDC7","#CFCFC9","#D1D1CB","#D2D2CD","#D4D4CE","#D6D6D0","#D7D7D2","#D9D9D3","#DBDAD6","#DCDCD7","#DDDDD9","#DFDFDB","#E1E1DC","#E2E2DE","#E4E4E0","#E6E6E1","#E7E6E4","#E8E8E6","#EAEAE7","#EBEBE9","#EDEDEA","#EFEFEC","#F0F0EE","#F2F2EF","#F3F3F2","#F4F4F3","#F6F6F5","#F7F7F7","#F9F9F8","#FBFBFA","#FCFCFB","#FEFEFD","#000001","#050503","#090907","#0E0E09","#11110C","#14140F","#191911","#1B1B14","#1F1E17","#222219","#25251B","#29271D","#2B2B1F","#2E2E22","#313123","#343426","#373629","#39392A","#3C3C2C","#3F3E2E","#414130","#444432","#474634","#494936","#4C4B38","#4F4F39","#51513C","#54533D","#56563F","#585841","#5B5A43","#5D5D45","#605F47","#626148","#64644A","#67664B","#69694E","#6B6B50","#6E6D51","#707053","#737255","#757456","#777758","#7A7959","#7C7B5B","#7E7E5D","#81805E","#838360","#868562","#878663","#898965","#8C8B66","#8E8D68","#90906A","#93926B","#94936D","#97966F","#999870","#9B9B72","#9D9D73","#9F9E75","#A1A177","#A4A378","#A6A57A","#A8A77C","#A9A87E","#ABAA80","#ACAC83","#AEAD85","#AFAE86","#B0B089","#B2B18B","#B4B38E","#B5B490","#B6B592","#B7B794","#B9B896","#BBBA98","#BBBB9B","#BDBC9D","#BFBE9F","#C0C0A1","#C1C1A3","#C2C2A6","#C4C3A7","#C6C5A9","#C7C7AC","#C8C7AE","#CAC9B0","#CBCBB2","#CDCCB4","#CDCDB6","#CFCFB8","#D1D0BA","#D2D2BC","#D3D2BE","#D5D4C1","#D6D6C2","#D7D7C4","#D8D8C7","#DADAC8","#DCDBCA","#DCDCCD","#DEDECE","#E0DFD1","#E1E1D2","#E2E1D4","#E3E3D7","#E5E5D8","#E6E6DA","#E7E7DC","#E9E9DE","#EAEAE1","#EBEBE2","#EDEDE4","#EEEEE6","#EFEFE8","#F1F0EA","#F2F2EC","#F3F3EE","#F5F4F0","#F6F6F2","#F7F7F3","#F8F8F6","#FAFAF7","#FBFBF9","#FCFCFB","#FEFEFD","#000001","#050503","#0A0A05","#0E0E09","#13130A","#17170C","#1A1A0F","#1E1E11","#222114","#252516","#292917","#2B2B1A","#2F2F1B","#32311D","#35351F","#383821","#3C3B23","#3E3E25","#414026","#444429","#47472A","#4A492B","#4C4C2E","#504F2F","#535231","#555532","#585734","#5A5A36","#5D5C37","#605F38","#62623B","#65643C","#68673E","#6A693F","#6D6C40","#6F6F43","#727144","#757445","#777747","#7A7948","#7D7C4A","#7F7E4B","#82814C","#84844F","#868650","#898851","#8B8A53","#8E8D54","#919056","#939257","#959458","#97965A","#9A995B","#9D9C5C","#9E9D5E","#A1A05F","#A4A261","#A6A562","#A8A763","#AAA965","#ADAC66","#AFAE67","#B1B069","#B4B36A","#B6B56C","#B7B66E","#B8B771","#BAB873","#BBBA76","#BBBB79","#BDBC7B","#BEBD7E","#C0BE81","#C1C083","#C1C186","#C3C287","#C4C38A","#C5C48D","#C7C68F","#C7C792","#C9C894","#CAC996","#CBCA99","#CDCC9B","#CDCD9D","#CECEA0","#D0CFA2","#D1D0A5","#D2D2A7","#D3D2A9","#D4D4AC","#D6D5AE","#D7D6B0","#D7D7B3","#D9D8B5","#DAD9B7","#DCDBBA","#DCDCBB","#DDDDBE","#DFDEC0","#E0DFC2","#E1E1C5","#E2E1C7","#E3E3C9","#E5E4CC","#E6E5CD","#E6E6D0","#E8E7D2","#E9E9D4","#EAEAD7","#EBEAD8","#ECECDB","#EEEDDD","#EFEFDF","#EFEFE1","#F1F0E3","#F2F2E6","#F3F3E8","#F4F4EA","#F5F5EC","#F7F6EF","#F7F7F0","#F8F8F3","#FAFAF4","#FBFBF7","#FBFBF9","#FDFDFB","#FEFEFD","#000001","#050503","#0A0A05","#0F0F07","#141409","#19190A","#1D1D0C","#211F0E","#252311","#272713","#2B2B14","#2F2F16","#323217","#363619","#39381A","#3D3C1B","#403F1E","#43431F","#464621","#494922","#4C4B23","#504F25","#535226","#565527","#59582A","#5B5B2B","#5E5E2C","#61602E","#64632F","#676630","#6A6931","#6D6C32","#706F35","#727136","#757437","#787738","#7B7A39","#7E7D3B","#81803C","#84833D","#86853F","#888740","#8B8A41","#8E8D43","#919044","#939345","#969446","#999747","#9C9A49","#9D9D4A","#A09F4B","#A3A24C","#A6A54E","#A8A64F","#ABA950","#AEAC51","#B0AE53","#B2B154","#B5B455","#B7B656","#BAB857","#BCBB58","#BFBD59","#C1C05A","#C4C25C","#C5C35E","#C6C461","#C7C564","#C7C667","#C8C76A","#C9C86D","#CAC970","#CCCA73","#CDCB75","#CDCC78","#CECD7B","#CFCE7E","#D0CF81","#D1D084","#D2D186","#D3D289","#D4D28B","#D5D38E","#D6D591","#D7D693","#D7D796","#D8D799","#D9D89C","#DBD99E","#DCDBA0","#DCDCA3","#DDDCA6","#DEDDA8","#DFDEAB","#E0DFAE","#E1E0B0","#E2E1B3","#E3E2B5","#E4E3B7","#E5E4BA","#E6E5BC","#E6E6BF","#E7E7C1","#E8E8C4","#EAE9C7","#EAEAC8","#EBEACB","#ECEBCD","#EDECD0","#EEEED2","#EFEFD5","#EFEFD7","#F1F0DA","#F2F1DC","#F3F2DE","#F3F3E1","#F4F4E3","#F5F5E6","#F6F6E8","#F7F7EA","#F8F7ED","#F9F8EF","#FAFAF1","#FBFBF3","#FBFBF6","#FCFCF8","#FDFDFB","#FEFEFD","#000001","#070700","#0C0C03","#111105","#161607","#1A1A09","#1E1E0A","#22220C","#27260E","#2B2A0E","#2F2E0F","#323111","#363613","#393914","#3D3D16","#404017","#454419","#484719","#4B4A1A","#4F4E1B","#52511D","#55541E","#58571F","#5B5B21","#5F5E22","#626122","#656423","#686725","#6B6A26","#6E6D27","#717029","#74732A","#78762B","#7B792B","#7E7D2C","#81802E","#84832F","#868630","#898831","#8C8B32","#908E34","#939134","#959335","#989636","#9B9937","#9D9D38","#A09F39","#A3A23B","#A6A53C","#A9A73C","#ACAA3D","#AEAD3E","#B1AF3F","#B4B240","#B6B541","#B9B743","#BCBB44","#BFBD44","#C1C045","#C4C246","#C7C547","#C9C748","#CCCA49","#CECD4A","#D2CF4B","#D2D04F","#D2D152","#D3D255","#D4D258","#D5D35B","#D6D45E","#D7D561","#D7D665","#D7D668","#D8D76B","#D9D76E","#DAD871","#DBD974","#DCDA77","#DCDB7A","#DDDC7E","#DDDC81","#DEDD84","#DFDE86","#E0DE89","#E1DF8C","#E1E08F","#E2E192","#E3E195","#E3E298","#E4E39B","#E5E49D","#E6E5A0","#E6E6A3","#E7E6A6","#E8E6A8","#E9E7AC","#E9E8AE","#EAE9B1","#EAEAB4","#EBEAB6","#ECEBB9","#EDECBB","#EEEDBE","#EFEEC1","#EFEFC4","#EFEFC7","#F0EFC9","#F1F0CC","#F2F1CE","#F3F2D1","#F3F3D3","#F4F3D7","#F4F4D9","#F5F5DC","#F6F6DE","#F7F7E1","#F7F7E3","#F8F7E6","#F9F8E8","#FAF9EB","#FAFAEE","#FBFBF0","#FBFBF3","#FCFCF5","#FDFDF7","#FEFEFA","#FFFFFC","#000001","#070700","#0C0C03","#131103","#171705","#1B1B07","#211F07","#252509","#2A290A","#2E2C0A","#31310C","#36350C","#39380E","#3D3D0F","#41400F","#454411","#494813","#4C4B13","#504F14","#545314","#575616","#5A5917","#5E5D17","#616019","#65631A","#68671A","#6B6A1B","#6F6D1B","#72711D","#75741E","#79771E","#7C7B1F","#807E21","#838121","#868522","#898722","#8C8A23","#8F8E25","#939125","#959326","#999727","#9C9A27","#9E9D29","#A2A029","#A5A32A","#A7A62B","#ABA92B","#AEAC2C","#B1AE2E","#B4B22E","#B6B52F","#BAB72F","#BCBB30","#BFBD31","#C2C031","#C5C332","#C8C634","#CBC834","#CDCC35","#D1CE35","#D3D136","#D6D437","#D9D737","#DCD938","#DFDC39","#DFDC3D","#E0DD40","#E0DE45","#E1DE48","#E1DF4B","#E1E050","#E2E053","#E3E157","#E3E15A","#E4E15D","#E4E261","#E5E364","#E6E367","#E6E46B","#E6E56E","#E7E572","#E7E675","#E8E678","#E8E67C","#E9E77F","#EAE882","#EAE886","#EAE988","#EBEA8C","#EBEA8F","#ECEA92","#ECEB95","#EDEB98","#EEEC9B","#EEED9E","#EFEDA1","#EFEEA5","#EFEFA7","#F0EFAA","#F0EFAE","#F1F0B0","#F2F0B3","#F2F1B6","#F3F2B9","#F3F2BC","#F3F3BF","#F4F3C1","#F4F3C5","#F5F4C7","#F6F5CA","#F6F5CD","#F7F6D0","#F7F7D3","#F7F7D6","#F8F7D8","#F8F8DC","#F9F8DE","#FAF9E1","#FAFAE4","#FBFAE6","#FBFBEA","#FBFBEC","#FCFBEF","#FCFCF2","#FDFDF4","#FEFDF7","#FEFEFA","#FFFFFC","#000001","#070700","#0E0E00","#131303","#191903","#1E1D03","#222205","#272705","#2C2B07","#303007","#353407","#383809","#3D3C09","#414009","#45450A","#49480A","#4E4C0C","#51500C","#55540C","#58570E","#5C5B0E","#605F0E","#63620F","#67660F","#6B6911","#6E6D11","#727011","#757413","#797813","#7D7B13","#807F14","#848214","#878616","#8A8816","#8E8C16","#919017","#949317","#989617","#9B9919","#9E9D19","#A29F1A","#A5A31A","#A8A61A","#ABA91B","#AEAD1B","#B2AF1B","#B5B31D","#B8B51D","#BBB91E","#BEBC1E","#C1BF1E","#C4C21F","#C7C51F","#CBC81F","#CDCC21","#D1CE21","#D4D222","#D7D422","#DAD722","#DCDA23","#E0DD23","#E3E123","#E6E325","#E9E625","#ECE926","#ECEA2A","#ECEA2F","#EDEA32","#EDEA37","#EDEA3C","#EEEB3F","#EEEB44","#EFEC48","#EFEC4B","#EFED50","#EFED53","#EFED57","#EFEE5B","#F0EE5E","#F0EF62","#F1EF66","#F1EF69","#F1EF6D","#F2EF70","#F2F074","#F2F078","#F3F17B","#F3F17F","#F3F183","#F3F286","#F3F289","#F4F38C","#F4F390","#F4F393","#F5F396","#F5F39A","#F6F49D","#F6F4A0","#F6F5A4","#F7F5A6","#F7F6AA","#F7F6AE","#F7F6B0","#F7F7B4","#F8F7B7","#F8F7BA","#F8F7BD","#F9F8C0","#F9F8C3","#F9F8C7","#FAF9C9","#FAF9CD","#FBFAD0","#FBFAD2","#FBFBD6","#FBFBD8","#FBFBDC","#FBFBDF","#FCFBE1","#FCFCE5","#FDFCE8","#FDFDEA","#FDFDEE","#FEFDF0","#FEFEF3","#FEFEF7","#FFFFF9","#FFFFFC","#000001","#070700","#0E0E00","#141400","#1A1A00","#1F1F00","#252300","#2A2900","#2F2E03","#323203","#373703","#3C3B03","#403F03","#454403","#494803","#4E4C03","#525105","#555405","#595805","#5D5C05","#616005","#656405","#696705","#6D6B05","#716F07","#747307","#787707","#7C7B07","#807E07","#848207","#878607","#8B8907","#8F8D09","#929009","#959309","#999709","#9D9B09","#A09E09","#A4A209","#A7A509","#ABA80A","#AEAC0A","#B1AF0A","#B5B30A","#B8B50A","#BBB90A","#BFBC0A","#C2C00A","#C6C30C","#C8C70C","#CCC90C","#CFCD0C","#D2D00C","#D6D30C","#D9D70C","#DCD90C","#E0DC0E","#E2E00E","#E6E30E","#E9E60E","#ECE90E","#EFEC0E","#F3EF0E","#F6F30E","#F9F60F","#F9F614","#F9F61A","#F9F61F","#F9F625","#F9F72A","#F9F72F","#F9F734","#FAF738","#FAF73C","#FAF740","#FAF745","#FAF749","#FAF74E","#FAF752","#FAF856","#FBF85A","#FBF85D","#FBF861","#FBF865","#FBF869","#FBF96D","#FBF971","#FBF975","#FBF979","#FBF97C","#FBFA80","#FBFA84","#FBFA87","#FBFA8B","#FBFA8F","#FBFA93","#FCFB96","#FCFB99","#FCFB9D","#FCFBA0","#FCFBA4","#FCFBA7","#FCFBAB","#FCFBAE","#FDFBB2","#FDFBB5","#FDFBB8","#FDFCBB","#FDFCBF","#FDFCC2","#FDFCC6","#FDFCC9","#FEFDCD","#FEFDCF","#FEFDD2","#FEFDD6","#FEFDD9","#FEFDDC","#FEFEE0","#FEFEE3","#FFFEE6","#FFFEE9","#FFFEEC","#FFFFEF","#FFFFF3","#FFFFF6","#FFFFF9","#FFFFFC","#000001","#050503","#090907","#0C0C0A","#0F0F0E","#131311","#161614","#191917","#1B1D1A","#1E1F1B","#22221E","#252521","#272723","#2A2A26","#2C2C29","#2F2F2B","#31322E","#34352F","#363731","#393934","#3C3C36","#3E3E38","#40403B","#43433D","#45463F","#474840","#494A43","#4B4C45","#4E4F47","#515149","#53534B","#55554E","#575850","#595A51","#5B5C53","#5D5E55","#5F6057","#616259","#64645B","#66665D","#68695F","#6A6B60","#6C6D62","#6E6F64","#707166","#727368","#74756A","#76776C","#797A6E","#7B7C6F","#7D7E71","#7F8073","#818275","#838477","#858679","#86877B","#888A7D","#8B8C7E","#8D8E80","#8F9082","#919284","#939386","#949587","#969789","#989A8B","#9A9B8D","#9C9D8F","#9D9E91","#9FA093","#A1A294","#A3A496","#A5A698","#A6A79B","#A7A89D","#A9AA9E","#ABACA0","#ADAEA2","#AEAFA4","#B0B1A6","#B2B3A7","#B4B5AA","#B5B5AC","#B6B7AE","#B8B9AF","#BABBB1","#BBBCB3","#BDBEB5","#BFC0B6","#C1C1B9","#C2C2BB","#C4C4BC","#C5C6BE","#C7C7C0","#C8C9C1","#CACBC3","#CCCDC5","#CDCEC7","#CFCFC9","#D1D1CB","#D2D2CD","#D3D4CE","#D5D6D0","#D7D7D2","#D8D9D3","#DADBD6","#DCDCD7","#DDDDD9","#DFDFDB","#E1E1DC","#E2E2DE","#E3E4E0","#E5E6E1","#E6E7E4","#E8E8E6","#EAEAE7","#EBEBE9","#EDEDEA","#EFEFEC","#F0F0EE","#F1F2EF","#F3F3F2","#F4F4F3","#F6F6F5","#F7F7F7","#F9F9F8","#FBFBFA","#FCFCFB","#FEFEFD","#000001","#050503","#090907","#0C0E09","#11110C","#14140F","#171911","#1B1B14","#1E1F17","#212219","#25251B","#27291D","#2A2B1F","#2E2E22","#303123","#323426","#363729","#38392A","#3B3C2C","#3E3F2E","#404130","#434432","#454734","#484936","#4A4C38","#4C4F39","#50513C","#52543D","#54563F","#575841","#595B43","#5B5D45","#5E6047","#606248","#62644A","#65674B","#67694E","#696B50","#6C6E51","#6E7053","#707355","#727556","#757758","#777A59","#797C5B","#7C7E5D","#7E815E","#808360","#838662","#858763","#868965","#898C66","#8B8E68","#8D906A","#90936B","#92946D","#93976F","#969970","#989B72","#9A9D73","#9C9F75","#9EA177","#A0A478","#A2A67A","#A5A87C","#A6A97E","#A7AB80","#A9AC83","#AAAE85","#ACAF86","#AEB089","#AFB28B","#B0B48E","#B2B590","#B4B692","#B5B794","#B6B996","#B8BB98","#B9BB9B","#BBBD9D","#BCBF9F","#BDC0A1","#BFC1A3","#C1C2A6","#C1C4A7","#C3C6A9","#C5C7AC","#C6C8AE","#C7CAB0","#C9CBB2","#CBCDB4","#CCCDB6","#CDCFB8","#CFD1BA","#D0D2BC","#D2D3BE","#D3D5C1","#D4D6C2","#D6D7C4","#D7D8C7","#D8DAC8","#DADCCA","#DCDCCD","#DCDECE","#DEE0D1","#E0E1D2","#E1E2D4","#E2E3D7","#E4E5D8","#E6E6DA","#E6E7DC","#E8E9DE","#EAEAE1","#EAEBE2","#ECEDE4","#EEEEE6","#EFEFE8","#F0F1EA","#F2F2EC","#F3F3EE","#F4F5F0","#F6F6F2","#F7F7F3","#F8F8F6","#FAFAF7","#FBFBF9","#FCFCFB","#FEFEFD","#000001","#050503","#0A0A05","#0E0E09","#13130A","#16170C","#1A1A0F","#1D1E11","#212214","#232516","#272917","#2A2B1A","#2E2F1B","#30321D","#34351F","#363821","#393C23","#3C3E25","#3F4126","#434429","#45472A","#484A2B","#4A4C2E","#4E502F","#505331","#535532","#555834","#585A36","#5A5D37","#5D6038","#5F623B","#62653C","#64683E","#676A3F","#696D40","#6C6F43","#6E7244","#717545","#747747","#767A48","#797D4A","#7B7F4B","#7E824C","#80844F","#838650","#858951","#878B53","#898E54","#8C9156","#8E9357","#919558","#93975A","#959A5B","#979D5C","#9A9E5E","#9DA15F","#9EA461","#A1A662","#A3A863","#A6AA65","#A7AD66","#AAAF67","#ACB169","#AEB46A","#B0B66C","#B2B76E","#B3B871","#B5BA73","#B5BB76","#B7BB79","#B8BD7B","#BABE7E","#BBC081","#BCC183","#BDC186","#BEC387","#C0C48A","#C1C58D","#C2C78F","#C3C792","#C5C994","#C6CA96","#C7CB99","#C8CD9B","#CACD9D","#CBCEA0","#CDD0A2","#CDD1A5","#CFD2A7","#D0D3A9","#D2D4AC","#D2D6AE","#D3D7B0","#D5D7B3","#D6D9B5","#D7DAB7","#D8DCBA","#DADCBB","#DBDDBE","#DCDFC0","#DDE0C2","#DFE1C5","#E0E2C7","#E1E3C9","#E2E5CC","#E4E6CD","#E5E6D0","#E6E8D2","#E7E9D4","#E9EAD7","#EAEBD8","#EAECDB","#ECEEDD","#EDEFDF","#EFEFE1","#EFF1E3","#F1F2E6","#F2F3E8","#F3F4EA","#F4F5EC","#F6F7EF","#F7F7F0","#F8F8F3","#F9FAF4","#FBFBF7","#FBFBF9","#FDFDFB","#FEFEFD","#000001","#050503","#0A0A05","#0F0F07","#131409","#17190A","#1B1D0C","#1F210E","#222511","#262713","#2A2B14","#2E2F16","#303217","#343619","#37391A","#3B3D1B","#3D401E","#40431F","#444621","#474922","#494C23","#4C5025","#505326","#525627","#55592A","#585B2B","#5B5E2C","#5D612E","#60642F","#636730","#666A31","#686D32","#6B7035","#6E7236","#717537","#737838","#767B39","#797E3B","#7C813C","#7E843D","#81863F","#848840","#868B41","#888E43","#8B9144","#8E9345","#909646","#939947","#959C49","#989D4A","#9AA04B","#9DA34C","#9FA64E","#A2A84F","#A4AB50","#A6AE51","#A9B053","#ACB254","#AEB555","#B0B756","#B3BA57","#B5BC58","#B7BF59","#BAC15A","#BCC45C","#BDC55E","#BEC661","#C0C764","#C1C767","#C1C86A","#C2C96D","#C4CA70","#C5CC73","#C6CD75","#C7CD78","#C8CE7B","#C9CF7E","#CAD081","#CBD184","#CDD286","#CDD389","#CED48B","#CFD58E","#D1D691","#D2D793","#D2D796","#D4D899","#D5D99C","#D6DB9E","#D7DCA0","#D8DCA3","#D9DDA6","#DADEA8","#DBDFAB","#DCE0AE","#DDE1B0","#DEE2B3","#DFE3B5","#E1E4B7","#E1E5BA","#E2E6BC","#E3E6BF","#E5E7C1","#E6E8C4","#E6EAC7","#E7EAC8","#E9EBCB","#EAECCD","#EAEDD0","#ECEED2","#EDEFD5","#EEEFD7","#EFF1DA","#F0F2DC","#F1F3DE","#F2F3E1","#F3F4E3","#F4F5E6","#F5F6E8","#F6F7EA","#F7F8ED","#F8F9EF","#F9FAF1","#FAFBF3","#FBFBF6","#FCFCF8","#FDFDFB","#FEFEFD","#000001","#050700","#0A0C03","#0F1105","#141607","#191A09","#1D1E0A","#21220C","#25270E","#292B0E","#2C2F0F","#303211","#343613","#373914","#3B3D16","#3E4017","#414519","#454819","#484B1A","#4B4F1B","#4E521D","#51551E","#54581F","#575B21","#5A5F22","#5D6222","#606523","#636825","#666B26","#696E27","#6C7129","#6F742A","#72782B","#757B2B","#787E2C","#7B812E","#7E842F","#818630","#848931","#868C32","#889034","#8B9334","#8E9535","#919836","#939B37","#969D38","#99A039","#9CA33B","#9EA63C","#A1A93C","#A4AC3D","#A6AE3E","#A9B13F","#ACB440","#AEB641","#B1B943","#B4BC44","#B6BF44","#B9C145","#BBC446","#BDC747","#C0C948","#C2CC49","#C5CE4A","#C7D24B","#C8D24F","#C9D252","#CAD355","#CBD458","#CDD55B","#CDD65E","#CED761","#CFD765","#D0D768","#D1D86B","#D2D96E","#D2DA71","#D3DB74","#D4DC77","#D5DC7A","#D6DD7E","#D7DD81","#D7DE84","#D8DF86","#D9E089","#DAE18C","#DBE18F","#DCE292","#DCE395","#DEE398","#DFE49B","#E0E59D","#E1E6A0","#E1E6A3","#E2E7A6","#E3E8A8","#E4E9AC","#E5E9AE","#E6EAB1","#E6EAB4","#E7EBB6","#E8ECB9","#E9EDBB","#EAEEBE","#EAEFC1","#EBEFC4","#ECEFC7","#EDF0C9","#EEF1CC","#EFF2CE","#F0F3D1","#F1F3D3","#F2F4D7","#F3F4D9","#F3F5DC","#F4F6DE","#F5F7E1","#F6F7E3","#F7F8E6","#F7F9E8","#F8FAEB","#F9FAEE","#FAFBF0","#FBFBF3","#FBFCF5","#FCFDF7","#FDFEFA","#FEFFFC","#000001","#070700","#0C0C03","#111303","#161705","#1A1B07","#1E2107","#232509","#272A0A","#2B2E0A","#2F310C","#32360C","#36390E","#3B3D0F","#3E410F","#414511","#454913","#484C13","#4B5014","#505414","#535716","#565A17","#595E17","#5C6119","#5F651A","#63681A","#666B1B","#696F1B","#6C721D","#6F751E","#72791E","#757C1F","#798021","#7C8321","#7F8622","#828922","#858C23","#878F25","#8B9325","#8E9526","#919927","#939C27","#969E29","#99A229","#9DA52A","#9FA72B","#A2AB2B","#A5AE2C","#A7B12E","#AAB42E","#AEB62F","#B0BA2F","#B3BC30","#B5BF31","#B8C231","#BBC532","#BDC834","#C1CB34","#C3CD35","#C6D135","#C8D336","#CBD637","#CDD937","#D1DC38","#D3DF39","#D4DF3D","#D4E040","#D5E045","#D6E148","#D7E14B","#D7E150","#D8E253","#D8E357","#D9E35A","#DAE45D","#DBE461","#DCE564","#DCE667","#DDE66B","#DDE66E","#DEE772","#DFE775","#E0E878","#E1E87C","#E1E97F","#E1EA82","#E2EA86","#E3EA88","#E4EB8C","#E5EB8F","#E6EC92","#E6EC95","#E6ED98","#E7EE9B","#E8EE9E","#E9EFA1","#EAEFA5","#EAEFA7","#EAF0AA","#EBF0AE","#ECF1B0","#EDF2B3","#EEF2B6","#EFF3B9","#EFF3BC","#EFF3BF","#F0F4C1","#F1F4C5","#F2F5C7","#F3F6CA","#F3F6CD","#F3F7D0","#F4F7D3","#F5F7D6","#F6F8D8","#F7F8DC","#F7F9DE","#F7FAE1","#F8FAE4","#F9FBE6","#FAFBEA","#FBFBEC","#FBFCEF","#FBFCF2","#FCFDF4","#FDFEF7","#FEFEFA","#FFFFFC","#000001","#070700","#0C0E00","#131303","#171903","#1B1E03","#212205","#252705","#292C07","#2E3007","#313507","#363809","#393D09","#3D4109","#41450A","#45490A","#484E0C","#4C510C","#50550C","#54580E","#575C0E","#5A600E","#5E630F","#61670F","#646B11","#686E11","#6B7211","#6F7513","#727913","#757D13","#798014","#7C8414","#7F8716","#838A16","#868E16","#889117","#8C9417","#8F9817","#939B19","#959E19","#98A21A","#9CA51A","#9EA81A","#A1AB1B","#A5AE1B","#A7B21B","#ABB51D","#AEB81D","#B0BB1E","#B4BE1E","#B6C11E","#B9C41F","#BCC71F","#BFCB1F","#C2CD21","#C5D121","#C7D422","#CBD722","#CDDA22","#D0DC23","#D3E023","#D6E323","#D9E625","#DCE925","#DEEC26","#DFEC2A","#E0EC2F","#E0ED32","#E1ED37","#E1ED3C","#E1EE3F","#E2EE44","#E2EF48","#E3EF4B","#E4EF50","#E4EF53","#E5EF57","#E5EF5B","#E6F05E","#E6F062","#E6F166","#E7F169","#E8F16D","#E8F270","#E9F274","#E9F278","#EAF37B","#EAF37F","#EAF383","#EBF386","#ECF389","#ECF48C","#EDF490","#EDF493","#EEF596","#EFF59A","#EFF69D","#EFF6A0","#F0F6A4","#F0F7A6","#F1F7AA","#F2F7AE","#F2F7B0","#F3F7B4","#F3F8B7","#F3F8BA","#F4F8BD","#F4F9C0","#F5F9C3","#F6F9C7","#F6FAC9","#F7FACD","#F7FBD0","#F7FBD2","#F8FBD6","#F8FBD8","#F9FBDC","#FAFBDF","#FAFCE1","#FBFCE5","#FBFDE8","#FBFDEA","#FCFDEE","#FCFEF0","#FDFEF3","#FEFEF7","#FEFFF9","#FFFFFC","#000001","#070700","#0E0E00","#131400","#191A00","#1D1F00","#222500","#272A00","#2B2F03","#303203","#343703","#383C03","#3C4003","#404503","#454903","#484E03","#4C5205","#505505","#545905","#585D05","#5B6105","#5F6505","#626905","#666D05","#697107","#6D7407","#717807","#747C07","#788007","#7B8407","#7F8707","#838B07","#868F09","#899209","#8C9509","#909909","#939D09","#96A009","#9AA409","#9DA709","#A0AB0A","#A3AE0A","#A6B10A","#AAB50A","#ADB80A","#B0BB0A","#B3BF0A","#B6C20A","#B9C60C","#BCC80C","#C0CC0C","#C2CF0C","#C6D20C","#C8D60C","#CCD90C","#CFDC0C","#D2E00E","#D5E20E","#D7E60E","#DBE90E","#DDEC0E","#E1EF0E","#E4F30E","#E6F60E","#EAF90F","#EAF914","#EAF91A","#EAF91F","#EAF925","#EBF92A","#EBF92F","#ECF934","#ECFA38","#EDFA3C","#EDFA40","#EDFA45","#EEFA49","#EEFA4E","#EFFA52","#EFFA56","#EFFB5A","#EFFB5D","#EFFB61","#F0FB65","#F0FB69","#F1FB6D","#F1FB71","#F1FB75","#F2FB79","#F2FB7C","#F3FB80","#F3FB84","#F3FB87","#F3FB8B","#F3FB8F","#F4FB93","#F4FC96","#F5FC99","#F5FC9D","#F5FCA0","#F6FCA4","#F6FCA7","#F7FCAB","#F7FCAE","#F7FDB2","#F7FDB5","#F7FDB8","#F8FDBB","#F8FDBF","#F9FDC2","#F9FDC6","#F9FDC9","#FAFECD","#FAFECF","#FBFED2","#FBFED6","#FBFED9","#FBFEDC","#FBFEE0","#FCFEE3","#FCFFE6","#FDFFE9","#FDFFEC","#FDFFEF","#FEFFF3","#FEFFF6","#FFFFF9","#FFFFFC","#000001","#050503","#090907","#0C0C0A","#0F0F0E","#131311","#161614","#191917","#1B1D1A","#1E1F1B","#21221E","#232521","#262723","#2A2A26","#2C2C29","#2F2F2B","#31322E","#34352F","#363731","#383934","#3B3C36","#3D3E38","#3F403B","#41433D","#44463F","#474840","#494A43","#4B4C45","#4E4F47","#505149","#52534B","#54554E","#565850","#585A51","#5A5C53","#5C5E55","#5E6057","#616259","#63645B","#65665D","#67695F","#696B60","#6B6D62","#6D6F64","#6F7166","#717368","#73756A","#75776C","#777A6E","#7A7C6F","#7C7E71","#7E8073","#808275","#828477","#848679","#86877B","#878A7D","#898C7E","#8B8E80","#8D9082","#8F9284","#929386","#939587","#959789","#979A8B","#999B8D","#9B9D8F","#9D9E91","#9DA093","#9FA294","#A1A496","#A3A698","#A5A79B","#A6A89D","#A8AA9E","#AAACA0","#ACAEA2","#AEAFA4","#AFB1A6","#B1B3A7","#B2B5AA","#B4B5AC","#B5B7AE","#B7B9AF","#B9BBB1","#BBBCB3","#BCBEB5","#BEC0B6","#C0C1B9","#C1C2BB","#C3C4BC","#C5C6BE","#C6C7C0","#C7C9C1","#C9CBC3","#CBCDC5","#CDCEC7","#CECFC9","#D0D1CB","#D2D2CD","#D3D4CE","#D5D6D0","#D7D7D2","#D8D9D3","#D9DBD6","#DBDCD7","#DCDDD9","#DEDFDB","#E0E1DC","#E1E2DE","#E3E4E0","#E5E6E1","#E6E7E4","#E8E8E6","#EAEAE7","#EBEBE9","#ECEDEA","#EEEFEC","#EFF0EE","#F1F2EF","#F3F3F2","#F4F4F3","#F6F6F5","#F7F7F7","#F9F9F8","#FBFBFA","#FCFCFB","#FEFEFD","#000001","#050503","#090907","#0C0E09","#0F110C","#14140F","#171911","#1A1B14","#1D1F17","#212219","#23251B","#26291D","#292B1F","#2C2E22","#2F3123","#313426","#343729","#37392A","#393C2C","#3C3F2E","#3E4130","#414432","#444734","#464936","#484C38","#4B4F39","#4E513C","#50543D","#52563F","#555841","#575B43","#595D45","#5B6047","#5E6248","#60644A","#62674B","#64694E","#676B50","#696E51","#6B7053","#6D7355","#707556","#727758","#747A59","#767C5B","#797E5D","#7B815E","#7D8360","#7F8662","#828763","#848965","#868C66","#878E68","#8A906A","#8C936B","#8E946D","#90976F","#939970","#949B72","#969D73","#989F75","#9BA177","#9DA478","#9EA67A","#A0A87C","#A2A97E","#A4AB80","#A6AC83","#A6AE85","#A8AF86","#AAB089","#ACB28B","#ADB48E","#AEB590","#B0B692","#B2B794","#B3B996","#B5BB98","#B6BB9B","#B8BD9D","#B9BF9F","#BBC0A1","#BCC1A3","#BEC2A6","#BFC4A7","#C1C6A9","#C2C7AC","#C4C8AE","#C5CAB0","#C7CBB2","#C8CDB4","#CACDB6","#CBCFB8","#CDD1BA","#CED2BC","#D0D3BE","#D1D5C1","#D2D6C2","#D4D7C4","#D6D8C7","#D7DAC8","#D8DCCA","#DADCCD","#DCDECE","#DCE0D1","#DEE1D2","#E0E2D4","#E1E3D7","#E2E5D8","#E4E6DA","#E6E7DC","#E7E9DE","#E8EAE1","#EAEBE2","#EBEDE4","#EDEEE6","#EEEFE8","#EFF1EA","#F1F2EC","#F3F3EE","#F3F5F0","#F5F6F2","#F7F7F3","#F8F8F6","#F9FAF7","#FBFBF9","#FCFCFB","#FEFEFD","#000001","#050503","#090A05","#0E0E09","#11130A","#16170C","#191A0F","#1B1E11","#1F2214","#222516","#262917","#292B1A","#2B2F1B","#2F321D","#31351F","#353821","#373C23","#393E25","#3D4126","#3F4429","#43472A","#454A2B","#484C2E","#4A502F","#4C5331","#505532","#525834","#555A36","#575D37","#596038","#5C623B","#5E653C","#61683E","#636A3F","#656D40","#686F43","#6A7244","#6D7545","#6F7747","#717A48","#747D4A","#767F4B","#79824C","#7B844F","#7E8650","#808951","#828B53","#858E54","#869156","#899357","#8B9558","#8D975A","#909A5B","#929D5C","#949E5E","#96A15F","#98A461","#9BA662","#9DA863","#9FAA65","#A1AD66","#A4AF67","#A6B169","#A7B46A","#AAB66C","#ABB76E","#ADB871","#AEBA73","#AFBB76","#B1BB79","#B2BD7B","#B4BE7E","#B5C081","#B6C183","#B8C186","#B9C387","#BBC48A","#BBC58D","#BDC78F","#BFC792","#C0C994","#C1CA96","#C2CB99","#C4CD9B","#C6CD9D","#C7CEA0","#C8D0A2","#C9D1A5","#CBD2A7","#CCD3A9","#CDD4AC","#CFD6AE","#D0D7B0","#D2D7B3","#D2D9B5","#D4DAB7","#D6DCBA","#D7DCBB","#D8DDBE","#D9DFC0","#DBE0C2","#DCE1C5","#DDE2C7","#DFE3C9","#E0E5CC","#E1E6CD","#E3E6D0","#E4E8D2","#E6E9D4","#E6EAD7","#E8EBD8","#E9ECDB","#EAEEDD","#ECEFDF","#EDEFE1","#EFF1E3","#EFF2E6","#F1F3E8","#F3F4EA","#F3F5EC","#F5F7EF","#F6F7F0","#F7F8F3","#F9FAF4","#FAFBF7","#FBFBF9","#FCFDFB","#FEFEFD","#000001","#050503","#0A0A05","#0E0F07","#131409","#16190A","#1A1D0C","#1E210E","#212511","#252713","#272B14","#2B2F16","#2E3217","#313619","#35391A","#373D1B","#3B401E","#3D431F","#404621","#434922","#464C23","#495025","#4B5326","#4F5627","#51592A","#545B2B","#565E2C","#59612E","#5C642F","#5E6730","#616A31","#636D32","#667035","#687236","#6B7537","#6E7838","#707B39","#737E3B","#75813C","#78843D","#7A863F","#7D8840","#808B41","#828E43","#859144","#869345","#899646","#8B9947","#8E9C49","#919D4A","#93A04B","#95A34C","#97A64E","#9AA84F","#9DAB50","#9EAE51","#A1B053","#A3B254","#A6B555","#A7B756","#AABA57","#ADBC58","#AEBF59","#B1C15A","#B3C45C","#B5C55E","#B5C661","#B7C764","#B8C767","#B9C86A","#BBC96D","#BBCA70","#BDCC73","#BECD75","#C0CD78","#C1CE7B","#C1CF7E","#C3D081","#C4D184","#C6D286","#C7D389","#C7D48B","#C9D58E","#CAD691","#CCD793","#CDD796","#CED899","#CFD99C","#D0DB9E","#D2DCA0","#D2DCA3","#D4DDA6","#D5DEA8","#D7DFAB","#D7E0AE","#D8E1B0","#DAE2B3","#DBE3B5","#DCE4B7","#DDE5BA","#DFE6BC","#E0E6BF","#E1E7C1","#E2E8C4","#E3EAC7","#E5EAC8","#E6EBCB","#E7ECCD","#E8EDD0","#E9EED2","#EAEFD5","#EBEFD7","#EDF1DA","#EEF2DC","#EFF3DE","#F0F3E1","#F1F4E3","#F3F5E6","#F3F6E8","#F5F7EA","#F6F8ED","#F7F9EF","#F8FAF1","#F9FBF3","#FBFBF6","#FBFCF8","#FDFDFB","#FEFEFD","#000001","#050700","#0A0C03","#0F1105","#131607","#171A09","#1B1E0A","#1F220C","#22270E","#262B0E","#2A2F0F","#2E3211","#303613","#343914","#373D16","#3B4017","#3D4519","#404819","#444B1A","#474F1B","#49521D","#4C551E","#50581F","#525B21","#555F22","#586222","#5B6523","#5D6825","#606B26","#636E27","#667129","#68742A","#6B782B","#6E7B2B","#717E2C","#73812E","#76842F","#798630","#7C8931","#7E8C32","#819034","#849334","#869535","#889836","#8B9B37","#8E9D38","#90A039","#93A33B","#95A63C","#98A93C","#9AAC3D","#9DAE3E","#9FB13F","#A2B440","#A4B641","#A6B943","#A9BC44","#ACBF44","#AEC145","#B0C446","#B3C747","#B5C948","#B7CC49","#BACE4A","#BCD24B","#BDD24F","#BED252","#C0D355","#C1D458","#C1D55B","#C2D65E","#C4D761","#C5D765","#C6D768","#C7D86B","#C8D96E","#C9DA71","#CADB74","#CBDC77","#CDDC7A","#CDDD7E","#CEDD81","#CFDE84","#D1DF86","#D2E089","#D2E18C","#D4E18F","#D5E292","#D6E395","#D7E398","#D8E49B","#D9E59D","#DAE6A0","#DBE6A3","#DCE7A6","#DDE8A8","#DEE9AC","#DFE9AE","#E1EAB1","#E1EAB4","#E2EBB6","#E3ECB9","#E5EDBB","#E6EEBE","#E6EFC1","#E7EFC4","#E9EFC7","#EAF0C9","#EAF1CC","#ECF2CE","#EDF3D1","#EEF3D3","#EFF4D7","#F0F4D9","#F1F5DC","#F2F6DE","#F3F7E1","#F4F7E3","#F5F8E6","#F6F9E8","#F7FAEB","#F8FAEE","#F9FBF0","#FAFBF3","#FBFCF5","#FCFDF7","#FDFEFA","#FEFFFC","#000001","#050700","#0A0C03","#0F1303","#141705","#191B07","#1D2107","#212509","#252A0A","#292E0A","#2C310C","#2F360C","#32390E","#363D0F","#39410F","#3D4511","#404913","#444C13","#475014","#4A5414","#4E5716","#505A17","#535E17","#566119","#59651A","#5C681A","#5F6B1B","#626F1B","#65721D","#68751E","#6B791E","#6D7C1F","#708021","#738321","#768622","#798922","#7C8C23","#7F8F25","#829325","#859526","#879927","#899C27","#8C9E29","#8FA229","#92A52A","#94A72B","#97AB2B","#9AAE2C","#9DB12E","#9FB42E","#A2B62F","#A5BA2F","#A6BC30","#A9BF31","#ACC231","#AEC532","#B1C834","#B4CB34","#B6CD35","#B9D135","#BBD336","#BED637","#C0D937","#C2DC38","#C5DF39","#C6DF3D","#C7E040","#C8E045","#C9E148","#CAE14B","#CBE150","#CCE253","#CDE357","#CDE35A","#CEE45D","#CFE461","#D0E564","#D2E667","#D2E66B","#D3E66E","#D4E772","#D5E775","#D6E878","#D7E87C","#D7E97F","#D8EA82","#D9EA86","#DAEA88","#DCEB8C","#DCEB8F","#DDEC92","#DEEC95","#DFED98","#E0EE9B","#E1EE9E","#E1EFA1","#E2EFA5","#E3EFA7","#E5F0AA","#E6F0AE","#E6F1B0","#E7F2B3","#E8F2B6","#E9F3B9","#EAF3BC","#EAF3BF","#EBF4C1","#ECF4C5","#EEF5C7","#EFF6CA","#EFF6CD","#F0F7D0","#F1F7D3","#F2F7D6","#F3F8D8","#F3F8DC","#F4F9DE","#F5FAE1","#F7FAE4","#F7FBE6","#F8FBEA","#F9FBEC","#FAFCEF","#FBFCF2","#FBFDF4","#FCFEF7","#FDFEFA","#FEFFFC","#000001","#070700","#0C0E00","#111303","#161903","#1A1E03","#1E2205","#222705","#262C07","#2A3007","#2E3507","#313809","#353D09","#384109","#3C450A","#3F490A","#444E0C","#47510C","#4A550C","#4E580E","#515C0E","#54600E","#57630F","#5A670F","#5D6B11","#606E11","#637211","#667513","#697913","#6C7D13","#6F8014","#738414","#768716","#798A16","#7C8E16","#7F9117","#829417","#859817","#879B19","#8A9E19","#8DA21A","#90A51A","#93A81A","#95AB1B","#98AE1B","#9BB21B","#9EB51D","#A1B81D","#A4BB1E","#A6BE1E","#A9C11E","#ACC41F","#AEC71F","#B1CB1F","#B4CD21","#B6D121","#B9D422","#BBD722","#BEDA22","#C1DC23","#C3E023","#C7E323","#C9E625","#CCE925","#CEEC26","#CFEC2A","#D0EC2F","#D1ED32","#D1ED37","#D2ED3C","#D2EE3F","#D3EE44","#D4EF48","#D5EF4B","#D6EF50","#D7EF53","#D7EF57","#D8EF5B","#D9F05E","#DAF062","#DBF166","#DCF169","#DCF16D","#DCF270","#DDF274","#DEF278","#DFF37B","#E0F37F","#E1F383","#E1F386","#E2F389","#E3F48C","#E4F490","#E5F493","#E6F596","#E6F59A","#E7F69D","#E8F6A0","#E8F6A4","#E9F7A6","#EAF7AA","#EAF7AE","#EBF7B0","#ECF7B4","#EDF8B7","#EEF8BA","#EFF8BD","#EFF9C0","#F0F9C3","#F1F9C7","#F2FAC9","#F3FACD","#F3FBD0","#F3FBD2","#F4FBD6","#F5FBD8","#F6FBDC","#F7FBDF","#F7FCE1","#F8FCE5","#F9FDE8","#FAFDEA","#FBFDEE","#FBFEF0","#FCFEF3","#FDFEF7","#FEFFF9","#FFFFFC","#000001","#070700","#0C0E00","#111400","#161A00","#1B1F00","#1F2500","#232A00","#272F03","#2C3203","#303703","#343C03","#374003","#3B4503","#3F4903","#434E03","#465205","#495505","#4E5905","#515D05","#546105","#576505","#5B6905","#5E6D05","#617107","#647407","#677807","#6B7C07","#6E8007","#718407","#748707","#788B07","#7B8F09","#7E9209","#819509","#859909","#879D09","#8AA009","#8DA409","#90A709","#93AB0A","#96AE0A","#99B10A","#9CB50A","#9FB80A","#A2BB0A","#A5BF0A","#A7C20A","#ABC60C","#AEC80C","#B0CC0C","#B3CF0C","#B5D20C","#B9D60C","#BBD90C","#BEDC0C","#C1E00E","#C4E20E","#C7E60E","#C9E90E","#CCEC0E","#CFEF0E","#D2F30E","#D4F60E","#D7F90F","#D7F914","#D8F91A","#D9F91F","#D9F925","#DAF92A","#DBF92F","#DCF934","#DCFA38","#DCFA3C","#DDFA40","#DEFA45","#DEFA49","#DFFA4E","#E0FA52","#E1FA56","#E1FB5A","#E1FB5D","#E2FB61","#E3FB65","#E4FB69","#E4FB6D","#E5FB71","#E6FB75","#E6FB79","#E6FB7C","#E7FB80","#E8FB84","#E9FB87","#EAFB8B","#EAFB8F","#EAFB93","#EBFC96","#ECFC99","#ECFC9D","#EDFCA0","#EEFCA4","#EFFCA7","#EFFCAB","#EFFCAE","#F0FDB2","#F1FDB5","#F2FDB8","#F2FDBB","#F3FDBF","#F3FDC2","#F4FDC6","#F4FDC9","#F5FECD","#F6FECF","#F7FED2","#F7FED6","#F7FED9","#F8FEDC","#F9FEE0","#FAFEE3","#FAFFE6","#FBFFE9","#FBFFEC","#FCFFEF","#FCFFF3","#FDFFF6","#FEFFF9","#FFFFFC","#000001","#050503","#090907","#0C0C0A","#0F0F0E","#131311","#161614","#191917","#1B1D1A","#1E1F1B","#21221E","#232521","#262723","#292A26","#2B2C29","#2E2F2B","#30322E","#32352F","#363731","#383934","#3B3C36","#3D3E38","#3F403B","#41433D","#44463F","#464840","#484A43","#4A4C45","#4C4F47","#4F5149","#51534B","#53554E","#555850","#575A51","#595C53","#5C5E55","#5E6057","#606259","#62645B","#64665D","#66695F","#686B60","#6A6D62","#6C6F64","#6E7166","#707368","#72756A","#74776C","#767A6E","#787C6F","#7A7E71","#7C8073","#7F8275","#818477","#838679","#85877B","#868A7D","#888C7E","#8A8E80","#8C9082","#8E9284","#909386","#929587","#939789","#959A8B","#979B8D","#999D8F","#9B9E91","#9DA093","#9EA294","#A0A496","#A2A698","#A4A79B","#A6A89D","#A7AA9E","#A9ACA0","#ABAEA2","#ACAFA4","#AEB1A6","#AFB3A7","#B1B5AA","#B3B5AC","#B5B7AE","#B6B9AF","#B8BBB1","#BABCB3","#BBBEB5","#BDC0B6","#BFC1B9","#C1C2BB","#C2C4BC","#C4C6BE","#C6C7C0","#C7C9C1","#C8CBC3","#CACDC5","#CCCEC7","#CDCFC9","#CFD1CB","#D1D2CD","#D2D4CE","#D4D6D0","#D6D7D2","#D7D9D3","#D9DBD6","#DBDCD7","#DCDDD9","#DEDFDB","#E0E1DC","#E1E2DE","#E3E4E0","#E4E6E1","#E6E7E4","#E7E8E6","#E9EAE7","#EAEBE9","#ECEDEA","#EEEFEC","#EFF0EE","#F1F2EF","#F3F3F2","#F4F4F3","#F6F6F5","#F7F7F7","#F9F9F8","#FBFBFA","#FCFCFB","#FEFEFD","#000001","#050503","#090907","#0C0E09","#0F110C","#13140F","#171911","#1A1B14","#1D1F17","#1F2219","#22251B","#25291D","#292B1F","#2B2E22","#2E3123","#303426","#323729","#35392A","#383C2C","#3B3F2E","#3D4130","#3F4432","#414734","#454936","#474C38","#494F39","#4B513C","#4E543D","#50563F","#535841","#555B43","#575D45","#596047","#5B6248","#5D644A","#60674B","#62694E","#646B50","#666E51","#687053","#6B7355","#6D7556","#6F7758","#717A59","#737C5B","#757E5D","#78815E","#7A8360","#7C8662","#7E8763","#808965","#828C66","#858E68","#86906A","#88936B","#8A946D","#8C976F","#8F9970","#919B72","#939D73","#949F75","#96A177","#98A478","#9BA67A","#9DA87C","#9EA97E","#9FAB80","#A1AC83","#A3AE85","#A5AF86","#A6B089","#A8B28B","#A9B48E","#ABB590","#ADB692","#AEB794","#B0B996","#B1BB98","#B3BB9B","#B5BD9D","#B6BF9F","#B8C0A1","#BAC1A3","#BBC2A6","#BCC4A7","#BEC6A9","#C0C7AC","#C1C8AE","#C3CAB0","#C4CBB2","#C6CDB4","#C7CDB6","#C9CFB8","#CBD1BA","#CCD2BC","#CDD3BE","#CFD5C1","#D1D6C2","#D2D7C4","#D4D8C7","#D5DAC8","#D7DCCA","#D8DCCD","#DADECE","#DCE0D1","#DDE1D2","#DEE2D4","#E0E3D7","#E1E5D8","#E3E6DA","#E5E7DC","#E6E9DE","#E7EAE1","#E9EBE2","#EAEDE4","#ECEEE6","#EEEFE8","#EFF1EA","#F0F2EC","#F2F3EE","#F3F5F0","#F5F6F2","#F7F7F3","#F7F8F6","#F9FAF7","#FBFBF9","#FCFCFB","#FEFEFD","#000001","#050503","#090A05","#0C0E09","#11130A","#14170C","#171A0F","#1B1E11","#1E2214","#212516","#232917","#272B1A","#2A2F1B","#2C321D","#30351F","#323821","#353C23","#373E25","#3B4126","#3D4429","#3F472A","#434A2B","#454C2E","#47502F","#4A5331","#4C5532","#4F5834","#515A36","#545D37","#566038","#58623B","#5B653C","#5D683E","#5F6A3F","#616D40","#646F43","#667244","#687545","#6B7747","#6D7A48","#6F7D4A","#727F4B","#74824C","#76844F","#788650","#7B8951","#7D8B53","#7F8E54","#829156","#849357","#869558","#87975A","#8A9A5B","#8C9D5C","#8E9E5E","#91A15F","#93A461","#94A662","#96A863","#99AA65","#9BAD66","#9DAF67","#9FB169","#A1B46A","#A3B66C","#A5B76E","#A6B871","#A7BA73","#A9BB76","#ABBB79","#ACBD7B","#AEBE7E","#AFC081","#B1C183","#B2C186","#B4C387","#B5C48A","#B6C58D","#B8C78F","#BAC792","#BBC994","#BCCA96","#BECB99","#C0CD9B","#C1CD9D","#C2CEA0","#C4D0A2","#C6D1A5","#C7D2A7","#C8D3A9","#CAD4AC","#CBD6AE","#CDD7B0","#CED7B3","#CFD9B5","#D1DAB7","#D2DCBA","#D4DCBB","#D5DDBE","#D7DFC0","#D8E0C2","#D9E1C5","#DBE2C7","#DCE3C9","#DEE5CC","#DFE6CD","#E1E6D0","#E2E8D2","#E3E9D4","#E5EAD7","#E6EBD8","#E7ECDB","#E9EEDD","#EAEFDF","#ECEFE1","#EDF1E3","#EFF2E6","#F0F3E8","#F1F4EA","#F3F5EC","#F4F7EF","#F6F7F0","#F7F8F3","#F8FAF4","#FAFBF7","#FBFBF9","#FCFDFB","#FEFEFD","#000001","#050503","#090A05","#0E0F07","#111409","#16190A","#191D0C","#1B210E","#1F2511","#222713","#262B14","#292F16","#2B3217","#2F3619","#31391A","#353D1B","#37401E","#39431F","#3D4621","#3F4922","#434C23","#455025","#485326","#4A5627","#4C592A","#505B2B","#525E2C","#55612E","#57642F","#596730","#5C6A31","#5E6D32","#617035","#637236","#657537","#687838","#6A7B39","#6D7E3B","#6F813C","#71843D","#74863F","#768840","#798B41","#7B8E43","#7E9144","#809345","#829646","#859947","#869C49","#899D4A","#8BA04B","#8DA34C","#90A64E","#92A84F","#94AB50","#96AE51","#98B053","#9BB254","#9DB555","#9FB756","#A1BA57","#A4BC58","#A6BF59","#A7C15A","#AAC45C","#ABC55E","#ADC661","#AEC764","#AFC767","#B1C86A","#B2C96D","#B4CA70","#B5CC73","#B6CD75","#B8CD78","#B9CE7B","#BBCF7E","#BBD081","#BDD184","#BFD286","#C0D389","#C1D48B","#C2D58E","#C4D691","#C6D793","#C7D796","#C8D899","#C9D99C","#CBDB9E","#CCDCA0","#CDDCA3","#CFDDA6","#D0DEA8","#D2DFAB","#D2E0AE","#D4E1B0","#D6E2B3","#D7E3B5","#D8E4B7","#D9E5BA","#DBE6BC","#DCE6BF","#DDE7C1","#DFE8C4","#E0EAC7","#E1EAC8","#E3EBCB","#E4ECCD","#E6EDD0","#E6EED2","#E8EFD5","#E9EFD7","#EAF1DA","#ECF2DC","#EDF3DE","#EFF3E1","#EFF4E3","#F1F5E6","#F3F6E8","#F3F7EA","#F5F8ED","#F6F9EF","#F7FAF1","#F9FBF3","#FAFBF6","#FBFCF8","#FCFDFB","#FEFEFD","#000001","#050700","#0A0C03","#0E1105","#131607","#161A09","#1A1E0A","#1D220C","#21270E","#232B0E","#272F0F","#2A3211","#2E3613","#303914","#343D16","#364017","#394519","#3C4819","#3F4B1A","#434F1B","#45521D","#48551E","#4A581F","#4E5B21","#505F22","#536222","#556523","#586825","#5A6B26","#5D6E27","#5F7129","#62742A","#64782B","#677B2B","#697E2C","#6C812E","#6E842F","#718630","#748931","#768C32","#799034","#7B9334","#7E9535","#809836","#839B37","#859D38","#87A039","#89A33B","#8CA63C","#8EA93C","#91AC3D","#93AE3E","#95B13F","#97B440","#9AB641","#9DB943","#9EBC44","#A1BF44","#A3C145","#A6C446","#A7C747","#AAC948","#ACCC49","#AECE4A","#B0D24B","#B2D24F","#B3D252","#B5D355","#B5D458","#B7D55B","#B8D65E","#BAD761","#BBD765","#BCD768","#BDD86B","#BED96E","#C0DA71","#C1DB74","#C2DC77","#C3DC7A","#C5DD7E","#C6DD81","#C7DE84","#C8DF86","#CAE089","#CBE18C","#CDE18F","#CDE292","#CFE395","#D0E398","#D2E49B","#D2E59D","#D3E6A0","#D5E6A3","#D6E7A6","#D7E8A8","#D8E9AC","#DAE9AE","#DBEAB1","#DCEAB4","#DDEBB6","#DFECB9","#E0EDBB","#E1EEBE","#E2EFC1","#E4EFC4","#E5EFC7","#E6F0C9","#E7F1CC","#E9F2CE","#EAF3D1","#EAF3D3","#ECF4D7","#EDF4D9","#EFF5DC","#EFF6DE","#F1F7E1","#F2F7E3","#F3F8E6","#F4F9E8","#F6FAEB","#F7FAEE","#F8FBF0","#F9FBF3","#FBFCF5","#FBFDF7","#FDFEFA","#FEFFFC","#000001","#050700","#0A0C03","#0E1303","#131705","#171B07","#1A2107","#1E2509","#222A0A","#252E0A","#29310C","#2C360C","#2F390E","#323D0F","#36410F","#384511","#3C4913","#3E4C13","#415014","#455414","#475716","#4A5A17","#4E5E17","#506119","#53651A","#56681A","#586B1B","#5B6F1B","#5E721D","#60751E","#63791E","#657C1F","#688021","#6B8321","#6D8622","#708922","#738C23","#758F25","#789325","#7B9526","#7D9927","#809C27","#839E29","#85A229","#87A52A","#8AA72B","#8CAB2B","#8FAE2C","#91B12E","#93B42E","#96B62F","#98BA2F","#9BBC30","#9DBF31","#9FC231","#A2C532","#A5C834","#A6CB34","#A9CD35","#ACD135","#AED336","#B0D637","#B2D937","#B5DC38","#B7DF39","#B8DF3D","#B9E040","#BBE045","#BBE148","#BDE14B","#BEE150","#BFE253","#C1E357","#C1E35A","#C2E45D","#C4E461","#C5E564","#C6E667","#C7E66B","#C8E66E","#C9E772","#CBE775","#CCE878","#CDE87C","#CEE97F","#CFEA82","#D1EA86","#D2EA88","#D2EB8C","#D4EB8F","#D5EC92","#D6EC95","#D7ED98","#D8EE9B","#D9EE9E","#DBEFA1","#DCEFA5","#DCEFA7","#DEF0AA","#DFF0AE","#E1F1B0","#E1F2B3","#E2F2B6","#E4F3B9","#E5F3BC","#E6F3BF","#E7F4C1","#E8F4C5","#E9F5C7","#EAF6CA","#EBF6CD","#ECF7D0","#EEF7D3","#EFF7D6","#F0F8D8","#F1F8DC","#F2F9DE","#F3FAE1","#F4FAE4","#F5FBE6","#F7FBEA","#F7FBEC","#F8FCEF","#FAFCF2","#FBFDF4","#FBFEF7","#FDFEFA","#FEFFFC","#000001","#050700","#0A0E00","#0F1303","#141903","#171E03","#1B2205","#1F2705","#232C07","#263007","#2A3507","#2E3809","#313D09","#344109","#37450A","#3B490A","#3E4E0C","#40510C","#44550C","#47580E","#4A5C0E","#4C600E","#50630F","#53670F","#566B11","#596E11","#5B7211","#5E7513","#617913","#647D13","#668014","#698414","#6C8716","#6F8A16","#718E16","#749117","#779417","#7A9817","#7C9B19","#7F9E19","#82A21A","#85A51A","#86A81A","#89AB1B","#8CAE1B","#8FB21B","#92B51D","#93B81D","#96BB1E","#99BE1E","#9CC11E","#9DC41F","#A0C71F","#A3CB1F","#A6CD21","#A7D121","#AAD422","#ADD722","#AFDA22","#B1DC23","#B4E023","#B6E323","#B9E625","#BBE925","#BDEC26","#BEEC2A","#C0EC2F","#C1ED32","#C1ED37","#C2ED3C","#C4EE3F","#C5EE44","#C6EF48","#C7EF4B","#C8EF50","#C9EF53","#CAEF57","#CBEF5B","#CDF05E","#CDF062","#CEF166","#CFF169","#D1F16D","#D2F270","#D2F274","#D3F278","#D4F37B","#D6F37F","#D7F383","#D7F386","#D8F389","#DAF48C","#DBF490","#DCF493","#DCF596","#DEF59A","#DFF69D","#E0F6A0","#E1F6A4","#E2F7A6","#E3F7AA","#E4F7AE","#E5F7B0","#E6F7B4","#E7F8B7","#E8F8BA","#E9F8BD","#EAF9C0","#EBF9C3","#ECF9C7","#EDFAC9","#EEFACD","#EFFBD0","#F0FBD2","#F1FBD6","#F2FBD8","#F3FBDC","#F4FBDF","#F5FCE1","#F6FCE5","#F7FDE8","#F8FDEA","#F9FDEE","#FAFEF0","#FBFEF3","#FCFEF7","#FDFFF9","#FEFFFC","#000001","#050700","#0A0E00","#0F1400","#141A00","#191F00","#1D2500","#212A00","#252F03","#273203","#2B3703","#2F3C03","#324003","#364503","#394903","#3D4E03","#405205","#435505","#465905","#495D05","#4C6105","#506505","#536905","#566D05","#597107","#5B7407","#5E7807","#617C07","#648007","#678407","#6A8707","#6D8B07","#708F09","#739209","#759509","#789909","#7B9D09","#7EA009","#81A409","#84A709","#86AB0A","#89AE0A","#8BB10A","#8EB50A","#91B80A","#93BB0A","#96BF0A","#99C20A","#9CC60C","#9EC80C","#A0CC0C","#A3CF0C","#A6D20C","#A8D60C","#ABD90C","#AEDC0C","#B0E00E","#B3E20E","#B5E60E","#B7E90E","#BAEC0E","#BCEF0E","#BFF30E","#C1F60E","#C4F90F","#C5F914","#C6F91A","#C7F91F","#C7F925","#C8F92A","#C9F92F","#CBF934","#CCFA38","#CDFA3C","#CDFA40","#CEFA45","#CFFA49","#D0FA4E","#D1FA52","#D2FA56","#D3FB5A","#D4FB5D","#D5FB61","#D6FB65","#D7FB69","#D7FB6D","#D8FB71","#DAFB75","#DBFB79","#DCFB7C","#DCFB80","#DDFB84","#DEFB87","#DFFB8B","#E0FB8F","#E1FB93","#E2FC96","#E3FC99","#E4FC9D","#E5FCA0","#E6FCA4","#E6FCA7","#E7FCAB","#E8FCAE","#EAFDB2","#EAFDB5","#EBFDB8","#ECFDBB","#EDFDBF","#EEFDC2","#EFFDC6","#EFFDC9","#F1FECD","#F2FECF","#F3FED2","#F3FED6","#F4FED9","#F5FEDC","#F6FEE0","#F7FEE3","#F8FFE6","#F9FFE9","#FAFFEC","#FBFFEF","#FBFFF3","#FCFFF6","#FDFFF9","#FEFFFC","#000001","#050503","#090907","#0C0C0A","#0F0F0E","#131311","#161614","#191917","#1B1D1A","#1E1F1B","#21221E","#232521","#262723","#292A26","#2B2C29","#2E2F2B","#30322E","#32352F","#353731","#373934","#393C36","#3C3E38","#3E403B","#40433D","#43463F","#454840","#474A43","#494C45","#4B4F47","#4F5149","#51534B","#53554E","#555850","#575A51","#595C53","#5B5E55","#5D6057","#5F6259","#61645B","#63665D","#65695F","#676B60","#696D62","#6B6F64","#6D7166","#6F7368","#71756A","#73776C","#757A6E","#777C6F","#797E71","#7B8073","#7D8275","#7F8477","#818679","#83877B","#858A7D","#878C7E","#898E80","#8B9082","#8D9284","#8F9386","#919587","#939789","#949A8B","#969B8D","#989D8F","#9A9E91","#9CA093","#9DA294","#9FA496","#A1A698","#A2A79B","#A4A89D","#A6AA9E","#A7ACA0","#A9AEA2","#ABAFA4","#ADB1A6","#AEB3A7","#B0B5AA","#B2B5AC","#B4B7AE","#B5B9AF","#B7BBB1","#B9BCB3","#BBBEB5","#BCC0B6","#BEC1B9","#C0C2BB","#C1C4BC","#C3C6BE","#C5C7C0","#C7C9C1","#C8CBC3","#CACDC5","#CCCEC7","#CDCFC9","#CFD1CB","#D1D2CD","#D2D4CE","#D3D6D0","#D5D7D2","#D7D9D3","#D8DBD6","#DADCD7","#DCDDD9","#DDDFDB","#DFE1DC","#E1E2DE","#E2E4E0","#E4E6E1","#E6E7E4","#E7E8E6","#E9EAE7","#EAEBE9","#ECEDEA","#EEEFEC","#EFF0EE","#F1F2EF","#F3F3F2","#F4F4F3","#F6F6F5","#F7F7F7","#F9F9F8","#FBFBFA","#FCFCFB","#FEFEFD","#000001","#050503","#090907","#0C0E09","#0F110C","#13140F","#161911","#191B14","#1B1F17","#1E2219","#22251B","#25291D","#272B1F","#2A2E22","#2C3123","#2F3426","#313729","#34392A","#363C2C","#393F2E","#3C4130","#3E4432","#404734","#434936","#454C38","#474F39","#49513C","#4B543D","#4E563F","#515841","#535B43","#555D45","#576047","#596248","#5B644A","#5D674B","#5F694E","#616B50","#646E51","#667053","#687355","#6A7556","#6C7758","#6E7A59","#707C5B","#727E5D","#74815E","#768360","#798662","#7B8763","#7D8965","#7F8C66","#818E68","#83906A","#85936B","#86946D","#88976F","#8B9970","#8D9B72","#8F9D73","#919F75","#93A177","#94A478","#96A67A","#98A87C","#9AA97E","#9CAB80","#9DAC83","#9FAE85","#A1AF86","#A3B089","#A5B28B","#A6B48E","#A7B590","#A9B692","#ABB794","#ADB996","#AEBB98","#B0BB9B","#B2BD9D","#B4BF9F","#B5C0A1","#B6C1A3","#B8C2A6","#BAC4A7","#BBC6A9","#BDC7AC","#BFC8AE","#C1CAB0","#C2CBB2","#C4CDB4","#C5CDB6","#C7CFB8","#C8D1BA","#CAD2BC","#CCD3BE","#CDD5C1","#CFD6C2","#D1D7C4","#D2D8C7","#D3DAC8","#D5DCCA","#D7DCCD","#D8DECE","#DAE0D1","#DCE1D2","#DDE2D4","#DFE3D7","#E1E5D8","#E2E6DA","#E3E7DC","#E5E9DE","#E6EAE1","#E8EBE2","#EAEDE4","#EBEEE6","#EDEFE8","#EFF1EA","#F0F2EC","#F1F3EE","#F3F5F0","#F4F6F2","#F6F7F3","#F7F8F6","#F9FAF7","#FBFBF9","#FCFCFB","#FEFEFD","#000001","#050503","#090A05","#0C0E09","#0F130A","#13170C","#171A0F","#1A1E11","#1D2214","#1F2516","#222917","#252B1A","#292F1B","#2B321D","#2E351F","#303821","#323C23","#353E25","#384126","#3B4429","#3D472A","#3F4A2B","#414C2E","#45502F","#475331","#495532","#4B5834","#4E5A36","#505D37","#536038","#55623B","#57653C","#59683E","#5B6A3F","#5D6D40","#606F43","#627244","#647545","#667747","#687A48","#6B7D4A","#6D7F4B","#6F824C","#71844F","#738650","#758951","#788B53","#7A8E54","#7C9156","#7E9357","#809558","#82975A","#859A5B","#869D5C","#889E5E","#8AA15F","#8CA461","#8FA662","#91A863","#93AA65","#94AD66","#96AF67","#98B169","#9BB46A","#9DB66C","#9EB76E","#9FB871","#A1BA73","#A3BB76","#A5BB79","#A6BD7B","#A8BE7E","#A9C081","#ABC183","#ADC186","#AEC387","#B0C48A","#B1C58D","#B3C78F","#B5C792","#B6C994","#B8CA96","#BACB99","#BBCD9B","#BCCD9D","#BECEA0","#C0D0A2","#C1D1A5","#C3D2A7","#C4D3A9","#C6D4AC","#C7D6AE","#C9D7B0","#CBD7B3","#CCD9B5","#CDDAB7","#CFDCBA","#D1DCBB","#D2DDBE","#D4DFC0","#D5E0C2","#D7E1C5","#D8E2C7","#DAE3C9","#DCE5CC","#DDE6CD","#DEE6D0","#E0E8D2","#E1E9D4","#E3EAD7","#E5EBD8","#E6ECDB","#E7EEDD","#E9EFDF","#EAEFE1","#ECF1E3","#EEF2E6","#EFF3E8","#F0F4EA","#F2F5EC","#F3F7EF","#F5F7F0","#F7F8F3","#F7FAF4","#F9FBF7","#FBFBF9","#FCFDFB","#FEFEFD","#000001","#050503","#090A05","#0C0F07","#0F1409","#14190A","#171D0C","#1A210E","#1D2511","#212713","#232B14","#262F16","#293217","#2C3619","#2F391A","#313D1B","#34401E","#37431F","#394621","#3C4922","#3E4C23","#415025","#445326","#465627","#48592A","#4B5B2B","#4E5E2C","#50612E","#52642F","#556730","#576A31","#596D32","#5B7035","#5E7236","#607537","#627838","#647B39","#677E3B","#69813C","#6B843D","#6D863F","#708840","#728B41","#748E43","#769144","#799345","#7B9646","#7D9947","#7F9C49","#829D4A","#84A04B","#86A34C","#87A64E","#8AA84F","#8CAB50","#8EAE51","#90B053","#93B254","#94B555","#96B756","#98BA57","#9BBC58","#9DBF59","#9EC15A","#A0C45C","#A2C55E","#A4C661","#A6C764","#A6C767","#A8C86A","#AAC96D","#ACCA70","#ADCC73","#AECD75","#B0CD78","#B2CE7B","#B3CF7E","#B5D081","#B6D184","#B8D286","#B9D389","#BBD48B","#BCD58E","#BED691","#BFD793","#C1D796","#C2D899","#C4D99C","#C5DB9E","#C7DCA0","#C8DCA3","#CADDA6","#CBDEA8","#CDDFAB","#CEE0AE","#D0E1B0","#D1E2B3","#D2E3B5","#D4E4B7","#D6E5BA","#D7E6BC","#D8E6BF","#DAE7C1","#DCE8C4","#DCEAC7","#DEEAC8","#E0EBCB","#E1ECCD","#E2EDD0","#E4EED2","#E6EFD5","#E7EFD7","#E8F1DA","#EAF2DC","#EBF3DE","#EDF3E1","#EEF4E3","#EFF5E6","#F1F6E8","#F3F7EA","#F3F8ED","#F5F9EF","#F7FAF1","#F8FBF3","#F9FBF6","#FBFCF8","#FCFDFB","#FEFEFD","#000001","#050700","#090C03","#0C1105","#111607","#141A09","#171E0A","#1B220C","#1E270E","#212B0E","#252F0F","#273211","#2A3613","#2E3914","#303D16","#324017","#364519","#384819","#3B4B1A","#3E4F1B","#40521D","#43551E","#45581F","#485B21","#4A5F22","#4C6222","#506523","#526825","#546B26","#576E27","#597129","#5B742A","#5E782B","#607B2B","#627E2C","#65812E","#67842F","#698630","#6C8931","#6E8C32","#709034","#729334","#759535","#779836","#799B37","#7C9D38","#7EA039","#80A33B","#83A63C","#85A93C","#86AC3D","#89AE3E","#8BB13F","#8DB440","#90B641","#92B943","#93BC44","#96BF44","#98C145","#9AC446","#9CC747","#9EC948","#A0CC49","#A2CE4A","#A5D24B","#A6D24F","#A7D252","#A9D355","#AAD458","#ACD55B","#AED65E","#AFD761","#B0D765","#B2D768","#B4D86B","#B5D96E","#B6DA71","#B8DB74","#B9DC77","#BBDC7A","#BCDD7E","#BDDD81","#BFDE84","#C1DF86","#C1E089","#C3E18C","#C5E18F","#C6E292","#C7E395","#C9E398","#CBE49B","#CCE59D","#CDE6A0","#CFE6A3","#D0E7A6","#D2E8A8","#D3E9AC","#D4E9AE","#D6EAB1","#D7EAB4","#D8EBB6","#DAECB9","#DCEDBB","#DCEEBE","#DEEFC1","#E0EFC4","#E1EFC7","#E2F0C9","#E4F1CC","#E6F2CE","#E6F3D1","#E8F3D3","#EAF4D7","#EAF4D9","#ECF5DC","#EEF6DE","#EFF7E1","#F0F7E3","#F2F8E6","#F3F9E8","#F4FAEB","#F6FAEE","#F7FBF0","#F8FBF3","#FAFCF5","#FBFDF7","#FCFEFA","#FEFFFC","#000001","#050700","#090C03","#0E1303","#111705","#141B07","#192107","#1B2509","#1F2A0A","#222E0A","#25310C","#29360C","#2B390E","#2F3D0F","#31410F","#344511","#374913","#394C13","#3C5014","#3F5414","#415716","#455A17","#475E17","#496119","#4C651A","#4F681A","#526B1B","#546F1B","#56721D","#59751E","#5B791E","#5D7C1F","#608021","#628321","#658622","#678922","#698C23","#6C8F25","#6E9325","#719526","#739927","#759C27","#789E29","#7AA229","#7DA52A","#7FA72B","#81AB2B","#84AE2C","#86B12E","#87B42E","#8AB62F","#8CBA2F","#8FBC30","#91BF31","#93C231","#95C532","#97C834","#9ACB34","#9CCD35","#9DD135","#A0D336","#A2D637","#A4D937","#A6DC38","#A8DF39","#AADF3D","#ABE040","#ADE045","#AEE148","#AFE14B","#B1E150","#B3E253","#B4E357","#B5E35A","#B6E45D","#B8E461","#BAE564","#BBE667","#BCE66B","#BDE66E","#BFE772","#C1E775","#C1E878","#C3E87C","#C5E97F","#C6EA82","#C7EA86","#C8EA88","#CAEB8C","#CCEB8F","#CDEC92","#CEEC95","#CFED98","#D1EE9B","#D2EE9E","#D3EFA1","#D5EFA5","#D6EFA7","#D7F0AA","#D9F0AE","#DAF1B0","#DCF2B3","#DDF2B6","#DEF3B9","#E0F3BC","#E1F3BF","#E2F4C1","#E4F4C5","#E5F5C7","#E6F6CA","#E7F6CD","#E9F7D0","#EAF7D3","#EBF7D6","#EDF8D8","#EFF8DC","#EFF9DE","#F1FAE1","#F2FAE4","#F3FBE6","#F5FBEA","#F6FBEC","#F7FCEF","#F8FCF2","#FAFDF4","#FBFEF7","#FCFEFA","#FEFFFC","#000001","#050700","#090E00","#0E1303","#111903","#161E03","#192205","#1D2705","#1F2C07","#233007","#263507","#2A3809","#2C3D09","#2F4109","#32450A","#35490A","#384E0C","#3B510C","#3E550C","#40580E","#445C0E","#46600E","#49630F","#4B670F","#4E6B11","#516E11","#537211","#567513","#587913","#5B7D13","#5D8014","#608414","#628716","#658A16","#678E16","#699117","#6C9417","#6E9817","#719B19","#739E19","#76A21A","#78A51A","#7BA81A","#7DAB1B","#80AE1B","#82B21B","#85B51D","#86B81D","#88BB1E","#8BBE1E","#8DC11E","#90C41F","#92C71F","#94CB1F","#96CD21","#99D121","#9BD422","#9DD722","#9FDA22","#A1DC23","#A4E023","#A6E323","#A8E625","#AAE925","#ADEC26","#AEEC2A","#AFEC2F","#B0ED32","#B2ED37","#B3ED3C","#B5EE3F","#B6EE44","#B7EF48","#B9EF4B","#BAEF50","#BBEF53","#BCEF57","#BEEF5B","#BFF05E","#C1F062","#C1F166","#C3F169","#C5F16D","#C6F270","#C7F274","#C8F278","#CAF37B","#CBF37F","#CDF383","#CDF386","#CFF389","#D0F48C","#D2F490","#D2F493","#D4F596","#D6F59A","#D7F69D","#D8F6A0","#D9F6A4","#DBF7A6","#DCF7AA","#DDF7AE","#DEF7B0","#E0F7B4","#E1F8B7","#E2F8BA","#E4F8BD","#E5F9C0","#E6F9C3","#E7F9C7","#E9FAC9","#EAFACD","#EBFBD0","#ECFBD2","#EEFBD6","#EFFBD8","#F0FBDC","#F2FBDF","#F3FCE1","#F4FCE5","#F5FDE8","#F7FDEA","#F7FDEE","#F9FEF0","#FAFEF3","#FBFEF7","#FCFFF9","#FEFFFC","#000001","#050700","#0A0E00","#0E1400","#131A00","#161F00","#1A2500","#1D2A00","#212F03","#233203","#273703","#2A3C03","#2E4003","#304503","#344903","#364E03","#395205","#3C5505","#3F5905","#435D05","#456105","#486505","#4A6905","#4E6D05","#507107","#537407","#557807","#587C07","#5A8007","#5D8407","#5F8707","#628B07","#648F09","#679209","#699509","#6C9909","#6E9D09","#71A009","#74A409","#76A709","#79AB0A","#7BAE0A","#7EB10A","#80B50A","#83B80A","#85BB0A","#87BF0A","#89C20A","#8CC60C","#8EC80C","#91CC0C","#93CF0C","#95D20C","#97D60C","#9AD90C","#9DDC0C","#9EE00E","#A1E20E","#A3E60E","#A6E90E","#A7EC0E","#AAEF0E","#ACF30E","#AEF60E","#B0F90F","#B2F914","#B3F91A","#B5F91F","#B5F925","#B7F92A","#B8F92F","#BAF934","#BBFA38","#BCFA3C","#BDFA40","#BEFA45","#C0FA49","#C1FA4E","#C2FA52","#C3FA56","#C5FB5A","#C6FB5D","#C7FB61","#C8FB65","#CAFB69","#CBFB6D","#CDFB71","#CDFB75","#CFFB79","#D0FB7C","#D2FB80","#D2FB84","#D3FB87","#D5FB8B","#D6FB8F","#D7FB93","#D8FC96","#DAFC99","#DBFC9D","#DCFCA0","#DDFCA4","#DFFCA7","#E0FCAB","#E1FCAE","#E2FDB2","#E4FDB5","#E5FDB8","#E6FDBB","#E7FDBF","#E9FDC2","#EAFDC6","#EAFDC9","#ECFECD","#EDFECF","#EFFED2","#EFFED6","#F1FED9","#F2FEDC","#F3FEE0","#F4FEE3","#F6FFE6","#F7FFE9","#F8FFEC","#F9FFEF","#FBFFF3","#FBFFF6","#FDFFF9","#FEFFFC","#000001","#050503","#090907","#0C0C0A","#0F0F0E","#131311","#161614","#191917","#1B1D1A","#1E1F1B","#21221E","#232521","#262723","#292A26","#2B2C29","#2E2F2B","#30322E","#32352F","#353731","#373934","#393C36","#3C3E38","#3E403B","#40433D","#43463F","#454840","#474A43","#494C45","#4B4F47","#4E5149","#50534B","#52554E","#545850","#565A51","#585C53","#5A5E55","#5C6057","#5E6259","#60645B","#62665D","#64695F","#666B60","#686D62","#6A6F64","#6C7166","#6E7368","#70756A","#72776C","#747A6E","#767C6F","#787E71","#7A8073","#7C8275","#7E8477","#808679","#82877B","#848A7D","#868C7E","#878E80","#899082","#8B9284","#8D9386","#8F9587","#919789","#939A8B","#949B8D","#969D8F","#989E91","#9AA093","#9CA294","#9DA496","#9FA698","#A1A79B","#A3A89D","#A5AA9E","#A6ACA0","#A8AEA2","#AAAFA4","#ACB1A6","#AEB3A7","#AFB5AA","#B1B5AC","#B3B7AE","#B5B9AF","#B6BBB1","#B8BCB3","#BABEB5","#BBC0B6","#BDC1B9","#BFC2BB","#C1C4BC","#C2C6BE","#C4C7C0","#C6C9C1","#C7CBC3","#C9CDC5","#CBCEC7","#CDCFC9","#CED1CB","#D0D2CD","#D2D4CE","#D3D6D0","#D5D7D2","#D7D9D3","#D8DBD6","#DADCD7","#DCDDD9","#DDDFDB","#DFE1DC","#E1E2DE","#E2E4E0","#E4E6E1","#E6E7E4","#E7E8E6","#E9EAE7","#EAEBE9","#ECEDEA","#EEEFEC","#EFF0EE","#F1F2EF","#F3F3F2","#F4F4F3","#F6F6F5","#F7F7F7","#F9F9F8","#FBFBFA","#FCFCFB","#FEFEFD","#000001","#050503","#090907","#0C0E09","#0F110C","#13140F","#161911","#191B14","#1B1F17","#1E2219","#21251B","#23291D","#262B1F","#292E22","#2B3123","#2E3426","#303729","#32392A","#353C2C","#373F2E","#394130","#3C4432","#3E4734","#404936","#434C38","#454F39","#47513C","#49543D","#4B563F","#4F5841","#515B43","#535D45","#556047","#576248","#59644A","#5B674B","#5D694E","#5F6B50","#616E51","#637053","#657355","#677556","#697758","#6B7A59","#6D7C5B","#6F7E5D","#71815E","#738360","#758662","#778763","#798965","#7B8C66","#7D8E68","#7F906A","#81936B","#83946D","#85976F","#879970","#899B72","#8B9D73","#8D9F75","#8FA177","#91A478","#93A67A","#94A87C","#96A97E","#98AB80","#9AAC83","#9CAE85","#9DAF86","#9FB089","#A1B28B","#A2B48E","#A4B590","#A6B692","#A7B794","#A9B996","#ABBB98","#ADBB9B","#AEBD9D","#B0BF9F","#B2C0A1","#B4C1A3","#B5C2A6","#B7C4A7","#B9C6A9","#BBC7AC","#BCC8AE","#BECAB0","#C0CBB2","#C1CDB4","#C3CDB6","#C5CFB8","#C7D1BA","#C8D2BC","#CAD3BE","#CCD5C1","#CDD6C2","#CFD7C4","#D1D8C7","#D2DAC8","#D3DCCA","#D5DCCD","#D7DECE","#D8E0D1","#DAE1D2","#DCE2D4","#DDE3D7","#DFE5D8","#E1E6DA","#E2E7DC","#E4E9DE","#E6EAE1","#E7EBE2","#E9EDE4","#EAEEE6","#ECEFE8","#EEF1EA","#EFF2EC","#F1F3EE","#F3F5F0","#F4F6F2","#F6F7F3","#F7F8F6","#F9FAF7","#FBFBF9","#FCFCFB","#FEFEFD","#000001","#050503","#090A05","#0C0E09","#0F130A","#13170C","#161A0F","#191E11","#1B2214","#1E2516","#212917","#232B1A","#262F1B","#29321D","#2B351F","#2E3821","#303C23","#323E25","#364126","#384429","#3B472A","#3D4A2B","#3F4C2E","#41502F","#445331","#465532","#485834","#4A5A36","#4C5D37","#4F6038","#51623B","#53653C","#55683E","#576A3F","#596D40","#5C6F43","#5E7244","#607545","#627747","#647A48","#667D4A","#687F4B","#6A824C","#6C844F","#6E8650","#708951","#728B53","#748E54","#769156","#789357","#7A9558","#7C975A","#7F9A5B","#819D5C","#839E5E","#85A15F","#86A461","#88A662","#8AA863","#8CAA65","#8EAD66","#90AF67","#92B169","#93B46A","#95B66C","#97B76E","#99B871","#9BBA73","#9DBB76","#9EBB79","#A0BD7B","#A2BE7E","#A4C081","#A6C183","#A7C186","#A9C387","#ABC48A","#ACC58D","#AEC78F","#AFC792","#B1C994","#B3CA96","#B5CB99","#B6CD9B","#B8CD9D","#BACEA0","#BBD0A2","#BDD1A5","#BFD2A7","#C1D3A9","#C2D4AC","#C4D6AE","#C6D7B0","#C7D7B3","#C8D9B5","#CADAB7","#CCDCBA","#CDDCBB","#CFDDBE","#D1DFC0","#D2E0C2","#D4E1C5","#D6E2C7","#D7E3C9","#D9E5CC","#DBE6CD","#DCE6D0","#DEE8D2","#E0E9D4","#E1EAD7","#E3EBD8","#E4ECDB","#E6EEDD","#E7EFDF","#E9EFE1","#EAF1E3","#ECF2E6","#EEF3E8","#EFF4EA","#F1F5EC","#F3F7EF","#F4F7F0","#F6F8F3","#F7FAF4","#F9FBF7","#FBFBF9","#FCFDFB","#FEFEFD","#000001","#050503","#090A05","#0C0F07","#0F1409","#13190A","#161D0C","#19210E","#1B2511","#1E2713","#212B14","#232F16","#263217","#2A3619","#2C391A","#2F3D1B","#31401E","#34431F","#364621","#384922","#3B4C23","#3D5025","#3F5326","#415627","#44592A","#475B2B","#495E2C","#4B612E","#4E642F","#506730","#526A31","#546D32","#567035","#587236","#5A7537","#5C7838","#5E7B39","#617E3B","#63813C","#65843D","#67863F","#698840","#6B8B41","#6D8E43","#6F9144","#719345","#739646","#759947","#779C49","#7A9D4A","#7CA04B","#7EA34C","#80A64E","#82A84F","#84AB50","#86AE51","#87B053","#89B254","#8BB555","#8DB756","#8FBA57","#92BC58","#93BF59","#95C15A","#97C45C","#99C55E","#9BC661","#9DC764","#9DC767","#9FC86A","#A1C96D","#A3CA70","#A5CC73","#A6CD75","#A8CD78","#AACE7B","#ACCF7E","#AED081","#AFD184","#B1D286","#B2D389","#B4D48B","#B5D58E","#B7D691","#B9D793","#BBD796","#BCD899","#BED99C","#C0DB9E","#C1DCA0","#C3DCA3","#C5DDA6","#C6DEA8","#C7DFAB","#C9E0AE","#CBE1B0","#CDE2B3","#CEE3B5","#D0E4B7","#D2E5BA","#D3E6BC","#D5E6BF","#D7E7C1","#D8E8C4","#D9EAC7","#DBEAC8","#DCEBCB","#DEECCD","#E0EDD0","#E1EED2","#E3EFD5","#E5EFD7","#E6F1DA","#E8F2DC","#EAF3DE","#EBF3E1","#ECF4E3","#EEF5E6","#EFF6E8","#F1F7EA","#F3F8ED","#F4F9EF","#F6FAF1","#F7FBF3","#F9FBF6","#FBFCF8","#FCFDFB","#FEFEFD","#000001","#050700","#090C03","#0C1105","#0F1607","#131A09","#161E0A","#19220C","#1B270E","#1E2B0E","#222F0F","#253211","#273613","#2A3914","#2C3D16","#2F4017","#314519","#344819","#364B1A","#394F1B","#3C521D","#3E551E","#40581F","#435B21","#455F22","#476222","#496523","#4B6825","#4E6B26","#516E27","#537129","#55742A","#57782B","#597B2B","#5B7E2C","#5D812E","#5F842F","#618630","#648931","#668C32","#689034","#6A9334","#6C9535","#6E9836","#709B37","#729D38","#74A039","#76A33B","#79A63C","#7BA93C","#7DAC3D","#7FAE3E","#81B13F","#83B440","#85B641","#86B943","#88BC44","#8BBF44","#8DC145","#8FC446","#91C747","#93C948","#94CC49","#96CE4A","#98D24B","#9AD24F","#9CD252","#9DD355","#9FD458","#A1D55B","#A3D65E","#A5D761","#A6D765","#A7D768","#A9D86B","#ABD96E","#ADDA71","#AEDB74","#B0DC77","#B2DC7A","#B4DD7E","#B5DD81","#B6DE84","#B8DF86","#BAE089","#BBE18C","#BDE18F","#BFE292","#C1E395","#C2E398","#C4E49B","#C5E59D","#C7E6A0","#C8E6A3","#CAE7A6","#CCE8A8","#CDE9AC","#CFE9AE","#D1EAB1","#D2EAB4","#D3EBB6","#D5ECB9","#D7EDBB","#D8EEBE","#DAEFC1","#DCEFC4","#DDEFC7","#DFF0C9","#E1F1CC","#E2F2CE","#E3F3D1","#E5F3D3","#E6F4D7","#E8F4D9","#EAF5DC","#EBF6DE","#EDF7E1","#EFF7E3","#F0F8E6","#F1F9E8","#F3FAEB","#F4FAEE","#F6FBF0","#F7FBF3","#F9FCF5","#FBFDF7","#FCFEFA","#FEFFFC","#000001","#050700","#090C03","#0C1303","#0F1705","#131B07","#162107","#192509","#1D2A0A","#1F2E0A","#22310C","#25360C","#27390E","#2A3D0F","#2C410F","#2F4511","#324913","#354C13","#375014","#395414","#3C5716","#3E5A17","#405E17","#436119","#46651A","#48681A","#4A6B1B","#4C6F1B","#4F721D","#51751E","#53791E","#557C1F","#588021","#5A8321","#5C8622","#5E8922","#608C23","#628F25","#649325","#679526","#699927","#6B9C27","#6D9E29","#6FA229","#71A52A","#73A72B","#75AB2B","#78AE2C","#7AB12E","#7CB42E","#7EB62F","#80BA2F","#82BC30","#84BF31","#86C231","#88C532","#8AC834","#8CCB34","#8ECD35","#90D135","#92D336","#93D637","#95D937","#98DC38","#9ADF39","#9CDF3D","#9DE040","#9EE045","#A0E148","#A2E14B","#A4E150","#A6E253","#A7E357","#A9E35A","#AAE45D","#ACE461","#AEE564","#AFE667","#B1E66B","#B3E66E","#B5E772","#B6E775","#B7E878","#B9E87C","#BBE97F","#BCEA82","#BEEA86","#C0EA88","#C1EB8C","#C3EB8F","#C4EC92","#C6EC95","#C7ED98","#C9EE9B","#CBEE9E","#CDEFA1","#CEEFA5","#CFEFA7","#D1F0AA","#D2F0AE","#D4F1B0","#D6F2B3","#D7F2B6","#D9F3B9","#DBF3BC","#DCF3BF","#DDF4C1","#DFF4C5","#E1F5C7","#E2F6CA","#E4F6CD","#E6F7D0","#E7F7D3","#E8F7D6","#EAF8D8","#EBF8DC","#EDF9DE","#EFFAE1","#F0FAE4","#F2FBE6","#F3FBEA","#F4FBEC","#F6FCEF","#F7FCF2","#F9FDF4","#FBFEF7","#FCFEFA","#FEFFFC","#000001","#050700","#090E00","#0C1303","#0F1903","#131E03","#162205","#1A2705","#1D2C07","#1F3007","#223507","#253809","#273D09","#2A4109","#2E450A","#30490A","#324E0C","#35510C","#37550C","#39580E","#3D5C0E","#3F600E","#41630F","#44670F","#466B11","#486E11","#4A7211","#4E7513","#507913","#527D13","#548014","#568414","#588716","#5B8A16","#5D8E16","#5F9117","#619417","#639817","#659B19","#679E19","#6AA21A","#6CA51A","#6EA81A","#70AB1B","#72AE1B","#74B21B","#77B51D","#79B81D","#7BBB1E","#7DBE1E","#7FC11E","#81C41F","#83C71F","#86CB1F","#87CD21","#89D121","#8BD422","#8DD722","#8FDA22","#91DC23","#93E023","#95E323","#97E625","#99E925","#9BEC26","#9DEC2A","#9EEC2F","#A0ED32","#A2ED37","#A3ED3C","#A5EE3F","#A6EE44","#A8EF48","#AAEF4B","#ACEF50","#AEEF53","#AEEF57","#B0EF5B","#B2F05E","#B4F062","#B5F166","#B7F169","#B9F16D","#BAF270","#BBF274","#BDF278","#BFF37B","#C1F37F","#C2F383","#C3F386","#C5F389","#C7F48C","#C8F490","#CAF493","#CCF596","#CDF59A","#CEF69D","#D0F6A0","#D2F6A4","#D3F7A6","#D5F7AA","#D7F7AE","#D7F7B0","#D9F7B4","#DBF8B7","#DCF8BA","#DEF8BD","#E0F9C0","#E1F9C3","#E2F9C7","#E4FAC9","#E6FACD","#E7FBD0","#E9FBD2","#EAFBD6","#EBFBD8","#EDFBDC","#EFFBDF","#F0FCE1","#F2FCE5","#F3FDE8","#F5FDEA","#F6FDEE","#F7FEF0","#F9FEF3","#FBFEF7","#FCFFF9","#FEFFFC","#000001","#050700","#090E00","#0C1400","#0F1A00","#131F00","#172500","#1A2A00","#1D2F03","#1F3203","#223703","#253C03","#294003","#2B4503","#2E4903","#304E03","#325205","#355505","#385905","#3B5D05","#3D6105","#3F6505","#416905","#456D05","#477107","#497407","#4B7807","#4E7C07","#508007","#538407","#558707","#578B07","#598F09","#5B9209","#5D9509","#609909","#629D09","#64A009","#66A409","#68A709","#6BAB0A","#6DAE0A","#6FB10A","#71B50A","#73B80A","#75BB0A","#78BF0A","#7AC20A","#7CC60C","#7EC80C","#80CC0C","#82CF0C","#85D20C","#86D60C","#88D90C","#8ADC0C","#8CE00E","#8FE20E","#91E60E","#93E90E","#94EC0E","#96EF0E","#98F30E","#9BF60E","#9DF90F","#9EF914","#9FF91A","#A1F91F","#A3F925","#A5F92A","#A6F92F","#A8F934","#A9FA38","#ABFA3C","#ADFA40","#AEFA45","#B0FA49","#B1FA4E","#B3FA52","#B5FA56","#B6FB5A","#B8FB5D","#BAFB61","#BBFB65","#BCFB69","#BEFB6D","#C0FB71","#C1FB75","#C3FB79","#C4FB7C","#C6FB80","#C7FB84","#C9FB87","#CBFB8B","#CCFB8F","#CDFB93","#CFFC96","#D1FC99","#D2FC9D","#D4FCA0","#D5FCA4","#D7FCA7","#D8FCAB","#DAFCAE","#DCFDB2","#DDFDB5","#DEFDB8","#E0FDBB","#E1FDBF","#E3FDC2","#E5FDC6","#E6FDC9","#E7FECD","#E9FECF","#EAFED2","#ECFED6","#EEFED9","#EFFEDC","#F0FEE0","#F2FEE3","#F3FFE6","#F5FFE9","#F7FFEC","#F7FFEF","#F9FFF3","#FBFFF6","#FCFFF9","#FEFFFC","#000001","#030503","#070907","#0A0C0A","#0E0F0E","#111311","#141614","#171917","#1A1D1A","#1D1F1B","#1F221E","#222521","#252723","#272A26","#2A2C29","#2C2F2B","#2F322E","#31352F","#343731","#363934","#383C36","#3B3E38","#3D403B","#3F433D","#41463F","#444840","#464A43","#484C45","#4A4F47","#4C5149","#4F534B","#51554E","#535850","#555A51","#575C53","#595E55","#5B6057","#5D6259","#5F645B","#61665D","#63695F","#656B60","#676D62","#696F64","#6B7166","#6D7368","#6F756A","#71776C","#737A6E","#757C6F","#777E71","#798073","#7B8275","#7D8477","#7F8679","#81877B","#838A7D","#858C7E","#868E80","#889082","#8A9284","#8C9386","#8E9587","#909789","#929A8B","#939B8D","#959D8F","#979E91","#99A093","#9BA294","#9DA496","#9EA698","#A0A79B","#A2A89D","#A4AA9E","#A6ACA0","#A7AEA2","#A9AFA4","#ABB1A6","#ADB3A7","#AEB5AA","#B0B5AC","#B2B7AE","#B4B9AF","#B5BBB1","#B7BCB3","#B9BEB5","#BBC0B6","#BCC1B9","#BEC2BB","#C0C4BC","#C1C6BE","#C3C7C0","#C5C9C1","#C7CBC3","#C8CDC5","#CACEC7","#CCCFC9","#CDD1CB","#CFD2CD","#D1D4CE","#D2D6D0","#D4D7D2","#D6D9D3","#D7DBD6","#D9DCD7","#DBDDD9","#DCDFDB","#DEE1DC","#E0E2DE","#E1E4E0","#E3E6E1","#E5E7E4","#E6E8E6","#E8EAE7","#EAEBE9","#EBEDEA","#EDEFEC","#EFF0EE","#F0F2EF","#F2F3F2","#F3F4F3","#F5F6F5","#F7F7F7","#F8F9F8","#FAFBFA","#FBFCFB","#FDFEFD","#000001","#030503","#070907","#0A0E09","#0E110C","#11140F","#141911","#171B14","#1A1F17","#1D2219","#1F251B","#22291D","#252B1F","#272E22","#2A3123","#2C3426","#2F3729","#31392A","#343C2C","#363F2E","#384130","#3B4432","#3D4734","#3F4936","#414C38","#444F39","#46513C","#48543D","#4A563F","#4B5841","#4E5B43","#505D45","#526047","#546248","#56644A","#58674B","#5A694E","#5C6B50","#5E6E51","#607053","#627355","#647556","#667758","#687A59","#6A7C5B","#6C7E5D","#6E815E","#708360","#728662","#748763","#768965","#788C66","#7A8E68","#7C906A","#7E936B","#80946D","#82976F","#839970","#859B72","#869D73","#889F75","#8AA177","#8CA478","#8EA67A","#90A87C","#92A97E","#93AB80","#95AC83","#97AE85","#99AF86","#9BB089","#9DB28B","#9FB48E","#A1B590","#A3B692","#A5B794","#A6B996","#A8BB98","#AABB9B","#ACBD9D","#AEBF9F","#AFC0A1","#B1C1A3","#B3C2A6","#B5C4A7","#B6C6A9","#B8C7AC","#BAC8AE","#BBCAB0","#BDCBB2","#BFCDB4","#C1CDB6","#C2CFB8","#C4D1BA","#C6D2BC","#C7D3BE","#C9D5C1","#CBD6C2","#CDD7C4","#CED8C7","#D1DAC8","#D2DCCA","#D4DCCD","#D6DECE","#D7E0D1","#D9E1D2","#DBE2D4","#DCE3D7","#DEE5D8","#E0E6DA","#E1E7DC","#E3E9DE","#E5EAE1","#E6EBE2","#E8EDE4","#EAEEE6","#EBEFE8","#EDF1EA","#EFF2EC","#F0F3EE","#F2F5F0","#F3F6F2","#F5F7F3","#F7F8F6","#F8FAF7","#FAFBF9","#FBFCFB","#FDFEFD","#000001","#030503","#070A05","#0A0E09","#0E130A","#11170C","#141A0F","#171E11","#1A2214","#1D2516","#1F2917","#222B1A","#252F1B","#27321D","#2A351F","#2C3821","#2F3C23","#313E25","#324126","#354429","#37472A","#394A2B","#3C4C2E","#3E502F","#405331","#435532","#455834","#475A36","#495D37","#4B6038","#4E623B","#50653C","#52683E","#546A3F","#566D40","#576F43","#597244","#5B7545","#5D7747","#5F7A48","#617D4A","#637F4B","#65824C","#67844F","#698650","#6B8951","#6D8B53","#6F8E54","#719156","#739357","#759558","#77975A","#789A5B","#7A9D5C","#7C9E5E","#7EA15F","#80A461","#82A662","#84A863","#86AA65","#87AD66","#89AF67","#8BB169","#8DB46A","#8FB66C","#91B76E","#93B871","#94BA73","#96BB76","#98BB79","#9ABD7B","#9CBE7E","#9DC081","#9FC183","#A1C186","#A3C387","#A5C48A","#A7C58D","#A9C78F","#ABC792","#ADC994","#AECA96","#B0CB99","#B2CD9B","#B4CD9D","#B5CEA0","#B7D0A2","#B9D1A5","#BBD2A7","#BCD3A9","#BED4AC","#C0D6AE","#C1D7B0","#C3D7B3","#C6D9B5","#C7DAB7","#C9DCBA","#CBDCBB","#CDDDBE","#CEDFC0","#D0E0C2","#D2E1C5","#D3E2C7","#D5E3C9","#D7E5CC","#D8E6CD","#DAE6D0","#DCE8D2","#DDE9D4","#DFEAD7","#E1EBD8","#E3ECDB","#E5EEDD","#E6EFDF","#E8EFE1","#EAF1E3","#EBF2E6","#EDF3E8","#EFF4EA","#F0F5EC","#F2F7EF","#F3F7F0","#F5F8F3","#F7FAF4","#F8FBF7","#FAFBF9","#FBFDFB","#FDFEFD","#000001","#030503","#070A05","#0A0F07","#0E1409","#11190A","#141D0C","#17210E","#1A2511","#1D2713","#1F2B14","#222F16","#253217","#263619","#29391A","#2B3D1B","#2E401E","#30431F","#324621","#354922","#374C23","#395025","#3C5326","#3E5627","#40592A","#415B2B","#445E2C","#46612E","#48642F","#4A6730","#4C6A31","#4F6D32","#517035","#537236","#557537","#577838","#597B39","#5A7E3B","#5C813C","#5E843D","#60863F","#628840","#648B41","#668E43","#689144","#6A9345","#6C9646","#6E9947","#709C49","#719D4A","#73A04B","#75A34C","#77A64E","#79A84F","#7BAB50","#7DAE51","#7FB053","#81B254","#83B555","#85B756","#86BA57","#87BC58","#89BF59","#8BC15A","#8DC45C","#8FC55E","#91C661","#93C764","#95C767","#97C86A","#99C96D","#9BCA70","#9DCC73","#9ECD75","#A0CD78","#A2CE7B","#A4CF7E","#A6D081","#A7D184","#A9D286","#ACD389","#AED48B","#AFD58E","#B1D691","#B3D793","#B5D796","#B6D899","#B8D99C","#BADB9E","#BBDCA0","#BDDCA3","#BFDDA6","#C1DEA8","#C3DFAB","#C5E0AE","#C7E1B0","#C8E2B3","#CAE3B5","#CCE4B7","#CDE5BA","#CFE6BC","#D1E6BF","#D2E7C1","#D4E8C4","#D7EAC7","#D8EAC8","#DAEBCB","#DCECCD","#DDEDD0","#DFEED2","#E1EFD5","#E2EFD7","#E4F1DA","#E6F2DC","#E7F3DE","#E9F3E1","#EBF4E3","#EDF5E6","#EFF6E8","#F0F7EA","#F2F8ED","#F3F9EF","#F5FAF1","#F7FBF3","#F8FBF6","#FAFCF8","#FBFDFB","#FDFEFD","#000001","#030700","#070C03","#0A1105","#0E1607","#111A09","#141E0A","#17220C","#1A270E","#1D2B0E","#1E2F0F","#213211","#233613","#263914","#293D16","#2B4017","#2E4519","#304819","#324B1A","#344F1B","#36521D","#38551E","#3B581F","#3D5B21","#3F5F22","#416222","#446523","#466825","#486B26","#496E27","#4B7129","#4E742A","#50782B","#527B2B","#547E2C","#56812E","#58842F","#5A8630","#5B8931","#5D8C32","#5F9034","#619334","#639535","#659836","#679B37","#699D38","#6BA039","#6DA33B","#6EA63C","#70A93C","#72AC3D","#74AE3E","#76B13F","#78B440","#7AB641","#7CB943","#7EBC44","#7FBF44","#81C145","#83C446","#85C747","#86C948","#88CC49","#8ACE4A","#8CD24B","#8ED24F","#90D252","#92D355","#93D458","#95D55B","#97D65E","#99D761","#9CD765","#9DD768","#9FD86B","#A1D96E","#A3DA71","#A5DB74","#A6DC77","#A8DC7A","#AADD7E","#ADDD81","#AEDE84","#B0DF86","#B2E089","#B4E18C","#B5E18F","#B7E292","#B9E395","#BBE398","#BCE49B","#BFE59D","#C1E6A0","#C2E6A3","#C4E7A6","#C6E8A8","#C7E9AC","#C9E9AE","#CBEAB1","#CDEAB4","#CFEBB6","#D1ECB9","#D2EDBB","#D4EEBE","#D6EFC1","#D7EFC4","#D9EFC7","#DBF0C9","#DCF1CC","#DEF2CE","#E1F3D1","#E2F3D3","#E4F4D7","#E6F4D9","#E7F5DC","#E9F6DE","#EAF7E1","#ECF7E3","#EEF8E6","#F0F9E8","#F2FAEB","#F3FAEE","#F5FBF0","#F7FBF3","#F8FCF5","#FAFDF7","#FBFEFA","#FDFFFC","#000001","#030700","#070C03","#0A1303","#0E1705","#111B07","#142107","#172509","#192A0A","#1B2E0A","#1E310C","#21360C","#23390E","#263D0F","#29410F","#2B4511","#2C4913","#2F4C13","#315014","#345414","#365716","#385A17","#3B5E17","#3D6119","#3E651A","#40681A","#436B1B","#456F1B","#47721D","#49751E","#4B791E","#4E7C1F","#4F8021","#518321","#538622","#558922","#578C23","#598F25","#5B9325","#5C9526","#5E9927","#609C27","#629E29","#64A229","#66A52A","#68A72B","#6AAB2B","#6BAE2C","#6DB12E","#6FB42E","#71B62F","#73BA2F","#75BC30","#77BF31","#79C231","#7AC532","#7CC834","#7ECB34","#80CD35","#82D135","#84D336","#86D637","#87D937","#88DC38","#8ADF39","#8CDF3D","#8FE040","#91E045","#93E148","#94E14B","#96E150","#98E253","#9AE357","#9CE35A","#9EE45D","#A0E461","#A2E564","#A4E667","#A6E66B","#A7E66E","#A9E772","#ABE775","#AEE878","#AFE87C","#B1E97F","#B3EA82","#B5EA86","#B6EA88","#B8EB8C","#BAEB8F","#BCEC92","#BEEC95","#C0ED98","#C1EE9B","#C3EE9E","#C5EFA1","#C7EFA5","#C9EFA7","#CBF0AA","#CDF0AE","#CEF1B0","#D0F2B3","#D2F2B6","#D3F3B9","#D5F3BC","#D7F3BF","#D9F4C1","#DBF4C5","#DCF5C7","#DEF6CA","#E0F6CD","#E1F7D0","#E3F7D3","#E6F7D6","#E7F8D8","#E9F8DC","#EAF9DE","#ECFAE1","#EEFAE4","#EFFBE6","#F1FBEA","#F3FBEC","#F5FCEF","#F7FCF2","#F8FDF4","#FAFEF7","#FBFEFA","#FDFFFC","#000001","#030700","#070E00","#0A1303","#0E1903","#111E03","#142205","#162705","#192C07","#1B3007","#1E3507","#213809","#233D09","#264109","#27450A","#2A490A","#2C4E0C","#2F510C","#31550C","#34580E","#355C0E","#37600E","#39630F","#3C670F","#3E6B11","#406E11","#437211","#447513","#467913","#487D13","#4A8014","#4C8414","#4F8716","#508A16","#528E16","#549117","#569417","#589817","#5A9B19","#5C9E19","#5DA21A","#5FA51A","#61A81A","#63AB1B","#65AE1B","#67B21B","#68B51D","#6AB81D","#6CBB1E","#6EBE1E","#70C11E","#72C41F","#74C71F","#75CB1F","#77CD21","#79D121","#7BD422","#7DD722","#7FDA22","#81DC23","#82E023","#84E323","#86E625","#87E925","#89EC26","#8BEC2A","#8DEC2F","#8FED32","#91ED37","#93ED3C","#95EE3F","#97EE44","#99EF48","#9BEF4B","#9DEF50","#9EEF53","#A1EF57","#A3EF5B","#A5F05E","#A6F062","#A8F166","#AAF169","#ACF16D","#AEF270","#B0F274","#B2F278","#B4F37B","#B5F37F","#B7F383","#BAF386","#BBF389","#BDF48C","#BFF490","#C1F493","#C2F596","#C4F59A","#C7F69D","#C8F6A0","#CAF6A4","#CCF7A6","#CDF7AA","#CFF7AE","#D2F7B0","#D3F7B4","#D5F8B7","#D7F8BA","#D8F8BD","#DAF9C0","#DCF9C3","#DEF9C7","#E0FAC9","#E1FACD","#E3FBD0","#E5FBD2","#E6FBD6","#E9FBD8","#EAFBDC","#ECFBDF","#EEFCE1","#EFFCE5","#F1FDE8","#F3FDEA","#F5FDEE","#F7FEF0","#F8FEF3","#FAFEF7","#FBFFF9","#FDFFFC","#000001","#030700","#070E00","#0A1400","#0E1A00","#111F00","#132500","#162A00","#192F03","#1B3203","#1E3703","#213C03","#224003","#254503","#274903","#2A4E03","#2C5205","#2F5505","#305905","#325D05","#356105","#376505","#396905","#3B6D05","#3D7107","#3F7407","#417807","#447C07","#468007","#478407","#498707","#4B8B07","#4E8F09","#509209","#529509","#539909","#559D09","#57A009","#59A409","#5BA709","#5CAB0A","#5EAE0A","#60B10A","#62B50A","#64B80A","#66BB0A","#67BF0A","#69C20A","#6BC60C","#6DC80C","#6FCC0C","#71CF0C","#72D20C","#74D60C","#76D90C","#78DC0C","#7AE00E","#7BE20E","#7DE60E","#7FE90E","#81EC0E","#83EF0E","#85F30E","#86F60E","#87F90F","#89F914","#8CF91A","#8EF91F","#90F925","#92F92A","#93F92F","#95F934","#98FA38","#9AFA3C","#9CFA40","#9DFA45","#9FFA49","#A2FA4E","#A4FA52","#A6FA56","#A7FB5A","#A9FB5D","#ABFB61","#AEFB65","#AFFB69","#B1FB6D","#B3FB71","#B5FB75","#B6FB79","#B9FB7C","#BBFB80","#BCFB84","#BEFB87","#C0FB8B","#C2FB8F","#C4FB93","#C6FC96","#C7FC99","#C9FC9D","#CBFCA0","#CDFCA4","#CFFCA7","#D1FCAB","#D2FCAE","#D4FDB2","#D6FDB5","#D8FDB8","#DAFDBB","#DCFDBF","#DDFDC2","#DFFDC6","#E1FDC9","#E3FECD","#E5FECF","#E6FED2","#E8FED6","#EAFED9","#ECFEDC","#EEFEE0","#EFFEE3","#F1FFE6","#F3FFE9","#F4FFEC","#F7FFEF","#F8FFF3","#FAFFF6","#FBFFF9","#FDFFFC","#000001","#030503","#070907","#0A0C0A","#0E0F0E","#111311","#141614","#171917","#1A1D1A","#1D1F1B","#1F221E","#222521","#252723","#272A26","#2A2C29","#2C2F2B","#2F322E","#31352F","#343731","#363934","#383C36","#3B3E38","#3D403B","#3F433D","#41463F","#444840","#464A43","#484C45","#4A4F47","#4B5149","#4E534B","#50554E","#525850","#545A51","#565C53","#585E55","#5A6057","#5C6259","#5E645B","#60665D","#62695F","#646B60","#666D62","#686F64","#6A7166","#6C7368","#6E756A","#70776C","#727A6E","#747C6F","#767E71","#788073","#7A8275","#7C8477","#7E8679","#80877B","#828A7D","#838C7E","#858E80","#869082","#889284","#8A9386","#8C9587","#8E9789","#909A8B","#929B8D","#939D8F","#959E91","#97A093","#99A294","#9BA496","#9DA698","#9FA79B","#A1A89D","#A3AA9E","#A5ACA0","#A6AEA2","#A8AFA4","#AAB1A6","#ACB3A7","#AEB5AA","#AFB5AC","#B1B7AE","#B3B9AF","#B5BBB1","#B6BCB3","#B8BEB5","#BAC0B6","#BBC1B9","#BDC2BB","#BFC4BC","#C1C6BE","#C2C7C0","#C4C9C1","#C6CBC3","#C7CDC5","#C9CEC7","#CBCFC9","#CDD1CB","#CED2CD","#D1D4CE","#D2D6D0","#D4D7D2","#D6D9D3","#D7DBD6","#D9DCD7","#DBDDD9","#DCDFDB","#DEE1DC","#E0E2DE","#E1E4E0","#E3E6E1","#E5E7E4","#E6E8E6","#E8EAE7","#EAEBE9","#EBEDEA","#EDEFEC","#EFF0EE","#F0F2EF","#F2F3F2","#F3F4F3","#F5F6F5","#F7F7F7","#F8F9F8","#FAFBFA","#FBFCFB","#FDFEFD","#000001","#030503","#070907","#0A0E09","#0E110C","#11140F","#141911","#171B14","#1A1F17","#1D2219","#1E251B","#21291D","#232B1F","#262E22","#293123","#2B3426","#2E3729","#30392A","#323C2C","#343F2E","#364130","#384432","#3B4734","#3D4936","#3F4C38","#414F39","#44513C","#46543D","#48563F","#495841","#4B5B43","#4E5D45","#506047","#526248","#54644A","#56674B","#58694E","#5A6B50","#5B6E51","#5D7053","#5F7355","#617556","#637758","#657A59","#677C5B","#697E5D","#6B815E","#6D8360","#6E8662","#708763","#728965","#748C66","#768E68","#78906A","#7A936B","#7C946D","#7E976F","#7F9970","#819B72","#839D73","#859F75","#86A177","#88A478","#8AA67A","#8CA87C","#8EA97E","#90AB80","#92AC83","#93AE85","#95AF86","#97B089","#99B28B","#9CB48E","#9DB590","#9FB692","#A1B794","#A3B996","#A5BB98","#A6BB9B","#A8BD9D","#AABF9F","#ADC0A1","#AEC1A3","#B0C2A6","#B2C4A7","#B4C6A9","#B5C7AC","#B7C8AE","#B9CAB0","#BBCBB2","#BCCDB4","#BFCDB6","#C1CFB8","#C2D1BA","#C4D2BC","#C6D3BE","#C7D5C1","#C9D6C2","#CBD7C4","#CDD8C7","#CFDAC8","#D1DCCA","#D2DCCD","#D4DECE","#D6E0D1","#D7E1D2","#D9E2D4","#DBE3D7","#DCE5D8","#DEE6DA","#E1E7DC","#E2E9DE","#E4EAE1","#E6EBE2","#E7EDE4","#E9EEE6","#EAEFE8","#ECF1EA","#EEF2EC","#F0F3EE","#F2F5F0","#F3F6F2","#F5F7F3","#F7F8F6","#F8FAF7","#FAFBF9","#FBFCFB","#FDFEFD","#000001","#030503","#070A05","#0A0E09","#0E130A","#11170C","#131A0F","#161E11","#192214","#1B2516","#1E2917","#212B1A","#222F1B","#25321D","#27351F","#2A3821","#2C3C23","#2F3E25","#304126","#324429","#35472A","#374A2B","#394C2E","#3B502F","#3D5331","#3F5532","#415834","#445A36","#465D37","#476038","#49623B","#4B653C","#4E683E","#506A3F","#526D40","#536F43","#557244","#577545","#597747","#5B7A48","#5C7D4A","#5E7F4B","#60824C","#62844F","#648650","#668951","#678B53","#698E54","#6B9156","#6D9357","#6F9558","#71975A","#729A5B","#749D5C","#769E5E","#78A15F","#7AA461","#7BA662","#7DA863","#7FAA65","#81AD66","#83AF67","#85B169","#86B46A","#87B66C","#89B76E","#8CB871","#8EBA73","#90BB76","#92BB79","#93BD7B","#95BE7E","#98C081","#9AC183","#9CC186","#9DC387","#9FC48A","#A2C58D","#A4C78F","#A6C792","#A7C994","#A9CA96","#ABCB99","#AECD9B","#AFCD9D","#B1CEA0","#B3D0A2","#B5D1A5","#B6D2A7","#B9D3A9","#BBD4AC","#BCD6AE","#BED7B0","#C0D7B3","#C2D9B5","#C4DAB7","#C6DCBA","#C7DCBB","#C9DDBE","#CBDFC0","#CDE0C2","#CFE1C5","#D1E2C7","#D2E3C9","#D4E5CC","#D6E6CD","#D8E6D0","#DAE8D2","#DCE9D4","#DDEAD7","#DFEBD8","#E1ECDB","#E3EEDD","#E5EFDF","#E6EFE1","#E8F1E3","#EAF2E6","#ECF3E8","#EEF4EA","#EFF5EC","#F1F7EF","#F3F7F0","#F4F8F3","#F7FAF4","#F8FBF7","#FAFBF9","#FBFDFB","#FDFEFD","#000001","#030503","#070A05","#0A0F07","#0E1409","#0F190A","#131D0C","#16210E","#192511","#1A2713","#1D2B14","#1F2F16","#223217","#233619","#26391A","#293D1B","#2B401E","#2C431F","#2F4621","#314922","#344C23","#355025","#375326","#395627","#3C592A","#3D5B2B","#3F5E2C","#41612E","#44642F","#456730","#476A31","#496D32","#4B7035","#4C7236","#4F7537","#517838","#537B39","#547E3B","#56813C","#58843D","#5A863F","#5B8840","#5D8B41","#5F8E43","#619144","#629345","#649646","#669947","#689C49","#699D4A","#6BA04B","#6DA34C","#6FA64E","#70A84F","#72AB50","#74AE51","#76B053","#77B254","#79B555","#7BB756","#7DBA57","#7EBC58","#80BF59","#82C15A","#84C45C","#86C55E","#87C661","#89C764","#8CC767","#8EC86A","#90C96D","#92CA70","#94CC73","#96CD75","#98CD78","#9ACE7B","#9DCF7E","#9ED081","#A0D184","#A2D286","#A5D389","#A6D48B","#A8D58E","#AAD691","#ADD793","#AED796","#B0D899","#B2D99C","#B5DB9E","#B6DCA0","#B8DCA3","#BADDA6","#BCDEA8","#BEDFAB","#C0E0AE","#C1E1B0","#C4E2B3","#C6E3B5","#C7E4B7","#C9E5BA","#CCE6BC","#CDE6BF","#CFE7C1","#D1E8C4","#D3EAC7","#D5EAC8","#D7EBCB","#D8ECCD","#DBEDD0","#DCEED2","#DEEFD5","#E0EFD7","#E2F1DA","#E4F2DC","#E6F3DE","#E7F3E1","#EAF4E3","#EBF5E6","#EDF6E8","#EFF7EA","#F1F8ED","#F3F9EF","#F4FAF1","#F6FBF3","#F8FBF6","#FAFCF8","#FBFDFB","#FDFEFD","#000001","#030700","#070C03","#0A1105","#0C1607","#0F1A09","#131E0A","#14220C","#17270E","#1A2B0E","#1B2F0F","#1E3211","#213613","#223914","#253D16","#274017","#294519","#2B4819","#2E4B1A","#2F4F1B","#31521D","#34551E","#36581F","#375B21","#395F22","#3C6222","#3D6523","#3F6825","#416B26","#436E27","#457129","#47742A","#48782B","#4A7B2B","#4C7E2C","#4E812E","#50842F","#528630","#538931","#558C32","#579034","#599334","#5A9535","#5C9836","#5E9B37","#5F9D38","#61A039","#63A33B","#64A63C","#66A93C","#68AC3D","#69AE3E","#6BB13F","#6DB440","#6EB641","#70B943","#72BC44","#73BF44","#75C145","#77C446","#79C747","#7AC948","#7CCC49","#7ECE4A","#7FD24B","#82D24F","#84D252","#86D355","#88D458","#8AD55B","#8CD65E","#8ED761","#91D765","#93D768","#94D86B","#97D96E","#99DA71","#9BDB74","#9DDC77","#9FDC7A","#A1DD7E","#A4DD81","#A6DE84","#A7DF86","#AAE089","#ACE18C","#AEE18F","#B0E292","#B2E395","#B4E398","#B5E49B","#B8E59D","#BAE6A0","#BBE6A3","#BEE7A6","#C0E8A8","#C1E9AC","#C4E9AE","#C6EAB1","#C7EAB4","#CAEBB6","#CCECB9","#CDEDBB","#D0EEBE","#D2EFC1","#D3EFC4","#D6EFC7","#D7F0C9","#D9F1CC","#DBF2CE","#DDF3D1","#DFF3D3","#E1F4D7","#E3F4D9","#E5F5DC","#E6F6DE","#E9F7E1","#EAF7E3","#ECF8E6","#EFF9E8","#F0FAEB","#F2FAEE","#F4FBF0","#F6FBF3","#F7FCF5","#FAFDF7","#FBFEFA","#FDFFFC","#000001","#030700","#070C03","#091303","#0C1705","#0F1B07","#112107","#142509","#162A0A","#192E0A","#1B310C","#1D360C","#1F390E","#213D0F","#23410F","#264511","#274913","#2A4C13","#2C5014","#2E5414","#305716","#315A17","#345E17","#366119","#37651A","#39681A","#3B6B1B","#3D6F1B","#3F721D","#40751E","#43791E","#457C1F","#468021","#488321","#498622","#4B8922","#4E8C23","#4F8F25","#519325","#529526","#549927","#569C27","#579E29","#59A229","#5AA52A","#5CA72B","#5EAB2B","#5FAE2C","#61B12E","#63B42E","#64B62F","#66BA2F","#67BC30","#69BF31","#6BC231","#6CC532","#6EC834","#6FCB34","#71CD35","#73D135","#74D336","#76D637","#78D937","#79DC38","#7BDF39","#7DDF3D","#80E040","#82E045","#84E148","#86E14B","#88E150","#8AE253","#8DE357","#8FE35A","#92E45D","#93E461","#95E564","#98E667","#9AE66B","#9DE66E","#9EE772","#A0E775","#A3E878","#A5E87C","#A6E97F","#A9EA82","#ABEA86","#AEEA88","#AFEB8C","#B1EB8F","#B4EC92","#B5EC95","#B8ED98","#BAEE9B","#BBEE9E","#BEEFA1","#C0EFA5","#C2EFA7","#C4F0AA","#C6F0AE","#C8F1B0","#CAF2B3","#CCF2B6","#CEF3B9","#D0F3BC","#D2F3BF","#D4F4C1","#D6F4C5","#D8F5C7","#DAF6CA","#DCF6CD","#DEF7D0","#E0F7D3","#E2F7D6","#E4F8D8","#E6F8DC","#E8F9DE","#EAFAE1","#ECFAE4","#EEFBE6","#EFFBEA","#F2FBEC","#F3FCEF","#F6FCF2","#F7FDF4","#F9FEF7","#FBFEFA","#FDFFFC","#000001","#030700","#070E00","#091303","#0C1903","#0E1E03","#112205","#132705","#162C07","#173007","#1A3507","#1B3809","#1E3D09","#214109","#22450A","#25490A","#264E0C","#29510C","#2A550C","#2C580E","#2E5C0E","#30600E","#31630F","#34670F","#366B11","#376E11","#397211","#3B7513","#3D7913","#3E7D13","#408014","#418414","#448716","#458A16","#478E16","#499117","#4A9417","#4C9817","#4E9B19","#509E19","#51A21A","#53A51A","#54A81A","#56AB1B","#57AE1B","#59B21B","#5AB51D","#5CB81D","#5EBB1E","#5FBE1E","#61C11E","#62C41F","#64C71F","#65CB1F","#67CD21","#68D121","#6AD422","#6BD722","#6DDA22","#6FDC23","#70E023","#72E323","#73E625","#75E925","#76EC26","#79EC2A","#7BEC2F","#7EED32","#80ED37","#83ED3C","#85EE3F","#86EE44","#89EF48","#8BEF4B","#8EEF50","#90EF53","#93EF57","#94EF5B","#97F05E","#99F062","#9CF166","#9DF169","#9FF16D","#A2F270","#A4F274","#A6F278","#A8F37B","#ABF37F","#ADF383","#AFF386","#B1F389","#B4F48C","#B5F490","#B8F493","#BAF596","#BBF59A","#BEF69D","#C0F6A0","#C2F6A4","#C4F7A6","#C7F7AA","#C8F7AE","#CBF7B0","#CDF7B4","#CFF8B7","#D1F8BA","#D2F8BD","#D5F9C0","#D7F9C3","#D9F9C7","#DBFAC9","#DDFACD","#DFFBD0","#E1FBD2","#E3FBD6","#E6FBD8","#E7FBDC","#E9FBDF","#EBFCE1","#EDFCE5","#EFFDE8","#F1FDEA","#F3FDEE","#F5FEF0","#F7FEF3","#F9FEF7","#FBFFF9","#FDFFFC","#000001","#030700","#050E00","#091400","#0A1A00","#0E1F00","#0F2500","#132A00","#142F03","#173203","#193703","#1B3C03","#1D4003","#1F4503","#214903","#234E03","#255205","#275505","#295905","#2A5D05","#2C6105","#2E6505","#306905","#316D05","#347107","#357407","#377807","#387C07","#3B8007","#3C8407","#3E8707","#3F8B07","#418F09","#439209","#459509","#469909","#489D09","#49A009","#4AA409","#4CA709","#4EAB0A","#50AE0A","#51B10A","#53B50A","#54B80A","#56BB0A","#57BF0A","#59C20A","#5AC60C","#5CC80C","#5DCC0C","#5FCF0C","#60D20C","#62D60C","#63D90C","#64DC0C","#66E00E","#67E20E","#69E60E","#6AE90E","#6CEC0E","#6DEF0E","#6FF30E","#70F60E","#72F90F","#74F914","#77F91A","#79F91F","#7CF925","#7EF92A","#81F92F","#83F934","#86FA38","#87FA3C","#8AFA40","#8DFA45","#8FFA49","#92FA4E","#93FA52","#96FA56","#98FB5A","#9BFB5D","#9DFB61","#9FFB65","#A1FB69","#A4FB6D","#A6FB71","#A8FB75","#AAFB79","#ADFB7C","#AEFB80","#B1FB84","#B4FB87","#B5FB8B","#B8FB8F","#BAFB93","#BCFC96","#BEFC99","#C1FC9D","#C2FCA0","#C5FCA4","#C7FCA7","#C9FCAB","#CBFCAE","#CDFDB2","#CFFDB5","#D2FDB8","#D3FDBB","#D6FDBF","#D7FDC2","#DAFDC6","#DCFDC9","#DEFECD","#E1FECF","#E2FED2","#E5FED6","#E6FED9","#E9FEDC","#EAFEE0","#EDFEE3","#EFFFE6","#F1FFE9","#F3FFEC","#F5FFEF","#F7FFF3","#F9FFF6","#FBFFF9","#FDFFFC","#000001","#030503","#070907","#0A0C0A","#0E0F0E","#111311","#141614","#171917","#1A1D1A","#1D1F1B","#1F221E","#222521","#252723","#272A26","#2A2C29","#2C2F2B","#2F322E","#31352F","#323731","#353934","#373C36","#393E38","#3C403B","#3E433D","#40463F","#434840","#454A43","#474C45","#494F47","#4B5149","#4E534B","#50554E","#525850","#545A51","#565C53","#575E55","#596057","#5B6259","#5D645B","#5F665D","#61695F","#636B60","#656D62","#676F64","#697166","#6B7368","#6D756A","#6F776C","#717A6E","#737C6F","#757E71","#778073","#788275","#7A8477","#7C8679","#7E877B","#808A7D","#828C7E","#848E80","#869082","#879284","#899386","#8B9587","#8D9789","#8F9A8B","#919B8D","#939D8F","#949E91","#96A093","#98A294","#9AA496","#9CA698","#9DA79B","#9FA89D","#A1AA9E","#A3ACA0","#A5AEA2","#A7AFA4","#A9B1A6","#ABB3A7","#ADB5AA","#AEB5AC","#B0B7AE","#B2B9AF","#B4BBB1","#B5BCB3","#B7BEB5","#B9C0B6","#BBC1B9","#BCC2BB","#BEC4BC","#C0C6BE","#C1C7C0","#C3C9C1","#C6CBC3","#C7CDC5","#C9CEC7","#CBCFC9","#CDD1CB","#CED2CD","#D0D4CE","#D2D6D0","#D3D7D2","#D5D9D3","#D7DBD6","#D8DCD7","#DADDD9","#DCDFDB","#DDE1DC","#DFE2DE","#E1E4E0","#E3E6E1","#E5E7E4","#E6E8E6","#E8EAE7","#EAEBE9","#EBEDEA","#EDEFEC","#EFF0EE","#F0F2EF","#F2F3F2","#F3F4F3","#F5F6F5","#F7F7F7","#F8F9F8","#FAFBFA","#FBFCFB","#FDFEFD","#000001","#030503","#070907","#0A0E09","#0E110C","#11140F","#131911","#161B14","#191F17","#1B2219","#1E251B","#21291D","#222B1F","#252E22","#273123","#2A3426","#2C3729","#2F392A","#303C2C","#323F2E","#354130","#374432","#394734","#3B4936","#3D4C38","#3F4F39","#41513C","#44543D","#46563F","#475841","#495B43","#4B5D45","#4E6047","#506248","#52644A","#53674B","#55694E","#576B50","#596E51","#5B7053","#5C7355","#5E7556","#607758","#627A59","#647C5B","#667E5D","#67815E","#698360","#6B8662","#6D8763","#6F8965","#718C66","#728E68","#74906A","#76936B","#78946D","#7A976F","#7B9970","#7D9B72","#7F9D73","#819F75","#83A177","#85A478","#86A67A","#87A87C","#89A97E","#8CAB80","#8EAC83","#90AE85","#92AF86","#93B089","#95B28B","#98B48E","#9AB590","#9CB692","#9DB794","#9FB996","#A2BB98","#A4BB9B","#A6BD9D","#A7BF9F","#A9C0A1","#ABC1A3","#AEC2A6","#AFC4A7","#B1C6A9","#B3C7AC","#B5C8AE","#B6CAB0","#B9CBB2","#BBCDB4","#BCCDB6","#BECFB8","#C0D1BA","#C2D2BC","#C4D3BE","#C6D5C1","#C7D6C2","#C9D7C4","#CBD8C7","#CDDAC8","#CFDCCA","#D1DCCD","#D2DECE","#D4E0D1","#D6E1D2","#D8E2D4","#DAE3D7","#DCE5D8","#DDE6DA","#DFE7DC","#E1E9DE","#E3EAE1","#E5EBE2","#E6EDE4","#E8EEE6","#EAEFE8","#ECF1EA","#EEF2EC","#EFF3EE","#F1F5F0","#F3F6F2","#F4F7F3","#F7F8F6","#F8FAF7","#FAFBF9","#FBFCFB","#FDFEFD","#000001","#030503","#070A05","#0A0E09","#0C130A","#0F170C","#131A0F","#141E11","#172214","#1A2516","#1D2917","#1E2B1A","#212F1B","#23321D","#25351F","#273821","#2A3C23","#2C3E25","#2E4126","#304429","#32472A","#344A2B","#364C2E","#38502F","#395331","#3C5532","#3E5834","#405A36","#415D37","#446038","#46623B","#47653C","#49683E","#4B6A3F","#4E6D40","#4F6F43","#517244","#537545","#547747","#567A48","#587D4A","#597F4B","#5B824C","#5D844F","#5F8650","#608951","#628B53","#648E54","#659156","#679357","#699558","#6B975A","#6C9A5B","#6E9D5C","#709E5E","#71A15F","#73A461","#75A662","#77A863","#78AA65","#7AAD66","#7CAF67","#7DB169","#7FB46A","#81B66C","#83B76E","#85B871","#87BA73","#89BB76","#8BBB79","#8EBD7B","#90BE7E","#92C081","#93C183","#96C186","#98C387","#9AC48A","#9DC58D","#9EC78F","#A0C792","#A2C994","#A5CA96","#A6CB99","#A8CD9B","#ABCD9D","#ADCEA0","#AED0A2","#B0D1A5","#B3D2A7","#B5D3A9","#B6D4AC","#B9D6AE","#BBD7B0","#BCD7B3","#BFD9B5","#C1DAB7","#C2DCBA","#C4DCBB","#C7DDBE","#C8DFC0","#CAE0C2","#CDE1C5","#CEE2C7","#D0E3C9","#D2E5CC","#D4E6CD","#D6E6D0","#D7E8D2","#DAE9D4","#DCEAD7","#DDEBD8","#E0ECDB","#E1EEDD","#E3EFDF","#E5EFE1","#E7F1E3","#E9F2E6","#EAF3E8","#EDF4EA","#EFF5EC","#F0F7EF","#F2F7F0","#F4F8F3","#F6FAF4","#F7FBF7","#FAFBF9","#FBFDFB","#FDFEFD","#000001","#030503","#070A05","#090F07","#0C1409","#0E190A","#111D0C","#14210E","#162511","#192713","#1A2B14","#1D2F16","#1F3217","#213619","#23391A","#253D1B","#27401E","#2A431F","#2B4621","#2E4922","#2F4C23","#315025","#325326","#355627","#37592A","#385B2B","#3B5E2C","#3C612E","#3E642F","#406730","#416A31","#446D32","#457035","#477236","#497537","#4A7838","#4C7B39","#4E7E3B","#50813C","#52843D","#53863F","#558840","#568B41","#588E43","#599144","#5B9345","#5D9646","#5E9947","#609C49","#619D4A","#63A04B","#65A34C","#66A64E","#68A84F","#69AB50","#6BAE51","#6DB053","#6EB254","#70B555","#71B756","#73BA57","#74BC58","#76BF59","#78C15A","#79C45C","#7CC55E","#7EC661","#80C764","#83C767","#85C86A","#87C96D","#89CA70","#8CCC73","#8ECD75","#90CD78","#93CE7B","#94CF7E","#97D081","#99D184","#9BD286","#9DD389","#9FD48B","#A2D58E","#A4D691","#A6D793","#A8D796","#AAD899","#ADD99C","#AEDB9E","#B1DCA0","#B3DCA3","#B5DDA6","#B7DEA8","#B9DFAB","#BBE0AE","#BDE1B0","#BFE2B3","#C1E3B5","#C3E4B7","#C6E5BA","#C7E6BC","#C9E6BF","#CCE7C1","#CDE8C4","#D0EAC7","#D2EAC8","#D3EBCB","#D6ECCD","#D7EDD0","#DAEED2","#DCEFD5","#DEEFD7","#E0F1DA","#E1F2DC","#E4F3DE","#E6F3E1","#E8F4E3","#EAF5E6","#EBF6E8","#EEF7EA","#EFF8ED","#F2F9EF","#F3FAF1","#F5FBF3","#F7FBF6","#F9FCF8","#FBFDFB","#FDFEFD","#000001","#030700","#050C03","#091105","#0A1607","#0E1A09","#0F1E0A","#13220C","#14270E","#172B0E","#192F0F","#1B3211","#1D3613","#1F3914","#213D16","#234017","#254519","#274819","#294B1A","#2A4F1B","#2C521D","#2E551E","#30581F","#315B21","#345F22","#356222","#376523","#386825","#3B6B26","#3C6E27","#3E7129","#3F742A","#41782B","#437B2B","#457E2C","#46812E","#48842F","#498630","#4A8931","#4C8C32","#4E9034","#509334","#519535","#539836","#549B37","#569D38","#57A039","#59A33B","#5AA63C","#5CA93C","#5DAC3D","#5FAE3E","#60B13F","#62B440","#63B641","#64B943","#66BC44","#67BF44","#69C145","#6AC446","#6CC747","#6DC948","#6FCC49","#70CE4A","#72D24B","#74D24F","#77D252","#79D355","#7CD458","#7ED55B","#81D65E","#83D761","#86D765","#87D768","#8AD86B","#8DD96E","#8FDA71","#92DB74","#93DC77","#96DC7A","#98DD7E","#9BDD81","#9DDE84","#9FDF86","#A1E089","#A4E18C","#A6E18F","#A8E292","#AAE395","#ADE398","#AEE49B","#B1E59D","#B4E6A0","#B5E6A3","#B8E7A6","#BAE8A8","#BCE9AC","#BEE9AE","#C1EAB1","#C2EAB4","#C5EBB6","#C7ECB9","#C9EDBB","#CBEEBE","#CDEFC1","#CFEFC4","#D2EFC7","#D3F0C9","#D6F1CC","#D7F2CE","#DAF3D1","#DCF3D3","#DEF4D7","#E1F4D9","#E2F5DC","#E5F6DE","#E6F7E1","#E9F7E3","#EAF8E6","#EDF9E8","#EFFAEB","#F1FAEE","#F3FBF0","#F5FBF3","#F7FCF5","#F9FDF7","#FBFEFA","#FDFFFC","#000001","#030700","#050C03","#091303","#0A1705","#0C1B07","#0F2107","#112509","#132A0A","#162E0A","#17310C","#19360C","#1B390E","#1D3D0F","#1E410F","#214511","#224913","#254C13","#265014","#275414","#2A5716","#2B5A17","#2C5E17","#2F6119","#30651A","#31681A","#346B1B","#356F1B","#36721D","#38751E","#39791E","#3C7C1F","#3D8021","#3E8321","#408622","#418922","#438C23","#458F25","#469325","#479526","#499927","#4A9C27","#4B9E29","#4EA229","#4FA52A","#50A72B","#52AB2B","#53AE2C","#55B12E","#56B42E","#57B62F","#59BA2F","#5ABC30","#5BBF31","#5DC231","#5EC532","#5FC834","#61CB34","#62CD35","#63D135","#65D336","#66D637","#68D937","#69DC38","#6ADF39","#6DDF3D","#70E040","#72E045","#75E148","#77E14B","#7AE150","#7DE253","#7FE357","#82E35A","#85E45D","#86E461","#89E564","#8CE667","#8EE66B","#91E66E","#93E772","#95E775","#98E878","#9AE87C","#9DE97F","#9FEA82","#A1EA86","#A4EA88","#A6EB8C","#A8EB8F","#ABEC92","#AEEC95","#AFED98","#B2EE9B","#B5EE9E","#B6EFA1","#B9EFA5","#BBEFA7","#BDF0AA","#C0F0AE","#C1F1B0","#C4F2B3","#C7F2B6","#C8F3B9","#CBF3BC","#CDF3BF","#CFF4C1","#D2F4C5","#D4F5C7","#D6F6CA","#D8F6CD","#DBF7D0","#DCF7D3","#DFF7D6","#E1F8D8","#E3F8DC","#E6F9DE","#E7FAE1","#EAFAE4","#ECFBE6","#EEFBEA","#F0FBEC","#F3FCEF","#F4FCF2","#F7FDF4","#F9FEF7","#FBFEFA","#FDFFFC","#000001","#030700","#050E00","#071303","#091903","#0C1E03","#0E2205","#0F2705","#112C07","#143007","#163507","#173809","#193D09","#1B4109","#1D450A","#1E490A","#1F4E0C","#22510C","#23550C","#25580E","#265C0E","#29600E","#2A630F","#2B670F","#2C6B11","#2E6E11","#307211","#317513","#327913","#347D13","#368014","#378414","#388716","#398A16","#3C8E16","#3D9117","#3E9417","#3F9817","#419B19","#439E19","#44A21A","#45A51A","#47A81A","#48AB1B","#49AE1B","#4AB21B","#4BB51D","#4EB81D","#4FBB1E","#50BE1E","#51C11E","#53C41F","#54C71F","#55CB1F","#56CD21","#58D121","#59D422","#5AD722","#5BDA22","#5DDC23","#5EE023","#5FE323","#60E625","#62E925","#63EC26","#66EC2A","#68EC2F","#6BED32","#6EED37","#71ED3C","#73EE3F","#76EE44","#79EF48","#7CEF4B","#7EEF50","#81EF53","#84EF57","#86EF5B","#88F05E","#8BF062","#8EF166","#91F169","#93F16D","#95F270","#98F274","#9BF278","#9DF37B","#9FF37F","#A2F383","#A5F386","#A7F389","#A9F48C","#ACF490","#AEF493","#B1F596","#B3F59A","#B5F69D","#B8F6A0","#BBF6A4","#BCF7A6","#BFF7AA","#C1F7AE","#C4F7B0","#C6F7B4","#C8F8B7","#CBF8BA","#CDF8BD","#D0F9C0","#D2F9C3","#D4F9C7","#D7FAC9","#D9FACD","#DBFBD0","#DDFBD2","#E0FBD6","#E2FBD8","#E4FBDC","#E6FBDF","#E9FCE1","#EBFCE5","#EDFDE8","#EFFDEA","#F2FDEE","#F4FEF0","#F6FEF3","#F8FEF7","#FBFFF9","#FDFFFC","#000001","#030700","#050E00","#071400","#091A00","#0A1F00","#0C2500","#0E2A00","#0F2F03","#133203","#143703","#163C03","#174003","#194503","#1A4903","#1B4E03","#1D5205","#1F5505","#215905","#225D05","#236105","#256505","#266905","#276D05","#297107","#2B7407","#2C7807","#2E7C07","#2F8007","#308407","#318707","#328B07","#348F09","#359209","#379509","#389909","#399D09","#3BA009","#3CA409","#3DA709","#3EAB0A","#3FAE0A","#41B10A","#43B50A","#44B80A","#45BB0A","#46BF0A","#47C20A","#48C60C","#49C80C","#4BCC0C","#4CCF0C","#4ED20C","#4FD60C","#50D90C","#51DC0C","#52E00E","#53E20E","#55E60E","#56E90E","#57EC0E","#58EF0E","#59F30E","#5AF60E","#5BF90F","#5EF914","#61F91A","#64F91F","#67F925","#6AF92A","#6DF92F","#6FF934","#72FA38","#75FA3C","#78FA40","#7BFA45","#7EFA49","#81FA4E","#84FA52","#86FA56","#88FB5A","#8BFB5D","#8EFB61","#91FB65","#93FB69","#96FB6D","#99FB71","#9BFB75","#9DFB79","#A0FB7C","#A3FB80","#A6FB84","#A8FB87","#ABFB8B","#AEFB8F","#AFFB93","#B2FC96","#B5FC99","#B7FC9D","#BAFCA0","#BCFCA4","#BFFCA7","#C1FCAB","#C4FCAE","#C6FDB2","#C8FDB5","#CBFDB8","#CDFDBB","#D0FDBF","#D2FDC2","#D5FDC6","#D7FDC9","#D9FECD","#DCFECF","#DEFED2","#E1FED6","#E3FED9","#E6FEDC","#E8FEE0","#EAFEE3","#ECFFE6","#EFFFE9","#F1FFEC","#F3FFEF","#F6FFF3","#F8FFF6","#FBFFF9","#FDFFFC","#000001","#030503","#070907","#0A0C0A","#0E0F0E","#111311","#141614","#171917","#1A1D1A","#1D1F1B","#1F221E","#222521","#252723","#262A26","#292C29","#2B2F2B","#2E322E","#30352F","#323731","#353934","#373C36","#393E38","#3C403B","#3E433D","#40463F","#414840","#444A43","#464C45","#484F47","#4A5149","#4C534B","#4F554E","#515850","#535A51","#555C53","#575E55","#596057","#5A6259","#5C645B","#5E665D","#60695F","#626B60","#646D62","#666F64","#687166","#6A7368","#6C756A","#6E776C","#707A6E","#717C6F","#737E71","#758073","#778275","#798477","#7B8679","#7D877B","#7F8A7D","#818C7E","#838E80","#859082","#869284","#879386","#899587","#8B9789","#8D9A8B","#8F9B8D","#919D8F","#939E91","#95A093","#97A294","#99A496","#9BA698","#9DA79B","#9EA89D","#A0AA9E","#A2ACA0","#A4AEA2","#A6AFA4","#A7B1A6","#A9B3A7","#ACB5AA","#AEB5AC","#AFB7AE","#B1B9AF","#B3BBB1","#B5BCB3","#B6BEB5","#B8C0B6","#BAC1B9","#BBC2BB","#BDC4BC","#BFC6BE","#C1C7C0","#C3C9C1","#C5CBC3","#C7CDC5","#C8CEC7","#CACFC9","#CCD1CB","#CDD2CD","#CFD4CE","#D1D6D0","#D2D7D2","#D4D9D3","#D7DBD6","#D8DCD7","#DADDD9","#DCDFDB","#DDE1DC","#DFE2DE","#E1E4E0","#E2E6E1","#E4E7E4","#E6E8E6","#E7EAE7","#E9EBE9","#EBEDEA","#EDEFEC","#EFF0EE","#F0F2EF","#F2F3F2","#F3F4F3","#F5F6F5","#F7F7F7","#F8F9F8","#FAFBFA","#FBFCFB","#FDFEFD","#000001","#030503","#070907","#0A0E09","#0E110C","#0F140F","#131911","#161B14","#191F17","#1A2219","#1D251B","#1F291D","#222B1F","#232E22","#263123","#293426","#2B3729","#2C392A","#2F3C2C","#313F2E","#344130","#354432","#374734","#394936","#3C4C38","#3D4F39","#3F513C","#41543D","#44563F","#455841","#475B43","#495D45","#4B6047","#4C6248","#4F644A","#51674B","#53694E","#546B50","#566E51","#587053","#5A7355","#5B7556","#5D7758","#5F7A59","#617C5B","#627E5D","#64815E","#668360","#688662","#698763","#6B8965","#6D8C66","#6F8E68","#70906A","#72936B","#74946D","#76976F","#779970","#799B72","#7B9D73","#7D9F75","#7EA177","#80A478","#82A67A","#84A87C","#86A97E","#87AB80","#89AC83","#8CAE85","#8EAF86","#90B089","#92B28B","#94B48E","#96B590","#98B692","#9AB794","#9DB996","#9EBB98","#A0BB9B","#A2BD9D","#A5BF9F","#A6C0A1","#A8C1A3","#AAC2A6","#ADC4A7","#AEC6A9","#B0C7AC","#B2C8AE","#B5CAB0","#B6CBB2","#B8CDB4","#BACDB6","#BCCFB8","#BED1BA","#C0D2BC","#C1D3BE","#C4D5C1","#C6D6C2","#C7D7C4","#C9D8C7","#CCDAC8","#CDDCCA","#CFDCCD","#D1DECE","#D3E0D1","#D5E1D2","#D7E2D4","#D8E3D7","#DBE5D8","#DCE6DA","#DEE7DC","#E0E9DE","#E2EAE1","#E4EBE2","#E6EDE4","#E7EEE6","#EAEFE8","#EBF1EA","#EDF2EC","#EFF3EE","#F1F5F0","#F3F6F2","#F4F7F3","#F6F8F6","#F8FAF7","#FAFBF9","#FBFCFB","#FDFEFD","#000001","#030503","#070A05","#090E09","#0C130A","#0E170C","#111A0F","#141E11","#162214","#192516","#1A2917","#1D2B1A","#1F2F1B","#21321D","#23351F","#253821","#273C23","#2A3E25","#2B4126","#2E4429","#2F472A","#314A2B","#324C2E","#35502F","#375331","#385532","#3B5834","#3C5A36","#3E5D37","#406038","#41623B","#44653C","#45683E","#476A3F","#496D40","#4A6F43","#4C7244","#4E7545","#507747","#527A48","#537D4A","#557F4B","#56824C","#58844F","#598650","#5B8951","#5D8B53","#5E8E54","#609156","#619357","#639558","#65975A","#669A5B","#689D5C","#699E5E","#6BA15F","#6DA461","#6EA662","#70A863","#71AA65","#73AD66","#74AF67","#76B169","#78B46A","#79B66C","#7CB76E","#7EB871","#80BA73","#83BB76","#85BB79","#87BD7B","#89BE7E","#8CC081","#8EC183","#90C186","#93C387","#94C48A","#97C58D","#99C78F","#9BC792","#9DC994","#9FCA96","#A2CB99","#A4CD9B","#A6CD9D","#A8CEA0","#AAD0A2","#ADD1A5","#AED2A7","#B1D3A9","#B3D4AC","#B5D6AE","#B7D7B0","#B9D7B3","#BBD9B5","#BDDAB7","#BFDCBA","#C1DCBB","#C3DDBE","#C6DFC0","#C7E0C2","#C9E1C5","#CCE2C7","#CDE3C9","#D0E5CC","#D2E6CD","#D3E6D0","#D6E8D2","#D7E9D4","#DAEAD7","#DCEBD8","#DEECDB","#E0EEDD","#E1EFDF","#E4EFE1","#E6F1E3","#E8F2E6","#EAF3E8","#EBF4EA","#EEF5EC","#EFF7EF","#F2F7F0","#F3F8F3","#F5FAF4","#F7FBF7","#F9FBF9","#FBFDFB","#FDFEFD","#000001","#030503","#050A05","#090F07","#0A1409","#0E190A","#0F1D0C","#11210E","#142511","#162713","#192B14","#1A2F16","#1D3217","#1E3619","#1F391A","#223D1B","#23401E","#26431F","#274621","#2A4922","#2B4C23","#2C5025","#2F5326","#305627","#32592A","#345B2B","#365E2C","#37612E","#38642F","#3B6730","#3C6A31","#3E6D32","#3F7035","#417236","#437537","#447838","#467B39","#477E3B","#49813C","#4A843D","#4C863F","#4E8840","#4F8B41","#518E43","#529144","#549345","#559646","#579947","#589C49","#599D4A","#5BA04B","#5CA34C","#5EA64E","#5FA84F","#60AB50","#62AE51","#63B053","#65B254","#66B555","#68B756","#69BA57","#6ABC58","#6CBF59","#6DC15A","#6FC45C","#71C55E","#74C661","#76C764","#79C767","#7CC86A","#7EC96D","#81CA70","#83CC73","#86CD75","#87CD78","#8ACE7B","#8DCF7E","#8FD081","#92D184","#93D286","#96D389","#99D48B","#9BD58E","#9DD691","#9FD793","#A2D796","#A4D899","#A6D99C","#A9DB9E","#ABDCA0","#AEDCA3","#AFDDA6","#B2DEA8","#B4DFAB","#B6E0AE","#B9E1B0","#BBE2B3","#BDE3B5","#BFE4B7","#C1E5BA","#C3E6BC","#C6E6BF","#C8E7C1","#CAE8C4","#CDEAC7","#CEEAC8","#D1EBCB","#D2ECCD","#D5EDD0","#D7EED2","#D9EFD5","#DCEFD7","#DDF1DA","#E0F2DC","#E1F3DE","#E4F3E1","#E6F4E3","#E8F5E6","#EAF6E8","#ECF7EA","#EFF8ED","#F0F9EF","#F3FAF1","#F5FBF3","#F7FBF6","#F9FCF8","#FBFDFB","#FDFEFD","#000001","#030700","#050C03","#071105","#0A1607","#0C1A09","#0E1E0A","#0F220C","#13270E","#142B0E","#162F0F","#173211","#1A3613","#1B3914","#1D3D16","#1E4017","#214519","#224819","#234B1A","#254F1B","#27521D","#29551E","#2A581F","#2C5B21","#2E5F22","#2F6222","#306523","#326825","#346B26","#356E27","#367129","#38742A","#39782B","#3B7B2B","#3C7E2C","#3E812E","#3F842F","#408630","#418931","#448C32","#459034","#469334","#479535","#499836","#4A9B37","#4B9D38","#4EA039","#4FA33B","#50A63C","#51A93C","#53AC3D","#54AE3E","#55B13F","#56B440","#58B641","#59B943","#5ABC44","#5BBF44","#5DC145","#5EC446","#5FC747","#60C948","#62CC49","#63CE4A","#64D24B","#67D24F","#6AD252","#6CD355","#6FD458","#72D55B","#75D65E","#77D761","#7AD765","#7DD768","#80D86B","#82D96E","#85DA71","#87DB74","#8ADC77","#8CDC7A","#8FDD7E","#92DD81","#94DE84","#96DF86","#99E089","#9CE18C","#9DE18F","#A0E292","#A3E395","#A6E398","#A7E49B","#AAE59D","#ADE6A0","#AFE6A3","#B1E7A6","#B4E8A8","#B6E9AC","#B9E9AE","#BBEAB1","#BDEAB4","#C0EBB6","#C2ECB9","#C4EDBB","#C7EEBE","#C9EFC1","#CCEFC4","#CDEFC7","#D0F0C9","#D2F1CC","#D4F2CE","#D7F3D1","#D9F3D3","#DCF4D7","#DDF4D9","#E0F5DC","#E2F6DE","#E5F7E1","#E6F7E3","#E9F8E6","#EBF9E8","#EEFAEB","#EFFAEE","#F2FBF0","#F4FBF3","#F7FCF5","#F8FDF7","#FBFEFA","#FDFFFC","#000001","#030700","#050C03","#071303","#091705","#0A1B07","#0C2107","#0E2509","#0F2A0A","#112E0A","#13310C","#16360C","#17390E","#193D0F","#1A410F","#1B4511","#1D4913","#1E4C13","#1F5014","#215414","#225716","#255A17","#265E17","#276119","#29651A","#2A681A","#2B6B1B","#2C6F1B","#2E721D","#2F751E","#30791E","#327C1F","#348021","#358321","#368622","#378922","#388C23","#398F25","#3B9325","#3C9526","#3D9927","#3F9C27","#409E29","#41A229","#43A52A","#44A72B","#45AB2B","#46AE2C","#47B12E","#48B42E","#49B62F","#4ABA2F","#4CBC30","#4EBF31","#4FC231","#50C532","#51C834","#52CB34","#53CD35","#54D135","#55D336","#56D637","#58D937","#59DC38","#5ADF39","#5DDF3D","#60E040","#62E045","#65E148","#68E14B","#6BE150","#6EE253","#71E357","#74E35A","#77E45D","#7AE461","#7DE564","#7FE667","#82E66B","#85E66E","#87E772","#8AE775","#8DE878","#90E87C","#93E97F","#95EA82","#98EA86","#9BEA88","#9DEB8C","#9FEB8F","#A2EC92","#A5EC95","#A7ED98","#AAEE9B","#ADEE9E","#AFEFA1","#B2EFA5","#B5EFA7","#B6F0AA","#B9F0AE","#BBF1B0","#BEF2B3","#C1F2B6","#C3F3B9","#C6F3BC","#C8F3BF","#CBF4C1","#CDF4C5","#CFF5C7","#D2F6CA","#D4F6CD","#D7F7D0","#D9F7D3","#DCF7D6","#DEF8D8","#E1F8DC","#E3F9DE","#E6FAE1","#E7FAE4","#EAFBE6","#ECFBEA","#EFFBEC","#F1FCEF","#F3FCF2","#F6FDF4","#F8FEF7","#FBFEFA","#FDFFFC","#000001","#000700","#030E00","#051303","#071903","#091E03","#0A2205","#0C2705","#0E2C07","#0F3007","#113507","#133809","#143D09","#164109","#17450A","#19490A","#194E0C","#1A510C","#1B550C","#1D580E","#1E5C0E","#1F600E","#21630F","#22670F","#236B11","#256E11","#267211","#277513","#297913","#2A7D13","#2B8014","#2B8414","#2C8716","#2E8A16","#2F8E16","#309117","#319417","#329817","#349B19","#359E19","#36A21A","#37A51A","#38A81A","#39AB1B","#3BAE1B","#3CB21B","#3CB51D","#3DB81D","#3EBB1E","#3FBE1E","#40C11E","#41C41F","#43C71F","#44CB1F","#45CD21","#46D121","#47D422","#48D722","#49DA22","#4ADC23","#4BE023","#4BE323","#4CE625","#4EE925","#4FEC26","#52EC2A","#55EC2F","#58ED32","#5CED37","#5FED3C","#62EE3F","#65EE44","#68EF48","#6BEF4B","#6EEF50","#71EF53","#74EF57","#77EF5B","#7AF05E","#7DF062","#80F166","#83F169","#86F16D","#89F270","#8CF274","#8FF278","#92F37B","#94F37F","#97F383","#9AF386","#9DF389","#9FF48C","#A2F490","#A5F493","#A7F596","#AAF59A","#ADF69D","#AFF6A0","#B3F6A4","#B5F7A6","#B8F7AA","#BBF7AE","#BDF7B0","#C0F7B4","#C2F8B7","#C5F8BA","#C7F8BD","#CAF9C0","#CDF9C3","#CFF9C7","#D2FAC9","#D4FACD","#D7FBD0","#DAFBD2","#DCFBD6","#DFFBD8","#E1FBDC","#E4FBDF","#E6FCE1","#E9FCE5","#EBFDE8","#EEFDEA","#F0FDEE","#F3FEF0","#F5FEF3","#F7FEF7","#FAFFF9","#FCFFFC","#000001","#000700","#030E00","#051400","#071A00","#071F00","#092500","#0A2A00","#0C2F03","#0C3203","#0E3703","#0F3C03","#114003","#134503","#134903","#144E03","#165205","#175505","#175905","#195D05","#1A6105","#1B6505","#1B6905","#1D6D05","#1E7107","#1F7407","#217807","#217C07","#228007","#238407","#258707","#258B07","#268F09","#279209","#299509","#299909","#2A9D09","#2BA009","#2CA409","#2EA709","#2EAB0A","#2FAE0A","#30B10A","#31B50A","#31B80A","#32BB0A","#34BF0A","#35C20A","#35C60C","#36C80C","#37CC0C","#38CF0C","#39D20C","#39D60C","#3BD90C","#3CDC0C","#3DE00E","#3DE20E","#3EE60E","#3FE90E","#40EC0E","#40EF0E","#41F30E","#43F60E","#44F90F","#47F914","#4AF91A","#4EF91F","#52F925","#55F92A","#58F92F","#5BF934","#5FFA38","#62FA3C","#65FA40","#68FA45","#6CFA49","#6FFA4E","#72FA52","#75FA56","#78FB5A","#7CFB5D","#7FFB61","#82FB65","#85FB69","#88FB6D","#8BFB71","#8EFB75","#91FB79","#94FB7C","#97FB80","#9AFB84","#9DFB87","#9FFB8B","#A3FB8F","#A6FB93","#A8FC96","#ABFC99","#AEFC9D","#B1FCA0","#B4FCA4","#B6FCA7","#BAFCAB","#BCFCAE","#BFFDB2","#C1FDB5","#C4FDB8","#C7FDBB","#CAFDBF","#CDFDC2","#CFFDC6","#D2FDC9","#D5FECD","#D7FECF","#DAFED2","#DDFED6","#E0FED9","#E2FEDC","#E5FEE0","#E7FEE3","#EAFFE6","#EDFFE9","#EFFFEC","#F2FFEF","#F5FFF3","#F7FFF6","#FAFFF9","#FCFFFC","#000001","#030503","#070907","#0A0C0A","#0E0F0E","#111311","#141614","#171917","#1A1D1A","#1D1F1B","#1E221E","#212521","#232723","#262A26","#292C29","#2B2F2B","#2E322E","#30352F","#323731","#343934","#363C36","#383E38","#3B403B","#3D433D","#3F463F","#414840","#444A43","#464C45","#484F47","#495149","#4B534B","#4E554E","#505850","#525A51","#545C53","#565E55","#586057","#5A6259","#5B645B","#5D665D","#5F695F","#616B60","#636D62","#656F64","#677166","#697368","#6B756A","#6D776C","#6E7A6E","#707C6F","#727E71","#748073","#768275","#788477","#7A8679","#7C877B","#7E8A7D","#7F8C7E","#818E80","#839082","#859284","#869386","#889587","#8A9789","#8C9A8B","#8E9B8D","#909D8F","#929E91","#93A093","#95A294","#97A496","#99A698","#9CA79B","#9DA89D","#9FAA9E","#A1ACA0","#A3AEA2","#A5AFA4","#A6B1A6","#A8B3A7","#AAB5AA","#ADB5AC","#AEB7AE","#B0B9AF","#B2BBB1","#B4BCB3","#B5BEB5","#B7C0B6","#B9C1B9","#BBC2BB","#BCC4BC","#BFC6BE","#C1C7C0","#C2C9C1","#C4CBC3","#C6CDC5","#C7CEC7","#C9CFC9","#CBD1CB","#CDD2CD","#CFD4CE","#D1D6D0","#D2D7D2","#D4D9D3","#D6DBD6","#D7DCD7","#D9DDD9","#DBDFDB","#DCE1DC","#DEE2DE","#E1E4E0","#E2E6E1","#E4E7E4","#E6E8E6","#E7EAE7","#E9EBE9","#EAEDEA","#ECEFEC","#EEF0EE","#F0F2EF","#F2F3F2","#F3F4F3","#F5F6F5","#F7F7F7","#F8F9F8","#FAFBFA","#FBFCFB","#FDFEFD","#000001","#030503","#070907","#0A0E09","#0C110C","#0F140F","#131911","#141B14","#171F17","#1A2219","#1B251B","#1E291D","#212B1F","#222E22","#253123","#273426","#293729","#2B392A","#2E3C2C","#2F3F2E","#314130","#344432","#364734","#374936","#394C38","#3C4F39","#3D513C","#3F543D","#41563F","#435841","#455B43","#475D45","#486047","#4A6248","#4C644A","#4E674B","#50694E","#526B50","#536E51","#557053","#577355","#597556","#5A7758","#5C7A59","#5E7C5B","#5F7E5D","#61815E","#638360","#648662","#668763","#688965","#698C66","#6B8E68","#6D906A","#6E936B","#70946D","#72976F","#739970","#759B72","#779D73","#799F75","#7AA177","#7CA478","#7EA67A","#7FA87C","#82A97E","#84AB80","#86AC83","#88AE85","#8AAF86","#8CB089","#8EB28B","#91B48E","#93B590","#94B692","#97B794","#99B996","#9BBB98","#9DBB9B","#9FBD9D","#A1BF9F","#A4C0A1","#A6C1A3","#A7C2A6","#AAC4A7","#ACC6A9","#AEC7AC","#B0C8AE","#B2CAB0","#B4CBB2","#B5CDB4","#B8CDB6","#BACFB8","#BBD1BA","#BED2BC","#C0D3BE","#C1D5C1","#C4D6C2","#C6D7C4","#C7D8C7","#CADAC8","#CCDCCA","#CDDCCD","#D0DECE","#D2E0D1","#D3E1D2","#D6E2D4","#D7E3D7","#D9E5D8","#DBE6DA","#DDE7DC","#DFE9DE","#E1EAE1","#E3EBE2","#E5EDE4","#E6EEE6","#E9EFE8","#EAF1EA","#ECF2EC","#EFF3EE","#F0F5F0","#F2F6F2","#F4F7F3","#F6F8F6","#F7FAF7","#FAFBF9","#FBFCFB","#FDFEFD","#000001","#030503","#050A05","#090E09","#0A130A","#0E170C","#0F1A0F","#131E11","#142214","#172516","#192917","#1B2B1A","#1D2F1B","#1F321D","#21351F","#233821","#253C23","#273E25","#294126","#2A4429","#2C472A","#2E4A2B","#304C2E","#31502F","#345331","#355532","#375834","#385A36","#3B5D37","#3C6038","#3E623B","#3F653C","#41683E","#436A3F","#456D40","#466F43","#487244","#497545","#4A7747","#4C7A48","#4E7D4A","#507F4B","#51824C","#53844F","#548650","#568951","#578B53","#598E54","#5A9156","#5C9357","#5D9558","#5F975A","#609A5B","#629D5C","#639E5E","#64A15F","#66A461","#67A662","#69A863","#6AAA65","#6CAD66","#6DAF67","#6FB169","#70B46A","#72B66C","#74B76E","#77B871","#79BA73","#7CBB76","#7EBB79","#81BD7B","#83BE7E","#86C081","#87C183","#8AC186","#8DC387","#8FC48A","#92C58D","#93C78F","#96C792","#98C994","#9BCA96","#9DCB99","#9FCD9B","#A1CD9D","#A4CEA0","#A6D0A2","#A8D1A5","#AAD2A7","#ADD3A9","#AED4AC","#B1D6AE","#B4D7B0","#B5D7B3","#B8D9B5","#BADAB7","#BCDCBA","#BEDCBB","#C1DDBE","#C2DFC0","#C5E0C2","#C7E1C5","#C9E2C7","#CBE3C9","#CDE5CC","#CFE6CD","#D2E6D0","#D3E8D2","#D6E9D4","#D7EAD7","#DAEBD8","#DCECDB","#DEEEDD","#E1EFDF","#E2EFE1","#E5F1E3","#E6F2E6","#E9F3E8","#EAF4EA","#EDF5EC","#EFF7EF","#F1F7F0","#F3F8F3","#F5FAF4","#F7FBF7","#F9FBF9","#FBFDFB","#FDFEFD","#000001","#030503","#050A05","#070F07","#0A1409","#0C190A","#0E1D0C","#0F210E","#132511","#142713","#162B14","#172F16","#1A3217","#1B3619","#1D391A","#1E3D1B","#21401E","#22431F","#234621","#254922","#274C23","#295025","#2A5326","#2C5627","#2E592A","#2F5B2B","#305E2C","#32612E","#34642F","#356730","#366A31","#386D32","#397035","#3B7236","#3C7537","#3E7838","#3F7B39","#407E3B","#41813C","#44843D","#45863F","#468840","#478B41","#498E43","#4A9144","#4B9345","#4E9646","#4F9947","#509C49","#519D4A","#53A04B","#54A34C","#55A64E","#56A84F","#58AB50","#59AE51","#5AB053","#5BB254","#5DB555","#5EB756","#5FBA57","#60BC58","#62BF59","#63C15A","#64C45C","#67C55E","#6AC661","#6CC764","#6FC767","#72C86A","#75C96D","#77CA70","#7ACC73","#7DCD75","#80CD78","#82CE7B","#85CF7E","#87D081","#8AD184","#8CD286","#8FD389","#92D48B","#94D58E","#96D691","#99D793","#9CD796","#9DD899","#A0D99C","#A3DB9E","#A6DCA0","#A7DCA3","#AADDA6","#ADDEA8","#AFDFAB","#B1E0AE","#B4E1B0","#B6E2B3","#B9E3B5","#BBE4B7","#BDE5BA","#C0E6BC","#C2E6BF","#C4E7C1","#C7E8C4","#C9EAC7","#CCEAC8","#CDEBCB","#D0ECCD","#D2EDD0","#D4EED2","#D7EFD5","#D9EFD7","#DCF1DA","#DDF2DC","#E0F3DE","#E2F3E1","#E5F4E3","#E6F5E6","#E9F6E8","#EBF7EA","#EEF8ED","#EFF9EF","#F2FAF1","#F4FBF3","#F7FBF6","#F8FCF8","#FBFDFB","#FDFEFD","#000001","#030700","#050C03","#071105","#091607","#0A1A09","#0C1E0A","#0E220C","#0F270E","#112B0E","#132F0F","#143211","#163613","#173914","#193D16","#1A4017","#1B4519","#1D4819","#1E4B1A","#1F4F1B","#22521D","#23551E","#25581F","#265B21","#275F22","#296222","#2A6523","#2B6825","#2C6B26","#2E6E27","#2F7129","#30742A","#31782B","#327B2B","#347E2C","#35812E","#36842F","#378630","#388931","#398C32","#3C9034","#3D9334","#3E9535","#3F9836","#409B37","#419D38","#43A039","#44A33B","#45A63C","#46A93C","#47AC3D","#48AE3E","#49B13F","#4AB440","#4BB641","#4CB943","#4EBC44","#4FBF44","#50C145","#51C446","#53C747","#54C948","#55CC49","#56CE4A","#57D24B","#5AD24F","#5DD252","#60D355","#63D458","#65D55B","#68D65E","#6BD761","#6ED765","#71D768","#74D86B","#77D96E","#7ADA71","#7DDB74","#80DC77","#83DC7A","#86DD7E","#88DD81","#8BDE84","#8EDF86","#91E089","#93E18C","#96E18F","#99E292","#9CE395","#9DE398","#A0E49B","#A3E59D","#A6E6A0","#A8E6A3","#ABE7A6","#AEE8A8","#B0E9AC","#B3E9AE","#B5EAB1","#B8EAB4","#BBEBB6","#BDECB9","#C0EDBB","#C2EEBE","#C5EFC1","#C7EFC4","#CAEFC7","#CDF0C9","#CFF1CC","#D1F2CE","#D3F3D1","#D6F3D3","#D8F4D7","#DBF4D9","#DDF5DC","#E0F6DE","#E2F7E1","#E5F7E3","#E7F8E6","#EAF9E8","#ECFAEB","#EFFAEE","#F1FBF0","#F3FBF3","#F6FCF5","#F8FDF7","#FBFEFA","#FDFFFC","#000001","#000700","#030C03","#051303","#071705","#091B07","#0A2107","#0A2509","#0C2A0A","#0E2E0A","#0F310C","#11360C","#13390E","#133D0F","#14410F","#164511","#174913","#194C13","#1A5014","#1A5414","#1B5716","#1D5A17","#1E5E17","#1F6119","#21651A","#21681A","#226B1B","#236F1B","#25721D","#26751E","#27791E","#297C1F","#298021","#2A8321","#2B8622","#2C8922","#2E8C23","#2F8F25","#2F9325","#309526","#319927","#329C27","#349E29","#35A229","#35A52A","#36A72B","#37AB2B","#38AE2C","#39B12E","#3BB42E","#3BB62F","#3CBA2F","#3DBC30","#3EBF31","#3FC231","#40C532","#41C834","#41CB34","#43CD35","#44D135","#45D336","#46D637","#47D937","#47DC38","#48DF39","#4BDF3D","#50E040","#53E045","#56E148","#59E14B","#5CE150","#5FE253","#63E357","#66E35A","#69E45D","#6CE461","#6FE564","#72E667","#75E66B","#79E66E","#7CE772","#7FE775","#82E878","#85E87C","#87E97F","#8BEA82","#8EEA86","#91EA88","#93EB8C","#96EB8F","#99EC92","#9DEC95","#9FED98","#A2EE9B","#A5EE9E","#A7EFA1","#AAEFA5","#AEEFA7","#B0F0AA","#B3F0AE","#B5F1B0","#B8F2B3","#BBF2B6","#BDF3B9","#C1F3BC","#C3F3BF","#C6F4C1","#C8F4C5","#CBF5C7","#CDF6CA","#D1F6CD","#D3F7D0","#D6F7D3","#D8F7D6","#DBF8D8","#DDF8DC","#E1F9DE","#E3FAE1","#E6FAE4","#E8FBE6","#EAFBEA","#EDFBEC","#F0FCEF","#F3FCF2","#F5FDF4","#F7FEF7","#FAFEFA","#FCFFFC","#000001","#000700","#030E00","#031303","#051903","#071E03","#072205","#092705","#0A2C07","#0A3007","#0C3507","#0C3809","#0E3D09","#0F4109","#0F450A","#11490A","#134E0C","#13510C","#14550C","#14580E","#165C0E","#17600E","#17630F","#19670F","#1A6B11","#1A6E11","#1B7211","#1B7513","#1D7913","#1E7D13","#1E8014","#1F8414","#218716","#218A16","#228E16","#239117","#239417","#259817","#259B19","#269E19","#27A21A","#27A51A","#29A81A","#2AAB1B","#2AAE1B","#2BB21B","#2BB51D","#2CB81D","#2EBB1E","#2EBE1E","#2FC11E","#30C41F","#30C71F","#31CB1F","#31CD21","#32D121","#34D422","#34D722","#35DA22","#36DC23","#36E023","#37E323","#37E625","#38E925","#39EC26","#3DEC2A","#40EC2F","#45ED32","#48ED37","#4CED3C","#50EE3F","#53EE44","#57EF48","#5AEF4B","#5DEF50","#61EF53","#64EF57","#68EF5B","#6BF05E","#6EF062","#72F166","#75F169","#78F16D","#7CF270","#7FF274","#83F278","#86F37B","#88F37F","#8CF383","#8FF386","#92F389","#95F48C","#98F490","#9CF493","#9EF596","#A1F59A","#A5F69D","#A7F6A0","#AAF6A4","#AEF7A6","#B0F7AA","#B3F7AE","#B6F7B0","#B9F7B4","#BCF8B7","#BFF8BA","#C1F8BD","#C5F9C0","#C7F9C3","#CAF9C7","#CDFAC9","#D0FACD","#D3FBD0","#D6FBD2","#D8FBD6","#DCFBD8","#DEFBDC","#E1FBDF","#E4FCE1","#E6FCE5","#EAFDE8","#ECFDEA","#EFFDEE","#F2FEF0","#F4FEF3","#F7FEF7","#FAFFF9","#FCFFFC","#000001","#000700","#000E00","#031400","#031A00","#051F00","#052500","#052A00","#072F03","#073203","#093703","#093C03","#0A4003","#0A4503","#0A4903","#0C4E03","#0C5205","#0E5505","#0E5905","#0E5D05","#0F6105","#0F6505","#116905","#116D05","#137107","#137407","#137807","#147C07","#148007","#168407","#168707","#168B07","#178F09","#179209","#199509","#199909","#1A9D09","#1AA009","#1AA409","#1BA709","#1BAB0A","#1DAE0A","#1DB10A","#1DB50A","#1EB80A","#1EBB0A","#1FBF0A","#1FC20A","#21C60C","#21C80C","#21CC0C","#22CF0C","#22D20C","#23D60C","#23D90C","#23DC0C","#25E00E","#25E20E","#26E60E","#26E90E","#27EC0E","#27EF0E","#27F30E","#29F60E","#29F90F","#2EF914","#31F91A","#36F91F","#3BF925","#3EF92A","#43F92F","#46F934","#4AFA38","#4EFA3C","#52FA40","#56FA45","#59FA49","#5DFA4E","#60FA52","#64FA56","#68FB5A","#6BFB5D","#6FFB61","#72FB65","#76FB69","#79FB6D","#7DFB71","#81FB75","#84FB79","#87FB7C","#8AFB80","#8EFB84","#92FB87","#94FB8B","#98FB8F","#9BFB93","#9EFC96","#A1FC99","#A5FC9D","#A8FCA0","#ABFCA4","#AEFCA7","#B1FCAB","#B5FCAE","#B8FDB2","#BBFDB5","#BEFDB8","#C1FDBB","#C4FDBF","#C7FDC2","#CAFDC6","#CDFDC9","#D0FECD","#D3FECF","#D6FED2","#D9FED6","#DCFED9","#DFFEDC","#E2FEE0","#E5FEE3","#E8FFE6","#EAFFE9","#EEFFEC","#F1FFEF","#F3FFF3","#F7FFF6","#F9FFF9","#FCFFFC","#000001","#030503","#070907","#0A0C0A","#0E0F0E","#111311","#141614","#171917","#1A1D1A","#1B1F1B","#1E221E","#212521","#232723","#262A26","#292C29","#2B2F2B","#2E322E","#2F352F","#313731","#343934","#363C36","#383E38","#3B403B","#3D433D","#3F463F","#404840","#434A43","#454C45","#474F47","#495149","#4B534B","#4E554E","#505850","#515A52","#535C53","#555E55","#576057","#596259","#5B645B","#5D665D","#5F695F","#606B61","#626D62","#646F64","#667166","#687368","#6A756A","#6C776C","#6E7A6E","#6F7C70","#717E71","#738073","#758275","#778477","#798679","#7B877B","#7D8A7D","#7E8C7F","#808E80","#829082","#849284","#869386","#879587","#899789","#8B9A8B","#8D9B8D","#8F9D8F","#919E91","#93A093","#94A294","#96A496","#98A699","#9BA79B","#9DA89D","#9EAA9E","#A0ACA0","#A2AEA2","#A4AFA4","#A6B1A6","#A7B3A8","#AAB5AA","#ACB5AC","#AEB7AE","#AFB9AF","#B1BBB1","#B3BCB3","#B5BEB5","#B6C0B7","#B9C1B9","#BBC2BB","#BCC4BC","#BEC6BE","#C0C7C0","#C1C9C1","#C3CBC3","#C5CDC6","#C7CEC7","#C9CFC9","#CBD1CB","#CDD2CD","#CED4CE","#D0D6D0","#D2D7D2","#D3D9D3","#D6DBD6","#D7DCD7","#D9DDD9","#DBDFDB","#DCE1DC","#DEE2DE","#E0E4E0","#E1E6E1","#E4E7E4","#E6E8E6","#E7EAE7","#E9EBE9","#EAEDEA","#ECEFEC","#EEF0EE","#EFF2EF","#F2F3F2","#F3F4F3","#F5F6F5","#F7F7F7","#F8F9F8","#FAFBFA","#FBFCFB","#FDFEFD","#000001","#030503","#070907","#090E09","#0C110C","#0F140F","#111911","#141B14","#171F17","#192219","#1B251B","#1D291E","#1F2B1F","#222E22","#233123","#263426","#293729","#2A392A","#2C3C2C","#2E3F2F","#304130","#324432","#344735","#364936","#384C38","#394F39","#3C513C","#3D543E","#3F563F","#415841","#435B44","#455D45","#476047","#486249","#4A644A","#4B674C","#4E694E","#506B50","#516E52","#537053","#557355","#567557","#587758","#597A5A","#5B7C5C","#5D7E5D","#5E815F","#608360","#628662","#638764","#658965","#668C67","#688E69","#6A906A","#6B936C","#6D946E","#6F976F","#709971","#729B72","#739D74","#759F76","#77A177","#78A479","#7AA67B","#7CA87C","#7EA97F","#80AB81","#83AC83","#85AE86","#86AF87","#89B089","#8BB28C","#8EB48E","#90B591","#92B693","#94B794","#96B997","#98BB99","#9BBB9B","#9DBD9D","#9FBF9F","#A1C0A1","#A3C1A4","#A6C2A6","#A7C4A8","#A9C6AA","#ACC7AC","#AEC8AE","#B0CAB0","#B2CBB2","#B4CDB5","#B6CDB6","#B8CFB8","#BAD1BB","#BCD2BC","#BED3BF","#C1D5C1","#C2D6C2","#C4D7C5","#C7D8C7","#C8DAC8","#CADCCB","#CDDCCD","#CEDECE","#D1E0D1","#D2E1D2","#D4E2D5","#D7E3D7","#D8E5D8","#DAE6DB","#DCE7DC","#DEE9DE","#E1EAE1","#E2EBE2","#E4EDE4","#E6EEE6","#E8EFE8","#EAF1EA","#ECF2EC","#EEF3EE","#F0F5F0","#F2F6F2","#F3F7F3","#F6F8F6","#F7FAF7","#F9FBF9","#FBFCFB","#FDFEFD","#000001","#030503","#050A05","#090E09","#0A130A","#0C170C","#0F1A0F","#111E11","#142214","#162516","#172917","#1A2B1A","#1B2F1B","#1D321E","#1F351F","#213821","#233C23","#253E25","#264127","#294429","#2A472A","#2B4A2C","#2E4C2E","#2F5030","#315331","#325532","#345835","#365A36","#375D38","#386039","#3B623B","#3C653D","#3E683E","#3F6A40","#406D41","#436F43","#447245","#457546","#477747","#487A49","#4A7D4A","#4B7F4C","#4C824E","#4F844F","#508651","#518952","#538B54","#548E55","#569156","#579358","#589559","#5A975B","#5B9A5C","#5C9D5D","#5E9E5F","#5FA160","#61A462","#62A663","#63A864","#65AA66","#66AD67","#67AF69","#69B16A","#6AB46B","#6CB66D","#6EB76F","#71B872","#73BA75","#76BB77","#79BB7A","#7BBD7C","#7EBE7F","#81C082","#83C184","#86C186","#87C388","#8AC48B","#8DC58E","#8FC790","#92C793","#94C994","#96CA97","#99CB9A","#9BCD9C","#9DCD9E","#A0CEA0","#A2D0A3","#A5D1A6","#A7D2A7","#A9D3AA","#ACD4AC","#AED6AE","#B0D7B1","#B3D7B3","#B5D9B5","#B7DAB8","#BADCBA","#BBDCBC","#BEDDBE","#C0DFC1","#C2E0C3","#C5E1C5","#C7E2C7","#C9E3C9","#CCE5CC","#CDE6CE","#D0E6D0","#D2E8D2","#D4E9D4","#D7EAD7","#D8EBD9","#DBECDB","#DDEEDD","#DFEFDF","#E1EFE1","#E3F1E4","#E6F2E6","#E8F3E8","#EAF4EA","#ECF5EC","#EFF7EF","#F0F7F0","#F3F8F3","#F4FAF4","#F7FBF7","#F9FBF9","#FBFDFB","#FDFEFD","#000001","#030503","#050A05","#070F07","#091409","#0A190A","#0C1D0C","#0E210F","#112511","#132713","#142B14","#162F16","#173217","#193619","#1A391B","#1B3D1D","#1E401E","#1F431F","#214621","#224922","#234C25","#255026","#265327","#275629","#2A592A","#2B5B2B","#2C5E2C","#2E612F","#2F6430","#306731","#316A32","#326D34","#357035","#367237","#377538","#387839","#397B3B","#3B7E3C","#3C813D","#3D843E","#3F8640","#408841","#418B43","#438E44","#449145","#459346","#469648","#479949","#499C4A","#4A9D4B","#4BA04C","#4CA34E","#4EA64F","#4FA851","#50AB52","#51AE53","#53B054","#54B255","#55B556","#56B757","#57BA59","#58BC5A","#59BF5B","#5AC15C","#5CC45D","#5EC560","#61C663","#64C766","#67C769","#6AC86B","#6DC96E","#70CA71","#73CC74","#75CD77","#78CD7A","#7BCE7D","#7ECF7F","#81D082","#84D185","#86D287","#89D38A","#8BD48D","#8ED590","#91D692","#93D794","#96D797","#99D89A","#9CD99D","#9EDB9F","#A0DCA1","#A3DCA4","#A6DDA6","#A8DEA9","#ABDFAC","#AEE0AE","#B0E1B1","#B3E2B3","#B5E3B5","#B7E4B8","#BAE5BB","#BCE6BD","#BFE6C0","#C1E7C1","#C4E8C4","#C7EAC7","#C8EAC9","#CBEBCC","#CDECCE","#D0EDD1","#D2EED2","#D5EFD5","#D7EFD7","#DAF1DA","#DCF2DC","#DEF3DF","#E1F3E1","#E3F4E3","#E6F5E6","#E8F6E8","#EAF7EA","#EDF8ED","#EFF9EF","#F1FAF1","#F3FBF3","#F6FBF6","#F8FCF8","#FBFDFB","#FDFEFD","#000001","#000700","#030C03","#051105","#071607","#091A09","#0A1E0A","#0C220C","#0E270E","#0E2B0F","#0F2F11","#113213","#133613","#143914","#163D16","#174017","#194519","#19481A","#1A4B1B","#1B4F1D","#1D521E","#1E551F","#1F5821","#215B21","#225F22","#226223","#236525","#256826","#266B27","#276E29","#29712A","#2A742B","#2B782C","#2B7B2E","#2C7E2E","#2E812F","#2F8430","#308631","#318932","#328C34","#349035","#349336","#359537","#369838","#379B39","#389D39","#39A03B","#3BA33C","#3CA63D","#3CA93E","#3DAC3F","#3EAE40","#3FB141","#40B443","#41B644","#43B945","#44BC45","#44BF46","#45C147","#46C448","#47C749","#48C94A","#49CC4B","#4ACE4C","#4BD24E","#4FD251","#52D254","#55D357","#58D45A","#5BD55D","#5ED660","#61D763","#65D766","#68D76A","#6BD86D","#6ED970","#71DA73","#74DB76","#77DC79","#7ADC7C","#7EDD7F","#81DD82","#84DE85","#86DF87","#89E08B","#8CE18E","#8FE191","#92E293","#95E396","#98E399","#9BE49C","#9DE59E","#A0E6A1","#A3E6A4","#A6E7A6","#A8E8AA","#ACE9AD","#AEE9AF","#B1EAB2","#B4EAB5","#B6EBB7","#B9ECBA","#BBEDBC","#BEEEBF","#C1EFC1","#C4EFC4","#C7EFC7","#C9F0CA","#CCF1CD","#CEF2CF","#D1F3D2","#D3F3D4","#D7F4D7","#D9F4D9","#DCF5DC","#DEF6DE","#E1F7E1","#E3F7E4","#E6F8E6","#E8F9E9","#EBFAEB","#EEFAEE","#F0FBF0","#F3FBF3","#F5FCF5","#F7FDF7","#FAFEFA","#FCFFFC","#000001","#000700","#030C03","#031305","#051705","#071B07","#072109","#092509","#0A2A0A","#0A2E0C","#0C310C","#0C360E","#0E390F","#0F3D0F","#0F4111","#114513","#134913","#134C14","#145016","#145416","#165717","#175A19","#175E19","#19611A","#1A651B","#1A681B","#1B6B1D","#1B6F1E","#1D721E","#1E751F","#1E7921","#1F7C21","#218022","#218323","#228623","#228925","#238C26","#258F26","#259327","#269529","#279929","#279C2A","#299E2B","#29A22B","#2AA52C","#2BA72E","#2BAB2E","#2CAE2F","#2EB130","#2EB430","#2FB631","#2FBA32","#30BC32","#31BF34","#31C235","#32C535","#34C836","#34CB37","#35CD37","#35D138","#36D339","#37D639","#37D93B","#38DC3C","#39DF3C","#3DDF40","#40E044","#45E047","#48E14B","#4BE14F","#50E152","#53E256","#57E359","#5AE35C","#5DE460","#61E463","#64E566","#67E66A","#6BE66D","#6EE670","#72E774","#75E777","#78E87A","#7CE87E","#7FE981","#82EA84","#86EA87","#88EA8A","#8CEB8D","#8FEB91","#92EC93","#95EC96","#98ED9A","#9BEE9D","#9EEE9F","#A1EFA3","#A5EFA6","#A7EFA8","#AAF0AC","#AEF0AE","#B0F1B1","#B3F2B5","#B6F2B7","#B9F3BA","#BCF3BD","#BFF3C0","#C1F4C2","#C5F4C6","#C7F5C8","#CAF6CB","#CDF6CE","#D0F7D1","#D3F7D3","#D6F7D7","#D8F8D9","#DCF8DC","#DEF9DF","#E1FAE1","#E4FAE4","#E6FBE7","#EAFBEA","#ECFBEC","#EFFCEF","#F2FCF2","#F4FDF4","#F7FEF7","#FAFEFA","#FCFFFC","#000001","#000700","#000E00","#031303","#031903","#031E05","#052205","#052705","#072C07","#073007","#073509","#093809","#093D0A","#09410A","#0A450A","#0A490C","#0C4E0C","#0C510E","#0C550E","#0E580F","#0E5C0F","#0E600F","#0F6311","#0F6711","#116B13","#116E13","#117214","#137514","#137914","#137D16","#148016","#148417","#168717","#168A19","#168E19","#179119","#17941A","#17981A","#199B1B","#199E1B","#1AA21D","#1AA51D","#1AA81D","#1BAB1E","#1BAE1E","#1BB21F","#1DB51F","#1DB821","#1EBB21","#1EBE21","#1EC122","#1FC422","#1FC723","#1FCB23","#21CD23","#21D125","#22D425","#22D726","#22DA26","#23DC27","#23E027","#23E327","#25E629","#25E929","#26EC2A","#2AEC2E","#2FEC32","#32ED36","#37ED3B","#3CED3F","#3FEE43","#44EE47","#48EF4A","#4BEF4F","#50EF52","#53EF56","#57EF5A","#5BEF5D","#5EF061","#62F064","#66F168","#69F16C","#6DF16F","#70F273","#74F276","#78F27A","#7BF37D","#7FF381","#83F385","#86F387","#89F38B","#8CF48E","#90F492","#93F494","#96F598","#9AF59C","#9DF69E","#A0F6A2","#A4F6A5","#A6F7A8","#AAF7AB","#AEF7AE","#B0F7B2","#B4F7B5","#B7F8B8","#BAF8BB","#BDF8BE","#C0F9C1","#C3F9C4","#C7F9C7","#C9FACA","#CDFACD","#D0FBD0","#D2FBD3","#D6FBD6","#D8FBD9","#DCFBDC","#DFFBDF","#E1FCE2","#E5FCE5","#E8FDE8","#EAFDEA","#EEFDEE","#F0FEF1","#F3FEF3","#F7FEF7","#F9FFF9","#FCFFFC","#000001","#000700","#000E00","#001400","#001A00","#001F00","#002503","#002A03","#032F03","#033203","#033703","#033C05","#034005","#034505","#034905","#034E05","#055205","#055507","#055907","#055D07","#056107","#056507","#056909","#056D09","#077109","#077409","#077809","#077C09","#07800A","#07840A","#07870A","#078B0A","#098F0A","#09920C","#09950C","#09990C","#099D0C","#09A00C","#09A40C","#09A70E","#0AAB0E","#0AAE0E","#0AB10E","#0AB50E","#0AB80F","#0ABB0F","#0ABF0F","#0AC20F","#0CC60F","#0CC80F","#0CCC11","#0CCF11","#0CD211","#0CD611","#0CD911","#0CDC13","#0EE013","#0EE213","#0EE613","#0EE913","#0EEC14","#0EEF14","#0EF314","#0EF614","#0FF914","#14F91A","#1AF91F","#1FF925","#25F92A","#2AF92E","#2FF932","#34F937","#38FA3C","#3CFA40","#40FA44","#45FA48","#49FA4C","#4EFA51","#52FA55","#56FA58","#5AFB5C","#5DFB60","#61FB64","#65FB68","#69FB6C","#6DFB6F","#71FB73","#75FB77","#79FB7B","#7CFB7F","#80FB82","#84FB86","#87FB89","#8BFB8D","#8FFB91","#93FB94","#96FC97","#99FC9B","#9DFC9E","#A0FCA2","#A4FCA6","#A7FCA8","#ABFCAC","#AEFCAF","#B2FDB3","#B5FDB6","#B8FDBA","#BBFDBC","#BFFDC0","#C2FDC3","#C6FDC7","#C9FDCA","#CDFECD","#CFFED0","#D2FED3","#D6FED7","#D9FEDA","#DCFEDD","#E0FEE0","#E3FEE3","#E6FFE6","#E9FFEA","#ECFFED","#EFFFEF","#F3FFF3","#F6FFF6","#F9FFF9","#FCFFFC","#000001","#030503","#070907","#0A0C0A","#0E0F0E","#111311","#141614","#171917","#1A1D1A","#1B1F1D","#1E221F","#212521","#232723","#262A26","#292C29","#2B2F2B","#2E322E","#2F3530","#313732","#343935","#363C37","#383E38","#3B403B","#3D433D","#3F463F","#404841","#434A44","#454C46","#474F48","#49514A","#4B534C","#4E554E","#505850","#515A52","#535C54","#555E56","#576058","#59625A","#5B645C","#5D665E","#5F6960","#606B61","#626D63","#646F65","#667167","#687369","#6A756B","#6C776D","#6E7A6F","#6F7C71","#717E73","#738075","#758276","#778478","#79867A","#7B877C","#7D8A7E","#7E8C80","#808E82","#829084","#849286","#869387","#879588","#89978A","#8B9A8C","#8D9B8E","#8F9D90","#919E93","#93A094","#94A296","#96A498","#98A69A","#9BA79C","#9DA89D","#9EAA9F","#A0ACA1","#A2AEA3","#A4AFA6","#A6B1A7","#A7B3A9","#AAB5AB","#ACB5AD","#AEB7AE","#AFB9B0","#B1BBB2","#B3BCB4","#B5BEB5","#B6C0B7","#B9C1BA","#BBC2BB","#BCC4BD","#BEC6BF","#C0C7C1","#C1C9C2","#C3CBC4","#C5CDC6","#C7CEC7","#C9CFC9","#CBD1CC","#CDD2CD","#CED4CF","#D0D6D1","#D2D7D2","#D3D9D4","#D6DBD6","#D7DCD7","#D9DDD9","#DBDFDB","#DCE1DD","#DEE2DF","#E0E4E1","#E1E6E2","#E4E7E4","#E6E8E6","#E7EAE7","#E9EBE9","#EAEDEA","#ECEFEC","#EEF0EF","#EFF2F0","#F2F3F2","#F3F4F3","#F5F6F5","#F7F7F7","#F8F9F8","#FAFBFA","#FBFCFB","#FDFEFD","#000001","#030503","#070907","#090E0A","#0C110C","#0F140F","#111913","#141B14","#171F17","#19221A","#1B251D","#1D291E","#1F2B21","#222E23","#233125","#263427","#29372A","#2A392C","#2C3C2E","#2E3F30","#304132","#324434","#344736","#364938","#384C39","#394F3C","#3C513E","#3D5440","#3F5641","#415844","#435B46","#455D47","#476049","#48624B","#4A644E","#4B674F","#4E6951","#506B53","#516E54","#537056","#557358","#567559","#58775B","#597A5D","#5B7C5F","#5D7E60","#5E8162","#608364","#628665","#638767","#658969","#668C6B","#688E6C","#6A906E","#6B9370","#6D9471","#6F9773","#709975","#729B77","#739D78","#759F7A","#77A17C","#78A47D","#7AA67F","#7CA881","#7EA983","#80AB85","#83AC87","#85AE89","#86AF8B","#89B08E","#8BB290","#8EB492","#90B593","#92B696","#94B798","#96B99A","#98BB9D","#9BBB9E","#9DBDA0","#9FBFA2","#A1C0A5","#A3C1A6","#A6C2A8","#A7C4AB","#A9C6AD","#ACC7AE","#AEC8B0","#B0CAB3","#B2CBB5","#B4CDB6","#B6CDB9","#B8CFBB","#BAD1BC","#BCD2BF","#BED3C1","#C1D5C2","#C2D6C4","#C4D7C7","#C7D8C8","#C8DACA","#CADCCD","#CDDCCE","#CEDED0","#D1E0D2","#D2E1D4","#D4E2D6","#D7E3D7","#D8E5DA","#DAE6DC","#DCE7DD","#DEE9E0","#E1EAE1","#E2EBE3","#E4EDE5","#E6EEE7","#E8EFE9","#EAF1EA","#ECF2ED","#EEF3EF","#F0F5F0","#F2F6F2","#F3F7F4","#F6F8F6","#F7FAF7","#F9FBFA","#FBFCFB","#FDFEFD","#000001","#030503","#050A07","#090E09","#0A130C","#0C170E","#0F1A11","#111E13","#142216","#162517","#17291A","#1A2B1B","#1B2F1E","#1D321F","#1F3522","#213823","#233C26","#253E27","#26412A","#29442B","#2A472E","#2B4A2F","#2E4C31","#2F5032","#315335","#325536","#345838","#365A39","#375D3C","#38603D","#3B623F","#3C6540","#3E6843","#3F6A44","#406D46","#436F47","#447249","#45754A","#47774C","#487A4E","#4A7D50","#4B7F51","#4C8253","#4F8455","#508656","#518958","#538B59","#548E5B","#56915C","#57935E","#58955F","#5A9761","#5B9A62","#5C9D64","#5E9E65","#5FA167","#61A468","#62A66A","#63A86B","#65AA6D","#66AD6E","#67AF70","#69B171","#6AB473","#6CB674","#6EB777","#71B879","#73BA7C","#76BB7E","#79BB81","#7BBD83","#7EBE86","#81C087","#83C18A","#86C18C","#87C38F","#8AC491","#8DC593","#8FC795","#92C798","#94C99A","#96CA9D","#99CB9E","#9BCDA1","#9DCDA3","#A0CEA6","#A2D0A7","#A5D1A9","#A7D2AC","#A9D3AE","#ACD4B0","#AED6B2","#B0D7B5","#B3D7B6","#B5D9B9","#B7DABB","#BADCBD","#BBDCBF","#BEDDC1","#C0DFC3","#C2E0C6","#C5E1C7","#C7E2CA","#C9E3CC","#CCE5CE","#CDE6D0","#D0E6D2","#D2E8D4","#D4E9D7","#D7EAD8","#D8EBDB","#DBECDC","#DDEEDF","#DFEFE1","#E1EFE3","#E3F1E5","#E6F2E7","#E8F3E9","#EAF4EB","#ECF5ED","#EFF7EF","#F0F7F1","#F3F8F3","#F4FAF5","#F7FBF7","#F9FBF9","#FBFDFB","#FDFEFD","#000001","#030503","#050A05","#070F07","#09140A","#0A190C","#0C1D0E","#0E2111","#112513","#132714","#142B17","#162F19","#17321A","#19361D","#1A391E","#1B3D1F","#1E4022","#1F4323","#214625","#224927","#234C29","#25502A","#26532B","#27562E","#2A592F","#2B5B30","#2C5E32","#2E6134","#2F6435","#306737","#316A38","#326D39","#35703C","#36723D","#37753E","#387840","#397B41","#3B7E43","#3C8145","#3D8446","#3F8647","#408848","#418B4A","#438E4B","#44914C","#45934F","#469650","#479951","#499C53","#4A9D54","#4BA055","#4CA357","#4EA658","#4FA859","#50AB5B","#51AE5C","#53B05D","#54B25F","#55B560","#56B761","#57BA62","#58BC64","#59BF65","#5AC166","#5CC468","#5EC56A","#61C66D","#64C770","#67C772","#6AC875","#6DC978","#70CA7B","#73CC7D","#75CD80","#78CD83","#7BCE85","#7ECF87","#81D08A","#84D18C","#86D28F","#89D392","#8BD493","#8ED596","#91D699","#93D79B","#96D79D","#99D8A0","#9CD9A2","#9EDBA5","#A0DCA7","#A3DCAA","#A6DDAC","#A8DEAE","#ABDFB1","#AEE0B3","#B0E1B5","#B3E2B8","#B5E3BA","#B7E4BC","#BAE5BF","#BCE6C1","#BFE6C3","#C1E7C6","#C4E8C7","#C7EACA","#C8EACD","#CBEBCE","#CDECD1","#D0EDD3","#D2EED6","#D5EFD7","#D7EFDA","#DAF1DC","#DCF2DE","#DEF3E1","#E1F3E3","#E3F4E5","#E6F5E7","#E8F6EA","#EAF7EB","#EDF8EE","#EFF9F0","#F1FAF2","#F3FBF4","#F6FBF7","#F8FCF8","#FBFDFB","#FDFEFD","#000001","#000703","#030C05","#051107","#071609","#091A0A","#0A1E0C","#0C220E","#0E270F","#0E2B13","#0F2F14","#113216","#133617","#143919","#163D1A","#17401B","#19451D","#19481F","#1A4B21","#1B4F22","#1D5223","#1E5525","#1F5826","#215B27","#225F29","#22622B","#23652C","#25682E","#266B2F","#276E30","#297131","#2A7432","#2B7834","#2B7B35","#2C7E37","#2E8138","#2F8439","#30863B","#31893C","#328C3D","#34903E","#34933F","#359541","#369843","#379B44","#389D45","#39A046","#3BA347","#3CA648","#3CA949","#3DAC4B","#3EAE4C","#3FB14E","#40B44F","#41B650","#43B951","#44BC52","#44BF53","#45C155","#46C456","#47C757","#48C958","#49CC59","#4ACE5A","#4BD25B","#4FD25E","#52D261","#55D364","#58D467","#5BD56A","#5ED66D","#61D76F","#65D772","#68D775","#6BD878","#6ED97B","#71DA7E","#74DB81","#77DC84","#7ADC86","#7EDD88","#81DD8B","#84DE8E","#86DF91","#89E093","#8CE196","#8FE199","#92E29B","#95E39D","#98E3A0","#9BE4A3","#9DE5A6","#A0E6A8","#A3E6AB","#A6E7AE","#A8E8AF","#ACE9B2","#AEE9B5","#B1EAB7","#B4EABA","#B6EBBC","#B9ECBF","#BBEDC1","#BEEEC4","#C1EFC6","#C4EFC8","#C7EFCB","#C9F0CD","#CCF1D0","#CEF2D2","#D1F3D5","#D3F3D7","#D7F4D9","#D9F4DC","#DCF5DE","#DEF6E1","#E1F7E3","#E3F7E6","#E6F8E8","#E8F9EA","#EBFAEC","#EEFAEF","#F0FBF1","#F3FBF3","#F5FCF6","#F7FDF8","#FAFEFB","#FCFFFD","#000001","#000700","#030C03","#031305","#051707","#071B09","#07210A","#09250C","#0A2A0E","#0A2E0F","#0C3111","#0C3613","#0E3914","#0F3D16","#0F4116","#114517","#134919","#134C1A","#14501B","#14541D","#16571E","#175A1F","#175E21","#196122","#1A6523","#1A6825","#1B6B26","#1B6F26","#1D7227","#1E7529","#1E792A","#1F7C2B","#21802C","#21832E","#22862F","#228930","#238C31","#258F32","#259334","#269535","#279936","#279C36","#299E37","#29A238","#2AA539","#2BA73B","#2BAB3C","#2CAE3D","#2EB13E","#2EB43F","#2FB640","#2FBA41","#30BC43","#31BF44","#31C244","#32C545","#34C846","#34CB47","#35CD48","#35D149","#36D34A","#37D64B","#37D94C","#38DC4E","#39DF4F","#3DDF52","#40E055","#45E058","#48E15B","#4BE15E","#50E161","#53E264","#57E367","#5AE36A","#5DE46D","#61E471","#64E574","#67E677","#6BE67A","#6EE67D","#72E780","#75E783","#78E886","#7CE888","#7FE98B","#82EA8E","#86EA91","#88EA93","#8CEB97","#8FEB9A","#92EC9D","#95EC9F","#98EDA2","#9BEEA5","#9EEEA7","#A1EFAA","#A5EFAD","#A7EFAF","#AAF0B2","#AEF0B5","#B0F1B7","#B3F2BA","#B6F2BD","#B9F3C0","#BCF3C2","#BFF3C5","#C1F4C7","#C5F4CA","#C7F5CD","#CAF6CF","#CDF6D2","#D0F7D4","#D3F7D7","#D6F7D9","#D8F8DC","#DCF8DF","#DEF9E1","#E1FAE4","#E4FAE6","#E6FBE9","#EAFBEB","#ECFBEE","#EFFCF0","#F2FCF3","#F4FDF5","#F7FEF7","#FAFEFA","#FCFFFC","#000001","#000700","#000E03","#031305","#031905","#031E07","#052209","#05270A","#072C0A","#07300C","#07350E","#09380F","#093D0F","#094111","#0A4513","#0A4913","#0C4E14","#0C5116","#0C5517","#0E5817","#0E5C19","#0E601A","#0F631B","#0F671B","#116B1D","#116E1E","#11721E","#13751F","#137921","#137D22","#148022","#148423","#168725","#168A26","#168E26","#179127","#179429","#17982A","#199B2A","#199E2B","#1AA22C","#1AA52C","#1AA82E","#1BAB2F","#1BAE30","#1BB230","#1DB531","#1DB832","#1EBB34","#1EBE34","#1EC135","#1FC436","#1FC736","#1FCB37","#21CD38","#21D139","#22D439","#22D73B","#22DA3C","#23DC3D","#23E03D","#23E33E","#25E63F","#25E940","#26EC40","#2AEC45","#2FEC48","#32ED4B","#37ED4F","#3CED53","#3FEE56","#44EE59","#48EF5C","#4BEF60","#50EF63","#53EF66","#57EF69","#5BEF6D","#5EF070","#62F073","#66F177","#69F17A","#6DF17D","#70F280","#74F284","#78F286","#7BF389","#7FF38C","#83F390","#86F393","#89F395","#8CF499","#90F49C","#93F49E","#96F5A1","#9AF5A5","#9DF6A7","#A0F6AA","#A4F6AD","#A6F7B0","#AAF7B3","#AEF7B5","#B0F7B8","#B4F7BB","#B7F8BE","#BAF8C1","#BDF8C4","#C0F9C7","#C3F9C9","#C7F9CC","#C9FACF","#CDFAD2","#D0FBD4","#D2FBD7","#D6FBDA","#D8FBDC","#DCFBDF","#DFFBE2","#E1FCE5","#E5FCE7","#E8FDEA","#EAFDED","#EEFDEF","#F0FEF2","#F3FEF4","#F7FEF7","#F9FFFA","#FCFFFC","#000001","#000700","#000E03","#001403","#001A05","#001F05","#002507","#002A07","#032F09","#033209","#03370A","#033C0A","#03400C","#03450C","#03490E","#034E0F","#05520F","#055511","#055911","#055D13","#056113","#056514","#056914","#056D16","#077116","#077417","#077817","#077C19","#078019","#07841A","#07871B","#078B1B","#098F1D","#09921D","#09951E","#09991E","#099D1F","#09A01F","#09A421","#09A721","#0AAB22","#0AAE22","#0AB123","#0AB525","#0AB825","#0ABB26","#0ABF26","#0AC227","#0CC627","#0CC829","#0CCC29","#0CCF2A","#0CD22A","#0CD62B","#0CD92B","#0CDC2C","#0EE02C","#0EE22E","#0EE62F","#0EE92F","#0EEC30","#0EEF30","#0EF331","#0EF631","#0FF932","#14F936","#1AF93B","#1FF93E","#25F943","#2AF946","#2FF94A","#34F94E","#38FA51","#3CFA55","#40FA58","#45FA5C","#49FA5F","#4EFA63","#52FA66","#56FA6A","#5AFB6D","#5DFB71","#61FB74","#65FB78","#69FB7B","#6DFB7F","#71FB82","#75FB85","#79FB88","#7CFB8B","#80FB8F","#84FB92","#87FB95","#8BFB98","#8FFB9C","#93FB9E","#96FCA2","#99FCA5","#9DFCA8","#A0FCAB","#A4FCAE","#A7FCB1","#ABFCB4","#AEFCB7","#B2FDBA","#B5FDBD","#B8FDC0","#BBFDC3","#BFFDC6","#C2FDC9","#C6FDCC","#C9FDCF","#CDFED2","#CFFED5","#D2FED7","#D6FEDA","#D9FEDD","#DCFEE0","#E0FEE3","#E3FEE6","#E6FFE9","#E9FFEB","#ECFFEF","#EFFFF1","#F3FFF4","#F6FFF7","#F9FFFA","#FCFFFC","#000001","#030503","#070907","#0A0C0A","#0E0F0E","#111311","#141614","#171917","#1A1D1A","#1B1F1D","#1E221F","#212522","#232725","#262A27","#292C29","#2B2F2B","#2E322E","#2F3530","#313732","#343935","#363C37","#383E39","#3B403C","#3D433E","#3F4640","#404843","#434A45","#454C46","#474F48","#49514A","#4B534C","#4E554F","#505851","#515A53","#535C55","#555E57","#576059","#59625B","#5B645D","#5D665F","#5F6961","#606B62","#626D64","#646F66","#667168","#68736A","#6A756C","#6C776E","#6E7A70","#6F7C72","#717E74","#738076","#758278","#77847A","#79867B","#7B877D","#7D8A7F","#7E8C81","#808E83","#829085","#849286","#869388","#87958A","#89978C","#8B9A8E","#8D9B90","#8F9D92","#919E93","#93A095","#94A297","#96A499","#98A69B","#9BA79D","#9DA89E","#9EAAA0","#A0ACA3","#A2AEA5","#A4AFA6","#A6B1A8","#A7B3AA","#AAB5AC","#ACB5AE","#AEB7AF","#AFB9B1","#B1BBB3","#B3BCB5","#B5BEB6","#B6C0B8","#B9C1BB","#BBC2BC","#BCC4BE","#BEC6C0","#C0C7C1","#C1C9C3","#C3CBC5","#C5CDC7","#C7CEC8","#C9CFCA","#CBD1CC","#CDD2CD","#CED4CF","#D0D6D1","#D2D7D3","#D3D9D5","#D6DBD7","#D7DCD8","#D9DDDA","#DBDFDC","#DCE1DD","#DEE2DF","#E0E4E1","#E1E6E2","#E4E7E4","#E6E8E6","#E7EAE7","#E9EBEA","#EAEDEB","#ECEFED","#EEF0EF","#EFF2F0","#F2F3F2","#F3F4F3","#F5F6F5","#F7F7F7","#F8F9F8","#FAFBFA","#FBFCFB","#FDFEFD","#000001","#030503","#070907","#090E0A","#0C110E","#0F140F","#111913","#141B16","#171F19","#19221A","#1B251D","#1D291F","#1F2B22","#222E25","#233126","#263429","#29372B","#2A392E","#2C3C2F","#2E3F31","#304134","#324436","#344738","#364939","#384C3C","#394F3E","#3C5140","#3D5441","#3F5644","#415846","#435B48","#455D4A","#47604B","#48624E","#4A6450","#4B6752","#4E6953","#506B55","#516E57","#537059","#55735B","#56755C","#58775E","#597A60","#5B7C62","#5D7E63","#5E8165","#608367","#628669","#63876B","#65896C","#668C6E","#688E70","#6A9072","#6B9373","#6D9475","#6F9777","#709979","#729B7B","#739D7C","#759F7E","#77A180","#78A482","#7AA683","#7CA885","#7EA986","#80AB89","#83AC8B","#85AE8D","#86AF8F","#89B092","#8BB293","#8EB495","#90B597","#92B699","#94B79C","#96B99D","#98BB9F","#9BBBA1","#9DBDA4","#9FBFA6","#A1C0A7","#A3C1A9","#A6C2AB","#A7C4AE","#A9C6AF","#ACC7B1","#AEC8B3","#B0CAB5","#B2CBB7","#B4CDB9","#B6CDBB","#B8CFBC","#BAD1BF","#BCD2C1","#BED3C2","#C1D5C4","#C2D6C7","#C4D7C8","#C7D8CA","#C8DACC","#CADCCD","#CDDCD0","#CEDED2","#D1E0D3","#D2E1D5","#D4E2D7","#D7E3D9","#D8E5DB","#DAE6DC","#DCE7DE","#DEE9E1","#E1EAE2","#E2EBE4","#E4EDE6","#E6EEE8","#E8EFEA","#EAF1EB","#ECF2ED","#EEF3EF","#F0F5F1","#F2F6F3","#F3F7F4","#F6F8F6","#F7FAF8","#F9FBFA","#FBFCFB","#FDFEFD","#000001","#030503","#050A07","#090E09","#0A130C","#0C170F","#0F1A11","#111E14","#142217","#162519","#17291B","#1A2B1D","#1B2F1F","#1D3222","#1F3523","#213826","#233C29","#253E2A","#26412C","#29442E","#2A4730","#2B4A32","#2E4C34","#2F5036","#315338","#325539","#34583C","#365A3D","#375D3F","#386041","#3B6243","#3C6545","#3E6847","#3F6A48","#406D4A","#436F4C","#44724E","#457550","#477751","#487A53","#4A7D55","#4B7F56","#4C8258","#4F845A","#50865B","#51895D","#538B5E","#548E60","#569162","#579363","#589565","#5A9767","#5B9A68","#5C9D6A","#5E9E6B","#5FA16D","#61A46F","#62A670","#63A872","#65AA74","#66AD75","#67AF77","#69B178","#6AB47A","#6CB67C","#6EB77E","#71B880","#73BA83","#76BB85","#79BB87","#7BBD89","#7EBE8B","#81C08E","#83C190","#86C192","#87C394","#8AC496","#8DC599","#8FC79B","#92C79D","#94C99F","#96CAA1","#99CBA3","#9BCDA6","#9DCDA7","#A0CEAA","#A2D0AC","#A5D1AE","#A7D2B0","#A9D3B2","#ACD4B4","#AED6B6","#B0D7B8","#B3D7BB","#B5D9BC","#B7DABE","#BADCC1","#BBDCC2","#BEDDC4","#C0DFC7","#C2E0C8","#C5E1CA","#C7E2CD","#C9E3CE","#CCE5D1","#CDE6D2","#D0E6D4","#D2E8D7","#D4E9D8","#D7EADA","#D8EBDC","#DBECDE","#DDEEE1","#DFEFE2","#E1EFE4","#E3F1E6","#E6F2E8","#E8F3EA","#EAF4EC","#ECF5EE","#EFF7F0","#F0F7F2","#F3F8F3","#F4FAF6","#F7FBF7","#F9FBF9","#FBFDFB","#FDFEFD","#000001","#030503","#050A05","#070F09","#09140A","#0A190E","#0C1D0F","#0E2113","#112514","#132717","#142B19","#162F1B","#17321D","#19361F","#1A3921","#1B3D23","#1E4025","#1F4327","#214629","#22492B","#234C2C","#25502F","#265330","#275632","#2A5934","#2B5B36","#2C5E37","#2E6138","#2F643B","#30673C","#316A3E","#326D3F","#357041","#367243","#377545","#387846","#397B48","#3B7E49","#3C814B","#3D844C","#3F864F","#408850","#418B52","#438E53","#449155","#459356","#469658","#479959","#499C5B","#4A9D5C","#4BA05E","#4CA35F","#4EA660","#4FA862","#50AB63","#51AE65","#53B066","#54B268","#55B569","#56B76B","#57BA6C","#58BC6E","#59BF6F","#5AC171","#5CC472","#5EC575","#61C677","#64C77A","#67C77C","#6AC87F","#6DC981","#70CA84","#73CC86","#75CD88","#78CD8A","#7BCE8D","#7ECF8F","#81D092","#84D194","#86D296","#89D399","#8BD49B","#8ED59D","#91D69F","#93D7A2","#96D7A4","#99D8A6","#9CD9A8","#9EDBAB","#A0DCAD","#A3DCAF","#A6DDB1","#A8DEB4","#ABDFB5","#AEE0B8","#B0E1BA","#B3E2BC","#B5E3BE","#B7E4C1","#BAE5C2","#BCE6C5","#BFE6C7","#C1E7C9","#C4E8CC","#C7EACD","#C8EAD0","#CBEBD2","#CDECD4","#D0EDD6","#D2EED8","#D5EFDA","#D7EFDC","#DAF1DE","#DCF2E1","#DEF3E2","#E1F3E5","#E3F4E6","#E6F5E9","#E8F6EA","#EAF7ED","#EDF8EF","#EFF9F1","#F1FAF3","#F3FBF5","#F6FBF7","#F8FCF9","#FBFDFB","#FDFEFD","#000001","#000703","#030C05","#051107","#07160A","#091A0C","#0A1E0E","#0C2211","#0E2713","#0E2B14","#0F2F17","#113219","#13361A","#14391D","#163D1E","#17401F","#194522","#194823","#1A4B25","#1B4F27","#1D5229","#1E552A","#1F582C","#215B2E","#225F2F","#226231","#236532","#256834","#266B36","#276E37","#297138","#2A743B","#2B783C","#2B7B3D","#2C7E3F","#2E8140","#2F8441","#308644","#318945","#328C46","#349048","#349349","#35954A","#36984C","#379B4E","#389D4F","#39A051","#3BA352","#3CA653","#3CA955","#3DAC56","#3EAE57","#3FB159","#40B45A","#41B65B","#43B95D","#44BC5E","#44BF5F","#45C161","#46C462","#47C763","#48C965","#49CC66","#4ACE67","#4BD269","#4FD26B","#52D26E","#55D371","#58D473","#5BD576","#5ED679","#61D77B","#65D77E","#68D781","#6BD883","#6ED986","#71DA88","#74DB8A","#77DC8D","#7ADC90","#7EDD92","#81DD94","#84DE97","#86DF99","#89E09C","#8CE19E","#8FE1A0","#92E2A3","#95E3A6","#98E3A7","#9BE4AA","#9DE5AD","#A0E6AE","#A3E6B1","#A6E7B4","#A8E8B5","#ACE9B8","#AEE9BB","#B1EABC","#B4EABF","#B6EBC1","#B9ECC3","#BBEDC6","#BEEEC8","#C1EFCA","#C4EFCD","#C7EFCF","#C9F0D1","#CCF1D3","#CEF2D6","#D1F3D7","#D3F3DA","#D7F4DC","#D9F4DE","#DCF5E1","#DEF6E3","#E1F7E5","#E3F7E7","#E6F8EA","#E8F9EB","#EBFAEE","#EEFAF0","#F0FBF2","#F3FBF4","#F5FCF7","#F7FDF8","#FAFEFB","#FCFFFD","#000001","#000703","#030C05","#031307","#051709","#071B0A","#07210E","#09250F","#0A2A11","#0A2E13","#0C3114","#0C3617","#0E3919","#0F3D1A","#0F411B","#11451D","#13491E","#134C21","#145022","#145423","#165725","#175A26","#175E29","#19612A","#1A652B","#1A682C","#1B6B2E","#1B6F2F","#1D7231","#1E7532","#1E7934","#1F7C35","#218036","#218338","#228639","#22893B","#238C3C","#258F3D","#25933E","#269540","#279941","#279C43","#299E44","#29A245","#2AA547","#2BA748","#2BAB49","#2CAE4A","#2EB14B","#2EB44C","#2FB64F","#2FBA50","#30BC51","#31BF52","#31C253","#32C555","#34C856","#34CB57","#35CD58","#35D159","#36D35B","#37D65C","#37D95D","#38DC5E","#39DF5F","#3DDF62","#40E065","#45E068","#48E16B","#4BE16D","#50E170","#53E273","#57E376","#5AE379","#5DE47B","#61E47E","#64E581","#67E684","#6BE686","#6EE688","#72E78B","#75E78E","#78E891","#7CE893","#7FE996","#82EA98","#86EA9B","#88EA9D","#8CEBA0","#8FEBA3","#92ECA5","#95ECA7","#98EDAA","#9BEEAD","#9EEEAF","#A1EFB2","#A5EFB4","#A7EFB6","#AAF0B9","#AEF0BB","#B0F1BE","#B3F2C0","#B6F2C2","#B9F3C5","#BCF3C7","#BFF3CA","#C1F4CD","#C5F4CE","#C7F5D1","#CAF6D3","#CDF6D6","#D0F7D8","#D3F7DA","#D6F7DC","#D8F8DF","#DCF8E1","#DEF9E4","#E1FAE6","#E4FAE8","#E6FBEA","#EAFBED","#ECFBEF","#EFFCF2","#F2FCF3","#F4FDF6","#F7FEF8","#FAFEFB","#FCFFFD","#000001","#000703","#000E05","#031307","#031909","#031E0A","#05220C","#05270E","#072C0F","#073011","#073513","#093814","#093D16","#094117","#0A4519","#0A491A","#0C4E1B","#0C511D","#0C551E","#0E581F","#0E5C21","#0E6022","#0F6323","#0F6725","#116B26","#116E27","#117229","#13752A","#13792B","#137D2E","#14802F","#148430","#168731","#168A32","#168E34","#179135","#179436","#179837","#199B38","#199E39","#1AA23B","#1AA53C","#1AA83D","#1BAB3E","#1BAE3F","#1BB240","#1DB541","#1DB843","#1EBB44","#1EBE45","#1EC146","#1FC447","#1FC748","#1FCB49","#21CD4A","#21D14B","#22D44C","#22D74F","#22DA50","#23DC51","#23E052","#23E353","#25E654","#25E955","#26EC56","#2AEC59","#2FEC5C","#32ED5F","#37ED62","#3CED65","#3FEE68","#44EE6B","#48EF6D","#4BEF70","#50EF73","#53EF76","#57EF79","#5BEF7C","#5EF07F","#62F082","#66F185","#69F187","#6DF18A","#70F28D","#74F290","#78F293","#7BF395","#7FF398","#83F39B","#86F39D","#89F3A0","#8CF4A3","#90F4A6","#93F4A8","#96F5AB","#9AF5AE","#9DF6B0","#A0F6B3","#A4F6B5","#A6F7B8","#AAF7BA","#AEF7BC","#B0F7BF","#B4F7C1","#B7F8C4","#BAF8C7","#BDF8C9","#C0F9CC","#C3F9CE","#C7F9D1","#C9FAD3","#CDFAD6","#D0FBD8","#D2FBDB","#D6FBDD","#D8FBE0","#DCFBE2","#DFFBE5","#E1FCE7","#E5FCEA","#E8FDEC","#EAFDEF","#EEFDF1","#F0FEF3","#F3FEF6","#F7FEF8","#F9FFFB","#FCFFFD","#000001","#000700","#000E03","#001405","#001A07","#001F09","#00250A","#002A0C","#032F0E","#03320E","#03370F","#033C11","#034013","#034514","#034916","#034E17","#055219","#05551A","#05591A","#055D1B","#05611D","#05651E","#05691F","#056D21","#077122","#077423","#077825","#077C25","#078026","#078427","#078729","#078B2A","#098F2B","#09922C","#09952E","#09992F","#099D2F","#09A030","#09A431","#09A732","#0AAB34","#0AAE35","#0AB136","#0AB537","#0AB838","#0ABB38","#0ABF39","#0AC23B","#0CC63C","#0CC83D","#0CCC3E","#0CCF3F","#0CD240","#0CD640","#0CD941","#0CDC43","#0EE044","#0EE245","#0EE646","#0EE947","#0EEC48","#0EEF49","#0EF349","#0EF64A","#0FF94B","#14F94F","#1AF952","#1FF956","#25F959","#2AF95C","#2FF95F","#34F962","#38FA65","#3CFA68","#40FA6B","#45FA6E","#49FA72","#4EFA75","#52FA78","#56FA7B","#5AFB7E","#5DFB81","#61FB84","#65FB86","#69FB8A","#6DFB8D","#71FB90","#75FB93","#79FB95","#7CFB98","#80FB9B","#84FB9D","#87FBA0","#8BFBA4","#8FFBA6","#93FBA9","#96FCAC","#99FCAE","#9DFCB1","#A0FCB4","#A4FCB6","#A7FCB9","#ABFCBC","#AEFCBF","#B2FDC1","#B5FDC4","#B8FDC7","#BBFDC9","#BFFDCC","#C2FDCE","#C6FDD1","#C9FDD4","#CDFED7","#CFFED9","#D2FEDC","#D6FEDE","#D9FEE1","#DCFEE3","#E0FEE6","#E3FEE8","#E6FFEB","#E9FFEE","#ECFFF0","#EFFFF3","#F3FFF5","#F6FFF7","#F9FFFA","#FCFFFC","#000001","#030503","#070907","#0A0C0A","#0E0F0E","#111311","#141614","#171917","#1A1D1A","#1B1F1D","#1E221F","#212522","#232725","#262A27","#292C2A","#2B2F2C","#2E322F","#2F3531","#313734","#343936","#363C37","#383E39","#3B403C","#3D433E","#3F4640","#404843","#434A45","#454C47","#474F49","#49514B","#4B534E","#4E5550","#505852","#515A54","#535C56","#555E58","#57605A","#59625C","#5B645E","#5D6660","#5F6961","#606B63","#626D65","#646F67","#667169","#68736B","#6A756D","#6C776F","#6E7A71","#6F7C73","#717E75","#738077","#758279","#77847B","#79867D","#7B877F","#7D8A81","#7E8C83","#808E85","#829086","#849287","#869389","#87958B","#89978D","#8B9A8F","#8D9B91","#8F9D93","#919E94","#93A096","#94A299","#96A49B","#98A69D","#9BA79E","#9DA8A0","#9EAAA2","#A0ACA4","#A2AEA6","#A4AFA7","#A6B1A9","#A7B3AB","#AAB5AD","#ACB5AE","#AEB7B0","#AFB9B2","#B1BBB4","#B3BCB5","#B5BEB7","#B6C0B9","#B9C1BB","#BBC2BD","#BCC4BF","#BEC6C1","#C0C7C2","#C1C9C4","#C3CBC6","#C5CDC7","#C7CEC9","#C9CFCB","#CBD1CD","#CDD2CE","#CED4D0","#D0D6D2","#D2D7D3","#D3D9D5","#D6DBD7","#D7DCD8","#D9DDDA","#DBDFDC","#DCE1DD","#DEE2E0","#E0E4E1","#E1E6E3","#E4E7E5","#E6E8E6","#E7EAE8","#E9EBEA","#EAEDEB","#ECEFED","#EEF0EF","#EFF2F0","#F2F3F2","#F3F4F3","#F5F6F5","#F7F7F7","#F8F9F8","#FAFBFA","#FBFCFB","#FDFEFD","#000001","#030503","#070907","#090E0A","#0C110E","#0F1411","#111914","#141B16","#171F19","#19221B","#1B251E","#1D2921","#1F2B23","#222E26","#233127","#26342A","#29372C","#2A392F","#2C3C31","#2E3F34","#304135","#324437","#344739","#36493C","#384C3E","#394F40","#3C5143","#3D5444","#3F5646","#415848","#435B4A","#455D4C","#47604F","#486250","#4A6452","#4B6754","#4E6956","#506B58","#516E5A","#53705C","#55735D","#56755F","#587761","#597A63","#5B7C65","#5D7E67","#5E8168","#60836A","#62866C","#63876E","#658970","#668C72","#688E74","#6A9075","#6B9377","#6D9479","#6F977B","#70997D","#729B7F","#739D81","#759F82","#77A184","#78A486","#7AA687","#7CA889","#7EA98B","#80AB8D","#83AC8F","#85AE91","#86AF93","#89B095","#8BB297","#8EB499","#90B59B","#92B69D","#94B79E","#96B9A1","#98BBA3","#9BBBA5","#9DBDA6","#9FBFA8","#A1C0AA","#A3C1AC","#A6C2AE","#A7C4B0","#A9C6B2","#ACC7B4","#AEC8B5","#B0CAB7","#B2CBBA","#B4CDBB","#B6CDBD","#B8CFBF","#BAD1C1","#BCD2C2","#BED3C4","#C1D5C7","#C2D6C8","#C4D7CA","#C7D8CC","#C8DACD","#CADCCF","#CDDCD2","#CEDED3","#D1E0D5","#D2E1D7","#D4E2D8","#D7E3DA","#D8E5DC","#DAE6DE","#DCE7E0","#DEE9E1","#E1EAE3","#E2EBE5","#E4EDE6","#E6EEE9","#E8EFEA","#EAF1EC","#ECF2EE","#EEF3EF","#F0F5F1","#F2F6F3","#F3F7F5","#F6F8F7","#F7FAF8","#F9FBFA","#FBFCFB","#FDFEFD","#000001","#030503","#050A07","#090E0A","#0A130C","#0C170F","#0F1A13","#111E16","#142217","#16251A","#17291D","#1A2B1F","#1B2F21","#1D3223","#1F3526","#213829","#233C2A","#253E2C","#26412F","#294431","#2A4732","#2B4A35","#2E4C37","#2F5039","#31533B","#32553D","#34583F","#365A41","#375D43","#386045","#3B6247","#3C6549","#3E684A","#3F6A4C","#406D4F","#436F51","#447252","#457554","#477756","#487A58","#4A7D59","#4B7F5B","#4C825D","#4F845F","#508660","#518962","#538B64","#548E66","#569167","#579369","#58956B","#5A976D","#5B9A6E","#5C9D70","#5E9E72","#5FA174","#61A475","#62A677","#63A879","#65AA7B","#66AD7C","#67AF7E","#69B180","#6AB482","#6CB683","#6EB786","#71B887","#73BA89","#76BB8B","#79BB8E","#7BBD90","#7EBE92","#81C093","#83C196","#86C198","#87C39A","#8AC49C","#8DC59E","#8FC7A0","#92C7A2","#94C9A4","#96CAA6","#99CBA8","#9BCDAA","#9DCDAC","#A0CEAE","#A2D0B0","#A5D1B2","#A7D2B4","#A9D3B6","#ACD4B8","#AED6BA","#B0D7BB","#B3D7BE","#B5D9C0","#B7DAC1","#BADCC3","#BBDCC6","#BEDDC7","#C0DFC9","#C2E0CB","#C5E1CD","#C7E2CF","#C9E3D1","#CCE5D2","#CDE6D5","#D0E6D7","#D2E8D8","#D4E9DA","#D7EADC","#D8EBDE","#DBECE0","#DDEEE1","#DFEFE4","#E1EFE6","#E3F1E7","#E6F2E9","#E8F3EB","#EAF4ED","#ECF5EF","#EFF7F0","#F0F7F3","#F3F8F4","#F4FAF6","#F7FBF7","#F9FBFA","#FBFDFB","#FDFEFD","#000001","#030503","#050A07","#070F09","#09140C","#0A190F","#0C1D11","#0E2114","#112517","#132719","#142B1B","#162F1E","#17321F","#193622","#1A3925","#1B3D26","#1E4029","#1F432A","#21462C","#22492F","#234C30","#255032","#265335","#275636","#2A5938","#2B5B3B","#2C5E3C","#2E613E","#2F6440","#306741","#316A44","#326D45","#357047","#367249","#37754A","#38784C","#397B4F","#3B7E50","#3C8152","#3D8454","#3F8655","#408857","#418B59","#438E5A","#44915C","#45935E","#46965F","#479961","#499C62","#4A9D64","#4BA066","#4CA367","#4EA669","#4FA86B","#50AB6C","#51AE6E","#53B070","#54B271","#55B573","#56B775","#57BA76","#58BC78","#59BF79","#5AC17B","#5CC47D","#5EC57F","#61C681","#64C784","#67C786","#6AC888","#6DC98A","#70CA8C","#73CC8F","#75CD91","#78CD93","#7BCE95","#7ECF97","#81D099","#84D19C","#86D29D","#89D39F","#8BD4A2","#8ED5A4","#91D6A6","#93D7A8","#96D7AA","#99D8AD","#9CD9AE","#9EDBB0","#A0DCB3","#A3DCB5","#A6DDB6","#A8DEB9","#ABDFBB","#AEE0BC","#B0E1BF","#B3E2C1","#B5E3C2","#B7E4C5","#BAE5C7","#BCE6C9","#BFE6CB","#C1E7CD","#C4E8CF","#C7EAD1","#C8EAD2","#CBEBD5","#CDECD7","#D0EDD8","#D2EEDB","#D5EFDC","#D7EFDE","#DAF1E1","#DCF2E2","#DEF3E5","#E1F3E6","#E3F4E8","#E6F5EA","#E8F6EC","#EAF7EE","#EDF8F0","#EFF9F2","#F1FAF3","#F3FBF6","#F6FBF7","#F8FCF9","#FBFDFB","#FDFEFD","#000001","#000703","#030C07","#051109","#07160C","#091A0E","#0A1E11","#0C2213","#0E2716","#0E2B17","#0F2F1A","#11321B","#13361E","#143921","#163D22","#174025","#194526","#194829","#1A4B2A","#1B4F2C","#1D522E","#1E5530","#1F5831","#215B34","#225F36","#226237","#236539","#25683B","#266B3D","#276E3E","#297140","#2A7441","#2B7844","#2B7B45","#2C7E47","#2E8149","#2F844A","#30864C","#31894E","#328C50","#349051","#349353","#359554","#369856","#379B57","#389D59","#39A05A","#3BA35C","#3CA65E","#3CA95F","#3DAC61","#3EAE62","#3FB164","#40B465","#41B667","#43B968","#44BC6A","#44BF6B","#45C16D","#46C46F","#47C770","#48C972","#49CC73","#4ACE75","#4BD276","#4FD279","#52D27B","#55D37E","#58D480","#5BD583","#5ED685","#61D786","#65D789","#68D78B","#6BD88E","#6ED990","#71DA93","#74DB94","#77DC97","#7ADC99","#7EDD9C","#81DD9D","#84DE9F","#86DFA2","#89E0A4","#8CE1A6","#8FE1A8","#92E2AB","#95E3AD","#98E3AF","#9BE4B1","#9DE5B4","#A0E6B5","#A3E6B8","#A6E7BA","#A8E8BB","#ACE9BE","#AEE9C0","#B1EAC2","#B4EAC4","#B6EBC7","#B9ECC8","#BBEDCB","#BEEECD","#C1EFCF","#C4EFD1","#C7EFD2","#C9F0D5","#CCF1D7","#CEF2D9","#D1F3DB","#D3F3DD","#D7F4DF","#D9F4E1","#DCF5E3","#DEF6E6","#E1F7E7","#E3F7E9","#E6F8EB","#E8F9ED","#EBFAEF","#EEFAF1","#F0FBF3","#F3FBF5","#F5FCF7","#F7FDF9","#FAFEFB","#FCFFFD","#000001","#000703","#030C05","#031309","#05170A","#071B0E","#07210F","#092513","#0A2A14","#0A2E16","#0C3119","#0C361A","#0E391D","#0F3D1E","#0F4121","#114522","#134925","#134C26","#145027","#14542A","#16572B","#175A2E","#175E2F","#196131","#1A6532","#1A6835","#1B6B36","#1B6F37","#1D7239","#1E753B","#1E793D","#1F7C3E","#218040","#218341","#228644","#228945","#238C46","#258F48","#259349","#26954B","#27994C","#279C4F","#299E50","#29A251","#2AA553","#2BA754","#2BAB56","#2CAE57","#2EB159","#2EB45A","#2FB65C","#2FBA5D","#30BC5E","#31BF60","#31C261","#32C563","#34C864","#34CB66","#35CD67","#35D169","#36D36A","#37D66B","#37D96D","#38DC6E","#39DF70","#3DDF72","#40E075","#45E077","#48E17A","#4BE17D","#50E17F","#53E282","#57E384","#5AE386","#5DE488","#61E48B","#64E58D","#67E690","#6BE693","#6EE694","#72E797","#75E799","#78E89C","#7CE89D","#7FE9A0","#82EAA2","#86EAA5","#88EAA7","#8CEBA9","#8FEBAC","#92ECAE","#95ECB0","#98EDB2","#9BEEB5","#9EEEB7","#A1EFB9","#A5EFBB","#A7EFBD","#AAF0C0","#AEF0C1","#B0F1C4","#B3F2C6","#B6F2C8","#B9F3CB","#BCF3CD","#BFF3CF","#C1F4D1","#C5F4D3","#C7F5D5","#CAF6D7","#CDF6D9","#D0F7DC","#D3F7DE","#D6F7E0","#D8F8E2","#DCF8E4","#DEF9E6","#E1FAE8","#E4FAEA","#E6FBEC","#EAFBEF","#ECFBF1","#EFFCF3","#F2FCF5","#F4FDF7","#F7FEF9","#FAFEFB","#FCFFFD","#000001","#000703","#000E05","#031309","#03190A","#031E0C","#05220F","#052711","#072C13","#073016","#073517","#093819","#093D1B","#09411D","#0A451E","#0A4921","#0C4E22","#0C5123","#0C5526","#0E5827","#0E5C29","#0E602B","#0F632C","#0F672E","#116B30","#116E31","#117232","#137535","#137936","#137D37","#148039","#14843B","#16873C","#168A3E","#168E3F","#179140","#179443","#179844","#199B45","#199E47","#1AA248","#1AA549","#1AA84B","#1BAB4C","#1BAE4E","#1BB250","#1DB551","#1DB852","#1EBB54","#1EBE55","#1EC156","#1FC458","#1FC759","#1FCB5B","#21CD5C","#21D15D","#22D45F","#22D760","#22DA61","#23DC63","#23E064","#23E365","#25E667","#25E968","#26EC69","#2AEC6C","#2FEC6F","#32ED71","#37ED74","#3CED77","#3FEE79","#44EE7C","#48EF7F","#4BEF81","#50EF84","#53EF86","#57EF88","#5BEF8B","#5EF08D","#62F090","#66F193","#69F194","#6DF197","#70F29A","#74F29C","#78F29E","#7BF3A1","#7FF3A3","#83F3A6","#86F3A8","#89F3AA","#8CF4AD","#90F4AF","#93F4B1","#96F5B4","#9AF5B6","#9DF6B8","#A0F6BB","#A4F6BD","#A6F7BF","#AAF7C1","#AEF7C4","#B0F7C6","#B4F7C8","#B7F8CB","#BAF8CD","#BDF8CF","#C0F9D2","#C3F9D3","#C7F9D6","#C9FAD8","#CDFADA","#D0FBDC","#D2FBDF","#D6FBE1","#D8FBE3","#DCFBE6","#DFFBE7","#E1FCEA","#E5FCEC","#E8FDEE","#EAFDF0","#EEFDF3","#F0FEF4","#F3FEF7","#F7FEF9","#F9FFFB","#FCFFFD","#000001","#000703","#000E05","#001407","#001A09","#001F0C","#00250E","#002A0F","#032F11","#033214","#033716","#033C17","#034019","#03451B","#03491D","#034E1E","#05521F","#055522","#055923","#055D25","#056126","#056529","#05692A","#056D2B","#07712C","#07742E","#077830","#077C31","#078032","#078434","#078736","#078B37","#098F38","#099239","#09953C","#09993D","#099D3E","#09A03F","#09A441","#09A743","#0AAB44","#0AAE45","#0AB147","#0AB548","#0AB849","#0ABB4A","#0ABF4B","#0AC24E","#0CC64F","#0CC850","#0CCC51","#0CCF53","#0CD254","#0CD655","#0CD956","#0CDC58","#0EE059","#0EE25A","#0EE65B","#0EE95D","#0EEC5E","#0EEF5F","#0EF360","#0EF662","#0FF963","#14F966","#1AF968","#1FF96B","#25F96E","#2AF971","#2FF973","#34F976","#38FA79","#3CFA7C","#40FA7E","#45FA81","#49FA84","#4EFA86","#52FA88","#56FA8B","#5AFB8E","#5DFB91","#61FB93","#65FB95","#69FB98","#6DFB9B","#71FB9D","#75FB9F","#79FBA2","#7CFBA5","#80FBA7","#84FBA9","#87FBAC","#8BFBAE","#8FFBB1","#93FBB3","#96FCB5","#99FCB8","#9DFCBB","#A0FCBC","#A4FCBF","#A7FCC1","#ABFCC4","#AEFCC6","#B2FDC8","#B5FDCB","#B8FDCD","#BBFDD0","#BFFDD2","#C2FDD4","#C6FDD7","#C9FDD9","#CDFEDB","#CFFEDD","#D2FEE0","#D6FEE2","#D9FEE4","#DCFEE6","#E0FEE9","#E3FEEB","#E6FFED","#E9FFEF","#ECFFF2","#EFFFF4","#F3FFF6","#F6FFF8","#F9FFFB","#FCFFFD","#000001","#030503","#070907","#0A0C0A","#0E0F0E","#111311","#141614","#171917","#1A1D1A","#1B1F1D","#1E221F","#212522","#232725","#262A27","#292C2A","#2B2F2C","#2E322F","#2F3531","#313734","#343936","#363C38","#383E3B","#3B403D","#3D433F","#3F4641","#404844","#434A46","#454C48","#474F4A","#49514C","#4B534F","#4E5551","#505853","#515A55","#535C57","#555E59","#57605B","#59625C","#5B645E","#5D6660","#5F6962","#606B64","#626D66","#646F68","#66716A","#68736C","#6A756E","#6C7770","#6E7A72","#6F7C74","#717E76","#738078","#75827A","#77847C","#79867E","#7B8780","#7D8A82","#7E8C84","#808E86","#829087","#849289","#86938B","#87958D","#89978F","#8B9A91","#8D9B93","#8F9D94","#919E96","#93A098","#94A29A","#96A49C","#98A69D","#9BA79F","#9DA8A1","#9EAAA3","#A0ACA5","#A2AEA6","#A4AFA8","#A6B1AA","#A7B3AC","#AAB5AE","#ACB5AF","#AEB7B1","#AFB9B3","#B1BBB5","#B3BCB6","#B5BEB8","#B6C0BA","#B9C1BB","#BBC2BD","#BCC4BF","#BEC6C1","#C0C7C3","#C1C9C5","#C3CBC7","#C5CDC8","#C7CECA","#C9CFCC","#CBD1CD","#CDD2CF","#CED4D1","#D0D6D2","#D2D7D4","#D3D9D6","#D6DBD7","#D7DCD9","#D9DDDB","#DBDFDC","#DCE1DE","#DEE2E0","#E0E4E1","#E1E6E3","#E4E7E5","#E6E8E6","#E7EAE8","#E9EBEA","#EAEDEB","#ECEFED","#EEF0EF","#EFF2F0","#F2F3F2","#F3F4F3","#F5F6F5","#F7F7F7","#F8F9F8","#FAFBFA","#FBFCFB","#FDFEFD","#000001","#030503","#070907","#090E0A","#0C110E","#0F1411","#111914","#141B17","#171F1A","#19221D","#1B251F","#1D2922","#1F2B25","#222E26","#233129","#26342B","#29372E","#2A3930","#2C3C32","#2E3F35","#304137","#324439","#34473C","#36493E","#384C40","#394F41","#3C5144","#3D5446","#3F5648","#41584A","#435B4C","#455D4F","#476051","#486253","#4A6455","#4B6757","#4E6959","#506B5A","#516E5C","#53705E","#557360","#567562","#587764","#597A66","#5B7C68","#5D7E6A","#5E816C","#60836E","#628670","#638771","#658973","#668C75","#688E77","#6A9079","#6B937B","#6D947D","#6F977F","#709981","#729B83","#739D85","#759F86","#77A187","#78A489","#7AA68B","#7CA88D","#7EA98F","#80AB91","#83AC93","#85AE95","#86AF97","#89B099","#8BB29B","#8EB49D","#90B59E","#92B6A0","#94B7A2","#96B9A4","#98BBA6","#9BBBA7","#9DBDA9","#9FBFAC","#A1C0AE","#A3C1AF","#A6C2B1","#A7C4B3","#A9C6B5","#ACC7B6","#AEC8B8","#B0CABA","#B2CBBB","#B4CDBD","#B6CDBF","#B8CFC1","#BAD1C3","#BCD2C5","#BED3C7","#C1D5C8","#C2D6CA","#C4D7CC","#C7D8CD","#C8DACF","#CADCD1","#CDDCD2","#CEDED4","#D1E0D7","#D2E1D8","#D4E2DA","#D7E3DC","#D8E5DD","#DAE6DF","#DCE7E1","#DEE9E2","#E1EAE4","#E2EBE6","#E4EDE7","#E6EEE9","#E8EFEB","#EAF1ED","#ECF2EF","#EEF3F0","#F0F5F2","#F2F6F3","#F3F7F5","#F6F8F7","#F7FAF8","#F9FBFA","#FBFCFB","#FDFEFD","#000001","#030503","#050A07","#090E0A","#0A130E","#0C1711","#0F1A14","#111E17","#142219","#16251B","#17291E","#1A2B21","#1B2F23","#1D3226","#1F3529","#21382A","#233C2C","#253E2F","#264131","#294434","#2A4736","#2B4A38","#2E4C39","#2F503C","#31533E","#325540","#345843","#365A45","#375D47","#386049","#3B624A","#3C654C","#3E684F","#3F6A51","#406D53","#436F55","#447257","#457558","#47775A","#487A5C","#4A7D5E","#4B7F60","#4C8262","#4F8464","#508665","#518967","#538B69","#548E6B","#56916D","#57936F","#589571","#5A9773","#5B9A74","#5C9D76","#5E9E78","#5FA17A","#61A47C","#62A67E","#63A880","#65AA81","#66AD83","#67AF85","#69B186","#6AB488","#6CB68A","#6EB78C","#71B88E","#73BA90","#76BB92","#79BB93","#7BBD96","#7EBE98","#81C09A","#83C19C","#86C19D","#87C39F","#8AC4A1","#8DC5A4","#8FC7A6","#92C7A7","#94C9A9","#96CAAB","#99CBAD","#9BCDAE","#9DCDB0","#A0CEB3","#A2D0B5","#A5D1B6","#A7D2B8","#A9D3BA","#ACD4BB","#AED6BD","#B0D7C0","#B3D7C1","#B5D9C3","#B7DAC5","#BADCC7","#BBDCC8","#BEDDCA","#C0DFCD","#C2E0CE","#C5E1D0","#C7E2D2","#C9E3D3","#CCE5D5","#CDE6D7","#D0E6D8","#D2E8DB","#D4E9DC","#D7EADE","#D8EBE0","#DBECE1","#DDEEE3","#DFEFE5","#E1EFE7","#E3F1E9","#E6F2EA","#E8F3EC","#EAF4EE","#ECF5EF","#EFF7F1","#F0F7F3","#F3F8F5","#F4FAF7","#F7FBF8","#F9FBFA","#FBFDFB","#FDFEFD","#000001","#030503","#050A07","#070F0A","#09140E","#0A1911","#0C1D13","#0E2116","#112519","#13271B","#142B1E","#162F1F","#173222","#193625","#1A3927","#1B3D2A","#1E402B","#1F432E","#214630","#224932","#234C35","#255036","#265338","#27563B","#2A593D","#2B5B3F","#2C5E41","#2E6143","#2F6445","#306747","#316A49","#326D4B","#35704C","#36724F","#377551","#387853","#397B55","#3B7E56","#3C8158","#3D845A","#3F865C","#40885E","#418B5F","#438E61","#449163","#459365","#469667","#479969","#499C6A","#4A9D6C","#4BA06E","#4CA370","#4EA672","#4FA873","#50AB75","#51AE77","#53B079","#54B27B","#55B57C","#56B77E","#57BA80","#58BC82","#59BF84","#5AC185","#5CC486","#5EC588","#61C68B","#64C78D","#67C78F","#6AC891","#6DC993","#70CA95","#73CC97","#75CD99","#78CD9B","#7BCE9D","#7ECF9F","#81D0A1","#84D1A3","#86D2A5","#89D3A6","#8BD4A9","#8ED5AB","#91D6AD","#93D7AE","#96D7B0","#99D8B2","#9CD9B5","#9EDBB6","#A0DCB8","#A3DCBA","#A6DDBB","#A8DEBE","#ABDFC0","#AEE0C1","#B0E1C3","#B3E2C5","#B5E3C7","#B7E4C9","#BAE5CB","#BCE6CD","#BFE6CE","#C1E7D1","#C4E8D2","#C7EAD4","#C8EAD6","#CBEBD7","#CDECD9","#D0EDDC","#D2EEDD","#D5EFDF","#D7EFE1","#DAF1E2","#DCF2E5","#DEF3E6","#E1F3E8","#E3F4EA","#E6F5EB","#E8F6EE","#EAF7EF","#EDF8F1","#EFF9F3","#F1FAF4","#F3FBF7","#F6FBF8","#F8FCFA","#FBFDFB","#FDFEFD","#000001","#000703","#030C07","#05110A","#07160E","#091A0F","#0A1E13","#0C2216","#0E2719","#0E2B1A","#0F2F1D","#11321F","#133622","#143923","#163D26","#174029","#19452B","#19482C","#1A4B2F","#1B4F31","#1D5234","#1E5535","#1F5837","#215B39","#225F3C","#22623D","#23653F","#256841","#266B44","#276E45","#297147","#2A7449","#2B784B","#2B7B4C","#2C7E4F","#2E8151","#2F8453","#308654","#318956","#328C58","#34905A","#34935B","#35955D","#36985F","#379B61","#389D62","#39A064","#3BA366","#3CA668","#3CA969","#3DAC6B","#3EAE6D","#3FB16F","#40B470","#41B672","#43B974","#44BC76","#44BF77","#45C179","#46C47B","#47C77D","#48C97E","#49CC80","#4ACE82","#4BD284","#4FD286","#52D287","#55D389","#58D48C","#5BD58E","#5ED690","#61D792","#65D794","#68D796","#6BD898","#6ED99A","#71DA9D","#74DB9E","#77DCA0","#7ADCA2","#7EDDA5","#81DDA6","#84DEA8","#86DFAA","#89E0AD","#8CE1AE","#8FE1B0","#92E2B2","#95E3B5","#98E3B6","#9BE4B8","#9DE5BA","#A0E6BC","#A3E6BE","#A6E7C0","#A8E8C1","#ACE9C4","#AEE9C6","#B1EAC7","#B4EAC9","#B6EBCC","#B9ECCD","#BBEDCF","#BEEED1","#C1EFD3","#C4EFD5","#C7EFD7","#C9F0D8","#CCF1DB","#CEF2DC","#D1F3DE","#D3F3E0","#D7F4E2","#D9F4E4","#DCF5E6","#DEF6E7","#E1F7EA","#E3F7EB","#E6F8ED","#E8F9EF","#EBFAF1","#EEFAF3","#F0FBF4","#F3FBF6","#F5FCF8","#F7FDFA","#FAFEFB","#FCFFFD","#000001","#000703","#030C07","#03130A","#05170C","#071B0F","#072113","#092514","#0A2A17","#0A2E1A","#0C311B","#0C361E","#0E3921","#0F3D23","#0F4125","#114527","#13492A","#134C2B","#14502E","#145430","#165731","#175A34","#175E36","#196138","#1A6539","#1A683C","#1B6B3E","#1B6F3F","#1D7241","#1E7544","#1E7945","#1F7C47","#218049","#21834B","#22864C","#22894F","#238C51","#258F52","#259354","#269556","#279957","#279C59","#299E5B","#29A25D","#2AA55E","#2BA760","#2BAB62","#2CAE63","#2EB165","#2EB467","#2FB668","#2FBA6A","#30BC6C","#31BF6E","#31C26F","#32C571","#34C873","#34CB74","#35CD76","#35D178","#36D379","#37D67B","#37D97D","#38DC7F","#39DF80","#3DDF83","#40E085","#45E086","#48E188","#4BE18B","#50E18D","#53E28F","#57E392","#5AE393","#5DE495","#61E498","#64E59A","#67E69C","#6BE69D","#6EE6A0","#72E7A2","#75E7A4","#78E8A6","#7CE8A8","#7FE9AA","#82EAAD","#86EAAE","#88EAB0","#8CEBB2","#8FEBB5","#92ECB6","#95ECB8","#98EDBB","#9BEEBC","#9EEEBE","#A1EFC1","#A5EFC2","#A7EFC4","#AAF0C6","#AEF0C8","#B0F1CA","#B3F2CC","#B6F2CE","#B9F3D0","#BCF3D2","#BFF3D4","#C1F4D6","#C5F4D7","#C7F5D9","#CAF6DC","#CDF6DD","#D0F7DF","#D3F7E1","#D6F7E3","#D8F8E5","#DCF8E7","#DEF9E9","#E1FAEA","#E4FAEC","#E6FBEF","#EAFBF0","#ECFBF2","#EFFCF4","#F2FCF6","#F4FDF7","#F7FEFA","#FAFEFB","#FCFFFD","#000001","#000703","#000E07","#031309","#03190C","#031E0F","#052211","#052714","#072C17","#073019","#07351B","#09381E","#093D1F","#094122","#0A4525","#0A4926","#0C4E29","#0C512A","#0C552C","#0E582F","#0E5C30","#0E6032","#0F6335","#0F6736","#116B38","#116E3B","#11723C","#13753E","#137940","#137D41","#148044","#148445","#168747","#168A49","#168E4A","#17914C","#17944F","#179850","#199B52","#199E54","#1AA255","#1AA557","#1AA859","#1BAB5A","#1BAE5C","#1BB25E","#1DB55F","#1DB861","#1EBB62","#1EBE64","#1EC166","#1FC467","#1FC769","#1FCB6B","#21CD6C","#21D16E","#22D470","#22D771","#22DA73","#23DC75","#23E076","#23E378","#25E679","#25E97B","#26EC7D","#2AEC7F","#2FEC81","#32ED84","#37ED86","#3CED88","#3FEE8A","#44EE8C","#48EF8F","#4BEF91","#50EF93","#53EF95","#57EF97","#5BEF99","#5EF09C","#62F09D","#66F19F","#69F1A2","#6DF1A4","#70F2A6","#74F2A8","#78F2AA","#7BF3AD","#7FF3AE","#83F3B0","#86F3B3","#89F3B5","#8CF4B6","#90F4B9","#93F4BB","#96F5BC","#9AF5BF","#9DF6C1","#A0F6C2","#A4F6C5","#A6F7C7","#AAF7C9","#AEF7CB","#B0F7CD","#B4F7CF","#B7F8D1","#BAF8D2","#BDF8D5","#C0F9D7","#C3F9D8","#C7F9DB","#C9FADC","#CDFADE","#D0FBE1","#D2FBE2","#D6FBE5","#D8FBE6","#DCFBE8","#DFFBEA","#E1FCEC","#E5FCEE","#E8FDF0","#EAFDF2","#EEFDF3","#F0FEF6","#F3FEF7","#F7FEF9","#F9FFFB","#FCFFFD","#000001","#000703","#000E07","#001409","#001A0C","#001F0E","#002511","#002A14","#032F16","#033219","#03371A","#033C1D","#03401F","#034521","#034923","#034E25","#055227","#05552A","#05592B","#055D2E","#05612F","#056531","#056932","#056D35","#077137","#077438","#07783B","#077C3C","#07803E","#078440","#078741","#078B44","#098F45","#099247","#099549","#09994A","#099D4C","#09A04E","#09A450","#09A752","#0AAB53","#0AAE55","#0AB156","#0AB558","#0AB859","#0ABB5B","#0ABF5D","#0AC25E","#0CC660","#0CC861","#0CCC63","#0CCF65","#0CD266","#0CD668","#0CD969","#0CDC6B","#0EE06D","#0EE26E","#0EE670","#0EE971","#0EEC73","#0EEF74","#0EF376","#0EF678","#0FF979","#14F97C","#1AF97E","#1FF980","#25F983","#2AF985","#2FF987","#34F989","#38FA8C","#3CFA8E","#40FA90","#45FA93","#49FA94","#4EFA97","#52FA99","#56FA9B","#5AFB9D","#5DFB9F","#61FBA2","#65FBA4","#69FBA6","#6DFBA8","#71FBAA","#75FBAD","#79FBAE","#7CFBB1","#80FBB3","#84FBB5","#87FBB7","#8BFBB9","#8FFBBB","#93FBBD","#96FCBF","#99FCC1","#9DFCC3","#A0FCC6","#A4FCC7","#A7FCC9","#ABFCCC","#AEFCCD","#B2FDD0","#B5FDD2","#B8FDD3","#BBFDD6","#BFFDD7","#C2FDDA","#C6FDDC","#C9FDDE","#CDFEE0","#CFFEE1","#D2FEE4","#D6FEE6","#D9FEE8","#DCFEEA","#E0FEEB","#E3FEEE","#E6FFEF","#E9FFF2","#ECFFF3","#EFFFF5","#F3FFF7","#F6FFF9","#F9FFFB","#FCFFFD","#000001","#030503","#070907","#0A0C0A","#0E0F0E","#111311","#141614","#171917","#1A1D1A","#1B1F1D","#1E221F","#212522","#232725","#262A27","#292C2A","#2B2F2C","#2E322F","#2F3531","#313734","#343936","#363C38","#383E3B","#3B403D","#3D433F","#3F4641","#404844","#434A46","#454C48","#474F4A","#49514C","#4B534F","#4E5551","#505853","#515A55","#535C57","#555E59","#57605B","#59625D","#5B645F","#5D6661","#5F6963","#606B65","#626D67","#646F69","#66716B","#68736D","#6A756F","#6C7771","#6E7A73","#6F7C75","#717E77","#738079","#75827B","#77847D","#79867F","#7B8781","#7D8A83","#7E8C85","#808E86","#829088","#84928A","#86938C","#87958E","#899790","#8B9A92","#8D9B93","#8F9D95","#919E97","#93A099","#94A29B","#96A49D","#98A69E","#9BA7A0","#9DA8A2","#9EAAA4","#A0ACA6","#A2AEA7","#A4AFA9","#A6B1AB","#A7B3AD","#AAB5AE","#ACB5B0","#AEB7B2","#AFB9B4","#B1BBB5","#B3BCB7","#B5BEB9","#B6C0BB","#B9C1BC","#BBC2BE","#BCC4C0","#BEC6C1","#C0C7C3","#C1C9C5","#C3CBC7","#C5CDC8","#C7CECA","#C9CFCC","#CBD1CD","#CDD2CF","#CED4D1","#D0D6D2","#D2D7D4","#D3D9D6","#D6DBD7","#D7DCD9","#D9DDDB","#DBDFDC","#DCE1DE","#DEE2E0","#E0E4E1","#E1E6E3","#E4E7E5","#E6E8E6","#E7EAE8","#E9EBEA","#EAEDEB","#ECEFED","#EEF0EF","#EFF2F0","#F2F3F2","#F3F4F3","#F5F6F5","#F7F7F7","#F8F9F8","#FAFBFA","#FBFCFB","#FDFEFD","#000001","#030503","#070907","#090E0A","#0C110E","#0F1411","#111914","#141B17","#171F1A","#19221D","#1B251F","#1D2922","#1F2B25","#222E27","#23312A","#26342C","#29372F","#2A3931","#2C3C34","#2E3F36","#304138","#32443B","#34473D","#36493F","#384C41","#394F44","#3C5146","#3D5448","#3F564A","#41584C","#435B4F","#455D51","#476053","#486255","#4A6457","#4B6759","#4E695B","#506B5D","#516E5F","#537061","#557363","#567565","#587767","#597A69","#5B7C6B","#5D7E6D","#5E816F","#608371","#628673","#638775","#658977","#668C79","#688E7B","#6A907D","#6B937F","#6D9481","#6F9783","#709985","#729B86","#739D88","#759F8A","#77A18C","#78A48E","#7AA690","#7CA892","#7EA993","#80AB95","#83AC97","#85AE99","#86AF9B","#89B09D","#8BB29E","#8EB4A0","#90B5A2","#92B6A4","#94B7A6","#96B9A7","#98BBA9","#9BBBAB","#9DBDAD","#9FBFAE","#A1C0B0","#A3C1B2","#A6C2B4","#A7C4B5","#A9C6B7","#ACC7B9","#AEC8BB","#B0CABC","#B2CBBE","#B4CDC0","#B6CDC1","#B8CFC3","#BAD1C5","#BCD2C7","#BED3C8","#C1D5CA","#C2D6CC","#C4D7CD","#C7D8CF","#C8DAD1","#CADCD2","#CDDCD4","#CEDED6","#D1E0D7","#D2E1D9","#D4E2DB","#D7E3DC","#D8E5DE","#DAE6E0","#DCE7E1","#DEE9E3","#E1EAE5","#E2EBE6","#E4EDE8","#E6EEEA","#E8EFEB","#EAF1ED","#ECF2EF","#EEF3F0","#F0F5F2","#F2F6F3","#F3F7F5","#F6F8F7","#F7FAF8","#F9FBFA","#FBFCFB","#FDFEFD","#000001","#030503","#050A07","#090E0A","#0A130E","#0C1711","#0F1A14","#111E17","#14221A","#16251D","#17291F","#1A2B22","#1B2F25","#1D3227","#1F352A","#21382C","#233C2F","#253E31","#264134","#294436","#2A4738","#2B4A3B","#2E4C3D","#2F503F","#315341","#325544","#345846","#365A48","#375D4A","#38604C","#3B624F","#3C6551","#3E6853","#3F6A55","#406D57","#436F59","#44725B","#45755D","#47775F","#487A61","#4A7D63","#4B7F65","#4C8267","#4F8469","#50866B","#51896D","#538B6F","#548E71","#569173","#579375","#589577","#5A9779","#5B9A7A","#5C9D7C","#5E9E7E","#5FA180","#61A482","#62A684","#63A886","#65AA87","#66AD89","#67AF8B","#69B18D","#6AB48F","#6CB691","#6EB793","#71B894","#73BA96","#76BB98","#79BB9A","#7BBD9C","#7EBE9D","#81C09F","#83C1A1","#86C1A3","#87C3A5","#8AC4A6","#8DC5A9","#8FC7AB","#92C7AD","#94C9AE","#96CAB0","#99CBB2","#9BCDB4","#9DCDB5","#A0CEB7","#A2D0B9","#A5D1BB","#A7D2BC","#A9D3BE","#ACD4C0","#AED6C1","#B0D7C3","#B3D7C5","#B5D9C7","#B7DAC8","#BADCCA","#BBDCCC","#BEDDCD","#C0DFCF","#C2E0D1","#C5E1D2","#C7E2D4","#C9E3D6","#CCE5D7","#CDE6D9","#D0E6DB","#D2E8DC","#D4E9DE","#D7EAE0","#D8EBE1","#DBECE3","#DDEEE5","#DFEFE6","#E1EFE8","#E3F1EA","#E6F2EB","#E8F3ED","#EAF4EF","#ECF5F0","#EFF7F2","#F0F7F3","#F3F8F5","#F4FAF7","#F7FBF8","#F9FBFA","#FBFDFB","#FDFEFD","#000001","#030503","#050A07","#070F0A","#09140E","#0A1911","#0C1D14","#0E2117","#11251A","#13271D","#142B1F","#162F22","#173225","#193627","#1A392A","#1B3D2C","#1E402F","#1F4331","#214634","#224936","#234C38","#25503B","#26533D","#27563F","#2A5941","#2B5B44","#2C5E46","#2E6148","#2F644A","#30674C","#316A4F","#326D51","#357053","#367255","#377557","#387859","#397B5B","#3B7E5C","#3C815E","#3D8460","#3F8662","#408864","#418B66","#438E68","#44916A","#45936C","#46966E","#479970","#499C72","#4A9D74","#4BA076","#4CA378","#4EA67A","#4FA87C","#50AB7E","#51AE80","#53B082","#54B284","#55B586","#56B787","#57BA89","#58BC8B","#59BF8D","#5AC18F","#5CC491","#5EC593","#61C694","#64C796","#67C798","#6AC89A","#6DC99C","#70CA9D","#73CC9F","#75CDA1","#78CDA3","#7BCEA5","#7ECFA6","#81D0A8","#84D1AA","#86D2AC","#89D3AE","#8BD4AF","#8ED5B1","#91D6B3","#93D7B5","#96D7B6","#99D8B8","#9CD9BA","#9EDBBB","#A0DCBD","#A3DCBF","#A6DDC1","#A8DEC3","#ABDFC5","#AEE0C7","#B0E1C8","#B3E2CA","#B5E3CC","#B7E4CD","#BAE5CF","#BCE6D1","#BFE6D2","#C1E7D4","#C4E8D6","#C7EAD7","#C8EAD9","#CBEBDB","#CDECDC","#D0EDDE","#D2EEE0","#D5EFE1","#D7EFE3","#DAF1E5","#DCF2E6","#DEF3E8","#E1F3EA","#E3F4EB","#E6F5ED","#E8F6EF","#EAF7F0","#EDF8F2","#EFF9F3","#F1FAF5","#F3FBF7","#F6FBF8","#F8FCFA","#FBFDFB","#FDFEFD","#000001","#000703","#030C07","#05110A","#07160E","#091A11","#0A1E14","#0C2217","#0E271A","#0E2B1D","#0F2F1F","#113222","#133625","#143927","#163D2A","#17402C","#19452F","#194831","#1A4B34","#1B4F36","#1D5238","#1E553B","#1F583D","#215B3F","#225F41","#226244","#236546","#256848","#266B4A","#276E4B","#29714E","#2A7450","#2B7852","#2B7B54","#2C7E56","#2E8158","#2F845A","#30865C","#31895E","#328C60","#349062","#349364","#359566","#369868","#379B6A","#389D6C","#39A06E","#3BA370","#3CA672","#3CA974","#3DAC76","#3EAE78","#3FB17A","#40B47C","#41B67E","#43B980","#44BC82","#44BF83","#45C185","#46C486","#47C788","#48C98A","#49CC8C","#4ACE8E","#4BD290","#4FD292","#52D293","#55D395","#58D497","#5BD599","#5ED69B","#61D79D","#65D79F","#68D7A1","#6BD8A3","#6ED9A5","#71DAA6","#74DBA8","#77DCAA","#7ADCAC","#7EDDAE","#81DDAF","#84DEB1","#86DFB3","#89E0B5","#8CE1B6","#8FE1B8","#92E2BA","#95E3BB","#98E3BD","#9BE4BF","#9DE5C1","#A0E6C2","#A3E6C4","#A6E7C6","#A8E8C7","#ACE9C9","#AEE9CB","#B1EACD","#B4EACE","#B6EBD1","#B9ECD2","#BBEDD4","#BEEED6","#C1EFD7","#C4EFD9","#C7EFDB","#C9F0DC","#CCF1DE","#CEF2E0","#D1F3E1","#D3F3E3","#D7F4E5","#D9F4E6","#DCF5E8","#DEF6EA","#E1F7EB","#E3F7ED","#E6F8EF","#E8F9F0","#EBFAF2","#EEFAF3","#F0FBF5","#F3FBF7","#F5FCF8","#F7FDFA","#FAFEFB","#FCFFFD","#000001","#000703","#030C07","#03130A","#05170E","#071B11","#072114","#092517","#0A2A1A","#0A2E1D","#0C311F","#0C3622","#0E3925","#0F3D27","#0F412A","#11452C","#13492F","#134C31","#145034","#145436","#165738","#175A3B","#175E3D","#19613F","#1A6540","#1A6843","#1B6B45","#1B6F47","#1D7249","#1E754B","#1E794E","#1F7C50","#218052","#218354","#228656","#228958","#238C5A","#258F5C","#25935E","#269560","#279962","#279C64","#299E66","#29A268","#2AA56A","#2BA76C","#2BAB6E","#2CAE6F","#2EB171","#2EB473","#2FB675","#2FBA77","#30BC79","#31BF7B","#31C27D","#32C57F","#34C881","#34CB83","#35CD85","#35D186","#36D388","#37D68A","#37D98C","#38DC8E","#39DF90","#3DDF92","#40E093","#45E095","#48E197","#4BE199","#50E19B","#53E29D","#57E39E","#5AE3A0","#5DE4A2","#61E4A4","#64E5A6","#67E6A7","#6BE6A9","#6EE6AB","#72E7AD","#75E7AE","#78E8B1","#7CE8B3","#7FE9B5","#82EAB6","#86EAB8","#88EABA","#8CEBBB","#8FEBBD","#92ECBF","#95ECC1","#98EDC2","#9BEEC4","#9EEEC6","#A1EFC7","#A5EFC9","#A7EFCB","#AAF0CD","#AEF0CE","#B0F1D0","#B3F2D2","#B6F2D3","#B9F3D5","#BCF3D7","#BFF3D9","#C1F4DB","#C5F4DC","#C7F5DE","#CAF6E0","#CDF6E1","#D0F7E3","#D3F7E5","#D6F7E6","#D8F8E8","#DCF8EA","#DEF9EB","#E1FAED","#E4FAEF","#E6FBF0","#EAFBF2","#ECFBF3","#EFFCF5","#F2FCF7","#F4FDF8","#F7FEFA","#FAFEFB","#FCFFFD","#000001","#000703","#000E07","#03130A","#03190E","#031E11","#052214","#052717","#072C1A","#07301D","#07351F","#093822","#093D25","#094127","#0A452A","#0A492C","#0C4E2F","#0C5131","#0C5534","#0E5836","#0E5C37","#0E6039","#0F633C","#0F673E","#116B40","#116E43","#117245","#137547","#137949","#137D4B","#14804E","#148450","#168752","#168A54","#168E56","#179158","#17945A","#17985C","#199B5E","#199E60","#1AA261","#1AA563","#1AA865","#1BAB67","#1BAE69","#1BB26B","#1DB56D","#1DB86F","#1EBB71","#1EBE73","#1EC175","#1FC477","#1FC779","#1FCB7B","#21CD7D","#21D17F","#22D481","#22D783","#22DA85","#23DC86","#23E087","#23E389","#25E68B","#25E98D","#26EC8F","#2AEC91","#2FEC93","#32ED94","#37ED96","#3CED99","#3FEE9B","#44EE9D","#48EF9E","#4BEFA0","#50EFA2","#53EFA4","#57EFA6","#5BEFA7","#5EF0A9","#62F0AB","#66F1AD","#69F1AE","#6DF1B0","#70F2B2","#74F2B4","#78F2B5","#7BF3B7","#7FF3B9","#83F3BB","#86F3BD","#89F3BF","#8CF4C1","#90F4C2","#93F4C4","#96F5C6","#9AF5C7","#9DF6C9","#A0F6CB","#A4F6CD","#A6F7CE","#AAF7D0","#AEF7D2","#B0F7D3","#B4F7D5","#B7F8D7","#BAF8D8","#BDF8DA","#C0F9DC","#C3F9DD","#C7F9E0","#C9FAE1","#CDFAE3","#D0FBE5","#D2FBE6","#D6FBE8","#D8FBEA","#DCFBEB","#DFFBED","#E1FCEF","#E5FCF0","#E8FDF2","#EAFDF3","#EEFDF5","#F0FEF7","#F3FEF8","#F7FEFA","#F9FFFB","#FCFFFD","#000001","#000703","#000E07","#00140A","#001A0E","#001F11","#002514","#002A17","#032F1A","#03321D","#03371F","#033C22","#034025","#034527","#03492A","#034E2C","#05522F","#055531","#055932","#055D35","#056137","#056539","#05693C","#056D3E","#077140","#077443","#077845","#077C47","#078049","#07844B","#07874E","#078B50","#098F52","#099254","#099556","#099957","#099D59","#09A05B","#09A45D","#09A75F","#0AAB61","#0AAE63","#0AB165","#0AB567","#0AB869","#0ABB6B","#0ABF6D","#0AC26F","#0CC671","#0CC873","#0CCC75","#0CCF77","#0CD278","#0CD67A","#0CD97C","#0CDC7E","#0EE080","#0EE282","#0EE684","#0EE986","#0EEC87","#0EEF89","#0EF38B","#0EF68D","#0FF98F","#14F991","#1AF993","#1FF994","#25F996","#2AF998","#2FF99A","#34F99C","#38FA9D","#3CFA9F","#40FAA1","#45FAA3","#49FAA5","#4EFAA7","#52FAA9","#56FAAB","#5AFBAD","#5DFBAE","#61FBB0","#65FBB2","#69FBB4","#6DFBB5","#71FBB7","#75FBB9","#79FBBB","#7CFBBC","#80FBBE","#84FBC0","#87FBC1","#8BFBC3","#8FFBC6","#93FBC7","#96FCC9","#99FCCB","#9DFCCD","#A0FCCE","#A4FCD0","#A7FCD2","#ABFCD3","#AEFCD5","#B2FDD7","#B5FDD8","#B8FDDA","#BBFDDC","#BFFDDD","#C2FDDF","#C6FDE1","#C9FDE3","#CDFEE5","#CFFEE6","#D2FEE8","#D6FEEA","#D9FEEB","#DCFEED","#E0FEEF","#E3FEF0","#E6FFF2","#E9FFF3","#ECFFF5","#EFFFF7","#F3FFF8","#F6FFFA","#F9FFFB","#FCFFFD","#000001","#030505","#070909","#0A0C0C","#0E0F0F","#111313","#141616","#171919","#1A1D1B","#1B1F1E","#1E2221","#212523","#232726","#262A29","#292C2B","#2B2F2E","#2E3230","#2F3532","#313735","#343937","#363C39","#383E3C","#3B403E","#3D4340","#3F4643","#404845","#434A47","#454C49","#474F4B","#49514E","#4B5350","#4E5552","#505854","#515A56","#535C58","#555E5A","#57605C","#59625E","#5B6460","#5D6662","#5F6964","#606B66","#626D68","#646F6A","#66716C","#68736E","#6A7570","#6C7772","#6E7A74","#6F7C76","#717E78","#73807A","#75827D","#77847F","#798681","#7B8783","#7D8A85","#7E8C86","#808E88","#82908A","#84928C","#86938E","#879590","#899792","#8B9A93","#8D9B95","#8F9D97","#919E99","#93A09B","#94A29D","#96A49E","#98A6A0","#9BA7A2","#9DA8A4","#9EAAA6","#A0ACA7","#A2AEA9","#A4AFAA","#A6B1AC","#A7B3AE","#AAB5AF","#ACB5B1","#AEB7B3","#AFB9B5","#B1BBB6","#B3BCB8","#B5BEBA","#B6C0BB","#B9C1BD","#BBC2BF","#BCC4C1","#BEC6C2","#C0C7C4","#C1C9C6","#C3CBC7","#C5CDC9","#C7CECB","#C9CFCD","#CBD1CE","#CDD2D0","#CED4D2","#D0D6D3","#D2D7D5","#D3D9D7","#D6DBD8","#D7DCDA","#D9DDDC","#DBDFDD","#DCE1DF","#DEE2E1","#E0E4E2","#E1E6E4","#E4E7E6","#E6E8E7","#E7EAE9","#E9EBEA","#EAEDEC","#ECEFEE","#EEF0EF","#EFF2F1","#F2F3F3","#F3F4F4","#F5F6F6","#F7F7F7","#F8F9F9","#FAFBFB","#FBFCFC","#FDFEFE","#000001","#030505","#070909","#090E0C","#0C110F","#0F1413","#111916","#141B19","#171F1B","#19221E","#1B2521","#1D2923","#1F2B26","#222E29","#23312B","#26342E","#293730","#2A3932","#2C3C36","#2E3F38","#30413B","#32443D","#34473F","#364941","#384C44","#394F46","#3C5148","#3D544A","#3F564C","#41584F","#435B51","#455D53","#476055","#486257","#4A6459","#4B675C","#4E695E","#506B60","#516E62","#537064","#557366","#567568","#58776A","#597A6C","#5B7C6E","#5D7E70","#5E8172","#608374","#628676","#638778","#65897A","#668C7C","#688E7F","#6A9081","#6B9383","#6D9485","#6F9786","#709988","#729B8A","#739D8C","#759F8E","#77A190","#78A492","#7AA693","#7CA895","#7EA997","#80AB99","#83AC9B","#85AE9D","#86AF9E","#89B0A0","#8BB2A2","#8EB4A4","#90B5A6","#92B6A7","#94B7A9","#96B9AB","#98BBAC","#9BBBAE","#9DBDAF","#9FBFB1","#A1C0B3","#A3C1B5","#A6C2B6","#A7C4B8","#A9C6BA","#ACC7BB","#AEC8BD","#B0CABF","#B2CBC1","#B4CDC2","#B6CDC4","#B8CFC6","#BAD1C7","#BCD2C8","#BED3CA","#C1D5CC","#C2D6CD","#C4D7CF","#C7D8D1","#C8DAD2","#CADCD4","#CDDCD6","#CEDED7","#D1E0D9","#D2E1DB","#D4E2DC","#D7E3DE","#D8E5E0","#DAE6E1","#DCE7E3","#DEE9E4","#E1EAE6","#E2EBE7","#E4EDE9","#E6EEEA","#E8EFEC","#EAF1EE","#ECF2EF","#EEF3F1","#F0F5F3","#F2F6F4","#F3F7F6","#F6F8F7","#F7FAF9","#F9FBFB","#FBFCFC","#FDFEFE","#000001","#030505","#050A09","#090E0C","#0A130F","#0C1713","#0F1A16","#111E19","#14221B","#16251E","#172921","#1A2B25","#1B2F27","#1D322A","#1F352C","#21382F","#233C31","#253E34","#264136","#294438","#2A473B","#2B4A3E","#2E4C40","#2F5043","#315345","#325547","#345849","#365A4B","#375D4E","#386050","#3B6252","#3C6555","#3E6857","#3F6A59","#406D5B","#436F5D","#44725F","#457561","#477763","#487A65","#4A7D67","#4B7F6A","#4C826C","#4F846E","#508670","#518972","#538B74","#548E76","#569178","#57937A","#58957C","#5A977E","#5B9A81","#5C9D83","#5E9E85","#5FA186","#61A488","#62A68A","#63A88C","#65AA8E","#66AD90","#67AF92","#69B194","#6AB496","#6CB698","#6EB79A","#71B89C","#73BA9D","#76BB9E","#79BBA0","#7BBDA2","#7EBEA4","#81C0A6","#83C1A7","#86C1A9","#87C3AB","#8AC4AD","#8DC5AE","#8FC7AF","#92C7B1","#94C9B3","#96CAB5","#99CBB6","#9BCDB8","#9DCDBA","#A0CEBB","#A2D0BD","#A5D1BF","#A7D2C0","#A9D3C1","#ACD4C3","#AED6C5","#B0D7C7","#B3D7C8","#B5D9CA","#B7DACC","#BADCCD","#BBDCCF","#BEDDD0","#C0DFD2","#C2E0D3","#C5E1D5","#C7E2D7","#C9E3D8","#CCE5DA","#CDE6DC","#D0E6DD","#D2E8DF","#D4E9E0","#D7EAE1","#D8EBE3","#DBECE5","#DDEEE6","#DFEFE8","#E1EFEA","#E3F1EB","#E6F2ED","#E8F3EF","#EAF4EF","#ECF5F1","#EFF7F3","#F0F7F4","#F3F8F6","#F4FAF7","#F7FBF9","#F9FBFB","#FBFDFC","#FDFEFE","#000001","#030505","#050A09","#070F0C","#09140F","#0A1913","#0C1D16","#0E2119","#11251D","#13271F","#142B22","#162F25","#173227","#19362A","#1A392C","#1B3D30","#1E4032","#1F4335","#214637","#224939","#234C3C","#25503E","#265341","#275644","#2A5946","#2B5B48","#2C5E4A","#2E614C","#2F644F","#306751","#316A54","#326D56","#357058","#36725A","#37755C","#38785E","#397B60","#3B7E63","#3C8165","#3D8467","#3F8669","#40886B","#418B6D","#438E6F","#449172","#459374","#469676","#479978","#499C7A","#4A9D7C","#4BA07E","#4CA380","#4EA683","#4FA885","#50AB86","#51AE88","#53B08A","#54B28C","#55B58E","#56B791","#57BA93","#58BC94","#59BF96","#5AC198","#5CC49A","#5EC59C","#61C69D","#64C79F","#67C7A1","#6AC8A3","#6DC9A4","#70CAA6","#73CCA7","#75CDA9","#78CDAB","#7BCEAD","#7ECFAE","#81D0AF","#84D1B1","#86D2B3","#89D3B5","#8BD4B6","#8ED5B8","#91D6BA","#93D7BB","#96D7BC","#99D8BE","#9CD9C0","#9EDBC1","#A0DCC3","#A3DCC5","#A6DDC7","#A8DEC7","#ABDFC9","#AEE0CB","#B0E1CD","#B3E2CE","#B5E3D0","#B7E4D2","#BAE5D2","#BCE6D4","#BFE6D6","#C1E7D7","#C4E8D9","#C7EADB","#C8EADC","#CBEBDE","#CDECDF","#D0EDE1","#D2EEE2","#D5EFE4","#D7EFE6","#DAF1E7","#DCF2E9","#DEF3EA","#E1F3EB","#E3F4ED","#E6F5EF","#E8F6F0","#EAF7F2","#EDF8F3","#EFF9F4","#F1FAF6","#F3FBF7","#F6FBF9","#F8FCFB","#FBFDFC","#FDFEFE","#000001","#000705","#030C09","#05110C","#07160F","#091A13","#0A1E17","#0C221A","#0E271D","#0E2B1F","#0F2F22","#113225","#133629","#14392B","#163D2E","#174030","#194532","#194835","#1A4B38","#1B4F3B","#1D523D","#1E553F","#1F5841","#215B45","#225F47","#226249","#23654B","#25684E","#266B50","#276E53","#297155","#2A7457","#2B7859","#2B7B5B","#2C7E5D","#2E8160","#2F8462","#308664","#318966","#328C68","#34906B","#34936D","#35956F","#369871","#379B73","#389D75","#39A078","#3BA37A","#3CA67C","#3CA97E","#3DAC80","#3EAE82","#3FB185","#40B486","#41B688","#43B98A","#44BC8C","#44BF8F","#45C191","#46C493","#47C794","#48C996","#49CC98","#4ACE9B","#4BD29D","#4FD29E","#52D29F","#55D3A1","#58D4A3","#5BD5A5","#5ED6A6","#61D7A8","#65D7A9","#68D7AB","#6BD8AD","#6ED9AE","#71DAB0","#74DBB1","#77DCB3","#7ADCB5","#7EDDB6","#81DDB8","#84DEBA","#86DFBB","#89E0BC","#8CE1BE","#8FE1C0","#92E2C1","#95E3C3","#98E3C4","#9BE4C6","#9DE5C7","#A0E6C9","#A3E6CB","#A6E7CC","#A8E8CD","#ACE9CF","#AEE9D1","#B1EAD2","#B4EAD4","#B6EBD5","#B9ECD7","#BBEDD8","#BEEEDA","#C1EFDC","#C4EFDD","#C7EFDE","#C9F0E0","#CCF1E1","#CEF2E3","#D1F3E5","#D3F3E6","#D7F4E7","#D9F4E9","#DCF5EA","#DEF6EC","#E1F7EE","#E3F7EF","#E6F8F0","#E8F9F2","#EBFAF3","#EEFAF5","#F0FBF7","#F3FBF7","#F5FCF9","#F7FDFB","#FAFEFC","#FCFFFE","#000001","#000705","#030C09","#03130C","#05170F","#071B14","#072117","#09251A","#0A2A1D","#0A2E1F","#0C3123","#0C3626","#0E3929","#0F3D2B","#0F412F","#114531","#134934","#134C36","#145038","#14543C","#16573E","#175A40","#175E43","#196145","#1A6548","#1A684A","#1B6B4C","#1B6F4F","#1D7252","#1E7554","#1E7956","#1F7C58","#21805A","#21835D","#22865F","#228961","#238C63","#258F65","#259368","#26956A","#27996C","#279C6E","#299E71","#29A273","#2AA575","#2BA777","#2BAB79","#2CAE7C","#2EB17E","#2EB480","#2FB682","#2FBA84","#30BC86","#31BF88","#31C28A","#32C58C","#34C88F","#34CB91","#35CD93","#35D194","#36D396","#37D699","#37D99B","#38DC9D","#39DF9E","#3DDFA0","#40E0A2","#45E0A4","#48E1A5","#4BE1A6","#50E1A8","#53E2AA","#57E3AC","#5AE3AD","#5DE4AE","#61E4B0","#64E5B2","#67E6B3","#6BE6B5","#6EE6B6","#72E7B8","#75E7BA","#78E8BB","#7CE8BC","#7FE9BE","#82EAC0","#86EAC1","#88EAC2","#8CEBC4","#8FEBC6","#92ECC7","#95ECC8","#98EDCA","#9BEECC","#9EEECD","#A1EFCF","#A5EFD0","#A7EFD2","#AAF0D3","#AEF0D5","#B0F1D7","#B3F2D7","#B6F2D9","#B9F3DB","#BCF3DC","#BFF3DD","#C1F4DF","#C5F4E1","#C7F5E2","#CAF6E4","#CDF6E5","#D0F7E6","#D3F7E8","#D6F7EA","#D8F8EB","#DCF8EC","#DEF9EE","#E1FAEF","#E4FAF1","#E6FBF2","#EAFBF3","#ECFBF5","#EFFCF7","#F2FCF8","#F4FDF9","#F7FEFB","#FAFEFC","#FCFFFE","#000001","#000705","#000E09","#03130C","#031911","#031E14","#052217","#05271A","#072C1E","#073021","#073523","#093826","#093D2A","#09412C","#0A452F","#0A4931","#0C4E35","#0C5137","#0C5539","#0E583C","#0E5C3F","#0E6041","#0F6344","#0F6746","#116B49","#116E4B","#11724E","#137550","#137953","#137D55","#148057","#148459","#16875C","#168A5E","#168E60","#179162","#179465","#179867","#199B69","#199E6B","#1AA26E","#1AA570","#1AA872","#1BAB74","#1BAE77","#1BB279","#1DB57B","#1DB87D","#1EBB80","#1EBE82","#1EC184","#1FC486","#1FC788","#1FCB8A","#21CD8C","#21D18E","#22D491","#22D793","#22DA94","#23DC96","#23E099","#23E39B","#25E69D","#25E99E","#26ECA1","#2AECA2","#2FECA4","#32EDA6","#37EDA7","#3CEDA8","#3FEEAA","#44EEAC","#48EFAE","#4BEFAE","#50EFB0","#53EFB2","#57EFB4","#5BEFB5","#5EF0B6","#62F0B8","#66F1BA","#69F1BB","#6DF1BC","#70F2BE","#74F2C0","#78F2C1","#7BF3C2","#7FF3C4","#83F3C6","#86F3C7","#89F3C8","#8CF4CA","#90F4CC","#93F4CD","#96F5CE","#9AF5D0","#9DF6D2","#A0F6D2","#A4F6D4","#A6F7D6","#AAF7D7","#AEF7D8","#B0F7DA","#B4F7DC","#B7F8DD","#BAF8DE","#BDF8E0","#C0F9E1","#C3F9E3","#C7F9E4","#C9FAE6","#CDFAE7","#D0FBE9","#D2FBEA","#D6FBEB","#D8FBED","#DCFBEF","#DFFBEF","#E1FCF1","#E5FCF3","#E8FDF4","#EAFDF5","#EEFDF7","#F0FEF8","#F3FEFA","#F7FEFB","#F9FFFC","#FCFFFE","#000001","#000705","#000E09","#00140C","#001A11","#001F14","#002517","#002A1B","#032F1E","#033221","#033723","#033C27","#03402A","#03452C","#034930","#034E32","#055235","#055537","#05593B","#055D3D","#05613F","#056543","#056945","#056D47","#07714A","#07744C","#07784F","#077C51","#078054","#078456","#078758","#078B5B","#098F5D","#09925F","#099561","#099964","#099D66","#09A068","#09A46B","#09A76D","#0AAB6F","#0AAE72","#0AB174","#0AB576","#0AB878","#0ABB7B","#0ABF7D","#0AC27F","#0CC682","#0CC884","#0CCC86","#0CCF87","#0CD28A","#0CD68C","#0CD98E","#0CDC91","#0EE093","#0EE294","#0EE696","#0EE999","#0EEC9B","#0EEF9D","#0EF39F","#0EF6A1","#0FF9A3","#14F9A5","#1AF9A6","#1FF9A7","#25F9A9","#2AF9AB","#2FF9AC","#34F9AE","#38FAAF","#3CFAB1","#40FAB2","#45FAB4","#49FAB5","#4EFAB6","#52FAB8","#56FABA","#5AFBBB","#5DFBBC","#61FBBE","#65FBC0","#69FBC1","#6DFBC2","#71FBC4","#75FBC6","#79FBC7","#7CFBC8","#80FBCA","#84FBCB","#87FBCD","#8BFBCE","#8FFBCF","#93FBD1","#96FCD2","#99FCD4","#9DFCD5","#A0FCD7","#A4FCD8","#A7FCD9","#ABFCDB","#AEFCDC","#B2FDDE","#B5FDDF","#B8FDE1","#BBFDE2","#BFFDE3","#C2FDE5","#C6FDE6","#C9FDE7","#CDFEE9","#CFFEEA","#D2FEEC","#D6FEED","#D9FEEF","#DCFEF0","#E0FEF1","#E3FEF3","#E6FFF4","#E9FFF6","#ECFFF7","#EFFFF8","#F3FFFA","#F6FFFB","#F9FFFC","#FCFFFE","#000001","#030505","#070909","#0A0C0C","#0E0F0F","#111313","#141616","#171919","#1A1D1B","#1B1F1E","#1E2221","#212523","#232726","#262A29","#292C2B","#2B2F2E","#2E3230","#2F3532","#313735","#343937","#363C39","#383E3C","#3B403E","#3D4340","#3F4644","#404846","#434A48","#454C4A","#474F4C","#49514F","#4B5351","#4E5553","#505855","#515A57","#535C59","#555E5B","#57605D","#59625F","#5B6461","#5D6663","#5F6965","#606B67","#626D69","#646F6B","#66716D","#68736F","#6A7571","#6C7774","#6E7A76","#6F7C78","#717E7A","#73807C","#75827E","#778480","#798682","#7B8784","#7D8A86","#7E8C87","#808E89","#82908B","#84928D","#86938F","#879591","#899793","#8B9A94","#8D9B96","#8F9D98","#919E9A","#93A09C","#94A29D","#96A49F","#98A6A1","#9BA7A3","#9DA8A5","#9EAAA6","#A0ACA8","#A2AEAA","#A4AFAC","#A6B1AE","#A7B3AF","#AAB5B1","#ACB5B3","#AEB7B4","#AFB9B5","#B1BBB7","#B3BCB9","#B5BEBB","#B6C0BC","#B9C1BE","#BBC2C0","#BCC4C1","#BEC6C3","#C0C7C5","#C1C9C7","#C3CBC8","#C5CDCA","#C7CECC","#C9CFCD","#CBD1CF","#CDD2D1","#CED4D2","#D0D6D4","#D2D7D6","#D3D9D7","#D6DBD9","#D7DCDA","#D9DDDC","#DBDFDD","#DCE1DF","#DEE2E1","#E0E4E2","#E1E6E4","#E4E7E6","#E6E8E7","#E7EAE9","#E9EBEA","#EAEDEC","#ECEFEE","#EEF0EF","#EFF2F1","#F2F3F3","#F3F4F4","#F5F6F6","#F7F7F7","#F8F9F9","#FAFBFB","#FBFCFC","#FDFEFE","#000001","#030505","#070909","#090E0C","#0C110F","#0F1413","#111916","#141B19","#171F1D","#19221F","#1B2522","#1D2925","#1F2B27","#222E2A","#23312C","#26342F","#293732","#2A3935","#2C3C37","#2E3F39","#30413C","#32443E","#344740","#364943","#384C46","#394F48","#3C514A","#3D544C","#3F564F","#415851","#435B53","#455D55","#476058","#48625A","#4A645C","#4B675E","#4E6960","#506B62","#516E64","#537067","#557369","#56756B","#58776D","#597A6F","#5B7C71","#5D7E73","#5E8175","#608378","#62867A","#63877C","#65897E","#668C80","#688E82","#6A9084","#6B9386","#6D9488","#6F978A","#70998C","#729B8E","#739D90","#759F92","#77A193","#78A495","#7AA698","#7CA89A","#7EA99C","#80AB9D","#83AC9E","#85AEA0","#86AFA2","#89B0A4","#8BB2A6","#8EB4A7","#90B5A9","#92B6AA","#94B7AC","#96B9AE","#98BBAF","#9BBBB1","#9DBDB3","#9FBFB5","#A1C0B6","#A3C1B7","#A6C2B9","#A7C4BB","#A9C6BC","#ACC7BE","#AEC8C0","#B0CAC1","#B2CBC3","#B4CDC4","#B6CDC6","#B8CFC7","#BAD1C9","#BCD2CB","#BED3CD","#C1D5CE","#C2D6CF","#C4D7D1","#C7D8D2","#C8DAD4","#CADCD6","#CDDCD7","#CEDED9","#D1E0DB","#D2E1DC","#D4E2DD","#D7E3DF","#D8E5E1","#DAE6E2","#DCE7E4","#DEE9E6","#E1EAE7","#E2EBE8","#E4EDEA","#E6EEEB","#E8EFED","#EAF1EF","#ECF2F0","#EEF3F2","#F0F5F3","#F2F6F4","#F3F7F6","#F6F8F7","#F7FAF9","#F9FBFB","#FBFCFC","#FDFEFE","#000001","#030505","#050A09","#090E0C","#0A130F","#0C1714","#0F1A17","#111E1A","#14221D","#16251F","#172923","#1A2B26","#1B2F29","#1D322B","#1F352F","#213831","#233C34","#253E36","#264138","#29443C","#2A473E","#2B4A40","#2E4C43","#2F5045","#315348","#32554A","#34584C","#365A4F","#375D52","#386054","#3B6256","#3C6558","#3E685A","#3F6A5D","#406D5F","#436F61","#447263","#457565","#477768","#487A6A","#4A7D6C","#4B7F6E","#4C8271","#4F8473","#508675","#518977","#538B79","#548E7C","#56917E","#579380","#589582","#5A9784","#5B9A86","#5C9D88","#5E9E8A","#5FA18C","#61A48F","#62A691","#63A893","#65AA94","#66AD96","#67AF99","#69B19B","#6AB49D","#6CB69E","#6EB7A0","#71B8A2","#73BAA4","#76BBA5","#79BBA6","#7BBDA8","#7EBEAA","#81C0AC","#83C1AD","#86C1AE","#87C3B0","#8AC4B2","#8DC5B3","#8FC7B5","#92C7B6","#94C9B8","#96CABA","#99CBBB","#9BCDBC","#9DCDBE","#A0CEC0","#A2D0C1","#A5D1C2","#A7D2C4","#A9D3C6","#ACD4C7","#AED6C8","#B0D7CA","#B3D7CC","#B5D9CD","#B7DACF","#BADCD0","#BBDCD2","#BEDDD3","#C0DFD5","#C2E0D7","#C5E1D7","#C7E2D9","#C9E3DB","#CCE5DC","#CDE6DD","#D0E6DF","#D2E8E1","#D4E9E2","#D7EAE4","#D8EBE5","#DBECE6","#DDEEE8","#DFEFEA","#E1EFEB","#E3F1EC","#E6F2EE","#E8F3EF","#EAF4F1","#ECF5F2","#EFF7F3","#F0F7F5","#F3F8F7","#F4FAF8","#F7FBF9","#F9FBFB","#FBFDFC","#FDFEFE","#000001","#030505","#050A09","#070F0C","#091411","#0A1914","#0C1D17","#0E211B","#11251E","#132721","#142B25","#162F27","#17322A","#19362C","#1A3930","#1B3D32","#1E4035","#1F4338","#21463B","#22493D","#234C40","#255043","#265345","#275647","#2A594A","#2B5B4C","#2C5E4F","#2E6152","#2F6454","#306756","#316A59","#326D5B","#35705D","#36725F","#377562","#387864","#397B66","#3B7E69","#3C816B","#3D846D","#3F8670","#408872","#418B74","#438E76","#449179","#45937B","#46967D","#479980","#499C82","#4A9D84","#4BA086","#4CA388","#4EA68A","#4FA88C","#50AB8F","#51AE91","#53B093","#54B295","#55B597","#56B799","#57BA9C","#58BC9D","#59BF9F","#5AC1A1","#5CC4A4","#5EC5A5","#61C6A6","#64C7A8","#67C7AA","#6AC8AB","#6DC9AD","#70CAAE","#73CCAF","#75CDB1","#78CDB3","#7BCEB4","#7ECFB5","#81D0B7","#84D1B9","#86D2BA","#89D3BB","#8BD4BD","#8ED5BE","#91D6C0","#93D7C1","#96D7C2","#99D8C4","#9CD9C6","#9EDBC7","#A0DCC8","#A3DCCA","#A6DDCC","#A8DECD","#ABDFCE","#AEE0D0","#B0E1D1","#B3E2D2","#B5E3D4","#B7E4D6","#BAE5D7","#BCE6D8","#BFE6DA","#C1E7DB","#C4E8DC","#C7EADE","#C8EADF","#CBEBE1","#CDECE2","#D0EDE4","#D2EEE5","#D5EFE6","#D7EFE8","#DAF1E9","#DCF2EA","#DEF3EC","#E1F3ED","#E3F4EF","#E6F5F0","#E8F6F2","#EAF7F3","#EDF8F4","#EFF9F6","#F1FAF7","#F3FBF8","#F6FBFA","#F8FCFB","#FBFDFC","#FDFEFE","#000001","#000705","#030C09","#05110E","#071611","#091A14","#0A1E19","#0C221B","#0E271F","#0E2B22","#0F2F25","#113229","#13362B","#14392F","#163D31","#174034","#194537","#194839","#1A4B3C","#1B4F3F","#1D5241","#1E5545","#1F5847","#215B49","#225F4C","#22624F","#236552","#256854","#266B56","#276E59","#29715B","#2A745D","#2B7860","#2B7B62","#2C7E65","#2E8167","#2F8469","#30866C","#31896E","#328C71","#349073","#349375","#359578","#36987A","#379B7D","#389D7F","#39A081","#3BA384","#3CA686","#3CA987","#3DAC8A","#3EAE8C","#3FB18F","#40B491","#41B693","#43B995","#44BC97","#44BF9A","#45C19C","#46C49D","#47C7A0","#48C9A2","#49CCA4","#4ACEA6","#4BD2A8","#4FD2AA","#52D2AB","#55D3AD","#58D4AE","#5BD5AF","#5ED6B1","#61D7B3","#65D7B4","#68D7B5","#6BD8B6","#6ED9B8","#71DABA","#74DBBB","#77DCBC","#7ADCBD","#7EDDBF","#81DDC1","#84DEC1","#86DFC3","#89E0C5","#8CE1C6","#8FE1C7","#92E2C8","#95E3CA","#98E3CC","#9BE4CD","#9DE5CE","#A0E6CF","#A3E6D1","#A6E7D2","#A8E8D3","#ACE9D5","#AEE9D6","#B1EAD7","#B4EAD9","#B6EBDA","#B9ECDC","#BBEDDD","#BEEEDE","#C1EFE0","#C4EFE1","#C7EFE2","#C9F0E4","#CCF1E5","#CEF2E6","#D1F3E7","#D3F3E9","#D7F4EA","#D9F4EB","#DCF5ED","#DEF6EF","#E1F7EF","#E3F7F1","#E6F8F2","#E8F9F3","#EBFAF5","#EEFAF6","#F0FBF7","#F3FBF8","#F5FCFA","#F7FDFB","#FAFEFC","#FCFFFE","#000001","#000705","#030C09","#03130E","#051711","#071B16","#072119","#09251D","#0A2A1F","#0A2E23","#0C3126","#0C362A","#0E392C","#0F3D30","#0F4132","#114536","#134938","#134C3C","#14503E","#145440","#165744","#175A46","#175E49","#19614B","#1A654F","#1A6851","#1B6B54","#1B6F56","#1D7259","#1E755B","#1E795E","#1F7C60","#218063","#218365","#228668","#22896A","#238C6D","#258F6F","#259371","#269574","#279976","#279C79","#299E7B","#29A27E","#2AA580","#2BA783","#2BAB85","#2CAE87","#2EB189","#2EB48C","#2FB68E","#2FBA91","#30BC93","#31BF95","#31C297","#32C599","#34C89C","#34CB9D","#35CDA0","#35D1A2","#36D3A5","#37D6A6","#37D9A9","#38DCAB","#39DFAE","#3DDFAE","#40E0B0","#45E0B1","#48E1B3","#4BE1B4","#50E1B5","#53E2B6","#57E3B8","#5AE3B9","#5DE4BB","#61E4BC","#64E5BD","#67E6BF","#6BE6C0","#6EE6C1","#72E7C2","#75E7C4","#78E8C5","#7CE8C7","#7FE9C7","#82EAC9","#86EACA","#88EACC","#8CEBCD","#8FEBCE","#92ECCF","#95ECD1","#98EDD2","#9BEED3","#9EEED5","#A1EFD6","#A5EFD7","#A7EFD8","#AAF0DA","#AEF0DB","#B0F1DC","#B3F2DD","#B6F2DF","#B9F3E0","#BCF3E1","#BFF3E2","#C1F4E4","#C5F4E5","#C7F5E6","#CAF6E7","#CDF6E9","#D0F7EA","#D3F7EB","#D6F7ED","#D8F8EE","#DCF8EF","#DEF9F0","#E1FAF2","#E4FAF3","#E6FBF4","#EAFBF5","#ECFBF7","#EFFCF7","#F2FCF9","#F4FDFA","#F7FEFB","#FAFEFC","#FCFFFE","#000001","#000705","#000E0A","#03130E","#031913","#031E16","#05221A","#05271D","#072C21","#073025","#073527","#09382B","#093D2E","#094131","#0A4534","#0A4937","#0C4E39","#0C513D","#0C5540","#0E5843","#0E5C46","#0E6048","#0F634B","#0F674E","#116B51","#116E53","#117256","#137559","#13795B","#137D5E","#148060","#148463","#168765","#168A68","#168E6A","#17916D","#179470","#179872","#199B75","#199E77","#1AA27A","#1AA57C","#1AA87F","#1BAB82","#1BAE84","#1BB286","#1DB588","#1DB88B","#1EBB8D","#1EBE90","#1EC192","#1FC494","#1FC797","#1FCB99","#21CD9C","#21D19D","#22D4A0","#22D7A2","#22DAA5","#23DCA6","#23E0A9","#23E3AC","#25E6AE","#25E9B0","#26ECB2","#2AECB4","#2FECB5","#32EDB6","#37EDB7","#3CEDB8","#3FEEBA","#44EEBB","#48EFBC","#4BEFBD","#50EFBF","#53EFC0","#57EFC1","#5BEFC2","#5EF0C3","#62F0C5","#66F1C6","#69F1C7","#6DF1C8","#70F2CA","#74F2CB","#78F2CD","#7BF3CD","#7FF3CE","#83F3D0","#86F3D1","#89F3D2","#8CF4D3","#90F4D5","#93F4D6","#96F5D7","#9AF5D8","#9DF6D9","#A0F6DB","#A4F6DC","#A6F7DD","#AAF7DE","#AEF7E0","#B0F7E1","#B4F7E1","#B7F8E3","#BAF8E4","#BDF8E6","#C0F9E6","#C3F9E8","#C7F9E9","#C9FAEA","#CDFAEB","#D0FBEC","#D2FBEE","#D6FBEF","#D8FBF0","#DCFBF1","#DFFBF3","#E1FCF3","#E5FCF5","#E8FDF6","#EAFDF7","#EEFDF8","#F0FEF9","#F3FEFB","#F7FEFB","#F9FFFD","#FCFFFE","#000001","#000705","#000E0A","#00140E","#001A13","#001F17","#00251A","#002A1E","#032F22","#033225","#033729","#033C2C","#03402F","#034532","#034936","#034E38","#05523C","#05553E","#055941","#055D45","#056147","#05654A","#05694E","#056D50","#077153","#077456","#077858","#077C5B","#07805E","#078460","#078763","#078B65","#098F68","#09926B","#09956D","#099970","#099D73","#09A075","#09A478","#09A77B","#0AAB7D","#0AAE80","#0AB183","#0AB585","#0AB887","#0ABB8A","#0ABF8C","#0AC28F","#0CC691","#0CC893","#0CCC96","#0CCF98","#0CD29B","#0CD69D","#0CD99F","#0CDCA2","#0EE0A5","#0EE2A6","#0EE6A9","#0EE9AC","#0EECAE","#0EEFB0","#0EF3B2","#0EF6B5","#0FF9B7","#14F9B8","#1AF9B9","#1FF9BB","#25F9BB","#2AF9BD","#2FF9BE","#34F9BF","#38FAC1","#3CFAC1","#40FAC2","#45FAC4","#49FAC5","#4EFAC6","#52FAC7","#56FAC8","#5AFBC9","#5DFBCB","#61FBCC","#65FBCD","#69FBCE","#6DFBCF","#71FBD1","#75FBD2","#79FBD2","#7CFBD4","#80FBD5","#84FBD6","#87FBD7","#8BFBD8","#8FFBD9","#93FBDB","#96FCDC","#99FCDC","#9DFCDE","#A0FCDF","#A4FCE1","#A7FCE1","#ABFCE2","#AEFCE4","#B2FDE5","#B5FDE6","#B8FDE7","#BBFDE8","#BFFDE9","#C2FDEA","#C6FDEB","#C9FDEC","#CDFEEE","#CFFEEF","#D2FEF0","#D6FEF1","#D9FEF2","#DCFEF3","#E0FEF4","#E3FEF5","#E6FFF7","#E9FFF7","#ECFFF8","#EFFFFA","#F3FFFB","#F6FFFB","#F9FFFD","#FCFFFE","#000001","#030505","#070909","#0A0C0C","#0E0F0F","#111313","#141616","#171919","#1A1D1B","#1B1F1E","#1E2221","#212523","#232726","#262A29","#292C2B","#2B2F2E","#2E3231","#2F3534","#313736","#343938","#363C3B","#383E3D","#3B403F","#3D4341","#3F4644","#404846","#434A48","#454C4A","#474F4C","#49514F","#4B5351","#4E5554","#505856","#515A58","#535C5A","#555E5C","#57605E","#596260","#5B6462","#5D6664","#5F6966","#606B68","#626D6A","#646F6C","#66716E","#687370","#6A7573","#6C7775","#6E7A77","#6F7C79","#717E7B","#73807D","#75827F","#778481","#798683","#7B8785","#7D8A86","#7E8C88","#808E8A","#82908C","#84928E","#869391","#879593","#899794","#8B9A96","#8D9B98","#8F9D9A","#919E9C","#93A09D","#94A29E","#96A4A0","#98A6A2","#9BA7A4","#9DA8A6","#9EAAA7","#A0ACA9","#A2AEAB","#A4AFAD","#A6B1AE","#A7B3B0","#AAB5B2","#ACB5B4","#AEB7B5","#AFB9B6","#B1BBB8","#B3BCBA","#B5BEBB","#B6C0BD","#B9C1BF","#BBC2C1","#BCC4C2","#BEC6C4","#C0C7C6","#C1C9C7","#C3CBC9","#C5CDCB","#C7CECD","#C9CFCE","#CBD1CF","#CDD2D1","#CED4D2","#D0D6D4","#D2D7D6","#D3D9D7","#D6DBD9","#D7DCDB","#D9DDDC","#DBDFDE","#DCE1E0","#DEE2E1","#E0E4E3","#E1E6E5","#E4E7E6","#E6E8E7","#E7EAE9","#E9EBEA","#EAEDEC","#ECEFEE","#EEF0EF","#EFF2F1","#F2F3F3","#F3F4F4","#F5F6F6","#F7F7F7","#F8F9F9","#FAFBFB","#FBFCFC","#FDFEFE","#000001","#030505","#070909","#090E0C","#0C110F","#0F1413","#111917","#141B1A","#171F1D","#19221F","#1B2522","#1D2926","#1F2B29","#222E2B","#23312E","#263430","#293734","#2A3936","#2C3C38","#2E3F3B","#30413D","#324440","#344743","#364945","#384C47","#394F49","#3C514C","#3D544F","#3F5651","#415853","#435B55","#455D58","#47605A","#48625C","#4A645E","#4B6760","#4E6963","#506B65","#516E67","#537069","#55736B","#56756E","#587770","#597A72","#5B7C74","#5D7E76","#5E8179","#60837B","#62867D","#63877F","#658981","#668C84","#688E86","#6A9087","#6B9389","#6D948B","#6F978E","#709990","#729B92","#739D93","#759F95","#77A198","#78A49A","#7AA69C","#7CA89D","#7EA99F","#80ABA1","#83ACA3","#85AEA4","#86AFA6","#89B0A7","#8BB2A9","#8EB4AB","#90B5AC","#92B6AE","#94B7AF","#96B9B1","#98BBB3","#9BBBB4","#9DBDB5","#9FBFB7","#A1C0B9","#A3C1BB","#A6C2BB","#A7C4BD","#A9C6BF","#ACC7C1","#AEC8C2","#B0CAC3","#B2CBC5","#B4CDC7","#B6CDC8","#B8CFCA","#BAD1CB","#BCD2CD","#BED3CE","#C1D5D0","#C2D6D2","#C4D7D2","#C7D8D4","#C8DAD6","#CADCD7","#CDDCD9","#CEDEDA","#D1E0DC","#D2E1DD","#D4E2DF","#D7E3E1","#D8E5E1","#DAE6E3","#DCE7E5","#DEE9E6","#E1EAE8","#E2EBE9","#E4EDEA","#E6EEEC","#E8EFEE","#EAF1EF","#ECF2F0","#EEF3F2","#F0F5F3","#F2F6F5","#F3F7F7","#F6F8F7","#F7FAF9","#F9FBFB","#FBFCFC","#FDFEFE","#000001","#030505","#050A09","#090E0C","#0A1311","#0C1714","#0F1A17","#111E1B","#14221E","#162521","#172925","#1A2B27","#1B2F2A","#1D322E","#1F3530","#213832","#233C36","#253E38","#26413B","#29443E","#2A4740","#2B4A43","#2E4C46","#2F5048","#31534A","#32554E","#345850","#365A52","#375D55","#386057","#3B6259","#3C655C","#3E685E","#3F6A60","#406D63","#436F65","#447267","#45756A","#47776C","#487A6E","#4A7D71","#4B7F73","#4C8275","#4F8478","#50867A","#51897C","#538B7F","#548E81","#569183","#579386","#589587","#5A9789","#5B9A8C","#5C9D8E","#5E9E90","#5FA193","#61A494","#62A696","#63A899","#65AA9B","#66AD9D","#67AF9F","#69B1A1","#6AB4A3","#6CB6A6","#6EB7A6","#71B8A8","#73BAAA","#76BBAB","#79BBAD","#7BBDAE","#7EBEAF","#81C0B1","#83C1B3","#86C1B4","#87C3B5","#8AC4B7","#8DC5B8","#8FC7BA","#92C7BB","#94C9BC","#96CABE","#99CBC0","#9BCDC1","#9DCDC2","#A0CEC4","#A2D0C5","#A5D1C7","#A7D2C8","#A9D3C9","#ACD4CB","#AED6CD","#B0D7CD","#B3D7CF","#B5D9D1","#B7DAD2","#BADCD3","#BBDCD5","#BEDDD6","#C0DFD7","#C2E0D9","#C5E1DA","#C7E2DC","#C9E3DD","#CCE5DE","#CDE6E0","#D0E6E1","#D2E8E2","#D4E9E4","#D7EAE6","#D8EBE6","#DBECE8","#DDEEEA","#DFEFEA","#E1EFEC","#E3F1EE","#E6F2EF","#E8F3F0","#EAF4F2","#ECF5F3","#EFF7F4","#F0F7F6","#F3F8F7","#F4FAF8","#F7FBFA","#F9FBFB","#FBFDFC","#FDFEFE","#000001","#030505","#050A09","#070F0E","#091411","#0A1916","#0C1D19","#0E211D","#11251F","#132723","#142B26","#162F2A","#17322C","#193630","#1A3932","#1B3D35","#1E4038","#1F433B","#21463E","#224940","#234C44","#255046","#265349","#27564B","#2A594F","#2B5B51","#2C5E54","#2E6156","#2F6459","#30675B","#316A5D","#326D60","#357062","#367265","#377567","#38786A","#397B6C","#3B7E6F","#3C8171","#3D8474","#3F8676","#408879","#418B7B","#438E7D","#449180","#459382","#469685","#479986","#499C89","#4A9D8B","#4BA08E","#4CA390","#4EA693","#4FA894","#50AB97","#51AE99","#53B09C","#54B29D","#55B59F","#56B7A2","#57BAA4","#58BCA6","#59BFA8","#5AC1AB","#5CC4AD","#5EC5AE","#61C6AF","#64C7B1","#67C7B2","#6AC8B4","#6DC9B5","#70CAB6","#73CCB8","#75CDB9","#78CDBB","#7BCEBB","#7ECFBD","#81D0BE","#84D1C0","#86D2C1","#89D3C2","#8BD4C3","#8ED5C5","#91D6C6","#93D7C7","#96D7C8","#99D8CA","#9CD9CC","#9EDBCD","#A0DCCE","#A3DCCF","#A6DDD1","#A8DED2","#ABDFD3","#AEE0D4","#B0E1D6","#B3E2D7","#B5E3D8","#B7E4D9","#BAE5DB","#BCE6DC","#BFE6DD","#C1E7DF","#C4E8E0","#C7EAE1","#C8EAE2","#CBEBE4","#CDECE5","#D0EDE6","#D2EEE7","#D5EFE9","#D7EFEA","#DAF1EB","#DCF2EC","#DEF3EE","#E1F3EF","#E3F4F0","#E6F5F2","#E8F6F3","#EAF7F4","#EDF8F5","#EFF9F7","#F1FAF7","#F3FBF9","#F6FBFA","#F8FCFB","#FBFDFC","#FDFEFE","#000001","#000705","#030C0A","#05110E","#071613","#091A16","#0A1E1A","#0C221E","#0E2721","#0E2B25","#0F2F27","#11322B","#13362F","#143931","#163D35","#174037","#19453B","#19483E","#1A4B40","#1B4F44","#1D5246","#1E5549","#1F584C","#215B4F","#225F52","#226254","#236557","#25685A","#266B5C","#276E5F","#297161","#2A7464","#2B7867","#2B7B69","#2C7E6C","#2E816E","#2F8471","#308674","#318976","#328C79","#34907B","#34937E","#359581","#369883","#379B86","#389D87","#39A08A","#3BA38D","#3CA68F","#3CA992","#3DAC93","#3EAE96","#3FB199","#40B49B","#41B69D","#43B99F","#44BCA2","#44BFA5","#45C1A6","#46C4A9","#47C7AB","#48C9AE","#49CCB0","#4ACEB2","#4BD2B5","#4FD2B5","#52D2B7","#55D3B8","#58D4B9","#5BD5BB","#5ED6BB","#61D7BD","#65D7BE","#68D7BF","#6BD8C1","#6ED9C1","#71DAC3","#74DBC4","#77DCC5","#7ADCC7","#7EDDC7","#81DDC9","#84DECA","#86DFCB","#89E0CD","#8CE1CD","#8FE1CF","#92E2D0","#95E3D1","#98E3D2","#9BE4D3","#9DE5D5","#A0E6D6","#A3E6D7","#A6E7D8","#A8E8D9","#ACE9DB","#AEE9DC","#B1EADC","#B4EADE","#B6EBDF","#B9ECE1","#BBEDE1","#BEEEE2","#C1EFE4","#C4EFE5","#C7EFE6","#C9F0E7","#CCF1E8","#CEF2EA","#D1F3EA","#D3F3EC","#D7F4ED","#D9F4EE","#DCF5EF","#DEF6F0","#E1F7F2","#E3F7F3","#E6F8F3","#E8F9F5","#EBFAF6","#EEFAF7","#F0FBF8","#F3FBF9","#F5FCFB","#F7FDFB","#FAFEFD","#FCFFFE","#000001","#000705","#030C0A","#03130F","#051713","#071B17","#07211B","#09251F","#0A2A22","#0A2E26","#0C312A","#0C362E","#0E3930","#0F3D34","#0F4137","#114539","#13493D","#134C40","#145044","#145446","#165749","#175A4C","#175E50","#196152","#1A6555","#1A6858","#1B6B5A","#1B6F5D","#1D7260","#1E7563","#1E7965","#1F7C68","#21806B","#21836E","#228670","#228973","#238C76","#258F79","#25937B","#26957E","#279981","#279C83","#299E86","#29A288","#2AA58B","#2BA78D","#2BAB90","#2CAE93","#2EB195","#2EB497","#2FB69A","#2FBA9D","#30BC9E","#31BFA1","#31C2A4","#32C5A6","#34C8A8","#34CBAB","#35CDAE","#35D1B0","#36D3B2","#37D6B5","#37D9B7","#38DCBA","#39DFBB","#3DDFBD","#40E0BE","#45E0BF","#48E1C0","#4BE1C1","#50E1C2","#53E2C3","#57E3C4","#5AE3C6","#5DE4C7","#61E4C7","#64E5C8","#67E6CA","#6BE6CB","#6EE6CC","#72E7CD","#75E7CE","#78E8CF","#7CE8D0","#7FE9D2","#82EAD2","#86EAD3","#88EAD4","#8CEBD6","#8FEBD7","#92ECD7","#95ECD9","#98EDDA","#9BEEDB","#9EEEDC","#A1EFDD","#A5EFDE","#A7EFDF","#AAF0E0","#AEF0E1","#B0F1E2","#B3F2E3","#B6F2E4","#B9F3E6","#BCF3E6","#BFF3E7","#C1F4E9","#C5F4EA","#C7F5EA","#CAF6EB","#CDF6ED","#D0F7EE","#D3F7EF","#D6F7EF","#D8F8F1","#DCF8F2","#DEF9F3","#E1FAF4","#E4FAF5","#E6FBF6","#EAFBF7","#ECFBF8","#EFFCF9","#F2FCFA","#F4FDFB","#F7FEFC","#FAFEFD","#FCFFFE","#000001","#000705","#000E0A","#03130F","#031914","#031E19","#05221D","#052721","#072C23","#073027","#07352B","#09382F","#093D32","#094136","#0A4539","#0A493C","#0C4E3F","#0C5143","#0C5546","#0E5849","#0E5C4C","#0E6050","#0F6352","#0F6755","#116B58","#116E5B","#11725E","#137561","#137964","#137D67","#148069","#14846C","#16876F","#168A72","#168E75","#179178","#17947B","#17987D","#199B80","#199E83","#1AA286","#1AA588","#1AA88B","#1BAB8E","#1BAE90","#1BB293","#1DB595","#1DB898","#1EBB9B","#1EBE9D","#1EC1A0","#1FC4A3","#1FC7A5","#1FCBA7","#21CDAA","#21D1AD","#22D4AF","#22D7B2","#22DAB5","#23DCB6","#23E0B9","#23E3BB","#25E6BE","#25E9C1","#26ECC3","#2AECC4","#2FECC5","#32EDC6","#37EDC7","#3CEDC7","#3FEEC9","#44EECA","#48EFCB","#4BEFCC","#50EFCD","#53EFCD","#57EFCE","#5BEFD0","#5EF0D1","#62F0D2","#66F1D2","#69F1D3","#6DF1D4","#70F2D5","#74F2D6","#78F2D7","#7BF3D8","#7FF3D9","#83F3DA","#86F3DB","#89F3DC","#8CF4DC","#90F4DE","#93F4DF","#96F5E0","#9AF5E1","#9DF6E1","#A0F6E2","#A4F6E3","#A6F7E5","#AAF7E6","#AEF7E6","#B0F7E7","#B4F7E8","#B7F8E9","#BAF8EA","#BDF8EA","#C0F9EC","#C3F9ED","#C7F9EE","#C9FAEF","#CDFAEF","#D0FBF0","#D2FBF1","#D6FBF3","#D8FBF3","#DCFBF4","#DFFBF5","#E1FCF6","#E5FCF7","#E8FDF7","#EAFDF9","#EEFDFA","#F0FEFB","#F3FEFB","#F7FEFC","#F9FFFD","#FCFFFE","#000001","#000705","#000E0A","#00140F","#001A14","#001F19","#00251D","#002A21","#032F25","#033229","#03372C","#033C30","#034034","#034537","#03493B","#034E3E","#055241","#055545","#055948","#055D4B","#05614F","#056552","#056955","#056D58","#07715B","#07745E","#077861","#077C64","#078067","#07846A","#07876D","#078B70","#098F73","#099276","#099579","#09997C","#099D7F","#09A082","#09A485","#09A787","#0AAB8A","#0AAE8D","#0AB190","#0AB593","#0AB895","#0ABB98","#0ABF9B","#0AC29D","#0CC6A0","#0CC8A3","#0CCCA6","#0CCFA8","#0CD2AB","#0CD6AE","#0CD9B0","#0CDCB3","#0EE0B5","#0EE2B8","#0EE6BB","#0EE9BD","#0EECC0","#0EEFC2","#0EF3C5","#0EF6C7","#0FF9CA","#14F9CB","#1AF9CC","#1FF9CD","#25F9CD","#2AF9CE","#2FF9CF","#34F9D0","#38FAD1","#3CFAD2","#40FAD2","#45FAD3","#49FAD4","#4EFAD5","#52FAD6","#56FAD7","#5AFBD7","#5DFBD8","#61FBD9","#65FBDA","#69FBDB","#6DFBDC","#71FBDC","#75FBDD","#79FBDE","#7CFBDF","#80FBE0","#84FBE1","#87FBE1","#8BFBE2","#8FFBE3","#93FBE4","#96FCE5","#99FCE6","#9DFCE6","#A0FCE7","#A4FCE8","#A7FCE9","#ABFCEA","#AEFCEA","#B2FDEB","#B5FDEC","#B8FDED","#BBFDEE","#BFFDEF","#C2FDEF","#C6FDF0","#C9FDF1","#CDFEF2","#CFFEF3","#D2FEF3","#D6FEF4","#D9FEF5","#DCFEF6","#E0FEF7","#E3FEF7","#E6FFF8","#E9FFF9","#ECFFFA","#EFFFFB","#F3FFFB","#F6FFFC","#F9FFFD","#FCFFFE","#000001","#030505","#070909","#0A0C0C","#0E0F0F","#111313","#141616","#171919","#1A1D1B","#1B1F1E","#1E2221","#212523","#232727","#262A2A","#292C2C","#2B2F2F","#2E3231","#2F3534","#313736","#343938","#363C3B","#383E3D","#3B403F","#3D4343","#3F4645","#404847","#434A49","#454C4B","#474F4E","#495150","#4B5352","#4E5554","#505856","#515A58","#535C5B","#555E5D","#57605F","#596261","#5B6463","#5D6665","#5F6967","#606B69","#626D6B","#646F6D","#66716F","#687372","#6A7574","#6C7776","#6E7A78","#6F7C7A","#717E7C","#73807E","#758280","#778482","#798684","#7B8786","#7D8A88","#7E8C8A","#808E8C","#82908E","#849290","#869392","#879593","#899795","#8B9A97","#8D9B99","#8F9D9B","#919E9D","#93A09E","#94A2A0","#96A4A2","#98A6A4","#9BA7A6","#9DA8A6","#9EAAA8","#A0ACAA","#A2AEAC","#A4AFAE","#A6B1AF","#A7B3B1","#AAB5B3","#ACB5B5","#AEB7B6","#AFB9B8","#B1BBB9","#B3BCBB","#B5BEBC","#B6C0BE","#B9C1C0","#BBC2C1","#BCC4C3","#BEC6C5","#C0C7C7","#C1C9C8","#C3CBCA","#C5CDCB","#C7CECD","#C9CFCE","#CBD1D0","#CDD2D2","#CED4D3","#D0D6D5","#D2D7D7","#D3D9D8","#D6DBDA","#D7DCDC","#D9DDDC","#DBDFDE","#DCE1E0","#DEE2E1","#E0E4E3","#E1E6E5","#E4E7E6","#E6E8E8","#E7EAEA","#E9EBEB","#EAEDED","#ECEFEE","#EEF0EF","#EFF2F1","#F2F3F3","#F3F4F4","#F5F6F6","#F7F7F7","#F8F9F9","#FAFBFB","#FBFCFC","#FDFEFE","#000001","#030505","#070909","#090E0C","#0C1111","#0F1414","#111917","#141B1A","#171F1E","#192221","#1B2523","#1D2926","#1F2B2A","#222E2C","#23312F","#263432","#293735","#2A3937","#2C3C39","#2E3F3D","#30413F","#324441","#344744","#364947","#384C49","#394F4B","#3C514F","#3D5451","#3F5653","#415855","#435B58","#455D5A","#47605C","#48625E","#4A6461","#4B6763","#4E6965","#506B67","#516E6A","#53706C","#55736E","#567571","#587773","#597A75","#5B7C77","#5D7E7A","#5E817C","#60837E","#628680","#638783","#658985","#668C86","#688E89","#6A908B","#6B938D","#6D948F","#6F9792","#709993","#729B95","#739D97","#759F9A","#77A19C","#78A49D","#7AA69F","#7CA8A2","#7EA9A3","#80ABA5","#83ACA6","#85AEA8","#86AFA9","#89B0AB","#8BB2AD","#8EB4AE","#90B5AF","#92B6B1","#94B7B3","#96B9B5","#98BBB5","#9BBBB7","#9DBDB9","#9FBFBA","#A1C0BB","#A3C1BD","#A6C2BF","#A7C4C0","#A9C6C1","#ACC7C3","#AEC8C5","#B0CAC6","#B2CBC7","#B4CDC9","#B6CDCA","#B8CFCC","#BAD1CD","#BCD2CF","#BED3D0","#C1D5D2","#C2D6D3","#C4D7D5","#C7D8D6","#C8DAD7","#CADCD9","#CDDCDB","#CEDEDC","#D1E0DD","#D2E1DF","#D4E2E0","#D7E3E1","#D8E5E3","#DAE6E5","#DCE7E6","#DEE9E7","#E1EAE9","#E2EBEA","#E4EDEB","#E6EEED","#E8EFEF","#EAF1EF","#ECF2F1","#EEF3F3","#F0F5F4","#F2F6F5","#F3F7F7","#F6F8F8","#F7FAFA","#F9FBFB","#FBFCFC","#FDFEFE","#000001","#030505","#050A09","#090E0E","#0A1311","#0C1716","#0F1A19","#111E1D","#14221F","#162523","#172926","#1A2B29","#1B2F2C","#1D322F","#1F3532","#213835","#233C38","#253E3B","#26413E","#294440","#2A4743","#2B4A46","#2E4C48","#2F504B","#31534E","#325551","#345853","#365A56","#375D58","#38605B","#3B625D","#3C655F","#3E6862","#3F6A64","#406D67","#436F69","#44726C","#45756E","#477771","#487A73","#4A7D75","#4B7F78","#4C827A","#4F847D","#50867F","#518982","#538B84","#548E86","#569188","#57938B","#58958D","#5A978F","#5B9A92","#5C9D93","#5E9E96","#5FA198","#61A49B","#62A69D","#63A89F","#65AAA1","#66ADA3","#67AFA6","#69B1A7","#6AB4AA","#6CB6AC","#6EB7AE","#71B8AE","#73BAB0","#76BBB1","#79BBB3","#7BBDB5","#7EBEB5","#81C0B7","#83C1B8","#86C1BA","#87C3BB","#8AC4BC","#8DC5BD","#8FC7BF","#92C7C1","#94C9C1","#96CAC3","#99CBC4","#9BCDC6","#9DCDC7","#A0CEC8","#A2D0C9","#A5D1CB","#A7D2CC","#A9D3CD","#ACD4CF","#AED6D0","#B0D7D2","#B3D7D2","#B5D9D4","#B7DAD5","#BADCD7","#BBDCD7","#BEDDD9","#C0DFDB","#C2E0DC","#C5E1DD","#C7E2DE","#C9E3E0","#CCE5E1","#CDE6E2","#D0E6E3","#D2E8E5","#D4E9E6","#D7EAE7","#D8EBE9","#DBECEA","#DDEEEB","#DFEFEC","#E1EFEE","#E3F1EF","#E6F2F0","#E8F3F1","#EAF4F3","#ECF5F4","#EFF7F5","#F0F7F7","#F3F8F7","#F4FAF9","#F7FBFA","#F9FBFB","#FBFDFC","#FDFEFE","#000001","#030505","#050A0A","#070F0E","#091413","#0A1917","#0C1D1A","#0E211E","#112522","#132725","#142B29","#162F2B","#17322F","#193632","#1A3935","#1B3D38","#1E403C","#1F433E","#214641","#224944","#234C47","#25504A","#26534C","#275650","#2A5953","#2B5B55","#2C5E58","#2E615A","#2F645D","#306760","#316A62","#326D65","#357068","#36726A","#37756D","#387870","#397B72","#3B7E75","#3C8177","#3D847A","#3F867D","#40887F","#418B82","#438E85","#449186","#459389","#46968B","#47998E","#499C91","#4A9D93","#4BA095","#4CA398","#4EA69A","#4FA89D","#50AB9E","#51AEA1","#53B0A4","#54B2A6","#55B5A8","#56B7AB","#57BAAD","#58BCAF","#59BFB1","#5AC1B4","#5CC4B6","#5EC5B7","#61C6B8","#64C7BA","#67C7BB","#6AC8BC","#6DC9BD","#70CABE","#73CCC0","#75CDC1","#78CDC1","#7BCEC3","#7ECFC4","#81D0C6","#84D1C7","#86D2C7","#89D3C9","#8BD4CA","#8ED5CB","#91D6CD","#93D7CD","#96D7CF","#99D8D0","#9CD9D1","#9EDBD2","#A0DCD3","#A3DCD4","#A6DDD6","#A8DED7","#ABDFD8","#AEE0D9","#B0E1DA","#B3E2DC","#B5E3DC","#B7E4DD","#BAE5DF","#BCE6E0","#BFE6E1","#C1E7E2","#C4E8E3","#C7EAE5","#C8EAE6","#CBEBE6","#CDECE8","#D0EDE9","#D2EEEA","#D5EFEB","#D7EFEC","#DAF1EE","#DCF2EF","#DEF3EF","#E1F3F1","#E3F4F2","#E6F5F3","#E8F6F4","#EAF7F5","#EDF8F7","#EFF9F7","#F1FAF8","#F3FBFA","#F6FBFB","#F8FCFB","#FBFDFD","#FDFEFE","#000001","#000705","#030C0A","#05110F","#071614","#091A19","#0A1E1B","#0C221F","#0E2723","#0E2B27","#0F2F2B","#11322E","#133631","#143935","#163D38","#17403C","#19453E","#194841","#1A4B45","#1B4F48","#1D524B","#1E554E","#1F5851","#215B54","#225F57","#22625A","#23655D","#25685F","#266B62","#276E65","#297168","#2A746B","#2B786D","#2B7B70","#2C7E73","#2E8176","#2F8479","#30867B","#31897E","#328C81","#349084","#349386","#359588","#36988B","#379B8E","#389D91","#39A093","#3BA396","#3CA698","#3CA99B","#3DAC9D","#3EAEA0","#3FB1A3","#40B4A5","#41B6A7","#43B9AA","#44BCAD","#44BFAF","#45C1B1","#46C4B4","#47C7B6","#48C9B9","#49CCBB","#4ACEBD","#4BD2C0","#4FD2C1","#52D2C2","#55D3C3","#58D4C4","#5BD5C5","#5ED6C6","#61D7C7","#65D7C8","#68D7C9","#6BD8CA","#6ED9CB","#71DACD","#74DBCD","#77DCCE","#7ADCCF","#7EDDD0","#81DDD2","#84DED2","#86DFD3","#89E0D4","#8CE1D5","#8FE1D6","#92E2D7","#95E3D8","#98E3D9","#9BE4DA","#9DE5DB","#A0E6DC","#A3E6DD","#A6E7DE","#A8E8DF","#ACE9E0","#AEE9E1","#B1EAE2","#B4EAE3","#B6EBE4","#B9ECE5","#BBEDE6","#BEEEE7","#C1EFE8","#C4EFE9","#C7EFEA","#C9F0EA","#CCF1EC","#CEF2ED","#D1F3EE","#D3F3EF","#D7F4EF","#D9F4F1","#DCF5F2","#DEF6F3","#E1F7F3","#E3F7F4","#E6F8F6","#E8F9F7","#EBFAF7","#EEFAF8","#F0FBF9","#F3FBFB","#F5FCFB","#F7FDFC","#FAFEFD","#FCFFFE","#000001","#000705","#030C0A","#03130F","#051714","#071B19","#07211D","#092521","#0A2A25","#0A2E29","#0C312C","#0C3630","#0E3934","#0F3D37","#0F413B","#11453E","#134941","#134C45","#145048","#14544B","#16574F","#175A52","#175E55","#196158","#1A655B","#1A685E","#1B6B61","#1B6F64","#1D7267","#1E756A","#1E796D","#1F7C70","#218073","#218376","#228679","#22897C","#238C7F","#258F82","#259385","#269587","#27998A","#279C8D","#299E90","#29A293","#2AA595","#2BA798","#2BAB9B","#2CAE9D","#2EB1A0","#2EB4A3","#2FB6A6","#2FBAA8","#30BCAB","#31BFAE","#31C2B0","#32C5B3","#34C8B5","#34CBB8","#35CDBB","#35D1BD","#36D3C0","#37D6C2","#37D9C5","#38DCC7","#39DFCA","#3DDFCB","#40E0CC","#45E0CD","#48E1CD","#4BE1CE","#50E1CF","#53E2D0","#57E3D1","#5AE3D2","#5DE4D2","#61E4D3","#64E5D4","#67E6D5","#6BE6D6","#6EE6D7","#72E7D7","#75E7D8","#78E8D9","#7CE8DA","#7FE9DB","#82EADC","#86EADC","#88EADD","#8CEBDE","#8FEBDF","#92ECE0","#95ECE1","#98EDE1","#9BEEE2","#9EEEE3","#A1EFE4","#A5EFE5","#A7EFE6","#AAF0E6","#AEF0E7","#B0F1E8","#B3F2E9","#B6F2EA","#B9F3EA","#BCF3EB","#BFF3EC","#C1F4ED","#C5F4EE","#C7F5EF","#CAF6EF","#CDF6F0","#D0F7F1","#D3F7F2","#D6F7F3","#D8F8F3","#DCF8F4","#DEF9F5","#E1FAF6","#E4FAF7","#E6FBF7","#EAFBF8","#ECFBF9","#EFFCFA","#F2FCFB","#F4FDFB","#F7FEFC","#FAFEFD","#FCFFFE","#000001","#000707","#000E0C","#031311","#031916","#031E1A","#05221F","#052723","#072C27","#07302B","#07352F","#093832","#093D37","#09413B","#0A453E","#0A4941","#0C4E45","#0C5148","#0C554C","#0E5850","#0E5C53","#0E6056","#0F6359","#0F675C","#116B60","#116E63","#117266","#137569","#13796C","#137D6F","#148073","#148476","#168779","#168A7C","#168E7F","#179182","#179486","#179888","#199B8B","#199E8E","#1AA291","#1AA593","#1AA897","#1BAB9A","#1BAE9D","#1BB29F","#1DB5A2","#1DB8A5","#1EBBA8","#1EBEAB","#1EC1AE","#1FC4B0","#1FC7B3","#1FCBB5","#21CDB9","#21D1BB","#22D4BE","#22D7C1","#22DAC3","#23DCC6","#23E0C9","#23E3CC","#25E6CE","#25E9D1","#26ECD3","#2AECD4","#2FECD5","#32EDD6","#37EDD7","#3CEDD7","#3FEED7","#44EED8","#48EFD9","#4BEFDA","#50EFDB","#53EFDB","#57EFDC","#5BEFDC","#5EF0DD","#62F0DE","#66F1DF","#69F1DF","#6DF1E0","#70F2E1","#74F2E1","#78F2E2","#7BF3E3","#7FF3E3","#83F3E4","#86F3E5","#89F3E6","#8CF4E6","#90F4E7","#93F4E7","#96F5E8","#9AF5E9","#9DF6EA","#A0F6EA","#A4F6EB","#A6F7EB","#AAF7EC","#AEF7ED","#B0F7EE","#B4F7EF","#B7F8EF","#BAF8EF","#BDF8F0","#C0F9F1","#C3F9F2","#C7F9F3","#C9FAF3","#CDFAF3","#D0FBF4","#D2FBF5","#D6FBF6","#D8FBF7","#DCFBF7","#DFFBF7","#E1FCF8","#E5FCF9","#E8FDFA","#EAFDFB","#EEFDFB","#F0FEFB","#F3FEFC","#F7FEFD","#F9FFFE","#FCFFFF","#000001","#000707","#000E0C","#001413","#001A17","#001F1B","#002521","#002A25","#032F29","#03322E","#033731","#033C35","#034039","#03453D","#034940","#034E45","#055248","#05554B","#055950","#055D53","#056156","#05655A","#05695D","#056D60","#077164","#077467","#07786B","#077C6E","#078071","#078475","#078778","#078B7B","#098F7F","#099282","#099585","#099988","#099D8B","#09A08E","#09A492","#09A794","#0AAB97","#0AAE9B","#0AB19D","#0AB5A0","#0AB8A4","#0ABBA6","#0ABFA9","#0AC2AD","#0CC6AF","#0CC8B3","#0CCCB5","#0CCFB8","#0CD2BB","#0CD6BE","#0CD9C1","#0CDCC4","#0EE0C7","#0EE2C9","#0EE6CD","#0EE9CF","#0EECD2","#0EEFD5","#0EF3D7","#0EF6DA","#0FF9DD","#14F9DD","#1AF9DE","#1FF9DF","#25F9DF","#2AF9E0","#2FF9E1","#34F9E1","#38FAE1","#3CFAE2","#40FAE2","#45FAE3","#49FAE4","#4EFAE4","#52FAE5","#56FAE6","#5AFBE6","#5DFBE6","#61FBE6","#65FBE7","#69FBE8","#6DFBE8","#71FBE9","#75FBEA","#79FBEA","#7CFBEA","#80FBEB","#84FBEB","#87FBEC","#8BFBED","#8FFBED","#93FBEE","#96FCEF","#99FCEF","#9DFCEF","#A0FCF0","#A4FCF0","#A7FCF1","#ABFCF2","#AEFCF2","#B2FDF3","#B5FDF3","#B8FDF3","#BBFDF4","#BFFDF4","#C2FDF5","#C6FDF6","#C9FDF6","#CDFEF7","#CFFEF7","#D2FEF7","#D6FEF8","#D9FEF9","#DCFEF9","#E0FEFA","#E3FEFB","#E6FFFB","#E9FFFB","#ECFFFC","#EFFFFC","#F3FFFD","#F6FFFE","#F9FFFE","#FCFFFF","#000001","#030505","#070909","#0A0C0C","#0E0F0F","#111313","#141616","#171919","#1A1D1B","#1B1F1F","#1E2222","#212525","#232727","#262A2A","#292C2C","#2B2F2F","#2E3231","#2F3534","#313737","#343939","#363C3C","#383E3E","#3B4040","#3D4343","#3F4645","#404847","#434A49","#454C4C","#474F4F","#495151","#4B5353","#4E5555","#505857","#515A59","#535C5B","#555E5D","#576060","#596262","#5B6464","#5D6666","#5F6968","#606B6A","#626D6C","#646F6E","#667170","#687373","#6A7575","#6C7777","#6E7A79","#6F7C7B","#717E7D","#73807F","#758281","#778484","#798686","#7B8787","#7D8A89","#7E8C8B","#808E8D","#82908F","#849291","#869393","#879595","#899797","#8B9A99","#8D9B9B","#8F9D9D","#919E9D","#93A09F","#94A2A1","#96A4A3","#98A6A5","#9BA7A6","#9DA8A8","#9EAAAA","#A0ACAC","#A2AEAD","#A4AFAE","#A6B1B0","#A7B3B2","#AAB5B4","#ACB5B5","#AEB7B7","#AFB9B9","#B1BBBA","#B3BCBB","#B5BEBD","#B6C0BF","#B9C1C1","#BBC2C2","#BCC4C4","#BEC6C6","#C0C7C7","#C1C9C8","#C3CBCA","#C5CDCC","#C7CECD","#C9CFCF","#CBD1D1","#CDD2D2","#CED4D4","#D0D6D6","#D2D7D7","#D3D9D8","#D6DBDA","#D7DCDC","#D9DDDD","#DBDFDF","#DCE1E1","#DEE2E2","#E0E4E4","#E1E6E5","#E4E7E6","#E6E8E8","#E7EAEA","#E9EBEB","#EAEDED","#ECEFEF","#EEF0F0","#EFF2F2","#F2F3F3","#F3F4F4","#F5F6F6","#F7F7F7","#F8F9F9","#FAFBFB","#FBFCFC","#FDFEFE","#000001","#030505","#070909","#090E0E","#0C1111","#0F1414","#111919","#141B1B","#171F1E","#192222","#1B2525","#1D2927","#1F2B2B","#222E2E","#233130","#263434","#293736","#2A3938","#2C3C3C","#2E3F3E","#304140","#324444","#344746","#364948","#384C4B","#394F4E","#3C5150","#3D5453","#3F5655","#415857","#435B5A","#455D5C","#47605E","#486261","#4A6463","#4B6765","#4E6968","#506B6A","#516E6C","#53706F","#557371","#567573","#587776","#597A78","#5B7C7A","#5D7E7D","#5E817F","#608381","#628684","#638786","#658987","#668C8A","#688E8C","#6A908F","#6B9391","#6D9493","#6F9795","#709997","#729B99","#739D9C","#759F9D","#77A19F","#78A4A2","#7AA6A4","#7CA8A6","#7EA9A7","#80ABA9","#83ACAA","#85AEAC","#86AFAE","#89B0AE","#8BB2B0","#8EB4B2","#90B5B3","#92B6B5","#94B7B6","#96B9B7","#98BBB9","#9BBBBA","#9DBDBB","#9FBFBD","#A1C0BE","#A3C1C0","#A6C2C1","#A7C4C2","#A9C6C4","#ACC7C6","#AEC8C7","#B0CAC8","#B2CBCA","#B4CDCB","#B6CDCD","#B8CFCE","#BAD1CF","#BCD2D1","#BED3D2","#C1D5D3","#C2D6D5","#C4D7D7","#C7D8D7","#C8DAD9","#CADCDB","#CDDCDC","#CEDEDD","#D1E0DF","#D2E1E0","#D4E2E1","#D7E3E3","#D8E5E4","#DAE6E6","#DCE7E7","#DEE9E8","#E1EAEA","#E2EBEB","#E4EDEC","#E6EEEE","#E8EFEF","#EAF1F0","#ECF2F2","#EEF3F3","#F0F5F4","#F2F6F6","#F3F7F7","#F6F8F8","#F7FAFA","#F9FBFB","#FBFCFC","#FDFEFE","#000001","#030505","#050A0A","#090E0E","#0A1313","#0C1716","#0F1A1A","#111E1D","#142221","#162525","#172927","#1A2B2B","#1B2F2E","#1D3231","#1F3534","#213837","#233C3B","#253E3D","#264140","#294443","#2A4746","#2B4A48","#2E4C4B","#2F504F","#315351","#325554","#345856","#365A59","#375D5B","#38605E","#3B6260","#3C6563","#3E6866","#3F6A68","#406D6B","#436F6D","#447270","#457572","#477775","#487A78","#4A7D7A","#4B7F7D","#4C827F","#4F8482","#508684","#518986","#538B89","#548E8B","#56918E","#579390","#589593","#5A9794","#5B9A97","#5C9D9A","#5E9E9C","#5FA19E","#61A4A0","#62A6A3","#63A8A5","#65AAA7","#66ADA9","#67AFAC","#69B1AE","#6AB4B0","#6CB6B3","#6EB7B4","#71B8B5","#73BAB6","#76BBB7","#79BBB9","#7BBDBA","#7EBEBB","#81C0BC","#83C1BE","#86C1BF","#87C3C1","#8AC4C1","#8DC5C2","#8FC7C4","#92C7C5","#94C9C7","#96CAC7","#99CBC9","#9BCDCA","#9DCDCB","#A0CECD","#A2D0CD","#A5D1CF","#A7D2D0","#A9D3D2","#ACD4D2","#AED6D3","#B0D7D5","#B3D7D6","#B5D9D7","#B7DAD8","#BADCDA","#BBDCDB","#BEDDDC","#C0DFDD","#C2E0DE","#C5E1E0","#C7E2E1","#C9E3E2","#CCE5E3","#CDE6E5","#D0E6E6","#D2E8E6","#D4E9E8","#D7EAE9","#D8EBEA","#DBECEB","#DDEEED","#DFEFEE","#E1EFEF","#E3F1F0","#E6F2F1","#E8F3F3","#EAF4F3","#ECF5F5","#EFF7F6","#F0F7F7","#F3F8F8","#F4FAF9","#F7FBFB","#F9FBFB","#FBFDFD","#FDFEFE","#000001","#030505","#050A0A","#070F0F","#091414","#0A1917","#0C1D1B","#0E211F","#112523","#132727","#142B2A","#162F2E","#173231","#193635","#1A3938","#1B3D3B","#1E403E","#1F4341","#214645","#224948","#234C4A","#25504E","#265351","#275654","#2A5957","#2B5B59","#2C5E5C","#2E615F","#2F6462","#306764","#316A67","#326D6A","#35706D","#367270","#377572","#387875","#397B78","#3B7E7B","#3C817E","#3D8480","#3F8683","#408886","#418B88","#438E8B","#44918D","#459390","#469693","#479995","#499C98","#4A9D9A","#4BA09D","#4CA39F","#4EA6A2","#4FA8A5","#50ABA6","#51AEA9","#53B0AC","#54B2AE","#55B5B0","#56B7B3","#57BAB5","#58BCB8","#59BFBB","#5AC1BC","#5CC4BF","#5EC5C0","#61C6C1","#64C7C2","#67C7C3","#6AC8C4","#6DC9C5","#70CAC7","#73CCC7","#75CDC8","#78CDC9","#7BCECB","#7ECFCC","#81D0CD","#84D1CD","#86D2CE","#89D3D0","#8BD4D1","#8ED5D2","#91D6D2","#93D7D3","#96D7D5","#99D8D6","#9CD9D7","#9EDBD7","#A0DCD8","#A3DCDA","#A6DDDB","#A8DEDC","#ABDFDC","#AEE0DD","#B0E1DF","#B3E2E0","#B5E3E1","#B7E4E1","#BAE5E2","#BCE6E4","#BFE6E5","#C1E7E6","#C4E8E6","#C7EAE8","#C8EAE9","#CBEBEA","#CDECEA","#D0EDEB","#D2EEED","#D5EFEE","#D7EFEF","#DAF1EF","#DCF2F0","#DEF3F2","#E1F3F3","#E3F4F3","#E6F5F4","#E8F6F5","#EAF7F7","#EDF8F7","#EFF9F8","#F1FAF9","#F3FBFA","#F6FBFB","#F8FCFC","#FBFDFD","#FDFEFE","#000001","#000707","#030C0C","#051111","#071616","#091A1A","#0A1E1E","#0C2222","#0E2726","#0E2B2A","#0F2F2E","#113231","#133635","#143938","#163D3C","#17403F","#194543","#194846","#1A4B49","#1B4F4C","#1D5250","#1E5553","#1F5856","#215B59","#225F5C","#22625F","#236562","#256865","#266B68","#276E6B","#29716E","#2A7471","#2B7874","#2B7B77","#2C7E7A","#2E817D","#2F8480","#308683","#318986","#328C88","#34908B","#34938E","#359591","#369893","#379B96","#389D99","#39A09C","#3BA39E","#3CA6A1","#3CA9A4","#3DACA6","#3EAEA9","#3FB1AD","#40B4AF","#41B6B2","#43B9B5","#44BCB7","#44BFBA","#45C1BC","#46C4BF","#47C7C1","#48C9C4","#49CCC7","#4ACEC9","#4BD2CC","#4FD2CD","#52D2CD","#55D3CE","#58D4CF","#5BD5D0","#5ED6D1","#61D7D2","#65D7D2","#68D7D3","#6BD8D4","#6ED9D5","#71DAD6","#74DBD6","#77DCD7","#7ADCD7","#7EDDD8","#81DDD9","#84DEDA","#86DFDB","#89E0DC","#8CE1DC","#8FE1DD","#92E2DE","#95E3DF","#98E3E0","#9BE4E1","#9DE5E1","#A0E6E2","#A3E6E3","#A6E7E4","#A8E8E5","#ACE9E6","#AEE9E6","#B1EAE7","#B4EAE8","#B6EBE9","#B9ECEA","#BBEDEA","#BEEEEB","#C1EFEC","#C4EFED","#C7EFEE","#C9F0EF","#CCF1EF","#CEF2F0","#D1F3F1","#D3F3F2","#D7F4F3","#D9F4F3","#DCF5F4","#DEF6F5","#E1F7F6","#E3F7F7","#E6F8F7","#E8F9F8","#EBFAF9","#EEFAFA","#F0FBFB","#F3FBFB","#F5FCFC","#F7FDFD","#FAFEFE","#FCFFFF","#000001","#000707","#030C0C","#031311","#051716","#071B1B","#07211F","#092523","#0A2A27","#0A2E2C","#0C3130","#0C3634","#0E3937","#0F3D3C","#0F413F","#114543","#134946","#134C4A","#14504E","#145451","#165754","#175A58","#175E5B","#19615E","#1A6561","#1A6865","#1B6B68","#1B6F6B","#1D726E","#1E7572","#1E7975","#1F7C78","#21807B","#21837F","#228682","#228985","#238C87","#258F8B","#25938E","#269591","#279993","#279C97","#299E9A","#29A29D","#2AA59F","#2BA7A3","#2BABA6","#2CAEA8","#2EB1AB","#2EB4AE","#2FB6B1","#2FBAB4","#30BCB6","#31BFBA","#31C2BC","#32C5BF","#34C8C1","#34CBC5","#35CDC7","#35D1CA","#36D3CD","#37D6D0","#37D9D2","#38DCD5","#39DFD7","#3DDFD8","#40E0D9","#45E0DA","#48E1DA","#4BE1DB","#50E1DC","#53E2DC","#57E3DC","#5AE3DD","#5DE4DE","#61E4DF","#64E5DF","#67E6E0","#6BE6E1","#6EE6E1","#72E7E1","#75E7E2","#78E8E3","#7CE8E4","#7FE9E4","#82EAE5","#86EAE6","#88EAE6","#8CEBE6","#8FEBE7","#92ECE8","#95ECE9","#98EDE9","#9BEEEA","#9EEEEA","#A1EFEB","#A5EFEB","#A7EFEC","#AAF0ED","#AEF0EE","#B0F1EE","#B3F2EF","#B6F2EF","#B9F3F0","#BCF3F0","#BFF3F1","#C1F4F2","#C5F4F3","#C7F5F3","#CAF6F3","#CDF6F4","#D0F7F5","#D3F7F5","#D6F7F6","#D8F8F7","#DCF8F7","#DEF9F7","#E1FAF8","#E4FAF9","#E6FBFA","#EAFBFA","#ECFBFB","#EFFCFB","#F2FCFC","#F4FDFC","#F7FEFD","#FAFEFE","#FCFFFF","#000001","#000707","#000E0C","#031313","#031917","#031E1D","#052221","#052726","#072C2A","#07302F","#073532","#093837","#093D3B","#09413F","#0A4543","#0A4947","#0C4E4A","#0C514F","#0C5552","#0E5855","#0E5C59","#0E605C","#0F6360","#0F6763","#116B67","#116E6A","#11726E","#137571","#137975","#137D78","#14807C","#14847F","#168783","#168A86","#168E89","#17918C","#179490","#179893","#199B95","#199E99","#1AA29C","#1AA59F","#1AA8A2","#1BABA6","#1BAEA8","#1BB2AC","#1DB5AE","#1DB8B2","#1EBBB5","#1EBEB8","#1EC1BB","#1FC4BE","#1FC7C1","#1FCBC4","#21CDC7","#21D1C9","#22D4CD","#22D7CF","#22DAD2","#23DCD5","#23E0D8","#23E3DB","#25E6DE","#25E9E1","#26ECE4","#2AECE4","#2FECE5","#32EDE5","#37EDE6","#3CEDE6","#3FEEE6","#44EEE6","#48EFE7","#4BEFE7","#50EFE8","#53EFE9","#57EFE9","#5BEFEA","#5EF0EA","#62F0EA","#66F1EA","#69F1EB","#6DF1EB","#70F2EC","#74F2EC","#78F2ED","#7BF3ED","#7FF3EE","#83F3EE","#86F3EF","#89F3EF","#8CF4EF","#90F4F0","#93F4F0","#96F5F1","#9AF5F1","#9DF6F2","#A0F6F2","#A4F6F3","#A6F7F3","#AAF7F3","#AEF7F3","#B0F7F4","#B4F7F4","#B7F8F5","#BAF8F5","#BDF8F6","#C0F9F6","#C3F9F7","#C7F9F7","#C9FAF7","#CDFAF8","#D0FBF8","#D2FBF9","#D6FBF9","#D8FBFA","#DCFBFA","#DFFBFB","#E1FCFB","#E5FCFB","#E8FDFB","#EAFDFC","#EEFDFC","#F0FEFD","#F3FEFD","#F7FEFE","#F9FFFE","#FCFFFF","#000001","#000707","#000E0E","#001414","#001A19","#001F1E","#002523","#002A27","#032F2C","#033231","#033735","#033C39","#03403E","#034543","#034946","#034E4A","#05524F","#055552","#055956","#055D5A","#05615D","#056561","#056965","#056D69","#07716C","#077470","#077874","#077C77","#07807B","#07847F","#078782","#078B86","#098F89","#09928D","#099590","#099993","#099D97","#09A09A","#09A49D","#09A7A1","#0AABA4","#0AAEA7","#0AB1AB","#0AB5AE","#0AB8B1","#0ABBB5","#0ABFB8","#0AC2BB","#0CC6BE","#0CC8C1","#0CCCC4","#0CCFC7","#0CD2CB","#0CD6CE","#0CD9D1","#0CDCD4","#0EE0D7","#0EE2DA","#0EE6DD","#0EE9E1","#0EECE3","#0EEFE6","#0EF3EA","#0EF6ED","#0FF9EF","#14F9F0","#1AF9F0","#1FF9F0","#25F9F0","#2AF9F1","#2FF9F1","#34F9F1","#38FAF2","#3CFAF2","#40FAF2","#45FAF3","#49FAF3","#4EFAF3","#52FAF3","#56FAF3","#5AFBF3","#5DFBF3","#61FBF4","#65FBF4","#69FBF4","#6DFBF5","#71FBF5","#75FBF5","#79FBF5","#7CFBF6","#80FBF6","#84FBF6","#87FBF7","#8BFBF7","#8FFBF7","#93FBF7","#96FCF7","#99FCF7","#9DFCF7","#A0FCF8","#A4FCF8","#A7FCF8","#ABFCF9","#AEFCF9","#B2FDF9","#B5FDFA","#B8FDFA","#BBFDFA","#BFFDFA","#C2FDFB","#C6FDFB","#C9FDFB","#CDFEFB","#CFFEFB","#D2FEFB","#D6FEFC","#D9FEFC","#DCFEFC","#E0FEFC","#E3FEFD","#E6FFFD","#E9FFFD","#ECFFFE","#EFFFFE","#F3FFFE","#F6FFFF","#F9FFFF","#FCFFFF","#000001","#030505","#070909","#0A0C0C","#0E0F0F","#111313","#141616","#171919","#1A1B1D","#1B1F1F","#1E2222","#212525","#232727","#262A2A","#292C2C","#2B2F2F","#2E3132","#2F3435","#313737","#343939","#363C3C","#383E3E","#3B4040","#3D4343","#3F4546","#404748","#43494A","#454C4C","#474F4F","#495151","#4B5353","#4E5555","#505758","#51595A","#535B5C","#555D5E","#576060","#596262","#5B6464","#5D6666","#5F6869","#606A6B","#626C6D","#646E6F","#667071","#687373","#6A7575","#6C7777","#6E797A","#6F7B7C","#717D7E","#737F80","#758182","#778484","#798686","#7B8787","#7D898A","#7E8B8C","#808D8E","#828F90","#849192","#869393","#879595","#899797","#8B999A","#8D9B9B","#8F9D9D","#919D9E","#939FA0","#94A1A2","#96A3A4","#98A5A6","#9BA6A7","#9DA8A8","#9EAAAA","#A0ACAC","#A2ADAE","#A4AEAF","#A6B0B1","#A7B2B3","#AAB4B5","#ACB5B5","#AEB7B7","#AFB9B9","#B1BABB","#B3BBBC","#B5BDBE","#B6BFC0","#B9C1C1","#BBC2C2","#BCC4C4","#BEC6C6","#C0C7C7","#C1C8C9","#C3CACB","#C5CCCD","#C7CDCE","#C9CFCF","#CBD1D1","#CDD2D2","#CED4D4","#D0D6D6","#D2D7D7","#D3D8D9","#D6DADB","#D7DCDC","#D9DDDD","#DBDFDF","#DCE1E1","#DEE2E2","#E0E4E4","#E1E5E6","#E4E6E7","#E6E8E8","#E7EAEA","#E9EBEB","#EAEDED","#ECEFEF","#EEF0F0","#EFF2F2","#F2F3F3","#F3F4F4","#F5F6F6","#F7F7F7","#F8F9F9","#FAFBFB","#FBFCFC","#FDFEFE","#000001","#030505","#070909","#090E0E","#0C1111","#0F1414","#111919","#141B1B","#171E1F","#192222","#1B2525","#1D2729","#1F2B2B","#222E2E","#233031","#263434","#293637","#2A3839","#2C3C3C","#2E3E3F","#304041","#324444","#344647","#364849","#384B4C","#394E4F","#3C5051","#3D5354","#3F5556","#415758","#435A5B","#455C5D","#475E60","#486162","#4A6364","#4B6567","#4E6869","#506A6B","#516C6E","#536F70","#557173","#567375","#587677","#59787A","#5B7A7C","#5D7D7E","#5E7F81","#608183","#628486","#638687","#658789","#668A8C","#688C8E","#6A8F90","#6B9193","#6D9394","#6F9597","#709799","#72999B","#739C9D","#759D9F","#779FA1","#78A2A4","#7AA4A6","#7CA6A8","#7EA7A9","#80A9AB","#83AAAC","#85ACAE","#86AEAF","#89AEB0","#8BB0B2","#8EB2B4","#90B3B5","#92B5B6","#94B6B7","#96B7B9","#98B9BB","#9BBABB","#9DBBBD","#9FBDBF","#A1BEC0","#A3C0C1","#A6C1C2","#A7C2C4","#A9C4C6","#ACC6C7","#AEC7C8","#B0C8CA","#B2CACB","#B4CBCD","#B6CDCD","#B8CECF","#BACFD1","#BCD1D2","#BED2D3","#C1D3D5","#C2D5D6","#C4D7D7","#C7D7D8","#C8D9DA","#CADBDC","#CDDCDC","#CEDDDE","#D1DFE0","#D2E0E1","#D4E1E2","#D7E3E3","#D8E4E5","#DAE6E6","#DCE7E7","#DEE8E9","#E1EAEA","#E2EBEB","#E4ECED","#E6EEEE","#E8EFEF","#EAF0F1","#ECF2F2","#EEF3F3","#F0F4F5","#F2F6F6","#F3F7F7","#F6F8F8","#F7FAFA","#F9FBFB","#FBFCFC","#FDFEFE","#000001","#030505","#050A0A","#090E0E","#0A1313","#0C1617","#0F1A1A","#111D1E","#142122","#162525","#172729","#1A2B2B","#1B2E2F","#1D3132","#1F3435","#213738","#233B3C","#253D3E","#264041","#294344","#2A4647","#2B484A","#2E4B4C","#2F4F50","#315153","#325455","#345658","#36595A","#375B5D","#385E60","#3B6062","#3C6365","#3E6668","#3F686A","#406B6D","#436D6F","#447072","#457275","#477577","#48787A","#4A7A7D","#4B7D7F","#4C7F82","#4F8284","#508486","#518689","#53898B","#548B8E","#568E91","#579093","#589395","#5A9497","#5B979A","#5C9A9D","#5E9C9E","#5F9EA1","#61A0A4","#62A3A6","#63A5A8","#65A7AA","#66A9AD","#67ACAF","#69AEB1","#6AB0B4","#6CB3B6","#6EB4B7","#71B5B8","#73B6BA","#76B7BB","#79B9BB","#7BBABD","#7EBBBE","#81BCC0","#83BEC1","#86BFC1","#87C1C3","#8AC1C4","#8DC2C5","#8FC4C7","#92C5C7","#94C7C9","#96C7CA","#99C9CB","#9BCACD","#9DCBCD","#A0CDCE","#A2CDD0","#A5CFD1","#A7D0D2","#A9D2D3","#ACD2D4","#AED3D6","#B0D5D7","#B3D6D7","#B5D7D9","#B7D8DA","#BADADC","#BBDBDC","#BEDCDD","#C0DDDF","#C2DEE0","#C5E0E1","#C7E1E2","#C9E2E3","#CCE3E5","#CDE5E6","#D0E6E6","#D2E6E8","#D4E8E9","#D7E9EA","#D8EAEB","#DBEBEC","#DDEDEE","#DFEEEF","#E1EFEF","#E3F0F1","#E6F1F2","#E8F3F3","#EAF3F4","#ECF5F5","#EFF6F7","#F0F7F7","#F3F8F8","#F4F9FA","#F7FBFB","#F9FBFB","#FBFDFD","#FDFEFE","#000001","#030505","#050A0A","#070F0F","#091414","#0A1719","#0C1B1D","#0E1F21","#112325","#132727","#142A2B","#162E2F","#173132","#193536","#1A3839","#1B3B3D","#1E3E40","#1F4143","#214546","#224849","#234A4C","#254E50","#265153","#275456","#2A5759","#2B595B","#2C5C5E","#2E5F61","#2F6264","#306467","#31676A","#326A6D","#356D70","#367072","#377275","#387578","#39787B","#3B7B7E","#3C7E81","#3D8084","#3F8386","#408688","#41888B","#438B8E","#448D91","#459093","#469396","#479599","#49989C","#4A9A9D","#4B9DA0","#4C9FA3","#4EA2A6","#4FA5A8","#50A6AB","#51A9AE","#53ACB0","#54AEB2","#55B0B5","#56B3B7","#57B5BA","#58B8BC","#59BBBF","#5ABCC1","#5CBFC4","#5EC0C5","#61C1C6","#64C2C7","#67C3C7","#6AC4C8","#6DC5C9","#70C7CA","#73C7CC","#75C8CD","#78C9CD","#7BCBCE","#7ECCCF","#81CDD0","#84CDD1","#86CED2","#89D0D3","#8BD1D4","#8ED2D5","#91D2D6","#93D3D7","#96D5D7","#99D6D8","#9CD7D9","#9ED7DB","#A0D8DC","#A3DADC","#A6DBDD","#A8DCDE","#ABDCDF","#AEDDE0","#B0DFE1","#B3E0E2","#B5E1E3","#B7E1E4","#BAE2E5","#BCE4E6","#BFE5E6","#C1E6E7","#C4E6E8","#C7E8EA","#C8E9EA","#CBEAEB","#CDEAEC","#D0EBED","#D2EDEE","#D5EEEF","#D7EFEF","#DAEFF1","#DCF0F2","#DEF2F3","#E1F3F3","#E3F3F4","#E6F4F5","#E8F5F6","#EAF7F7","#EDF7F8","#EFF8F9","#F1F9FA","#F3FAFB","#F6FBFB","#F8FCFC","#FBFDFD","#FDFEFE","#000001","#000707","#030C0C","#051111","#071616","#091A1A","#0A1E1E","#0C2222","#0E2627","#0E2A2B","#0F2E2F","#113132","#133536","#143839","#163C3D","#173F40","#194345","#194648","#1A494B","#1B4C4F","#1D5052","#1E5355","#1F5658","#21595B","#225C5F","#225F62","#236265","#256568","#26686B","#276B6E","#296E71","#2A7174","#2B7478","#2B777B","#2C7A7E","#2E7D81","#2F8084","#308386","#318689","#32888C","#348B90","#348E93","#359195","#369398","#37969B","#38999D","#399CA0","#3B9EA3","#3CA1A6","#3CA4A9","#3DA6AC","#3EA9AE","#3FADB1","#40AFB4","#41B2B6","#43B5B9","#44B7BC","#44BABF","#45BCC1","#46BFC4","#47C1C7","#48C4C9","#49C7CC","#4AC9CE","#4BCCD2","#4FCDD2","#52CDD2","#55CED3","#58CFD4","#5BD0D5","#5ED1D6","#61D2D7","#65D2D7","#68D3D7","#6BD4D8","#6ED5D9","#71D6DA","#74D6DB","#77D7DC","#7AD7DC","#7ED8DD","#81D9DD","#84DADE","#86DBDF","#89DCE0","#8CDCE1","#8FDDE1","#92DEE2","#95DFE3","#98E0E3","#9BE1E4","#9DE1E5","#A0E2E6","#A3E3E6","#A6E4E7","#A8E5E8","#ACE6E9","#AEE6E9","#B1E7EA","#B4E8EA","#B6E9EB","#B9EAEC","#BBEAED","#BEEBEE","#C1ECEF","#C4EDEF","#C7EEEF","#C9EFF0","#CCEFF1","#CEF0F2","#D1F1F3","#D3F2F3","#D7F3F4","#D9F3F4","#DCF4F5","#DEF5F6","#E1F6F7","#E3F7F7","#E6F7F8","#E8F8F9","#EBF9FA","#EEFAFA","#F0FBFB","#F3FBFB","#F5FCFC","#F7FDFD","#FAFEFE","#FCFFFF","#000001","#000707","#030C0C","#031113","#051617","#071B1B","#071F21","#092325","#0A272A","#0A2C2E","#0C3031","#0C3436","#0E3739","#0F3C3D","#0F3F41","#114345","#134649","#134A4C","#144E50","#145154","#165457","#17585A","#175B5E","#195E61","#1A6165","#1A6568","#1B686B","#1B6B6F","#1D6E72","#1E7275","#1E7579","#1F787C","#217B80","#217F83","#228286","#228589","#23878C","#258B8F","#258E93","#269195","#279399","#27979C","#299A9E","#299DA2","#2A9FA5","#2BA3A7","#2BA6AB","#2CA8AE","#2EABB1","#2EAEB4","#2FB1B6","#2FB4BA","#30B6BC","#31BABF","#31BCC2","#32BFC5","#34C1C8","#34C5CB","#35C7CD","#35CAD1","#36CDD3","#37D0D6","#37D2D9","#38D5DC","#39D7DF","#3DD8DF","#40D9E0","#45DAE0","#48DAE1","#4BDBE1","#50DCE1","#53DCE2","#57DCE3","#5ADDE3","#5DDEE4","#61DFE4","#64DFE5","#67E0E6","#6BE1E6","#6EE1E6","#72E1E7","#75E2E7","#78E3E8","#7CE4E8","#7FE4E9","#82E5EA","#86E6EA","#88E6EA","#8CE6EB","#8FE7EB","#92E8EC","#95E9EC","#98E9ED","#9BEAEE","#9EEAEE","#A1EBEF","#A5EBEF","#A7ECEF","#AAEDF0","#AEEEF0","#B0EEF1","#B3EFF2","#B6EFF2","#B9F0F3","#BCF0F3","#BFF1F3","#C1F2F4","#C5F3F4","#C7F3F5","#CAF3F6","#CDF4F6","#D0F5F7","#D3F5F7","#D6F6F7","#D8F7F8","#DCF7F8","#DEF7F9","#E1F8FA","#E4F9FA","#E6FAFB","#EAFAFB","#ECFBFB","#EFFBFC","#F2FCFC","#F4FCFD","#F7FDFE","#FAFEFE","#FCFFFF","#000001","#000707","#000C0E","#031313","#031719","#031D1E","#052122","#052627","#072A2C","#072F30","#073235","#093738","#093B3D","#093F41","#0A4345","#0A4749","#0C4A4E","#0C4F51","#0C5255","#0E5558","#0E595C","#0E5C60","#0F6063","#0F6367","#11676B","#116A6E","#116E72","#137175","#137579","#13787D","#147C80","#147F84","#168387","#16868A","#16898E","#178C91","#179094","#179398","#19959B","#19999E","#1A9CA2","#1A9FA5","#1AA2A8","#1BA6AB","#1BA8AE","#1BACB2","#1DAEB5","#1DB2B8","#1EB5BB","#1EB8BE","#1EBBC1","#1FBEC4","#1FC1C7","#1FC4CB","#21C7CD","#21C9D1","#22CDD4","#22CFD7","#22D2DA","#23D5DC","#23D8E0","#23DBE3","#25DEE6","#25E1E9","#26E4EC","#2AE4EC","#2FE5EC","#32E5ED","#37E6ED","#3CE6ED","#3FE6EE","#44E6EE","#48E7EF","#4BE7EF","#50E8EF","#53E9EF","#57E9EF","#5BEAEF","#5EEAF0","#62EAF0","#66EAF1","#69EBF1","#6DEBF1","#70ECF2","#74ECF2","#78EDF2","#7BEDF3","#7FEEF3","#83EEF3","#86EFF3","#89EFF3","#8CEFF4","#90F0F4","#93F0F4","#96F1F5","#9AF1F5","#9DF2F6","#A0F2F6","#A4F3F6","#A6F3F7","#AAF3F7","#AEF3F7","#B0F4F7","#B4F4F7","#B7F5F8","#BAF5F8","#BDF6F8","#C0F6F9","#C3F7F9","#C7F7F9","#C9F7FA","#CDF8FA","#D0F8FB","#D2F9FB","#D6F9FB","#D8FAFB","#DCFAFB","#DFFBFB","#E1FBFC","#E5FBFC","#E8FBFD","#EAFCFD","#EEFCFD","#F0FDFE","#F3FDFE","#F7FEFE","#F9FEFF","#FCFFFF","#000001","#000707","#000E0E","#001414","#00191A","#001E1F","#002325","#00272A","#032C2F","#033132","#033537","#03393C","#033E40","#034345","#034649","#034A4E","#054F52","#055255","#055659","#055A5D","#055D61","#056165","#056569","#05696D","#076C71","#077074","#077478","#07777C","#077B80","#077F84","#078287","#07868B","#09898F","#098D92","#099095","#099399","#09979D","#099AA0","#099DA4","#09A1A7","#0AA4AB","#0AA7AE","#0AABB1","#0AAEB5","#0AB1B8","#0AB5BB","#0AB8BF","#0ABBC2","#0CBEC6","#0CC1C8","#0CC4CC","#0CC7CF","#0CCBD2","#0CCED6","#0CD1D9","#0CD4DC","#0ED7E0","#0EDAE2","#0EDDE6","#0EE1E9","#0EE3EC","#0EE6EF","#0EEAF3","#0EEDF6","#0FEFF9","#14F0F9","#1AF0F9","#1FF0F9","#25F0F9","#2AF1F9","#2FF1F9","#34F1F9","#38F2FA","#3CF2FA","#40F2FA","#45F3FA","#49F3FA","#4EF3FA","#52F3FA","#56F3FA","#5AF3FB","#5DF3FB","#61F4FB","#65F4FB","#69F4FB","#6DF5FB","#71F5FB","#75F5FB","#79F5FB","#7CF6FB","#80F6FB","#84F6FB","#87F7FB","#8BF7FB","#8FF7FB","#93F7FB","#96F7FC","#99F7FC","#9DF7FC","#A0F8FC","#A4F8FC","#A7F8FC","#ABF9FC","#AEF9FC","#B2F9FD","#B5FAFD","#B8FAFD","#BBFAFD","#BFFAFD","#C2FBFD","#C6FBFD","#C9FBFD","#CDFBFE","#CFFBFE","#D2FBFE","#D6FCFE","#D9FCFE","#DCFCFE","#E0FCFE","#E3FDFE","#E6FDFF","#E9FDFF","#ECFEFF","#EFFEFF","#F3FEFF","#F6FFFF","#F9FFFF","#FCFFFF","#000001","#030505","#070909","#0A0C0C","#0E0F0F","#111313","#141616","#171919","#1A1B1D","#1B1E1F","#1E2122","#212325","#232727","#262A2A","#292C2C","#2B2F2F","#2E3132","#2F3435","#313637","#343839","#363B3C","#383D3E","#3B3F40","#3D4343","#3F4546","#404748","#43494A","#454B4C","#474E4F","#495051","#4B5253","#4E5455","#505658","#51585A","#535B5C","#555D5E","#575F60","#596162","#5B6364","#5D6566","#5F6769","#60696B","#626B6D","#646D6F","#666F71","#687273","#6A7475","#6C7677","#6E787A","#6F7A7C","#717C7E","#737E80","#758082","#778284","#798486","#7B8687","#7D888A","#7E8A8C","#808C8E","#828E90","#849092","#869293","#879395","#899597","#8B979A","#8D999B","#8F9B9D","#919D9E","#939EA0","#94A0A2","#96A2A4","#98A4A6","#9BA6A7","#9DA6A8","#9EA8AA","#A0AAAC","#A2ACAE","#A4AEAF","#A6AFB1","#A7B1B3","#AAB3B5","#ACB5B5","#AEB6B7","#AFB8B9","#B1B9BB","#B3BBBC","#B5BCBE","#B6BEC0","#B9C0C1","#BBC1C2","#BCC3C4","#BEC5C6","#C0C7C7","#C1C8C9","#C3CACB","#C5CBCD","#C7CDCE","#C9CECF","#CBD0D1","#CDD2D2","#CED3D4","#D0D5D6","#D2D7D7","#D3D8D9","#D6DADB","#D7DCDC","#D9DCDD","#DBDEDF","#DCE0E1","#DEE1E2","#E0E3E4","#E1E5E6","#E4E6E7","#E6E8E8","#E7EAEA","#E9EBEB","#EAEDED","#ECEEEF","#EEEFF0","#EFF1F2","#F2F3F3","#F3F4F4","#F5F6F6","#F7F7F7","#F8F9F9","#FAFBFB","#FBFCFC","#FDFEFE","#000001","#030505","#070909","#090C0E","#0C1111","#0F1414","#111719","#141A1B","#171E1F","#192122","#1B2325","#1D2629","#1F2A2B","#222C2E","#232F31","#263234","#293537","#2A3739","#2C393C","#2E3D3F","#303F41","#324144","#344447","#364749","#38494C","#394B4F","#3C4F51","#3D5154","#3F5356","#415558","#43585B","#455A5D","#475C60","#485E62","#4A6164","#4B6367","#4E6569","#50676B","#516A6E","#536C70","#556E73","#567175","#587377","#59757A","#5B777C","#5D7A7E","#5E7C81","#607E83","#628086","#638387","#658589","#66868C","#68898E","#6A8B90","#6B8D93","#6D8F94","#6F9297","#709399","#72959B","#73979D","#759A9F","#779CA1","#789DA4","#7A9FA6","#7CA2A8","#7EA3A9","#80A5AB","#83A6AC","#85A8AE","#86A9AF","#89ABB0","#8BADB2","#8EAEB4","#90AFB5","#92B1B6","#94B3B7","#96B5B9","#98B5BB","#9BB7BB","#9DB9BD","#9FBABF","#A1BBC0","#A3BDC1","#A6BFC2","#A7C0C4","#A9C1C6","#ACC3C7","#AEC5C8","#B0C6CA","#B2C7CB","#B4C9CD","#B6CACD","#B8CCCF","#BACDD1","#BCCFD2","#BED0D3","#C1D2D5","#C2D3D6","#C4D5D7","#C7D6D8","#C8D7DA","#CAD9DC","#CDDBDC","#CEDCDE","#D1DDE0","#D2DFE1","#D4E0E2","#D7E1E3","#D8E3E5","#DAE5E6","#DCE6E7","#DEE7E9","#E1E9EA","#E2EAEB","#E4EBED","#E6EDEE","#E8EFEF","#EAEFF1","#ECF1F2","#EEF3F3","#F0F4F5","#F2F5F6","#F3F7F7","#F6F8F8","#F7FAFA","#F9FBFB","#FBFCFC","#FDFEFE","#000001","#030505","#05090A","#090E0E","#0A1113","#0C1617","#0F191A","#111D1E","#141F22","#162325","#172629","#1A292B","#1B2C2F","#1D2F32","#1F3235","#213538","#23383C","#253B3E","#263E41","#294044","#2A4347","#2B464A","#2E484C","#2F4B50","#314E53","#325155","#345358","#36565A","#37585D","#385B60","#3B5D62","#3C5F65","#3E6268","#3F646A","#40676D","#43696F","#446C72","#456E75","#477177","#48737A","#4A757D","#4B787F","#4C7A82","#4F7D84","#507F86","#518289","#53848B","#54868E","#568891","#578B93","#588D95","#5A8F97","#5B929A","#5C939D","#5E969E","#5F98A1","#619BA4","#629DA6","#639FA8","#65A1AA","#66A3AD","#67A6AF","#69A7B1","#6AAAB4","#6CACB6","#6EAEB7","#71AEB8","#73B0BA","#76B1BB","#79B3BB","#7BB5BD","#7EB5BE","#81B7C0","#83B8C1","#86BAC1","#87BBC3","#8ABCC4","#8DBDC5","#8FBFC7","#92C1C7","#94C1C9","#96C3CA","#99C4CB","#9BC6CD","#9DC7CD","#A0C8CE","#A2C9D0","#A5CBD1","#A7CCD2","#A9CDD3","#ACCFD4","#AED0D6","#B0D2D7","#B3D2D7","#B5D4D9","#B7D5DA","#BAD7DC","#BBD7DC","#BED9DD","#C0DBDF","#C2DCE0","#C5DDE1","#C7DEE2","#C9E0E3","#CCE1E5","#CDE2E6","#D0E3E6","#D2E5E8","#D4E6E9","#D7E7EA","#D8E9EB","#DBEAEC","#DDEBEE","#DFECEF","#E1EEEF","#E3EFF1","#E6F0F2","#E8F1F3","#EAF3F4","#ECF4F5","#EFF5F7","#F0F7F7","#F3F7F8","#F4F9FA","#F7FAFB","#F9FBFB","#FBFCFD","#FDFEFE","#000001","#030505","#050A0A","#070E0F","#091314","#0A1719","#0C1A1D","#0E1E21","#112225","#132527","#14292B","#162B2F","#172F32","#193236","#1A3539","#1B383D","#1E3C40","#1F3E43","#214146","#224449","#23474C","#254A50","#264C53","#275056","#2A5359","#2B555B","#2C585E","#2E5A61","#2F5D64","#306067","#31626A","#32656D","#356870","#366A72","#376D75","#387078","#39727B","#3B757E","#3C7781","#3D7A84","#3F7D86","#407F88","#41828B","#43858E","#448691","#458993","#468B96","#478E99","#49919C","#4A939D","#4B95A0","#4C98A3","#4E9AA6","#4F9DA8","#509EAB","#51A1AE","#53A4B0","#54A6B2","#55A8B5","#56ABB7","#57ADBA","#58AFBC","#59B1BF","#5AB4C1","#5CB6C4","#5EB7C5","#61B8C6","#64BAC7","#67BBC7","#6ABCC8","#6DBDC9","#70BECA","#73C0CC","#75C1CD","#78C1CD","#7BC3CE","#7EC4CF","#81C6D0","#84C7D1","#86C7D2","#89C9D3","#8BCAD4","#8ECBD5","#91CDD6","#93CDD7","#96CFD7","#99D0D8","#9CD1D9","#9ED2DB","#A0D3DC","#A3D4DC","#A6D6DD","#A8D7DE","#ABD8DF","#AED9E0","#B0DAE1","#B3DCE2","#B5DCE3","#B7DDE4","#BADFE5","#BCE0E6","#BFE1E6","#C1E2E7","#C4E3E8","#C7E5EA","#C8E6EA","#CBE6EB","#CDE8EC","#D0E9ED","#D2EAEE","#D5EBEF","#D7ECEF","#DAEEF1","#DCEFF2","#DEEFF3","#E1F1F3","#E3F2F4","#E6F3F5","#E8F4F6","#EAF5F7","#EDF7F8","#EFF7F9","#F1F8FA","#F3FAFB","#F6FBFB","#F8FBFC","#FBFDFD","#FDFEFE","#000001","#000507","#030A0C","#050F11","#071416","#09191A","#0A1B1E","#0C1F22","#0E2327","#0E272B","#0F2B2F","#112E32","#133136","#143539","#16383D","#173C40","#193E45","#194148","#1A454B","#1B484F","#1D4B52","#1E4E55","#1F5158","#21545B","#22575F","#225A62","#235D65","#255F68","#26626B","#27656E","#296871","#2A6B74","#2B6D78","#2B707B","#2C737E","#2E7681","#2F7984","#307B86","#317E89","#32818C","#348490","#348693","#358895","#368B98","#378E9B","#38919D","#3993A0","#3B96A3","#3C98A6","#3C9BA9","#3D9DAC","#3EA0AE","#3FA3B1","#40A5B4","#41A7B6","#43AAB9","#44ADBC","#44AFBF","#45B1C1","#46B4C4","#47B6C7","#48B9C9","#49BBCC","#4ABDCE","#4BC0D2","#4FC1D2","#52C2D2","#55C3D3","#58C4D4","#5BC5D5","#5EC6D6","#61C7D7","#65C8D7","#68C9D7","#6BCAD8","#6ECBD9","#71CDDA","#74CDDB","#77CEDC","#7ACFDC","#7ED0DD","#81D2DD","#84D2DE","#86D3DF","#89D4E0","#8CD5E1","#8FD6E1","#92D7E2","#95D8E3","#98D9E3","#9BDAE4","#9DDBE5","#A0DCE6","#A3DDE6","#A6DEE7","#A8DFE8","#ACE0E9","#AEE1E9","#B1E2EA","#B4E3EA","#B6E4EB","#B9E5EC","#BBE6ED","#BEE7EE","#C1E8EF","#C4E9EF","#C7EAEF","#C9EAF0","#CCECF1","#CEEDF2","#D1EEF3","#D3EFF3","#D7EFF4","#D9F1F4","#DCF2F5","#DEF3F6","#E1F3F7","#E3F4F7","#E6F6F8","#E8F7F9","#EBF7FA","#EEF8FA","#F0F9FB","#F3FBFB","#F5FBFC","#F7FCFD","#FAFDFE","#FCFEFF","#000001","#000507","#030A0C","#030F13","#051417","#07191B","#071D21","#092125","#0A252A","#0A292E","#0C2C31","#0C3036","#0E3439","#0F373D","#0F3B41","#113E45","#134149","#13454C","#144850","#144B54","#164F57","#17525A","#17555E","#195861","#1A5B65","#1A5E68","#1B616B","#1B646F","#1D6772","#1E6A75","#1E6D79","#1F707C","#217380","#217683","#227986","#227C89","#237F8C","#25828F","#258593","#268795","#278A99","#278D9C","#29909E","#2993A2","#2A95A5","#2B98A7","#2B9BAB","#2C9DAE","#2EA0B1","#2EA3B4","#2FA6B6","#2FA8BA","#30ABBC","#31AEBF","#31B0C2","#32B3C5","#34B5C8","#34B8CB","#35BBCD","#35BDD1","#36C0D3","#37C2D6","#37C5D9","#38C7DC","#39CADF","#3DCBDF","#40CCE0","#45CDE0","#48CDE1","#4BCEE1","#50CFE1","#53D0E2","#57D1E3","#5AD2E3","#5DD2E4","#61D3E4","#64D4E5","#67D5E6","#6BD6E6","#6ED7E6","#72D7E7","#75D8E7","#78D9E8","#7CDAE8","#7FDBE9","#82DCEA","#86DCEA","#88DDEA","#8CDEEB","#8FDFEB","#92E0EC","#95E1EC","#98E1ED","#9BE2EE","#9EE3EE","#A1E4EF","#A5E5EF","#A7E6EF","#AAE6F0","#AEE7F0","#B0E8F1","#B3E9F2","#B6EAF2","#B9EAF3","#BCEBF3","#BFECF3","#C1EDF4","#C5EEF4","#C7EFF5","#CAEFF6","#CDF0F6","#D0F1F7","#D3F2F7","#D6F3F7","#D8F3F8","#DCF4F8","#DEF5F9","#E1F6FA","#E4F7FA","#E6F7FB","#EAF8FB","#ECF9FB","#EFFAFC","#F2FBFC","#F4FBFD","#F7FCFE","#FAFDFE","#FCFEFF","#000001","#000707","#000C0E","#031113","#031619","#031A1E","#051F22","#052327","#07272C","#072B30","#072F35","#093238","#09373D","#093B41","#0A3E45","#0A4149","#0C454E","#0C4851","#0C4C55","#0E5058","#0E535C","#0E5660","#0F5963","#0F5C67","#11606B","#11636E","#116672","#136975","#136C79","#136F7D","#147380","#147684","#167987","#167C8A","#167F8E","#178291","#178694","#178898","#198B9B","#198E9E","#1A91A2","#1A93A5","#1A97A8","#1B9AAB","#1B9DAE","#1B9FB2","#1DA2B5","#1DA5B8","#1EA8BB","#1EABBE","#1EAEC1","#1FB0C4","#1FB3C7","#1FB5CB","#21B9CD","#21BBD1","#22BED4","#22C1D7","#22C3DA","#23C6DC","#23C9E0","#23CCE3","#25CEE6","#25D1E9","#26D3EC","#2AD4EC","#2FD5EC","#32D6ED","#37D7ED","#3CD7ED","#3FD7EE","#44D8EE","#48D9EF","#4BDAEF","#50DBEF","#53DBEF","#57DCEF","#5BDCEF","#5EDDF0","#62DEF0","#66DFF1","#69DFF1","#6DE0F1","#70E1F2","#74E1F2","#78E2F2","#7BE3F3","#7FE3F3","#83E4F3","#86E5F3","#89E6F3","#8CE6F4","#90E7F4","#93E7F4","#96E8F5","#9AE9F5","#9DEAF6","#A0EAF6","#A4EBF6","#A6EBF7","#AAECF7","#AEEDF7","#B0EEF7","#B4EFF7","#B7EFF8","#BAEFF8","#BDF0F8","#C0F1F9","#C3F2F9","#C7F3F9","#C9F3FA","#CDF3FA","#D0F4FB","#D2F5FB","#D6F6FB","#D8F7FB","#DCF7FB","#DFF7FB","#E1F8FC","#E5F9FC","#E8FAFD","#EAFBFD","#EEFBFD","#F0FBFE","#F3FCFE","#F7FDFE","#F9FEFF","#FCFFFF","#000001","#000707","#000C0E","#001314","#00171A","#001B1F","#002125","#00252A","#03292F","#032E32","#033137","#03353C","#033940","#033D45","#034049","#03454E","#054852","#054B55","#055059","#05535D","#055661","#055A65","#055D69","#05606D","#076471","#076774","#076B78","#076E7C","#077180","#077584","#077887","#077B8B","#097F8F","#098292","#098595","#098899","#098B9D","#098EA0","#0992A4","#0994A7","#0A97AB","#0A9BAE","#0A9DB1","#0AA0B5","#0AA4B8","#0AA6BB","#0AA9BF","#0AADC2","#0CAFC6","#0CB3C8","#0CB5CC","#0CB8CF","#0CBBD2","#0CBED6","#0CC1D9","#0CC4DC","#0EC7E0","#0EC9E2","#0ECDE6","#0ECFE9","#0ED2EC","#0ED5EF","#0ED7F3","#0EDAF6","#0FDDF9","#14DDF9","#1ADEF9","#1FDFF9","#25DFF9","#2AE0F9","#2FE1F9","#34E1F9","#38E1FA","#3CE2FA","#40E2FA","#45E3FA","#49E4FA","#4EE4FA","#52E5FA","#56E6FA","#5AE6FB","#5DE6FB","#61E6FB","#65E7FB","#69E8FB","#6DE8FB","#71E9FB","#75EAFB","#79EAFB","#7CEAFB","#80EBFB","#84EBFB","#87ECFB","#8BEDFB","#8FEDFB","#93EEFB","#96EFFC","#99EFFC","#9DEFFC","#A0F0FC","#A4F0FC","#A7F1FC","#ABF2FC","#AEF2FC","#B2F3FD","#B5F3FD","#B8F3FD","#BBF4FD","#BFF4FD","#C2F5FD","#C6F6FD","#C9F6FD","#CDF7FE","#CFF7FE","#D2F7FE","#D6F8FE","#D9F9FE","#DCF9FE","#E0FAFE","#E3FBFE","#E6FBFF","#E9FBFF","#ECFCFF","#EFFCFF","#F3FDFF","#F6FEFF","#F9FEFF","#FCFFFF","#000001","#030505","#070909","#0A0C0C","#0E0F0F","#111313","#141616","#171919","#1A1B1D","#1B1E1F","#1E2122","#212325","#232627","#26292A","#292B2C","#2B2E2F","#2E3132","#2F3435","#313637","#343839","#363B3C","#383D3E","#3B3F40","#3D4143","#3F4446","#404648","#43484A","#454A4C","#474C4F","#494F51","#4B5153","#4E5455","#505658","#51585A","#535A5C","#555C5E","#575E60","#596062","#5B6264","#5D6466","#5F6669","#60686B","#626A6D","#646C6F","#666E71","#687073","#6A7375","#6C7577","#6E777A","#6F797C","#717B7E","#737D80","#757F82","#778184","#798386","#7B8587","#7D868A","#7E888C","#808A8E","#828C90","#848E92","#869193","#879395","#899497","#8B969A","#8D989B","#8F9A9D","#919C9E","#939DA0","#949EA2","#96A0A4","#98A2A6","#9BA4A7","#9DA6A8","#9EA7AA","#A0A9AC","#A2ABAE","#A4ADAF","#A6AEB1","#A7B0B3","#AAB2B5","#ACB4B5","#AEB5B7","#AFB6B9","#B1B8BB","#B3BABC","#B5BBBE","#B6BDC0","#B9BFC1","#BBC1C2","#BCC2C4","#BEC4C6","#C0C6C7","#C1C7C9","#C3C9CB","#C5CBCD","#C7CDCE","#C9CECF","#CBCFD1","#CDD1D2","#CED2D4","#D0D4D6","#D2D6D7","#D3D7D9","#D6D9DB","#D7DBDC","#D9DCDD","#DBDEDF","#DCE0E1","#DEE1E2","#E0E3E4","#E1E5E6","#E4E6E7","#E6E7E8","#E7E9EA","#E9EAEB","#EAECED","#ECEEEF","#EEEFF0","#EFF1F2","#F2F3F3","#F3F4F4","#F5F6F6","#F7F7F7","#F8F9F9","#FAFBFB","#FBFCFC","#FDFEFE","#000001","#030505","#070909","#090C0E","#0C0F11","#0F1314","#111719","#141A1B","#171D1F","#191F22","#1B2225","#1D2629","#1F292B","#222B2E","#232E31","#263034","#293437","#2A3639","#2C383C","#2E3B3F","#303D41","#324044","#344347","#364549","#38474C","#39494F","#3C4C51","#3D4F54","#3F5156","#415358","#43555B","#45585D","#475A60","#485C62","#4A5E64","#4B6067","#4E6369","#50656B","#51676E","#536970","#556B73","#566E75","#587077","#59727A","#5B747C","#5D767E","#5E7981","#607B83","#627D86","#637F87","#658189","#66848C","#68868E","#6A8790","#6B8993","#6D8B94","#6F8E97","#709099","#72929B","#73939D","#75959F","#7798A1","#789AA4","#7A9CA6","#7C9DA8","#7E9FA9","#80A1AB","#83A3AC","#85A4AE","#86A6AF","#89A7B0","#8BA9B2","#8EABB4","#90ACB5","#92AEB6","#94AFB7","#96B1B9","#98B3BB","#9BB4BB","#9DB5BD","#9FB7BF","#A1B9C0","#A3BBC1","#A6BBC2","#A7BDC4","#A9BFC6","#ACC1C7","#AEC2C8","#B0C3CA","#B2C5CB","#B4C7CD","#B6C8CD","#B8CACF","#BACBD1","#BCCDD2","#BECED3","#C1D0D5","#C2D2D6","#C4D2D7","#C7D4D8","#C8D6DA","#CAD7DC","#CDD9DC","#CEDADE","#D1DCE0","#D2DDE1","#D4DFE2","#D7E1E3","#D8E1E5","#DAE3E6","#DCE5E7","#DEE6E9","#E1E8EA","#E2E9EB","#E4EAED","#E6ECEE","#E8EEEF","#EAEFF1","#ECF0F2","#EEF2F3","#F0F3F5","#F2F5F6","#F3F7F7","#F6F7F8","#F7F9FA","#F9FBFB","#FBFCFC","#FDFEFE","#000001","#030505","#05090A","#090C0E","#0A1113","#0C1417","#0F171A","#111B1E","#141E22","#162125","#172529","#1A272B","#1B2A2F","#1D2E32","#1F3035","#213238","#23363C","#25383E","#263B41","#293E44","#2A4047","#2B434A","#2E464C","#2F4850","#314A53","#324E55","#345058","#36525A","#37555D","#385760","#3B5962","#3C5C65","#3E5E68","#3F606A","#40636D","#43656F","#446772","#456A75","#476C77","#486E7A","#4A717D","#4B737F","#4C7582","#4F7884","#507A86","#517C89","#537F8B","#54818E","#568391","#578693","#588795","#5A8997","#5B8C9A","#5C8E9D","#5E909E","#5F93A1","#6194A4","#6296A6","#6399A8","#659BAA","#669DAD","#679FAF","#69A1B1","#6AA3B4","#6CA6B6","#6EA6B7","#71A8B8","#73AABA","#76ABBB","#79ADBB","#7BAEBD","#7EAFBE","#81B1C0","#83B3C1","#86B4C1","#87B5C3","#8AB7C4","#8DB8C5","#8FBAC7","#92BBC7","#94BCC9","#96BECA","#99C0CB","#9BC1CD","#9DC2CD","#A0C4CE","#A2C5D0","#A5C7D1","#A7C8D2","#A9C9D3","#ACCBD4","#AECDD6","#B0CDD7","#B3CFD7","#B5D1D9","#B7D2DA","#BAD3DC","#BBD5DC","#BED6DD","#C0D7DF","#C2D9E0","#C5DAE1","#C7DCE2","#C9DDE3","#CCDEE5","#CDE0E6","#D0E1E6","#D2E2E8","#D4E4E9","#D7E6EA","#D8E6EB","#DBE8EC","#DDEAEE","#DFEAEF","#E1ECEF","#E3EEF1","#E6EFF2","#E8F0F3","#EAF2F4","#ECF3F5","#EFF4F7","#F0F6F7","#F3F7F8","#F4F8FA","#F7FAFB","#F9FBFB","#FBFCFD","#FDFEFE","#000001","#030505","#05090A","#070E0F","#091114","#0A1619","#0C191D","#0E1D21","#111F25","#132327","#14262B","#162A2F","#172C32","#193036","#1A3239","#1B353D","#1E3840","#1F3B43","#213E46","#224049","#23444C","#254650","#264953","#274B56","#2A4F59","#2B515B","#2C545E","#2E5661","#2F5964","#305B67","#315D6A","#32606D","#356270","#366572","#376775","#386A78","#396C7B","#3B6F7E","#3C7181","#3D7484","#3F7686","#407988","#417B8B","#437D8E","#448091","#458293","#468596","#478699","#49899C","#4A8B9D","#4B8EA0","#4C90A3","#4E93A6","#4F94A8","#5097AB","#5199AE","#539CB0","#549DB2","#559FB5","#56A2B7","#57A4BA","#58A6BC","#59A8BF","#5AABC1","#5CADC4","#5EAEC5","#61AFC6","#64B1C7","#67B2C7","#6AB4C8","#6DB5C9","#70B6CA","#73B8CC","#75B9CD","#78BBCD","#7BBBCE","#7EBDCF","#81BED0","#84C0D1","#86C1D2","#89C2D3","#8BC3D4","#8EC5D5","#91C6D6","#93C7D7","#96C8D7","#99CAD8","#9CCCD9","#9ECDDB","#A0CEDC","#A3CFDC","#A6D1DD","#A8D2DE","#ABD3DF","#AED4E0","#B0D6E1","#B3D7E2","#B5D8E3","#B7D9E4","#BADBE5","#BCDCE6","#BFDDE6","#C1DFE7","#C4E0E8","#C7E1EA","#C8E2EA","#CBE4EB","#CDE5EC","#D0E6ED","#D2E7EE","#D5E9EF","#D7EAEF","#DAEBF1","#DCECF2","#DEEEF3","#E1EFF3","#E3F0F4","#E6F2F5","#E8F3F6","#EAF4F7","#EDF5F8","#EFF7F9","#F1F7FA","#F3F9FB","#F6FAFB","#F8FBFC","#FBFCFD","#FDFEFE","#000001","#000507","#030A0C","#050E11","#071316","#09161A","#0A1A1E","#0C1E22","#0E2127","#0E252B","#0F272F","#112B32","#132F36","#143139","#16353D","#173740","#193B45","#193E48","#1A404B","#1B444F","#1D4652","#1E4955","#1F4C58","#214F5B","#22525F","#225462","#235765","#255A68","#265C6B","#275F6E","#296171","#2A6474","#2B6778","#2B697B","#2C6C7E","#2E6E81","#2F7184","#307486","#317689","#32798C","#347B90","#347E93","#358195","#368398","#37869B","#38879D","#398AA0","#3B8DA3","#3C8FA6","#3C92A9","#3D93AC","#3E96AE","#3F99B1","#409BB4","#419DB6","#439FB9","#44A2BC","#44A5BF","#45A6C1","#46A9C4","#47ABC7","#48AEC9","#49B0CC","#4AB2CE","#4BB5D2","#4FB5D2","#52B7D2","#55B8D3","#58B9D4","#5BBBD5","#5EBBD6","#61BDD7","#65BED7","#68BFD7","#6BC1D8","#6EC1D9","#71C3DA","#74C4DB","#77C5DC","#7AC7DC","#7EC7DD","#81C9DD","#84CADE","#86CBDF","#89CDE0","#8CCDE1","#8FCFE1","#92D0E2","#95D1E3","#98D2E3","#9BD3E4","#9DD5E5","#A0D6E6","#A3D7E6","#A6D8E7","#A8D9E8","#ACDBE9","#AEDCE9","#B1DCEA","#B4DEEA","#B6DFEB","#B9E1EC","#BBE1ED","#BEE2EE","#C1E4EF","#C4E5EF","#C7E6EF","#C9E7F0","#CCE8F1","#CEEAF2","#D1EAF3","#D3ECF3","#D7EDF4","#D9EEF4","#DCEFF5","#DEF0F6","#E1F2F7","#E3F3F7","#E6F3F8","#E8F5F9","#EBF6FA","#EEF7FA","#F0F8FB","#F3F9FB","#F5FBFC","#F7FBFD","#FAFDFE","#FCFEFF","#000001","#000507","#030A0C","#030F13","#051317","#07171B","#071B21","#091F25","#0A222A","#0A262E","#0C2A31","#0C2E36","#0E3039","#0F343D","#0F3741","#113945","#133D49","#13404C","#144450","#144654","#164957","#174C5A","#17505E","#195261","#1A5565","#1A5868","#1B5A6B","#1B5D6F","#1D6072","#1E6375","#1E6579","#1F687C","#216B80","#216E83","#227086","#227389","#23768C","#25798F","#257B93","#267E95","#278199","#27839C","#29869E","#2988A2","#2A8BA5","#2B8DA7","#2B90AB","#2C93AE","#2E95B1","#2E97B4","#2F9AB6","#2F9DBA","#309EBC","#31A1BF","#31A4C2","#32A6C5","#34A8C8","#34ABCB","#35AECD","#35B0D1","#36B2D3","#37B5D6","#37B7D9","#38BADC","#39BBDF","#3DBDDF","#40BEE0","#45BFE0","#48C0E1","#4BC1E1","#50C2E1","#53C3E2","#57C4E3","#5AC6E3","#5DC7E4","#61C7E4","#64C8E5","#67CAE6","#6BCBE6","#6ECCE6","#72CDE7","#75CEE7","#78CFE8","#7CD0E8","#7FD2E9","#82D2EA","#86D3EA","#88D4EA","#8CD6EB","#8FD7EB","#92D7EC","#95D9EC","#98DAED","#9BDBEE","#9EDCEE","#A1DDEF","#A5DEEF","#A7DFEF","#AAE0F0","#AEE1F0","#B0E2F1","#B3E3F2","#B6E4F2","#B9E6F3","#BCE6F3","#BFE7F3","#C1E9F4","#C5EAF4","#C7EAF5","#CAEBF6","#CDEDF6","#D0EEF7","#D3EFF7","#D6EFF7","#D8F1F8","#DCF2F8","#DEF3F9","#E1F4FA","#E4F5FA","#E6F6FB","#EAF7FB","#ECF8FB","#EFF9FC","#F2FAFC","#F4FBFD","#F7FCFE","#FAFDFE","#FCFEFF","#000001","#000507","#000A0E","#030F13","#031419","#03191E","#051D22","#052127","#07232C","#072730","#072B35","#092F38","#09323D","#093641","#0A3945","#0A3C49","#0C3F4E","#0C4351","#0C4655","#0E4958","#0E4C5C","#0E5060","#0F5263","#0F5567","#11586B","#115B6E","#115E72","#136175","#136479","#13677D","#146980","#146C84","#166F87","#16728A","#16758E","#177891","#177B94","#177D98","#19809B","#19839E","#1A86A2","#1A88A5","#1A8BA8","#1B8EAB","#1B90AE","#1B93B2","#1D95B5","#1D98B8","#1E9BBB","#1E9DBE","#1EA0C1","#1FA3C4","#1FA5C7","#1FA7CB","#21AACD","#21ADD1","#22AFD4","#22B2D7","#22B5DA","#23B6DC","#23B9E0","#23BBE3","#25BEE6","#25C1E9","#26C3EC","#2AC4EC","#2FC5EC","#32C6ED","#37C7ED","#3CC7ED","#3FC9EE","#44CAEE","#48CBEF","#4BCCEF","#50CDEF","#53CDEF","#57CEEF","#5BD0EF","#5ED1F0","#62D2F0","#66D2F1","#69D3F1","#6DD4F1","#70D5F2","#74D6F2","#78D7F2","#7BD8F3","#7FD9F3","#83DAF3","#86DBF3","#89DCF3","#8CDCF4","#90DEF4","#93DFF4","#96E0F5","#9AE1F5","#9DE1F6","#A0E2F6","#A4E3F6","#A6E5F7","#AAE6F7","#AEE6F7","#B0E7F7","#B4E8F7","#B7E9F8","#BAEAF8","#BDEAF8","#C0ECF9","#C3EDF9","#C7EEF9","#C9EFFA","#CDEFFA","#D0F0FB","#D2F1FB","#D6F3FB","#D8F3FB","#DCF4FB","#DFF5FB","#E1F6FC","#E5F7FC","#E8F7FD","#EAF9FD","#EEFAFD","#F0FBFE","#F3FBFE","#F7FCFE","#F9FDFF","#FCFEFF","#000001","#000507","#000A0E","#000F14","#00141A","#00191F","#001D25","#00212A","#03252F","#032932","#032C37","#03303C","#033440","#033745","#033B49","#033E4E","#054152","#054555","#054859","#054B5D","#054F61","#055265","#055569","#05586D","#075B71","#075E74","#076178","#07647C","#076780","#076A84","#076D87","#07708B","#09738F","#097692","#097995","#097C99","#097F9D","#0982A0","#0985A4","#0987A7","#0A8AAB","#0A8DAE","#0A90B1","#0A93B5","#0A95B8","#0A98BB","#0A9BBF","#0A9DC2","#0CA0C6","#0CA3C8","#0CA6CC","#0CA8CF","#0CABD2","#0CAED6","#0CB0D9","#0CB3DC","#0EB5E0","#0EB8E2","#0EBBE6","#0EBDE9","#0EC0EC","#0EC2EF","#0EC5F3","#0EC7F6","#0FCAF9","#14CBF9","#1ACCF9","#1FCDF9","#25CDF9","#2ACEF9","#2FCFF9","#34D0F9","#38D1FA","#3CD2FA","#40D2FA","#45D3FA","#49D4FA","#4ED5FA","#52D6FA","#56D7FA","#5AD7FB","#5DD8FB","#61D9FB","#65DAFB","#69DBFB","#6DDCFB","#71DCFB","#75DDFB","#79DEFB","#7CDFFB","#80E0FB","#84E1FB","#87E1FB","#8BE2FB","#8FE3FB","#93E4FB","#96E5FC","#99E6FC","#9DE6FC","#A0E7FC","#A4E8FC","#A7E9FC","#ABEAFC","#AEEAFC","#B2EBFD","#B5ECFD","#B8EDFD","#BBEEFD","#BFEFFD","#C2EFFD","#C6F0FD","#C9F1FD","#CDF2FE","#CFF3FE","#D2F3FE","#D6F4FE","#D9F5FE","#DCF6FE","#E0F7FE","#E3F7FE","#E6F8FF","#E9F9FF","#ECFAFF","#EFFBFF","#F3FBFF","#F6FCFF","#F9FDFF","#FCFEFF","#000001","#030505","#070909","#0A0C0C","#0E0F0F","#111313","#141616","#171919","#1A1B1D","#1B1E1F","#1E2122","#212325","#232627","#26292A","#292B2C","#2B2E2F","#2E3032","#2F3235","#313537","#343739","#36393C","#383C3E","#3B3E40","#3D4043","#3F4446","#404648","#43484A","#454A4C","#474C4F","#494F51","#4B5153","#4E5355","#505558","#51575A","#53595C","#555B5E","#575D60","#595F62","#5B6164","#5D6366","#5F6569","#60676B","#62696D","#646B6F","#666D71","#686F73","#6A7175","#6C7477","#6E767A","#6F787C","#717A7E","#737C80","#757E82","#778084","#798286","#7B8487","#7D868A","#7E878C","#80898E","#828B90","#848D92","#868F93","#879195","#899397","#8B949A","#8D969B","#8F989D","#919A9E","#939CA0","#949DA2","#969FA4","#98A1A6","#9BA3A7","#9DA5A8","#9EA6AA","#A0A8AC","#A2AAAE","#A4ACAF","#A6AEB1","#A7AFB3","#AAB1B5","#ACB3B5","#AEB4B7","#AFB5B9","#B1B7BB","#B3B9BC","#B5BBBE","#B6BCC0","#B9BEC1","#BBC0C2","#BCC1C4","#BEC3C6","#C0C5C7","#C1C7C9","#C3C8CB","#C5CACD","#C7CCCE","#C9CDCF","#CBCFD1","#CDD1D2","#CED2D4","#D0D4D6","#D2D6D7","#D3D7D9","#D6D9DB","#D7DADC","#D9DCDD","#DBDDDF","#DCDFE1","#DEE1E2","#E0E2E4","#E1E4E6","#E4E6E7","#E6E7E8","#E7E9EA","#E9EAEB","#EAECED","#ECEEEF","#EEEFF0","#EFF1F2","#F2F3F3","#F3F4F4","#F5F6F6","#F7F7F7","#F8F9F9","#FAFBFB","#FBFCFC","#FDFEFE","#000001","#030505","#070909","#090C0E","#0C0F11","#0F1314","#111619","#14191B","#171D1F","#191F22","#1B2225","#1D2529","#1F272B","#222A2E","#232C31","#262F34","#293237","#2A3539","#2C373C","#2E393F","#303C41","#323E44","#344047","#364349","#38464C","#39484F","#3C4A51","#3D4C54","#3F4F56","#415158","#43535B","#45555D","#475860","#485A62","#4A5C64","#4B5E67","#4E6069","#50626B","#51646E","#536770","#556973","#566B75","#586D77","#596F7A","#5B717C","#5D737E","#5E7581","#607883","#627A86","#637C87","#657E89","#66808C","#68828E","#6A8490","#6B8693","#6D8894","#6F8A97","#708C99","#728E9B","#73909D","#75929F","#7793A1","#7895A4","#7A98A6","#7C9AA8","#7E9CA9","#809DAB","#839EAC","#85A0AE","#86A2AF","#89A4B0","#8BA6B2","#8EA7B4","#90A9B5","#92AAB6","#94ACB7","#96AEB9","#98AFBB","#9BB1BB","#9DB3BD","#9FB5BF","#A1B6C0","#A3B7C1","#A6B9C2","#A7BBC4","#A9BCC6","#ACBEC7","#AEC0C8","#B0C1CA","#B2C3CB","#B4C4CD","#B6C6CD","#B8C7CF","#BAC9D1","#BCCBD2","#BECDD3","#C1CED5","#C2CFD6","#C4D1D7","#C7D2D8","#C8D4DA","#CAD6DC","#CDD7DC","#CED9DE","#D1DBE0","#D2DCE1","#D4DDE2","#D7DFE3","#D8E1E5","#DAE2E6","#DCE4E7","#DEE6E9","#E1E7EA","#E2E8EB","#E4EAED","#E6EBEE","#E8EDEF","#EAEFF1","#ECF0F2","#EEF2F3","#F0F3F5","#F2F4F6","#F3F6F7","#F6F7F8","#F7F9FA","#F9FBFB","#FBFCFC","#FDFEFE","#000001","#030505","#05090A","#090C0E","#0A0F13","#0C1417","#0F171A","#111A1E","#141D22","#161F25","#172329","#1A262B","#1B292F","#1D2B32","#1F2F35","#213138","#23343C","#25363E","#263841","#293C44","#2A3E47","#2B404A","#2E434C","#2F4550","#314853","#324A55","#344C58","#364F5A","#37525D","#385460","#3B5662","#3C5865","#3E5A68","#3F5D6A","#405F6D","#43616F","#446372","#456575","#476877","#486A7A","#4A6C7D","#4B6E7F","#4C7182","#4F7384","#507586","#517789","#53798B","#547C8E","#567E91","#578093","#588295","#5A8497","#5B869A","#5C889D","#5E8A9E","#5F8CA1","#618FA4","#6291A6","#6393A8","#6594AA","#6696AD","#6799AF","#699BB1","#6A9DB4","#6C9EB6","#6EA0B7","#71A2B8","#73A4BA","#76A5BB","#79A6BB","#7BA8BD","#7EAABE","#81ACC0","#83ADC1","#86AEC1","#87B0C3","#8AB2C4","#8DB3C5","#8FB5C7","#92B6C7","#94B8C9","#96BACA","#99BBCB","#9BBCCD","#9DBECD","#A0C0CE","#A2C1D0","#A5C2D1","#A7C4D2","#A9C6D3","#ACC7D4","#AEC8D6","#B0CAD7","#B3CCD7","#B5CDD9","#B7CFDA","#BAD0DC","#BBD2DC","#BED3DD","#C0D5DF","#C2D7E0","#C5D7E1","#C7D9E2","#C9DBE3","#CCDCE5","#CDDDE6","#D0DFE6","#D2E1E8","#D4E2E9","#D7E4EA","#D8E5EB","#DBE6EC","#DDE8EE","#DFEAEF","#E1EBEF","#E3ECF1","#E6EEF2","#E8EFF3","#EAF1F4","#ECF2F5","#EFF3F7","#F0F5F7","#F3F7F8","#F4F8FA","#F7F9FB","#F9FBFB","#FBFCFD","#FDFEFE","#000001","#030505","#05090A","#070C0F","#091114","#0A1419","#0C171D","#0E1B21","#111E25","#132127","#14252B","#16272F","#172A32","#192C36","#1A3039","#1B323D","#1E3540","#1F3843","#213B46","#223D49","#23404C","#254350","#264553","#274756","#2A4A59","#2B4C5B","#2C4F5E","#2E5261","#2F5464","#305667","#31596A","#325B6D","#355D70","#365F72","#376275","#386478","#39667B","#3B697E","#3C6B81","#3D6D84","#3F7086","#407288","#41748B","#43768E","#447991","#457B93","#467D96","#478099","#49829C","#4A849D","#4B86A0","#4C88A3","#4E8AA6","#4F8CA8","#508FAB","#5191AE","#5393B0","#5495B2","#5597B5","#5699B7","#579CBA","#589DBC","#599FBF","#5AA1C1","#5CA4C4","#5EA5C5","#61A6C6","#64A8C7","#67AAC7","#6AABC8","#6DADC9","#70AECA","#73AFCC","#75B1CD","#78B3CD","#7BB4CE","#7EB5CF","#81B7D0","#84B9D1","#86BAD2","#89BBD3","#8BBDD4","#8EBED5","#91C0D6","#93C1D7","#96C2D7","#99C4D8","#9CC6D9","#9EC7DB","#A0C8DC","#A3CADC","#A6CCDD","#A8CDDE","#ABCEDF","#AED0E0","#B0D1E1","#B3D2E2","#B5D4E3","#B7D6E4","#BAD7E5","#BCD8E6","#BFDAE6","#C1DBE7","#C4DCE8","#C7DEEA","#C8DFEA","#CBE1EB","#CDE2EC","#D0E4ED","#D2E5EE","#D5E6EF","#D7E8EF","#DAE9F1","#DCEAF2","#DEECF3","#E1EDF3","#E3EFF4","#E6F0F5","#E8F2F6","#EAF3F7","#EDF4F8","#EFF6F9","#F1F7FA","#F3F8FB","#F6FAFB","#F8FBFC","#FBFCFD","#FDFEFE","#000001","#000507","#03090C","#050E11","#071116","#09141A","#0A191E","#0C1B22","#0E1F27","#0E222B","#0F252F","#112932","#132B36","#142F39","#16313D","#173440","#193745","#193948","#1A3C4B","#1B3F4F","#1D4152","#1E4555","#1F4758","#21495B","#224C5F","#224F62","#235265","#255468","#26566B","#27596E","#295B71","#2A5D74","#2B6078","#2B627B","#2C657E","#2E6781","#2F6984","#306C86","#316E89","#32718C","#347390","#347593","#357895","#367A98","#377D9B","#387F9D","#3981A0","#3B84A3","#3C86A6","#3C87A9","#3D8AAC","#3E8CAE","#3F8FB1","#4091B4","#4193B6","#4395B9","#4497BC","#449ABF","#459CC1","#469DC4","#47A0C7","#48A2C9","#49A4CC","#4AA6CE","#4BA8D2","#4FAAD2","#52ABD2","#55ADD3","#58AED4","#5BAFD5","#5EB1D6","#61B3D7","#65B4D7","#68B5D7","#6BB6D8","#6EB8D9","#71BADA","#74BBDB","#77BCDC","#7ABDDC","#7EBFDD","#81C1DD","#84C1DE","#86C3DF","#89C5E0","#8CC6E1","#8FC7E1","#92C8E2","#95CAE3","#98CCE3","#9BCDE4","#9DCEE5","#A0CFE6","#A3D1E6","#A6D2E7","#A8D3E8","#ACD5E9","#AED6E9","#B1D7EA","#B4D9EA","#B6DAEB","#B9DCEC","#BBDDED","#BEDEEE","#C1E0EF","#C4E1EF","#C7E2EF","#C9E4F0","#CCE5F1","#CEE6F2","#D1E7F3","#D3E9F3","#D7EAF4","#D9EBF4","#DCEDF5","#DEEFF6","#E1EFF7","#E3F1F7","#E6F2F8","#E8F3F9","#EBF5FA","#EEF6FA","#F0F7FB","#F3F8FB","#F5FAFC","#F7FBFD","#FAFCFE","#FCFEFF","#000001","#000507","#03090C","#030E13","#051117","#07161B","#071921","#091D25","#0A1F2A","#0A232E","#0C2631","#0C2A36","#0E2C39","#0F303D","#0F3241","#113645","#133849","#133C4C","#143E50","#144054","#164457","#17465A","#17495E","#194B61","#1A4F65","#1A5168","#1B546B","#1B566F","#1D5972","#1E5B75","#1E5E79","#1F607C","#216380","#216583","#226886","#226A89","#236D8C","#256F8F","#257193","#267495","#277699","#27799C","#297B9E","#297EA2","#2A80A5","#2B83A7","#2B85AB","#2C87AE","#2E89B1","#2E8CB4","#2F8EB6","#2F91BA","#3093BC","#3195BF","#3197C2","#3299C5","#349CC8","#349DCB","#35A0CD","#35A2D1","#36A5D3","#37A6D6","#37A9D9","#38ABDC","#39AEDF","#3DAEDF","#40B0E0","#45B1E0","#48B3E1","#4BB4E1","#50B5E1","#53B6E2","#57B8E3","#5AB9E3","#5DBBE4","#61BCE4","#64BDE5","#67BFE6","#6BC0E6","#6EC1E6","#72C2E7","#75C4E7","#78C5E8","#7CC7E8","#7FC7E9","#82C9EA","#86CAEA","#88CCEA","#8CCDEB","#8FCEEB","#92CFEC","#95D1EC","#98D2ED","#9BD3EE","#9ED5EE","#A1D6EF","#A5D7EF","#A7D8EF","#AADAF0","#AEDBF0","#B0DCF1","#B3DDF2","#B6DFF2","#B9E0F3","#BCE1F3","#BFE2F3","#C1E4F4","#C5E5F4","#C7E6F5","#CAE7F6","#CDE9F6","#D0EAF7","#D3EBF7","#D6EDF7","#D8EEF8","#DCEFF8","#DEF0F9","#E1F2FA","#E4F3FA","#E6F4FB","#EAF5FB","#ECF7FB","#EFF7FC","#F2F9FC","#F4FAFD","#F7FBFE","#FAFCFE","#FCFEFF","#000001","#000507","#000A0E","#030E13","#031319","#03161E","#051A22","#051D27","#07212C","#072530","#072735","#092B38","#092E3D","#093141","#0A3445","#0A3749","#0C394E","#0C3D51","#0C4055","#0E4358","#0E465C","#0E4860","#0F4B63","#0F4E67","#11516B","#11536E","#115672","#135975","#135B79","#135E7D","#146080","#146384","#166587","#16688A","#166A8E","#176D91","#177094","#177298","#19759B","#19779E","#1A7AA2","#1A7CA5","#1A7FA8","#1B82AB","#1B84AE","#1B86B2","#1D88B5","#1D8BB8","#1E8DBB","#1E90BE","#1E92C1","#1F94C4","#1F97C7","#1F99CB","#219CCD","#219DD1","#22A0D4","#22A2D7","#22A5DA","#23A6DC","#23A9E0","#23ACE3","#25AEE6","#25B0E9","#26B2EC","#2AB4EC","#2FB5EC","#32B6ED","#37B7ED","#3CB8ED","#3FBAEE","#44BBEE","#48BCEF","#4BBDEF","#50BFEF","#53C0EF","#57C1EF","#5BC2EF","#5EC3F0","#62C5F0","#66C6F1","#69C7F1","#6DC8F1","#70CAF2","#74CBF2","#78CDF2","#7BCDF3","#7FCEF3","#83D0F3","#86D1F3","#89D2F3","#8CD3F4","#90D5F4","#93D6F4","#96D7F5","#9AD8F5","#9DD9F6","#A0DBF6","#A4DCF6","#A6DDF7","#AADEF7","#AEE0F7","#B0E1F7","#B4E1F7","#B7E3F8","#BAE4F8","#BDE6F8","#C0E6F9","#C3E8F9","#C7E9F9","#C9EAFA","#CDEBFA","#D0ECFB","#D2EEFB","#D6EFFB","#D8F0FB","#DCF1FB","#DFF3FB","#E1F3FC","#E5F5FC","#E8F6FD","#EAF7FD","#EEF8FD","#F0F9FE","#F3FBFE","#F7FBFE","#F9FDFF","#FCFEFF","#000001","#000507","#000A0E","#000E14","#00131A","#00171F","#001A25","#001E2A","#03222F","#032532","#032937","#032C3C","#032F40","#033245","#033649","#03384E","#053C52","#053E55","#054159","#05455D","#054761","#054A65","#054E69","#05506D","#075371","#075674","#075878","#075B7C","#075E80","#076084","#076387","#07658B","#09688F","#096B92","#096D95","#097099","#09739D","#0975A0","#0978A4","#097BA7","#0A7DAB","#0A80AE","#0A83B1","#0A85B5","#0A87B8","#0A8ABB","#0A8CBF","#0A8FC2","#0C91C6","#0C93C8","#0C96CC","#0C98CF","#0C9BD2","#0C9DD6","#0C9FD9","#0CA2DC","#0EA5E0","#0EA6E2","#0EA9E6","#0EACE9","#0EAEEC","#0EB0EF","#0EB2F3","#0EB5F6","#0FB7F9","#14B8F9","#1AB9F9","#1FBBF9","#25BBF9","#2ABDF9","#2FBEF9","#34BFF9","#38C1FA","#3CC1FA","#40C2FA","#45C4FA","#49C5FA","#4EC6FA","#52C7FA","#56C8FA","#5AC9FB","#5DCBFB","#61CCFB","#65CDFB","#69CEFB","#6DCFFB","#71D1FB","#75D2FB","#79D2FB","#7CD4FB","#80D5FB","#84D6FB","#87D7FB","#8BD8FB","#8FD9FB","#93DBFB","#96DCFC","#99DCFC","#9DDEFC","#A0DFFC","#A4E1FC","#A7E1FC","#ABE2FC","#AEE4FC","#B2E5FD","#B5E6FD","#B8E7FD","#BBE8FD","#BFE9FD","#C2EAFD","#C6EBFD","#C9ECFD","#CDEEFE","#CFEFFE","#D2F0FE","#D6F1FE","#D9F2FE","#DCF3FE","#E0F4FE","#E3F5FE","#E6F7FF","#E9F7FF","#ECF8FF","#EFFAFF","#F3FBFF","#F6FBFF","#F9FDFF","#FCFEFF","#000001","#030505","#070909","#0A0C0C","#0E0F0F","#111313","#141616","#171919","#1A1B1D","#1B1E1F","#1E2122","#212325","#232627","#26292A","#292B2C","#2B2E2F","#2E3032","#2F3235","#313537","#343739","#36393C","#383C3E","#3B3E40","#3D4043","#3F4346","#404548","#43474A","#45494C","#474B4F","#494E51","#4B5053","#4E5255","#505458","#51565A","#53585C","#555A5E","#575C60","#595E62","#5B6064","#5D6266","#5F6469","#60666B","#62686D","#646A6F","#666C71","#686E73","#6A7075","#6C7277","#6E747A","#6F767C","#71787E","#737A80","#757D82","#777F84","#798186","#7B8387","#7D858A","#7E868C","#80888E","#828A90","#848C92","#868E93","#879095","#899297","#8B939A","#8D959B","#8F979D","#91999E","#939BA0","#949DA2","#969EA4","#98A0A6","#9BA2A7","#9DA4A8","#9EA6AA","#A0A7AC","#A2A9AE","#A4AAAF","#A6ACB1","#A7AEB3","#AAAFB5","#ACB1B5","#AEB3B7","#AFB5B9","#B1B6BB","#B3B8BC","#B5BABE","#B6BBC0","#B9BDC1","#BBBFC2","#BCC1C4","#BEC2C6","#C0C4C7","#C1C6C9","#C3C7CB","#C5C9CD","#C7CBCE","#C9CDCF","#CBCED1","#CDD0D2","#CED2D4","#D0D3D6","#D2D5D7","#D3D7D9","#D6D8DB","#D7DADC","#D9DCDD","#DBDDDF","#DCDFE1","#DEE1E2","#E0E2E4","#E1E4E6","#E4E6E7","#E6E7E8","#E7E9EA","#E9EAEB","#EAECED","#ECEEEF","#EEEFF0","#EFF1F2","#F2F3F3","#F3F4F4","#F5F6F6","#F7F7F7","#F8F9F9","#FAFBFB","#FBFCFC","#FDFEFE","#000001","#030505","#070909","#090C0E","#0C0F11","#0F1314","#111619","#14191B","#171B1F","#191E22","#1B2125","#1D2329","#1F262B","#22292E","#232B31","#262E34","#293037","#2A3239","#2C363C","#2E383F","#303B41","#323D44","#343F47","#364149","#38444C","#39464F","#3C4851","#3D4A54","#3F4C56","#414F58","#43515B","#45535D","#475560","#485762","#4A5964","#4B5C67","#4E5E69","#50606B","#51626E","#536470","#556673","#566875","#586A77","#596C7A","#5B6E7C","#5D707E","#5E7281","#607483","#627686","#637887","#657A89","#667C8C","#687F8E","#6A8190","#6B8393","#6D8594","#6F8697","#708899","#728A9B","#738C9D","#758E9F","#7790A1","#7892A4","#7A93A6","#7C95A8","#7E97A9","#8099AB","#839BAC","#859DAE","#869EAF","#89A0B0","#8BA2B2","#8EA4B4","#90A6B5","#92A7B6","#94A9B7","#96ABB9","#98ACBB","#9BAEBB","#9DAFBD","#9FB1BF","#A1B3C0","#A3B5C1","#A6B6C2","#A7B8C4","#A9BAC6","#ACBBC7","#AEBDC8","#B0BFCA","#B2C1CB","#B4C2CD","#B6C4CD","#B8C6CF","#BAC7D1","#BCC8D2","#BECAD3","#C1CCD5","#C2CDD6","#C4CFD7","#C7D1D8","#C8D2DA","#CAD4DC","#CDD6DC","#CED7DE","#D1D9E0","#D2DBE1","#D4DCE2","#D7DEE3","#D8E0E5","#DAE1E6","#DCE3E7","#DEE4E9","#E1E6EA","#E2E7EB","#E4E9ED","#E6EAEE","#E8ECEF","#EAEEF1","#ECEFF2","#EEF1F3","#F0F3F5","#F2F4F6","#F3F6F7","#F6F7F8","#F7F9FA","#F9FBFB","#FBFCFC","#FDFEFE","#000001","#030505","#05090A","#090C0E","#0A0F13","#0C1317","#0F161A","#11191E","#141B22","#161E25","#172129","#1A252B","#1B272F","#1D2A32","#1F2C35","#212F38","#23313C","#25343E","#263641","#293844","#2A3B47","#2B3E4A","#2E404C","#2F4350","#314553","#324755","#344958","#364B5A","#374E5D","#385060","#3B5262","#3C5565","#3E5768","#3F596A","#405B6D","#435D6F","#445F72","#456175","#476377","#48657A","#4A677D","#4B6A7F","#4C6C82","#4F6E84","#507086","#517289","#53748B","#54768E","#567891","#577A93","#587C95","#5A7E97","#5B819A","#5C839D","#5E859E","#5F86A1","#6188A4","#628AA6","#638CA8","#658EAA","#6690AD","#6792AF","#6994B1","#6A96B4","#6C98B6","#6E9AB7","#719CB8","#739DBA","#769EBB","#79A0BB","#7BA2BD","#7EA4BE","#81A6C0","#83A7C1","#86A9C1","#87ABC3","#8AADC4","#8DAEC5","#8FAFC7","#92B1C7","#94B3C9","#96B5CA","#99B6CB","#9BB8CD","#9DBACD","#A0BBCE","#A2BDD0","#A5BFD1","#A7C0D2","#A9C1D3","#ACC3D4","#AEC5D6","#B0C7D7","#B3C8D7","#B5CAD9","#B7CCDA","#BACDDC","#BBCFDC","#BED0DD","#C0D2DF","#C2D3E0","#C5D5E1","#C7D7E2","#C9D8E3","#CCDAE5","#CDDCE6","#D0DDE6","#D2DFE8","#D4E0E9","#D7E1EA","#D8E3EB","#DBE5EC","#DDE6EE","#DFE8EF","#E1EAEF","#E3EBF1","#E6EDF2","#E8EFF3","#EAEFF4","#ECF1F5","#EFF3F7","#F0F4F7","#F3F6F8","#F4F7FA","#F7F9FB","#F9FBFB","#FBFCFD","#FDFEFE","#000001","#030505","#05090A","#070C0F","#090F14","#0A1319","#0C161D","#0E1921","#111D25","#131F27","#14222B","#16252F","#172732","#192A36","#1A2C39","#1B303D","#1E3240","#1F3543","#213746","#223949","#233C4C","#253E50","#264153","#274456","#2A4659","#2B485B","#2C4A5E","#2E4C61","#2F4F64","#305167","#31546A","#32566D","#355870","#365A72","#375C75","#385E78","#39607B","#3B637E","#3C6581","#3D6784","#3F6986","#406B88","#416D8B","#436F8E","#447291","#457493","#467696","#477899","#497A9C","#4A7C9D","#4B7EA0","#4C80A3","#4E83A6","#4F85A8","#5086AB","#5188AE","#538AB0","#548CB2","#558EB5","#5691B7","#5793BA","#5894BC","#5996BF","#5A98C1","#5C9AC4","#5E9CC5","#619DC6","#649FC7","#67A1C7","#6AA3C8","#6DA4C9","#70A6CA","#73A7CC","#75A9CD","#78ABCD","#7BADCE","#7EAECF","#81AFD0","#84B1D1","#86B3D2","#89B5D3","#8BB6D4","#8EB8D5","#91BAD6","#93BBD7","#96BCD7","#99BED8","#9CC0D9","#9EC1DB","#A0C3DC","#A3C5DC","#A6C7DD","#A8C7DE","#ABC9DF","#AECBE0","#B0CDE1","#B3CEE2","#B5D0E3","#B7D2E4","#BAD2E5","#BCD4E6","#BFD6E6","#C1D7E7","#C4D9E8","#C7DBEA","#C8DCEA","#CBDEEB","#CDDFEC","#D0E1ED","#D2E2EE","#D5E4EF","#D7E6EF","#DAE7F1","#DCE9F2","#DEEAF3","#E1EBF3","#E3EDF4","#E6EFF5","#E8F0F6","#EAF2F7","#EDF3F8","#EFF4F9","#F1F6FA","#F3F7FB","#F6F9FB","#F8FBFC","#FBFCFD","#FDFEFE","#000001","#000507","#03090C","#050C11","#070F16","#09131A","#0A171E","#0C1A22","#0E1D27","#0E1F2B","#0F222F","#112532","#132936","#142B39","#162E3D","#173040","#193245","#193548","#1A384B","#1B3B4F","#1D3D52","#1E3F55","#1F4158","#21455B","#22475F","#224962","#234B65","#254E68","#26506B","#27536E","#295571","#2A5774","#2B5978","#2B5B7B","#2C5D7E","#2E6081","#2F6284","#306486","#316689","#32688C","#346B90","#346D93","#356F95","#367198","#37739B","#38759D","#3978A0","#3B7AA3","#3C7CA6","#3C7EA9","#3D80AC","#3E82AE","#3F85B1","#4086B4","#4188B6","#438AB9","#448CBC","#448FBF","#4591C1","#4693C4","#4794C7","#4896C9","#4998CC","#4A9BCE","#4B9DD2","#4F9ED2","#529FD2","#55A1D3","#58A3D4","#5BA5D5","#5EA6D6","#61A8D7","#65A9D7","#68ABD7","#6BADD8","#6EAED9","#71B0DA","#74B1DB","#77B3DC","#7AB5DC","#7EB6DD","#81B8DD","#84BADE","#86BBDF","#89BCE0","#8CBEE1","#8FC0E1","#92C1E2","#95C3E3","#98C4E3","#9BC6E4","#9DC7E5","#A0C9E6","#A3CBE6","#A6CCE7","#A8CDE8","#ACCFE9","#AED1E9","#B1D2EA","#B4D4EA","#B6D5EB","#B9D7EC","#BBD8ED","#BEDAEE","#C1DCEF","#C4DDEF","#C7DEEF","#C9E0F0","#CCE1F1","#CEE3F2","#D1E5F3","#D3E6F3","#D7E7F4","#D9E9F4","#DCEAF5","#DEECF6","#E1EEF7","#E3EFF7","#E6F0F8","#E8F2F9","#EBF3FA","#EEF5FA","#F0F7FB","#F3F7FB","#F5F9FC","#F7FBFD","#FAFCFE","#FCFEFF","#000001","#000507","#03090C","#030C13","#050F17","#07141B","#071721","#091A25","#0A1D2A","#0A1F2E","#0C2331","#0C2636","#0E2939","#0F2B3D","#0F2F41","#113145","#133449","#13364C","#143850","#143C54","#163E57","#17405A","#17435E","#194561","#1A4865","#1A4A68","#1B4C6B","#1B4F6F","#1D5272","#1E5475","#1E5679","#1F587C","#215A80","#215D83","#225F86","#226189","#23638C","#25658F","#256893","#266A95","#276C99","#276E9C","#29719E","#2973A2","#2A75A5","#2B77A7","#2B79AB","#2C7CAE","#2E7EB1","#2E80B4","#2F82B6","#2F84BA","#3086BC","#3188BF","#318AC2","#328CC5","#348FC8","#3491CB","#3593CD","#3594D1","#3696D3","#3799D6","#379BD9","#389DDC","#399EDF","#3DA0DF","#40A2E0","#45A4E0","#48A5E1","#4BA6E1","#50A8E1","#53AAE2","#57ACE3","#5AADE3","#5DAEE4","#61B0E4","#64B2E5","#67B3E6","#6BB5E6","#6EB6E6","#72B8E7","#75BAE7","#78BBE8","#7CBCE8","#7FBEE9","#82C0EA","#86C1EA","#88C2EA","#8CC4EB","#8FC6EB","#92C7EC","#95C8EC","#98CAED","#9BCCEE","#9ECDEE","#A1CFEF","#A5D0EF","#A7D2EF","#AAD3F0","#AED5F0","#B0D7F1","#B3D7F2","#B6D9F2","#B9DBF3","#BCDCF3","#BFDDF3","#C1DFF4","#C5E1F4","#C7E2F5","#CAE4F6","#CDE5F6","#D0E6F7","#D3E8F7","#D6EAF7","#D8EBF8","#DCECF8","#DEEEF9","#E1EFFA","#E4F1FA","#E6F2FB","#EAF3FB","#ECF5FB","#EFF7FC","#F2F8FC","#F4F9FD","#F7FBFE","#FAFCFE","#FCFEFF","#000001","#000507","#00090E","#030C13","#031119","#03141E","#051722","#051A27","#071E2C","#072130","#072335","#092638","#092A3D","#092C41","#0A2F45","#0A3149","#0C354E","#0C3751","#0C3955","#0E3C58","#0E3F5C","#0E4160","#0F4463","#0F4667","#11496B","#114B6E","#114E72","#135075","#135379","#13557D","#145780","#145984","#165C87","#165E8A","#16608E","#176291","#176594","#176798","#19699B","#196B9E","#1A6EA2","#1A70A5","#1A72A8","#1B74AB","#1B77AE","#1B79B2","#1D7BB5","#1D7DB8","#1E80BB","#1E82BE","#1E84C1","#1F86C4","#1F88C7","#1F8ACB","#218CCD","#218ED1","#2291D4","#2293D7","#2294DA","#2396DC","#2399E0","#239BE3","#259DE6","#259EE9","#26A1EC","#2AA2EC","#2FA4EC","#32A6ED","#37A7ED","#3CA8ED","#3FAAEE","#44ACEE","#48AEEF","#4BAEEF","#50B0EF","#53B2EF","#57B4EF","#5BB5EF","#5EB6F0","#62B8F0","#66BAF1","#69BBF1","#6DBCF1","#70BEF2","#74C0F2","#78C1F2","#7BC2F3","#7FC4F3","#83C6F3","#86C7F3","#89C8F3","#8CCAF4","#90CCF4","#93CDF4","#96CEF5","#9AD0F5","#9DD2F6","#A0D2F6","#A4D4F6","#A6D6F7","#AAD7F7","#AED8F7","#B0DAF7","#B4DCF7","#B7DDF8","#BADEF8","#BDE0F8","#C0E1F9","#C3E3F9","#C7E4F9","#C9E6FA","#CDE7FA","#D0E9FB","#D2EAFB","#D6EBFB","#D8EDFB","#DCEFFB","#DFEFFB","#E1F1FC","#E5F3FC","#E8F4FD","#EAF5FD","#EEF7FD","#F0F8FE","#F3FAFE","#F7FBFE","#F9FCFF","#FCFEFF","#000001","#000507","#00090E","#000C14","#00111A","#00141F","#001725","#001B2A","#031E2F","#032132","#032337","#03273C","#032A40","#032C45","#033049","#03324E","#053552","#053755","#053B59","#053D5D","#053F61","#054365","#054569","#05476D","#074A71","#074C74","#074F78","#07517C","#075480","#075684","#075887","#075B8B","#095D8F","#095F92","#096195","#096499","#09669D","#0968A0","#096BA4","#096DA7","#0A6FAB","#0A72AE","#0A74B1","#0A76B5","#0A78B8","#0A7BBB","#0A7DBF","#0A7FC2","#0C82C6","#0C84C8","#0C86CC","#0C87CF","#0C8AD2","#0C8CD6","#0C8ED9","#0C91DC","#0E93E0","#0E94E2","#0E96E6","#0E99E9","#0E9BEC","#0E9DEF","#0E9FF3","#0EA1F6","#0FA3F9","#14A5F9","#1AA6F9","#1FA7F9","#25A9F9","#2AABF9","#2FACF9","#34AEF9","#38AFFA","#3CB1FA","#40B2FA","#45B4FA","#49B5FA","#4EB6FA","#52B8FA","#56BAFA","#5ABBFB","#5DBCFB","#61BEFB","#65C0FB","#69C1FB","#6DC2FB","#71C4FB","#75C6FB","#79C7FB","#7CC8FB","#80CAFB","#84CBFB","#87CDFB","#8BCEFB","#8FCFFB","#93D1FB","#96D2FC","#99D4FC","#9DD5FC","#A0D7FC","#A4D8FC","#A7D9FC","#ABDBFC","#AEDCFC","#B2DEFD","#B5DFFD","#B8E1FD","#BBE2FD","#BFE3FD","#C2E5FD","#C6E6FD","#C9E7FD","#CDE9FE","#CFEAFE","#D2ECFE","#D6EDFE","#D9EFFE","#DCF0FE","#E0F1FE","#E3F3FE","#E6F4FF","#E9F6FF","#ECF7FF","#EFF8FF","#F3FAFF","#F6FBFF","#F9FCFF","#FCFEFF","#000001","#030305","#070709","#0A0A0C","#0E0E0F","#111113","#141416","#171719","#1A1A1D","#1B1D1F","#1E1F22","#212225","#232527","#26272A","#292A2C","#2B2C2F","#2E2F32","#2F3135","#313437","#343639","#36383C","#383B3E","#3B3D40","#3D3F43","#3F4146","#404448","#43464A","#45484C","#474A4F","#494C51","#4B4F53","#4E5155","#505358","#51555A","#53575C","#55595E","#575B60","#595D62","#5B5F64","#5D6166","#5F6369","#60656B","#62676D","#64696F","#666B71","#686D73","#6A6F75","#6C7177","#6E737A","#6F757C","#71777E","#737980","#757B82","#777D84","#797F86","#7B8187","#7D838A","#7E858C","#80868E","#828890","#848A92","#868C93","#878E95","#899097","#8B929A","#8D939B","#8F959D","#91979E","#9399A0","#949BA2","#969DA4","#989EA6","#9BA0A7","#9DA2A8","#9EA4AA","#A0A6AC","#A2A7AE","#A4A9AF","#A6ABB1","#A7ADB3","#AAAEB5","#ACB0B5","#AEB2B7","#AFB4B9","#B1B5BB","#B3B7BC","#B5B9BE","#B6BBC0","#B9BCC1","#BBBEC2","#BCC0C4","#BEC1C6","#C0C3C7","#C1C5C9","#C3C7CB","#C5C8CD","#C7CACE","#C9CCCF","#CBCDD1","#CDCFD2","#CED1D4","#D0D2D6","#D2D4D7","#D3D6D9","#D6D7DB","#D7D9DC","#D9DBDD","#DBDCDF","#DCDEE1","#DEE0E2","#E0E1E4","#E1E3E6","#E4E5E7","#E6E6E8","#E7E8EA","#E9EAEB","#EAEBED","#ECEDEF","#EEEFF0","#EFF0F2","#F2F2F3","#F3F3F4","#F5F5F6","#F7F7F7","#F8F8F9","#FAFAFB","#FBFBFC","#FDFDFE","#000001","#030305","#070709","#090A0E","#0C0E11","#0F1114","#111419","#14171B","#171A1F","#191D22","#1B1F25","#1D2229","#1F252B","#22272E","#232A31","#262C34","#292F37","#2A3139","#2C343C","#2E363F","#303841","#323B44","#343D47","#363F49","#38414C","#39444F","#3C4651","#3D4854","#3F4A56","#414C58","#434F5B","#45515D","#475360","#485562","#4A5764","#4B5967","#4E5B69","#505D6B","#515F6E","#536170","#556373","#566575","#586777","#59697A","#5B6B7C","#5D6D7E","#5E6F81","#607183","#627386","#637587","#657789","#66798C","#687B8E","#6A7D90","#6B7F93","#6D8194","#6F8397","#708599","#72869B","#73889D","#758A9F","#778CA1","#788EA4","#7A90A6","#7C92A8","#7E93A9","#8095AB","#8397AC","#8599AE","#869BAF","#899DB0","#8B9EB2","#8EA0B4","#90A2B5","#92A4B6","#94A6B7","#96A7B9","#98A9BB","#9BABBB","#9DADBD","#9FAEBF","#A1B0C0","#A3B2C1","#A6B4C2","#A7B5C4","#A9B7C6","#ACB9C7","#AEBBC8","#B0BCCA","#B2BECB","#B4C0CD","#B6C1CD","#B8C3CF","#BAC5D1","#BCC7D2","#BEC8D3","#C1CAD5","#C2CCD6","#C4CDD7","#C7CFD8","#C8D1DA","#CAD2DC","#CDD4DC","#CED6DE","#D1D7E0","#D2D9E1","#D4DBE2","#D7DCE3","#D8DEE5","#DAE0E6","#DCE1E7","#DEE3E9","#E1E5EA","#E2E6EB","#E4E8ED","#E6EAEE","#E8EBEF","#EAEDF1","#ECEFF2","#EEF0F3","#F0F2F5","#F2F3F6","#F3F5F7","#F6F7F8","#F7F8FA","#F9FAFB","#FBFBFC","#FDFDFE","#000001","#030305","#05070A","#090A0E","#0A0E13","#0C1117","#0F141A","#11171E","#141A22","#161D25","#171F29","#1A222B","#1B252F","#1D2732","#1F2A35","#212C38","#232F3C","#25313E","#263441","#293644","#2A3847","#2B3B4A","#2E3D4C","#2F3F50","#314153","#324455","#344658","#36485A","#374A5D","#384C60","#3B4F62","#3C5165","#3E5368","#3F556A","#40576D","#43596F","#445B72","#455D75","#475F77","#48617A","#4A637D","#4B657F","#4C6782","#4F6984","#506B86","#516D89","#536F8B","#54718E","#567391","#577593","#587795","#5A7997","#5B7A9A","#5C7C9D","#5E7E9E","#5F80A1","#6182A4","#6284A6","#6386A8","#6587AA","#6689AD","#678BAF","#698DB1","#6A8FB4","#6C91B6","#6E93B7","#7194B8","#7396BA","#7698BB","#799ABB","#7B9CBD","#7E9DBE","#819FC0","#83A1C1","#86A3C1","#87A5C3","#8AA6C4","#8DA9C5","#8FABC7","#92ADC7","#94AEC9","#96B0CA","#99B2CB","#9BB4CD","#9DB5CD","#A0B7CE","#A2B9D0","#A5BBD1","#A7BCD2","#A9BED3","#ACC0D4","#AEC1D6","#B0C3D7","#B3C5D7","#B5C7D9","#B7C8DA","#BACADC","#BBCCDC","#BECDDD","#C0CFDF","#C2D1E0","#C5D2E1","#C7D4E2","#C9D6E3","#CCD7E5","#CDD9E6","#D0DBE6","#D2DCE8","#D4DEE9","#D7E0EA","#D8E1EB","#DBE3EC","#DDE5EE","#DFE6EF","#E1E8EF","#E3EAF1","#E6EBF2","#E8EDF3","#EAEFF4","#ECF0F5","#EFF2F7","#F0F3F7","#F3F5F8","#F4F7FA","#F7F8FB","#F9FAFB","#FBFBFD","#FDFDFE","#000001","#030305","#05070A","#070A0F","#090E14","#0A1119","#0C141D","#0E1721","#111A25","#131D27","#141F2B","#16222F","#172532","#192736","#1A2A39","#1B2C3D","#1E2F40","#1F3143","#213446","#223649","#23384C","#253B50","#263D53","#273F56","#2A4159","#2B445B","#2C465E","#2E4861","#2F4A64","#304C67","#314F6A","#32516D","#355370","#365572","#375775","#385978","#395B7B","#3B5C7E","#3C5E81","#3D6084","#3F6286","#406488","#41668B","#43688E","#446A91","#456C93","#466E96","#477099","#49729C","#4A749D","#4B76A0","#4C78A3","#4E7AA6","#4F7CA8","#507EAB","#5180AE","#5382B0","#5484B2","#5586B5","#5687B7","#5789BA","#588BBC","#598DBF","#5A8FC1","#5C91C4","#5E93C5","#6194C6","#6496C7","#6798C7","#6A9AC8","#6D9CC9","#709DCA","#739FCC","#75A1CD","#78A3CD","#7BA5CE","#7EA6CF","#81A8D0","#84AAD1","#86ACD2","#89AED3","#8BAFD4","#8EB1D5","#91B3D6","#93B5D7","#96B6D7","#99B8D8","#9CBAD9","#9EBBDB","#A0BDDC","#A3BFDC","#A6C1DD","#A8C3DE","#ABC5DF","#AEC7E0","#B0C8E1","#B3CAE2","#B5CCE3","#B7CDE4","#BACFE5","#BCD1E6","#BFD2E6","#C1D4E7","#C4D6E8","#C7D7EA","#C8D9EA","#CBDBEB","#CDDCEC","#D0DEED","#D2E0EE","#D5E1EF","#D7E3EF","#DAE5F1","#DCE6F2","#DEE8F3","#E1EAF3","#E3EBF4","#E6EDF5","#E8EFF6","#EAF0F7","#EDF2F8","#EFF3F9","#F1F5FA","#F3F7FB","#F6F8FB","#F8FAFC","#FBFBFD","#FDFDFE","#000001","#000307","#03070C","#050A11","#070E16","#09111A","#0A141E","#0C1722","#0E1A27","#0E1D2B","#0F1F2F","#112232","#132536","#142739","#162A3D","#172C40","#192F45","#193148","#1A344B","#1B364F","#1D3852","#1E3B55","#1F3D58","#213F5B","#22415F","#224462","#234665","#254868","#264A6B","#274B6E","#294E71","#2A5074","#2B5278","#2B547B","#2C567E","#2E5881","#2F5A84","#305C86","#315E89","#32608C","#346290","#346493","#356695","#366898","#376A9B","#386C9D","#396EA0","#3B70A3","#3C72A6","#3C74A9","#3D76AC","#3E78AE","#3F7AB1","#407CB4","#417EB6","#4380B9","#4482BC","#4483BF","#4585C1","#4686C4","#4788C7","#488AC9","#498CCC","#4A8ECE","#4B90D2","#4F92D2","#5293D2","#5595D3","#5897D4","#5B99D5","#5E9BD6","#619DD7","#659FD7","#68A1D7","#6BA3D8","#6EA5D9","#71A6DA","#74A8DB","#77AADC","#7AACDC","#7EAEDD","#81AFDD","#84B1DE","#86B3DF","#89B5E0","#8CB6E1","#8FB8E1","#92BAE2","#95BBE3","#98BDE3","#9BBFE4","#9DC1E5","#A0C2E6","#A3C4E6","#A6C6E7","#A8C7E8","#ACC9E9","#AECBE9","#B1CDEA","#B4CEEA","#B6D1EB","#B9D2EC","#BBD4ED","#BED6EE","#C1D7EF","#C4D9EF","#C7DBEF","#C9DCF0","#CCDEF1","#CEE0F2","#D1E1F3","#D3E3F3","#D7E5F4","#D9E6F4","#DCE8F5","#DEEAF6","#E1EBF7","#E3EDF7","#E6EFF8","#E8F0F9","#EBF2FA","#EEF3FA","#F0F5FB","#F3F7FB","#F5F8FC","#F7FAFD","#FAFBFE","#FCFDFF","#000001","#000307","#03070C","#030A13","#050E17","#07111B","#071421","#091725","#0A1A2A","#0A1D2E","#0C1F31","#0C2236","#0E2539","#0F273D","#0F2A41","#112C45","#132F49","#13314C","#143450","#143654","#163857","#173B5A","#173D5E","#193F61","#1A4065","#1A4368","#1B456B","#1B476F","#1D4972","#1E4B75","#1E4E79","#1F507C","#215280","#215483","#225686","#225889","#235A8C","#255C8F","#255E93","#266095","#276299","#27649C","#29669E","#2968A2","#2A6AA5","#2B6CA7","#2B6EAB","#2C6FAE","#2E71B1","#2E73B4","#2F75B6","#2F77BA","#3079BC","#317BBF","#317DC2","#327FC5","#3481C8","#3483CB","#3585CD","#3586D1","#3688D3","#378AD6","#378CD9","#388EDC","#3990DF","#3D92DF","#4093E0","#4595E0","#4897E1","#4B99E1","#509BE1","#539DE2","#579EE3","#5AA0E3","#5DA2E4","#61A4E4","#64A6E5","#67A7E6","#6BA9E6","#6EABE6","#72ADE7","#75AEE7","#78B1E8","#7CB3E8","#7FB5E9","#82B6EA","#86B8EA","#88BAEA","#8CBBEB","#8FBDEB","#92BFEC","#95C1EC","#98C2ED","#9BC4EE","#9EC6EE","#A1C7EF","#A5C9EF","#A7CBEF","#AACDF0","#AECEF0","#B0D0F1","#B3D2F2","#B6D3F2","#B9D5F3","#BCD7F3","#BFD9F3","#C1DBF4","#C5DCF4","#C7DEF5","#CAE0F6","#CDE1F6","#D0E3F7","#D3E5F7","#D6E6F7","#D8E8F8","#DCEAF8","#DEEBF9","#E1EDFA","#E4EFFA","#E6F0FB","#EAF2FB","#ECF3FB","#EFF5FC","#F2F7FC","#F4F8FD","#F7FAFE","#FAFBFE","#FCFDFF","#000001","#000307","#00070E","#030A13","#030E19","#03111E","#051422","#051727","#071A2C","#071D30","#071F35","#092238","#09253D","#092741","#0A2A45","#0A2C49","#0C2F4E","#0C3151","#0C3455","#0E3658","#0E375C","#0E3960","#0F3C63","#0F3E67","#11406B","#11436E","#114572","#134775","#134979","#134B7D","#144E80","#145084","#165287","#16548A","#16568E","#175891","#175A94","#175C98","#195E9B","#19609E","#1A61A2","#1A63A5","#1A65A8","#1B67AB","#1B69AE","#1B6BB2","#1D6DB5","#1D6FB8","#1E71BB","#1E73BE","#1E75C1","#1F77C4","#1F79C7","#1F7BCB","#217DCD","#217FD1","#2281D4","#2283D7","#2285DA","#2386DC","#2387E0","#2389E3","#258BE6","#258DE9","#268FEC","#2A91EC","#2F93EC","#3294ED","#3796ED","#3C99ED","#3F9BEE","#449DEE","#489EEF","#4BA0EF","#50A2EF","#53A4EF","#57A6EF","#5BA7EF","#5EA9F0","#62ABF0","#66ADF1","#69AEF1","#6DB0F1","#70B2F2","#74B4F2","#78B5F2","#7BB7F3","#7FB9F3","#83BBF3","#86BDF3","#89BFF3","#8CC1F4","#90C2F4","#93C4F4","#96C6F5","#9AC7F5","#9DC9F6","#A0CBF6","#A4CDF6","#A6CEF7","#AAD0F7","#AED2F7","#B0D3F7","#B4D5F7","#B7D7F8","#BAD8F8","#BDDAF8","#C0DCF9","#C3DDF9","#C7E0F9","#C9E1FA","#CDE3FA","#D0E5FB","#D2E6FB","#D6E8FB","#D8EAFB","#DCEBFB","#DFEDFB","#E1EFFC","#E5F0FC","#E8F2FD","#EAF3FD","#EEF5FD","#F0F7FE","#F3F8FE","#F7FAFE","#F9FBFF","#FCFDFF","#000001","#000307","#00070E","#000A14","#000E1A","#00111F","#001425","#00172A","#031A2F","#031D32","#031F37","#03223C","#032540","#032745","#032A49","#032C4E","#052F52","#053155","#053259","#05355D","#053761","#053965","#053C69","#053E6D","#074071","#074374","#074578","#07477C","#074980","#074B84","#074E87","#07508B","#09528F","#095492","#095695","#095799","#09599D","#095BA0","#095DA4","#095FA7","#0A61AB","#0A63AE","#0A65B1","#0A67B5","#0A69B8","#0A6BBB","#0A6DBF","#0A6FC2","#0C71C6","#0C73C8","#0C75CC","#0C77CF","#0C78D2","#0C7AD6","#0C7CD9","#0C7EDC","#0E80E0","#0E82E2","#0E84E6","#0E86E9","#0E87EC","#0E89EF","#0E8BF3","#0E8DF6","#0F8FF9","#1491F9","#1A93F9","#1F94F9","#2596F9","#2A98F9","#2F9AF9","#349CF9","#389DFA","#3C9FFA","#40A1FA","#45A3FA","#49A5FA","#4EA7FA","#52A9FA","#56ABFA","#5AADFB","#5DAEFB","#61B0FB","#65B2FB","#69B4FB","#6DB5FB","#71B7FB","#75B9FB","#79BBFB","#7CBCFB","#80BEFB","#84C0FB","#87C1FB","#8BC3FB","#8FC6FB","#93C7FB","#96C9FC","#99CBFC","#9DCDFC","#A0CEFC","#A4D0FC","#A7D2FC","#ABD3FC","#AED5FC","#B2D7FD","#B5D8FD","#B8DAFD","#BBDCFD","#BFDDFD","#C2DFFD","#C6E1FD","#C9E3FD","#CDE5FE","#CFE6FE","#D2E8FE","#D6EAFE","#D9EBFE","#DCEDFE","#E0EFFE","#E3F0FE","#E6F2FF","#E9F3FF","#ECF5FF","#EFF7FF","#F3F8FF","#F6FAFF","#F9FBFF","#FCFDFF","#000001","#030305","#070709","#0A0A0C","#0E0E0F","#111113","#141416","#171719","#1A1A1D","#1B1D1F","#1E1F22","#212225","#232527","#26272A","#292A2C","#2B2C2F","#2E2F32","#2F3135","#313437","#343639","#36383C","#383B3E","#3B3D40","#3D3F43","#3F4146","#404448","#43464A","#45484C","#474A4F","#494C51","#4B4F53","#4E5155","#505358","#51555A","#53575C","#55595E","#575B60","#595C62","#5B5E64","#5D6066","#5F6269","#60646B","#62666D","#64686F","#666A71","#686C73","#6A6E75","#6C7077","#6E727A","#6F747C","#71767E","#737880","#757A82","#777C84","#797E86","#7B8087","#7D828A","#7E848C","#80868E","#828790","#848992","#868B93","#878D95","#898F97","#8B919A","#8D939B","#8F949D","#91969E","#9398A0","#949AA2","#969CA4","#989DA6","#9B9FA7","#9DA1A8","#9EA3AA","#A0A5AC","#A2A6AE","#A4A8AF","#A6AAB1","#A7ACB3","#AAAEB5","#ACAFB5","#AEB1B7","#AFB3B9","#B1B5BB","#B3B6BC","#B5B8BE","#B6BAC0","#B9BBC1","#BBBDC2","#BCBFC4","#BEC1C6","#C0C3C7","#C1C5C9","#C3C7CB","#C5C8CD","#C7CACE","#C9CCCF","#CBCDD1","#CDCFD2","#CED1D4","#D0D2D6","#D2D4D7","#D3D6D9","#D6D7DB","#D7D9DC","#D9DBDD","#DBDCDF","#DCDEE1","#DEE0E2","#E0E1E4","#E1E3E6","#E4E5E7","#E6E6E8","#E7E8EA","#E9EAEB","#EAEBED","#ECEDEF","#EEEFF0","#EFF0F2","#F2F2F3","#F3F3F4","#F5F5F6","#F7F7F7","#F8F8F9","#FAFAFB","#FBFBFC","#FDFDFE","#000001","#030305","#070709","#090A0E","#0C0E11","#0F1114","#111419","#14171B","#171A1F","#191D22","#1B1F25","#1D2229","#1F252B","#22262E","#232931","#262B34","#292E37","#2A3039","#2C323C","#2E353F","#303741","#323944","#343C47","#363E49","#38404C","#39414F","#3C4451","#3D4654","#3F4856","#414A58","#434C5B","#454F5D","#475160","#485362","#4A5564","#4B5767","#4E5969","#505A6B","#515C6E","#535E70","#556073","#566275","#586477","#59667A","#5B687C","#5D6A7E","#5E6C81","#606E83","#627086","#637187","#657389","#66758C","#68778E","#6A7990","#6B7B93","#6D7D94","#6F7F97","#708199","#72839B","#73859D","#75869F","#7787A1","#7889A4","#7A8BA6","#7C8DA8","#7E8FA9","#8091AB","#8393AC","#8595AE","#8697AF","#8999B0","#8B9BB2","#8E9DB4","#909EB5","#92A0B6","#94A2B7","#96A4B9","#98A6BB","#9BA7BB","#9DA9BD","#9FACBF","#A1AEC0","#A3AFC1","#A6B1C2","#A7B3C4","#A9B5C6","#ACB6C7","#AEB8C8","#B0BACA","#B2BBCB","#B4BDCD","#B6BFCD","#B8C1CF","#BAC3D1","#BCC5D2","#BEC7D3","#C1C8D5","#C2CAD6","#C4CCD7","#C7CDD8","#C8CFDA","#CAD1DC","#CDD2DC","#CED4DE","#D1D7E0","#D2D8E1","#D4DAE2","#D7DCE3","#D8DDE5","#DADFE6","#DCE1E7","#DEE2E9","#E1E4EA","#E2E6EB","#E4E7ED","#E6E9EE","#E8EBEF","#EAEDF1","#ECEFF2","#EEF0F3","#F0F2F5","#F2F3F6","#F3F5F7","#F6F7F8","#F7F8FA","#F9FAFB","#FBFBFC","#FDFDFE","#000001","#030305","#05070A","#090A0E","#0A0E13","#0C1117","#0F141A","#11171E","#141922","#161B25","#171E29","#1A212B","#1B232F","#1D2632","#1F2935","#212A38","#232C3C","#252F3E","#263141","#293444","#2A3647","#2B384A","#2E394C","#2F3C50","#313E53","#324055","#344358","#36455A","#37475D","#384960","#3B4A62","#3C4C65","#3E4F68","#3F516A","#40536D","#43556F","#445772","#455875","#475A77","#485C7A","#4A5E7D","#4B607F","#4C6282","#4F6484","#506586","#516789","#53698B","#546B8E","#566D91","#576F93","#587195","#5A7397","#5B749A","#5C769D","#5E789E","#5F7AA1","#617CA4","#627EA6","#6380A8","#6581AA","#6683AD","#6785AF","#6986B1","#6A88B4","#6C8AB6","#6E8CB7","#718EB8","#7390BA","#7692BB","#7993BB","#7B96BD","#7E98BE","#819AC0","#839CC1","#869DC1","#879FC3","#8AA1C4","#8DA4C5","#8FA6C7","#92A7C7","#94A9C9","#96ABCA","#99ADCB","#9BAECD","#9DB0CD","#A0B3CE","#A2B5D0","#A5B6D1","#A7B8D2","#A9BAD3","#ACBBD4","#AEBDD6","#B0C0D7","#B3C1D7","#B5C3D9","#B7C5DA","#BAC7DC","#BBC8DC","#BECADD","#C0CDDF","#C2CEE0","#C5D0E1","#C7D2E2","#C9D3E3","#CCD5E5","#CDD7E6","#D0D8E6","#D2DBE8","#D4DCE9","#D7DEEA","#D8E0EB","#DBE1EC","#DDE3EE","#DFE5EF","#E1E7EF","#E3E9F1","#E6EAF2","#E8ECF3","#EAEEF4","#ECEFF5","#EFF1F7","#F0F3F7","#F3F5F8","#F4F7FA","#F7F8FB","#F9FAFB","#FBFBFD","#FDFDFE","#000001","#030305","#05070A","#070A0F","#090E14","#0A1119","#0C131D","#0E1621","#111925","#131B27","#141E2B","#161F2F","#172232","#192536","#1A2739","#1B2A3D","#1E2B40","#1F2E43","#213046","#223249","#23354C","#253650","#263853","#273B56","#2A3D59","#2B3F5B","#2C415E","#2E4361","#2F4564","#304767","#31496A","#324B6D","#354C70","#364F72","#375175","#385378","#39557B","#3B567E","#3C5881","#3D5A84","#3F5C86","#405E88","#415F8B","#43618E","#446391","#456593","#466796","#476999","#496A9C","#4A6C9D","#4B6EA0","#4C70A3","#4E72A6","#4F73A8","#5075AB","#5177AE","#5379B0","#547BB2","#557CB5","#567EB7","#5780BA","#5882BC","#5984BF","#5A85C1","#5C86C4","#5E88C5","#618BC6","#648DC7","#678FC7","#6A91C8","#6D93C9","#7095CA","#7397CC","#7599CD","#789BCD","#7B9DCE","#7E9FCF","#81A1D0","#84A3D1","#86A5D2","#89A6D3","#8BA9D4","#8EABD5","#91ADD6","#93AED7","#96B0D7","#99B2D8","#9CB5D9","#9EB6DB","#A0B8DC","#A3BADC","#A6BBDD","#A8BEDE","#ABC0DF","#AEC1E0","#B0C3E1","#B3C5E2","#B5C7E3","#B7C9E4","#BACBE5","#BCCDE6","#BFCEE6","#C1D1E7","#C4D2E8","#C7D4EA","#C8D6EA","#CBD7EB","#CDD9EC","#D0DCED","#D2DDEE","#D5DFEF","#D7E1EF","#DAE2F1","#DCE5F2","#DEE6F3","#E1E8F3","#E3EAF4","#E6EBF5","#E8EEF6","#EAEFF7","#EDF1F8","#EFF3F9","#F1F4FA","#F3F7FB","#F6F8FB","#F8FAFC","#FBFBFD","#FDFDFE","#000001","#000307","#03070C","#050A11","#070E16","#090F1A","#0A131E","#0C1622","#0E1927","#0E1A2B","#0F1D2F","#111F32","#132236","#142339","#16263D","#172940","#192B45","#192C48","#1A2F4B","#1B314F","#1D3452","#1E3555","#1F3758","#21395B","#223C5F","#223D62","#233F65","#254168","#26446B","#27456E","#294771","#2A4974","#2B4B78","#2B4C7B","#2C4F7E","#2E5181","#2F5384","#305486","#315689","#32588C","#345A90","#345B93","#355D95","#365F98","#37619B","#38629D","#3964A0","#3B66A3","#3C68A6","#3C69A9","#3D6BAC","#3E6DAE","#3F6FB1","#4070B4","#4172B6","#4374B9","#4476BC","#4477BF","#4579C1","#467BC4","#477DC7","#487EC9","#4980CC","#4A82CE","#4B84D2","#4F86D2","#5287D2","#5589D3","#588CD4","#5B8ED5","#5E90D6","#6192D7","#6594D7","#6896D7","#6B98D8","#6E9AD9","#719DDA","#749EDB","#77A0DC","#7AA2DC","#7EA5DD","#81A6DD","#84A8DE","#86AADF","#89ADE0","#8CAEE1","#8FB0E1","#92B2E2","#95B5E3","#98B6E3","#9BB8E4","#9DBAE5","#A0BCE6","#A3BEE6","#A6C0E7","#A8C1E8","#ACC4E9","#AEC6E9","#B1C7EA","#B4C9EA","#B6CCEB","#B9CDEC","#BBCFED","#BED1EE","#C1D3EF","#C4D5EF","#C7D7EF","#C9D8F0","#CCDBF1","#CEDCF2","#D1DEF3","#D3E0F3","#D7E2F4","#D9E4F4","#DCE6F5","#DEE7F6","#E1EAF7","#E3EBF7","#E6EDF8","#E8EFF9","#EBF1FA","#EEF3FA","#F0F4FB","#F3F6FB","#F5F8FC","#F7FAFD","#FAFBFE","#FCFDFF","#000001","#000307","#03070C","#030A13","#050C17","#070F1B","#071321","#091425","#0A172A","#0A1A2E","#0C1B31","#0C1E36","#0E2139","#0F233D","#0F2541","#112745","#132A49","#132B4C","#142E50","#143054","#163157","#17345A","#17365E","#193861","#1A3965","#1A3C68","#1B3E6B","#1B3F6F","#1D4172","#1E4475","#1E4579","#1F477C","#214980","#214B83","#224C86","#224F89","#23518C","#25528F","#255493","#265695","#275799","#27599C","#295B9E","#295DA2","#2A5EA5","#2B60A7","#2B62AB","#2C63AE","#2E65B1","#2E67B4","#2F68B6","#2F6ABA","#306CBC","#316EBF","#316FC2","#3271C5","#3473C8","#3474CB","#3576CD","#3578D1","#3679D3","#377BD6","#377DD9","#387FDC","#3980DF","#3D83DF","#4085E0","#4586E0","#4888E1","#4B8BE1","#508DE1","#538FE2","#5792E3","#5A93E3","#5D95E4","#6198E4","#649AE5","#679CE6","#6B9DE6","#6EA0E6","#72A2E7","#75A4E7","#78A6E8","#7CA8E8","#7FAAE9","#82ADEA","#86AEEA","#88B0EA","#8CB2EB","#8FB5EB","#92B6EC","#95B8EC","#98BBED","#9BBCEE","#9EBEEE","#A1C1EF","#A5C2EF","#A7C4EF","#AAC6F0","#AEC8F0","#B0CAF1","#B3CCF2","#B6CEF2","#B9D0F3","#BCD2F3","#BFD4F3","#C1D6F4","#C5D7F4","#C7D9F5","#CADCF6","#CDDDF6","#D0DFF7","#D3E1F7","#D6E3F7","#D8E5F8","#DCE7F8","#DEE9F9","#E1EAFA","#E4ECFA","#E6EFFB","#EAF0FB","#ECF2FB","#EFF4FC","#F2F6FC","#F4F7FD","#F7FAFE","#FAFBFE","#FCFDFF","#000001","#000307","#00070E","#030913","#030C19","#030F1E","#051122","#051427","#07172C","#071930","#071B35","#091E38","#091F3D","#092241","#0A2545","#0A2649","#0C294E","#0C2A51","#0C2C55","#0E2F58","#0E305C","#0E3260","#0F3563","#0F3667","#11386B","#113B6E","#113C72","#133E75","#134079","#13417D","#144480","#144584","#164787","#16498A","#164A8E","#174C91","#174F94","#175098","#19529B","#19549E","#1A55A2","#1A57A5","#1A59A8","#1B5AAB","#1B5CAE","#1B5EB2","#1D5FB5","#1D61B8","#1E62BB","#1E64BE","#1E66C1","#1F67C4","#1F69C7","#1F6BCB","#216CCD","#216ED1","#2270D4","#2271D7","#2273DA","#2375DC","#2376E0","#2378E3","#2579E6","#257BE9","#267DEC","#2A7FEC","#2F81EC","#3284ED","#3786ED","#3C88ED","#3F8AEE","#448CEE","#488FEF","#4B91EF","#5093EF","#5395EF","#5797EF","#5B99EF","#5E9CF0","#629DF0","#669FF1","#69A2F1","#6DA4F1","#70A6F2","#74A8F2","#78AAF2","#7BADF3","#7FAEF3","#83B0F3","#86B3F3","#89B5F3","#8CB6F4","#90B9F4","#93BBF4","#96BCF5","#9ABFF5","#9DC1F6","#A0C2F6","#A4C5F6","#A6C7F7","#AAC9F7","#AECBF7","#B0CDF7","#B4CFF7","#B7D1F8","#BAD2F8","#BDD5F8","#C0D7F9","#C3D8F9","#C7DBF9","#C9DCFA","#CDDEFA","#D0E1FB","#D2E2FB","#D6E5FB","#D8E6FB","#DCE8FB","#DFEAFB","#E1ECFC","#E5EEFC","#E8F0FD","#EAF2FD","#EEF3FD","#F0F6FE","#F3F7FE","#F7F9FE","#F9FBFF","#FCFDFF","#000001","#000307","#00070E","#000914","#000C1A","#000E1F","#001125","#00142A","#03162F","#031932","#031A37","#031D3C","#031F40","#032145","#032349","#03254E","#052752","#052A55","#052B59","#052E5D","#052F61","#053165","#053269","#05356D","#073771","#073874","#073B78","#073C7C","#073E80","#074084","#074187","#07448B","#09458F","#094792","#094995","#094A99","#094C9D","#094EA0","#0950A4","#0952A7","#0A53AB","#0A55AE","#0A56B1","#0A58B5","#0A59B8","#0A5BBB","#0A5DBF","#0A5EC2","#0C60C6","#0C61C8","#0C63CC","#0C65CF","#0C66D2","#0C68D6","#0C69D9","#0C6BDC","#0E6DE0","#0E6EE2","#0E70E6","#0E71E9","#0E73EC","#0E74EF","#0E76F3","#0E78F6","#0F79F9","#147CF9","#1A7EF9","#1F80F9","#2583F9","#2A85F9","#2F87F9","#3489F9","#388CFA","#3C8EFA","#4090FA","#4593FA","#4994FA","#4E97FA","#5299FA","#569BFA","#5A9DFB","#5D9FFB","#61A2FB","#65A4FB","#69A6FB","#6DA8FB","#71AAFB","#75ADFB","#79AEFB","#7CB1FB","#80B3FB","#84B5FB","#87B7FB","#8BB9FB","#8FBBFB","#93BDFB","#96BFFC","#99C1FC","#9DC3FC","#A0C6FC","#A4C7FC","#A7C9FC","#ABCCFC","#AECDFC","#B2D0FD","#B5D2FD","#B8D3FD","#BBD6FD","#BFD7FD","#C2DAFD","#C6DCFD","#C9DEFD","#CDE0FE","#CFE1FE","#D2E4FE","#D6E6FE","#D9E8FE","#DCEAFE","#E0EBFE","#E3EEFE","#E6EFFF","#E9F2FF","#ECF3FF","#EFF5FF","#F3F7FF","#F6F9FF","#F9FBFF","#FCFDFF","#000001","#030305","#070709","#0A0A0C","#0E0E0F","#111113","#141416","#171719","#1A1A1D","#1B1D1F","#1E1F22","#212225","#232527","#26272A","#292A2C","#2B2C2F","#2E2F32","#2F3135","#313437","#343639","#36373C","#38393E","#3B3C40","#3D3E43","#3F4046","#404348","#43454A","#45474C","#47494F","#494B51","#4B4E53","#4E5055","#505258","#51545A","#53565C","#55585E","#575A60","#595C62","#5B5E64","#5D6066","#5F6169","#60636B","#62656D","#64676F","#666971","#686B73","#6A6D75","#6C6F77","#6E717A","#6F737C","#71757E","#737780","#757982","#777B84","#797D86","#7B7F87","#7D818A","#7E838C","#80858E","#828690","#848792","#868993","#878B95","#898D97","#8B8F9A","#8D919B","#8F939D","#91949E","#9396A0","#9499A2","#969BA4","#989DA6","#9B9EA7","#9DA0A8","#9EA2AA","#A0A4AC","#A2A6AE","#A4A7AF","#A6A9B1","#A7ABB3","#AAADB5","#ACAEB5","#AEB0B7","#AFB2B9","#B1B4BB","#B3B5BC","#B5B7BE","#B6B9C0","#B9BBC1","#BBBDC2","#BCBFC4","#BEC1C6","#C0C2C7","#C1C4C9","#C3C6CB","#C5C7CD","#C7C9CE","#C9CBCF","#CBCDD1","#CDCED2","#CED0D4","#D0D2D6","#D2D3D7","#D3D5D9","#D6D7DB","#D7D8DC","#D9DADD","#DBDCDF","#DCDDE1","#DEE0E2","#E0E1E4","#E1E3E6","#E4E5E7","#E6E6E8","#E7E8EA","#E9EAEB","#EAEBED","#ECEDEF","#EEEFF0","#EFF0F2","#F2F2F3","#F3F3F4","#F5F5F6","#F7F7F7","#F8F8F9","#FAFAFB","#FBFBFC","#FDFDFE","#000001","#030305","#070709","#090A0E","#0C0E11","#0F1114","#111419","#14161B","#17191F","#191B22","#1B1E25","#1D2129","#1F232B","#22262E","#232731","#262A34","#292C37","#2A2F39","#2C313C","#2E343F","#303541","#323744","#343947","#363C49","#383E4C","#39404F","#3C4351","#3D4454","#3F4656","#414858","#434A5B","#454C5D","#474F60","#485062","#4A5264","#4B5467","#4E5669","#50586B","#515A6E","#535C70","#555D73","#565F75","#586177","#59637A","#5B657C","#5D677E","#5E6881","#606A83","#626C86","#636E87","#657089","#66728C","#68748E","#6A7590","#6B7793","#6D7994","#6F7B97","#707D99","#727F9B","#73819D","#75829F","#7784A1","#7886A4","#7A87A6","#7C89A8","#7E8BA9","#808DAB","#838FAC","#8591AE","#8693AF","#8995B0","#8B97B2","#8E99B4","#909BB5","#929DB6","#949EB7","#96A1B9","#98A3BB","#9BA5BB","#9DA6BD","#9FA8BF","#A1AAC0","#A3ACC1","#A6AEC2","#A7B0C4","#A9B2C6","#ACB4C7","#AEB5C8","#B0B7CA","#B2BACB","#B4BBCD","#B6BDCD","#B8BFCF","#BAC1D1","#BCC2D2","#BEC4D3","#C1C7D5","#C2C8D6","#C4CAD7","#C7CCD8","#C8CDDA","#CACFDC","#CDD2DC","#CED3DE","#D1D5E0","#D2D7E1","#D4D8E2","#D7DAE3","#D8DCE5","#DADEE6","#DCE0E7","#DEE1E9","#E1E3EA","#E2E5EB","#E4E6ED","#E6E9EE","#E8EAEF","#EAECF1","#ECEEF2","#EEEFF3","#F0F1F5","#F2F3F6","#F3F5F7","#F6F7F8","#F7F8FA","#F9FAFB","#FBFBFC","#FDFDFE","#000001","#030305","#05070A","#090A0E","#0A0C13","#0C0F17","#0F131A","#11161E","#141722","#161A25","#171D29","#1A1F2B","#1B212F","#1D2332","#1F2635","#212938","#232A3C","#252C3E","#262F41","#293144","#2A3247","#2B354A","#2E374C","#2F3950","#313B53","#323D55","#343F58","#36415A","#37435D","#384560","#3B4762","#3C4965","#3E4A68","#3F4C6A","#404F6D","#43516F","#445272","#455475","#475677","#48587A","#4A597D","#4B5B7F","#4C5D82","#4F5F84","#506086","#516289","#53648B","#54668E","#566791","#576993","#586B95","#5A6D97","#5B6E9A","#5C709D","#5E729E","#5F74A1","#6175A4","#6277A6","#6379A8","#657BAA","#667CAD","#677EAF","#6980B1","#6A82B4","#6C83B6","#6E86B7","#7187B8","#7389BA","#768BBB","#798EBB","#7B90BD","#7E92BE","#8193C0","#8396C1","#8698C1","#879AC3","#8A9CC4","#8D9EC5","#8FA0C7","#92A2C7","#94A4C9","#96A6CA","#99A8CB","#9BAACD","#9DACCD","#A0AECE","#A2B0D0","#A5B2D1","#A7B4D2","#A9B6D3","#ACB8D4","#AEBAD6","#B0BBD7","#B3BED7","#B5C0D9","#B7C1DA","#BAC3DC","#BBC6DC","#BEC7DD","#C0C9DF","#C2CBE0","#C5CDE1","#C7CFE2","#C9D1E3","#CCD2E5","#CDD5E6","#D0D7E6","#D2D8E8","#D4DAE9","#D7DCEA","#D8DEEB","#DBE0EC","#DDE1EE","#DFE4EF","#E1E6EF","#E3E7F1","#E6E9F2","#E8EBF3","#EAEDF4","#ECEFF5","#EFF0F7","#F0F3F7","#F3F4F8","#F4F6FA","#F7F7FB","#F9FAFB","#FBFBFD","#FDFDFE","#000001","#030305","#05070A","#07090F","#090C14","#0A0F19","#0C111D","#0E1421","#111725","#131927","#141B2B","#161E2F","#171F32","#192236","#1A2539","#1B263D","#1E2940","#1F2A43","#212C46","#222F49","#23304C","#253250","#263553","#273656","#2A3859","#2B3B5B","#2C3C5E","#2E3E61","#2F4064","#304167","#31446A","#32456D","#354770","#364972","#374A75","#384C78","#394F7B","#3B507E","#3C5281","#3D5484","#3F5586","#405788","#41598B","#435A8E","#445C91","#455E93","#465F96","#476199","#49629C","#4A649D","#4B66A0","#4C67A3","#4E69A6","#4F6BA8","#506CAB","#516EAE","#5370B0","#5471B2","#5573B5","#5675B7","#5776BA","#5878BC","#5979BF","#5A7BC1","#5C7DC4","#5E7FC5","#6181C6","#6484C7","#6786C7","#6A88C8","#6D8AC9","#708CCA","#738FCC","#7591CD","#7893CD","#7B95CE","#7E97CF","#8199D0","#849CD1","#869DD2","#899FD3","#8BA2D4","#8EA4D5","#91A6D6","#93A8D7","#96AAD7","#99ADD8","#9CAED9","#9EB0DB","#A0B3DC","#A3B5DC","#A6B6DD","#A8B9DE","#ABBBDF","#AEBCE0","#B0BFE1","#B3C1E2","#B5C2E3","#B7C5E4","#BAC7E5","#BCC9E6","#BFCBE6","#C1CDE7","#C4CFE8","#C7D1EA","#C8D2EA","#CBD5EB","#CDD7EC","#D0D8ED","#D2DBEE","#D5DCEF","#D7DEEF","#DAE1F1","#DCE2F2","#DEE5F3","#E1E6F3","#E3E8F4","#E6EAF5","#E8ECF6","#EAEEF7","#EDF0F8","#EFF2F9","#F1F3FA","#F3F6FB","#F6F7FB","#F8F9FC","#FBFBFD","#FDFDFE","#000001","#000307","#03070C","#050911","#070C16","#090E1A","#0A111E","#0C1322","#0E1627","#0E172B","#0F1A2F","#111B32","#131E36","#142139","#16223D","#172540","#192645","#192948","#1A2A4B","#1B2C4F","#1D2E52","#1E3055","#1F3158","#21345B","#22365F","#223762","#233965","#253B68","#263D6B","#273E6E","#294071","#2A4174","#2B4478","#2B457B","#2C477E","#2E4981","#2F4A84","#304C86","#314E89","#32508C","#345190","#345393","#355495","#365698","#37579B","#38599D","#395AA0","#3B5CA3","#3C5EA6","#3C5FA9","#3D61AC","#3E62AE","#3F64B1","#4065B4","#4167B6","#4368B9","#446ABC","#446BBF","#456DC1","#466FC4","#4770C7","#4872C9","#4973CC","#4A75CE","#4B76D2","#4F79D2","#527BD2","#557ED3","#5880D4","#5B83D5","#5E85D6","#6186D7","#6589D7","#688BD7","#6B8ED8","#6E90D9","#7193DA","#7494DB","#7797DC","#7A99DC","#7E9CDD","#819DDD","#849FDE","#86A2DF","#89A4E0","#8CA6E1","#8FA8E1","#92ABE2","#95ADE3","#98AFE3","#9BB1E4","#9DB4E5","#A0B5E6","#A3B8E6","#A6BAE7","#A8BBE8","#ACBEE9","#AEC0E9","#B1C2EA","#B4C4EA","#B6C7EB","#B9C8EC","#BBCBED","#BECDEE","#C1CFEF","#C4D1EF","#C7D2EF","#C9D5F0","#CCD7F1","#CED9F2","#D1DBF3","#D3DDF3","#D7DFF4","#D9E1F4","#DCE3F5","#DEE6F6","#E1E7F7","#E3E9F7","#E6EBF8","#E8EDF9","#EBEFFA","#EEF1FA","#F0F3FB","#F3F5FB","#F5F7FC","#F7F9FD","#FAFBFE","#FCFDFF","#000001","#000307","#03050C","#030913","#050A17","#070E1B","#070F21","#091325","#0A142A","#0A162E","#0C1931","#0C1A36","#0E1D39","#0F1E3D","#0F2141","#112245","#132549","#13264C","#142750","#142A54","#162B57","#172E5A","#172F5E","#193161","#1A3265","#1A3568","#1B366B","#1B376F","#1D3972","#1E3B75","#1E3D79","#1F3E7C","#214080","#214183","#224486","#224589","#23468C","#25488F","#254993","#264B95","#274C99","#274F9C","#29509E","#2951A2","#2A53A5","#2B54A7","#2B56AB","#2C57AE","#2E59B1","#2E5AB4","#2F5CB6","#2F5DBA","#305EBC","#3160BF","#3161C2","#3263C5","#3464C8","#3466CB","#3567CD","#3569D1","#366AD3","#376BD6","#376DD9","#386EDC","#3970DF","#3D72DF","#4075E0","#4577E0","#487AE1","#4B7DE1","#507FE1","#5382E2","#5784E3","#5A86E3","#5D88E4","#618BE4","#648DE5","#6790E6","#6B93E6","#6E94E6","#7297E7","#7599E7","#789CE8","#7C9DE8","#7FA0E9","#82A2EA","#86A5EA","#88A7EA","#8CA9EB","#8FACEB","#92AEEC","#95B0EC","#98B2ED","#9BB5EE","#9EB7EE","#A1B9EF","#A5BBEF","#A7BDEF","#AAC0F0","#AEC1F0","#B0C4F1","#B3C6F2","#B6C8F2","#B9CBF3","#BCCDF3","#BFCFF3","#C1D1F4","#C5D3F4","#C7D5F5","#CAD7F6","#CDD9F6","#D0DCF7","#D3DEF7","#D6E0F7","#D8E2F8","#DCE4F8","#DEE6F9","#E1E8FA","#E4EAFA","#E6ECFB","#EAEFFB","#ECF1FB","#EFF3FC","#F2F5FC","#F4F7FD","#F7F9FE","#FAFBFE","#FCFDFF","#000001","#000307","#00050E","#030913","#030A19","#030C1E","#050F22","#051127","#07132C","#071630","#071735","#091938","#091B3D","#091D41","#0A1E45","#0A2149","#0C224E","#0C2351","#0C2655","#0E2758","#0E295C","#0E2B60","#0F2C63","#0F2E67","#11306B","#11316E","#113272","#133575","#133679","#13377D","#143980","#143B84","#163C87","#163E8A","#163F8E","#174091","#174394","#174498","#19459B","#19479E","#1A48A2","#1A49A5","#1A4BA8","#1B4CAB","#1B4EAE","#1B50B2","#1D51B5","#1D52B8","#1E54BB","#1E55BE","#1E56C1","#1F58C4","#1F59C7","#1F5BCB","#215CCD","#215DD1","#225FD4","#2260D7","#2261DA","#2363DC","#2364E0","#2365E3","#2567E6","#2568E9","#2669EC","#2A6CEC","#2F6FEC","#3271ED","#3774ED","#3C77ED","#3F79EE","#447CEE","#487FEF","#4B81EF","#5084EF","#5386EF","#5788EF","#5B8BEF","#5E8DF0","#6290F0","#6693F1","#6994F1","#6D97F1","#709AF2","#749CF2","#789EF2","#7BA1F3","#7FA3F3","#83A6F3","#86A8F3","#89AAF3","#8CADF4","#90AFF4","#93B1F4","#96B4F5","#9AB6F5","#9DB8F6","#A0BBF6","#A4BDF6","#A6BFF7","#AAC1F7","#AEC4F7","#B0C6F7","#B4C8F7","#B7CBF8","#BACDF8","#BDCFF8","#C0D2F9","#C3D3F9","#C7D6F9","#C9D8FA","#CDDAFA","#D0DCFB","#D2DFFB","#D6E1FB","#D8E3FB","#DCE6FB","#DFE7FB","#E1EAFC","#E5ECFC","#E8EEFD","#EAF0FD","#EEF3FD","#F0F4FE","#F3F7FE","#F7F9FE","#F9FBFF","#FCFDFF","#000001","#000307","#00050E","#000714","#00091A","#000C1F","#000E25","#000F2A","#03112F","#031432","#031637","#03173C","#031940","#031B45","#031D49","#031E4E","#051F52","#052255","#052359","#05255D","#052661","#052965","#052A69","#052B6D","#072C71","#072E74","#073078","#07317C","#073280","#073484","#073687","#07378B","#09388F","#093992","#093C95","#093D99","#093E9D","#093FA0","#0941A4","#0943A7","#0A44AB","#0A45AE","#0A47B1","#0A48B5","#0A49B8","#0A4ABB","#0A4BBF","#0A4EC2","#0C4FC6","#0C50C8","#0C51CC","#0C53CF","#0C54D2","#0C55D6","#0C56D9","#0C58DC","#0E59E0","#0E5AE2","#0E5BE6","#0E5DE9","#0E5EEC","#0E5FEF","#0E60F3","#0E62F6","#0F63F9","#1466F9","#1A68F9","#1F6BF9","#256EF9","#2A71F9","#2F73F9","#3476F9","#3879FA","#3C7CFA","#407EFA","#4581FA","#4984FA","#4E86FA","#5288FA","#568BFA","#5A8EFB","#5D91FB","#6193FB","#6595FB","#6998FB","#6D9BFB","#719DFB","#759FFB","#79A2FB","#7CA5FB","#80A7FB","#84A9FB","#87ACFB","#8BAEFB","#8FB1FB","#93B3FB","#96B5FC","#99B8FC","#9DBBFC","#A0BCFC","#A4BFFC","#A7C1FC","#ABC4FC","#AEC6FC","#B2C8FD","#B5CBFD","#B8CDFD","#BBD0FD","#BFD2FD","#C2D4FD","#C6D7FD","#C9D9FD","#CDDBFE","#CFDDFE","#D2E0FE","#D6E2FE","#D9E4FE","#DCE6FE","#E0E9FE","#E3EBFE","#E6EDFF","#E9EFFF","#ECF2FF","#EFF4FF","#F3F6FF","#F6F8FF","#F9FBFF","#FCFDFF","#000001","#030305","#070709","#0A0A0C","#0E0E0F","#111113","#141416","#171719","#1A1A1D","#1B1D1F","#1E1F22","#212225","#232527","#26272A","#29292C","#2B2B2F","#2E2E32","#2F3035","#313237","#343539","#36373C","#38393E","#3B3C40","#3D3E43","#3F4046","#404348","#43454A","#45464C","#47484F","#494A51","#4B4C53","#4E4F55","#505158","#51535A","#53555C","#55575E","#575960","#595B62","#5B5D64","#5D5F66","#5F6169","#60626B","#62646D","#64666F","#666871","#686A73","#6A6C75","#6C6E77","#6E707A","#6F727C","#71747E","#737680","#757882","#777A84","#797B86","#7B7D87","#7D7F8A","#7E818C","#80838E","#828590","#848692","#868893","#878A95","#898C97","#8B8E9A","#8D909B","#8F929D","#91939E","#9395A0","#9497A2","#9699A4","#989BA6","#9B9DA7","#9D9EA8","#9EA0AA","#A0A3AC","#A2A5AE","#A4A6AF","#A6A8B1","#A7AAB3","#AAACB5","#ACAEB5","#AEAFB7","#AFB1B9","#B1B3BB","#B3B5BC","#B5B6BE","#B6B8C0","#B9BBC1","#BBBCC2","#BCBEC4","#BEC0C6","#C0C1C7","#C1C3C9","#C3C5CB","#C5C7CD","#C7C8CE","#C9CACF","#CBCCD1","#CDCDD2","#CECFD4","#D0D1D6","#D2D3D7","#D3D5D9","#D6D7DB","#D7D8DC","#D9DADD","#DBDCDF","#DCDDE1","#DEDFE2","#E0E1E4","#E1E2E6","#E4E4E7","#E6E6E8","#E7E7EA","#E9EAEB","#EAEBED","#ECEDEF","#EEEFF0","#EFF0F2","#F2F2F3","#F3F3F4","#F5F5F6","#F7F7F7","#F8F8F9","#FAFAFB","#FBFBFC","#FDFDFE","#000001","#030305","#070709","#090A0E","#0C0E11","#0F0F14","#111319","#14161B","#17191F","#191A22","#1B1D25","#1D1F29","#1F222B","#22252E","#232631","#262934","#292B37","#2A2E39","#2C2F3C","#2E313F","#303441","#323644","#343847","#363949","#383C4C","#393E4F","#3C4051","#3D4154","#3F4456","#414658","#43485B","#454A5D","#474B60","#484E62","#4A5064","#4B5267","#4E5369","#50556B","#51576E","#535970","#555B73","#565C75","#585E77","#59607A","#5B627C","#5D637E","#5E6581","#606783","#626986","#636B87","#656C89","#666E8C","#68708E","#6A7290","#6B7393","#6D7594","#6F7797","#707999","#727B9B","#737C9D","#757E9F","#7780A1","#7882A4","#7A83A6","#7C85A8","#7E86A9","#8089AB","#838BAC","#858DAE","#868FAF","#8992B0","#8B93B2","#8E95B4","#9097B5","#9299B6","#949CB7","#969DB9","#989FBB","#9BA1BB","#9DA4BD","#9FA6BF","#A1A7C0","#A3A9C1","#A6ABC2","#A7AEC4","#A9AFC6","#ACB1C7","#AEB3C8","#B0B5CA","#B2B7CB","#B4B9CD","#B6BBCD","#B8BCCF","#BABFD1","#BCC1D2","#BEC2D3","#C1C4D5","#C2C7D6","#C4C8D7","#C7CAD8","#C8CCDA","#CACDDC","#CDD0DC","#CED2DE","#D1D3E0","#D2D5E1","#D4D7E2","#D7D9E3","#D8DBE5","#DADCE6","#DCDEE7","#DEE1E9","#E1E2EA","#E2E4EB","#E4E6ED","#E6E8EE","#E8EAEF","#EAEBF1","#ECEDF2","#EEEFF3","#F0F1F5","#F2F3F6","#F3F4F7","#F6F6F8","#F7F8FA","#F9FAFB","#FBFBFC","#FDFDFE","#000001","#030305","#05070A","#09090E","#0A0C13","#0C0F17","#0F111A","#11141E","#141722","#161925","#171B29","#1A1D2B","#1B1F2F","#1D2232","#1F2335","#212638","#23293C","#252A3E","#262C41","#292E44","#2A3047","#2B324A","#2E344C","#2F3650","#313853","#323955","#343C58","#363D5A","#373F5D","#384160","#3B4362","#3C4565","#3E4768","#3F486A","#404A6D","#434C6F","#444E72","#455075","#475177","#48537A","#4A557D","#4B567F","#4C5882","#4F5A84","#505B86","#515D89","#535E8B","#54608E","#566291","#576393","#586595","#5A6797","#5B689A","#5C6A9D","#5E6B9E","#5F6DA1","#616FA4","#6270A6","#6372A8","#6574AA","#6675AD","#6777AF","#6978B1","#6A7AB4","#6C7CB6","#6E7EB7","#7180B8","#7383BA","#7685BB","#7987BB","#7B89BD","#7E8BBE","#818EC0","#8390C1","#8692C1","#8794C3","#8A96C4","#8D99C5","#8F9BC7","#929DC7","#949FC9","#96A1CA","#99A3CB","#9BA6CD","#9DA7CD","#A0AACE","#A2ACD0","#A5AED1","#A7B0D2","#A9B2D3","#ACB4D4","#AEB6D6","#B0B8D7","#B3BBD7","#B5BCD9","#B7BEDA","#BAC1DC","#BBC2DC","#BEC4DD","#C0C7DF","#C2C8E0","#C5CAE1","#C7CDE2","#C9CEE3","#CCD1E5","#CDD2E6","#D0D4E6","#D2D7E8","#D4D8E9","#D7DAEA","#D8DCEB","#DBDEEC","#DDE1EE","#DFE2EF","#E1E4EF","#E3E6F1","#E6E8F2","#E8EAF3","#EAECF4","#ECEEF5","#EFF0F7","#F0F2F7","#F3F3F8","#F4F6FA","#F7F7FB","#F9F9FB","#FBFBFD","#FDFDFE","#000001","#030305","#05050A","#07090F","#090A14","#0A0E19","#0C0F1D","#0E1321","#111425","#131727","#14192B","#161B2F","#171D32","#191F36","#1A2139","#1B233D","#1E2540","#1F2743","#212946","#222B49","#232C4C","#252F50","#263053","#273256","#2A3459","#2B365B","#2C375E","#2E3861","#2F3B64","#303C67","#313E6A","#323F6D","#354170","#364372","#374575","#384678","#39487B","#3B497E","#3C4B81","#3D4C84","#3F4F86","#405088","#41528B","#43538E","#445591","#455693","#465896","#475999","#495B9C","#4A5C9D","#4B5EA0","#4C5FA3","#4E60A6","#4F62A8","#5063AB","#5165AE","#5366B0","#5468B2","#5569B5","#566BB7","#576CBA","#586EBC","#596FBF","#5A71C1","#5C72C4","#5E75C5","#6177C6","#647AC7","#677CC7","#6A7FC8","#6D81C9","#7084CA","#7386CC","#7588CD","#788ACD","#7B8DCE","#7E8FCF","#8192D0","#8494D1","#8696D2","#8999D3","#8B9BD4","#8E9DD5","#919FD6","#93A2D7","#96A4D7","#99A6D8","#9CA8D9","#9EABDB","#A0ADDC","#A3AFDC","#A6B1DD","#A8B4DE","#ABB5DF","#AEB8E0","#B0BAE1","#B3BCE2","#B5BEE3","#B7C1E4","#BAC2E5","#BCC5E6","#BFC7E6","#C1C9E7","#C4CCE8","#C7CDEA","#C8D0EA","#CBD2EB","#CDD4EC","#D0D6ED","#D2D8EE","#D5DAEF","#D7DCEF","#DADEF1","#DCE1F2","#DEE2F3","#E1E5F3","#E3E6F4","#E6E9F5","#E8EAF6","#EAEDF7","#EDEFF8","#EFF1F9","#F1F3FA","#F3F5FB","#F6F7FB","#F8F9FC","#FBFBFD","#FDFDFE","#000001","#000307","#03050C","#050711","#070A16","#090C1A","#0A0E1E","#0C1122","#0E1327","#0E142B","#0F172F","#111932","#131A36","#141D39","#161E3D","#171F40","#192245","#192348","#1A254B","#1B274F","#1D2952","#1E2A55","#1F2C58","#212E5B","#222F5F","#223162","#233265","#253468","#26366B","#27376E","#293871","#2A3B74","#2B3C78","#2B3D7B","#2C3F7E","#2E4081","#2F4184","#304486","#314589","#32468C","#344890","#344993","#354A95","#364C98","#374E9B","#384F9D","#3951A0","#3B52A3","#3C53A6","#3C55A9","#3D56AC","#3E57AE","#3F59B1","#405AB4","#415BB6","#435DB9","#445EBC","#445FBF","#4561C1","#4662C4","#4763C7","#4865C9","#4966CC","#4A67CE","#4B69D2","#4F6BD2","#526ED2","#5571D3","#5873D4","#5B76D5","#5E79D6","#617BD7","#657ED7","#6881D7","#6B83D8","#6E86D9","#7188DA","#748ADB","#778DDC","#7A90DC","#7E92DD","#8194DD","#8497DE","#8699DF","#899CE0","#8C9EE1","#8FA0E1","#92A3E2","#95A6E3","#98A7E3","#9BAAE4","#9DADE5","#A0AEE6","#A3B1E6","#A6B4E7","#A8B5E8","#ACB8E9","#AEBBE9","#B1BCEA","#B4BFEA","#B6C1EB","#B9C3EC","#BBC6ED","#BEC8EE","#C1CAEF","#C4CDEF","#C7CFEF","#C9D1F0","#CCD3F1","#CED6F2","#D1D7F3","#D3DAF3","#D7DCF4","#D9DEF4","#DCE1F5","#DEE3F6","#E1E5F7","#E3E7F7","#E6EAF8","#E8EBF9","#EBEEFA","#EEF0FA","#F0F2FB","#F3F4FB","#F5F7FC","#F7F8FD","#FAFBFE","#FCFDFF","#000001","#000307","#03050C","#030713","#050917","#070A1B","#070E21","#090F25","#0A112A","#0A132E","#0C1431","#0C1736","#0E1939","#0F1A3D","#0F1B41","#111D45","#131E49","#13214C","#142250","#142354","#162557","#17265A","#17295E","#192A61","#1A2B65","#1A2C68","#1B2E6B","#1B2F6F","#1D3172","#1E3275","#1E3479","#1F357C","#213680","#213883","#223986","#223B89","#233C8C","#253D8F","#253E93","#264095","#274199","#27439C","#29449E","#2945A2","#2A47A5","#2B48A7","#2B49AB","#2C4AAE","#2E4BB1","#2E4CB4","#2F4FB6","#2F50BA","#3051BC","#3152BF","#3153C2","#3255C5","#3456C8","#3457CB","#3558CD","#3559D1","#365BD3","#375CD6","#375DD9","#385EDC","#395FDF","#3D62DF","#4065E0","#4568E0","#486BE1","#4B6DE1","#5070E1","#5373E2","#5776E3","#5A79E3","#5D7BE4","#617EE4","#6481E5","#6784E6","#6B86E6","#6E88E6","#728BE7","#758EE7","#7891E8","#7C93E8","#7F96E9","#8298EA","#869BEA","#889DEA","#8CA0EB","#8FA3EB","#92A5EC","#95A7EC","#98AAED","#9BADEE","#9EAFEE","#A1B2EF","#A5B4EF","#A7B6EF","#AAB9F0","#AEBBF0","#B0BEF1","#B3C0F2","#B6C2F2","#B9C5F3","#BCC7F3","#BFCAF3","#C1CDF4","#C5CEF4","#C7D1F5","#CAD3F6","#CDD6F6","#D0D8F7","#D3DAF7","#D6DCF7","#D8DFF8","#DCE1F8","#DEE4F9","#E1E6FA","#E4E8FA","#E6EAFB","#EAEDFB","#ECEFFB","#EFF2FC","#F2F3FC","#F4F6FD","#F7F8FE","#FAFBFE","#FCFDFF","#000001","#000307","#00050E","#030713","#030919","#030A1E","#050C22","#050E27","#070F2C","#071130","#071335","#091438","#09163D","#091741","#0A1945","#0A1A49","#0C1B4E","#0C1D51","#0C1E55","#0E1F58","#0E215C","#0E2260","#0F2363","#0F2567","#11266B","#11276E","#112972","#132A75","#132B79","#132E7D","#142F80","#143084","#163187","#16328A","#16348E","#173591","#173694","#173798","#19389B","#19399E","#1A3BA2","#1A3CA5","#1A3DA8","#1B3EAB","#1B3FAE","#1B40B2","#1D41B5","#1D43B8","#1E44BB","#1E45BE","#1E46C1","#1F47C4","#1F48C7","#1F49CB","#214ACD","#214BD1","#224CD4","#224FD7","#2250DA","#2351DC","#2352E0","#2353E3","#2554E6","#2555E9","#2656EC","#2A59EC","#2F5CEC","#325FED","#3762ED","#3C65ED","#3F68EE","#446BEE","#486DEF","#4B70EF","#5073EF","#5376EF","#5779EF","#5B7CEF","#5E7FF0","#6282F0","#6685F1","#6987F1","#6D8AF1","#708DF2","#7490F2","#7893F2","#7B95F3","#7F98F3","#839BF3","#869DF3","#89A0F3","#8CA3F4","#90A6F4","#93A8F4","#96ABF5","#9AAEF5","#9DB0F6","#A0B3F6","#A4B5F6","#A6B8F7","#AABAF7","#AEBCF7","#B0BFF7","#B4C1F7","#B7C4F8","#BAC7F8","#BDC9F8","#C0CCF9","#C3CEF9","#C7D1F9","#C9D3FA","#CDD6FA","#D0D8FB","#D2DBFB","#D6DDFB","#D8E0FB","#DCE2FB","#DFE5FB","#E1E7FC","#E5EAFC","#E8ECFD","#EAEFFD","#EEF1FD","#F0F3FE","#F3F6FE","#F7F8FE","#F9FBFF","#FCFDFF","#000001","#000007","#00030E","#000514","#00071A","#00091F","#000A25","#000C2A","#030E2F","#030E32","#030F37","#03113C","#031340","#031445","#031649","#03174E","#051952","#051A55","#051A59","#051B5D","#051D61","#051E65","#051F69","#05216D","#072271","#072374","#072578","#07257C","#072680","#072784","#072987","#072A8B","#092B8F","#092C92","#092E95","#092F99","#092F9D","#0930A0","#0931A4","#0932A7","#0A34AB","#0A35AE","#0A36B1","#0A37B5","#0A38B8","#0A38BB","#0A39BF","#0A3BC2","#0C3CC6","#0C3DC8","#0C3ECC","#0C3FCF","#0C40D2","#0C40D6","#0C41D9","#0C43DC","#0E44E0","#0E45E2","#0E46E6","#0E47E9","#0E48EC","#0E49EF","#0E49F3","#0E4AF6","#0F4BF9","#144FF9","#1A52F9","#1F56F9","#2559F9","#2A5CF9","#2F5FF9","#3462F9","#3865FA","#3C68FA","#406BFA","#456EFA","#4972FA","#4E75FA","#5278FA","#567BFA","#5A7EFB","#5D81FB","#6184FB","#6586FB","#698AFB","#6D8DFB","#7190FB","#7593FB","#7995FB","#7C98FB","#809BFB","#849DFB","#87A0FB","#8BA4FB","#8FA6FB","#93A9FB","#96ACFC","#99AEFC","#9DB1FC","#A0B4FC","#A4B6FC","#A7B9FC","#ABBCFC","#AEBFFC","#B2C1FD","#B5C4FD","#B8C7FD","#BBC9FD","#BFCCFD","#C2CEFD","#C6D1FD","#C9D4FD","#CDD7FE","#CFD9FE","#D2DCFE","#D6DEFE","#D9E1FE","#DCE3FE","#E0E6FE","#E3E8FE","#E6EBFF","#E9EEFF","#ECF0FF","#EFF3FF","#F3F5FF","#F6F7FF","#F9FAFF","#FCFCFF","#000001","#030305","#070709","#0A0A0C","#0E0E0F","#111113","#141416","#171719","#1A1A1D","#1B1D1F","#1E1F22","#212125","#232327","#26262A","#29292C","#2B2B2F","#2E2E32","#2F3035","#313237","#343539","#36373C","#38383E","#3B3B40","#3D3D43","#3F3F46","#404148","#43444A","#45464C","#47484F","#494A51","#4B4C53","#4E4E55","#505058","#51525A","#53545C","#55565E","#575860","#595A62","#5B5C64","#5D5E66","#5F6069","#60616B","#62636D","#64656F","#666771","#686973","#6A6B75","#6C6D77","#6E6F7A","#6F717C","#71737E","#737580","#757682","#777884","#797A86","#7B7C87","#7D7E8A","#7E808C","#80828E","#828490","#848692","#868793","#878895","#898A97","#8B8C9A","#8D8E9B","#8F909D","#91939E","#9394A0","#9496A2","#9698A4","#989AA6","#9B9CA7","#9D9DA8","#9E9FAA","#A0A1AC","#A2A3AE","#A4A6AF","#A6A7B1","#A7A9B3","#AAABB5","#ACADB5","#AEAEB7","#AFB0B9","#B1B2BB","#B3B4BC","#B5B5BE","#B6B7C0","#B9BAC1","#BBBBC2","#BCBDC4","#BEBFC6","#C0C1C7","#C1C2C9","#C3C4CB","#C5C6CD","#C7C7CE","#C9C9CF","#CBCCD1","#CDCDD2","#CECFD4","#D0D1D6","#D2D2D7","#D3D4D9","#D6D6DB","#D7D7DC","#D9D9DD","#DBDBDF","#DCDDE1","#DEDFE2","#E0E1E4","#E1E2E6","#E4E4E7","#E6E6E8","#E7E7EA","#E9E9EB","#EAEAED","#ECECEF","#EEEFF0","#EFF0F2","#F2F2F3","#F3F3F4","#F5F5F6","#F7F7F7","#F8F8F9","#FAFAFB","#FBFBFC","#FDFDFE","#000001","#030305","#070709","#090A0E","#0C0C11","#0F0F14","#111319","#14141B","#17171F","#191A22","#1B1D25","#1D1E29","#1F212B","#22232E","#232531","#262734","#292A37","#2A2C39","#2C2E3C","#2E303F","#303241","#323444","#343647","#363849","#38394C","#393C4F","#3C3E51","#3D4054","#3F4156","#414458","#43465B","#45475D","#474960","#484B62","#4A4E64","#4B4F67","#4E5169","#50536B","#51546E","#535670","#555873","#565975","#585B77","#595D7A","#5B5F7C","#5D607E","#5E6281","#606483","#626586","#636787","#656989","#666B8C","#686C8E","#6A6E90","#6B7093","#6D7194","#6F7397","#707599","#72779B","#73789D","#757A9F","#777CA1","#787DA4","#7A7FA6","#7C81A8","#7E83A9","#8085AB","#8387AC","#8589AE","#868BAF","#898EB0","#8B90B2","#8E92B4","#9093B5","#9296B6","#9498B7","#969AB9","#989DBB","#9B9EBB","#9DA0BD","#9FA2BF","#A1A5C0","#A3A6C1","#A6A8C2","#A7ABC4","#A9ADC6","#ACAEC7","#AEB0C8","#B0B3CA","#B2B5CB","#B4B6CD","#B6B9CD","#B8BBCF","#BABCD1","#BCBFD2","#BEC1D3","#C1C2D5","#C2C4D6","#C4C7D7","#C7C8D8","#C8CADA","#CACDDC","#CDCEDC","#CED0DE","#D1D2E0","#D2D4E1","#D4D6E2","#D7D7E3","#D8DAE5","#DADCE6","#DCDDE7","#DEE0E9","#E1E1EA","#E2E3EB","#E4E5ED","#E6E7EE","#E8E9EF","#EAEAF1","#ECEDF2","#EEEFF3","#F0F0F5","#F2F2F6","#F3F4F7","#F6F6F8","#F7F7FA","#F9FAFB","#FBFBFC","#FDFDFE","#000001","#030305","#05070A","#09090E","#0A0C13","#0C0E17","#0F111A","#11131E","#141622","#161725","#171A29","#1A1B2B","#1B1E2F","#1D1F32","#1F2235","#212338","#23263C","#25273E","#262A41","#292B44","#2A2E47","#2B2F4A","#2E314C","#2F3250","#313553","#323655","#343858","#36395A","#373C5D","#383D60","#3B3F62","#3C4065","#3E4368","#3F446A","#40466D","#43476F","#444972","#454A75","#474C77","#484E7A","#4A507D","#4B517F","#4C5382","#4F5584","#505686","#515889","#53598B","#545B8E","#565C91","#575E93","#585F95","#5A6197","#5B629A","#5C649D","#5E659E","#5F67A1","#6168A4","#626AA6","#636BA8","#656DAA","#666EAD","#6770AF","#6971B1","#6A73B4","#6C74B6","#6E77B7","#7179B8","#737CBA","#767EBB","#7981BB","#7B83BD","#7E86BE","#8187C0","#838AC1","#868CC1","#878FC3","#8A91C4","#8D93C5","#8F95C7","#9298C7","#949AC9","#969DCA","#999ECB","#9BA1CD","#9DA3CD","#A0A6CE","#A2A7D0","#A5A9D1","#A7ACD2","#A9AED3","#ACB0D4","#AEB2D6","#B0B5D7","#B3B6D7","#B5B9D9","#B7BBDA","#BABDDC","#BBBFDC","#BEC1DD","#C0C3DF","#C2C6E0","#C5C7E1","#C7CAE2","#C9CCE3","#CCCEE5","#CDD0E6","#D0D2E6","#D2D4E8","#D4D7E9","#D7D8EA","#D8DBEB","#DBDCEC","#DDDFEE","#DFE1EF","#E1E3EF","#E3E5F1","#E6E7F2","#E8E9F3","#EAEBF4","#ECEDF5","#EFEFF7","#F0F1F7","#F3F3F8","#F4F5FA","#F7F7FB","#F9F9FB","#FBFBFD","#FDFDFE","#000001","#030305","#05050A","#07070F","#090A14","#0A0C19","#0C0E1D","#0E1121","#111325","#131427","#14172B","#16192F","#171A32","#191D36","#1A1E39","#1B1F3D","#1E2240","#1F2343","#212546","#222749","#23294C","#252A50","#262B53","#272E56","#2A2F59","#2B305B","#2C325E","#2E3461","#2F3564","#303767","#31386A","#32396D","#353C70","#363D72","#373E75","#384078","#39417B","#3B437E","#3C4581","#3D4684","#3F4786","#404888","#414A8B","#434B8E","#444C91","#454F93","#465096","#475199","#49539C","#4A549D","#4B55A0","#4C57A3","#4E58A6","#4F59A8","#505BAB","#515CAE","#535DB0","#545FB2","#5560B5","#5661B7","#5762BA","#5864BC","#5965BF","#5A66C1","#5C68C4","#5E6AC5","#616DC6","#6470C7","#6772C7","#6A75C8","#6D78C9","#707BCA","#737DCC","#7580CD","#7883CD","#7B85CE","#7E87CF","#818AD0","#848CD1","#868FD2","#8992D3","#8B93D4","#8E96D5","#9199D6","#939BD7","#969DD7","#99A0D8","#9CA2D9","#9EA5DB","#A0A7DC","#A3AADC","#A6ACDD","#A8AEDE","#ABB1DF","#AEB3E0","#B0B5E1","#B3B8E2","#B5BAE3","#B7BCE4","#BABFE5","#BCC1E6","#BFC3E6","#C1C6E7","#C4C7E8","#C7CAEA","#C8CDEA","#CBCEEB","#CDD1EC","#D0D3ED","#D2D6EE","#D5D7EF","#D7DAEF","#DADCF1","#DCDEF2","#DEE1F3","#E1E3F3","#E3E5F4","#E6E7F5","#E8EAF6","#EAEBF7","#EDEEF8","#EFF0F9","#F1F2FA","#F3F4FB","#F6F7FB","#F8F8FC","#FBFBFD","#FDFDFE","#000001","#000307","#03050C","#050711","#070916","#090A1A","#0A0C1E","#0C0E22","#0E0F27","#0E132B","#0F142F","#111632","#131736","#141939","#161A3D","#171B40","#191D45","#191F48","#1A214B","#1B224F","#1D2352","#1E2555","#1F2658","#21275B","#22295F","#222B62","#232C65","#252E68","#262F6B","#27306E","#293171","#2A3274","#2B3478","#2B357B","#2C377E","#2E3881","#2F3984","#303B86","#313C89","#323D8C","#343E90","#343F93","#354195","#364398","#37449B","#38459D","#3946A0","#3B47A3","#3C48A6","#3C49A9","#3D4BAC","#3E4CAE","#3F4EB1","#404FB4","#4150B6","#4351B9","#4452BC","#4453BF","#4555C1","#4656C4","#4757C7","#4858C9","#4959CC","#4A5ACE","#4B5BD2","#4F5ED2","#5261D2","#5564D3","#5867D4","#5B6AD5","#5E6DD6","#616FD7","#6572D7","#6875D7","#6B78D8","#6E7BD9","#717EDA","#7481DB","#7784DC","#7A86DC","#7E88DD","#818BDD","#848EDE","#8691DF","#8993E0","#8C96E1","#8F99E1","#929BE2","#959DE3","#98A0E3","#9BA3E4","#9DA6E5","#A0A8E6","#A3ABE6","#A6AEE7","#A8AFE8","#ACB2E9","#AEB5E9","#B1B7EA","#B4BAEA","#B6BCEB","#B9BFEC","#BBC1ED","#BEC4EE","#C1C6EF","#C4C8EF","#C7CBEF","#C9CDF0","#CCD0F1","#CED2F2","#D1D5F3","#D3D7F3","#D7D9F4","#D9DCF4","#DCDEF5","#DEE1F6","#E1E3F7","#E3E6F7","#E6E8F8","#E8EAF9","#EBECFA","#EEEFFA","#F0F1FB","#F3F3FB","#F5F6FC","#F7F8FD","#FAFBFE","#FCFDFF","#000001","#000007","#03030C","#030513","#050717","#07091B","#070A21","#090C25","#0A0E2A","#0A0F2E","#0C1131","#0C1336","#0E1439","#0F163D","#0F1641","#111745","#131949","#131A4C","#141B50","#141D54","#161E57","#171F5A","#17215E","#192261","#1A2365","#1A2568","#1B266B","#1B266F","#1D2772","#1E2975","#1E2A79","#1F2B7C","#212C80","#212E83","#222F86","#223089","#23318C","#25328F","#253493","#263595","#273699","#27369C","#29379E","#2938A2","#2A39A5","#2B3BA7","#2B3CAB","#2C3DAE","#2E3EB1","#2E3FB4","#2F40B6","#2F41BA","#3043BC","#3144BF","#3144C2","#3245C5","#3446C8","#3447CB","#3548CD","#3549D1","#364AD3","#374BD6","#374CD9","#384EDC","#394FDF","#3D52DF","#4055E0","#4558E0","#485BE1","#4B5EE1","#5061E1","#5364E2","#5767E3","#5A6AE3","#5D6DE4","#6171E4","#6474E5","#6777E6","#6B7AE6","#6E7DE6","#7280E7","#7583E7","#7886E8","#7C88E8","#7F8BE9","#828EEA","#8691EA","#8893EA","#8C97EB","#8F9AEB","#929DEC","#959FEC","#98A2ED","#9BA5EE","#9EA7EE","#A1AAEF","#A5ADEF","#A7AFEF","#AAB2F0","#AEB5F0","#B0B7F1","#B3BAF2","#B6BDF2","#B9C0F3","#BCC2F3","#BFC5F3","#C1C7F4","#C5CAF4","#C7CDF5","#CACFF6","#CDD2F6","#D0D4F7","#D3D7F7","#D6D9F7","#D8DCF8","#DCDFF8","#DEE1F9","#E1E4FA","#E4E6FA","#E6E9FB","#EAEBFB","#ECEEFB","#EFF0FC","#F2F3FC","#F4F5FD","#F7F7FE","#FAFAFE","#FCFCFF","#000001","#000007","#00030E","#030513","#030519","#03071E","#050922","#050A27","#070A2C","#070C30","#070E35","#090F38","#090F3D","#091141","#0A1345","#0A1349","#0C144E","#0C1651","#0C1755","#0E1758","#0E195C","#0E1A60","#0F1B63","#0F1B67","#111D6B","#111E6E","#111E72","#131F75","#132179","#13227D","#142280","#142384","#162587","#16268A","#16268E","#172791","#172994","#172A98","#192A9B","#192B9E","#1A2CA2","#1A2CA5","#1A2EA8","#1B2FAB","#1B30AE","#1B30B2","#1D31B5","#1D32B8","#1E34BB","#1E34BE","#1E35C1","#1F36C4","#1F36C7","#1F37CB","#2138CD","#2139D1","#2239D4","#223BD7","#223CDA","#233DDC","#233DE0","#233EE3","#253FE6","#2540E9","#2640EC","#2A45EC","#2F48EC","#324BED","#374FED","#3C53ED","#3F56EE","#4459EE","#485CEF","#4B60EF","#5063EF","#5366EF","#5769EF","#5B6DEF","#5E70F0","#6273F0","#6677F1","#697AF1","#6D7DF1","#7080F2","#7484F2","#7886F2","#7B89F3","#7F8CF3","#8390F3","#8693F3","#8995F3","#8C99F4","#909CF4","#939EF4","#96A1F5","#9AA5F5","#9DA7F6","#A0AAF6","#A4ADF6","#A6B0F7","#AAB3F7","#AEB5F7","#B0B8F7","#B4BBF7","#B7BEF8","#BAC1F8","#BDC4F8","#C0C7F9","#C3C9F9","#C7CCF9","#C9CFFA","#CDD2FA","#D0D4FB","#D2D7FB","#D6DAFB","#D8DCFB","#DCDFFB","#DFE2FB","#E1E5FC","#E5E7FC","#E8EAFD","#EAEDFD","#EEEFFD","#F0F2FE","#F3F4FE","#F7F7FE","#F9FAFF","#FCFCFF","#000001","#000007","#00030E","#000314","#00051A","#00051F","#000725","#00072A","#03092F","#030932","#030A37","#030A3C","#030C40","#030C45","#030E49","#030F4E","#050F52","#051155","#051159","#05135D","#051361","#051465","#051469","#05166D","#071671","#071774","#071778","#07197C","#071980","#071A84","#071B87","#071B8B","#091D8F","#091D92","#091E95","#091E99","#091F9D","#091FA0","#0921A4","#0921A7","#0A22AB","#0A22AE","#0A23B1","#0A25B5","#0A25B8","#0A26BB","#0A26BF","#0A27C2","#0C27C6","#0C29C8","#0C29CC","#0C2ACF","#0C2AD2","#0C2BD6","#0C2BD9","#0C2CDC","#0E2CE0","#0E2EE2","#0E2FE6","#0E2FE9","#0E30EC","#0E30EF","#0E31F3","#0E31F6","#0F32F9","#1436F9","#1A3BF9","#1F3EF9","#2543F9","#2A46F9","#2F4AF9","#344EF9","#3851FA","#3C55FA","#4058FA","#455CFA","#495FFA","#4E63FA","#5266FA","#566AFA","#5A6DFB","#5D71FB","#6174FB","#6578FB","#697BFB","#6D7FFB","#7182FB","#7585FB","#7988FB","#7C8BFB","#808FFB","#8492FB","#8795FB","#8B98FB","#8F9CFB","#939EFB","#96A2FC","#99A5FC","#9DA8FC","#A0ABFC","#A4AEFC","#A7B1FC","#ABB4FC","#AEB7FC","#B2BAFD","#B5BDFD","#B8C0FD","#BBC3FD","#BFC6FD","#C2C9FD","#C6CCFD","#C9CFFD","#CDD2FE","#CFD5FE","#D2D7FE","#D6DAFE","#D9DDFE","#DCE0FE","#E0E3FE","#E3E6FE","#E6E9FF","#E9EBFF","#ECEFFF","#EFF1FF","#F3F4FF","#F6F7FF","#F9FAFF","#FCFCFF","#000001","#030305","#070709","#0A0A0C","#0E0E0F","#111113","#141416","#171719","#1A1A1D","#1B1B1F","#1E1E22","#212125","#232327","#26262A","#29292C","#2B2B2F","#2E2E32","#2F2F35","#313137","#343439","#36363C","#38383E","#3B3B40","#3D3D43","#3F3F46","#404048","#43434A","#45454C","#47474F","#494951","#4B4B53","#4E4E55","#505058","#51525A","#53535C","#55555E","#575760","#595962","#5B5B64","#5D5D66","#5F5F69","#60616B","#62626D","#64646F","#666671","#686873","#6A6A75","#6C6C77","#6E6E7A","#6F707C","#71717E","#737380","#757582","#777784","#797986","#7B7B87","#7D7D8A","#7E7F8C","#80808E","#828290","#848492","#868693","#878795","#898997","#8B8B9A","#8D8D9B","#8F8F9D","#91919E","#9393A0","#9494A2","#9696A4","#9899A6","#9B9BA7","#9D9DA8","#9E9EAA","#A0A0AC","#A2A2AE","#A4A4AF","#A6A6B1","#A7A8B3","#AAAAB5","#ACACB5","#AEAEB7","#AFAFB9","#B1B1BB","#B3B3BC","#B5B5BE","#B6B7C0","#B9B9C1","#BBBBC2","#BCBCC4","#BEBEC6","#C0C0C7","#C1C1C9","#C3C3CB","#C5C6CD","#C7C7CE","#C9C9CF","#CBCBD1","#CDCDD2","#CECED4","#D0D0D6","#D2D2D7","#D3D3D9","#D6D6DB","#D7D7DC","#D9D9DD","#DBDBDF","#DCDCE1","#DEDEE2","#E0E0E4","#E1E1E6","#E4E4E7","#E6E6E8","#E7E7EA","#E9E9EB","#EAEAED","#ECECEF","#EEEEF0","#EFEFF2","#F2F2F3","#F3F3F4","#F5F5F6","#F7F7F7","#F8F8F9","#FAFAFB","#FBFBFC","#FDFDFE","#000001","#030305","#070709","#09090E","#0C0C11","#0F0F14","#111119","#14141B","#17171F","#191922","#1B1B25","#1D1E29","#1F1F2B","#22222E","#232331","#262634","#292937","#2A2A39","#2C2C3C","#2E2F3F","#303041","#323244","#343547","#363649","#38384C","#39394F","#3C3C51","#3D3E54","#3F3F56","#414158","#43445B","#45455D","#474760","#484962","#4A4A64","#4B4C67","#4E4E69","#50506B","#51526E","#535370","#555573","#565775","#585877","#595A7A","#5B5C7C","#5D5D7E","#5E5F81","#606083","#626286","#636487","#656589","#66678C","#68698E","#6A6A90","#6B6C93","#6D6E94","#6F6F97","#707199","#72729B","#73749D","#75769F","#7777A1","#7879A4","#7A7BA6","#7C7CA8","#7E7FA9","#8081AB","#8383AC","#8586AE","#8687AF","#8989B0","#8B8CB2","#8E8EB4","#9091B5","#9293B6","#9494B7","#9697B9","#9899BB","#9B9BBB","#9D9DBD","#9F9FBF","#A1A1C0","#A3A4C1","#A6A6C2","#A7A8C4","#A9AAC6","#ACACC7","#AEAEC8","#B0B0CA","#B2B2CB","#B4B5CD","#B6B6CD","#B8B8CF","#BABBD1","#BCBCD2","#BEBFD3","#C1C1D5","#C2C2D6","#C4C5D7","#C7C7D8","#C8C8DA","#CACBDC","#CDCDDC","#CECEDE","#D1D1E0","#D2D2E1","#D4D5E2","#D7D7E3","#D8D8E5","#DADBE6","#DCDCE7","#DEDEE9","#E1E1EA","#E2E2EB","#E4E4ED","#E6E6EE","#E8E8EF","#EAEAF1","#ECECF2","#EEEEF3","#F0F0F5","#F2F2F6","#F3F3F7","#F6F6F8","#F7F7FA","#F9F9FB","#FBFBFC","#FDFDFE","#000001","#030305","#05050A","#09090E","#0A0A13","#0C0C17","#0F0F1A","#11111E","#141422","#161625","#171729","#1A1A2B","#1B1B2F","#1D1E32","#1F1F35","#212138","#23233C","#25253E","#262741","#292944","#2A2A47","#2B2C4A","#2E2E4C","#2F3050","#313153","#323255","#343558","#36365A","#37385D","#383960","#3B3B62","#3C3D65","#3E3E68","#3F406A","#40416D","#43436F","#444572","#454675","#474777","#48497A","#4A4A7D","#4B4C7F","#4C4E82","#4F4F84","#505186","#515289","#53548B","#54558E","#565691","#575893","#585995","#5A5B97","#5B5C9A","#5C5D9D","#5E5F9E","#5F60A1","#6162A4","#6263A6","#6364A8","#6566AA","#6667AD","#6769AF","#696AB1","#6A6BB4","#6C6DB6","#6E6FB7","#7172B8","#7375BA","#7677BB","#797ABB","#7B7CBD","#7E7FBE","#8182C0","#8384C1","#8686C1","#8788C3","#8A8BC4","#8D8EC5","#8F90C7","#9293C7","#9494C9","#9697CA","#999ACB","#9B9CCD","#9D9ECD","#A0A0CE","#A2A3D0","#A5A6D1","#A7A7D2","#A9AAD3","#ACACD4","#AEAED6","#B0B1D7","#B3B3D7","#B5B5D9","#B7B8DA","#BABADC","#BBBCDC","#BEBEDD","#C0C1DF","#C2C3E0","#C5C5E1","#C7C7E2","#C9C9E3","#CCCCE5","#CDCEE6","#D0D0E6","#D2D2E8","#D4D4E9","#D7D7EA","#D8D9EB","#DBDBEC","#DDDDEE","#DFDFEF","#E1E1EF","#E3E4F1","#E6E6F2","#E8E8F3","#EAEAF4","#ECECF5","#EFEFF7","#F0F0F7","#F3F3F8","#F4F4FA","#F7F7FB","#F9F9FB","#FBFBFD","#FDFDFE","#000001","#030305","#05050A","#07070F","#090914","#0A0A19","#0C0C1D","#0E0F21","#111125","#131327","#14142B","#16162F","#171732","#191936","#1A1B39","#1B1D3D","#1E1E40","#1F1F43","#212146","#222249","#23254C","#252650","#262753","#272956","#2A2A59","#2B2B5B","#2C2C5E","#2E2F61","#2F3064","#303167","#31326A","#32346D","#353570","#363772","#373875","#383978","#393B7B","#3B3C7E","#3C3D81","#3D3E84","#3F4086","#404188","#41438B","#43448E","#444591","#454693","#464896","#474999","#494A9C","#4A4B9D","#4B4CA0","#4C4EA3","#4E4FA6","#4F51A8","#5052AB","#5153AE","#5354B0","#5455B2","#5556B5","#5657B7","#5759BA","#585ABC","#595BBF","#5A5CC1","#5C5DC4","#5E60C5","#6163C6","#6466C7","#6769C7","#6A6BC8","#6D6EC9","#7071CA","#7374CC","#7577CD","#787ACD","#7B7DCE","#7E7FCF","#8182D0","#8485D1","#8687D2","#898AD3","#8B8DD4","#8E90D5","#9192D6","#9394D7","#9697D7","#999AD8","#9C9DD9","#9E9FDB","#A0A1DC","#A3A4DC","#A6A6DD","#A8A9DE","#ABACDF","#AEAEE0","#B0B1E1","#B3B3E2","#B5B5E3","#B7B8E4","#BABBE5","#BCBDE6","#BFC0E6","#C1C1E7","#C4C4E8","#C7C7EA","#C8C9EA","#CBCCEB","#CDCEEC","#D0D1ED","#D2D2EE","#D5D5EF","#D7D7EF","#DADAF1","#DCDCF2","#DEDFF3","#E1E1F3","#E3E3F4","#E6E6F5","#E8E8F6","#EAEAF7","#EDEDF8","#EFEFF9","#F1F1FA","#F3F3FB","#F6F6FB","#F8F8FC","#FBFBFD","#FDFDFE","#000001","#000007","#03030C","#050511","#070716","#09091A","#0A0A1E","#0C0C22","#0E0E27","#0E0F2B","#0F112F","#111332","#131336","#141439","#16163D","#171740","#191945","#191A48","#1A1B4B","#1B1D4F","#1D1E52","#1E1F55","#1F2158","#21215B","#22225F","#222362","#232565","#252668","#26276B","#27296E","#292A71","#2A2B74","#2B2C78","#2B2E7B","#2C2E7E","#2E2F81","#2F3084","#303186","#313289","#32348C","#343590","#343693","#353795","#363898","#37399B","#38399D","#393BA0","#3B3CA3","#3C3DA6","#3C3EA9","#3D3FAC","#3E40AE","#3F41B1","#4043B4","#4144B6","#4345B9","#4445BC","#4446BF","#4547C1","#4648C4","#4749C7","#484AC9","#494BCC","#4A4CCE","#4B4ED2","#4F51D2","#5254D2","#5557D3","#585AD4","#5B5DD5","#5E60D6","#6163D7","#6566D7","#686AD7","#6B6DD8","#6E70D9","#7173DA","#7476DB","#7779DC","#7A7CDC","#7E7FDD","#8182DD","#8485DE","#8687DF","#898BE0","#8C8EE1","#8F91E1","#9293E2","#9596E3","#9899E3","#9B9CE4","#9D9EE5","#A0A1E6","#A3A4E6","#A6A6E7","#A8AAE8","#ACADE9","#AEAFE9","#B1B2EA","#B4B5EA","#B6B7EB","#B9BAEC","#BBBCED","#BEBFEE","#C1C1EF","#C4C4EF","#C7C7EF","#C9CAF0","#CCCDF1","#CECFF2","#D1D2F3","#D3D4F3","#D7D7F4","#D9D9F4","#DCDCF5","#DEDEF6","#E1E1F7","#E3E4F7","#E6E6F8","#E8E9F9","#EBEBFA","#EEEEFA","#F0F0FB","#F3F3FB","#F5F5FC","#F7F7FD","#FAFAFE","#FCFCFF","#000001","#000007","#03030C","#030513","#050517","#07071B","#070921","#090925","#0A0A2A","#0A0C2E","#0C0C31","#0C0E36","#0E0F39","#0F0F3D","#0F1141","#111345","#131349","#13144C","#141650","#141654","#161757","#17195A","#17195E","#191A61","#1A1B65","#1A1B68","#1B1D6B","#1B1E6F","#1D1E72","#1E1F75","#1E2179","#1F217C","#212280","#212383","#222386","#222589","#23268C","#25268F","#252793","#262995","#272999","#272A9C","#292B9E","#292BA2","#2A2CA5","#2B2EA7","#2B2EAB","#2C2FAE","#2E30B1","#2E30B4","#2F31B6","#2F32BA","#3032BC","#3134BF","#3135C2","#3235C5","#3436C8","#3437CB","#3537CD","#3538D1","#3639D3","#3739D6","#373BD9","#383CDC","#393CDF","#3D40DF","#4044E0","#4547E0","#484BE1","#4B4FE1","#5052E1","#5356E2","#5759E3","#5A5CE3","#5D60E4","#6163E4","#6466E5","#676AE6","#6B6DE6","#6E70E6","#7274E7","#7577E7","#787AE8","#7C7EE8","#7F81E9","#8284EA","#8687EA","#888AEA","#8C8DEB","#8F91EB","#9293EC","#9596EC","#989AED","#9B9DEE","#9E9FEE","#A1A3EF","#A5A6EF","#A7A8EF","#AAACF0","#AEAEF0","#B0B1F1","#B3B5F2","#B6B7F2","#B9BAF3","#BCBDF3","#BFC0F3","#C1C2F4","#C5C6F4","#C7C8F5","#CACBF6","#CDCEF6","#D0D1F7","#D3D3F7","#D6D7F7","#D8D9F8","#DCDCF8","#DEDFF9","#E1E1FA","#E4E4FA","#E6E7FB","#EAEAFB","#ECECFB","#EFEFFC","#F2F2FC","#F4F4FD","#F7F7FE","#FAFAFE","#FCFCFF","#000001","#000007","#00000E","#030313","#030319","#03051E","#050522","#050527","#07072C","#070730","#070935","#090938","#090A3D","#090A41","#0A0A45","#0A0C49","#0C0C4E","#0C0E51","#0C0E55","#0E0F58","#0E0F5C","#0E0F60","#0F1163","#0F1167","#11136B","#11136E","#111472","#131475","#131479","#13167D","#141680","#141784","#161787","#16198A","#16198E","#171991","#171A94","#171A98","#191B9B","#191B9E","#1A1DA2","#1A1DA5","#1A1DA8","#1B1EAB","#1B1EAE","#1B1FB2","#1D1FB5","#1D21B8","#1E21BB","#1E21BE","#1E22C1","#1F22C4","#1F23C7","#1F23CB","#2123CD","#2125D1","#2225D4","#2226D7","#2226DA","#2327DC","#2327E0","#2327E3","#2529E6","#2529E9","#262AEC","#2A2EEC","#2F32EC","#3236ED","#373BED","#3C3FED","#3F43EE","#4447EE","#484AEF","#4B4FEF","#5052EF","#5356EF","#575AEF","#5B5DEF","#5E61F0","#6264F0","#6668F1","#696CF1","#6D6FF1","#7073F2","#7476F2","#787AF2","#7B7DF3","#7F81F3","#8385F3","#8687F3","#898BF3","#8C8EF4","#9092F4","#9394F4","#9698F5","#9A9CF5","#9D9EF6","#A0A2F6","#A4A5F6","#A6A8F7","#AAABF7","#AEAEF7","#B0B2F7","#B4B5F7","#B7B8F8","#BABBF8","#BDBEF8","#C0C1F9","#C3C4F9","#C7C7F9","#C9CAFA","#CDCDFA","#D0D0FB","#D2D3FB","#D6D6FB","#D8D9FB","#DCDCFB","#DFDFFB","#E1E2FC","#E5E5FC","#E8E8FD","#EAEAFD","#EEEEFD","#F0F1FE","#F3F3FE","#F7F7FE","#F9F9FF","#FCFCFF","#000001","#000007","#00000E","#000014","#00001A","#00001F","#000325","#00032A","#03032F","#030332","#030337","#03053C","#030540","#030545","#030549","#03054E","#050552","#050755","#050759","#05075D","#050761","#050765","#050969","#05096D","#070971","#070974","#070978","#07097C","#070A80","#070A84","#070A87","#070A8B","#090A8F","#090C92","#090C95","#090C99","#090C9D","#090CA0","#090CA4","#090EA7","#0A0EAB","#0A0EAE","#0A0EB1","#0A0EB5","#0A0FB8","#0A0FBB","#0A0FBF","#0A0FC2","#0C0FC6","#0C0FC8","#0C11CC","#0C11CF","#0C11D2","#0C11D6","#0C11D9","#0C13DC","#0E13E0","#0E13E2","#0E13E6","#0E13E9","#0E14EC","#0E14EF","#0E14F3","#0E14F6","#0F14F9","#141AF9","#1A1FF9","#1F25F9","#252AF9","#2A2EF9","#2F32F9","#3437F9","#383CFA","#3C40FA","#4044FA","#4548FA","#494CFA","#4E51FA","#5255FA","#5658FA","#5A5CFB","#5D60FB","#6164FB","#6568FB","#696CFB","#6D6FFB","#7173FB","#7577FB","#797BFB","#7C7FFB","#8082FB","#8486FB","#8789FB","#8B8DFB","#8F91FB","#9394FB","#9697FC","#999BFC","#9D9EFC","#A0A2FC","#A4A6FC","#A7A8FC","#ABACFC","#AEAFFC","#B2B3FD","#B5B6FD","#B8BAFD","#BBBCFD","#BFC0FD","#C2C3FD","#C6C7FD","#C9CAFD","#CDCDFE","#CFD0FE","#D2D3FE","#D6D7FE","#D9DAFE","#DCDDFE","#E0E0FE","#E3E3FE","#E6E6FF","#E9EAFF","#ECEDFF","#EFEFFF","#F3F3FF","#F6F6FF","#F9F9FF","#FCFCFF","#000001","#030305","#070709","#0A0A0C","#0E0E0F","#111113","#141416","#171719","#1A1A1D","#1D1B1F","#1E1E22","#212125","#232327","#26262A","#29292C","#2B2B2F","#2E2E32","#302F35","#323137","#343439","#36363C","#38383E","#3B3B40","#3D3D43","#3F3F46","#414048","#44434A","#46454C","#48474F","#494951","#4B4B53","#4E4E55","#505058","#52515A","#54535C","#56555E","#585760","#5A5962","#5B5B64","#5D5D66","#5F5F69","#61606B","#63626D","#65646F","#676671","#696873","#6B6A75","#6D6C77","#6E6E7A","#706F7C","#72717E","#747380","#767582","#787784","#7A7986","#7C7B87","#7E7D8A","#7F7E8C","#81808E","#838290","#858492","#868693","#888795","#8A8997","#8C8B9A","#8E8D9B","#908F9D","#92919E","#9393A0","#9594A2","#9796A4","#9998A6","#9C9BA7","#9D9DA8","#9F9EAA","#A1A0AC","#A3A2AE","#A5A4AF","#A6A6B1","#A8A7B3","#AAAAB5","#ADACB5","#AEAEB7","#B0AFB9","#B2B1BB","#B4B3BC","#B5B5BE","#B7B6C0","#B9B9C1","#BBBBC2","#BCBCC4","#BFBEC6","#C1C0C7","#C2C1C9","#C4C3CB","#C6C5CD","#C7C7CE","#C9C9CF","#CBCBD1","#CDCDD2","#CFCED4","#D1D0D6","#D2D2D7","#D4D3D9","#D6D6DB","#D7D7DC","#D9D9DD","#DBDBDF","#DCDCE1","#DEDEE2","#E1E0E4","#E2E1E6","#E4E4E7","#E6E6E8","#E7E7EA","#E9E9EB","#EAEAED","#ECECEF","#EEEEF0","#F0EFF2","#F2F2F3","#F3F3F4","#F5F5F6","#F7F7F7","#F8F8F9","#FAFAFB","#FBFBFC","#FDFDFE","#000001","#030305","#070709","#0A090E","#0C0C11","#0F0F14","#131119","#14141B","#17171F","#1A1922","#1B1B25","#1E1D29","#211F2B","#22222E","#252331","#272634","#292937","#2B2A39","#2E2C3C","#2F2E3F","#313041","#343244","#363447","#373649","#39384C","#3C394F","#3D3C51","#3F3D54","#413F56","#434158","#45435B","#47455D","#484760","#4A4862","#4C4A64","#4E4B67","#504E69","#52506B","#53516E","#555370","#575573","#595675","#5A5877","#5C597A","#5E5B7C","#5F5D7E","#615E81","#636083","#646286","#666387","#686589","#69668C","#6B688E","#6D6A90","#6E6B93","#706D94","#726F97","#737099","#75729B","#77739D","#79759F","#7A77A1","#7C78A4","#7E7AA6","#7F7CA8","#827EA9","#8480AB","#8683AC","#8885AE","#8A86AF","#8C89B0","#8E8BB2","#918EB4","#9390B5","#9492B6","#9794B7","#9996B9","#9B98BB","#9D9BBB","#9F9DBD","#A19FBF","#A4A1C0","#A6A3C1","#A7A6C2","#AAA7C4","#ACA9C6","#AEACC7","#B0AEC8","#B2B0CA","#B4B2CB","#B5B4CD","#B8B6CD","#BAB8CF","#BBBAD1","#BEBCD2","#C0BED3","#C1C1D5","#C4C2D6","#C6C4D7","#C7C7D8","#CAC8DA","#CCCADC","#CDCDDC","#D0CEDE","#D2D1E0","#D3D2E1","#D6D4E2","#D7D7E3","#D9D8E5","#DBDAE6","#DDDCE7","#DFDEE9","#E1E1EA","#E3E2EB","#E5E4ED","#E6E6EE","#E9E8EF","#EAEAF1","#ECECF2","#EFEEF3","#F0F0F5","#F2F2F6","#F4F3F7","#F6F6F8","#F7F7FA","#FAF9FB","#FBFBFC","#FDFDFE","#000001","#030305","#05050A","#09090E","#0A0A13","#0E0C17","#0F0F1A","#13111E","#141422","#171625","#191729","#1B1A2B","#1D1B2F","#1F1D32","#211F35","#232138","#25233C","#27253E","#292641","#2A2944","#2C2A47","#2E2B4A","#302E4C","#312F50","#343153","#353255","#373458","#38365A","#3B375D","#3C3860","#3E3B62","#3F3C65","#413E68","#433F6A","#45406D","#46436F","#484472","#494575","#4A4777","#4C487A","#4E4A7D","#504B7F","#514C82","#534F84","#545086","#565189","#57538B","#59548E","#5A5691","#5C5793","#5D5895","#5F5A97","#605B9A","#625C9D","#635E9E","#645FA1","#6661A4","#6762A6","#6963A8","#6A65AA","#6C66AD","#6D67AF","#6F69B1","#706AB4","#726CB6","#746EB7","#7771B8","#7973BA","#7C76BB","#7E79BB","#817BBD","#837EBE","#8681C0","#8783C1","#8A86C1","#8D87C3","#8F8AC4","#928DC5","#938FC7","#9692C7","#9894C9","#9B96CA","#9D99CB","#9F9BCD","#A19DCD","#A4A0CE","#A6A2D0","#A8A5D1","#AAA7D2","#ADA9D3","#AEACD4","#B1AED6","#B4B0D7","#B5B3D7","#B8B5D9","#BAB7DA","#BCBADC","#BEBBDC","#C1BEDD","#C2C0DF","#C5C2E0","#C7C5E1","#C9C7E2","#CBC9E3","#CDCCE5","#CFCDE6","#D2D0E6","#D3D2E8","#D6D4E9","#D7D7EA","#DAD8EB","#DCDBEC","#DEDDEE","#E1DFEF","#E2E1EF","#E5E3F1","#E6E6F2","#E9E8F3","#EAEAF4","#EDECF5","#EFEFF7","#F1F0F7","#F3F3F8","#F5F4FA","#F7F7FB","#F9F9FB","#FBFBFD","#FDFDFE","#000001","#030305","#05050A","#07070F","#0A0914","#0C0A19","#0E0C1D","#0F0E21","#131125","#141327","#16142B","#17162F","#1A1732","#1B1936","#1D1A39","#1E1B3D","#211E40","#221F43","#232146","#252249","#27234C","#292550","#2A2653","#2C2756","#2E2A59","#2F2B5B","#302C5E","#322E61","#342F64","#353067","#36316A","#38326D","#393570","#3B3672","#3C3775","#3E3878","#3F397B","#403B7E","#413C81","#443D84","#453F86","#464088","#47418B","#49438E","#4A4491","#4B4593","#4E4696","#4F4799","#50499C","#514A9D","#534BA0","#544CA3","#554EA6","#564FA8","#5850AB","#5951AE","#5A53B0","#5B54B2","#5D55B5","#5E56B7","#5F57BA","#6058BC","#6259BF","#635AC1","#645CC4","#675EC5","#6A61C6","#6C64C7","#6F67C7","#726AC8","#756DC9","#7770CA","#7A73CC","#7D75CD","#8078CD","#827BCE","#857ECF","#8781D0","#8A84D1","#8C86D2","#8F89D3","#928BD4","#948ED5","#9691D6","#9993D7","#9C96D7","#9D99D8","#A09CD9","#A39EDB","#A6A0DC","#A7A3DC","#AAA6DD","#ADA8DE","#AFABDF","#B1AEE0","#B4B0E1","#B6B3E2","#B9B5E3","#BBB7E4","#BDBAE5","#C0BCE6","#C2BFE6","#C4C1E7","#C7C4E8","#C9C7EA","#CCC8EA","#CDCBEB","#D0CDEC","#D2D0ED","#D4D2EE","#D7D5EF","#D9D7EF","#DCDAF1","#DDDCF2","#E0DEF3","#E2E1F3","#E5E3F4","#E6E6F5","#E9E8F6","#EBEAF7","#EEEDF8","#EFEFF9","#F2F1FA","#F4F3FB","#F7F6FB","#F8F8FC","#FBFBFD","#FDFDFE","#000001","#030007","#05030C","#070511","#090716","#0A091A","#0C0A1E","#0E0C22","#0F0E27","#110E2B","#130F2F","#141132","#161336","#171439","#19163D","#1A1740","#1B1945","#1D1948","#1E1A4B","#1F1B4F","#221D52","#231E55","#251F58","#26215B","#27225F","#292262","#2A2365","#2B2568","#2C266B","#2E276E","#2F2971","#302A74","#312B78","#322B7B","#342C7E","#352E81","#362F84","#373086","#383189","#39328C","#3C3490","#3D3493","#3E3595","#3F3698","#40379B","#41389D","#4339A0","#443BA3","#453CA6","#463CA9","#473DAC","#483EAE","#493FB1","#4A40B4","#4B41B6","#4C43B9","#4E44BC","#4F44BF","#5045C1","#5146C4","#5347C7","#5448C9","#5549CC","#564ACE","#574BD2","#5A4FD2","#5D52D2","#6055D3","#6358D4","#655BD5","#685ED6","#6B61D7","#6E65D7","#7168D7","#746BD8","#776ED9","#7A71DA","#7D74DB","#8077DC","#837ADC","#867EDD","#8881DD","#8B84DE","#8E86DF","#9189E0","#938CE1","#968FE1","#9992E2","#9C95E3","#9D98E3","#A09BE4","#A39DE5","#A6A0E6","#A8A3E6","#ABA6E7","#AEA8E8","#B0ACE9","#B3AEE9","#B5B1EA","#B8B4EA","#BBB6EB","#BDB9EC","#C0BBED","#C2BEEE","#C5C1EF","#C7C4EF","#CAC7EF","#CDC9F0","#CFCCF1","#D1CEF2","#D3D1F3","#D6D3F3","#D8D7F4","#DBD9F4","#DDDCF5","#E0DEF6","#E2E1F7","#E5E3F7","#E7E6F8","#EAE8F9","#ECEBFA","#EFEEFA","#F1F0FB","#F3F3FB","#F6F5FC","#F8F7FD","#FBFAFE","#FDFCFF","#000001","#000007","#03030C","#050313","#070517","#09071B","#0A0721","#0A0925","#0C0A2A","#0E0A2E","#0F0C31","#110C36","#130E39","#130F3D","#140F41","#161145","#171349","#19134C","#1A1450","#1A1454","#1B1657","#1D175A","#1E175E","#1F1961","#211A65","#211A68","#221B6B","#231B6F","#251D72","#261E75","#271E79","#291F7C","#292180","#2A2183","#2B2286","#2C2289","#2E238C","#2F258F","#2F2593","#302695","#312799","#32279C","#34299E","#3529A2","#352AA5","#362BA7","#372BAB","#382CAE","#392EB1","#3B2EB4","#3B2FB6","#3C2FBA","#3D30BC","#3E31BF","#3F31C2","#4032C5","#4134C8","#4134CB","#4335CD","#4435D1","#4536D3","#4637D6","#4737D9","#4738DC","#4839DF","#4B3DDF","#5040E0","#5345E0","#5648E1","#594BE1","#5C50E1","#5F53E2","#6357E3","#665AE3","#695DE4","#6C61E4","#6F64E5","#7267E6","#756BE6","#796EE6","#7C72E7","#7F75E7","#8278E8","#857CE8","#877FE9","#8B82EA","#8E86EA","#9188EA","#938CEB","#968FEB","#9992EC","#9D95EC","#9F98ED","#A29BEE","#A59EEE","#A7A1EF","#AAA5EF","#AEA7EF","#B0AAF0","#B3AEF0","#B5B0F1","#B8B3F2","#BBB6F2","#BDB9F3","#C1BCF3","#C3BFF3","#C6C1F4","#C8C5F4","#CBC7F5","#CDCAF6","#D1CDF6","#D3D0F7","#D6D3F7","#D8D6F7","#DBD8F8","#DDDCF8","#E1DEF9","#E3E1FA","#E6E4FA","#E8E6FB","#EAEAFB","#EDECFB","#F0EFFC","#F3F2FC","#F5F4FD","#F7F7FE","#FAFAFE","#FCFCFF","#000001","#000007","#03000E","#030313","#050319","#07031E","#070522","#090527","#0A072C","#0A0730","#0C0735","#0C0938","#0E093D","#0F0941","#0F0A45","#110A49","#130C4E","#130C51","#140C55","#140E58","#160E5C","#170E60","#170F63","#190F67","#1A116B","#1A116E","#1B1172","#1B1375","#1D1379","#1E137D","#1E1480","#1F1484","#211687","#21168A","#22168E","#231791","#231794","#251798","#25199B","#26199E","#271AA2","#271AA5","#291AA8","#2A1BAB","#2A1BAE","#2B1BB2","#2B1DB5","#2C1DB8","#2E1EBB","#2E1EBE","#2F1EC1","#301FC4","#301FC7","#311FCB","#3121CD","#3221D1","#3422D4","#3422D7","#3522DA","#3623DC","#3623E0","#3723E3","#3725E6","#3825E9","#3926EC","#3D2AEC","#402FEC","#4532ED","#4837ED","#4C3CED","#503FEE","#5344EE","#5748EF","#5A4BEF","#5D50EF","#6153EF","#6457EF","#685BEF","#6B5EF0","#6E62F0","#7266F1","#7569F1","#786DF1","#7C70F2","#7F74F2","#8378F2","#867BF3","#887FF3","#8C83F3","#8F86F3","#9289F3","#958CF4","#9890F4","#9C93F4","#9E96F5","#A19AF5","#A59DF6","#A7A0F6","#AAA4F6","#AEA6F7","#B0AAF7","#B3AEF7","#B6B0F7","#B9B4F7","#BCB7F8","#BFBAF8","#C1BDF8","#C5C0F9","#C7C3F9","#CAC7F9","#CDC9FA","#D0CDFA","#D3D0FB","#D6D2FB","#D8D6FB","#DCD8FB","#DEDCFB","#E1DFFB","#E4E1FC","#E6E5FC","#EAE8FD","#ECEAFD","#EFEEFD","#F2F0FE","#F4F3FE","#F7F7FE","#FAF9FF","#FCFCFF","#000001","#000007","#00000E","#030014","#03001A","#05001F","#050025","#05002A","#07032F","#070332","#090337","#09033C","#0A0340","#0A0345","#0A0349","#0C034E","#0C0552","#0E0555","#0E0559","#0E055D","#0F0561","#0F0565","#110569","#11056D","#130771","#130774","#130778","#14077C","#140780","#160784","#160787","#16078B","#17098F","#170992","#190995","#190999","#1A099D","#1A09A0","#1A09A4","#1B09A7","#1B0AAB","#1D0AAE","#1D0AB1","#1D0AB5","#1E0AB8","#1E0ABB","#1F0ABF","#1F0AC2","#210CC6","#210CC8","#210CCC","#220CCF","#220CD2","#230CD6","#230CD9","#230CDC","#250EE0","#250EE2","#260EE6","#260EE9","#270EEC","#270EEF","#270EF3","#290EF6","#290FF9","#2E14F9","#311AF9","#361FF9","#3B25F9","#3E2AF9","#432FF9","#4634F9","#4A38FA","#4E3CFA","#5240FA","#5645FA","#5949FA","#5D4EFA","#6052FA","#6456FA","#685AFB","#6B5DFB","#6F61FB","#7265FB","#7669FB","#796DFB","#7D71FB","#8175FB","#8479FB","#877CFB","#8A80FB","#8E84FB","#9287FB","#948BFB","#988FFB","#9B93FB","#9E96FC","#A199FC","#A59DFC","#A8A0FC","#ABA4FC","#AEA7FC","#B1ABFC","#B5AEFC","#B8B2FD","#BBB5FD","#BEB8FD","#C1BBFD","#C4BFFD","#C7C2FD","#CAC6FD","#CDC9FD","#D0CDFE","#D3CFFE","#D6D2FE","#D9D6FE","#DCD9FE","#DFDCFE","#E2E0FE","#E5E3FE","#E8E6FF","#EAE9FF","#EEECFF","#F1EFFF","#F3F3FF","#F7F6FF","#F9F9FF","#FCFCFF","#000001","#030305","#070709","#0A0A0C","#0E0E0F","#111113","#141416","#171719","#1A1A1D","#1D1B1F","#1F1E22","#222125","#252327","#26262A","#29292C","#2B2B2F","#2E2E32","#302F35","#323137","#353439","#37363C","#39383E","#3C3B40","#3E3D43","#403F46","#414048","#44434A","#46454C","#48474F","#4A4951","#4C4B53","#4F4E55","#515058","#53515A","#55535C","#57555E","#595760","#5A5962","#5C5B64","#5E5D66","#605F69","#62606B","#64626D","#66646F","#686671","#6A6873","#6C6A75","#6E6C77","#706E7A","#716F7C","#73717E","#757380","#777582","#797784","#7B7986","#7D7B87","#7F7D8A","#817E8C","#83808E","#858290","#868492","#878693","#898795","#8B8997","#8D8B9A","#8F8D9B","#918F9D","#93919E","#9593A0","#9794A2","#9996A4","#9B98A6","#9D9BA7","#9E9DA8","#A09EAA","#A2A0AC","#A4A2AE","#A6A4AF","#A7A6B1","#A9A7B3","#ACAAB5","#AEACB5","#AFAEB7","#B1AFB9","#B3B1BB","#B5B3BC","#B6B5BE","#B8B6C0","#BAB9C1","#BBBBC2","#BDBCC4","#BFBEC6","#C1C0C7","#C3C1C9","#C5C3CB","#C7C5CD","#C8C7CE","#CAC9CF","#CCCBD1","#CDCDD2","#CFCED4","#D1D0D6","#D2D2D7","#D4D3D9","#D7D6DB","#D8D7DC","#DAD9DD","#DCDBDF","#DDDCE1","#DFDEE2","#E1E0E4","#E2E1E6","#E4E4E7","#E6E6E8","#E7E7EA","#E9E9EB","#EBEAED","#EDECEF","#EFEEF0","#F0EFF2","#F2F2F3","#F3F3F4","#F5F5F6","#F7F7F7","#F8F8F9","#FAFAFB","#FBFBFC","#FDFDFE","#000001","#030305","#070709","#0A090E","#0E0C11","#0F0F14","#131119","#16141B","#19171F","#1A1922","#1D1B25","#1F1D29","#221F2B","#23222E","#262331","#292634","#2B2937","#2C2A39","#2F2C3C","#312E3F","#343041","#353244","#373447","#393649","#3C384C","#3D394F","#3F3C51","#413D54","#443F56","#454158","#47435B","#49455D","#4B4760","#4C4862","#4F4A64","#514B67","#534E69","#54506B","#56516E","#585370","#5A5573","#5B5675","#5D5877","#5F597A","#615B7C","#625D7E","#645E81","#666083","#686286","#696387","#6B6589","#6D668C","#6F688E","#706A90","#726B93","#746D94","#766F97","#777099","#79729B","#7B739D","#7D759F","#7E77A1","#8078A4","#827AA6","#847CA8","#867EA9","#8780AB","#8983AC","#8C85AE","#8E86AF","#9089B0","#928BB2","#948EB4","#9690B5","#9892B6","#9A94B7","#9D96B9","#9E98BB","#A09BBB","#A29DBD","#A59FBF","#A6A1C0","#A8A3C1","#AAA6C2","#ADA7C4","#AEA9C6","#B0ACC7","#B2AEC8","#B5B0CA","#B6B2CB","#B8B4CD","#BAB6CD","#BCB8CF","#BEBAD1","#C0BCD2","#C1BED3","#C4C1D5","#C6C2D6","#C7C4D7","#C9C7D8","#CCC8DA","#CDCADC","#CFCDDC","#D1CEDE","#D3D1E0","#D5D2E1","#D7D4E2","#D8D7E3","#DBD8E5","#DCDAE6","#DEDCE7","#E0DEE9","#E2E1EA","#E4E2EB","#E6E4ED","#E7E6EE","#EAE8EF","#EBEAF1","#EDECF2","#EFEEF3","#F1F0F5","#F3F2F6","#F4F3F7","#F6F6F8","#F8F7FA","#FAF9FB","#FBFBFC","#FDFDFE","#000001","#030305","#07050A","#09090E","#0C0A13","#0E0C17","#110F1A","#14111E","#161422","#191625","#1A1729","#1D1A2B","#1F1B2F","#211D32","#231F35","#252138","#27233C","#2A253E","#2B2641","#2E2944","#2F2A47","#312B4A","#322E4C","#352F50","#373153","#383255","#3B3458","#3C365A","#3E375D","#403860","#413B62","#443C65","#453E68","#473F6A","#49406D","#4A436F","#4C4472","#4E4575","#504777","#52487A","#534A7D","#554B7F","#564C82","#584F84","#595086","#5B5189","#5D538B","#5E548E","#605691","#615793","#635895","#655A97","#665B9A","#685C9D","#695E9E","#6B5FA1","#6D61A4","#6E62A6","#7063A8","#7165AA","#7366AD","#7467AF","#7669B1","#786AB4","#796CB6","#7C6EB7","#7E71B8","#8073BA","#8376BB","#8579BB","#877BBD","#897EBE","#8C81C0","#8E83C1","#9086C1","#9387C3","#948AC4","#978DC5","#998FC7","#9B92C7","#9D94C9","#9F96CA","#A299CB","#A49BCD","#A69DCD","#A8A0CE","#AAA2D0","#ADA5D1","#AEA7D2","#B1A9D3","#B3ACD4","#B5AED6","#B7B0D7","#B9B3D7","#BBB5D9","#BDB7DA","#BFBADC","#C1BBDC","#C3BEDD","#C6C0DF","#C7C2E0","#C9C5E1","#CCC7E2","#CDC9E3","#D0CCE5","#D2CDE6","#D3D0E6","#D6D2E8","#D7D4E9","#DAD7EA","#DCD8EB","#DEDBEC","#E0DDEE","#E1DFEF","#E4E1EF","#E6E3F1","#E8E6F2","#EAE8F3","#EBEAF4","#EEECF5","#EFEFF7","#F2F0F7","#F3F3F8","#F5F4FA","#F7F7FB","#F9F9FB","#FBFBFD","#FDFDFE","#000001","#030305","#05050A","#09070F","#0A0914","#0E0A19","#0F0C1D","#110E21","#141125","#161327","#19142B","#1A162F","#1D1732","#1E1936","#1F1A39","#221B3D","#231E40","#261F43","#272146","#2A2249","#2B234C","#2C2550","#2F2653","#302756","#322A59","#342B5B","#362C5E","#372E61","#382F64","#3B3067","#3C316A","#3E326D","#3F3570","#413672","#433775","#443878","#46397B","#473B7E","#493C81","#4A3D84","#4C3F86","#4E4088","#4F418B","#51438E","#524491","#544593","#554696","#574799","#58499C","#594A9D","#5B4BA0","#5C4CA3","#5E4EA6","#5F4FA8","#6050AB","#6251AE","#6353B0","#6554B2","#6655B5","#6856B7","#6957BA","#6A58BC","#6C59BF","#6D5AC1","#6F5CC4","#715EC5","#7461C6","#7664C7","#7967C7","#7C6AC8","#7E6DC9","#8170CA","#8373CC","#8675CD","#8778CD","#8A7BCE","#8D7ECF","#8F81D0","#9284D1","#9386D2","#9689D3","#998BD4","#9B8ED5","#9D91D6","#9F93D7","#A296D7","#A499D8","#A69CD9","#A99EDB","#ABA0DC","#AEA3DC","#AFA6DD","#B2A8DE","#B4ABDF","#B6AEE0","#B9B0E1","#BBB3E2","#BDB5E3","#BFB7E4","#C1BAE5","#C3BCE6","#C6BFE6","#C8C1E7","#CAC4E8","#CDC7EA","#CEC8EA","#D1CBEB","#D2CDEC","#D5D0ED","#D7D2EE","#D9D5EF","#DCD7EF","#DDDAF1","#E0DCF2","#E1DEF3","#E4E1F3","#E6E3F4","#E8E6F5","#EAE8F6","#ECEAF7","#EFEDF8","#F0EFF9","#F3F1FA","#F5F3FB","#F7F6FB","#F9F8FC","#FBFBFD","#FDFDFE","#000001","#030007","#05030C","#070511","#0A0716","#0C091A","#0E0A1E","#0F0C22","#130E27","#140E2B","#160F2F","#171132","#1A1336","#1B1439","#1D163D","#1E1740","#211945","#221948","#231A4B","#251B4F","#271D52","#291E55","#2A1F58","#2C215B","#2E225F","#2F2262","#302365","#322568","#34266B","#35276E","#362971","#382A74","#392B78","#3B2B7B","#3C2C7E","#3E2E81","#3F2F84","#403086","#413189","#44328C","#453490","#463493","#473595","#493698","#4A379B","#4B389D","#4E39A0","#4F3BA3","#503CA6","#513CA9","#533DAC","#543EAE","#553FB1","#5640B4","#5841B6","#5943B9","#5A44BC","#5B44BF","#5D45C1","#5E46C4","#5F47C7","#6048C9","#6249CC","#634ACE","#644BD2","#674FD2","#6A52D2","#6C55D3","#6F58D4","#725BD5","#755ED6","#7761D7","#7A65D7","#7D68D7","#806BD8","#826ED9","#8571DA","#8774DB","#8A77DC","#8C7ADC","#8F7EDD","#9281DD","#9484DE","#9686DF","#9989E0","#9C8CE1","#9D8FE1","#A092E2","#A395E3","#A698E3","#A79BE4","#AA9DE5","#ADA0E6","#AFA3E6","#B1A6E7","#B4A8E8","#B6ACE9","#B9AEE9","#BBB1EA","#BDB4EA","#C0B6EB","#C2B9EC","#C4BBED","#C7BEEE","#C9C1EF","#CCC4EF","#CDC7EF","#D0C9F0","#D2CCF1","#D4CEF2","#D7D1F3","#D9D3F3","#DCD7F4","#DDD9F4","#E0DCF5","#E2DEF6","#E5E1F7","#E6E3F7","#E9E6F8","#EBE8F9","#EEEBFA","#EFEEFA","#F2F0FB","#F4F3FB","#F7F5FC","#F8F7FD","#FBFAFE","#FDFCFF","#000001","#030007","#05030C","#070313","#090517","#0A071B","#0C0721","#0E0925","#0F0A2A","#110A2E","#130C31","#160C36","#170E39","#190F3D","#1A0F41","#1B1145","#1D1349","#1E134C","#1F1450","#211454","#221657","#25175A","#26175E","#271961","#291A65","#2A1A68","#2B1B6B","#2C1B6F","#2E1D72","#2F1E75","#301E79","#321F7C","#342180","#352183","#362286","#372289","#38238C","#39258F","#3B2593","#3C2695","#3D2799","#3F279C","#40299E","#4129A2","#432AA5","#442BA7","#452BAB","#462CAE","#472EB1","#482EB4","#492FB6","#4A2FBA","#4C30BC","#4E31BF","#4F31C2","#5032C5","#5134C8","#5234CB","#5335CD","#5435D1","#5536D3","#5637D6","#5837D9","#5938DC","#5A39DF","#5D3DDF","#6040E0","#6245E0","#6548E1","#684BE1","#6B50E1","#6E53E2","#7157E3","#745AE3","#775DE4","#7A61E4","#7D64E5","#7F67E6","#826BE6","#856EE6","#8772E7","#8A75E7","#8D78E8","#907CE8","#937FE9","#9582EA","#9886EA","#9B88EA","#9D8CEB","#9F8FEB","#A292EC","#A595EC","#A798ED","#AA9BEE","#AD9EEE","#AFA1EF","#B2A5EF","#B5A7EF","#B6AAF0","#B9AEF0","#BBB0F1","#BEB3F2","#C1B6F2","#C3B9F3","#C6BCF3","#C8BFF3","#CBC1F4","#CDC5F4","#CFC7F5","#D2CAF6","#D4CDF6","#D7D0F7","#D9D3F7","#DCD6F7","#DED8F8","#E1DCF8","#E3DEF9","#E6E1FA","#E7E4FA","#EAE6FB","#ECEAFB","#EFECFB","#F1EFFC","#F3F2FC","#F6F4FD","#F8F7FE","#FBFAFE","#FDFCFF","#000001","#000007","#03000E","#050313","#070319","#09031E","#0A0522","#0C0527","#0E072C","#0F0730","#110735","#130938","#14093D","#160941","#170A45","#190A49","#190C4E","#1A0C51","#1B0C55","#1D0E58","#1E0E5C","#1F0E60","#210F63","#220F67","#23116B","#25116E","#261172","#271375","#291379","#2A137D","#2B1480","#2B1484","#2C1687","#2E168A","#2F168E","#301791","#311794","#321798","#34199B","#35199E","#361AA2","#371AA5","#381AA8","#391BAB","#3B1BAE","#3C1BB2","#3C1DB5","#3D1DB8","#3E1EBB","#3F1EBE","#401EC1","#411FC4","#431FC7","#441FCB","#4521CD","#4621D1","#4722D4","#4822D7","#4922DA","#4A23DC","#4B23E0","#4B23E3","#4C25E6","#4E25E9","#4F26EC","#522AEC","#552FEC","#5832ED","#5C37ED","#5F3CED","#623FEE","#6544EE","#6848EF","#6B4BEF","#6E50EF","#7153EF","#7457EF","#775BEF","#7A5EF0","#7D62F0","#8066F1","#8369F1","#866DF1","#8970F2","#8C74F2","#8F78F2","#927BF3","#947FF3","#9783F3","#9A86F3","#9D89F3","#9F8CF4","#A290F4","#A593F4","#A796F5","#AA9AF5","#AD9DF6","#AFA0F6","#B3A4F6","#B5A6F7","#B8AAF7","#BBAEF7","#BDB0F7","#C0B4F7","#C2B7F8","#C5BAF8","#C7BDF8","#CAC0F9","#CDC3F9","#CFC7F9","#D2C9FA","#D4CDFA","#D7D0FB","#DAD2FB","#DCD6FB","#DFD8FB","#E1DCFB","#E4DFFB","#E6E1FC","#E9E5FC","#EBE8FD","#EEEAFD","#F0EEFD","#F3F0FE","#F5F3FE","#F7F7FE","#FAF9FF","#FCFCFF","#000001","#000007","#03000E","#050014","#07001A","#07001F","#090025","#0A002A","#0C032F","#0C0332","#0E0337","#0F033C","#110340","#130345","#130349","#14034E","#160552","#170555","#170559","#19055D","#1A0561","#1B0565","#1B0569","#1D056D","#1E0771","#1F0774","#210778","#21077C","#220780","#230784","#250787","#25078B","#26098F","#270992","#290995","#290999","#2A099D","#2B09A0","#2C09A4","#2E09A7","#2E0AAB","#2F0AAE","#300AB1","#310AB5","#310AB8","#320ABB","#340ABF","#350AC2","#350CC6","#360CC8","#370CCC","#380CCF","#390CD2","#390CD6","#3B0CD9","#3C0CDC","#3D0EE0","#3D0EE2","#3E0EE6","#3F0EE9","#400EEC","#400EEF","#410EF3","#430EF6","#440FF9","#4714F9","#4A1AF9","#4E1FF9","#5225F9","#552AF9","#582FF9","#5B34F9","#5F38FA","#623CFA","#6540FA","#6845FA","#6C49FA","#6F4EFA","#7252FA","#7556FA","#785AFB","#7C5DFB","#7F61FB","#8265FB","#8569FB","#886DFB","#8B71FB","#8E75FB","#9179FB","#947CFB","#9780FB","#9A84FB","#9D87FB","#9F8BFB","#A38FFB","#A693FB","#A896FC","#AB99FC","#AE9DFC","#B1A0FC","#B4A4FC","#B6A7FC","#BAABFC","#BCAEFC","#BFB2FD","#C1B5FD","#C4B8FD","#C7BBFD","#CABFFD","#CDC2FD","#CFC6FD","#D2C9FD","#D5CDFE","#D7CFFE","#DAD2FE","#DDD6FE","#E0D9FE","#E2DCFE","#E5E0FE","#E7E3FE","#EAE6FF","#EDE9FF","#EFECFF","#F2EFFF","#F5F3FF","#F7F6FF","#FAF9FF","#FCFCFF","#000001","#030305","#070709","#0A0A0C","#0E0E0F","#111113","#141416","#171719","#1A1A1D","#1D1B1F","#1F1E22","#222125","#252327","#27262A","#2A292C","#2C2B2F","#2F2E32","#312F35","#323137","#353439","#37363C","#39383E","#3C3B40","#3E3D43","#403F46","#434048","#45434A","#47454C","#49474F","#4B4951","#4E4B53","#504E55","#525058","#54515A","#56535C","#57555E","#595760","#5B5962","#5D5B64","#5F5D66","#615F69","#63606B","#65626D","#67646F","#696671","#6B6873","#6D6A75","#6F6C77","#716E7A","#736F7C","#75717E","#777380","#787582","#7A7784","#7C7986","#7E7B87","#807D8A","#827E8C","#84808E","#868290","#878492","#898693","#8B8795","#8D8997","#8F8B9A","#918D9B","#938F9D","#94919E","#9693A0","#9894A2","#9A96A4","#9C98A6","#9D9BA7","#9F9DA8","#A19EAA","#A3A0AC","#A5A2AE","#A7A4AF","#A9A6B1","#ABA7B3","#ADAAB5","#AEACB5","#B0AEB7","#B2AFB9","#B4B1BB","#B5B3BC","#B7B5BE","#B9B6C0","#BBB9C1","#BCBBC2","#BEBCC4","#C0BEC6","#C1C0C7","#C3C1C9","#C6C3CB","#C7C5CD","#C9C7CE","#CBC9CF","#CDCBD1","#CECDD2","#D0CED4","#D2D0D6","#D3D2D7","#D5D3D9","#D7D6DB","#D8D7DC","#DAD9DD","#DCDBDF","#DDDCE1","#DFDEE2","#E1E0E4","#E3E1E6","#E5E4E7","#E6E6E8","#E8E7EA","#EAE9EB","#EBEAED","#EDECEF","#EFEEF0","#F0EFF2","#F2F2F3","#F3F3F4","#F5F5F6","#F7F7F7","#F8F8F9","#FAFAFB","#FBFBFC","#FDFDFE","#000001","#030305","#070709","#0A090E","#0E0C11","#110F14","#131119","#16141B","#19171F","#1B1922","#1E1B25","#211D29","#221F2B","#25222E","#272331","#2A2634","#2C2937","#2F2A39","#302C3C","#322E3F","#353041","#373244","#393447","#3B3649","#3D384C","#3F394F","#413C51","#443D54","#463F56","#474158","#49435B","#4B455D","#4E4760","#504862","#524A64","#534B67","#554E69","#57506B","#59516E","#5B5370","#5C5573","#5E5675","#605877","#62597A","#645B7C","#665D7E","#675E81","#696083","#6B6286","#6D6387","#6F6589","#71668C","#72688E","#746A90","#766B93","#786D94","#7A6F97","#7B7099","#7D729B","#7F739D","#81759F","#8377A1","#8578A4","#867AA6","#877CA8","#897EA9","#8C80AB","#8E83AC","#9085AE","#9286AF","#9389B0","#958BB2","#988EB4","#9A90B5","#9C92B6","#9D94B7","#9F96B9","#A298BB","#A49BBB","#A69DBD","#A79FBF","#A9A1C0","#ABA3C1","#AEA6C2","#AFA7C4","#B1A9C6","#B3ACC7","#B5AEC8","#B6B0CA","#B9B2CB","#BBB4CD","#BCB6CD","#BEB8CF","#C0BAD1","#C2BCD2","#C4BED3","#C6C1D5","#C7C2D6","#C9C4D7","#CBC7D8","#CDC8DA","#CFCADC","#D1CDDC","#D2CEDE","#D4D1E0","#D6D2E1","#D8D4E2","#DAD7E3","#DCD8E5","#DDDAE6","#DFDCE7","#E1DEE9","#E3E1EA","#E5E2EB","#E6E4ED","#E8E6EE","#EAE8EF","#ECEAF1","#EEECF2","#EFEEF3","#F1F0F5","#F3F2F6","#F4F3F7","#F7F6F8","#F8F7FA","#FAF9FB","#FBFBFC","#FDFDFE","#000001","#030305","#07050A","#0A090E","#0C0A13","#0F0C17","#130F1A","#14111E","#171422","#1A1625","#1D1729","#1E1A2B","#211B2F","#231D32","#251F35","#272138","#2A233C","#2C253E","#2E2641","#302944","#322A47","#342B4A","#362E4C","#382F50","#393153","#3C3255","#3E3458","#40365A","#41375D","#443860","#463B62","#473C65","#493E68","#4B3F6A","#4E406D","#4F436F","#514472","#534575","#544777","#56487A","#584A7D","#594B7F","#5B4C82","#5D4F84","#5F5086","#605189","#62538B","#64548E","#655691","#675793","#695895","#6B5A97","#6C5B9A","#6E5C9D","#705E9E","#715FA1","#7361A4","#7562A6","#7763A8","#7865AA","#7A66AD","#7C67AF","#7D69B1","#7F6AB4","#816CB6","#836EB7","#8571B8","#8773BA","#8976BB","#8B79BB","#8E7BBD","#907EBE","#9281C0","#9383C1","#9686C1","#9887C3","#9A8AC4","#9D8DC5","#9E8FC7","#A092C7","#A294C9","#A596CA","#A699CB","#A89BCD","#AB9DCD","#ADA0CE","#AEA2D0","#B0A5D1","#B3A7D2","#B5A9D3","#B6ACD4","#B9AED6","#BBB0D7","#BCB3D7","#BFB5D9","#C1B7DA","#C2BADC","#C4BBDC","#C7BEDD","#C8C0DF","#CAC2E0","#CDC5E1","#CEC7E2","#D0C9E3","#D2CCE5","#D4CDE6","#D6D0E6","#D7D2E8","#DAD4E9","#DCD7EA","#DDD8EB","#E0DBEC","#E1DDEE","#E3DFEF","#E5E1EF","#E7E3F1","#E9E6F2","#EAE8F3","#EDEAF4","#EFECF5","#F0EFF7","#F2F0F7","#F4F3F8","#F6F4FA","#F7F7FB","#FAF9FB","#FBFBFD","#FDFDFE","#000001","#030305","#07050A","#09070F","#0C0914","#0E0A19","#110C1D","#140E21","#161125","#191327","#1A142B","#1D162F","#1F1732","#211936","#231A39","#251B3D","#271E40","#2A1F43","#2B2146","#2E2249","#2F234C","#312550","#322653","#352756","#372A59","#382B5B","#3B2C5E","#3C2E61","#3E2F64","#403067","#41316A","#44326D","#453570","#473672","#493775","#4A3878","#4C397B","#4E3B7E","#503C81","#523D84","#533F86","#554088","#56418B","#58438E","#594491","#5B4593","#5D4696","#5E4799","#60499C","#614A9D","#634BA0","#654CA3","#664EA6","#684FA8","#6950AB","#6B51AE","#6D53B0","#6E54B2","#7055B5","#7156B7","#7357BA","#7458BC","#7659BF","#785AC1","#795CC4","#7C5EC5","#7E61C6","#8064C7","#8367C7","#856AC8","#876DC9","#8970CA","#8C73CC","#8E75CD","#9078CD","#937BCE","#947ECF","#9781D0","#9984D1","#9B86D2","#9D89D3","#9F8BD4","#A28ED5","#A491D6","#A693D7","#A896D7","#AA99D8","#AD9CD9","#AE9EDB","#B1A0DC","#B3A3DC","#B5A6DD","#B7A8DE","#B9ABDF","#BBAEE0","#BDB0E1","#BFB3E2","#C1B5E3","#C3B7E4","#C6BAE5","#C7BCE6","#C9BFE6","#CCC1E7","#CDC4E8","#D0C7EA","#D2C8EA","#D3CBEB","#D6CDEC","#D7D0ED","#DAD2EE","#DCD5EF","#DED7EF","#E0DAF1","#E1DCF2","#E4DEF3","#E6E1F3","#E8E3F4","#EAE6F5","#EBE8F6","#EEEAF7","#EFEDF8","#F2EFF9","#F3F1FA","#F5F3FB","#F7F6FB","#F9F8FC","#FBFBFD","#FDFDFE","#000001","#030007","#05030C","#090511","#0A0716","#0E091A","#0F0A1E","#130C22","#140E27","#170E2B","#190F2F","#1B1132","#1D1336","#1F1439","#21163D","#231740","#251945","#271948","#291A4B","#2A1B4F","#2C1D52","#2E1E55","#301F58","#31215B","#34225F","#352262","#372365","#382568","#3B266B","#3C276E","#3E2971","#3F2A74","#412B78","#432B7B","#452C7E","#462E81","#482F84","#493086","#4A3189","#4C328C","#4E3490","#503493","#513595","#533698","#54379B","#56389D","#5739A0","#593BA3","#5A3CA6","#5C3CA9","#5D3DAC","#5F3EAE","#603FB1","#6240B4","#6341B6","#6443B9","#6644BC","#6744BF","#6945C1","#6A46C4","#6C47C7","#6D48C9","#6F49CC","#704ACE","#724BD2","#744FD2","#7752D2","#7955D3","#7C58D4","#7E5BD5","#815ED6","#8361D7","#8665D7","#8768D7","#8A6BD8","#8D6ED9","#8F71DA","#9274DB","#9377DC","#967ADC","#987EDD","#9B81DD","#9D84DE","#9F86DF","#A189E0","#A48CE1","#A68FE1","#A892E2","#AA95E3","#AD98E3","#AE9BE4","#B19DE5","#B4A0E6","#B5A3E6","#B8A6E7","#BAA8E8","#BCACE9","#BEAEE9","#C1B1EA","#C2B4EA","#C5B6EB","#C7B9EC","#C9BBED","#CBBEEE","#CDC1EF","#CFC4EF","#D2C7EF","#D3C9F0","#D6CCF1","#D7CEF2","#DAD1F3","#DCD3F3","#DED7F4","#E1D9F4","#E2DCF5","#E5DEF6","#E6E1F7","#E9E3F7","#EAE6F8","#EDE8F9","#EFEBFA","#F1EEFA","#F3F0FB","#F5F3FB","#F7F5FC","#F9F7FD","#FBFAFE","#FDFCFF","#000001","#030007","#05030C","#090313","#0A0517","#0C071B","#0F0721","#110925","#130A2A","#160A2E","#170C31","#190C36","#1B0E39","#1D0F3D","#1E0F41","#211145","#221349","#25134C","#261450","#271454","#2A1657","#2B175A","#2C175E","#2F1961","#301A65","#311A68","#341B6B","#351B6F","#361D72","#381E75","#391E79","#3C1F7C","#3D2180","#3E2183","#402286","#412289","#43238C","#45258F","#462593","#472695","#492799","#4A279C","#4B299E","#4E29A2","#4F2AA5","#502BA7","#522BAB","#532CAE","#552EB1","#562EB4","#572FB6","#592FBA","#5A30BC","#5B31BF","#5D31C2","#5E32C5","#5F34C8","#6134CB","#6235CD","#6335D1","#6536D3","#6637D6","#6837D9","#6938DC","#6A39DF","#6D3DDF","#7040E0","#7245E0","#7548E1","#774BE1","#7A50E1","#7D53E2","#7F57E3","#825AE3","#855DE4","#8661E4","#8964E5","#8C67E6","#8E6BE6","#916EE6","#9372E7","#9575E7","#9878E8","#9A7CE8","#9D7FE9","#9F82EA","#A186EA","#A488EA","#A68CEB","#A88FEB","#AB92EC","#AE95EC","#AF98ED","#B29BEE","#B59EEE","#B6A1EF","#B9A5EF","#BBA7EF","#BDAAF0","#C0AEF0","#C1B0F1","#C4B3F2","#C7B6F2","#C8B9F3","#CBBCF3","#CDBFF3","#CFC1F4","#D2C5F4","#D4C7F5","#D6CAF6","#D8CDF6","#DBD0F7","#DCD3F7","#DFD6F7","#E1D8F8","#E3DCF8","#E6DEF9","#E7E1FA","#EAE4FA","#ECE6FB","#EEEAFB","#F0ECFB","#F3EFFC","#F4F2FC","#F7F4FD","#F9F7FE","#FBFAFE","#FDFCFF","#000001","#030007","#05000E","#070313","#090319","#0C031E","#0E0522","#0F0527","#11072C","#140730","#160735","#170938","#19093D","#1B0941","#1D0A45","#1E0A49","#1F0C4E","#220C51","#230C55","#250E58","#260E5C","#290E60","#2A0F63","#2B0F67","#2C116B","#2E116E","#301172","#311375","#321379","#34137D","#361480","#371484","#381687","#39168A","#3C168E","#3D1791","#3E1794","#3F1798","#41199B","#43199E","#441AA2","#451AA5","#471AA8","#481BAB","#491BAE","#4A1BB2","#4B1DB5","#4E1DB8","#4F1EBB","#501EBE","#511EC1","#531FC4","#541FC7","#551FCB","#5621CD","#5821D1","#5922D4","#5A22D7","#5B22DA","#5D23DC","#5E23E0","#5F23E3","#6025E6","#6225E9","#6326EC","#662AEC","#682FEC","#6B32ED","#6E37ED","#713CED","#733FEE","#7644EE","#7948EF","#7C4BEF","#7E50EF","#8153EF","#8457EF","#865BEF","#885EF0","#8B62F0","#8E66F1","#9169F1","#936DF1","#9570F2","#9874F2","#9B78F2","#9D7BF3","#9F7FF3","#A283F3","#A586F3","#A789F3","#A98CF4","#AC90F4","#AE93F4","#B196F5","#B39AF5","#B59DF6","#B8A0F6","#BBA4F6","#BCA6F7","#BFAAF7","#C1AEF7","#C4B0F7","#C6B4F7","#C8B7F8","#CBBAF8","#CDBDF8","#D0C0F9","#D2C3F9","#D4C7F9","#D7C9FA","#D9CDFA","#DBD0FB","#DDD2FB","#E0D6FB","#E2D8FB","#E4DCFB","#E6DFFB","#E9E1FC","#EBE5FC","#EDE8FD","#EFEAFD","#F2EEFD","#F4F0FE","#F6F3FE","#F8F7FE","#FBF9FF","#FDFCFF","#000001","#030007","#05000E","#070014","#09001A","#0A001F","#0C0025","#0E002A","#0F032F","#130332","#140337","#16033C","#170340","#190345","#1A0349","#1B034E","#1D0552","#1F0555","#210559","#22055D","#230561","#250565","#260569","#27056D","#290771","#2B0774","#2C0778","#2E077C","#2F0780","#300784","#310787","#32078B","#34098F","#350992","#370995","#380999","#39099D","#3B09A0","#3C09A4","#3D09A7","#3E0AAB","#3F0AAE","#410AB1","#430AB5","#440AB8","#450ABB","#460ABF","#470AC2","#480CC6","#490CC8","#4B0CCC","#4C0CCF","#4E0CD2","#4F0CD6","#500CD9","#510CDC","#520EE0","#530EE2","#550EE6","#560EE9","#570EEC","#580EEF","#590EF3","#5A0EF6","#5B0FF9","#5E14F9","#611AF9","#641FF9","#6725F9","#6A2AF9","#6D2FF9","#6F34F9","#7238FA","#753CFA","#7840FA","#7B45FA","#7E49FA","#814EFA","#8452FA","#8656FA","#885AFB","#8B5DFB","#8E61FB","#9165FB","#9369FB","#966DFB","#9971FB","#9B75FB","#9D79FB","#A07CFB","#A380FB","#A684FB","#A887FB","#AB8BFB","#AE8FFB","#AF93FB","#B296FC","#B599FC","#B79DFC","#BAA0FC","#BCA4FC","#BFA7FC","#C1ABFC","#C4AEFC","#C6B2FD","#C8B5FD","#CBB8FD","#CDBBFD","#D0BFFD","#D2C2FD","#D5C6FD","#D7C9FD","#D9CDFE","#DCCFFE","#DED2FE","#E1D6FE","#E3D9FE","#E6DCFE","#E8E0FE","#EAE3FE","#ECE6FF","#EFE9FF","#F1ECFF","#F3EFFF","#F6F3FF","#F8F6FF","#FBF9FF","#FDFCFF","#000001","#030305","#070709","#0A0A0C","#0E0E0F","#111113","#141416","#171719","#1A1A1D","#1D1B1F","#1F1E22","#222125","#252327","#27262A","#2A292C","#2C2B2F","#2F2E32","#312F35","#343137","#363439","#38363C","#3B383E","#3D3B40","#3F3D43","#413F46","#444048","#46434A","#48454C","#4A474F","#4B4951","#4E4B53","#504E55","#525058","#54515A","#56535C","#58555E","#5A5760","#5C5962","#5E5B64","#605D66","#625F69","#64606B","#66626D","#68646F","#6A6671","#6C6873","#6E6A75","#706C77","#726E7A","#746F7C","#76717E","#787380","#7A7582","#7C7784","#7E7986","#807B87","#827D8A","#837E8C","#85808E","#868290","#888492","#8A8693","#8C8795","#8E8997","#908B9A","#928D9B","#938F9D","#95919E","#9793A0","#9994A2","#9B96A4","#9D98A6","#9F9BA7","#A19DA8","#A39EAA","#A5A0AC","#A6A2AE","#A8A4AF","#AAA6B1","#ACA7B3","#AEAAB5","#AFACB5","#B1AEB7","#B3AFB9","#B5B1BB","#B6B3BC","#B8B5BE","#BAB6C0","#BBB9C1","#BDBBC2","#BFBCC4","#C1BEC6","#C2C0C7","#C4C1C9","#C6C3CB","#C7C5CD","#C9C7CE","#CBC9CF","#CDCBD1","#CECDD2","#D1CED4","#D2D0D6","#D4D2D7","#D6D3D9","#D7D6DB","#D9D7DC","#DBD9DD","#DCDBDF","#DEDCE1","#E0DEE2","#E1E0E4","#E3E1E6","#E5E4E7","#E6E6E8","#E8E7EA","#EAE9EB","#EBEAED","#EDECEF","#EFEEF0","#F0EFF2","#F2F2F3","#F3F3F4","#F5F5F6","#F7F7F7","#F8F8F9","#FAFAFB","#FBFBFC","#FDFDFE","#000001","#030305","#070709","#0A090E","#0E0C11","#110F14","#141119","#17141B","#1A171F","#1D1922","#1E1B25","#211D29","#231F2B","#26222E","#292331","#2B2634","#2E2937","#302A39","#322C3C","#342E3F","#363041","#383244","#3B3447","#3D3649","#3F384C","#41394F","#443C51","#463D54","#483F56","#494158","#4B435B","#4E455D","#504760","#524862","#544A64","#564B67","#584E69","#5A506B","#5B516E","#5D5370","#5F5573","#615675","#635877","#65597A","#675B7C","#695D7E","#6B5E81","#6D6083","#6E6286","#706387","#726589","#74668C","#76688E","#786A90","#7A6B93","#7C6D94","#7E6F97","#7F7099","#81729B","#83739D","#85759F","#8677A1","#8878A4","#8A7AA6","#8C7CA8","#8E7EA9","#9080AB","#9283AC","#9385AE","#9586AF","#9789B0","#998BB2","#9C8EB4","#9D90B5","#9F92B6","#A194B7","#A396B9","#A598BB","#A69BBB","#A89DBD","#AA9FBF","#ADA1C0","#AEA3C1","#B0A6C2","#B2A7C4","#B4A9C6","#B5ACC7","#B7AEC8","#B9B0CA","#BBB2CB","#BCB4CD","#BFB6CD","#C1B8CF","#C2BAD1","#C4BCD2","#C6BED3","#C7C1D5","#C9C2D6","#CBC4D7","#CDC7D8","#CFC8DA","#D1CADC","#D2CDDC","#D4CEDE","#D6D1E0","#D7D2E1","#D9D4E2","#DBD7E3","#DCD8E5","#DEDAE6","#E1DCE7","#E2DEE9","#E4E1EA","#E6E2EB","#E7E4ED","#E9E6EE","#EAE8EF","#ECEAF1","#EEECF2","#F0EEF3","#F2F0F5","#F3F2F6","#F5F3F7","#F7F6F8","#F8F7FA","#FAF9FB","#FBFBFC","#FDFDFE","#000001","#030305","#07050A","#0A090E","#0E0A13","#110C17","#130F1A","#16111E","#191422","#1B1625","#1E1729","#211A2B","#221B2F","#251D32","#271F35","#2A2138","#2C233C","#2F253E","#302641","#322944","#352A47","#372B4A","#392E4C","#3B2F50","#3D3153","#3F3255","#413458","#44365A","#46375D","#473860","#493B62","#4B3C65","#4E3E68","#503F6A","#52406D","#53436F","#554472","#574575","#594777","#5B487A","#5C4A7D","#5E4B7F","#604C82","#624F84","#645086","#665189","#67538B","#69548E","#6B5691","#6D5793","#6F5895","#715A97","#725B9A","#745C9D","#765E9E","#785FA1","#7A61A4","#7B62A6","#7D63A8","#7F65AA","#8166AD","#8367AF","#8569B1","#866AB4","#876CB6","#896EB7","#8C71B8","#8E73BA","#9076BB","#9279BB","#937BBD","#957EBE","#9881C0","#9A83C1","#9C86C1","#9D87C3","#9F8AC4","#A28DC5","#A48FC7","#A692C7","#A794C9","#A996CA","#AB99CB","#AE9BCD","#AF9DCD","#B1A0CE","#B3A2D0","#B5A5D1","#B6A7D2","#B9A9D3","#BBACD4","#BCAED6","#BEB0D7","#C0B3D7","#C2B5D9","#C4B7DA","#C6BADC","#C7BBDC","#C9BEDD","#CBC0DF","#CDC2E0","#CFC5E1","#D1C7E2","#D2C9E3","#D4CCE5","#D6CDE6","#D8D0E6","#DAD2E8","#DCD4E9","#DDD7EA","#DFD8EB","#E1DBEC","#E3DDEE","#E5DFEF","#E6E1EF","#E8E3F1","#EAE6F2","#ECE8F3","#EEEAF4","#EFECF5","#F1EFF7","#F3F0F7","#F4F3F8","#F7F4FA","#F8F7FB","#FAF9FB","#FBFBFD","#FDFDFE","#000001","#030305","#07050A","#0A070F","#0E0914","#0F0A19","#130C1D","#160E21","#191125","#1A1327","#1D142B","#1F162F","#221732","#231936","#261A39","#291B3D","#2B1E40","#2C1F43","#2F2146","#312249","#34234C","#352550","#372653","#392756","#3C2A59","#3D2B5B","#3F2C5E","#412E61","#442F64","#453067","#47316A","#49326D","#4B3570","#4C3672","#4F3775","#513878","#53397B","#543B7E","#563C81","#583D84","#5A3F86","#5B4088","#5D418B","#5F438E","#614491","#624593","#644696","#664799","#68499C","#694A9D","#6B4BA0","#6D4CA3","#6F4EA6","#704FA8","#7250AB","#7451AE","#7653B0","#7754B2","#7955B5","#7B56B7","#7D57BA","#7E58BC","#8059BF","#825AC1","#845CC4","#865EC5","#8761C6","#8964C7","#8C67C7","#8E6AC8","#906DC9","#9270CA","#9473CC","#9675CD","#9878CD","#9A7BCE","#9D7ECF","#9E81D0","#A084D1","#A286D2","#A589D3","#A68BD4","#A88ED5","#AA91D6","#AD93D7","#AE96D7","#B099D8","#B29CD9","#B59EDB","#B6A0DC","#B8A3DC","#BAA6DD","#BCA8DE","#BEABDF","#C0AEE0","#C1B0E1","#C4B3E2","#C6B5E3","#C7B7E4","#C9BAE5","#CCBCE6","#CDBFE6","#CFC1E7","#D1C4E8","#D3C7EA","#D5C8EA","#D7CBEB","#D8CDEC","#DBD0ED","#DCD2EE","#DED5EF","#E0D7EF","#E2DAF1","#E4DCF2","#E6DEF3","#E7E1F3","#EAE3F4","#EBE6F5","#EDE8F6","#EFEAF7","#F1EDF8","#F3EFF9","#F4F1FA","#F6F3FB","#F8F6FB","#FAF8FC","#FBFBFD","#FDFDFE","#000001","#030007","#07030C","#0A0511","#0C0716","#0F091A","#130A1E","#140C22","#170E27","#1A0E2B","#1B0F2F","#1E1132","#211336","#221439","#25163D","#271740","#291945","#2B1948","#2E1A4B","#2F1B4F","#311D52","#341E55","#361F58","#37215B","#39225F","#3C2262","#3D2365","#3F2568","#41266B","#43276E","#452971","#472A74","#482B78","#4A2B7B","#4C2C7E","#4E2E81","#502F84","#523086","#533189","#55328C","#573490","#593493","#5A3595","#5C3698","#5E379B","#5F389D","#6139A0","#633BA3","#643CA6","#663CA9","#683DAC","#693EAE","#6B3FB1","#6D40B4","#6E41B6","#7043B9","#7244BC","#7344BF","#7545C1","#7746C4","#7947C7","#7A48C9","#7C49CC","#7E4ACE","#7F4BD2","#824FD2","#8452D2","#8655D3","#8858D4","#8A5BD5","#8C5ED6","#8E61D7","#9165D7","#9368D7","#946BD8","#976ED9","#9971DA","#9B74DB","#9D77DC","#9F7ADC","#A17EDD","#A481DD","#A684DE","#A786DF","#AA89E0","#AC8CE1","#AE8FE1","#B092E2","#B295E3","#B498E3","#B59BE4","#B89DE5","#BAA0E6","#BBA3E6","#BEA6E7","#C0A8E8","#C1ACE9","#C4AEE9","#C6B1EA","#C7B4EA","#CAB6EB","#CCB9EC","#CDBBED","#D0BEEE","#D2C1EF","#D3C4EF","#D6C7EF","#D7C9F0","#D9CCF1","#DBCEF2","#DDD1F3","#DFD3F3","#E1D7F4","#E3D9F4","#E5DCF5","#E6DEF6","#E9E1F7","#EAE3F7","#ECE6F8","#EFE8F9","#F0EBFA","#F2EEFA","#F4F0FB","#F6F3FB","#F7F5FC","#FAF7FD","#FBFAFE","#FDFCFF","#000001","#030007","#07030C","#090313","#0C0517","#0F071B","#110721","#140925","#160A2A","#190A2E","#1B0C31","#1D0C36","#1F0E39","#210F3D","#230F41","#261145","#271349","#2A134C","#2C1450","#2E1454","#301657","#31175A","#34175E","#361961","#371A65","#391A68","#3B1B6B","#3D1B6F","#3F1D72","#401E75","#431E79","#451F7C","#462180","#482183","#492286","#4B2289","#4E238C","#4F258F","#512593","#522695","#542799","#56279C","#57299E","#5929A2","#5A2AA5","#5C2BA7","#5E2BAB","#5F2CAE","#612EB1","#632EB4","#642FB6","#662FBA","#6730BC","#6931BF","#6B31C2","#6C32C5","#6E34C8","#6F34CB","#7135CD","#7335D1","#7436D3","#7637D6","#7837D9","#7938DC","#7B39DF","#7D3DDF","#8040E0","#8245E0","#8448E1","#864BE1","#8850E1","#8A53E2","#8D57E3","#8F5AE3","#925DE4","#9361E4","#9564E5","#9867E6","#9A6BE6","#9D6EE6","#9E72E7","#A075E7","#A378E8","#A57CE8","#A67FE9","#A982EA","#AB86EA","#AE88EA","#AF8CEB","#B18FEB","#B492EC","#B595EC","#B898ED","#BA9BEE","#BB9EEE","#BEA1EF","#C0A5EF","#C2A7EF","#C4AAF0","#C6AEF0","#C8B0F1","#CAB3F2","#CCB6F2","#CEB9F3","#D0BCF3","#D2BFF3","#D4C1F4","#D6C5F4","#D8C7F5","#DACAF6","#DCCDF6","#DED0F7","#E0D3F7","#E2D6F7","#E4D8F8","#E6DCF8","#E8DEF9","#EAE1FA","#ECE4FA","#EEE6FB","#EFEAFB","#F2ECFB","#F3EFFC","#F6F2FC","#F7F4FD","#F9F7FE","#FBFAFE","#FDFCFF","#000001","#030007","#07000E","#090313","#0C0319","#0E031E","#110522","#130527","#16072C","#170730","#1A0735","#1B0938","#1E093D","#210941","#220A45","#250A49","#260C4E","#290C51","#2A0C55","#2C0E58","#2E0E5C","#300E60","#310F63","#340F67","#36116B","#37116E","#391172","#3B1375","#3D1379","#3E137D","#401480","#411484","#441687","#45168A","#47168E","#491791","#4A1794","#4C1798","#4E199B","#50199E","#511AA2","#531AA5","#541AA8","#561BAB","#571BAE","#591BB2","#5A1DB5","#5C1DB8","#5E1EBB","#5F1EBE","#611EC1","#621FC4","#641FC7","#651FCB","#6721CD","#6821D1","#6A22D4","#6B22D7","#6D22DA","#6F23DC","#7023E0","#7223E3","#7325E6","#7525E9","#7626EC","#792AEC","#7B2FEC","#7E32ED","#8037ED","#833CED","#853FEE","#8644EE","#8948EF","#8B4BEF","#8E50EF","#9053EF","#9357EF","#945BEF","#975EF0","#9962F0","#9C66F1","#9D69F1","#9F6DF1","#A270F2","#A474F2","#A678F2","#A87BF3","#AB7FF3","#AD83F3","#AF86F3","#B189F3","#B48CF4","#B590F4","#B893F4","#BA96F5","#BB9AF5","#BE9DF6","#C0A0F6","#C2A4F6","#C4A6F7","#C7AAF7","#C8AEF7","#CBB0F7","#CDB4F7","#CFB7F8","#D1BAF8","#D2BDF8","#D5C0F9","#D7C3F9","#D9C7F9","#DBC9FA","#DDCDFA","#DFD0FB","#E1D2FB","#E3D6FB","#E6D8FB","#E7DCFB","#E9DFFB","#EBE1FC","#EDE5FC","#EFE8FD","#F1EAFD","#F3EEFD","#F5F0FE","#F7F3FE","#F9F7FE","#FBF9FF","#FDFCFF","#000001","#030007","#05000E","#090014","#0A001A","#0E001F","#0F0025","#13002A","#14032F","#170332","#190337","#1B033C","#1D0340","#1F0345","#210349","#23034E","#250552","#270555","#290559","#2A055D","#2C0561","#2E0565","#300569","#31056D","#340771","#350774","#370778","#38077C","#3B0780","#3C0784","#3E0787","#3F078B","#41098F","#430992","#450995","#460999","#48099D","#4909A0","#4A09A4","#4C09A7","#4E0AAB","#500AAE","#510AB1","#530AB5","#540AB8","#560ABB","#570ABF","#590AC2","#5A0CC6","#5C0CC8","#5D0CCC","#5F0CCF","#600CD2","#620CD6","#630CD9","#640CDC","#660EE0","#670EE2","#690EE6","#6A0EE9","#6C0EEC","#6D0EEF","#6F0EF3","#700EF6","#720FF9","#7414F9","#771AF9","#791FF9","#7C25F9","#7E2AF9","#812FF9","#8334F9","#8638FA","#873CFA","#8A40FA","#8D45FA","#8F49FA","#924EFA","#9352FA","#9656FA","#985AFB","#9B5DFB","#9D61FB","#9F65FB","#A169FB","#A46DFB","#A671FB","#A875FB","#AA79FB","#AD7CFB","#AE80FB","#B184FB","#B487FB","#B58BFB","#B88FFB","#BA93FB","#BC96FC","#BE99FC","#C19DFC","#C2A0FC","#C5A4FC","#C7A7FC","#C9ABFC","#CBAEFC","#CDB2FD","#CFB5FD","#D2B8FD","#D3BBFD","#D6BFFD","#D7C2FD","#DAC6FD","#DCC9FD","#DECDFE","#E1CFFE","#E2D2FE","#E5D6FE","#E6D9FE","#E9DCFE","#EAE0FE","#EDE3FE","#EFE6FF","#F1E9FF","#F3ECFF","#F5EFFF","#F7F3FF","#F9F6FF","#FBF9FF","#FDFCFF","#000001","#030305","#070709","#0A0A0C","#0E0E0F","#111113","#141416","#171719","#1A1A1D","#1D1B1F","#1F1E22","#222125","#252327","#27262A","#2A292C","#2C2B2F","#2F2E32","#312F35","#343137","#363439","#38363C","#3B383E","#3D3B40","#3F3D43","#413F46","#444048","#46434A","#48454C","#4A474F","#4C4951","#4F4B53","#514E55","#535058","#55515A","#57535C","#59555E","#5B5760","#5D5962","#5F5B64","#615D66","#635F69","#65606B","#67626D","#69646F","#6B6671","#6D6873","#6F6A75","#716C77","#736E7A","#756F7C","#77717E","#797380","#7B7582","#7D7784","#7F7986","#817B87","#837D8A","#857E8C","#86808E","#888290","#8A8492","#8C8693","#8E8795","#908997","#928B9A","#938D9B","#958F9D","#97919E","#9993A0","#9B94A2","#9D96A4","#9E98A6","#A09BA7","#A29DA8","#A49EAA","#A6A0AC","#A7A2AE","#A9A4AF","#ABA6B1","#ADA7B3","#AEAAB5","#B0ACB5","#B2AEB7","#B4AFB9","#B5B1BB","#B7B3BC","#B9B5BE","#BBB6C0","#BCB9C1","#BEBBC2","#C0BCC4","#C1BEC6","#C3C0C7","#C5C1C9","#C7C3CB","#C8C5CD","#CAC7CE","#CCC9CF","#CDCBD1","#CFCDD2","#D1CED4","#D2D0D6","#D4D2D7","#D6D3D9","#D7D6DB","#D9D7DC","#DBD9DD","#DCDBDF","#DEDCE1","#E0DEE2","#E1E0E4","#E3E1E6","#E5E4E7","#E6E6E8","#E8E7EA","#EAE9EB","#EBEAED","#EDECEF","#EFEEF0","#F0EFF2","#F2F2F3","#F3F3F4","#F5F5F6","#F7F7F7","#F8F8F9","#FAFAFB","#FBFBFC","#FDFDFE","#000001","#030305","#070709","#0A090E","#0E0C11","#110F14","#141119","#17141B","#1A171F","#1D1922","#1F1B25","#221D29","#251F2B","#27222E","#2A2331","#2C2634","#2F2937","#312A39","#342C3C","#362E3F","#383041","#3B3244","#3D3447","#3F3649","#41384C","#44394F","#463C51","#483D54","#4A3F56","#4B4158","#4E435B","#50455D","#524760","#544862","#564A64","#584B67","#5A4E69","#5C506B","#5E516E","#605370","#625573","#645675","#665877","#68597A","#6A5B7C","#6C5D7E","#6E5E81","#706083","#726286","#746387","#766589","#78668C","#7A688E","#7C6A90","#7E6B93","#806D94","#826F97","#837099","#85729B","#86739D","#88759F","#8A77A1","#8C78A4","#8E7AA6","#907CA8","#927EA9","#9380AB","#9583AC","#9785AE","#9986AF","#9B89B0","#9D8BB2","#9F8EB4","#A190B5","#A392B6","#A594B7","#A696B9","#A898BB","#AA9BBB","#AC9DBD","#AE9FBF","#AFA1C0","#B1A3C1","#B3A6C2","#B5A7C4","#B6A9C6","#B8ACC7","#BAAEC8","#BBB0CA","#BDB2CB","#BFB4CD","#C1B6CD","#C2B8CF","#C4BAD1","#C6BCD2","#C7BED3","#C9C1D5","#CBC2D6","#CDC4D7","#CEC7D8","#D1C8DA","#D2CADC","#D4CDDC","#D6CEDE","#D7D1E0","#D9D2E1","#DBD4E2","#DCD7E3","#DED8E5","#E0DAE6","#E1DCE7","#E3DEE9","#E5E1EA","#E6E2EB","#E8E4ED","#EAE6EE","#EBE8EF","#EDEAF1","#EFECF2","#F0EEF3","#F2F0F5","#F3F2F6","#F5F3F7","#F7F6F8","#F8F7FA","#FAF9FB","#FBFBFC","#FDFDFE","#000001","#030305","#07050A","#0A090E","#0E0A13","#110C17","#140F1A","#17111E","#1A1422","#1D1625","#1F1729","#221A2B","#251B2F","#271D32","#2A1F35","#2C2138","#2F233C","#31253E","#322641","#352944","#372A47","#392B4A","#3C2E4C","#3E2F50","#403153","#433255","#453458","#47365A","#49375D","#4B3860","#4E3B62","#503C65","#523E68","#543F6A","#56406D","#57436F","#594472","#5B4575","#5D4777","#5F487A","#614A7D","#634B7F","#654C82","#674F84","#695086","#6B5189","#6D538B","#6F548E","#715691","#735793","#755895","#775A97","#785B9A","#7A5C9D","#7C5E9E","#7E5FA1","#8061A4","#8262A6","#8463A8","#8665AA","#8766AD","#8967AF","#8B69B1","#8D6AB4","#8F6CB6","#916EB7","#9371B8","#9473BA","#9676BB","#9879BB","#9A7BBD","#9C7EBE","#9D81C0","#9F83C1","#A186C1","#A387C3","#A58AC4","#A78DC5","#A98FC7","#AB92C7","#AD94C9","#AE96CA","#B099CB","#B29BCD","#B49DCD","#B5A0CE","#B7A2D0","#B9A5D1","#BBA7D2","#BCA9D3","#BEACD4","#C0AED6","#C1B0D7","#C3B3D7","#C6B5D9","#C7B7DA","#C9BADC","#CBBBDC","#CDBEDD","#CEC0DF","#D0C2E0","#D2C5E1","#D3C7E2","#D5C9E3","#D7CCE5","#D8CDE6","#DAD0E6","#DCD2E8","#DDD4E9","#DFD7EA","#E1D8EB","#E3DBEC","#E5DDEE","#E6DFEF","#E8E1EF","#EAE3F1","#EBE6F2","#EDE8F3","#EFEAF4","#F0ECF5","#F2EFF7","#F3F0F7","#F5F3F8","#F7F4FA","#F8F7FB","#FAF9FB","#FBFBFD","#FDFDFE","#000001","#030305","#07050A","#0A070F","#0E0914","#110A19","#140C1D","#170E21","#1A1125","#1D1327","#1F142B","#22162F","#251732","#261936","#291A39","#2B1B3D","#2E1E40","#301F43","#322146","#352249","#37234C","#392550","#3C2653","#3E2756","#402A59","#412B5B","#442C5E","#462E61","#482F64","#4A3067","#4C316A","#4F326D","#513570","#533672","#553775","#573878","#59397B","#5A3B7E","#5C3C81","#5E3D84","#603F86","#624088","#64418B","#66438E","#684491","#6A4593","#6C4696","#6E4799","#70499C","#714A9D","#734BA0","#754CA3","#774EA6","#794FA8","#7B50AB","#7D51AE","#7F53B0","#8154B2","#8355B5","#8556B7","#8657BA","#8758BC","#8959BF","#8B5AC1","#8D5CC4","#8F5EC5","#9161C6","#9364C7","#9567C7","#976AC8","#996DC9","#9B70CA","#9D73CC","#9E75CD","#A078CD","#A27BCE","#A47ECF","#A681D0","#A784D1","#A986D2","#AC89D3","#AE8BD4","#AF8ED5","#B191D6","#B393D7","#B596D7","#B699D8","#B89CD9","#BA9EDB","#BBA0DC","#BDA3DC","#BFA6DD","#C1A8DE","#C3ABDF","#C5AEE0","#C7B0E1","#C8B3E2","#CAB5E3","#CCB7E4","#CDBAE5","#CFBCE6","#D1BFE6","#D2C1E7","#D4C4E8","#D7C7EA","#D8C8EA","#DACBEB","#DCCDEC","#DDD0ED","#DFD2EE","#E1D5EF","#E2D7EF","#E4DAF1","#E6DCF2","#E7DEF3","#E9E1F3","#EBE3F4","#EDE6F5","#EFE8F6","#F0EAF7","#F2EDF8","#F3EFF9","#F5F1FA","#F7F3FB","#F8F6FB","#FAF8FC","#FBFBFD","#FDFDFE","#000001","#030007","#07030C","#0A0511","#0E0716","#11091A","#140A1E","#170C22","#1A0E27","#1D0E2B","#1E0F2F","#211132","#231336","#261439","#29163D","#2B1740","#2E1945","#301948","#321A4B","#341B4F","#361D52","#381E55","#3B1F58","#3D215B","#3F225F","#412262","#442365","#462568","#48266B","#49276E","#4B2971","#4E2A74","#502B78","#522B7B","#542C7E","#562E81","#582F84","#5A3086","#5B3189","#5D328C","#5F3490","#613493","#633595","#653698","#67379B","#69389D","#6B39A0","#6D3BA3","#6E3CA6","#703CA9","#723DAC","#743EAE","#763FB1","#7840B4","#7A41B6","#7C43B9","#7E44BC","#7F44BF","#8145C1","#8346C4","#8547C7","#8648C9","#8849CC","#8A4ACE","#8C4BD2","#8E4FD2","#9052D2","#9255D3","#9358D4","#955BD5","#975ED6","#9961D7","#9C65D7","#9D68D7","#9F6BD8","#A16ED9","#A371DA","#A574DB","#A677DC","#A87ADC","#AA7EDD","#AD81DD","#AE84DE","#B086DF","#B289E0","#B48CE1","#B58FE1","#B792E2","#B995E3","#BB98E3","#BC9BE4","#BF9DE5","#C1A0E6","#C2A3E6","#C4A6E7","#C6A8E8","#C7ACE9","#C9AEE9","#CBB1EA","#CDB4EA","#CFB6EB","#D1B9EC","#D2BBED","#D4BEEE","#D6C1EF","#D7C4EF","#D9C7EF","#DBC9F0","#DCCCF1","#DECEF2","#E1D1F3","#E2D3F3","#E4D7F4","#E6D9F4","#E7DCF5","#E9DEF6","#EAE1F7","#ECE3F7","#EEE6F8","#F0E8F9","#F2EBFA","#F3EEFA","#F5F0FB","#F7F3FB","#F8F5FC","#FAF7FD","#FBFAFE","#FDFCFF","#000001","#030007","#07030C","#0A0313","#0E0517","#11071B","#140721","#170925","#190A2A","#1B0A2E","#1E0C31","#210C36","#230E39","#260F3D","#290F41","#2B1145","#2C1349","#2F134C","#311450","#341454","#361657","#38175A","#3B175E","#3D1961","#3E1A65","#401A68","#431B6B","#451B6F","#471D72","#491E75","#4B1E79","#4E1F7C","#4F2180","#512183","#532286","#552289","#57238C","#59258F","#5B2593","#5C2695","#5E2799","#60279C","#62299E","#6429A2","#662AA5","#682BA7","#6A2BAB","#6B2CAE","#6D2EB1","#6F2EB4","#712FB6","#732FBA","#7530BC","#7731BF","#7931C2","#7A32C5","#7C34C8","#7E34CB","#8035CD","#8235D1","#8436D3","#8637D6","#8737D9","#8838DC","#8A39DF","#8C3DDF","#8F40E0","#9145E0","#9348E1","#944BE1","#9650E1","#9853E2","#9A57E3","#9C5AE3","#9E5DE4","#A061E4","#A264E5","#A467E6","#A66BE6","#A76EE6","#A972E7","#AB75E7","#AE78E8","#AF7CE8","#B17FE9","#B382EA","#B586EA","#B688EA","#B88CEB","#BA8FEB","#BC92EC","#BE95EC","#C098ED","#C19BEE","#C39EEE","#C5A1EF","#C7A5EF","#C9A7EF","#CBAAF0","#CDAEF0","#CEB0F1","#D0B3F2","#D2B6F2","#D3B9F3","#D5BCF3","#D7BFF3","#D9C1F4","#DBC5F4","#DCC7F5","#DECAF6","#E0CDF6","#E1D0F7","#E3D3F7","#E6D6F7","#E7D8F8","#E9DCF8","#EADEF9","#ECE1FA","#EEE4FA","#EFE6FB","#F1EAFB","#F3ECFB","#F5EFFC","#F7F2FC","#F8F4FD","#FAF7FE","#FBFAFE","#FDFCFF","#000001","#030007","#07000E","#0A0313","#0E0319","#11031E","#140522","#160527","#19072C","#1B0730","#1E0735","#210938","#23093D","#260941","#270A45","#2A0A49","#2C0C4E","#2F0C51","#310C55","#340E58","#350E5C","#370E60","#390F63","#3C0F67","#3E116B","#40116E","#431172","#441375","#461379","#48137D","#4A1480","#4C1484","#4F1687","#50168A","#52168E","#541791","#561794","#581798","#5A199B","#5C199E","#5D1AA2","#5F1AA5","#611AA8","#631BAB","#651BAE","#671BB2","#681DB5","#6A1DB8","#6C1EBB","#6E1EBE","#701EC1","#721FC4","#741FC7","#751FCB","#7721CD","#7921D1","#7B22D4","#7D22D7","#7F22DA","#8123DC","#8223E0","#8423E3","#8625E6","#8725E9","#8926EC","#8B2AEC","#8D2FEC","#8F32ED","#9137ED","#933CED","#953FEE","#9744EE","#9948EF","#9B4BEF","#9D50EF","#9E53EF","#A157EF","#A35BEF","#A55EF0","#A662F0","#A866F1","#AA69F1","#AC6DF1","#AE70F2","#B074F2","#B278F2","#B47BF3","#B57FF3","#B783F3","#BA86F3","#BB89F3","#BD8CF4","#BF90F4","#C193F4","#C296F5","#C49AF5","#C79DF6","#C8A0F6","#CAA4F6","#CCA6F7","#CDAAF7","#CFAEF7","#D2B0F7","#D3B4F7","#D5B7F8","#D7BAF8","#D8BDF8","#DAC0F9","#DCC3F9","#DEC7F9","#E0C9FA","#E1CDFA","#E3D0FB","#E5D2FB","#E6D6FB","#E9D8FB","#EADCFB","#ECDFFB","#EEE1FC","#EFE5FC","#F1E8FD","#F3EAFD","#F5EEFD","#F7F0FE","#F8F3FE","#FAF7FE","#FBF9FF","#FDFCFF","#000001","#030007","#07000E","#0A0014","#0E001A","#11001F","#130025","#16002A","#19032F","#1B0332","#1E0337","#21033C","#220340","#250345","#270349","#2A034E","#2C0552","#2F0555","#300559","#32055D","#350561","#370565","#390569","#3B056D","#3D0771","#3F0774","#410778","#44077C","#460780","#470784","#490787","#4B078B","#4E098F","#500992","#520995","#530999","#55099D","#5709A0","#5909A4","#5B09A7","#5C0AAB","#5E0AAE","#600AB1","#620AB5","#640AB8","#660ABB","#670ABF","#690AC2","#6B0CC6","#6D0CC8","#6F0CCC","#710CCF","#720CD2","#740CD6","#760CD9","#780CDC","#7A0EE0","#7B0EE2","#7D0EE6","#7F0EE9","#810EEC","#830EEF","#850EF3","#860EF6","#870FF9","#8914F9","#8C1AF9","#8E1FF9","#9025F9","#922AF9","#932FF9","#9534F9","#9838FA","#9A3CFA","#9C40FA","#9D45FA","#9F49FA","#A24EFA","#A452FA","#A656FA","#A75AFB","#A95DFB","#AB61FB","#AE65FB","#AF69FB","#B16DFB","#B371FB","#B575FB","#B679FB","#B97CFB","#BB80FB","#BC84FB","#BE87FB","#C08BFB","#C28FFB","#C493FB","#C696FC","#C799FC","#C99DFC","#CBA0FC","#CDA4FC","#CFA7FC","#D1ABFC","#D2AEFC","#D4B2FD","#D6B5FD","#D8B8FD","#DABBFD","#DCBFFD","#DDC2FD","#DFC6FD","#E1C9FD","#E3CDFE","#E5CFFE","#E6D2FE","#E8D6FE","#EAD9FE","#ECDCFE","#EEE0FE","#EFE3FE","#F1E6FF","#F3E9FF","#F4ECFF","#F7EFFF","#F8F3FF","#FAF6FF","#FBF9FF","#FDFCFF","#000001","#050305","#090709","#0C0A0C","#0F0E0F","#131113","#161416","#191719","#1B1A1D","#1E1B1F","#211E22","#232125","#262327","#29262A","#2B292C","#2E2B2F","#302E32","#322F35","#353137","#373439","#39363C","#3C383E","#3E3B40","#403D43","#433F46","#454048","#47434A","#49454C","#4B474F","#4E4951","#504B53","#524E55","#545058","#56515A","#58535C","#5A555E","#5C5760","#5E5962","#605B64","#625D66","#645F69","#66606B","#68626D","#6A646F","#6C6671","#6E6873","#706A75","#726C77","#746E7A","#766F7C","#78717E","#7A7380","#7C7582","#7E7784","#807986","#827B87","#847D8A","#867E8C","#87808E","#898290","#8B8492","#8D8693","#8F8795","#918997","#938B9A","#948D9B","#968F9D","#98919E","#9A93A0","#9C94A2","#9D96A4","#9F98A6","#A19BA7","#A39DA8","#A59EAA","#A6A0AC","#A8A2AE","#AAA4AF","#ACA6B1","#AEA7B3","#AFAAB5","#B1ACB5","#B3AEB7","#B5AFB9","#B6B1BB","#B8B3BC","#BAB5BE","#BBB6C0","#BDB9C1","#BFBBC2","#C1BCC4","#C2BEC6","#C4C0C7","#C6C1C9","#C7C3CB","#C9C5CD","#CBC7CE","#CDC9CF","#CECBD1","#D0CDD2","#D2CED4","#D3D0D6","#D5D2D7","#D7D3D9","#D8D6DB","#DAD7DC","#DCD9DD","#DDDBDF","#DFDCE1","#E1DEE2","#E2E0E4","#E4E1E6","#E6E4E7","#E7E6E8","#E9E7EA","#EAE9EB","#ECEAED","#EEECEF","#EFEEF0","#F1EFF2","#F3F2F3","#F4F3F4","#F6F5F6","#F7F7F7","#F9F8F9","#FBFAFB","#FCFBFC","#FEFDFE","#000001","#050305","#090709","#0C090E","#0F0C11","#130F14","#161119","#19141B","#1B171F","#1E1922","#211B25","#231D29","#261F2B","#29222E","#2B2331","#2E2634","#302937","#322A39","#352C3C","#372E3F","#393041","#3C3244","#3E3447","#403649","#43384C","#45394F","#473C51","#493D54","#4B3F56","#4F4158","#51435B","#53455D","#554760","#574862","#594A64","#5B4B67","#5D4E69","#5F506B","#61516E","#635370","#655573","#675675","#695877","#6B597A","#6D5B7C","#6F5D7E","#715E81","#736083","#756286","#776387","#796589","#7B668C","#7D688E","#7F6A90","#816B93","#836D94","#856F97","#877099","#89729B","#8B739D","#8D759F","#8F77A1","#9178A4","#937AA6","#947CA8","#967EA9","#9880AB","#9A83AC","#9C85AE","#9D86AF","#9F89B0","#A18BB2","#A28EB4","#A490B5","#A692B6","#A794B7","#A996B9","#AB98BB","#AD9BBB","#AE9DBD","#B09FBF","#B2A1C0","#B4A3C1","#B5A6C2","#B7A7C4","#B9A9C6","#BBACC7","#BCAEC8","#BEB0CA","#C0B2CB","#C1B4CD","#C3B6CD","#C5B8CF","#C7BAD1","#C8BCD2","#CABED3","#CCC1D5","#CDC2D6","#CFC4D7","#D1C7D8","#D2C8DA","#D3CADC","#D5CDDC","#D7CEDE","#D8D1E0","#DAD2E1","#DCD4E2","#DDD7E3","#DFD8E5","#E1DAE6","#E2DCE7","#E4DEE9","#E6E1EA","#E7E2EB","#E9E4ED","#EAE6EE","#ECE8EF","#EEEAF1","#EFECF2","#F1EEF3","#F3F0F5","#F4F2F6","#F6F3F7","#F7F6F8","#F9F7FA","#FBF9FB","#FCFBFC","#FEFDFE","#000001","#050305","#09050A","#0C090E","#0F0A13","#130C17","#160F1A","#19111E","#1B1422","#1E1625","#211729","#231A2B","#261B2F","#291D32","#2B1F35","#2E2138","#30233C","#32253E","#362641","#382944","#3B2A47","#3D2B4A","#3F2E4C","#412F50","#443153","#463255","#483458","#4A365A","#4C375D","#4F3860","#513B62","#533C65","#553E68","#573F6A","#59406D","#5C436F","#5E4472","#604575","#624777","#64487A","#664A7D","#684B7F","#6A4C82","#6C4F84","#6E5086","#705189","#72538B","#74548E","#765691","#785793","#7A5895","#7C5A97","#7F5B9A","#815C9D","#835E9E","#855FA1","#8661A4","#8862A6","#8A63A8","#8C65AA","#8E66AD","#9067AF","#9269B1","#936AB4","#956CB6","#976EB7","#9971B8","#9B73BA","#9D76BB","#9E79BB","#A07BBD","#A27EBE","#A481C0","#A683C1","#A786C1","#A987C3","#AB8AC4","#AC8DC5","#AE8FC7","#AF92C7","#B194C9","#B396CA","#B599CB","#B69BCD","#B89DCD","#BAA0CE","#BBA2D0","#BDA5D1","#BFA7D2","#C1A9D3","#C2ACD4","#C4AED6","#C6B0D7","#C7B3D7","#C8B5D9","#CAB7DA","#CCBADC","#CDBBDC","#CFBEDD","#D1C0DF","#D2C2E0","#D4C5E1","#D6C7E2","#D7C9E3","#D9CCE5","#DBCDE6","#DCD0E6","#DED2E8","#E0D4E9","#E1D7EA","#E3D8EB","#E4DBEC","#E6DDEE","#E7DFEF","#E9E1EF","#EAE3F1","#ECE6F2","#EEE8F3","#EFEAF4","#F1ECF5","#F3EFF7","#F4F0F7","#F6F3F8","#F7F4FA","#F9F7FB","#FBF9FB","#FCFBFD","#FEFDFE","#000001","#050305","#09050A","#0C070F","#0F0914","#130A19","#160C1D","#190E21","#1B1125","#1E1327","#21142B","#23162F","#261732","#2A1936","#2C1A39","#2F1B3D","#311E40","#341F43","#362146","#382249","#3B234C","#3D2550","#3F2653","#412756","#442A59","#472B5B","#492C5E","#4B2E61","#4E2F64","#503067","#52316A","#54326D","#563570","#583672","#5A3775","#5C3878","#5E397B","#613B7E","#633C81","#653D84","#673F86","#694088","#6B418B","#6D438E","#6F4491","#714593","#734696","#754799","#77499C","#7A4A9D","#7C4BA0","#7E4CA3","#804EA6","#824FA8","#8450AB","#8651AE","#8753B0","#8954B2","#8B55B5","#8D56B7","#8F57BA","#9258BC","#9359BF","#955AC1","#975CC4","#995EC5","#9B61C6","#9D64C7","#9D67C7","#9F6AC8","#A16DC9","#A370CA","#A573CC","#A675CD","#A878CD","#AA7BCE","#AC7ECF","#AE81D0","#AF84D1","#B186D2","#B289D3","#B48BD4","#B58ED5","#B791D6","#B993D7","#BB96D7","#BC99D8","#BE9CD9","#C09EDB","#C1A0DC","#C3A3DC","#C5A6DD","#C6A8DE","#C7ABDF","#C9AEE0","#CBB0E1","#CDB3E2","#CEB5E3","#D0B7E4","#D2BAE5","#D3BCE6","#D5BFE6","#D7C1E7","#D8C4E8","#D9C7EA","#DBC8EA","#DCCBEB","#DECDEC","#E0D0ED","#E1D2EE","#E3D5EF","#E5D7EF","#E6DAF1","#E8DCF2","#EADEF3","#EBE1F3","#ECE3F4","#EEE6F5","#EFE8F6","#F1EAF7","#F3EDF8","#F4EFF9","#F6F1FA","#F7F3FB","#F9F6FB","#FBF8FC","#FCFBFD","#FEFDFE","#000001","#050007","#09030C","#0C0511","#0F0716","#13091A","#160A1E","#190C22","#1B0E27","#1E0E2B","#220F2F","#251132","#271336","#2A1439","#2C163D","#2F1740","#311945","#341948","#361A4B","#391B4F","#3C1D52","#3E1E55","#401F58","#43215B","#45225F","#472262","#492365","#4B2568","#4E266B","#51276E","#532971","#552A74","#572B78","#592B7B","#5B2C7E","#5D2E81","#5F2F84","#613086","#643189","#66328C","#683490","#6A3493","#6C3595","#6E3698","#70379B","#72389D","#7439A0","#763BA3","#793CA6","#7B3CA9","#7D3DAC","#7F3EAE","#813FB1","#8340B4","#8541B6","#8643B9","#8844BC","#8B44BF","#8D45C1","#8F46C4","#9147C7","#9348C9","#9449CC","#964ACE","#984BD2","#9A4FD2","#9C52D2","#9D55D3","#9F58D4","#A15BD5","#A35ED6","#A561D7","#A665D7","#A768D7","#A96BD8","#AB6ED9","#AD71DA","#AE74DB","#B077DC","#B27ADC","#B47EDD","#B581DD","#B684DE","#B886DF","#BA89E0","#BB8CE1","#BD8FE1","#BF92E2","#C195E3","#C298E3","#C49BE4","#C59DE5","#C7A0E6","#C8A3E6","#CAA6E7","#CCA8E8","#CDACE9","#CFAEE9","#D1B1EA","#D2B4EA","#D3B6EB","#D5B9EC","#D7BBED","#D8BEEE","#DAC1EF","#DCC4EF","#DDC7EF","#DFC9F0","#E1CCF1","#E2CEF2","#E3D1F3","#E5D3F3","#E6D7F4","#E8D9F4","#EADCF5","#EBDEF6","#EDE1F7","#EFE3F7","#F0E6F8","#F1E8F9","#F3EBFA","#F4EEFA","#F6F0FB","#F7F3FB","#F9F5FC","#FBF7FD","#FCFAFE","#FEFCFF","#000001","#050007","#09030C","#0C0313","#0F0517","#13071B","#160721","#190925","#1D0A2A","#1F0A2E","#220C31","#250C36","#270E39","#2A0F3D","#2C0F41","#2F1145","#321349","#35134C","#371450","#391454","#3C1657","#3E175A","#40175E","#431961","#461A65","#481A68","#4A1B6B","#4C1B6F","#4F1D72","#511E75","#531E79","#551F7C","#582180","#5A2183","#5C2286","#5E2289","#60238C","#62258F","#642593","#672695","#692799","#6B279C","#6D299E","#6F29A2","#712AA5","#732BA7","#752BAB","#782CAE","#7A2EB1","#7C2EB4","#7E2FB6","#802FBA","#8230BC","#8431BF","#8631C2","#8832C5","#8A34C8","#8C34CB","#8E35CD","#9035D1","#9236D3","#9337D6","#9537D9","#9838DC","#9A39DF","#9C3DDF","#9D40E0","#9E45E0","#A048E1","#A24BE1","#A450E1","#A653E2","#A757E3","#A95AE3","#AA5DE4","#AC61E4","#AE64E5","#AF67E6","#B16BE6","#B36EE6","#B572E7","#B675E7","#B778E8","#B97CE8","#BB7FE9","#BC82EA","#BE86EA","#C088EA","#C18CEB","#C38FEB","#C492EC","#C695EC","#C798ED","#C99BEE","#CB9EEE","#CDA1EF","#CEA5EF","#CFA7EF","#D1AAF0","#D2AEF0","#D4B0F1","#D6B3F2","#D7B6F2","#D9B9F3","#DBBCF3","#DCBFF3","#DDC1F4","#DFC5F4","#E1C7F5","#E2CAF6","#E4CDF6","#E6D0F7","#E7D3F7","#E8D6F7","#EAD8F8","#EBDCF8","#EDDEF9","#EFE1FA","#F0E4FA","#F2E6FB","#F3EAFB","#F4ECFB","#F6EFFC","#F7F2FC","#F9F4FD","#FBF7FE","#FCFAFE","#FEFCFF","#000001","#050007","#09000E","#0C0313","#0F0319","#13031E","#160522","#1A0527","#1D072C","#1F0730","#220735","#250938","#27093D","#2A0941","#2E0A45","#300A49","#320C4E","#350C51","#370C55","#390E58","#3D0E5C","#3F0E60","#410F63","#440F67","#46116B","#48116E","#4A1172","#4E1375","#501379","#52137D","#541480","#561484","#581687","#5B168A","#5D168E","#5F1791","#611794","#631798","#65199B","#67199E","#6A1AA2","#6C1AA5","#6E1AA8","#701BAB","#721BAE","#741BB2","#771DB5","#791DB8","#7B1EBB","#7D1EBE","#7F1EC1","#811FC4","#831FC7","#861FCB","#8721CD","#8921D1","#8B22D4","#8D22D7","#8F22DA","#9123DC","#9323E0","#9523E3","#9725E6","#9925E9","#9B26EC","#9D2AEC","#9E2FEC","#A032ED","#A237ED","#A33CED","#A53FEE","#A644EE","#A848EF","#AA4BEF","#AC50EF","#AE53EF","#AE57EF","#B05BEF","#B25EF0","#B462F0","#B566F1","#B769F1","#B96DF1","#BA70F2","#BB74F2","#BD78F2","#BF7BF3","#C17FF3","#C283F3","#C386F3","#C589F3","#C78CF4","#C890F4","#CA93F4","#CC96F5","#CD9AF5","#CE9DF6","#D0A0F6","#D2A4F6","#D3A6F7","#D5AAF7","#D7AEF7","#D7B0F7","#D9B4F7","#DBB7F8","#DCBAF8","#DEBDF8","#E0C0F9","#E1C3F9","#E2C7F9","#E4C9FA","#E6CDFA","#E7D0FB","#E9D2FB","#EAD6FB","#EBD8FB","#EDDCFB","#EFDFFB","#F0E1FC","#F2E5FC","#F3E8FD","#F5EAFD","#F6EEFD","#F7F0FE","#F9F3FE","#FBF7FE","#FCF9FF","#FEFCFF","#000001","#050007","#09000E","#0C0014","#0F001A","#13001F","#170025","#1A002A","#1D032F","#1F0332","#220337","#25033C","#290340","#2B0345","#2E0349","#30034E","#320552","#350555","#380559","#3B055D","#3D0561","#3F0565","#410569","#45056D","#470771","#490774","#4B0778","#4E077C","#500780","#530784","#550787","#57078B","#59098F","#5B0992","#5D0995","#600999","#62099D","#6409A0","#6609A4","#6809A7","#6B0AAB","#6D0AAE","#6F0AB1","#710AB5","#730AB8","#750ABB","#780ABF","#7A0AC2","#7C0CC6","#7E0CC8","#800CCC","#820CCF","#850CD2","#860CD6","#880CD9","#8A0CDC","#8C0EE0","#8F0EE2","#910EE6","#930EE9","#940EEC","#960EEF","#980EF3","#9B0EF6","#9D0FF9","#9E14F9","#9F1AF9","#A11FF9","#A325F9","#A52AF9","#A62FF9","#A834F9","#A938FA","#AB3CFA","#AD40FA","#AE45FA","#B049FA","#B14EFA","#B352FA","#B556FA","#B65AFB","#B85DFB","#BA61FB","#BB65FB","#BC69FB","#BE6DFB","#C071FB","#C175FB","#C379FB","#C47CFB","#C680FB","#C784FB","#C987FB","#CB8BFB","#CC8FFB","#CD93FB","#CF96FC","#D199FC","#D29DFC","#D4A0FC","#D5A4FC","#D7A7FC","#D8ABFC","#DAAEFC","#DCB2FD","#DDB5FD","#DEB8FD","#E0BBFD","#E1BFFD","#E3C2FD","#E5C6FD","#E6C9FD","#E7CDFE","#E9CFFE","#EAD2FE","#ECD6FE","#EED9FE","#EFDCFE","#F0E0FE","#F2E3FE","#F3E6FF","#F5E9FF","#F7ECFF","#F7EFFF","#F9F3FF","#FBF6FF","#FCF9FF","#FEFCFF","#000001","#050305","#090709","#0C0A0C","#0F0E0F","#131113","#161416","#191719","#1B1A1D","#1E1B1F","#211E22","#232125","#262327","#29262A","#2B292C","#2E2B2F","#302E32","#322F35","#353137","#373439","#39363C","#3C383E","#3E3B40","#403D43","#433F46","#454048","#47434A","#49454C","#4B474F","#4F4951","#514B53","#534E55","#555058","#57515A","#59535C","#5B555E","#5D5760","#5F5962","#615B64","#635D66","#655F69","#67606B","#69626D","#6B646F","#6D6671","#6F6873","#716A75","#736C77","#756E7A","#776F7C","#79717E","#7B7380","#7D7582","#7F7784","#817986","#837B87","#857D8A","#877E8C","#89808E","#8B8290","#8D8492","#8F8693","#918795","#938997","#948B9A","#968D9B","#988F9D","#9A919E","#9C93A0","#9D94A2","#9F96A4","#A198A6","#A29BA7","#A49DA8","#A69EAA","#A7A0AC","#A9A2AE","#ABA4AF","#ADA6B1","#AEA7B3","#B0AAB5","#B2ACB5","#B4AEB7","#B5AFB9","#B7B1BB","#B9B3BC","#BBB5BE","#BCB6C0","#BEB9C1","#C0BBC2","#C1BCC4","#C3BEC6","#C5C0C7","#C7C1C9","#C8C3CB","#CAC5CD","#CCC7CE","#CDC9CF","#CFCBD1","#D1CDD2","#D2CED4","#D3D0D6","#D5D2D7","#D7D3D9","#D8D6DB","#DAD7DC","#DCD9DD","#DDDBDF","#DFDCE1","#E1DEE2","#E2E0E4","#E4E1E6","#E6E4E7","#E7E6E8","#E9E7EA","#EAE9EB","#ECEAED","#EEECEF","#EFEEF0","#F1EFF2","#F3F2F3","#F4F3F4","#F6F5F6","#F7F7F7","#F9F8F9","#FBFAFB","#FCFBFC","#FEFDFE","#000001","#050305","#090709","#0C090E","#0F0C11","#130F14","#161119","#19141B","#1B171F","#1E1922","#221B25","#251D29","#271F2B","#2A222E","#2C2331","#2F2634","#312937","#342A39","#362C3C","#392E3F","#3C3041","#3E3244","#403447","#433649","#45384C","#47394F","#493C51","#4B3D54","#4E3F56","#514158","#53435B","#55455D","#574760","#594862","#5B4A64","#5D4B67","#5F4E69","#61506B","#64516E","#665370","#685573","#6A5675","#6C5877","#6E597A","#705B7C","#725D7E","#745E81","#766083","#796286","#7B6387","#7D6589","#7F668C","#81688E","#836A90","#856B93","#866D94","#886F97","#8B7099","#8D729B","#8F739D","#91759F","#9377A1","#9478A4","#967AA6","#987CA8","#9A7EA9","#9C80AB","#9D83AC","#9F85AE","#A186AF","#A389B0","#A58BB2","#A68EB4","#A790B5","#A992B6","#AB94B7","#AD96B9","#AE98BB","#B09BBB","#B29DBD","#B49FBF","#B5A1C0","#B6A3C1","#B8A6C2","#BAA7C4","#BBA9C6","#BDACC7","#BFAEC8","#C1B0CA","#C2B2CB","#C4B4CD","#C5B6CD","#C7B8CF","#C8BAD1","#CABCD2","#CCBED3","#CDC1D5","#CFC2D6","#D1C4D7","#D2C7D8","#D3C8DA","#D5CADC","#D7CDDC","#D8CEDE","#DAD1E0","#DCD2E1","#DDD4E2","#DFD7E3","#E1D8E5","#E2DAE6","#E3DCE7","#E5DEE9","#E6E1EA","#E8E2EB","#EAE4ED","#EBE6EE","#EDE8EF","#EFEAF1","#F0ECF2","#F1EEF3","#F3F0F5","#F4F2F6","#F6F3F7","#F7F6F8","#F9F7FA","#FBF9FB","#FCFBFC","#FEFDFE","#000001","#050305","#09050A","#0C090E","#0F0A13","#130C17","#170F1A","#1A111E","#1D1422","#1F1625","#221729","#251A2B","#291B2F","#2B1D32","#2E1F35","#302138","#32233C","#35253E","#382641","#3B2944","#3D2A47","#3F2B4A","#412E4C","#452F50","#473153","#493255","#4B3458","#4E365A","#50375D","#533860","#553B62","#573C65","#593E68","#5B3F6A","#5D406D","#60436F","#624472","#644575","#664777","#68487A","#6B4A7D","#6D4B7F","#6F4C82","#714F84","#735086","#755189","#78538B","#7A548E","#7C5691","#7E5793","#805895","#825A97","#855B9A","#865C9D","#885E9E","#8A5FA1","#8C61A4","#8F62A6","#9163A8","#9365AA","#9466AD","#9667AF","#9869B1","#9B6AB4","#9D6CB6","#9E6EB7","#9F71B8","#A173BA","#A376BB","#A579BB","#A67BBD","#A87EBE","#A981C0","#AB83C1","#AD86C1","#AE87C3","#B08AC4","#B18DC5","#B38FC7","#B592C7","#B694C9","#B896CA","#BA99CB","#BB9BCD","#BC9DCD","#BEA0CE","#C0A2D0","#C1A5D1","#C3A7D2","#C4A9D3","#C6ACD4","#C7AED6","#C9B0D7","#CBB3D7","#CCB5D9","#CDB7DA","#CFBADC","#D1BBDC","#D2BEDD","#D4C0DF","#D5C2E0","#D7C5E1","#D8C7E2","#DAC9E3","#DCCCE5","#DDCDE6","#DED0E6","#E0D2E8","#E1D4E9","#E3D7EA","#E5D8EB","#E6DBEC","#E7DDEE","#E9DFEF","#EAE1EF","#ECE3F1","#EEE6F2","#EFE8F3","#F0EAF4","#F2ECF5","#F3EFF7","#F5F0F7","#F7F3F8","#F7F4FA","#F9F7FB","#FBF9FB","#FCFBFD","#FEFDFE","#000001","#050305","#09050A","#0C070F","#0F0914","#140A19","#170C1D","#1A0E21","#1D1125","#211327","#23142B","#26162F","#291732","#2C1936","#2F1A39","#311B3D","#341E40","#371F43","#392146","#3C2249","#3E234C","#412550","#442653","#462756","#482A59","#4B2B5B","#4E2C5E","#502E61","#522F64","#553067","#57316A","#59326D","#5B3570","#5E3672","#603775","#623878","#64397B","#673B7E","#693C81","#6B3D84","#6D3F86","#704088","#72418B","#74438E","#764491","#794593","#7B4696","#7D4799","#7F499C","#824A9D","#844BA0","#864CA3","#874EA6","#8A4FA8","#8C50AB","#8E51AE","#9053B0","#9354B2","#9455B5","#9656B7","#9857BA","#9B58BC","#9D59BF","#9E5AC1","#A05CC4","#A25EC5","#A461C6","#A664C7","#A667C7","#A86AC8","#AA6DC9","#AC70CA","#AD73CC","#AE75CD","#B078CD","#B27BCE","#B37ECF","#B581D0","#B684D1","#B886D2","#B989D3","#BB8BD4","#BC8ED5","#BE91D6","#BF93D7","#C196D7","#C299D8","#C49CD9","#C59EDB","#C7A0DC","#C8A3DC","#CAA6DD","#CBA8DE","#CDABDF","#CEAEE0","#D0B0E1","#D1B3E2","#D2B5E3","#D4B7E4","#D6BAE5","#D7BCE6","#D8BFE6","#DAC1E7","#DCC4E8","#DCC7EA","#DEC8EA","#E0CBEB","#E1CDEC","#E2D0ED","#E4D2EE","#E6D5EF","#E7D7EF","#E8DAF1","#EADCF2","#EBDEF3","#EDE1F3","#EEE3F4","#EFE6F5","#F1E8F6","#F3EAF7","#F3EDF8","#F5EFF9","#F7F1FA","#F8F3FB","#F9F6FB","#FBF8FC","#FCFBFD","#FEFDFE","#000001","#050007","#09030C","#0C0511","#110716","#14091A","#170A1E","#1B0C22","#1E0E27","#210E2B","#250F2F","#271132","#2A1336","#2E1439","#30163D","#321740","#361945","#381948","#3B1A4B","#3E1B4F","#401D52","#431E55","#451F58","#48215B","#4A225F","#4C2262","#502365","#522568","#54266B","#57276E","#592971","#5B2A74","#5E2B78","#602B7B","#622C7E","#652E81","#672F84","#693086","#6C3189","#6E328C","#703490","#723493","#753595","#773698","#79379B","#7C389D","#7E39A0","#803BA3","#833CA6","#853CA9","#863DAC","#893EAE","#8B3FB1","#8D40B4","#9041B6","#9243B9","#9344BC","#9644BF","#9845C1","#9A46C4","#9C47C7","#9E48C9","#A049CC","#A24ACE","#A54BD2","#A64FD2","#A752D2","#A955D3","#AA58D4","#AC5BD5","#AE5ED6","#AF61D7","#B065D7","#B268D7","#B46BD8","#B56ED9","#B671DA","#B874DB","#B977DC","#BB7ADC","#BC7EDD","#BD81DD","#BF84DE","#C186DF","#C189E0","#C38CE1","#C58FE1","#C692E2","#C795E3","#C998E3","#CB9BE4","#CC9DE5","#CDA0E6","#CFA3E6","#D0A6E7","#D2A8E8","#D3ACE9","#D4AEE9","#D6B1EA","#D7B4EA","#D8B6EB","#DAB9EC","#DCBBED","#DCBEEE","#DEC1EF","#E0C4EF","#E1C7EF","#E2C9F0","#E4CCF1","#E6CEF2","#E6D1F3","#E8D3F3","#EAD7F4","#EAD9F4","#ECDCF5","#EEDEF6","#EFE1F7","#F0E3F7","#F2E6F8","#F3E8F9","#F4EBFA","#F6EEFA","#F7F0FB","#F8F3FB","#FAF5FC","#FBF7FD","#FCFAFE","#FEFCFF","#000001","#050007","#09030C","#0E0313","#110517","#14071B","#190721","#1B0925","#1F0A2A","#220A2E","#250C31","#290C36","#2B0E39","#2F0F3D","#310F41","#341145","#371349","#39134C","#3C1450","#3F1454","#411657","#45175A","#47175E","#491961","#4C1A65","#4F1A68","#521B6B","#541B6F","#561D72","#591E75","#5B1E79","#5D1F7C","#602180","#622183","#652286","#672289","#69238C","#6C258F","#6E2593","#712695","#732799","#75279C","#78299E","#7A29A2","#7D2AA5","#7F2BA7","#812BAB","#842CAE","#862EB1","#872EB4","#8A2FB6","#8C2FBA","#8F30BC","#9131BF","#9331C2","#9532C5","#9734C8","#9A34CB","#9C35CD","#9D35D1","#A036D3","#A237D6","#A437D9","#A638DC","#A839DF","#AA3DDF","#AB40E0","#AD45E0","#AE48E1","#AF4BE1","#B150E1","#B353E2","#B457E3","#B55AE3","#B65DE4","#B861E4","#BA64E5","#BB67E6","#BC6BE6","#BD6EE6","#BF72E7","#C175E7","#C178E8","#C37CE8","#C57FE9","#C682EA","#C786EA","#C888EA","#CA8CEB","#CC8FEB","#CD92EC","#CE95EC","#CF98ED","#D19BEE","#D29EEE","#D3A1EF","#D5A5EF","#D6A7EF","#D7AAF0","#D9AEF0","#DAB0F1","#DCB3F2","#DDB6F2","#DEB9F3","#E0BCF3","#E1BFF3","#E2C1F4","#E4C5F4","#E5C7F5","#E6CAF6","#E7CDF6","#E9D0F7","#EAD3F7","#EBD6F7","#EDD8F8","#EFDCF8","#EFDEF9","#F1E1FA","#F2E4FA","#F3E6FB","#F5EAFB","#F6ECFB","#F7EFFC","#F8F2FC","#FAF4FD","#FBF7FE","#FCFAFE","#FEFCFF","#000001","#050007","#09000E","#0E0313","#110319","#16031E","#190522","#1D0527","#1F072C","#230730","#260735","#2A0938","#2C093D","#2F0941","#320A45","#350A49","#380C4E","#3B0C51","#3E0C55","#400E58","#440E5C","#460E60","#490F63","#4B0F67","#4E116B","#51116E","#531172","#561375","#581379","#5B137D","#5D1480","#601484","#621687","#65168A","#67168E","#691791","#6C1794","#6E1798","#71199B","#73199E","#761AA2","#781AA5","#7B1AA8","#7D1BAB","#801BAE","#821BB2","#851DB5","#861DB8","#881EBB","#8B1EBE","#8D1EC1","#901FC4","#921FC7","#941FCB","#9621CD","#9921D1","#9B22D4","#9D22D7","#9F22DA","#A123DC","#A423E0","#A623E3","#A825E6","#AA25E9","#AD26EC","#AE2AEC","#AF2FEC","#B032ED","#B237ED","#B33CED","#B53FEE","#B644EE","#B748EF","#B94BEF","#BA50EF","#BB53EF","#BC57EF","#BE5BEF","#BF5EF0","#C162F0","#C166F1","#C369F1","#C56DF1","#C670F2","#C774F2","#C878F2","#CA7BF3","#CB7FF3","#CD83F3","#CD86F3","#CF89F3","#D08CF4","#D290F4","#D293F4","#D496F5","#D69AF5","#D79DF6","#D8A0F6","#D9A4F6","#DBA6F7","#DCAAF7","#DDAEF7","#DEB0F7","#E0B4F7","#E1B7F8","#E2BAF8","#E4BDF8","#E5C0F9","#E6C3F9","#E7C7F9","#E9C9FA","#EACDFA","#EBD0FB","#ECD2FB","#EED6FB","#EFD8FB","#F0DCFB","#F2DFFB","#F3E1FC","#F4E5FC","#F5E8FD","#F7EAFD","#F7EEFD","#F9F0FE","#FAF3FE","#FBF7FE","#FCF9FF","#FEFCFF","#000001","#050007","#0A000E","#0E0014","#13001A","#16001F","#1A0025","#1D002A","#21032F","#230332","#270337","#2A033C","#2E0340","#300345","#340349","#36034E","#390552","#3C0555","#3F0559","#43055D","#450561","#480565","#4A0569","#4E056D","#500771","#530774","#550778","#58077C","#5A0780","#5D0784","#5F0787","#62078B","#64098F","#670992","#690995","#6C0999","#6E099D","#7109A0","#7409A4","#7609A7","#790AAB","#7B0AAE","#7E0AB1","#800AB5","#830AB8","#850ABB","#870ABF","#890AC2","#8C0CC6","#8E0CC8","#910CCC","#930CCF","#950CD2","#970CD6","#9A0CD9","#9D0CDC","#9E0EE0","#A10EE2","#A30EE6","#A60EE9","#A70EEC","#AA0EEF","#AC0EF3","#AE0EF6","#B00FF9","#B214F9","#B31AF9","#B51FF9","#B525F9","#B72AF9","#B82FF9","#BA34F9","#BB38FA","#BC3CFA","#BD40FA","#BE45FA","#C049FA","#C14EFA","#C252FA","#C356FA","#C55AFB","#C65DFB","#C761FB","#C865FB","#CA69FB","#CB6DFB","#CD71FB","#CD75FB","#CF79FB","#D07CFB","#D280FB","#D284FB","#D387FB","#D58BFB","#D68FFB","#D793FB","#D896FC","#DA99FC","#DB9DFC","#DCA0FC","#DDA4FC","#DFA7FC","#E0ABFC","#E1AEFC","#E2B2FD","#E4B5FD","#E5B8FD","#E6BBFD","#E7BFFD","#E9C2FD","#EAC6FD","#EAC9FD","#ECCDFE","#EDCFFE","#EFD2FE","#EFD6FE","#F1D9FE","#F2DCFE","#F3E0FE","#F4E3FE","#F6E6FF","#F7E9FF","#F8ECFF","#F9EFFF","#FBF3FF","#FBF6FF","#FDF9FF","#FEFCFF","#000001","#050305","#090709","#0C0A0C","#0F0E0F","#131113","#161416","#191719","#1B1A1D","#1E1B1F","#211E22","#232125","#262327","#29262A","#2B292C","#2E2B2F","#302E32","#322F35","#363137","#383439","#3B363C","#3D383E","#3F3B40","#413D43","#443F46","#464048","#48434A","#4A454C","#4C474F","#4F4951","#514B53","#534E55","#555058","#57515A","#59535C","#5C555E","#5E5760","#605962","#625B64","#645D66","#665F69","#68606B","#6A626D","#6C646F","#6E6671","#706873","#726A75","#746C77","#766E7A","#786F7C","#7A717E","#7C7380","#7F7582","#817784","#837986","#857B87","#867D8A","#887E8C","#8A808E","#8C8290","#8E8492","#908693","#928795","#938997","#958B9A","#978D9B","#998F9D","#9B919E","#9D93A0","#9E94A2","#A096A4","#A298A6","#A49BA7","#A69DA8","#A79EAA","#A9A0AC","#ABA2AE","#ACA4AF","#AEA6B1","#AFA7B3","#B1AAB5","#B3ACB5","#B5AEB7","#B6AFB9","#B8B1BB","#BAB3BC","#BBB5BE","#BDB6C0","#BFB9C1","#C1BBC2","#C2BCC4","#C4BEC6","#C6C0C7","#C7C1C9","#C8C3CB","#CAC5CD","#CCC7CE","#CDC9CF","#CFCBD1","#D1CDD2","#D2CED4","#D4D0D6","#D6D2D7","#D7D3D9","#D9D6DB","#DBD7DC","#DCD9DD","#DEDBDF","#E0DCE1","#E1DEE2","#E3E0E4","#E4E1E6","#E6E4E7","#E7E6E8","#E9E7EA","#EAE9EB","#ECEAED","#EEECEF","#EFEEF0","#F1EFF2","#F3F2F3","#F4F3F4","#F6F5F6","#F7F7F7","#F9F8F9","#FBFAFB","#FCFBFC","#FEFDFE","#000001","#050305","#090709","#0C090E","#0F0C11","#130F14","#171119","#1A141B","#1D171F","#1F1922","#221B25","#251D29","#291F2B","#2B222E","#2E2331","#302634","#322937","#352A39","#382C3C","#3B2E3F","#3D3041","#3F3244","#413447","#453649","#47384C","#49394F","#4B3C51","#4E3D54","#503F56","#534158","#55435B","#57455D","#594760","#5B4862","#5D4A64","#604B67","#624E69","#64506B","#66516E","#685370","#6B5573","#6D5675","#6F5877","#71597A","#735B7C","#755D7E","#785E81","#7A6083","#7C6286","#7E6387","#806589","#82668C","#85688E","#866A90","#886B93","#8A6D94","#8C6F97","#8F7099","#91729B","#93739D","#94759F","#9677A1","#9878A4","#9B7AA6","#9D7CA8","#9E7EA9","#9F80AB","#A183AC","#A385AE","#A586AF","#A689B0","#A88BB2","#A98EB4","#AB90B5","#AD92B6","#AE94B7","#B096B9","#B198BB","#B39BBB","#B59DBD","#B69FBF","#B8A1C0","#BAA3C1","#BBA6C2","#BCA7C4","#BEA9C6","#C0ACC7","#C1AEC8","#C3B0CA","#C4B2CB","#C6B4CD","#C7B6CD","#C9B8CF","#CBBAD1","#CCBCD2","#CDBED3","#CFC1D5","#D1C2D6","#D2C4D7","#D4C7D8","#D5C8DA","#D7CADC","#D8CDDC","#DACEDE","#DCD1E0","#DDD2E1","#DED4E2","#E0D7E3","#E1D8E5","#E3DAE6","#E5DCE7","#E6DEE9","#E7E1EA","#E9E2EB","#EAE4ED","#ECE6EE","#EEE8EF","#EFEAF1","#F0ECF2","#F2EEF3","#F3F0F5","#F5F2F6","#F7F3F7","#F7F6F8","#F9F7FA","#FBF9FB","#FCFBFC","#FEFDFE","#000001","#050305","#09050A","#0C090E","#110A13","#140C17","#170F1A","#1B111E","#1E1422","#211625","#231729","#271A2B","#2A1B2F","#2C1D32","#301F35","#322138","#35233C","#37253E","#3B2641","#3D2944","#3F2A47","#432B4A","#452E4C","#472F50","#4A3153","#4C3255","#4F3458","#51365A","#54375D","#563860","#583B62","#5B3C65","#5D3E68","#5F3F6A","#61406D","#64436F","#664472","#684575","#6B4777","#6D487A","#6F4A7D","#724B7F","#744C82","#764F84","#785086","#7B5189","#7D538B","#7F548E","#825691","#845793","#865895","#875A97","#8A5B9A","#8C5C9D","#8E5E9E","#915FA1","#9361A4","#9462A6","#9663A8","#9965AA","#9B66AD","#9D67AF","#9F69B1","#A16AB4","#A36CB6","#A56EB7","#A671B8","#A773BA","#A976BB","#AB79BB","#AC7BBD","#AE7EBE","#AF81C0","#B183C1","#B286C1","#B487C3","#B58AC4","#B68DC5","#B88FC7","#BA92C7","#BB94C9","#BC96CA","#BE99CB","#C09BCD","#C19DCD","#C2A0CE","#C4A2D0","#C6A5D1","#C7A7D2","#C8A9D3","#CAACD4","#CBAED6","#CDB0D7","#CEB3D7","#CFB5D9","#D1B7DA","#D2BADC","#D4BBDC","#D5BEDD","#D7C0DF","#D8C2E0","#D9C5E1","#DBC7E2","#DCC9E3","#DECCE5","#DFCDE6","#E1D0E6","#E2D2E8","#E3D4E9","#E5D7EA","#E6D8EB","#E7DBEC","#E9DDEE","#EADFEF","#ECE1EF","#EDE3F1","#EFE6F2","#F0E8F3","#F1EAF4","#F3ECF5","#F4EFF7","#F6F0F7","#F7F3F8","#F8F4FA","#FAF7FB","#FBF9FB","#FCFBFD","#FEFDFE","#000001","#050305","#09050A","#0E070F","#110914","#160A19","#190C1D","#1B0E21","#1F1125","#221327","#26142B","#29162F","#2B1732","#2F1936","#311A39","#351B3D","#371E40","#391F43","#3D2146","#3F2249","#43234C","#452550","#482653","#4A2756","#4C2A59","#502B5B","#522C5E","#552E61","#572F64","#593067","#5C316A","#5E326D","#613570","#633672","#653775","#683878","#6A397B","#6D3B7E","#6F3C81","#713D84","#743F86","#764088","#79418B","#7B438E","#7E4491","#804593","#824696","#854799","#86499C","#894A9D","#8B4BA0","#8D4CA3","#904EA6","#924FA8","#9450AB","#9651AE","#9853B0","#9B54B2","#9D55B5","#9F56B7","#A157BA","#A458BC","#A659BF","#A75AC1","#AA5CC4","#AB5EC5","#AD61C6","#AE64C7","#AF67C7","#B16AC8","#B26DC9","#B470CA","#B573CC","#B675CD","#B878CD","#B97BCE","#BB7ECF","#BB81D0","#BD84D1","#BF86D2","#C089D3","#C18BD4","#C28ED5","#C491D6","#C693D7","#C796D7","#C899D8","#C99CD9","#CB9EDB","#CCA0DC","#CDA3DC","#CFA6DD","#D0A8DE","#D2ABDF","#D2AEE0","#D4B0E1","#D6B3E2","#D7B5E3","#D8B7E4","#D9BAE5","#DBBCE6","#DCBFE6","#DDC1E7","#DFC4E8","#E0C7EA","#E1C8EA","#E3CBEB","#E4CDEC","#E6D0ED","#E6D2EE","#E8D5EF","#E9D7EF","#EADAF1","#ECDCF2","#EDDEF3","#EFE1F3","#EFE3F4","#F1E6F5","#F3E8F6","#F3EAF7","#F5EDF8","#F6EFF9","#F7F1FA","#F9F3FB","#FAF6FB","#FBF8FC","#FCFBFD","#FEFDFE","#000001","#050007","#0A030C","#0E0511","#130716","#16091A","#1A0A1E","#1D0C22","#210E27","#230E2B","#270F2F","#2A1132","#2E1336","#301439","#34163D","#361740","#391945","#3C1948","#3F1A4B","#431B4F","#451D52","#481E55","#4A1F58","#4E215B","#50225F","#532262","#552365","#582568","#5A266B","#5D276E","#5F2971","#622A74","#642B78","#672B7B","#692C7E","#6C2E81","#6E2F84","#713086","#743189","#76328C","#793490","#7B3493","#7E3595","#803698","#83379B","#85389D","#8739A0","#893BA3","#8C3CA6","#8E3CA9","#913DAC","#933EAE","#953FB1","#9740B4","#9A41B6","#9D43B9","#9E44BC","#A144BF","#A345C1","#A646C4","#A747C7","#AA48C9","#AC49CC","#AE4ACE","#B04BD2","#B24FD2","#B352D2","#B555D3","#B558D4","#B75BD5","#B85ED6","#BA61D7","#BB65D7","#BC68D7","#BD6BD8","#BE6ED9","#C071DA","#C174DB","#C277DC","#C37ADC","#C57EDD","#C681DD","#C784DE","#C886DF","#CA89E0","#CB8CE1","#CD8FE1","#CD92E2","#CF95E3","#D098E3","#D29BE4","#D29DE5","#D3A0E6","#D5A3E6","#D6A6E7","#D7A8E8","#D8ACE9","#DAAEE9","#DBB1EA","#DCB4EA","#DDB6EB","#DFB9EC","#E0BBED","#E1BEEE","#E2C1EF","#E4C4EF","#E5C7EF","#E6C9F0","#E7CCF1","#E9CEF2","#EAD1F3","#EAD3F3","#ECD7F4","#EDD9F4","#EFDCF5","#EFDEF6","#F1E1F7","#F2E3F7","#F3E6F8","#F4E8F9","#F6EBFA","#F7EEFA","#F8F0FB","#F9F3FB","#FBF5FC","#FBF7FD","#FDFAFE","#FEFCFF","#000001","#050007","#0A030C","#0E0313","#130517","#17071B","#1A0721","#1E0925","#220A2A","#250A2E","#290C31","#2C0C36","#2F0E39","#320F3D","#360F41","#381145","#3C1349","#3E134C","#411450","#451454","#471657","#4A175A","#4E175E","#501961","#531A65","#561A68","#581B6B","#5B1B6F","#5E1D72","#601E75","#631E79","#651F7C","#682180","#6B2183","#6D2286","#702289","#73238C","#75258F","#782593","#7B2695","#7D2799","#80279C","#83299E","#8529A2","#872AA5","#8A2BA7","#8C2BAB","#8F2CAE","#912EB1","#932EB4","#962FB6","#982FBA","#9B30BC","#9D31BF","#9F31C2","#A232C5","#A534C8","#A634CB","#A935CD","#AC35D1","#AE36D3","#B037D6","#B237D9","#B538DC","#B739DF","#B83DDF","#B940E0","#BB45E0","#BB48E1","#BD4BE1","#BE50E1","#BF53E2","#C157E3","#C15AE3","#C25DE4","#C461E4","#C564E5","#C667E6","#C76BE6","#C86EE6","#C972E7","#CB75E7","#CC78E8","#CD7CE8","#CE7FE9","#CF82EA","#D186EA","#D288EA","#D28CEB","#D48FEB","#D592EC","#D695EC","#D798ED","#D89BEE","#D99EEE","#DBA1EF","#DCA5EF","#DCA7EF","#DEAAF0","#DFAEF0","#E1B0F1","#E1B3F2","#E2B6F2","#E4B9F3","#E5BCF3","#E6BFF3","#E7C1F4","#E8C5F4","#E9C7F5","#EACAF6","#EBCDF6","#ECD0F7","#EED3F7","#EFD6F7","#F0D8F8","#F1DCF8","#F2DEF9","#F3E1FA","#F4E4FA","#F5E6FB","#F7EAFB","#F7ECFB","#F8EFFC","#FAF2FC","#FBF4FD","#FBF7FE","#FDFAFE","#FEFCFF","#000001","#050007","#0A000E","#0F0313","#140319","#17031E","#1B0522","#1F0527","#23072C","#260730","#2A0735","#2E0938","#31093D","#340941","#370A45","#3B0A49","#3E0C4E","#400C51","#440C55","#470E58","#4A0E5C","#4C0E60","#500F63","#530F67","#56116B","#59116E","#5B1172","#5E1375","#611379","#64137D","#661480","#691484","#6C1687","#6F168A","#71168E","#741791","#771794","#7A1798","#7C199B","#7F199E","#821AA2","#851AA5","#861AA8","#891BAB","#8C1BAE","#8F1BB2","#921DB5","#931DB8","#961EBB","#991EBE","#9C1EC1","#9D1FC4","#A01FC7","#A31FCB","#A621CD","#A721D1","#AA22D4","#AD22D7","#AF22DA","#B123DC","#B423E0","#B623E3","#B925E6","#BB25E9","#BD26EC","#BE2AEC","#C02FEC","#C132ED","#C137ED","#C23CED","#C43FEE","#C544EE","#C648EF","#C74BEF","#C850EF","#C953EF","#CA57EF","#CB5BEF","#CD5EF0","#CD62F0","#CE66F1","#CF69F1","#D16DF1","#D270F2","#D274F2","#D378F2","#D47BF3","#D67FF3","#D783F3","#D786F3","#D889F3","#DA8CF4","#DB90F4","#DC93F4","#DC96F5","#DE9AF5","#DF9DF6","#E0A0F6","#E1A4F6","#E2A6F7","#E3AAF7","#E4AEF7","#E5B0F7","#E6B4F7","#E7B7F8","#E8BAF8","#E9BDF8","#EAC0F9","#EBC3F9","#ECC7F9","#EDC9FA","#EECDFA","#EFD0FB","#F0D2FB","#F1D6FB","#F2D8FB","#F3DCFB","#F4DFFB","#F5E1FC","#F6E5FC","#F7E8FD","#F8EAFD","#F9EEFD","#FAF0FE","#FBF3FE","#FCF7FE","#FDF9FF","#FEFCFF","#000001","#050007","#0A000E","#0F0014","#14001A","#19001F","#1D0025","#21002A","#25032F","#270332","#2B0337","#2F033C","#320340","#360345","#390349","#3D034E","#400552","#430555","#460559","#49055D","#4C0561","#500565","#530569","#56056D","#590771","#5B0774","#5E0778","#61077C","#640780","#670784","#6A0787","#6D078B","#70098F","#730992","#750995","#780999","#7B099D","#7E09A0","#8109A4","#8409A7","#860AAB","#890AAE","#8B0AB1","#8E0AB5","#910AB8","#930ABB","#960ABF","#990AC2","#9C0CC6","#9E0CC8","#A00CCC","#A30CCF","#A60CD2","#A80CD6","#AB0CD9","#AE0CDC","#B00EE0","#B30EE2","#B50EE6","#B70EE9","#BA0EEC","#BC0EEF","#BF0EF3","#C10EF6","#C40FF9","#C514F9","#C61AF9","#C71FF9","#C725F9","#C82AF9","#C92FF9","#CB34F9","#CC38FA","#CD3CFA","#CD40FA","#CE45FA","#CF49FA","#D04EFA","#D152FA","#D256FA","#D35AFB","#D45DFB","#D561FB","#D665FB","#D769FB","#D76DFB","#D871FB","#DA75FB","#DB79FB","#DC7CFB","#DC80FB","#DD84FB","#DE87FB","#DF8BFB","#E08FFB","#E193FB","#E296FC","#E399FC","#E49DFC","#E5A0FC","#E6A4FC","#E6A7FC","#E7ABFC","#E8AEFC","#EAB2FD","#EAB5FD","#EBB8FD","#ECBBFD","#EDBFFD","#EEC2FD","#EFC6FD","#EFC9FD","#F1CDFE","#F2CFFE","#F3D2FE","#F3D6FE","#F4D9FE","#F5DCFE","#F6E0FE","#F7E3FE","#F8E6FF","#F9E9FF","#FAECFF","#FBEFFF","#FBF3FF","#FCF6FF","#FDF9FF","#FEFCFF","#000001","#050305","#090709","#0C0A0C","#0F0E0F","#131113","#161416","#191719","#1B1A1D","#1E1B1F","#211E22","#232125","#262327","#2A262A","#2C292C","#2F2B2F","#312E32","#342F35","#363137","#383439","#3B363C","#3D383E","#3F3B40","#413D43","#443F46","#474048","#49434A","#4B454C","#4E474F","#504951","#524B53","#544E55","#565058","#58515A","#5A535C","#5C555E","#5E5760","#615962","#635B64","#655D66","#675F69","#69606B","#6B626D","#6D646F","#6F6671","#716873","#736A75","#756C77","#776E7A","#7A6F7C","#7C717E","#7E7380","#807582","#827784","#847986","#867B87","#877D8A","#897E8C","#8B808E","#8D8290","#8F8492","#928693","#938795","#958997","#978B9A","#998D9B","#9B8F9D","#9D919E","#9D93A0","#9F94A2","#A196A4","#A398A6","#A59BA7","#A69DA8","#A89EAA","#AAA0AC","#ACA2AE","#AEA4AF","#AFA6B1","#B1A7B3","#B2AAB5","#B4ACB5","#B5AEB7","#B7AFB9","#B9B1BB","#BBB3BC","#BCB5BE","#BEB6C0","#C0B9C1","#C1BBC2","#C3BCC4","#C5BEC6","#C6C0C7","#C7C1C9","#C9C3CB","#CBC5CD","#CDC7CE","#CEC9CF","#D0CBD1","#D2CDD2","#D3CED4","#D5D0D6","#D7D2D7","#D8D3D9","#D9D6DB","#DBD7DC","#DCD9DD","#DEDBDF","#E0DCE1","#E1DEE2","#E3E0E4","#E5E1E6","#E6E4E7","#E8E6E8","#EAE7EA","#EBE9EB","#ECEAED","#EEECEF","#EFEEF0","#F1EFF2","#F3F2F3","#F4F3F4","#F6F5F6","#F7F7F7","#F9F8F9","#FBFAFB","#FCFBFC","#FEFDFE","#000001","#050305","#090709","#0C090E","#0F0C11","#140F14","#171119","#1A141B","#1D171F","#211922","#231B25","#261D29","#291F2B","#2C222E","#2F2331","#312634","#342937","#372A39","#392C3C","#3C2E3F","#3E3041","#413244","#443447","#463649","#48384C","#4B394F","#4E3C51","#503D54","#523F56","#554158","#57435B","#59455D","#5B4760","#5E4862","#604A64","#624B67","#644E69","#67506B","#69516E","#6B5370","#6D5573","#705675","#725877","#74597A","#765B7C","#795D7E","#7B5E81","#7D6083","#7F6286","#826387","#846589","#86668C","#87688E","#8A6A90","#8C6B93","#8E6D94","#906F97","#937099","#94729B","#96739D","#98759F","#9B77A1","#9D78A4","#9E7AA6","#A07CA8","#A27EA9","#A480AB","#A683AC","#A685AE","#A886AF","#AA89B0","#AC8BB2","#AD8EB4","#AE90B5","#B092B6","#B294B7","#B396B9","#B598BB","#B69BBB","#B89DBD","#B99FBF","#BBA1C0","#BCA3C1","#BEA6C2","#BFA7C4","#C1A9C6","#C2ACC7","#C4AEC8","#C5B0CA","#C7B2CB","#C8B4CD","#CAB6CD","#CBB8CF","#CDBAD1","#CEBCD2","#D0BED3","#D1C1D5","#D2C2D6","#D4C4D7","#D6C7D8","#D7C8DA","#D8CADC","#DACDDC","#DCCEDE","#DCD1E0","#DED2E1","#E0D4E2","#E1D7E3","#E2D8E5","#E4DAE6","#E6DCE7","#E7DEE9","#E8E1EA","#EAE2EB","#EBE4ED","#EDE6EE","#EEE8EF","#EFEAF1","#F1ECF2","#F3EEF3","#F3F0F5","#F5F2F6","#F7F3F7","#F8F6F8","#F9F7FA","#FBF9FB","#FCFBFC","#FEFDFE","#000001","#050305","#09050A","#0E090E","#110A13","#160C17","#190F1A","#1B111E","#1F1422","#221625","#261729","#291A2B","#2B1B2F","#2F1D32","#311F35","#352138","#37233C","#39253E","#3D2641","#3F2944","#432A47","#452B4A","#482E4C","#4A2F50","#4C3153","#503255","#523458","#55365A","#57375D","#593860","#5C3B62","#5E3C65","#613E68","#633F6A","#65406D","#68436F","#6A4472","#6D4575","#6F4777","#71487A","#744A7D","#764B7F","#794C82","#7B4F84","#7E5086","#805189","#82538B","#85548E","#865691","#895793","#8B5895","#8D5A97","#905B9A","#925C9D","#945E9E","#965FA1","#9861A4","#9B62A6","#9D63A8","#9F65AA","#A166AD","#A467AF","#A669B1","#A76AB4","#AA6CB6","#AB6EB7","#AD71B8","#AE73BA","#AF76BB","#B179BB","#B27BBD","#B47EBE","#B581C0","#B683C1","#B886C1","#B987C3","#BB8AC4","#BB8DC5","#BD8FC7","#BF92C7","#C094C9","#C196CA","#C299CB","#C49BCD","#C69DCD","#C7A0CE","#C8A2D0","#C9A5D1","#CBA7D2","#CCA9D3","#CDACD4","#CFAED6","#D0B0D7","#D2B3D7","#D2B5D9","#D4B7DA","#D6BADC","#D7BBDC","#D8BEDD","#D9C0DF","#DBC2E0","#DCC5E1","#DDC7E2","#DFC9E3","#E0CCE5","#E1CDE6","#E3D0E6","#E4D2E8","#E6D4E9","#E6D7EA","#E8D8EB","#E9DBEC","#EADDEE","#ECDFEF","#EDE1EF","#EFE3F1","#EFE6F2","#F1E8F3","#F3EAF4","#F3ECF5","#F5EFF7","#F6F0F7","#F7F3F8","#F9F4FA","#FAF7FB","#FBF9FB","#FCFBFD","#FEFDFE","#000001","#050305","#0A050A","#0E070F","#130914","#160A19","#1A0C1D","#1E0E21","#211125","#251327","#27142B","#2B162F","#2E1732","#311936","#351A39","#371B3D","#3B1E40","#3D1F43","#402146","#432249","#46234C","#492550","#4B2653","#4F2756","#512A59","#542B5B","#562C5E","#592E61","#5C2F64","#5E3067","#61316A","#63326D","#663570","#683672","#6B3775","#6E3878","#70397B","#733B7E","#753C81","#783D84","#7A3F86","#7D4088","#80418B","#82438E","#854491","#864593","#894696","#8B4799","#8E499C","#914A9D","#934BA0","#954CA3","#974EA6","#9A4FA8","#9D50AB","#9E51AE","#A153B0","#A354B2","#A655B5","#A756B7","#AA57BA","#AD58BC","#AE59BF","#B15AC1","#B35CC4","#B55EC5","#B561C6","#B764C7","#B867C7","#B96AC8","#BB6DC9","#BB70CA","#BD73CC","#BE75CD","#C078CD","#C17BCE","#C17ECF","#C381D0","#C484D1","#C686D2","#C789D3","#C78BD4","#C98ED5","#CA91D6","#CC93D7","#CD96D7","#CE99D8","#CF9CD9","#D09EDB","#D2A0DC","#D2A3DC","#D4A6DD","#D5A8DE","#D7ABDF","#D7AEE0","#D8B0E1","#DAB3E2","#DBB5E3","#DCB7E4","#DDBAE5","#DFBCE6","#E0BFE6","#E1C1E7","#E2C4E8","#E3C7EA","#E5C8EA","#E6CBEB","#E7CDEC","#E8D0ED","#E9D2EE","#EAD5EF","#EBD7EF","#EDDAF1","#EEDCF2","#EFDEF3","#F0E1F3","#F1E3F4","#F3E6F5","#F3E8F6","#F5EAF7","#F6EDF8","#F7EFF9","#F8F1FA","#F9F3FB","#FBF6FB","#FBF8FC","#FDFBFD","#FEFDFE","#000001","#050007","#0A030C","#0F0511","#130716","#17091A","#1B0A1E","#1F0C22","#220E27","#260E2B","#2A0F2F","#2E1132","#301336","#341439","#37163D","#3B1740","#3D1945","#401948","#441A4B","#471B4F","#491D52","#4C1E55","#501F58","#52215B","#55225F","#582262","#5B2365","#5D2568","#60266B","#63276E","#662971","#682A74","#6B2B78","#6E2B7B","#712C7E","#732E81","#762F84","#793086","#7C3189","#7E328C","#813490","#843493","#863595","#883698","#8B379B","#8E389D","#9039A0","#933BA3","#953CA6","#983CA9","#9A3DAC","#9D3EAE","#9F3FB1","#A240B4","#A441B6","#A643B9","#A944BC","#AC44BF","#AE45C1","#B046C4","#B347C7","#B548C9","#B749CC","#BA4ACE","#BC4BD2","#BD4FD2","#BE52D2","#C055D3","#C158D4","#C15BD5","#C25ED6","#C461D7","#C565D7","#C668D7","#C76BD8","#C86ED9","#C971DA","#CA74DB","#CB77DC","#CD7ADC","#CD7EDD","#CE81DD","#CF84DE","#D186DF","#D289E0","#D28CE1","#D48FE1","#D592E2","#D695E3","#D798E3","#D89BE4","#D99DE5","#DAA0E6","#DBA3E6","#DCA6E7","#DDA8E8","#DEACE9","#DFAEE9","#E1B1EA","#E1B4EA","#E2B6EB","#E3B9EC","#E5BBED","#E6BEEE","#E6C1EF","#E7C4EF","#E9C7EF","#EAC9F0","#EACCF1","#ECCEF2","#EDD1F3","#EED3F3","#EFD7F4","#F0D9F4","#F1DCF5","#F2DEF6","#F3E1F7","#F4E3F7","#F5E6F8","#F6E8F9","#F7EBFA","#F8EEFA","#F9F0FB","#FAF3FB","#FBF5FC","#FCF7FD","#FDFAFE","#FEFCFF","#000001","#050007","#0A030C","#0F0313","#140517","#19071B","#1D0721","#210925","#250A2A","#290A2E","#2C0C31","#2F0C36","#320E39","#360F3D","#390F41","#3D1145","#401349","#44134C","#471450","#4A1454","#4E1657","#50175A","#53175E","#561961","#591A65","#5C1A68","#5F1B6B","#621B6F","#651D72","#681E75","#6B1E79","#6D1F7C","#702180","#732183","#762286","#792289","#7C238C","#7F258F","#822593","#852695","#872799","#89279C","#8C299E","#8F29A2","#922AA5","#942BA7","#972BAB","#9A2CAE","#9D2EB1","#9F2EB4","#A22FB6","#A52FBA","#A630BC","#A931BF","#AC31C2","#AE32C5","#B134C8","#B434CB","#B635CD","#B935D1","#BB36D3","#BE37D6","#C037D9","#C238DC","#C539DF","#C63DDF","#C740E0","#C845E0","#C948E1","#CA4BE1","#CB50E1","#CC53E2","#CD57E3","#CD5AE3","#CE5DE4","#CF61E4","#D064E5","#D267E6","#D26BE6","#D36EE6","#D472E7","#D575E7","#D678E8","#D77CE8","#D77FE9","#D882EA","#D986EA","#DA88EA","#DC8CEB","#DC8FEB","#DD92EC","#DE95EC","#DF98ED","#E09BEE","#E19EEE","#E1A1EF","#E2A5EF","#E3A7EF","#E5AAF0","#E6AEF0","#E6B0F1","#E7B3F2","#E8B6F2","#E9B9F3","#EABCF3","#EABFF3","#EBC1F4","#ECC5F4","#EEC7F5","#EFCAF6","#EFCDF6","#F0D0F7","#F1D3F7","#F2D6F7","#F3D8F8","#F3DCF8","#F4DEF9","#F5E1FA","#F7E4FA","#F7E6FB","#F8EAFB","#F9ECFB","#FAEFFC","#FBF2FC","#FBF4FD","#FCF7FE","#FDFAFE","#FEFCFF","#000001","#070007","#0C000E","#110313","#160319","#1A031E","#1E0522","#220527","#26072C","#2A0730","#2E0735","#310938","#35093D","#380941","#3C0A45","#3F0A49","#440C4E","#470C51","#4A0C55","#4E0E58","#510E5C","#540E60","#570F63","#5A0F67","#5D116B","#60116E","#631172","#661375","#691379","#6C137D","#6F1480","#731484","#761687","#79168A","#7C168E","#7F1791","#821794","#851798","#87199B","#8A199E","#8D1AA2","#901AA5","#931AA8","#951BAB","#981BAE","#9B1BB2","#9E1DB5","#A11DB8","#A41EBB","#A61EBE","#A91EC1","#AC1FC4","#AE1FC7","#B11FCB","#B421CD","#B621D1","#B922D4","#BB22D7","#BE22DA","#C123DC","#C323E0","#C723E3","#C925E6","#CC25E9","#CE26EC","#CF2AEC","#D02FEC","#D132ED","#D137ED","#D23CED","#D23FEE","#D344EE","#D448EF","#D54BEF","#D650EF","#D753EF","#D757EF","#D85BEF","#D95EF0","#DA62F0","#DB66F1","#DC69F1","#DC6DF1","#DC70F2","#DD74F2","#DE78F2","#DF7BF3","#E07FF3","#E183F3","#E186F3","#E289F3","#E38CF4","#E490F4","#E593F4","#E696F5","#E69AF5","#E79DF6","#E8A0F6","#E8A4F6","#E9A6F7","#EAAAF7","#EAAEF7","#EBB0F7","#ECB4F7","#EDB7F8","#EEBAF8","#EFBDF8","#EFC0F9","#F0C3F9","#F1C7F9","#F2C9FA","#F3CDFA","#F3D0FB","#F3D2FB","#F4D6FB","#F5D8FB","#F6DCFB","#F7DFFB","#F7E1FC","#F8E5FC","#F9E8FD","#FAEAFD","#FBEEFD","#FBF0FE","#FCF3FE","#FDF7FE","#FEF9FF","#FFFCFF","#000001","#070007","#0C000E","#110014","#16001A","#1B001F","#1F0025","#23002A","#27032F","#2C0332","#300337","#34033C","#370340","#3B0345","#3F0349","#43034E","#460552","#490555","#4E0559","#51055D","#540561","#570565","#5B0569","#5E056D","#610771","#640774","#670778","#6B077C","#6E0780","#710784","#740787","#78078B","#7B098F","#7E0992","#810995","#850999","#87099D","#8A09A0","#8D09A4","#9009A7","#930AAB","#960AAE","#990AB1","#9C0AB5","#9F0AB8","#A20ABB","#A50ABF","#A70AC2","#AB0CC6","#AE0CC8","#B00CCC","#B30CCF","#B50CD2","#B90CD6","#BB0CD9","#BE0CDC","#C10EE0","#C40EE2","#C70EE6","#C90EE9","#CC0EEC","#CF0EEF","#D20EF3","#D40EF6","#D70FF9","#D714F9","#D81AF9","#D91FF9","#D925F9","#DA2AF9","#DB2FF9","#DC34F9","#DC38FA","#DC3CFA","#DD40FA","#DE45FA","#DE49FA","#DF4EFA","#E052FA","#E156FA","#E15AFB","#E15DFB","#E261FB","#E365FB","#E469FB","#E46DFB","#E571FB","#E675FB","#E679FB","#E67CFB","#E780FB","#E884FB","#E987FB","#EA8BFB","#EA8FFB","#EA93FB","#EB96FC","#EC99FC","#EC9DFC","#EDA0FC","#EEA4FC","#EFA7FC","#EFABFC","#EFAEFC","#F0B2FD","#F1B5FD","#F2B8FD","#F2BBFD","#F3BFFD","#F3C2FD","#F4C6FD","#F4C9FD","#F5CDFE","#F6CFFE","#F7D2FE","#F7D6FE","#F7D9FE","#F8DCFE","#F9E0FE","#FAE3FE","#FAE6FF","#FBE9FF","#FBECFF","#FCEFFF","#FCF3FF","#FDF6FF","#FEF9FF","#FFFCFF","#000001","#050305","#090709","#0C0A0C","#0F0E0F","#131113","#161416","#191719","#1B1A1D","#1E1B1F","#221E22","#252125","#272327","#2A262A","#2C292C","#2F2B2F","#312E32","#342F35","#363137","#393439","#3C363C","#3E383E","#403B40","#433D43","#453F46","#474048","#49434A","#4B454C","#4E474F","#514951","#534B53","#554E55","#575058","#59515A","#5B535C","#5D555E","#5F5760","#615962","#645B64","#665D66","#685F69","#6A606B","#6C626D","#6E646F","#706671","#726873","#746A75","#766C77","#796E7A","#7B6F7C","#7D717E","#7F7380","#817582","#837784","#857986","#867B87","#887D8A","#8B7E8C","#8D808E","#8F8290","#918492","#938693","#948795","#968997","#988B9A","#9A8D9B","#9C8F9D","#9D919E","#9F93A0","#A194A2","#A396A4","#A598A6","#A69BA7","#A79DA8","#A99EAA","#ABA0AC","#ADA2AE","#AEA4AF","#B0A6B1","#B2A7B3","#B4AAB5","#B5ACB5","#B6AEB7","#B8AFB9","#BAB1BB","#BBB3BC","#BDB5BE","#BFB6C0","#C1B9C1","#C2BBC2","#C4BCC4","#C5BEC6","#C7C0C7","#C8C1C9","#CAC3CB","#CCC5CD","#CDC7CE","#CFC9CF","#D1CBD1","#D2CDD2","#D3CED4","#D5D0D6","#D7D2D7","#D8D3D9","#DAD6DB","#DCD7DC","#DDD9DD","#DFDBDF","#E1DCE1","#E2DEE2","#E3E0E4","#E5E1E6","#E6E4E7","#E8E6E8","#EAE7EA","#EBE9EB","#EDEAED","#EFECEF","#F0EEF0","#F1EFF2","#F3F2F3","#F4F3F4","#F6F5F6","#F7F7F7","#F9F8F9","#FBFAFB","#FCFBFC","#FEFDFE","#000001","#050305","#090709","#0C090E","#110C11","#140F14","#171119","#1B141B","#1E171F","#211922","#251B25","#271D29","#2A1F2B","#2E222E","#302331","#322634","#362937","#382A39","#3B2C3C","#3E2E3F","#403041","#433244","#453447","#483649","#4A384C","#4C394F","#503C51","#523D54","#543F56","#574158","#59435B","#5B455D","#5E4760","#604862","#624A64","#654B67","#674E69","#69506B","#6C516E","#6E5370","#705573","#725675","#755877","#77597A","#795B7C","#7C5D7E","#7E5E81","#806083","#836286","#856387","#866589","#89668C","#8B688E","#8D6A90","#906B93","#926D94","#936F97","#967099","#98729B","#9A739D","#9C759F","#9E77A1","#A078A4","#A27AA6","#A57CA8","#A67EA9","#A780AB","#A983AC","#AA85AE","#AC86AF","#AE89B0","#AF8BB2","#B08EB4","#B290B5","#B492B6","#B594B7","#B696B9","#B898BB","#B99BBB","#BB9DBD","#BC9FBF","#BDA1C0","#BFA3C1","#C1A6C2","#C1A7C4","#C3A9C6","#C5ACC7","#C6AEC8","#C7B0CA","#C9B2CB","#CBB4CD","#CCB6CD","#CDB8CF","#CFBAD1","#D0BCD2","#D2BED3","#D3C1D5","#D4C2D6","#D6C4D7","#D7C7D8","#D8C8DA","#DACADC","#DCCDDC","#DCCEDE","#DED1E0","#E0D2E1","#E1D4E2","#E2D7E3","#E4D8E5","#E6DAE6","#E6DCE7","#E8DEE9","#EAE1EA","#EAE2EB","#ECE4ED","#EEE6EE","#EFE8EF","#F0EAF1","#F2ECF2","#F3EEF3","#F4F0F5","#F6F2F6","#F7F3F7","#F8F6F8","#FAF7FA","#FBF9FB","#FCFBFC","#FEFDFE","#000001","#050305","#0A050A","#0E090E","#130A13","#160C17","#1A0F1A","#1D111E","#211422","#231625","#271729","#2A1A2B","#2E1B2F","#301D32","#341F35","#362138","#39233C","#3C253E","#3F2641","#432944","#452A47","#482B4A","#4A2E4C","#4E2F50","#503153","#533255","#553458","#58365A","#5A375D","#5D3860","#5F3B62","#623C65","#643E68","#673F6A","#69406D","#6C436F","#6E4472","#714575","#744777","#76487A","#794A7D","#7B4B7F","#7E4C82","#804F84","#835086","#855189","#87538B","#89548E","#8C5691","#8E5793","#915895","#935A97","#955B9A","#975C9D","#9A5E9E","#9D5FA1","#9E61A4","#A162A6","#A363A8","#A665AA","#A766AD","#AA67AF","#AC69B1","#AE6AB4","#B06CB6","#B26EB7","#B371B8","#B573BA","#B576BB","#B779BB","#B87BBD","#BA7EBE","#BB81C0","#BC83C1","#BD86C1","#BE87C3","#C08AC4","#C18DC5","#C28FC7","#C392C7","#C594C9","#C696CA","#C799CB","#C89BCD","#CA9DCD","#CBA0CE","#CDA2D0","#CDA5D1","#CFA7D2","#D0A9D3","#D2ACD4","#D2AED6","#D3B0D7","#D5B3D7","#D6B5D9","#D7B7DA","#D8BADC","#DABBDC","#DBBEDD","#DCC0DF","#DDC2E0","#DFC5E1","#E0C7E2","#E1C9E3","#E2CCE5","#E4CDE6","#E5D0E6","#E6D2E8","#E7D4E9","#E9D7EA","#EAD8EB","#EADBEC","#ECDDEE","#EDDFEF","#EFE1EF","#EFE3F1","#F1E6F2","#F2E8F3","#F3EAF4","#F4ECF5","#F6EFF7","#F7F0F7","#F8F3F8","#F9F4FA","#FBF7FB","#FBF9FB","#FDFBFD","#FEFDFE","#000001","#050305","#0A050A","#0F070F","#130914","#170A19","#1B0C1D","#1F0E21","#221125","#261327","#2A142B","#2E162F","#301732","#341936","#371A39","#3B1B3D","#3D1E40","#401F43","#442146","#472249","#49234C","#4C2550","#502653","#522756","#552A59","#582B5B","#5B2C5E","#5D2E61","#602F64","#633067","#66316A","#68326D","#6B3570","#6E3672","#713775","#733878","#76397B","#793B7E","#7C3C81","#7E3D84","#813F86","#844088","#86418B","#88438E","#8B4491","#8E4593","#904696","#934799","#95499C","#984A9D","#9A4BA0","#9D4CA3","#9F4EA6","#A24FA8","#A450AB","#A651AE","#A953B0","#AC54B2","#AE55B5","#B056B7","#B357BA","#B558BC","#B759BF","#BA5AC1","#BC5CC4","#BD5EC5","#BE61C6","#C064C7","#C167C7","#C16AC8","#C26DC9","#C470CA","#C573CC","#C675CD","#C778CD","#C87BCE","#C97ECF","#CA81D0","#CB84D1","#CD86D2","#CD89D3","#CE8BD4","#CF8ED5","#D191D6","#D293D7","#D296D7","#D499D8","#D59CD9","#D69EDB","#D7A0DC","#D8A3DC","#D9A6DD","#DAA8DE","#DBABDF","#DCAEE0","#DDB0E1","#DEB3E2","#DFB5E3","#E1B7E4","#E1BAE5","#E2BCE6","#E3BFE6","#E5C1E7","#E6C4E8","#E6C7EA","#E7C8EA","#E9CBEB","#EACDEC","#EAD0ED","#ECD2EE","#EDD5EF","#EED7EF","#EFDAF1","#F0DCF2","#F1DEF3","#F2E1F3","#F3E3F4","#F4E6F5","#F5E8F6","#F6EAF7","#F7EDF8","#F8EFF9","#F9F1FA","#FAF3FB","#FBF6FB","#FCF8FC","#FDFBFD","#FEFDFE","#000001","#050007","#0A030C","#0F0511","#140716","#19091A","#1D0A1E","#210C22","#250E27","#290E2B","#2C0F2F","#301132","#341336","#371439","#3B163D","#3E1740","#411945","#451948","#481A4B","#4B1B4F","#4E1D52","#511E55","#541F58","#57215B","#5A225F","#5D2262","#602365","#632568","#66266B","#69276E","#6C2971","#6F2A74","#722B78","#752B7B","#782C7E","#7B2E81","#7E2F84","#813086","#843189","#86328C","#883490","#8B3493","#8E3595","#913698","#93379B","#96389D","#9939A0","#9C3BA3","#9E3CA6","#A13CA9","#A43DAC","#A63EAE","#A93FB1","#AC40B4","#AE41B6","#B143B9","#B444BC","#B644BF","#B945C1","#BB46C4","#BD47C7","#C048C9","#C249CC","#C54ACE","#C74BD2","#C84FD2","#C952D2","#CA55D3","#CB58D4","#CD5BD5","#CD5ED6","#CE61D7","#CF65D7","#D068D7","#D16BD8","#D26ED9","#D271DA","#D374DB","#D477DC","#D57ADC","#D67EDD","#D781DD","#D784DE","#D886DF","#D989E0","#DA8CE1","#DB8FE1","#DC92E2","#DC95E3","#DE98E3","#DF9BE4","#E09DE5","#E1A0E6","#E1A3E6","#E2A6E7","#E3A8E8","#E4ACE9","#E5AEE9","#E6B1EA","#E6B4EA","#E7B6EB","#E8B9EC","#E9BBED","#EABEEE","#EAC1EF","#EBC4EF","#ECC7EF","#EDC9F0","#EECCF1","#EFCEF2","#F0D1F3","#F1D3F3","#F2D7F4","#F3D9F4","#F3DCF5","#F4DEF6","#F5E1F7","#F6E3F7","#F7E6F8","#F7E8F9","#F8EBFA","#F9EEFA","#FAF0FB","#FBF3FB","#FBF5FC","#FCF7FD","#FDFAFE","#FEFCFF","#000001","#070007","#0C030C","#110313","#160517","#1A071B","#1E0721","#230925","#270A2A","#2B0A2E","#2F0C31","#320C36","#360E39","#3B0F3D","#3E0F41","#411145","#451349","#48134C","#4B1450","#501454","#531657","#56175A","#59175E","#5C1961","#5F1A65","#631A68","#661B6B","#691B6F","#6C1D72","#6F1E75","#721E79","#751F7C","#792180","#7C2183","#7F2286","#822289","#85238C","#87258F","#8B2593","#8E2695","#912799","#93279C","#96299E","#9929A2","#9D2AA5","#9F2BA7","#A22BAB","#A52CAE","#A72EB1","#AA2EB4","#AE2FB6","#B02FBA","#B330BC","#B531BF","#B831C2","#BB32C5","#BD34C8","#C134CB","#C335CD","#C635D1","#C836D3","#CB37D6","#CD37D9","#D138DC","#D339DF","#D43DDF","#D440E0","#D545E0","#D648E1","#D74BE1","#D750E1","#D853E2","#D857E3","#D95AE3","#DA5DE4","#DB61E4","#DC64E5","#DC67E6","#DD6BE6","#DD6EE6","#DE72E7","#DF75E7","#E078E8","#E17CE8","#E17FE9","#E182EA","#E286EA","#E388EA","#E48CEB","#E58FEB","#E692EC","#E695EC","#E698ED","#E79BEE","#E89EEE","#E9A1EF","#EAA5EF","#EAA7EF","#EAAAF0","#EBAEF0","#ECB0F1","#EDB3F2","#EEB6F2","#EFB9F3","#EFBCF3","#EFBFF3","#F0C1F4","#F1C5F4","#F2C7F5","#F3CAF6","#F3CDF6","#F3D0F7","#F4D3F7","#F5D6F7","#F6D8F8","#F7DCF8","#F7DEF9","#F7E1FA","#F8E4FA","#F9E6FB","#FAEAFB","#FBECFB","#FBEFFC","#FBF2FC","#FCF4FD","#FDF7FE","#FEFAFE","#FFFCFF","#000001","#070007","#0C000E","#130313","#170319","#1B031E","#210522","#250527","#29072C","#2E0730","#310735","#360938","#39093D","#3D0941","#410A45","#450A49","#480C4E","#4C0C51","#500C55","#540E58","#570E5C","#5A0E60","#5E0F63","#610F67","#64116B","#68116E","#6B1172","#6F1375","#721379","#75137D","#791480","#7C1484","#7F1687","#83168A","#86168E","#881791","#8C1794","#8F1798","#93199B","#95199E","#981AA2","#9C1AA5","#9E1AA8","#A11BAB","#A51BAE","#A71BB2","#AB1DB5","#AE1DB8","#B01EBB","#B41EBE","#B61EC1","#B91FC4","#BC1FC7","#BF1FCB","#C221CD","#C521D1","#C722D4","#CB22D7","#CD22DA","#D023DC","#D323E0","#D623E3","#D925E6","#DC25E9","#DE26EC","#DF2AEC","#E02FEC","#E032ED","#E137ED","#E13CED","#E13FEE","#E244EE","#E248EF","#E34BEF","#E450EF","#E453EF","#E557EF","#E55BEF","#E65EF0","#E662F0","#E666F1","#E769F1","#E86DF1","#E870F2","#E974F2","#E978F2","#EA7BF3","#EA7FF3","#EA83F3","#EB86F3","#EC89F3","#EC8CF4","#ED90F4","#ED93F4","#EE96F5","#EF9AF5","#EF9DF6","#EFA0F6","#F0A4F6","#F0A6F7","#F1AAF7","#F2AEF7","#F2B0F7","#F3B4F7","#F3B7F8","#F3BAF8","#F4BDF8","#F4C0F9","#F5C3F9","#F6C7F9","#F6C9FA","#F7CDFA","#F7D0FB","#F7D2FB","#F8D6FB","#F8D8FB","#F9DCFB","#FADFFB","#FAE1FC","#FBE5FC","#FBE8FD","#FBEAFD","#FCEEFD","#FCF0FE","#FDF3FE","#FEF7FE","#FEF9FF","#FFFCFF","#000001","#070007","#0E000E","#130014","#19001A","#1D001F","#220025","#27002A","#2B032F","#300332","#340337","#38033C","#3C0340","#400345","#450349","#48034E","#4C0552","#500555","#540559","#58055D","#5B0561","#5F0565","#620569","#66056D","#690771","#6D0774","#710778","#74077C","#780780","#7B0784","#7F0787","#83078B","#86098F","#890992","#8C0995","#900999","#93099D","#9609A0","#9A09A4","#9D09A7","#A00AAB","#A30AAE","#A60AB1","#AA0AB5","#AD0AB8","#B00ABB","#B30ABF","#B60AC2","#B90CC6","#BC0CC8","#C00CCC","#C20CCF","#C60CD2","#C80CD6","#CC0CD9","#CF0CDC","#D20EE0","#D50EE2","#D70EE6","#DB0EE9","#DD0EEC","#E10EEF","#E40EF3","#E60EF6","#EA0FF9","#EA14F9","#EA1AF9","#EA1FF9","#EA25F9","#EB2AF9","#EB2FF9","#EC34F9","#EC38FA","#ED3CFA","#ED40FA","#ED45FA","#EE49FA","#EE4EFA","#EF52FA","#EF56FA","#EF5AFB","#EF5DFB","#EF61FB","#F065FB","#F069FB","#F16DFB","#F171FB","#F175FB","#F279FB","#F27CFB","#F380FB","#F384FB","#F387FB","#F38BFB","#F38FFB","#F493FB","#F496FC","#F599FC","#F59DFC","#F5A0FC","#F6A4FC","#F6A7FC","#F7ABFC","#F7AEFC","#F7B2FD","#F7B5FD","#F7B8FD","#F8BBFD","#F8BFFD","#F9C2FD","#F9C6FD","#F9C9FD","#FACDFE","#FACFFE","#FBD2FE","#FBD6FE","#FBD9FE","#FBDCFE","#FBE0FE","#FCE3FE","#FCE6FF","#FDE9FF","#FDECFF","#FDEFFF","#FEF3FF","#FEF6FF","#FFF9FF","#FFFCFF","#000001","#050305","#090709","#0C0A0C","#0F0E0F","#131113","#161416","#191719","#1D1A1B","#1F1B1F","#221E22","#252125","#272327","#2A262A","#2C292C","#2F2B2F","#322E31","#352F35","#373137","#393439","#3C363C","#3E383E","#403B40","#433D43","#463F45","#484048","#4A434A","#4C454C","#4F474F","#514951","#534B53","#554E55","#585057","#5A5159","#5C535C","#5E555E","#605760","#625962","#645B64","#665D66","#695F68","#6B606A","#6D626D","#6F646F","#716671","#736873","#756A75","#776C77","#7A6E79","#7C6F7B","#7E717E","#807380","#827582","#847784","#867986","#877B87","#8A7D89","#8C7E8B","#8E808E","#908290","#928492","#938693","#958795","#978997","#9A8B99","#9B8D9B","#9D8F9D","#9E919E","#A093A0","#A294A2","#A496A4","#A698A5","#A79BA6","#A89DA8","#AA9EAA","#ACA0AC","#AEA2AE","#AFA4AF","#B1A6B1","#B3A7B2","#B5AAB4","#B5ACB5","#B7AEB7","#B9AFB9","#BBB1BB","#BCB3BC","#BEB5BE","#C0B6BF","#C1B9C1","#C2BBC2","#C4BCC4","#C6BEC6","#C7C0C7","#C9C1C9","#CBC3CB","#CDC5CC","#CEC7CD","#CFC9CF","#D1CBD1","#D2CDD2","#D4CED4","#D6D0D6","#D7D2D7","#D9D3D9","#DBD6DA","#DCD7DC","#DDD9DD","#DFDBDF","#E1DCE1","#E2DEE2","#E4E0E4","#E6E1E6","#E7E4E6","#E8E6E8","#EAE7EA","#EBE9EB","#EDEAED","#EFECEF","#F0EEF0","#F2EFF2","#F3F2F3","#F4F3F4","#F6F5F6","#F7F7F7","#F9F8F9","#FBFAFB","#FCFBFC","#FEFDFE","#000001","#050305","#090709","#0E090E","#110C11","#140F14","#191119","#1B141B","#1F171E","#221922","#251B25","#291D27","#2B1F2B","#2E222E","#312331","#342634","#372936","#392A39","#3C2C3C","#3F2E3E","#413041","#443244","#473446","#493649","#4C384B","#4F394F","#513C51","#543D53","#563F56","#584158","#5B435A","#5D455D","#60475F","#624861","#644A64","#674B66","#694E69","#6B506B","#6E516D","#705370","#735572","#755674","#775877","#7A5979","#7C5B7B","#7E5D7E","#815E80","#836083","#866285","#876386","#896589","#8C668B","#8E688D","#906A90","#936B92","#946D93","#976F96","#997098","#9B729B","#9D739D","#9F759E","#A177A1","#A478A3","#A67AA5","#A87CA7","#A97EA8","#AB80AA","#AC83AC","#AE85AD","#AF86AE","#B089B0","#B28BB1","#B48EB3","#B590B4","#B692B5","#B794B7","#B996B8","#BB98BA","#BB9BBB","#BD9DBC","#BF9FBE","#C0A1C0","#C1A3C1","#C2A6C2","#C4A7C3","#C6A9C5","#C7ACC7","#C8AEC7","#CAB0C9","#CBB2CB","#CDB4CC","#CDB6CD","#CFB8CF","#D1BAD0","#D2BCD2","#D3BED2","#D5C1D4","#D6C2D6","#D7C4D7","#D8C7D8","#DAC8DA","#DCCADB","#DCCDDC","#DECEDE","#E0D1DF","#E1D2E1","#E2D4E1","#E3D7E3","#E5D8E5","#E6DAE6","#E7DCE7","#E9DEE9","#EAE1EA","#EBE2EB","#EDE4ED","#EEE6EE","#EFE8EF","#F1EAF0","#F2ECF2","#F3EEF3","#F5F0F4","#F6F2F6","#F7F3F7","#F8F6F8","#FAF7FA","#FBF9FB","#FCFBFC","#FEFDFE","#000001","#050305","#0A050A","#0E090E","#130A13","#170C17","#1A0F1A","#1E111E","#221421","#251625","#291729","#2B1A2B","#2F1B2F","#321D31","#351F35","#382138","#3C233B","#3E253E","#412640","#442944","#472A47","#4A2B49","#4C2E4C","#502F4F","#533152","#553255","#583457","#5A365A","#5D375C","#60385F","#623B62","#653C64","#683E67","#6A3F69","#6D406C","#6F436F","#724471","#754574","#774777","#7A4879","#7D4A7C","#7F4B7E","#824C81","#844F84","#865086","#895188","#8B538A","#8E548D","#915690","#935792","#955894","#975A96","#9A5B99","#9D5C9C","#9E5E9D","#A15FA0","#A461A2","#A662A5","#A863A7","#AA65A9","#AD66AC","#AF67AE","#B169B0","#B46AB3","#B66CB5","#B76EB6","#B871B7","#BA73B8","#BB76BA","#BB79BB","#BD7BBC","#BE7EBD","#C081BE","#C183C0","#C186C1","#C387C2","#C48AC3","#C58DC4","#C78FC6","#C792C7","#C994C8","#CA96C9","#CB99CA","#CD9BCC","#CD9DCD","#CEA0CE","#D0A2CF","#D1A5D0","#D2A7D2","#D3A9D2","#D4ACD4","#D6AED5","#D7B0D6","#D7B3D7","#D9B5D8","#DAB7D9","#DCBADB","#DCBBDC","#DDBEDD","#DFC0DE","#E0C2DF","#E1C5E1","#E2C7E1","#E3C9E3","#E5CCE4","#E6CDE5","#E6D0E6","#E8D2E7","#E9D4E9","#EAD7EA","#EBD8EA","#ECDBEC","#EEDDED","#EFDFEF","#EFE1EF","#F1E3F0","#F2E6F2","#F3E8F3","#F4EAF4","#F5ECF5","#F7EFF6","#F7F0F7","#F8F3F8","#FAF4FA","#FBF7FB","#FBF9FB","#FDFBFD","#FEFDFE","#000001","#050305","#0A050A","#0F070F","#140914","#190A19","#1D0C1D","#210E1F","#251123","#271327","#2B142B","#2F162F","#321732","#361936","#391A38","#3D1B3C","#401E3F","#431F43","#462146","#492249","#4C234B","#50254F","#532652","#562755","#592A58","#5B2B5B","#5E2C5E","#612E60","#642F63","#673066","#6A3169","#6D326C","#70356F","#723671","#753774","#783877","#7B397A","#7E3B7D","#813C80","#843D83","#863F85","#884087","#8B418A","#8E438D","#914490","#934593","#964694","#994797","#9C499A","#9D4A9D","#A04B9F","#A34CA2","#A64EA5","#A84FA6","#AB50A9","#AE51AC","#B053AE","#B254B1","#B555B4","#B756B6","#BA57B8","#BC58BB","#BF59BD","#C15AC0","#C45CC2","#C55EC3","#C661C4","#C764C5","#C767C6","#C86AC7","#C96DC8","#CA70C9","#CC73CA","#CD75CB","#CD78CC","#CE7BCD","#CF7ECE","#D081CF","#D184D0","#D286D1","#D389D2","#D48BD2","#D58ED3","#D691D5","#D793D6","#D796D7","#D899D7","#D99CD8","#DB9ED9","#DCA0DB","#DCA3DC","#DDA6DC","#DEA8DD","#DFABDE","#E0AEDF","#E1B0E0","#E2B3E1","#E3B5E2","#E4B7E3","#E5BAE4","#E6BCE5","#E6BFE6","#E7C1E7","#E8C4E8","#EAC7E9","#EAC8EA","#EBCBEA","#ECCDEB","#EDD0EC","#EED2EE","#EFD5EF","#EFD7EF","#F1DAF0","#F2DCF1","#F3DEF2","#F3E1F3","#F4E3F4","#F5E6F5","#F6E8F6","#F7EAF7","#F8EDF7","#F9EFF8","#FAF1FA","#FBF3FB","#FBF6FB","#FCF8FC","#FDFBFD","#FEFDFE","#000001","#070007","#0C030C","#110511","#160716","#1A091A","#1E0A1E","#220C22","#270E26","#2B0E2A","#2F0F2E","#321131","#361336","#391439","#3D163D","#401740","#451944","#481947","#4B1A4A","#4F1B4E","#521D51","#551E54","#581F57","#5B215B","#5F225E","#622261","#652364","#682567","#6B266A","#6E276D","#712970","#742A73","#782B76","#7B2B79","#7E2C7D","#812E80","#842F83","#863086","#893188","#8C328B","#90348E","#933491","#953593","#983696","#9B3799","#9D389D","#A0399F","#A33BA2","#A63CA5","#A93CA7","#AC3DAA","#AE3EAD","#B13FAF","#B440B2","#B641B5","#B943B7","#BC44BB","#BF44BD","#C145C0","#C446C2","#C747C5","#C948C7","#CC49CA","#CE4ACD","#D24BCF","#D24FD0","#D252D1","#D355D2","#D458D2","#D55BD3","#D65ED4","#D761D5","#D765D6","#D768D6","#D86BD7","#D96ED7","#DA71D8","#DB74D9","#DC77DA","#DC7ADB","#DD7EDC","#DD81DC","#DE84DD","#DF86DE","#E089DE","#E18CDF","#E18FE0","#E292E1","#E395E1","#E398E2","#E49BE3","#E59DE4","#E6A0E5","#E6A3E6","#E7A6E6","#E8A8E6","#E9ACE7","#E9AEE8","#EAB1E9","#EAB4EA","#EBB6EA","#ECB9EB","#EDBBEC","#EEBEED","#EFC1EE","#EFC4EF","#EFC7EF","#F0C9EF","#F1CCF0","#F2CEF1","#F3D1F2","#F3D3F3","#F4D7F3","#F4D9F4","#F5DCF5","#F6DEF6","#F7E1F7","#F7E3F7","#F8E6F7","#F9E8F8","#FAEBF9","#FAEEFA","#FBF0FB","#FBF3FB","#FCF5FC","#FDF7FD","#FEFAFE","#FFFCFF","#000001","#070007","#0C030C","#130311","#170517","#1B071B","#21071F","#250925","#2A0A29","#2E0A2C","#310C31","#360C35","#390E38","#3D0F3D","#410F40","#451144","#491348","#4C134B","#50144F","#541453","#571656","#5A1759","#5E175D","#611960","#651A63","#681A67","#6B1B6A","#6F1B6D","#721D71","#751E74","#791E77","#7C1F7B","#80217E","#832181","#862285","#892287","#8C238A","#8F258E","#932591","#952693","#992797","#9C279A","#9E299D","#A229A0","#A52AA3","#A72BA6","#AB2BA9","#AE2CAC","#B12EAE","#B42EB2","#B62FB5","#BA2FB7","#BC30BB","#BF31BD","#C231C0","#C532C3","#C834C6","#CB34C8","#CD35CC","#D135CE","#D336D1","#D637D4","#D937D7","#DC38D9","#DF39DC","#DF3DDC","#E040DD","#E045DE","#E148DE","#E14BDF","#E150E0","#E253E0","#E357E1","#E35AE1","#E45DE1","#E461E2","#E564E3","#E667E3","#E66BE4","#E66EE5","#E772E5","#E775E6","#E878E6","#E87CE6","#E97FE7","#EA82E8","#EA86E8","#EA88E9","#EB8CEA","#EB8FEA","#EC92EA","#EC95EB","#ED98EB","#EE9BEC","#EE9EED","#EFA1ED","#EFA5EE","#EFA7EF","#F0AAEF","#F0AEEF","#F1B0F0","#F2B3F0","#F2B6F1","#F3B9F2","#F3BCF2","#F3BFF3","#F4C1F3","#F4C5F3","#F5C7F4","#F6CAF5","#F6CDF5","#F7D0F6","#F7D3F7","#F7D6F7","#F8D8F7","#F8DCF8","#F9DEF8","#FAE1F9","#FAE4FA","#FBE6FA","#FBEAFB","#FBECFB","#FCEFFB","#FCF2FC","#FDF4FD","#FEF7FD","#FEFAFE","#FFFCFF","#000001","#070007","#0E000E","#130313","#190319","#1E031D","#220522","#270527","#2C072B","#300730","#350734","#380938","#3D093C","#410940","#450A45","#490A48","#4E0C4C","#510C50","#550C54","#580E57","#5C0E5B","#600E5F","#630F62","#670F66","#6B1169","#6E116D","#721170","#751374","#791378","#7D137B","#80147F","#841482","#871686","#8A1688","#8E168C","#911790","#941793","#981796","#9B1999","#9E199D","#A21A9F","#A51AA3","#A81AA6","#AB1BA9","#AE1BAD","#B21BAF","#B51DB3","#B81DB5","#BB1EB9","#BE1EBC","#C11EBF","#C41FC2","#C71FC5","#CB1FC8","#CD21CC","#D121CE","#D422D2","#D722D4","#DA22D7","#DC23DA","#E023DD","#E323E1","#E625E3","#E925E6","#EC26E9","#EC2AEA","#EC2FEA","#ED32EA","#ED37EA","#ED3CEA","#EE3FEB","#EE44EB","#EF48EC","#EF4BEC","#EF50ED","#EF53ED","#EF57ED","#EF5BEE","#F05EEE","#F062EF","#F166EF","#F169EF","#F16DEF","#F270EF","#F274F0","#F278F0","#F37BF1","#F37FF1","#F383F1","#F386F2","#F389F2","#F48CF3","#F490F3","#F493F3","#F596F3","#F59AF3","#F69DF4","#F6A0F4","#F6A4F5","#F7A6F5","#F7AAF6","#F7AEF6","#F7B0F6","#F7B4F7","#F8B7F7","#F8BAF7","#F8BDF7","#F9C0F8","#F9C3F8","#F9C7F8","#FAC9F9","#FACDF9","#FBD0FA","#FBD2FA","#FBD6FB","#FBD8FB","#FBDCFB","#FBDFFB","#FCE1FB","#FCE5FC","#FDE8FC","#FDEAFD","#FDEEFD","#FEF0FD","#FEF3FE","#FEF7FE","#FFF9FF","#FFFCFF","#000001","#070007","#0E000E","#140014","#1A001A","#1F001F","#250023","#2A0029","#2F032E","#320332","#370337","#3C033B","#40033F","#450344","#490348","#4E034C","#520551","#550554","#590558","#5D055C","#610560","#650564","#690567","#6D056B","#71076F","#740773","#780777","#7C077B","#80077E","#840782","#870786","#8B0789","#8F098D","#920990","#950993","#990997","#9D099B","#A0099E","#A409A2","#A709A5","#AB0AA8","#AE0AAC","#B10AAF","#B50AB3","#B80AB5","#BB0AB9","#BF0ABC","#C20AC0","#C60CC3","#C80CC7","#CC0CC9","#CF0CCD","#D20CD0","#D60CD3","#D90CD7","#DC0CD9","#E00EDC","#E20EE0","#E60EE3","#E90EE6","#EC0EE9","#EF0EEC","#F30EEF","#F60EF3","#F90FF6","#F914F6","#F91AF6","#F91FF6","#F925F6","#F92AF7","#F92FF7","#F934F7","#FA38F7","#FA3CF7","#FA40F7","#FA45F7","#FA49F7","#FA4EF7","#FA52F7","#FA56F8","#FB5AF8","#FB5DF8","#FB61F8","#FB65F8","#FB69F8","#FB6DF9","#FB71F9","#FB75F9","#FB79F9","#FB7CF9","#FB80FA","#FB84FA","#FB87FA","#FB8BFA","#FB8FFA","#FB93FA","#FC96FB","#FC99FB","#FC9DFB","#FCA0FB","#FCA4FB","#FCA7FB","#FCABFB","#FCAEFB","#FDB2FB","#FDB5FB","#FDB8FB","#FDBBFC","#FDBFFC","#FDC2FC","#FDC6FC","#FDC9FC","#FECDFD","#FECFFD","#FED2FD","#FED6FD","#FED9FD","#FEDCFD","#FEE0FE","#FEE3FE","#FFE6FE","#FFE9FE","#FFECFE","#FFEFFF","#FFF3FF","#FFF6FF","#FFF9FF","#FFFCFF","#000001","#050305","#090709","#0C0A0C","#0F0E0F","#131113","#161416","#191719","#1D1A1B","#1F1B1E","#221E21","#252125","#272327","#2A262A","#2C292C","#2F2B2F","#322E31","#352F34","#373136","#393438","#3C363B","#3E383E","#403B40","#433D43","#463F45","#484047","#4A4349","#4C454B","#4F474E","#514950","#534B52","#554E55","#585057","#5A5159","#5C535B","#5E555D","#60575F","#625961","#645B63","#665D65","#695F67","#6B606A","#6D626C","#6F646E","#716670","#736872","#756A74","#776C76","#7A6E78","#7C6F7A","#7E717C","#80737E","#827581","#847783","#867985","#877B86","#8A7D88","#8C7E8A","#8E808C","#90828E","#928490","#938692","#958794","#978996","#9A8B98","#9B8D9A","#9D8F9C","#9E919D","#A0939E","#A294A0","#A496A2","#A698A4","#A79BA6","#A89DA7","#AA9EA9","#ACA0AB","#AEA2AD","#AFA4AE","#B1A6AF","#B3A7B1","#B5AAB3","#B5ACB5","#B7AEB6","#B9AFB8","#BBB1BA","#BCB3BB","#BEB5BD","#C0B6BF","#C1B9C0","#C2BBC1","#C4BCC3","#C6BEC5","#C7C0C7","#C9C1C8","#CBC3CA","#CDC5CC","#CEC7CD","#CFC9CF","#D1CBD0","#D2CDD2","#D4CED3","#D6D0D5","#D7D2D7","#D9D3D8","#DBD6DA","#DCD7DC","#DDD9DD","#DFDBDF","#E1DCE0","#E2DEE1","#E4E0E3","#E6E1E5","#E7E4E6","#E8E6E8","#EAE7EA","#EBE9EB","#EDEAED","#EFECEF","#F0EEEF","#F2EFF1","#F3F2F3","#F4F3F4","#F6F5F6","#F7F7F7","#F9F8F9","#FBFAFB","#FCFBFC","#FEFDFE","#000001","#050305","#090709","#0E090C","#110C11","#140F14","#191117","#1B141B","#1F171E","#221921","#251B23","#291D27","#2B1F2A","#2E222C","#312330","#342632","#372935","#392A37","#3C2C3B","#3F2E3D","#41303F","#443243","#473445","#493647","#4C384A","#4F394C","#513C4F","#543D51","#563F54","#584156","#5B4358","#5D455B","#60475D","#62485F","#644A61","#674B64","#694E66","#6B5068","#6E516B","#70536D","#73556F","#755672","#775874","#7A5976","#7C5B78","#7E5D7B","#815E7D","#83607F","#866282","#876384","#896586","#8C6687","#8E688A","#906A8C","#936B8E","#946D91","#976F93","#997094","#9B7296","#9D7399","#9F759B","#A1779D","#A4789F","#A67AA1","#A87CA3","#A97EA5","#AB80A6","#AC83A7","#AE85A9","#AF86AB","#B089AC","#B28BAE","#B48EAF","#B590B1","#B692B2","#B794B4","#B996B5","#BB98B6","#BB9BB8","#BD9DBA","#BF9FBB","#C0A1BC","#C1A3BE","#C2A6C0","#C4A7C1","#C6A9C2","#C7ACC4","#C8AEC6","#CAB0C7","#CBB2C8","#CDB4CA","#CDB6CB","#CFB8CD","#D1BACE","#D2BCCF","#D3BED1","#D5C1D2","#D6C2D4","#D7C4D5","#D8C7D7","#DAC8D8","#DCCAD9","#DCCDDB","#DECEDC","#E0D1DE","#E1D2DF","#E2D4E1","#E3D7E2","#E5D8E3","#E6DAE5","#E7DCE6","#E9DEE7","#EAE1E9","#EBE2EA","#EDE4EC","#EEE6ED","#EFE8EF","#F1EAF0","#F2ECF1","#F3EEF3","#F5F0F4","#F6F2F6","#F7F3F7","#F8F6F8","#FAF7FA","#FBF9FB","#FCFBFC","#FEFDFE","#000001","#050305","#0A0509","#0E090E","#130A11","#170C16","#1A0F19","#1E111D","#22141F","#251623","#291726","#2B1A2A","#2F1B2C","#321D30","#351F32","#382136","#3C2338","#3E253C","#41263E","#442941","#472A44","#4A2B47","#4C2E49","#502F4C","#53314F","#553252","#583454","#5A3657","#5D3759","#60385C","#623B5E","#653C61","#683E63","#6A3F66","#6D4068","#6F436B","#72446D","#754570","#774772","#7A4875","#7D4A77","#7F4B7A","#824C7C","#844F7E","#865081","#895183","#8B5386","#8E5487","#91568A","#93578C","#95588F","#975A91","#9A5B93","#9D5C95","#9E5E98","#A15F9A","#A4619D","#A6629E","#A863A1","#AA65A3","#AD66A6","#AF67A7","#B169AA","#B46AAC","#B66CAE","#B76EAF","#B871B1","#BA73B2","#BB76B4","#BB79B5","#BD7BB6","#BE7EB7","#C081B9","#C183BA","#C186BB","#C387BC","#C48ABE","#C58DBF","#C78FC1","#C792C1","#C994C3","#CA96C4","#CB99C6","#CD9BC7","#CD9DC8","#CEA0C9","#D0A2CB","#D1A5CD","#D2A7CD","#D3A9CF","#D4ACD0","#D6AED2","#D7B0D2","#D7B3D4","#D9B5D5","#DAB7D7","#DCBAD7","#DCBBD9","#DDBEDA","#DFC0DC","#E0C2DC","#E1C5DE","#E2C7DF","#E3C9E1","#E5CCE1","#E6CDE3","#E6D0E4","#E8D2E6","#E9D4E6","#EAD7E8","#EBD8E9","#ECDBEA","#EEDDEB","#EFDFED","#EFE1EE","#F1E3EF","#F2E6F0","#F3E8F2","#F4EAF3","#F5ECF4","#F7EFF5","#F7F0F7","#F8F3F7","#FAF4F9","#FBF7FA","#FBF9FB","#FDFBFC","#FEFDFE","#000001","#050305","#0A050A","#0F070F","#140913","#190A17","#1D0C1B","#210E1E","#251122","#271326","#2B1429","#2F162C","#321730","#361932","#391A36","#3D1B39","#401E3C","#431F3F","#462143","#492245","#4C2348","#50254B","#53264F","#562751","#592A54","#5B2B57","#5E2C59","#612E5C","#642F5F","#673061","#6A3164","#6D3267","#703569","#72366C","#75376F","#783871","#7B3974","#7E3B77","#813C79","#843D7C","#863F7F","#884082","#8B4184","#8E4386","#914489","#93458B","#96468E","#994791","#9C4993","#9D4A95","#A04B98","#A34C9A","#A64E9D","#A84F9F","#AB50A1","#AE51A4","#B053A6","#B254A8","#B555AB","#B756AE","#BA57B0","#BC58B2","#BF59B5","#C15AB7","#C45CB9","#C55EBB","#C661BB","#C764BC","#C767BE","#C86ABF","#C96DC0","#CA70C1","#CC73C2","#CD75C3","#CD78C4","#CE7BC6","#CF7EC7","#D081C7","#D184C9","#D286CA","#D389CB","#D48BCD","#D58ECD","#D691CE","#D793D0","#D796D1","#D899D2","#D99CD3","#DB9ED4","#DCA0D5","#DCA3D6","#DDA6D7","#DEA8D8","#DFABD9","#E0AEDB","#E1B0DC","#E2B3DC","#E3B5DE","#E4B7DF","#E5BAE0","#E6BCE1","#E6BFE2","#E7C1E3","#E8C4E5","#EAC7E6","#EAC8E6","#EBCBE8","#ECCDE9","#EDD0EA","#EED2EA","#EFD5EC","#EFD7ED","#F1DAEE","#F2DCEF","#F3DEF0","#F3E1F1","#F4E3F3","#F5E6F3","#F6E8F4","#F7EAF6","#F8EDF7","#F9EFF7","#FAF1F9","#FBF3FA","#FBF6FB","#FCF8FC","#FDFBFD","#FEFDFE","#000001","#070005","#0C030A","#11050F","#160714","#1A0919","#1E0A1D","#220C21","#270E25","#2B0E27","#2F0F2B","#32112F","#361332","#391436","#3D1639","#40173D","#451940","#481943","#4B1A46","#4F1B49","#521D4C","#551E50","#581F53","#5B2156","#5F2259","#62225B","#65235E","#682561","#6B2664","#6E2767","#71296A","#742A6D","#782B70","#7B2B73","#7E2C75","#812E78","#842F7B","#86307E","#893181","#8C3284","#903486","#933489","#95358B","#98368E","#9B3791","#9D3893","#A03996","#A33B99","#A63C9C","#A93C9E","#AC3DA0","#AE3EA3","#B13FA6","#B440A8","#B641AB","#B943AE","#BC44B0","#BF44B3","#C145B5","#C446B7","#C747BA","#C948BC","#CC49BF","#CE4AC1","#D24BC4","#D24FC5","#D252C6","#D355C7","#D458C7","#D55BC8","#D65EC9","#D761CB","#D765CC","#D768CD","#D86BCD","#D96ECE","#DA71CF","#DB74D0","#DC77D1","#DC7AD2","#DD7ED3","#DD81D4","#DE84D5","#DF86D6","#E089D7","#E18CD7","#E18FD8","#E292DA","#E395DB","#E398DC","#E49BDC","#E59DDD","#E6A0DE","#E6A3DF","#E7A6E0","#E8A8E1","#E9ACE2","#E9AEE3","#EAB1E4","#EAB4E5","#EBB6E6","#ECB9E6","#EDBBE7","#EEBEE8","#EFC1EA","#EFC4EA","#EFC7EB","#F0C9EC","#F1CCED","#F2CEEE","#F3D1EF","#F3D3EF","#F4D7F1","#F4D9F2","#F5DCF3","#F6DEF3","#F7E1F4","#F7E3F5","#F8E6F6","#F9E8F7","#FAEBF8","#FAEEF9","#FBF0FA","#FBF3FB","#FCF5FB","#FDF7FC","#FEFAFD","#FFFCFE","#000001","#070007","#0C030C","#130311","#170516","#1B071A","#21071E","#250922","#2A0A26","#2E0A2A","#310C2E","#360C31","#390E35","#3D0F38","#410F3D","#451140","#491344","#4C1347","#50144A","#54144E","#571651","#5A1754","#5E1757","#61195A","#651A5D","#681A60","#6B1B63","#6F1B67","#721D6A","#751E6D","#791E70","#7C1F73","#802176","#832179","#86227C","#89227F","#8C2382","#8F2585","#932587","#95268A","#99278D","#9C2791","#9E2993","#A22996","#A52A99","#A72B9C","#AB2B9E","#AE2CA1","#B12EA4","#B42EA6","#B62FA9","#BA2FAC","#BC30AE","#BF31B1","#C231B5","#C532B7","#C834BA","#CB34BC","#CD35BF","#D135C1","#D336C4","#D637C7","#D937C9","#DC38CC","#DF39CE","#DF3DCF","#E040D0","#E045D1","#E148D2","#E14BD2","#E150D3","#E253D4","#E357D5","#E35AD6","#E45DD7","#E461D7","#E564D7","#E667D8","#E66BD9","#E66EDA","#E772DB","#E775DC","#E878DC","#E87CDD","#E97FDE","#EA82DF","#EA86E0","#EA88E1","#EB8CE1","#EB8FE1","#EC92E2","#EC95E3","#ED98E4","#EE9BE5","#EE9EE6","#EFA1E6","#EFA5E7","#EFA7E8","#F0AAE9","#F0AEEA","#F1B0EA","#F2B3EB","#F2B6EB","#F3B9EC","#F3BCED","#F3BFEE","#F4C1EF","#F4C5EF","#F5C7F0","#F6CAF1","#F6CDF2","#F7D0F3","#F7D3F3","#F7D6F4","#F8D8F5","#F8DCF5","#F9DEF6","#FAE1F7","#FAE4F7","#FBE6F8","#FBEAF9","#FBECFA","#FCEFFB","#FCF2FB","#FDF4FC","#FEF7FD","#FEFAFE","#FFFCFF","#000001","#070007","#0E000C","#130311","#190317","#1E031B","#22051F","#270523","#2C0729","#30072C","#350730","#380934","#3D0938","#41093C","#450A3F","#490A44","#4E0C47","#510C4A","#550C4E","#580E52","#5C0E55","#600E58","#630F5B","#670F5F","#6B1162","#6E1165","#721169","#75136C","#79136F","#7D1372","#801476","#841479","#87167C","#8A167F","#8E1683","#911786","#941788","#98178B","#9B198F","#9E1992","#A21A94","#A51A98","#A81A9B","#AB1B9D","#AE1BA0","#B21BA4","#B51DA6","#B81DA9","#BB1EAC","#BE1EAF","#C11EB2","#C41FB5","#C71FB8","#CB1FBB","#CD21BD","#D121C0","#D422C3","#D722C6","#DA22C8","#DC23CB","#E023CE","#E323D1","#E625D3","#E925D6","#EC26D9","#EC2AD9","#EC2FDA","#ED32DB","#ED37DC","#ED3CDC","#EE3FDC","#EE44DD","#EF48DE","#EF4BDE","#EF50DF","#EF53E0","#EF57E1","#EF5BE1","#F05EE1","#F062E2","#F166E2","#F169E3","#F16DE4","#F270E5","#F274E5","#F278E6","#F37BE6","#F37FE7","#F383E7","#F386E8","#F389E9","#F48CE9","#F490EA","#F493EA","#F596EB","#F59AEB","#F69DEC","#F6A0ED","#F6A4EE","#F7A6EE","#F7AAEF","#F7AEEF","#F7B0F0","#F7B4F0","#F8B7F1","#F8BAF2","#F8BDF2","#F9C0F3","#F9C3F3","#F9C7F4","#FAC9F4","#FACDF5","#FBD0F6","#FBD2F7","#FBD6F7","#FBD8F7","#FBDCF8","#FBDFF8","#FCE1F9","#FCE5FA","#FDE8FB","#FDEAFB","#FDEEFB","#FEF0FC","#FEF3FD","#FEF7FD","#FFF9FE","#FFFCFF","#000001","#070007","#0E000C","#140013","#1A0017","#1F001D","#250021","#2A0026","#2F032A","#32032F","#370332","#3C0337","#40033B","#45033F","#490343","#4E0346","#52054A","#55054E","#590552","#5D0555","#610559","#65055C","#690560","#6D0563","#710767","#74076A","#78076E","#7C0771","#800775","#840778","#87077B","#8B077F","#8F0982","#920986","#950988","#99098C","#9D098F","#A00993","#A40995","#A70999","#AB0A9C","#AE0A9F","#B10AA2","#B50AA5","#B80AA8","#BB0AAB","#BF0AAE","#C20AB1","#C60CB5","#C80CB7","#CC0CBB","#CF0CBD","#D20CC1","#D60CC3","#D90CC7","#DC0CC9","#E00ECD","#E20ECF","#E60ED2","#E90ED5","#EC0ED7","#EF0EDB","#F30EDD","#F60EE1","#F90FE3","#F914E4","#F91AE4","#F91FE5","#F925E5","#F92AE6","#F92FE6","#F934E6","#FA38E7","#FA3CE7","#FA40E8","#FA45E8","#FA49E9","#FA4EE9","#FA52EA","#FA56EA","#FB5AEA","#FB5DEA","#FB61EB","#FB65EB","#FB69EC","#FB6DEC","#FB71ED","#FB75EE","#FB79EE","#FB7CEF","#FB80EF","#FB84EF","#FB87EF","#FB8BF0","#FB8FF0","#FB93F1","#FC96F1","#FC99F2","#FC9DF2","#FCA0F3","#FCA4F3","#FCA7F3","#FCABF4","#FCAEF4","#FDB2F5","#FDB5F5","#FDB8F6","#FDBBF6","#FDBFF7","#FDC2F7","#FDC6F7","#FDC9F7","#FECDF8","#FECFF8","#FED2F9","#FED6FA","#FED9FA","#FEDCFB","#FEE0FB","#FEE3FB","#FFE6FB","#FFE9FC","#FFECFC","#FFEFFD","#FFF3FD","#FFF6FE","#FFF9FE","#FFFCFF","#000001","#050305","#090709","#0C0A0C","#0F0E0F","#131113","#161416","#191719","#1D1A1B","#1F1B1E","#221E21","#252123","#272326","#2A2629","#2C292C","#2F2B2F","#322E31","#352F34","#373136","#393438","#3C363B","#3E383D","#403B3F","#433D41","#463F44","#484046","#4A4348","#4C454B","#4F474E","#514950","#534B52","#554E54","#585056","#5A5158","#5C535A","#5E555C","#60575E","#625960","#645B62","#665D64","#695F66","#6B6069","#6D626B","#6F646D","#71666F","#736871","#756A73","#776C75","#7A6E77","#7C6F79","#7E717B","#80737D","#82757F","#847781","#867984","#877B86","#8A7D87","#8C7E89","#8E808B","#90828D","#92848F","#938691","#958793","#978994","#9A8B96","#9B8D98","#9D8F9A","#9E919C","#A0939D","#A2949F","#A496A1","#A698A3","#A79BA5","#A89DA6","#AA9EA8","#ACA0A9","#AEA2AB","#AFA4AD","#B1A6AE","#B3A7B0","#B5AAB2","#B5ACB4","#B7AEB5","#B9AFB7","#BBB1B9","#BCB3BB","#BEB5BC","#C0B6BE","#C1B9BF","#C2BBC1","#C4BCC2","#C6BEC4","#C7C0C6","#C9C1C7","#CBC3C9","#CDC5CB","#CEC7CD","#CFC9CE","#D1CBD0","#D2CDD2","#D4CED3","#D6D0D5","#D7D2D6","#D9D3D7","#DBD6D9","#DCD7DB","#DDD9DC","#DFDBDE","#E1DCE0","#E2DEE1","#E4E0E3","#E6E1E5","#E7E4E6","#E8E6E8","#EAE7EA","#EBE9EA","#EDEAEC","#EFECEE","#F0EEEF","#F2EFF1","#F3F2F3","#F4F3F4","#F6F5F6","#F7F7F7","#F9F8F9","#FBFAFB","#FCFBFC","#FEFDFE","#000001","#050305","#090709","#0E090C","#110C0F","#140F14","#191117","#1B141A","#1F171D","#221921","#251B23","#291D26","#2B1F29","#2E222B","#31232F","#342631","#372934","#392A36","#3C2C39","#3F2E3C","#41303E","#443240","#473443","#493646","#4C3848","#4F394A","#513C4C","#543D50","#563F52","#584154","#5B4356","#5D4558","#60475B","#62485D","#644A5F","#674B61","#694E64","#6B5066","#6E5168","#70536A","#73556C","#75566F","#775871","#7A5973","#7C5B75","#7E5D78","#815E7A","#83607C","#86627E","#876380","#896583","#8C6685","#8E6886","#906A88","#936B8B","#946D8D","#976F8F","#997091","#9B7293","#9D7395","#9F7597","#A17799","#A4789B","#A67A9D","#A87C9F","#A97EA1","#AB80A2","#AC83A4","#AE85A6","#AF86A7","#B089A8","#B28BAA","#B48EAC","#B590AE","#B692AF","#B794B0","#B996B2","#BB98B4","#BB9BB5","#BD9DB6","#BF9FB8","#C0A1BA","#C1A3BB","#C2A6BD","#C4A7BE","#C6A9C0","#C7ACC1","#C8AEC3","#CAB0C4","#CBB2C6","#CDB4C7","#CDB6C9","#CFB8CB","#D1BACC","#D2BCCD","#D3BECF","#D5C1D1","#D6C2D2","#D7C4D3","#D8C7D5","#DAC8D7","#DCCAD8","#DCCDD9","#DECEDB","#E0D1DC","#E1D2DE","#E2D4DF","#E3D7E1","#E5D8E2","#E6DAE4","#E7DCE6","#E9DEE6","#EAE1E8","#EBE2EA","#EDE4EB","#EEE6EC","#EFE8EE","#F1EAEF","#F2ECF1","#F3EEF3","#F5F0F3","#F6F2F5","#F7F3F7","#F8F6F8","#FAF7F9","#FBF9FB","#FCFBFC","#FEFDFE","#000001","#050305","#0A0509","#0E090E","#130A11","#170C14","#1A0F19","#1E111B","#22141E","#251622","#291725","#2B1A29","#2F1B2B","#321D2E","#351F31","#382134","#3C2336","#3E2539","#41263C","#44293F","#472A41","#4A2B44","#4C2E47","#502F49","#53314B","#55324F","#583451","#5A3654","#5D3756","#603858","#623B5B","#653C5D","#683E5F","#6A3F62","#6D4064","#6F4366","#724469","#75456B","#77476E","#7A4870","#7D4A72","#7F4B75","#824C77","#844F79","#86507C","#89517E","#8B5381","#8E5483","#915685","#935787","#955889","#975A8B","#9A5B8E","#9D5C90","#9E5E93","#A15F94","#A46196","#A66299","#A8639B","#AA659D","#AD669F","#AF67A1","#B169A4","#B46AA6","#B66CA7","#B76EA9","#B871AB","#BA73AC","#BB76AE","#BB79AE","#BD7BB0","#BE7EB2","#C081B3","#C183B5","#C186B6","#C387B7","#C48AB9","#C58DBA","#C78FBB","#C792BD","#C994BE","#CA96C0","#CB99C1","#CD9BC2","#CD9DC4","#CEA0C5","#D0A2C7","#D1A5C8","#D2A7C9","#D3A9CB","#D4ACCD","#D6AECD","#D7B0CF","#D7B3D0","#D9B5D2","#DAB7D3","#DCBAD4","#DCBBD6","#DDBED7","#DFC0D8","#E0C2DA","#E1C5DC","#E2C7DC","#E3C9DE","#E5CCDF","#E6CDE1","#E6D0E2","#E8D2E3","#E9D4E5","#EAD7E6","#EBD8E7","#ECDBE9","#EEDDEA","#EFDFEB","#EFE1ED","#F1E3EE","#F2E6EF","#F3E8F1","#F4EAF2","#F5ECF3","#F7EFF4","#F7F0F6","#F8F3F7","#FAF4F8","#FBF7FA","#FBF9FB","#FDFBFC","#FEFDFE","#000001","#050305","#0A050A","#0F070E","#140913","#190A16","#1D0C1A","#210E1D","#251121","#271323","#2B1427","#2F162A","#32172E","#361930","#391A34","#3D1B36","#401E39","#431F3C","#46213F","#492241","#4C2345","#502547","#53264A","#56274C","#592A50","#5B2B52","#5E2C55","#612E58","#642F5A","#67305D","#6A315F","#6D3262","#703564","#723667","#753769","#78386C","#7B396E","#7E3B71","#813C73","#843D76","#863F78","#88407B","#8B417D","#8E4380","#914482","#934585","#964686","#994789","#9C498B","#9D4A8E","#A04B90","#A34C93","#A64E95","#A84F97","#AB509A","#AE519C","#B0539E","#B254A0","#B555A3","#B756A5","#BA57A7","#BC58A9","#BF59AC","#C15AAE","#C45CB0","#C55EB1","#C661B3","#C764B4","#C767B5","#C86AB6","#C96DB8","#CA70B9","#CC73BB","#CD75BB","#CD78BD","#CE7BBE","#CF7EC0","#D081C1","#D184C1","#D286C3","#D389C4","#D48BC6","#D58EC7","#D691C8","#D793C9","#D796CB","#D899CC","#D99CCD","#DB9ECE","#DCA0D0","#DCA3D1","#DDA6D2","#DEA8D3","#DFABD5","#E0AED6","#E1B0D7","#E2B3D8","#E3B5DA","#E4B7DB","#E5BADC","#E6BCDD","#E6BFDF","#E7C1E0","#E8C4E1","#EAC7E2","#EAC8E3","#EBCBE5","#ECCDE6","#EDD0E7","#EED2E8","#EFD5EA","#EFD7EA","#F1DAEC","#F2DCED","#F3DEEF","#F3E1EF","#F4E3F1","#F5E6F2","#F6E8F3","#F7EAF4","#F8EDF6","#F9EFF7","#FAF1F8","#FBF3F9","#FBF6FB","#FCF8FB","#FDFBFD","#FEFDFE","#000001","#070005","#0C030A","#11050F","#160713","#1A0917","#1E0A1B","#220C1E","#270E22","#2B0E26","#2F0F29","#32112C","#361330","#391432","#3D1636","#401739","#45193C","#48193F","#4B1A43","#4F1B45","#521D48","#551E4B","#581F4E","#5B2151","#5F2254","#622256","#652359","#68255C","#6B265E","#6E2761","#712964","#742A66","#782B69","#7B2B6C","#7E2C6E","#812E71","#842F74","#863076","#893179","#8C327C","#90347E","#933481","#953584","#983686","#9B3788","#9D388B","#A0398D","#A33B90","#A63C93","#A93C94","#AC3D97","#AE3E9A","#B13F9C","#B4409E","#B641A1","#B943A3","#BC44A6","#BF44A8","#C145AA","#C446AD","#C747AF","#C948B1","#CC49B4","#CE4AB6","#D24BB8","#D24FBA","#D252BB","#D355BB","#D458BD","#D55BBE","#D65EBF","#D761C1","#D765C1","#D768C2","#D86BC4","#D96EC5","#DA71C6","#DB74C7","#DC77C8","#DC7AC9","#DD7ECB","#DD81CC","#DE84CD","#DF86CE","#E089CF","#E18CD0","#E18FD2","#E292D2","#E395D3","#E398D5","#E49BD6","#E59DD7","#E6A0D8","#E6A3D9","#E7A6DA","#E8A8DC","#E9ACDC","#E9AEDD","#EAB1DF","#EAB4E0","#EBB6E1","#ECB9E2","#EDBBE3","#EEBEE4","#EFC1E6","#EFC4E6","#EFC7E7","#F0C9E9","#F1CCEA","#F2CEEA","#F3D1EC","#F3D3ED","#F4D7EE","#F4D9EF","#F5DCF0","#F6DEF1","#F7E1F3","#F7E3F3","#F8E6F4","#F9E8F6","#FAEBF7","#FAEEF7","#FBF0F9","#FBF3FA","#FCF5FB","#FDF7FC","#FEFAFD","#FFFCFE","#000001","#070005","#0C030A","#13030F","#170514","#1B0719","#21071B","#25091F","#2A0A23","#2E0A27","#310C2B","#360C2E","#390E31","#3D0F35","#410F38","#45113C","#49133F","#4C1341","#501445","#541448","#57164B","#5A174F","#5E1751","#611954","#651A57","#681A5A","#6B1B5D","#6F1B60","#721D62","#751E65","#791E68","#7C1F6B","#80216E","#832170","#862273","#892276","#8C2379","#8F257C","#93257F","#952681","#992784","#9C2786","#9E2989","#A2298C","#A52A8E","#A72B91","#AB2B93","#AE2C96","#B12E99","#B42E9C","#B62F9D","#BA2FA0","#BC30A3","#BF31A6","#C231A8","#C532AA","#C834AD","#CB34AF","#CD35B2","#D135B5","#D336B6","#D637B9","#D937BB","#DC38BE","#DF39C1","#DF3DC1","#E040C2","#E045C3","#E148C4","#E14BC6","#E150C7","#E253C7","#E357C8","#E35AC9","#E45DCB","#E461CC","#E564CD","#E667CD","#E66BCE","#E66ED0","#E772D1","#E775D2","#E878D2","#E87CD3","#E97FD4","#EA82D6","#EA86D7","#EA88D7","#EB8CD8","#EB8FD9","#EC92DB","#EC95DC","#ED98DC","#EE9BDD","#EE9EDE","#EFA1DF","#EFA5E1","#EFA7E1","#F0AAE2","#F0AEE3","#F1B0E4","#F2B3E6","#F2B6E6","#F3B9E7","#F3BCE8","#F3BFE9","#F4C1EA","#F4C5EB","#F5C7EC","#F6CAED","#F6CDEE","#F7D0EF","#F7D3F0","#F7D6F1","#F8D8F2","#F8DCF3","#F9DEF3","#FAE1F4","#FAE4F6","#FBE6F7","#FBEAF7","#FBECF8","#FCEFF9","#FCF2FB","#FDF4FB","#FEF7FC","#FEFAFD","#FFFCFE","#000001","#070005","#0E000A","#13030F","#190314","#1E0319","#22051D","#270521","#2C0725","#300729","#35072C","#380930","#3D0934","#410937","#450A3B","#490A3E","#4E0C41","#510C45","#550C48","#580E4B","#5C0E4F","#600E52","#630F55","#670F58","#6B115B","#6E115E","#721161","#751364","#791367","#7D1369","#80146C","#84146F","#871672","#8A1675","#8E1678","#91177B","#94177E","#981781","#9B1984","#9E1986","#A21A89","#A51A8C","#A81A8F","#AB1B92","#AE1B94","#B21B97","#B51D9A","#B81D9D","#BB1E9F","#BE1EA2","#C11EA5","#C41FA7","#C71FAA","#CB1FAD","#CD21AF","#D121B2","#D422B5","#D722B6","#DA22B9","#DC23BB","#E023BE","#E323C1","#E625C3","#E925C6","#EC26C8","#EC2AC9","#EC2FCA","#ED32CB","#ED37CC","#ED3CCD","#EE3FCD","#EE44CE","#EF48D0","#EF4BD1","#EF50D2","#EF53D2","#EF57D3","#EF5BD4","#F05ED5","#F062D6","#F166D7","#F169D7","#F16DD8","#F270D9","#F274DA","#F278DB","#F37BDC","#F37FDC","#F383DD","#F386DE","#F389DF","#F48CE0","#F490E1","#F493E1","#F596E2","#F59AE3","#F69DE4","#F6A0E5","#F6A4E6","#F7A6E6","#F7AAE8","#F7AEE9","#F7B0EA","#F7B4EA","#F8B7EB","#F8BAEC","#F8BDED","#F9C0EE","#F9C3EF","#F9C7EF","#FAC9F0","#FACDF1","#FBD0F2","#FBD2F3","#FBD6F3","#FBD8F4","#FBDCF5","#FBDFF6","#FCE1F7","#FCE5F7","#FDE8F8","#FDEAF9","#FDEEFA","#FEF0FB","#FEF3FB","#FEF7FC","#FFF9FD","#FFFCFE","#000001","#070007","#0E000C","#140011","#1A0016","#1F001A","#25001E","#2A0022","#2F0326","#32032B","#37032F","#3C0332","#400336","#450339","#49033D","#4E0340","#520544","#550547","#59054B","#5D054F","#610552","#650555","#690558","#6D055B","#71075E","#740761","#780764","#7C0768","#80076B","#84076E","#870771","#8B0774","#8F0977","#92097A","#95097D","#990980","#9D0984","#A00986","#A40989","#A7098C","#AB0A8F","#AE0A92","#B10A94","#B50A97","#B80A9A","#BB0A9D","#BF0AA0","#C20AA3","#C60CA6","#C80CA8","#CC0CAB","#CF0CAE","#D20CB0","#D60CB4","#D90CB6","#DC0CB9","#E00EBB","#E20EBE","#E60EC1","#E90EC3","#EC0EC6","#EF0EC8","#F30ECC","#F60ECE","#F90FD1","#F914D2","#F91AD2","#F91FD2","#F925D3","#F92AD4","#F92FD5","#F934D6","#FA38D7","#FA3CD7","#FA40D8","#FA45D9","#FA49D9","#FA4EDA","#FA52DB","#FA56DC","#FB5ADC","#FB5DDD","#FB61DE","#FB65DF","#FB69DF","#FB6DE0","#FB71E1","#FB75E1","#FB79E2","#FB7CE3","#FB80E4","#FB84E5","#FB87E6","#FB8BE6","#FB8FE6","#FB93E7","#FC96E8","#FC99E9","#FC9DEA","#FCA0EA","#FCA4EB","#FCA7EC","#FCABEC","#FCAEED","#FDB2EE","#FDB5EF","#FDB8EF","#FDBBF0","#FDBFF1","#FDC2F2","#FDC6F3","#FDC9F3","#FECDF3","#FECFF4","#FED2F5","#FED6F6","#FED9F7","#FEDCF7","#FEE0F8","#FEE3F9","#FFE6F9","#FFE9FA","#FFECFB","#FFEFFB","#FFF3FC","#FFF6FD","#FFF9FE","#FFFCFF","#000001","#050305","#090709","#0C0A0C","#0F0E0F","#131113","#161416","#191719","#1D1A1B","#1F1B1E","#221E21","#252123","#272326","#2A2629","#2C292B","#2F2B2E","#322E30","#352F32","#373135","#393437","#3C363B","#3E383D","#403B3F","#433D41","#463F44","#484046","#4A4348","#4C454A","#4F474C","#51494F","#534B51","#554E53","#585055","#5A5157","#5C5359","#5E555B","#60575D","#62595F","#645B61","#665D63","#695F66","#6B6068","#6D626A","#6F646C","#71666E","#736870","#756A72","#776C74","#7A6E76","#7C6F78","#7E717A","#80737C","#82757E","#847780","#867982","#877B84","#8A7D86","#8C7E87","#8E8089","#90828B","#92848E","#938690","#958792","#978993","#9A8B95","#9B8D97","#9D8F99","#9E919B","#A0939D","#A2949D","#A4969F","#A698A1","#A79BA3","#A89DA5","#AA9EA6","#ACA0A8","#AEA2AA","#AFA4AC","#B1A6AE","#B3A7AF","#B5AAB1","#B5ACB3","#B7AEB5","#B9AFB6","#BBB1B8","#BCB3BA","#BEB5BB","#C0B6BD","#C1B9BF","#C2BBC0","#C4BCC1","#C6BEC3","#C7C0C5","#C9C1C7","#CBC3C8","#CDC5CA","#CEC7CC","#CFC9CD","#D1CBCF","#D2CDD1","#D4CED2","#D6D0D4","#D7D2D6","#D9D3D7","#DBD6D9","#DCD7DB","#DDD9DC","#DFDBDE","#E1DCE0","#E2DEE1","#E4E0E2","#E6E1E4","#E7E4E6","#E8E6E7","#EAE7E9","#EBE9EA","#EDEAEC","#EFECEE","#F0EEEF","#F2EFF1","#F3F2F3","#F4F3F4","#F6F5F6","#F7F7F7","#F9F8F9","#FBFAFB","#FCFBFC","#FEFDFE","#000001","#050305","#090709","#0E090C","#110C0F","#140F13","#191116","#1B141A","#1F171D","#22191F","#251B22","#291D25","#2B1F27","#2E222A","#31232E","#342630","#372932","#392A35","#3C2C37","#3F2E39","#41303D","#44323F","#473441","#493644","#4C3846","#4F3948","#513C4A","#543D4E","#563F50","#584152","#5B4354","#5D4556","#604758","#62485B","#644A5D","#674B5F","#694E61","#6B5063","#6E5165","#705367","#73556A","#75566C","#77586E","#7A5970","#7C5B72","#7E5D74","#815E77","#836079","#86627B","#87637D","#89657F","#8C6681","#8E6883","#906A86","#936B87","#946D89","#976F8B","#99708D","#9B728F","#9D7391","#9F7593","#A17795","#A47897","#A67A99","#A87C9B","#A97E9D","#AB809E","#AC83A0","#AE85A2","#AF86A3","#B089A5","#B28BA6","#B48EA8","#B590AA","#B692AC","#B794AE","#B996AE","#BB98B0","#BB9BB2","#BD9DB4","#BF9FB5","#C0A1B7","#C1A3B9","#C2A6BA","#C4A7BB","#C6A9BD","#C7ACBF","#C8AEC1","#CAB0C2","#CBB2C3","#CDB4C5","#CDB6C7","#CFB8C8","#D1BACA","#D2BCCC","#D3BECD","#D5C1CE","#D6C2D0","#D7C4D2","#D8C7D3","#DAC8D5","#DCCAD7","#DCCDD7","#DECED9","#E0D1DB","#E1D2DC","#E2D4DE","#E3D7E0","#E5D8E1","#E6DAE2","#E7DCE4","#E9DEE6","#EAE1E7","#EBE2E9","#EDE4EA","#EEE6EB","#EFE8ED","#F1EAEF","#F2ECF0","#F3EEF2","#F5F0F3","#F6F2F5","#F7F3F6","#F8F6F7","#FAF7F9","#FBF9FB","#FCFBFC","#FEFDFE","#000001","#050305","#0A0509","#0E090C","#130A11","#170C14","#1A0F17","#1E111A","#22141E","#251621","#291723","#2B1A26","#2F1B2A","#321D2C","#351F2F","#382131","#3C2335","#3E2537","#412639","#44293C","#472A3F","#4A2B41","#4C2E44","#502F46","#533149","#55324B","#58344E","#5A3650","#5D3753","#603855","#623B57","#653C59","#683E5C","#6A3F5E","#6D4060","#6F4362","#724465","#754567","#774769","#7A486B","#7D4A6E","#7F4B70","#824C72","#844F74","#865077","#895179","#8B537B","#8E547D","#915680","#935782","#955884","#975A86","#9A5B88","#9D5C8A","#9E5E8C","#A15F8E","#A46191","#A66293","#A86394","#AA6596","#AD6699","#AF679B","#B1699D","#B46A9E","#B66CA1","#B76EA2","#B871A4","#BA73A6","#BB76A7","#BB79A8","#BD7BAA","#BE7EAC","#C081AE","#C183AE","#C186B0","#C387B2","#C48AB4","#C58DB5","#C78FB6","#C792B8","#C994BA","#CA96BB","#CB99BC","#CD9BBE","#CD9DC0","#CEA0C1","#D0A2C2","#D1A5C4","#D2A7C6","#D3A9C7","#D4ACC8","#D6AECA","#D7B0CC","#D7B3CD","#D9B5CE","#DAB7D0","#DCBAD2","#DCBBD2","#DDBED4","#DFC0D6","#E0C2D7","#E1C5D8","#E2C7DA","#E3C9DC","#E5CCDD","#E6CDDE","#E6D0E0","#E8D2E1","#E9D4E3","#EAD7E4","#EBD8E6","#ECDBE7","#EEDDE9","#EFDFEA","#EFE1EB","#F1E3ED","#F2E6EF","#F3E8EF","#F4EAF1","#F5ECF3","#F7EFF4","#F7F0F5","#F8F3F7","#FAF4F8","#FBF7FA","#FBF9FB","#FDFBFC","#FEFDFE","#000001","#050305","#0A0509","#0F070E","#140911","#190A14","#1D0C19","#210E1B","#25111E","#271322","#2B1425","#2F1627","#32172B","#36192E","#391A30","#3D1B34","#401E36","#431F39","#46213C","#49223E","#4C2341","#502544","#532646","#562749","#592A4B","#5B2B4E","#5E2C51","#612E53","#642F55","#673058","#6A315A","#6D325D","#70355F","#723661","#753764","#783866","#7B3968","#7E3B6B","#813C6D","#843D6F","#863F72","#884074","#8B4176","#8E4379","#91447B","#93457D","#964680","#994782","#9C4985","#9D4A86","#A04B88","#A34C8B","#A64E8D","#A84F8F","#AB5092","#AE5193","#B05395","#B25498","#B5559A","#B7569C","#BA579E","#BC58A0","#BF59A3","#C15AA5","#C45CA6","#C55EA8","#C661AA","#C764AB","#C767AD","#C86AAE","#C96DAF","#CA70B1","#CC73B2","#CD75B4","#CD78B5","#CE7BB6","#CF7EB8","#D081BA","#D184BB","#D286BC","#D389BE","#D48BBF","#D58EC1","#D691C1","#D793C3","#D796C5","#D899C6","#D99CC7","#DB9EC9","#DCA0CA","#DCA3CC","#DDA6CD","#DEA8CE","#DFABD0","#E0AED2","#E1B0D2","#E2B3D4","#E3B5D6","#E4B7D7","#E5BAD8","#E6BCD9","#E6BFDB","#E7C1DC","#E8C4DD","#EAC7DF","#EAC8E1","#EBCBE1","#ECCDE3","#EDD0E5","#EED2E6","#EFD5E7","#EFD7E9","#F1DAEA","#F2DCEB","#F3DEEC","#F3E1EE","#F4E3EF","#F5E6F0","#F6E8F2","#F7EAF3","#F8EDF4","#F9EFF6","#FAF1F7","#FBF3F8","#FBF6FA","#FCF8FB","#FDFBFC","#FEFDFE","#000001","#070005","#0C0309","#11050E","#160711","#1A0916","#1E0A19","#220C1D","#270E1F","#2B0E23","#2F0F26","#32112A","#36132C","#39142F","#3D1632","#401735","#451938","#48193B","#4B1A3E","#4F1B40","#521D44","#551E46","#581F49","#5B214B","#5F224E","#622251","#652353","#682556","#6B2658","#6E275B","#71295D","#742A60","#782B62","#7B2B65","#7E2C67","#812E69","#842F6C","#86306E","#893171","#8C3273","#903476","#933478","#95357B","#98367D","#9B3780","#9D3882","#A03985","#A33B86","#A63C88","#A93C8B","#AC3D8D","#AE3E90","#B13F92","#B44094","#B64196","#B94399","#BC449B","#BF449D","#C1459F","#C446A1","#C747A4","#C948A6","#CC49A8","#CE4AAA","#D24BAD","#D24FAE","#D252AF","#D355B0","#D458B2","#D55BB3","#D65EB5","#D761B6","#D765B7","#D768B9","#D86BBA","#D96EBB","#DA71BC","#DB74BE","#DC77BF","#DC7AC1","#DD7EC1","#DD81C3","#DE84C5","#DF86C6","#E089C7","#E18CC8","#E18FCA","#E292CB","#E395CD","#E398CD","#E49BCF","#E59DD0","#E6A0D2","#E6A3D2","#E7A6D4","#E8A8D6","#E9ACD7","#E9AED8","#EAB1D9","#EAB4DB","#EBB6DC","#ECB9DD","#EDBBDE","#EEBEE0","#EFC1E1","#EFC4E2","#EFC7E4","#F0C9E5","#F1CCE6","#F2CEE7","#F3D1E9","#F3D3EA","#F4D7EB","#F4D9EC","#F5DCEE","#F6DEEF","#F7E1F0","#F7E3F2","#F8E6F3","#F9E8F4","#FAEBF5","#FAEEF7","#FBF0F7","#FBF3F9","#FCF5FA","#FDF7FB","#FEFAFC","#FFFCFE","#000001","#070005","#0C030A","#13030E","#170513","#1B0716","#21071A","#25091D","#2A0A21","#2E0A25","#310C27","#360C2B","#390E2E","#3D0F31","#410F34","#451137","#491339","#4C133D","#501440","#541443","#571646","#5A1748","#5E174B","#61194E","#651A51","#681A53","#6B1B56","#6F1B59","#721D5B","#751E5E","#791E60","#7C1F63","#802165","#832168","#86226A","#89226D","#8C2370","#8F2572","#932575","#952677","#99277A","#9C277C","#9E297F","#A22982","#A52A84","#A72B86","#AB2B88","#AE2C8B","#B12E8D","#B42E90","#B62F92","#BA2F94","#BC3097","#BF3199","#C2319C","#C5329D","#C834A0","#CB34A2","#CD35A5","#D135A6","#D336A9","#D637AC","#D937AE","#DC38B0","#DF39B2","#DF3DB4","#E040B5","#E045B6","#E148B7","#E14BB8","#E150BA","#E253BB","#E357BC","#E35ABD","#E45DBF","#E461C0","#E564C1","#E667C2","#E66BC3","#E66EC5","#E772C6","#E775C7","#E878C8","#E87CCA","#E97FCB","#EA82CD","#EA86CD","#EA88CE","#EB8CD0","#EB8FD1","#EC92D2","#EC95D3","#ED98D5","#EE9BD6","#EE9ED7","#EFA1D8","#EFA5D9","#EFA7DB","#F0AADC","#F0AEDD","#F1B0DE","#F2B3E0","#F2B6E1","#F3B9E1","#F3BCE3","#F3BFE4","#F4C1E6","#F4C5E6","#F5C7E8","#F6CAE9","#F6CDEA","#F7D0EB","#F7D3EC","#F7D6EE","#F8D8EF","#F8DCF0","#F9DEF1","#FAE1F3","#FAE4F3","#FBE6F5","#FBEAF6","#FBECF7","#FCEFF8","#FCF2F9","#FDF4FB","#FEF7FB","#FEFAFD","#FFFCFE","#000001","#070005","#0E000A","#13030E","#190313","#1E0317","#22051A","#27051E","#2C0722","#300725","#350729","#38092C","#3D092F","#410932","#450A36","#490A38","#4E0C3C","#510C3F","#550C41","#580E45","#5C0E48","#600E4A","#630F4E","#670F51","#6B1153","#6E1156","#721159","#75135B","#79135E","#7D1361","#801463","#841466","#871669","#8A166B","#8E166E","#911771","#941773","#981776","#9B1979","#9E197B","#A21A7E","#A51A81","#A81A83","#AB1B86","#AE1B88","#B21B8A","#B51D8D","#B81D90","#BB1E92","#BE1E94","#C11E97","#C41F99","#C71F9C","#CB1F9D","#CD21A0","#D121A3","#D422A5","#D722A7","#DA22AA","#DC23AC","#E023AE","#E323B1","#E625B3","#E925B5","#EC26B8","#EC2AB9","#EC2FBA","#ED32BB","#ED37BC","#ED3CBD","#EE3FBF","#EE44C0","#EF48C1","#EF4BC2","#EF50C3","#EF53C4","#EF57C6","#EF5BC7","#F05EC8","#F062C9","#F166CA","#F169CC","#F16DCD","#F270CD","#F274CF","#F278D0","#F37BD1","#F37FD2","#F383D3","#F386D4","#F389D6","#F48CD7","#F490D7","#F493D9","#F596DA","#F59ADB","#F69DDC","#F6A0DD","#F6A4DE","#F7A6E0","#F7AAE1","#F7AEE1","#F7B0E3","#F7B4E4","#F8B7E5","#F8BAE6","#F8BDE7","#F9C0E8","#F9C3EA","#F9C7EA","#FAC9EB","#FACDED","#FBD0EE","#FBD2EF","#FBD6F0","#FBD8F1","#FBDCF2","#FBDFF3","#FCE1F4","#FCE5F5","#FDE8F7","#FDEAF7","#FDEEF8","#FEF0FA","#FEF3FB","#FEF7FB","#FFF9FD","#FFFCFE","#000001","#070005","#0E000A","#14000F","#1A0014","#1F0017","#25001B","#2A001F","#2F0323","#320326","#37032A","#3C032E","#400331","#450334","#490337","#4E033B","#52053E","#550540","#590544","#5D0547","#61054A","#65054C","#690550","#6D0553","#710756","#740759","#78075B","#7C075E","#800761","#840764","#870766","#8B0769","#8F096C","#92096F","#950971","#990974","#9D0977","#A0097A","#A4097C","#A7097F","#AB0A82","#AE0A85","#B10A86","#B50A89","#B80A8C","#BB0A8F","#BF0A92","#C20A93","#C60C96","#C80C99","#CC0C9C","#CF0C9D","#D20CA0","#D60CA3","#D90CA6","#DC0CA7","#E00EAA","#E20EAD","#E60EAF","#E90EB1","#EC0EB4","#EF0EB6","#F30EB9","#F60EBB","#F90FBD","#F914BE","#F91AC0","#F91FC1","#F925C1","#F92AC2","#F92FC4","#F934C5","#FA38C6","#FA3CC7","#FA40C8","#FA45C9","#FA49CA","#FA4ECB","#FA52CD","#FA56CD","#FB5ACE","#FB5DCF","#FB61D1","#FB65D2","#FB69D2","#FB6DD3","#FB71D4","#FB75D6","#FB79D7","#FB7CD7","#FB80D8","#FB84DA","#FB87DB","#FB8BDC","#FB8FDC","#FB93DE","#FC96DF","#FC99E0","#FC9DE1","#FCA0E2","#FCA4E3","#FCA7E4","#FCABE5","#FCAEE6","#FDB2E7","#FDB5E8","#FDB8E9","#FDBBEA","#FDBFEB","#FDC2EC","#FDC6ED","#FDC9EE","#FECDEF","#FECFF0","#FED2F1","#FED6F2","#FED9F3","#FEDCF4","#FEE0F5","#FEE3F6","#FFE6F7","#FFE9F8","#FFECF9","#FFEFFA","#FFF3FB","#FFF6FC","#FFF9FD","#FFFCFE","#000001","#050305","#090709","#0C0A0C","#0F0E0F","#131113","#161416","#191719","#1D1A1B","#1F1B1E","#221E21","#252123","#272326","#2A2629","#2C292B","#2F2B2E","#322E30","#352F32","#373135","#393437","#3C3639","#3E383C","#403B3E","#433D40","#463F43","#484045","#4A4347","#4C4549","#4F474B","#51494E","#534B50","#554E52","#585054","#5A5156","#5C5358","#5E555A","#60575C","#62595F","#645B61","#665D63","#695F65","#6B6067","#6D6269","#6F646B","#71666D","#73686F","#756A71","#776C73","#7A6E75","#7C6F77","#7E7179","#80737B","#82757D","#84777F","#867981","#877B83","#8A7D85","#8C7E86","#8E8088","#90828A","#92848C","#93868E","#958790","#978992","#9A8B93","#9B8D95","#9D8F97","#9E9199","#A0939B","#A2949D","#A4969E","#A698A0","#A79BA2","#A89DA4","#AA9EA6","#ACA0A7","#AEA2A9","#AFA4AB","#B1A6AD","#B3A7AE","#B5AAB0","#B5ACB2","#B7AEB4","#B9AFB5","#BBB1B7","#BCB3B9","#BEB5BB","#C0B6BC","#C1B9BE","#C2BBC0","#C4BCC1","#C6BEC3","#C7C0C4","#C9C1C6","#CBC3C7","#CDC5C9","#CEC7CB","#CFC9CD","#D1CBCE","#D2CDD0","#D4CED2","#D6D0D3","#D7D2D5","#D9D3D7","#DBD6D8","#DCD7DA","#DDD9DC","#DFDBDD","#E1DCDF","#E2DEE1","#E4E0E2","#E6E1E4","#E7E4E6","#E8E6E7","#EAE7E9","#EBE9EA","#EDEAEC","#EFECEE","#F0EEEF","#F2EFF1","#F3F2F3","#F4F3F4","#F6F5F6","#F7F7F7","#F9F8F9","#FBFAFB","#FCFBFC","#FEFDFE","#000001","#050305","#090709","#0E090C","#110C0F","#140F13","#191116","#1B1419","#1F171B","#22191E","#251B21","#291D23","#2B1F26","#2E222A","#31232C","#34262F","#372931","#392A34","#3C2C36","#3F2E38","#41303B","#44323D","#47343F","#493641","#4C3844","#4F3947","#513C49","#543D4B","#563F4E","#584150","#5B4352","#5D4554","#604756","#624858","#644A5A","#674B5C","#694E5E","#6B5061","#6E5163","#705365","#735567","#755669","#77586B","#7A596D","#7C5B6F","#7E5D71","#815E73","#836075","#866277","#87637A","#89657C","#8C667E","#8E6880","#906A82","#936B84","#946D86","#976F87","#997089","#9B728B","#9D738D","#9F758F","#A17792","#A47893","#A67A95","#A87C97","#A97E99","#AB809B","#AC839D","#AE859D","#AF869F","#B089A1","#B28BA3","#B48EA5","#B590A6","#B692A8","#B794AA","#B996AC","#BB98AE","#BB9BAF","#BD9DB1","#BF9FB2","#C0A1B4","#C1A3B5","#C2A6B7","#C4A7B9","#C6A9BB","#C7ACBC","#C8AEBE","#CAB0C0","#CBB2C1","#CDB4C3","#CDB6C5","#CFB8C6","#D1BAC7","#D2BCC9","#D3BECB","#D5C1CD","#D6C2CE","#D7C4D0","#D8C7D2","#DAC8D3","#DCCAD5","#DCCDD7","#DECED8","#E0D1D9","#E1D2DB","#E2D4DC","#E3D7DE","#E5D8E0","#E6DAE1","#E7DCE3","#E9DEE5","#EAE1E6","#EBE2E8","#EDE4EA","#EEE6EB","#EFE8EC","#F1EAEE","#F2ECEF","#F3EEF1","#F5F0F3","#F6F2F4","#F7F3F6","#F8F6F7","#FAF7F9","#FBF9FB","#FCFBFC","#FEFDFE","#000001","#050305","#0A0509","#0E090C","#130A0F","#170C13","#1A0F16","#1E1119","#22141D","#25161F","#291722","#2B1A25","#2F1B27","#321D2A","#351F2C","#382130","#3C2332","#3E2535","#412637","#442939","#472A3C","#4A2B3E","#4C2E41","#502F44","#533146","#553248","#58344A","#5A364C","#5D374F","#603851","#623B54","#653C56","#683E58","#6A3F5A","#6D405C","#6F435E","#724460","#754563","#774765","#7A4867","#7D4A69","#7F4B6B","#824C6D","#844F6F","#865072","#895174","#8B5376","#8E5478","#91567A","#93577C","#95587E","#975A80","#9A5B83","#9D5C85","#9E5E86","#A15F88","#A4618A","#A6628C","#A8638E","#AA6591","#AD6693","#AF6794","#B16996","#B46A98","#B66C9A","#B76E9C","#B8719D","#BA739F","#BB76A1","#BB79A3","#BD7BA4","#BE7EA6","#C081A7","#C183A9","#C186AB","#C387AD","#C48AAE","#C58DAF","#C78FB1","#C792B3","#C994B5","#CA96B6","#CB99B8","#CD9BBA","#CD9DBB","#CEA0BC","#D0A2BE","#D1A5C0","#D2A7C1","#D3A9C3","#D4ACC5","#D6AEC7","#D7B0C7","#D7B3C9","#D9B5CB","#DAB7CD","#DCBACE","#DCBBD0","#DDBED2","#DFC0D2","#E0C2D4","#E1C5D6","#E2C7D7","#E3C9D9","#E5CCDB","#E6CDDC","#E6D0DE","#E8D2DF","#E9D4E1","#EAD7E2","#EBD8E4","#ECDBE6","#EEDDE7","#EFDFE9","#EFE1EA","#F1E3EB","#F2E6ED","#F3E8EF","#F4EAF0","#F5ECF2","#F7EFF3","#F7F0F4","#F8F3F6","#FAF4F7","#FBF7F9","#FBF9FB","#FDFBFC","#FEFDFE","#000001","#050305","#0A0509","#0F070C","#14090F","#190A13","#1D0C17","#210E1A","#25111D","#27131F","#2B1422","#2F1626","#321729","#36192B","#391A2E","#3D1B30","#401E34","#431F36","#462138","#49223B","#4C233D","#502540","#532643","#562745","#592A47","#5B2B49","#5E2C4B","#612E4F","#642F51","#673053","#6A3155","#6D3257","#70355A","#72365C","#75375E","#783860","#7B3962","#7E3B65","#813C67","#843D69","#863F6B","#88406D","#8B4170","#8E4372","#914474","#934576","#964678","#99477A","#9C497D","#9D4A7F","#A04B81","#A34C83","#A64E85","#A84F87","#AB5089","#AE518B","#B0538D","#B2548F","#B55592","#B75693","#BA5795","#BC5897","#BF5999","#C15A9C","#C45C9D","#C55E9F","#C661A0","#C764A2","#C767A4","#C86AA6","#C96DA7","#CA70A8","#CC73AA","#CD75AC","#CD78AE","#CE7BAF","#CF7EB0","#D081B2","#D184B4","#D286B5","#D389B7","#D48BB8","#D58EBA","#D691BB","#D793BD","#D796BF","#D899C1","#D99CC1","#DB9EC3","#DCA0C5","#DCA3C7","#DDA6C8","#DEA8C9","#DFABCB","#E0AECD","#E1B0CE","#E2B3D0","#E3B5D1","#E4B7D2","#E5BAD4","#E6BCD6","#E6BFD7","#E7C1D8","#E8C4DA","#EAC7DC","#EAC8DD","#EBCBDF","#ECCDE1","#EDD0E1","#EED2E3","#EFD5E5","#EFD7E6","#F1DAE8","#F2DCE9","#F3DEEA","#F3E1EC","#F4E3EE","#F5E6EF","#F6E8F0","#F7EAF2","#F8EDF3","#F9EFF5","#FAF1F7","#FBF3F7","#FBF6F9","#FCF8FB","#FDFBFC","#FEFDFE","#000001","#070005","#0C0309","#11050C","#16070F","#1A0914","#1E0A17","#220C1A","#270E1D","#2B0E21","#2F0F23","#321126","#361329","#39142C","#3D162F","#401731","#451934","#481937","#4B1A39","#4F1B3C","#521D3E","#551E41","#581F44","#5B2146","#5F2248","#62224B","#65234E","#682550","#6B2652","#6E2755","#712957","#742A59","#782B5B","#7B2B5E","#7E2C60","#812E62","#842F64","#863067","#893169","#8C326B","#90346D","#933470","#953572","#983674","#9B3776","#9D3879","#A0397B","#A33B7D","#A63C7F","#A93C82","#AC3D84","#AE3E86","#B13F87","#B4408A","#B6418C","#B9438E","#BC4490","#BF4493","#C14594","#C44696","#C74798","#C9489B","#CC499D","#CE4A9E","#D24BA0","#D24FA2","#D252A4","#D355A6","#D458A6","#D55BA8","#D65EAA","#D761AC","#D765AD","#D768AE","#D86BB0","#D96EB2","#DA71B3","#DB74B5","#DC77B6","#DC7AB8","#DD7EB9","#DD81BB","#DE84BC","#DF86BE","#E089BF","#E18CC1","#E18FC2","#E292C4","#E395C5","#E398C7","#E49BC8","#E59DCA","#E6A0CB","#E6A3CD","#E7A6CE","#E8A8D0","#E9ACD1","#E9AED2","#EAB1D4","#EAB4D6","#EBB6D7","#ECB9D8","#EDBBDA","#EEBEDC","#EFC1DC","#EFC4DE","#EFC7E0","#F0C9E1","#F1CCE2","#F2CEE4","#F3D1E6","#F3D3E7","#F4D7E8","#F4D9EA","#F5DCEB","#F6DEED","#F7E1EE","#F7E3EF","#F8E6F1","#F9E8F3","#FAEBF3","#FAEEF5","#FBF0F7","#FBF3F8","#FCF5F9","#FDF7FB","#FEFAFC","#FFFCFE","#000001","#070005","#0C0309","#13030C","#170511","#1B0714","#210717","#25091B","#2A0A1E","#2E0A21","#310C25","#360C27","#390E2A","#3D0F2C","#410F30","#451132","#491335","#4C1338","#50143B","#54143D","#571640","#5A1743","#5E1745","#611947","#651A4A","#681A4C","#6B1B4F","#6F1B52","#721D54","#751E56","#791E59","#7C1F5B","#80215D","#83215F","#862262","#892264","#8C2366","#8F2569","#93256B","#95266D","#992770","#9C2772","#9E2974","#A22976","#A52A79","#A72B7B","#AB2B7D","#AE2C80","#B12E82","#B42E84","#B62F86","#BA2F88","#BC308A","#BF318C","#C2318F","#C53291","#C83493","#CB3495","#CD3597","#D13599","#D3369C","#D6379D","#D9379F","#DC38A1","#DF39A4","#DF3DA5","#E040A6","#E045A8","#E148AA","#E14BAB","#E150AD","#E253AE","#E357AF","#E35AB1","#E45DB3","#E461B4","#E564B5","#E667B7","#E66BB9","#E66EBA","#E772BB","#E775BD","#E878BE","#E87CC0","#E97FC1","#EA82C2","#EA86C4","#EA88C6","#EB8CC7","#EB8FC8","#EC92CA","#EC95CC","#ED98CD","#EE9BCE","#EE9ED0","#EFA1D1","#EFA5D2","#EFA7D4","#F0AAD6","#F0AED7","#F1B0D8","#F2B3DA","#F2B6DB","#F3B9DC","#F3BCDE","#F3BFDF","#F4C1E1","#F4C5E2","#F5C7E4","#F6CAE5","#F6CDE6","#F7D0E8","#F7D3E9","#F7D6EA","#F8D8EC","#F8DCED","#F9DEEF","#FAE1F0","#FAE4F2","#FBE6F3","#FBEAF4","#FBECF6","#FCEFF7","#FCF2F8","#FDF4FA","#FEF7FB","#FEFAFC","#FFFCFE","#000001","#070005","#0E0009","#13030E","#190311","#1E0314","#220519","#27051B","#2C071E","#300722","#350725","#380927","#3D092B","#41092E","#450A30","#490A34","#4E0C36","#510C39","#550C3C","#580E3E","#5C0E41","#600E44","#630F46","#670F49","#6B114B","#6E114E","#721151","#751353","#791355","#7D1358","#80145A","#84145D","#87165F","#8A1661","#8E1664","#911766","#941768","#98176B","#9B196D","#9E196F","#A21A72","#A51A74","#A81A76","#AB1B79","#AE1B7B","#B21B7D","#B51D80","#B81D82","#BB1E85","#BE1E86","#C11E88","#C41F8B","#C71F8D","#CB1F8F","#CD2192","#D12193","#D42295","#D72298","#DA229A","#DC239C","#E0239E","#E323A0","#E625A3","#E925A5","#EC26A6","#EC2AA8","#EC2FAA","#ED32AB","#ED37AD","#ED3CAE","#EE3FAF","#EE44B1","#EF48B2","#EF4BB4","#EF50B5","#EF53B6","#EF57B8","#EF5BBA","#F05EBB","#F062BC","#F166BE","#F169BF","#F16DC1","#F270C1","#F274C3","#F278C5","#F37BC6","#F37FC7","#F383C9","#F386CA","#F389CC","#F48CCD","#F490CE","#F493D0","#F596D2","#F59AD2","#F69DD4","#F6A0D6","#F6A4D7","#F7A6D8","#F7AAD9","#F7AEDB","#F7B0DC","#F7B4DD","#F8B7DF","#F8BAE1","#F8BDE1","#F9C0E3","#F9C3E5","#F9C7E6","#FAC9E7","#FACDE9","#FBD0EA","#FBD2EB","#FBD6EC","#FBD8EE","#FBDCEF","#FBDFF0","#FCE1F2","#FCE5F3","#FDE8F4","#FDEAF6","#FDEEF7","#FEF0F8","#FEF3FA","#FEF7FB","#FFF9FC","#FFFCFE","#000001","#070005","#0E0009","#14000E","#1A0011","#1F0016","#250019","#2A001B","#2F031F","#320322","#370326","#3C0329","#40032B","#45032F","#490331","#4E0335","#520537","#550539","#59053D","#5D053F","#610543","#650545","#690548","#6D054A","#71074C","#740750","#780752","#7C0755","#800757","#840759","#87075C","#8B075E","#8F0961","#920963","#950965","#990968","#9D096A","#A0096D","#A4096F","#A70971","#AB0A74","#AE0A76","#B10A79","#B50A7B","#B80A7E","#BB0A80","#BF0A82","#C20A85","#C60C86","#C80C89","#CC0C8B","#CF0C8D","#D20C90","#D60C92","#D90C94","#DC0C96","#E00E98","#E20E9B","#E60E9D","#E90E9F","#EC0EA1","#EF0EA4","#F30EA6","#F60EA7","#F90FAA","#F914AB","#F91AAD","#F91FAE","#F925AF","#F92AB1","#F92FB2","#F934B4","#FA38B5","#FA3CB6","#FA40B8","#FA45B9","#FA49BB","#FA4EBB","#FA52BD","#FA56BF","#FB5AC0","#FB5DC1","#FB61C2","#FB65C4","#FB69C6","#FB6DC7","#FB71C8","#FB75C9","#FB79CB","#FB7CCC","#FB80CD","#FB84CF","#FB87D0","#FB8BD2","#FB8FD2","#FB93D4","#FC96D6","#FC99D7","#FC9DD8","#FCA0D9","#FCA4DB","#FCA7DC","#FCABDD","#FCAEDF","#FDB2E0","#FDB5E1","#FDB8E3","#FDBBE4","#FDBFE6","#FDC2E6","#FDC6E8","#FDC9E9","#FECDEA","#FECFEC","#FED2ED","#FED6EF","#FED9EF","#FEDCF1","#FEE0F3","#FEE3F3","#FFE6F5","#FFE9F6","#FFECF7","#FFEFF9","#FFF3FA","#FFF6FB","#FFF9FC","#FFFCFE","#000001","#050305","#090709","#0C0A0C","#0F0E0F","#131113","#161416","#191719","#1D1A1B","#1F1B1E","#221E21","#252123","#272326","#2A2629","#2C292B","#2F2B2E","#322E30","#352F32","#373135","#393437","#3C3639","#3E383C","#403B3E","#433D40","#463F43","#484045","#4A4347","#4C4549","#4F474B","#51494E","#534B50","#554E52","#585054","#5A5156","#5C5358","#5E555A","#60575C","#62595E","#645B60","#665D62","#695F64","#6B6066","#6D6268","#6F646A","#71666C","#73686E","#756A70","#776C72","#7A6E74","#7C6F76","#7E7178","#80737A","#82757C","#84777E","#867980","#877B82","#8A7D84","#8C7E86","#8E8087","#908289","#92848B","#93868D","#95878F","#978991","#9A8B93","#9B8D94","#9D8F96","#9E9198","#A0939A","#A2949C","#A4969D","#A6989F","#A79BA1","#A89DA3","#AA9EA5","#ACA0A6","#AEA2A8","#AFA4AA","#B1A6AC","#B3A7AE","#B5AAAF","#B5ACB1","#B7AEB3","#B9AFB5","#BBB1B6","#BCB3B8","#BEB5BA","#C0B6BB","#C1B9BD","#C2BBBF","#C4BCC1","#C6BEC2","#C7C0C4","#C9C1C6","#CBC3C7","#CDC5C9","#CEC7CB","#CFC9CD","#D1CBCE","#D2CDD0","#D4CED2","#D6D0D3","#D7D2D5","#D9D3D7","#DBD6D8","#DCD7DA","#DDD9DC","#DFDBDD","#E1DCDF","#E2DEE1","#E4E0E2","#E6E1E4","#E7E4E6","#E8E6E7","#EAE7E9","#EBE9EA","#EDEAEC","#EFECEE","#F0EEEF","#F2EFF1","#F3F2F3","#F4F3F4","#F6F5F6","#F7F7F7","#F9F8F9","#FBFAFB","#FCFBFC","#FEFDFE","#000001","#050305","#090709","#0E090C","#110C0F","#140F13","#191116","#1B1419","#1F171B","#22191E","#251B21","#291D23","#2B1F26","#2E2229","#31232B","#34262E","#372930","#392A32","#3C2C35","#3F2E37","#413039","#44323C","#47343E","#493640","#4C3843","#4F3945","#513C47","#543D49","#563F4B","#58414E","#5B4350","#5D4552","#604754","#624856","#644A58","#674B5A","#694E5C","#6B505E","#6E5160","#705362","#735564","#755666","#775868","#7A596A","#7C5B6C","#7E5D6E","#815E70","#836072","#866274","#876376","#896578","#8C667A","#8E687C","#906A7E","#936B80","#946D82","#976F84","#997086","#9B7287","#9D7389","#9F758B","#A1778D","#A4788F","#A67A91","#A87C93","#A97E94","#AB8096","#AC8398","#AE859A","#AF869C","#B0899D","#B28B9F","#B48EA1","#B590A3","#B692A5","#B794A6","#B996A8","#BB98AA","#BB9BAC","#BD9DAE","#BF9FAF","#C0A1B1","#C1A3B3","#C2A6B5","#C4A7B6","#C6A9B8","#C7ACBA","#C8AEBB","#CAB0BD","#CBB2BF","#CDB4C1","#CDB6C2","#CFB8C4","#D1BAC6","#D2BCC7","#D3BEC9","#D5C1CB","#D6C2CD","#D7C4CE","#D8C7D0","#DAC8D2","#DCCAD3","#DCCDD5","#DECED7","#E0D1D8","#E1D2DA","#E2D4DC","#E3D7DD","#E5D8DF","#E6DAE1","#E7DCE2","#E9DEE4","#EAE1E6","#EBE2E7","#EDE4E9","#EEE6EA","#EFE8EC","#F1EAEE","#F2ECEF","#F3EEF1","#F5F0F3","#F6F2F4","#F7F3F6","#F8F6F7","#FAF7F9","#FBF9FB","#FCFBFC","#FEFDFE","#000001","#050305","#0A0509","#0E090C","#130A0F","#170C13","#1A0F16","#1E1119","#22141B","#25161E","#291721","#2B1A23","#2F1B26","#321D29","#351F2B","#38212E","#3C2330","#3E2532","#412635","#442937","#472A39","#4A2B3C","#4C2E3E","#502F40","#533143","#553245","#583447","#5A3649","#5D374B","#60384E","#623B50","#653C52","#683E54","#6A3F56","#6D4058","#6F435A","#72445C","#75455E","#774760","#7A4862","#7D4A64","#7F4B66","#824C68","#844F6A","#86506C","#89516E","#8B5370","#8E5472","#915674","#935776","#955878","#975A7A","#9A5B7D","#9D5C7F","#9E5E81","#A15F83","#A46185","#A66286","#A86388","#AA658A","#AD668C","#AF678E","#B16990","#B46A92","#B66C93","#B76E95","#B87197","#BA7399","#BB769B","#BB799D","#BD7B9E","#BE7EA0","#C081A2","#C183A4","#C186A6","#C387A7","#C48AA9","#C58DAA","#C78FAC","#C792AE","#C994AF","#CA96B1","#CB99B3","#CD9BB5","#CD9DB6","#CEA0B8","#D0A2BA","#D1A5BB","#D2A7BD","#D3A9BF","#D4ACC1","#D6AEC2","#D7B0C4","#D7B3C6","#D9B5C7","#DAB7C9","#DCBACB","#DCBBCD","#DDBECE","#DFC0D0","#E0C2D2","#E1C5D3","#E2C7D5","#E3C9D7","#E5CCD8","#E6CDDA","#E6D0DC","#E8D2DD","#E9D4DF","#EAD7E1","#EBD8E2","#ECDBE4","#EEDDE6","#EFDFE7","#EFE1E9","#F1E3EA","#F2E6EC","#F3E8EE","#F4EAEF","#F5ECF1","#F7EFF3","#F7F0F4","#F8F3F6","#FAF4F7","#FBF7F9","#FBF9FB","#FDFBFC","#FEFDFE","#000001","#050305","#0A0509","#0F070C","#14090F","#190A13","#1D0C16","#210E19","#25111B","#27131E","#2B1421","#2F1623","#321726","#361929","#391A2B","#3D1B2E","#401E30","#431F32","#462135","#492237","#4C2339","#50253C","#53263E","#562740","#592A43","#5B2B45","#5E2C47","#612E49","#642F4B","#67304E","#6A3150","#6D3252","#703554","#723656","#753758","#78385A","#7B395C","#7E3B5F","#813C61","#843D63","#863F65","#884067","#8B4169","#8E436B","#91446D","#93456F","#964671","#994773","#9C4975","#9D4A77","#A04B79","#A34C7B","#A64E7D","#A84F7F","#AB5081","#AE5183","#B05385","#B25486","#B55588","#B7568A","#BA578C","#BC588E","#BF5990","#C15A92","#C45C93","#C55E95","#C66197","#C76499","#C7679B","#C86A9D","#C96D9E","#CA70A0","#CC73A2","#CD75A4","#CD78A6","#CE7BA7","#CF7EA9","#D081AB","#D184AD","#D286AE","#D389B0","#D48BB2","#D58EB4","#D691B5","#D793B7","#D796B9","#D899BB","#D99CBC","#DB9EBE","#DCA0C0","#DCA3C1","#DDA6C3","#DEA8C4","#DFABC6","#E0AEC7","#E1B0C9","#E2B3CB","#E3B5CD","#E4B7CE","#E5BAD0","#E6BCD2","#E6BFD3","#E7C1D5","#E8C4D7","#EAC7D8","#EAC8DA","#EBCBDC","#ECCDDD","#EDD0DF","#EED2E1","#EFD5E2","#EFD7E4","#F1DAE6","#F2DCE7","#F3DEE9","#F3E1EA","#F4E3EC","#F5E6EE","#F6E8EF","#F7EAF1","#F8EDF3","#F9EFF4","#FAF1F6","#FBF3F7","#FBF6F9","#FCF8FB","#FDFBFC","#FEFDFE","#000001","#070005","#0C0309","#11050C","#16070F","#1A0913","#1E0A16","#220C19","#270E1B","#2B0E1E","#2F0F21","#321123","#361326","#391429","#3D162B","#40172E","#451930","#481932","#4B1A35","#4F1B37","#521D39","#551E3C","#581F3E","#5B2140","#5F2243","#622245","#652347","#682549","#6B264B","#6E274F","#712951","#742A53","#782B55","#7B2B57","#7E2C59","#812E5B","#842F5D","#86305F","#893161","#8C3263","#903465","#933467","#953569","#98366B","#9B376D","#9D386F","#A03971","#A33B73","#A63C75","#A93C77","#AC3D79","#AE3E7B","#B13F7D","#B4407F","#B64181","#B94383","#BC4485","#BF4487","#C14589","#C4468B","#C7478D","#C9488F","#CC4991","#CE4A93","#D24B94","#D24F96","#D25298","#D3559A","#D4589C","#D55B9D","#D65E9F","#D761A1","#D765A2","#D768A4","#D86BA6","#D96EA7","#DA71A9","#DB74AB","#DC77AD","#DC7AAE","#DD7EB0","#DD81B2","#DE84B4","#DF86B5","#E089B7","#E18CB9","#E18FBB","#E292BC","#E395BE","#E398C0","#E49BC1","#E59DC3","#E6A0C5","#E6A3C7","#E7A6C8","#E8A8CA","#E9ACCC","#E9AECD","#EAB1CF","#EAB4D1","#EBB6D2","#ECB9D3","#EDBBD5","#EEBED7","#EFC1D8","#EFC4DA","#EFC7DC","#F0C9DD","#F1CCDF","#F2CEE1","#F3D1E2","#F3D3E4","#F4D7E6","#F4D9E7","#F5DCE9","#F6DEEA","#F7E1EC","#F7E3EE","#F8E6EF","#F9E8F1","#FAEBF3","#FAEEF4","#FBF0F6","#FBF3F7","#FCF5F9","#FDF7FB","#FEFAFC","#FFFCFE","#000001","#070005","#0C0309","#13030C","#17050F","#1B0713","#210716","#250919","#2A0A1B","#2E0A1E","#310C21","#360C23","#390E26","#3D0F29","#410F2B","#45112E","#491330","#4C1332","#501435","#541437","#571639","#5A173C","#5E173E","#611940","#651A44","#681A46","#6B1B48","#6F1B4A","#721D4C","#751E4F","#791E51","#7C1F53","#802155","#832157","#862259","#89225B","#8C235D","#8F255F","#932561","#952663","#992765","#9C2767","#9E2969","#A2296B","#A52A6D","#A72B6F","#AB2B71","#AE2C74","#B12E76","#B42E78","#B62F7A","#BA2F7C","#BC307E","#BF3180","#C23182","#C53284","#C83486","#CB3487","#CD3589","#D1358B","#D3368D","#D6378F","#D93791","#DC3893","#DF3994","#DF3D96","#E04098","#E0459A","#E1489C","#E14B9D","#E1509F","#E253A1","#E357A3","#E35AA5","#E45DA6","#E461A8","#E564AA","#E667AC","#E66BAE","#E66EAF","#E772B1","#E775B3","#E878B4","#E87CB5","#E97FB7","#EA82B9","#EA86BB","#EA88BC","#EB8CBE","#EB8FC0","#EC92C1","#EC95C3","#ED98C5","#EE9BC7","#EE9EC8","#EFA1CA","#EFA5CC","#EFA7CD","#F0AACF","#F0AED1","#F1B0D2","#F2B3D4","#F2B6D6","#F3B9D7","#F3BCD9","#F3BFDA","#F4C1DC","#F4C5DD","#F5C7DF","#F6CAE1","#F6CDE2","#F7D0E4","#F7D3E6","#F7D6E7","#F8D8E9","#F8DCEA","#F9DEEC","#FAE1EE","#FAE4EF","#FBE6F1","#FBEAF3","#FBECF4","#FCEFF6","#FCF2F7","#FDF4F9","#FEF7FB","#FEFAFC","#FFFCFE","#000001","#070005","#0E0009","#13030C","#19030F","#1E0313","#220516","#270519","#2C071B","#30071E","#350721","#380923","#3D0926","#410929","#450A2B","#490A2E","#4E0C30","#510C32","#550C35","#580E37","#5C0E3B","#600E3D","#630F3F","#670F41","#6B1144","#6E1146","#721148","#75134A","#79134C","#7D134F","#801451","#841453","#871655","#8A1657","#8E1659","#91175B","#94175D","#98175F","#9B1961","#9E1963","#A21A66","#A51A68","#A81A6A","#AB1B6C","#AE1B6E","#B21B70","#B51D72","#B81D74","#BB1E76","#BE1E78","#C11E7A","#C41F7C","#C71F7E","#CB1F80","#CD2182","#D12184","#D42286","#D72287","#DA2289","#DC238B","#E0238E","#E32390","#E62592","#E92593","#EC2695","#EC2A97","#EC2F99","#ED329B","#ED379D","#ED3C9D","#EE3F9F","#EE44A1","#EF48A3","#EF4BA5","#EF50A6","#EF53A8","#EF57AA","#EF5BAC","#F05EAE","#F062AF","#F166B1","#F169B3","#F16DB5","#F270B6","#F274B8","#F278BA","#F37BBB","#F37FBD","#F383BF","#F386C0","#F389C1","#F48CC3","#F490C5","#F493C7","#F596C8","#F59ACA","#F69DCC","#F6A0CD","#F6A4CF","#F7A6D1","#F7AAD2","#F7AED4","#F7B0D6","#F7B4D7","#F8B7D9","#F8BADB","#F8BDDC","#F9C0DE","#F9C3E0","#F9C7E1","#FAC9E2","#FACDE4","#FBD0E6","#FBD2E7","#FBD6E9","#FBD8EA","#FBDCEC","#FBDFEE","#FCE1EF","#FCE5F1","#FDE8F3","#FDEAF4","#FDEEF6","#FEF0F7","#FEF3F9","#FEF7FB","#FFF9FC","#FFFCFE","#000001","#070005","#0E0009","#14000C","#1A000F","#1F0013","#250016","#2A0019","#2F031B","#32031E","#370321","#3C0323","#400326","#450329","#49032B","#4E032E","#520530","#550532","#590536","#5D0538","#61053B","#65053D","#69053F","#6D0541","#710744","#740746","#780748","#7C074A","#80074C","#84074F","#870751","#8B0753","#8F0955","#920957","#950959","#99095C","#9D095E","#A00960","#A40962","#A70964","#AB0A66","#AE0A68","#B10A6A","#B50A6C","#B80A6E","#BB0A70","#BF0A72","#C20A74","#C60C76","#C80C78","#CC0C7A","#CF0C7C","#D20C7F","#D60C81","#D90C83","#DC0C85","#E00E86","#E20E88","#E60E8A","#E90E8C","#EC0E8E","#EF0E90","#F30E92","#F60E93","#F90F95","#F91497","#F91A99","#F91F9B","#F9259D","#F92A9E","#F92FA0","#F934A2","#FA38A4","#FA3CA6","#FA40A7","#FA45A9","#FA49AB","#FA4EAC","#FA52AE","#FA56AF","#FB5AB1","#FB5DB3","#FB61B5","#FB65B6","#FB69B8","#FB6DBA","#FB71BB","#FB75BD","#FB79BF","#FB7CC1","#FB80C2","#FB84C4","#FB87C6","#FB8BC7","#FB8FC8","#FB93CA","#FC96CC","#FC99CD","#FC9DCF","#FCA0D1","#FCA4D2","#FCA7D4","#FCABD6","#FCAED7","#FDB2D9","#FDB5DB","#FDB8DC","#FDBBDE","#FDBFE0","#FDC2E1","#FDC6E3","#FDC9E4","#FECDE6","#FECFE7","#FED2E9","#FED6EA","#FED9EC","#FEDCEE","#FEE0EF","#FEE3F1","#FFE6F3","#FFE9F4","#FFECF6","#FFEFF7","#FFF3F9","#FFF6FB","#FFF9FC","#FFFCFE","#000001","#050303","#090707","#0C0A0A","#0F0E0E","#131111","#161414","#191717","#1D1A1A","#1F1B1D","#221E1F","#252122","#272325","#2A2627","#2C292A","#2F2B2C","#322E2F","#352F31","#373134","#393436","#3C3638","#3E383B","#403B3D","#433D3F","#463F41","#484044","#4A4346","#4C4548","#4F474A","#51494C","#534B4F","#554E51","#585053","#5A5155","#5C5357","#5E5559","#60575B","#62595D","#645B5F","#665D61","#695F63","#6B6065","#6D6267","#6F6469","#71666B","#73686D","#756A6F","#776C71","#7A6E73","#7C6F75","#7E7177","#807379","#82757A","#84777C","#86797E","#877B80","#8A7D82","#8C7E84","#8E8086","#908287","#928489","#93868B","#95878D","#97898F","#9A8B91","#9B8D93","#9D8F94","#9E9196","#A09398","#A2949A","#A4969C","#A6989D","#A79B9F","#A89DA1","#AA9EA3","#ACA0A5","#AEA2A6","#AFA4A9","#B1A6AB","#B3A7AD","#B5AAAE","#B5ACB0","#B7AEB2","#B9AFB4","#BBB1B5","#BCB3B7","#BEB5B9","#C0B6BB","#C1B9BC","#C2BBBE","#C4BCC0","#C6BEC1","#C7C0C3","#C9C1C5","#CBC3C7","#CDC5C8","#CEC7CA","#CFC9CC","#D1CBCD","#D2CDCF","#D4CED1","#D6D0D2","#D7D2D4","#D9D3D6","#DBD6D7","#DCD7D9","#DDD9DB","#DFDBDC","#E1DCDE","#E2DEE0","#E4E0E1","#E6E1E3","#E7E4E5","#E8E6E6","#EAE7E8","#EBE9EA","#EDEAEB","#EFECED","#F0EEEF","#F2EFF0","#F3F2F2","#F4F3F3","#F6F5F5","#F7F7F7","#F9F8F8","#FBFAFA","#FCFBFB","#FEFDFD","#000001","#050303","#090707","#0E090A","#110C0E","#140F11","#191114","#1B1417","#1F171A","#22191D","#251B1F","#291D22","#2B1F25","#2E2227","#31232A","#34262C","#37292F","#392A31","#3C2C32","#3F2E35","#413037","#443239","#47343C","#49363E","#4C3840","#4F3943","#513C45","#543D47","#563F49","#58414B","#5B434E","#5D4550","#604752","#624854","#644A56","#674B57","#694E59","#6B505B","#6E515D","#70535F","#735561","#755663","#775865","#7A5967","#7C5B69","#7E5D6B","#815E6D","#83606F","#866271","#876373","#896575","#8C6677","#8E6878","#906A7A","#936B7C","#946D7E","#976F80","#997082","#9B7284","#9D7386","#9F7587","#A17789","#A4788B","#A67A8D","#A87C8F","#A97E91","#AB8093","#AC8394","#AE8596","#AF8698","#B0899A","#B28B9C","#B48E9D","#B5909F","#B692A1","#B794A3","#B996A5","#BB98A7","#BB9BA9","#BD9DAB","#BF9FAD","#C0A1AE","#C1A3B0","#C2A6B2","#C4A7B4","#C6A9B5","#C7ACB7","#C8AEB9","#CAB0BB","#CBB2BC","#CDB4BE","#CDB6C0","#CFB8C1","#D1BAC3","#D2BCC6","#D3BEC7","#D5C1C9","#D6C2CB","#D7C4CD","#D8C7CE","#DAC8D0","#DCCAD2","#DCCDD3","#DECED5","#E0D1D7","#E1D2D8","#E2D4DA","#E3D7DC","#E5D8DD","#E6DADF","#E7DCE1","#E9DEE3","#EAE1E5","#EBE2E6","#EDE4E8","#EEE6EA","#EFE8EB","#F1EAED","#F2ECEF","#F3EEF0","#F5F0F2","#F6F2F3","#F7F3F5","#F8F6F7","#FAF7F8","#FBF9FA","#FCFBFB","#FEFDFD","#000001","#050303","#0A0507","#0E090A","#130A0E","#170C11","#1A0F14","#1E1117","#22141A","#25161D","#29171F","#2B1A21","#2F1B23","#321D26","#351F29","#38212B","#3C232E","#3E2530","#412632","#442935","#472A37","#4A2B38","#4C2E3B","#502F3D","#53313F","#553241","#583444","#5A3646","#5D3748","#60384A","#623B4C","#653C4E","#683E50","#6A3F52","#6D4054","#6F4356","#724458","#75455A","#77475C","#7A485E","#7D4A60","#7F4B61","#824C63","#844F65","#865067","#895169","#8B536B","#8E546D","#91566F","#935771","#955873","#975A75","#9A5B76","#9D5C78","#9E5E7A","#A15F7C","#A4617E","#A66280","#A86382","#AA6584","#AD6686","#AF6787","#B16988","#B46A8A","#B66C8C","#B76E8E","#B87190","#BA7393","#BB7694","#BB7996","#BD7B98","#BE7E9A","#C0819C","#C1839D","#C1869F","#C387A1","#C48AA3","#C58DA6","#C78FA7","#C792A9","#C994AB","#CA96AD","#CB99AE","#CD9BB0","#CD9DB2","#CEA0B4","#D0A2B5","#D1A5B7","#D2A7BA","#D3A9BB","#D4ACBD","#D6AEBF","#D7B0C1","#D7B3C2","#D9B5C4","#DAB7C6","#DCBAC7","#DCBBC9","#DDBECC","#DFC0CD","#E0C2CF","#E1C5D1","#E2C7D2","#E3C9D4","#E5CCD6","#E6CDD7","#E6D0D9","#E8D2DB","#E9D4DD","#EAD7DF","#EBD8E1","#ECDBE2","#EEDDE4","#EFDFE6","#EFE1E7","#F1E3E9","#F2E6EA","#F3E8EC","#F4EAEF","#F5ECF0","#F7EFF2","#F7F0F3","#F8F3F5","#FAF4F7","#FBF7F8","#FBF9FA","#FDFBFB","#FEFDFD","#000001","#050303","#0A0507","#0F070A","#14090E","#190A11","#1D0C14","#210E17","#251119","#27131B","#2B141E","#2F1621","#321723","#361926","#391A29","#3D1B2A","#401E2C","#431F2F","#462131","#492234","#4C2336","#502538","#532639","#56273C","#592A3E","#5B2B40","#5E2C43","#612E45","#642F47","#673049","#6A314A","#6D324C","#70354F","#723651","#753753","#783855","#7B3957","#7E3B58","#813C5A","#843D5C","#863F5E","#884060","#8B4162","#8E4364","#914465","#934567","#964669","#99476B","#9C496D","#9D4A6F","#A04B71","#A34C73","#A64E74","#A84F76","#AB5078","#AE517A","#B0537C","#B2547E","#B55580","#B75681","#BA5783","#BC5885","#BF5986","#C15A88","#C45C8A","#C55E8C","#C6618E","#C76490","#C76792","#C86A93","#C96D96","#CA7098","#CC739A","#CD759C","#CD789D","#CE7B9F","#CF7EA1","#D081A4","#D184A6","#D286A7","#D389A9","#D48BAB","#D58EAD","#D691AE","#D793B0","#D796B3","#D899B5","#D99CB6","#DB9EB8","#DCA0BA","#DCA3BB","#DDA6BD","#DEA8C0","#DFABC1","#E0AEC3","#E1B0C5","#E2B3C7","#E3B5C8","#E4B7CA","#E5BACD","#E6BCCE","#E6BFD0","#E7C1D2","#E8C4D3","#EAC7D5","#EAC8D7","#EBCBD8","#ECCDDB","#EDD0DC","#EED2DE","#EFD5E0","#EFD7E1","#F1DAE3","#F2DCE5","#F3DEE7","#F3E1E9","#F4E3EA","#F5E6EC","#F6E8EE","#F7EAEF","#F8EDF1","#F9EFF3","#FAF1F5","#FBF3F7","#FBF6F8","#FCF8FA","#FDFBFB","#FEFDFD","#000001","#070003","#0C0307","#11050A","#16070E","#1A0911","#1E0A13","#220C16","#270E19","#2B0E1B","#2F0F1E","#321121","#361322","#391425","#3D1627","#40172A","#45192C","#48192F","#4B1A30","#4F1B32","#521D35","#551E37","#581F39","#5B213B","#5F223D","#62223F","#652341","#682544","#6B2646","#6E2747","#712949","#742A4B","#782B4E","#7B2B50","#7E2C52","#812E53","#842F55","#863057","#893159","#8C325B","#90345C","#93345E","#953560","#983662","#9B3764","#9D3866","#A03967","#A33B69","#A63C6B","#A93C6D","#AC3D6F","#AE3E71","#B13F72","#B44074","#B64176","#B94378","#BC447A","#BF447B","#C1457D","#C4467F","#C74781","#C94883","#CC4985","#CE4A86","#D24B87","#D24F89","#D2528C","#D3558E","#D45890","#D55B92","#D65E93","#D76195","#D76598","#D7689A","#D86B9C","#D96E9D","#DA719F","#DB74A2","#DC77A4","#DC7AA6","#DD7EA7","#DD81A9","#DE84AB","#DF86AE","#E089AF","#E18CB1","#E18FB3","#E292B5","#E395B6","#E398B9","#E49BBB","#E59DBC","#E6A0BE","#E6A3C0","#E7A6C2","#E8A8C4","#E9ACC6","#E9AEC7","#EAB1C9","#EAB4CB","#EBB6CD","#ECB9CF","#EDBBD1","#EEBED2","#EFC1D4","#EFC4D6","#EFC7D8","#F0C9DA","#F1CCDC","#F2CEDD","#F3D1DF","#F3D3E1","#F4D7E3","#F4D9E5","#F5DCE6","#F6DEE8","#F7E1EA","#F7E3EC","#F8E6EE","#F9E8EF","#FAEBF1","#FAEEF3","#FBF0F4","#FBF3F7","#FCF5F8","#FDF7FA","#FEFAFB","#FFFCFD","#000001","#070003","#0C0307","#13030A","#17050E","#1B070F","#210713","#250916","#2A0A19","#2E0A1B","#310C1D","#360C1F","#390E22","#3D0F25","#410F26","#451129","#49132B","#4C132E","#501430","#541431","#571634","#5A1736","#5E1738","#61193B","#651A3C","#681A3E","#6B1B40","#6F1B43","#721D44","#751E46","#791E48","#7C1F4A","#80214C","#83214E","#862250","#892252","#8C2354","#8F2556","#932557","#952659","#99275B","#9C275D","#9E295E","#A22960","#A52A62","#A72B64","#AB2B66","#AE2C67","#B12E69","#B42E6B","#B62F6D","#BA2F6F","#BC3070","#BF3172","#C23174","#C53276","#C83477","#CB3479","#CD357B","#D1357D","#D3367F","#D63780","#D93782","#DC3884","#DF3986","#DF3D87","#E04089","#E0458B","#E1488E","#E14B90","#E15092","#E25393","#E35795","#E35A98","#E45D9A","#E4619C","#E5649D","#E667A0","#E66BA2","#E66EA4","#E772A6","#E775A7","#E878AA","#E87CAC","#E97FAE","#EA82AF","#EA86B1","#EA88B4","#EB8CB5","#EB8FB7","#EC92B9","#EC95BB","#ED98BD","#EE9BBF","#EE9EC1","#EFA1C2","#EFA5C5","#EFA7C7","#F0AAC8","#F0AECA","#F1B0CC","#F2B3CE","#F2B6D0","#F3B9D2","#F3BCD3","#F3BFD6","#F4C1D7","#F4C5D9","#F5C7DB","#F6CADC","#F6CDDF","#F7D0E1","#F7D3E2","#F7D6E4","#F8D8E6","#F8DCE8","#F9DEEA","#FAE1EB","#FAE4ED","#FBE6EF","#FBEAF1","#FBECF3","#FCEFF4","#FCF2F6","#FDF4F8","#FEF7FA","#FEFAFB","#FFFCFD","#000001","#070003","#0E0007","#13030A","#19030C","#1E030F","#220513","#270516","#2C0717","#30071A","#35071D","#38091F","#3D0921","#410923","#450A26","#490A29","#4E0C2A","#510C2C","#550C2F","#580E31","#5C0E32","#600E35","#630F37","#670F39","#6B113B","#6E113D","#72113F","#751341","#791343","#7D1345","#801447","#841449","#87164A","#8A164C","#8E164F","#911751","#941752","#981754","#9B1956","#9E1958","#A21A59","#A51A5B","#A81A5D","#AB1B5F","#AE1B60","#B21B62","#B51D64","#B81D66","#BB1E67","#BE1E69","#C11E6B","#C41F6D","#C71F6E","#CB1F70","#CD2172","#D12174","#D42275","#D72277","#DA2279","#DC237B","#E0237C","#E3237E","#E62580","#E92582","#EC2683","#EC2A86","#EC2F87","#ED3289","#ED378B","#ED3C8E","#EE3F90","#EE4492","#EF4893","#EF4B96","#EF5098","#EF539A","#EF579C","#EF5B9E","#F05EA0","#F062A2","#F166A4","#F169A6","#F16DA8","#F270AA","#F274AC","#F278AE","#F37BB0","#F37FB2","#F383B4","#F386B6","#F389B8","#F48CBA","#F490BB","#F493BE","#F596C0","#F59AC1","#F69DC3","#F6A0C6","#F6A4C7","#F7A6C9","#F7AACB","#F7AECD","#F7B0CF","#F7B4D1","#F8B7D2","#F8BAD5","#F8BDD7","#F9C0D8","#F9C3DA","#F9C7DC","#FAC9DE","#FACDE0","#FBD0E1","#FBD2E4","#FBD6E6","#FBD8E7","#FBDCE9","#FBDFEB","#FCE1ED","#FCE5EF","#FDE8F0","#FDEAF3","#FDEEF4","#FEF0F6","#FEF3F7","#FEF7FA","#FFF9FB","#FFFCFD","#000001","#070003","#0E0007","#14000A","#1A000C","#1F000F","#250013","#2A0014","#2F0317","#32031A","#37031D","#3C031E","#400321","#450323","#490325","#4E0327","#52052A","#55052C","#59052E","#5D0530","#610532","#650534","#690536","#6D0538","#710739","#74073C","#78073E","#7C0740","#800741","#840744","#870746","#8B0747","#8F0949","#92094B","#95094E","#99094F","#9D0951","#A00953","#A40954","#A70956","#AB0A58","#AE0A59","#B10A5B","#B50A5D","#B80A5F","#BB0A60","#BF0A62","#C20A64","#C60C65","#C80C67","#CC0C69","#CF0C6B","#D20C6C","#D60C6E","#D90C70","#DC0C71","#E00E73","#E20E75","#E60E77","#E90E78","#EC0E7A","#EF0E7C","#F30E7D","#F60E7F","#F90F81","#F91483","#F91A85","#F91F87","#F92589","#F92A8B","#F92F8E","#F93490","#FA3892","#FA3C93","#FA4096","#FA4598","#FA499A","#FA4E9D","#FA529E","#FA56A0","#FB5AA2","#FB5DA5","#FB61A6","#FB65A8","#FB69AB","#FB6DAD","#FB71AE","#FB75B0","#FB79B3","#FB7CB5","#FB80B6","#FB84B9","#FB87BB","#FB8BBC","#FB8FBF","#FB93C1","#FC96C2","#FC99C4","#FC9DC7","#FCA0C8","#FCA4CA","#FCA7CD","#FCABCE","#FCAED0","#FDB2D2","#FDB5D4","#FDB8D6","#FDBBD7","#FDBFDA","#FDC2DC","#FDC6DD","#FDC9E0","#FECDE1","#FECFE3","#FED2E5","#FED6E7","#FED9E9","#FEDCEA","#FEE0ED","#FEE3EF","#FFE6F0","#FFE9F2","#FFECF4","#FFEFF6","#FFF3F7","#FFF6FA","#FFF9FB","#FFFCFD","#000001","#050303","#090707","#0C0A0A","#0F0E0E","#131111","#161414","#191717","#1D1A1A","#1F1B1D","#221E1F","#252122","#272325","#2A2627","#2C292A","#2F2B2C","#322E2F","#352F31","#373134","#393436","#3C3638","#3E383B","#403B3D","#433D3F","#463F40","#484043","#4A4345","#4C4547","#4F4749","#51494B","#534B4E","#554E50","#585052","#5A5154","#5C5356","#5E5558","#60575A","#62595C","#645B5E","#665D60","#695F62","#6B6064","#6D6266","#6F6468","#71666A","#73686C","#756A6E","#776C6F","#7A6E71","#7C6F73","#7E7175","#807377","#827579","#84777B","#86797D","#877B7F","#8A7D81","#8C7E83","#8E8085","#908286","#928488","#93868A","#95878C","#97898E","#9A8B90","#9B8D92","#9D8F93","#9E9195","#A09397","#A29499","#A4969B","#A6989D","#A79B9E","#A89DA0","#AA9EA2","#ACA0A4","#AEA2A6","#AFA4A7","#B1A6A9","#B3A7AB","#B5AAAD","#B5ACAE","#B7AEB1","#B9AFB3","#BBB1B5","#BCB3B6","#BEB5B8","#C0B6BA","#C1B9BB","#C2BBBD","#C4BCBF","#C6BEC1","#C7C0C2","#C9C1C4","#CBC3C6","#CDC5C7","#CEC7C9","#CFC9CB","#D1CBCD","#D2CDCE","#D4CED0","#D6D0D2","#D7D2D3","#D9D3D5","#DBD6D7","#DCD7D9","#DDD9DB","#DFDBDC","#E1DCDE","#E2DEE0","#E4E0E1","#E6E1E3","#E7E4E5","#E8E6E6","#EAE7E8","#EBE9EA","#EDEAEB","#EFECED","#F0EEEF","#F2EFF0","#F3F2F2","#F4F3F3","#F6F5F5","#F7F7F7","#F9F8F8","#FBFAFA","#FCFBFB","#FEFDFD","#000001","#050303","#090707","#0E090A","#110C0E","#140F11","#191114","#1B1417","#1F1719","#22191B","#251B1E","#291D21","#2B1F23","#2E2226","#312329","#34262B","#37292C","#392A2F","#3C2C31","#3F2E34","#413036","#443238","#47343B","#49363D","#4C383E","#4F3940","#513C43","#543D45","#563F47","#584149","#5B434B","#5D454E","#60474F","#624851","#644A53","#674B55","#694E57","#6B5059","#6E515B","#70535C","#73555E","#755660","#775862","#7A5964","#7C5B66","#7E5D68","#815E6A","#83606B","#86626D","#87636F","#896571","#8C6673","#8E6875","#906A77","#936B79","#946D7A","#976F7C","#99707E","#9B7280","#9D7382","#9F7584","#A17786","#A47887","#A67A88","#A87C8A","#A97E8C","#AB808F","#AC8391","#AE8593","#AF8694","#B08996","#B28B98","#B48E9A","#B5909C","#B6929E","#B794A0","#B996A2","#BB98A4","#BB9BA6","#BD9DA7","#BF9FA9","#C0A1AB","#C1A3AE","#C2A6AF","#C4A7B1","#C6A9B3","#C7ACB5","#C8AEB6","#CAB0B8","#CBB2BA","#CDB4BC","#CDB6BE","#CFB8C0","#D1BAC1","#D2BCC3","#D3BEC5","#D5C1C7","#D6C2C9","#D7C4CB","#D8C7CD","#DAC8CE","#DCCAD0","#DCCDD2","#DECED3","#E0D1D5","#E1D2D7","#E2D4D9","#E3D7DB","#E5D8DC","#E6DADE","#E7DCE0","#E9DEE1","#EAE1E3","#EBE2E6","#EDE4E7","#EEE6E9","#EFE8EA","#F1EAEC","#F2ECEE","#F3EEEF","#F5F0F1","#F6F2F3","#F7F3F5","#F8F6F7","#FAF7F8","#FBF9FA","#FCFBFB","#FEFDFD","#000001","#050303","#0A0507","#0E090A","#130A0E","#170C0F","#1A0F13","#1E1116","#221419","#25161B","#29171D","#2B1A1F","#2F1B22","#321D25","#351F26","#382129","#3C232B","#3E252E","#412630","#442931","#472A34","#4A2B36","#4C2E38","#502F3B","#53313C","#55323E","#583440","#5A3643","#5D3744","#603846","#623B48","#653C4A","#683E4C","#6A3F4E","#6D4050","#6F4352","#724454","#754556","#774757","#7A4859","#7D4A5B","#7F4B5D","#824C5E","#844F60","#865062","#895164","#8B5366","#8E5467","#915669","#93576B","#95586D","#975A6F","#9A5B70","#9D5C72","#9E5E74","#A15F76","#A46177","#A66279","#A8637B","#AA657D","#AD667F","#AF6780","#B16982","#B46A84","#B66C86","#B76E87","#B87189","#BA738B","#BB768E","#BB7990","#BD7B92","#BE7E93","#C08195","#C18398","#C1869A","#C3879C","#C48A9D","#C58DA0","#C78FA2","#C792A4","#C994A6","#CA96A7","#CB99AA","#CD9BAC","#CD9DAE","#CEA0AF","#D0A2B1","#D1A5B4","#D2A7B5","#D3A9B7","#D4ACB9","#D6AEBB","#D7B0BD","#D7B3BF","#D9B5C1","#DAB7C2","#DCBAC5","#DCBBC7","#DDBEC8","#DFC0CA","#E0C2CC","#E1C5CE","#E2C7D0","#E3C9D2","#E5CCD3","#E6CDD6","#E6D0D7","#E8D2D9","#E9D4DB","#EAD7DC","#EBD8DF","#ECDBE1","#EEDDE2","#EFDFE4","#EFE1E6","#F1E3E8","#F2E6EA","#F3E8EB","#F4EAED","#F5ECEF","#F7EFF1","#F7F0F3","#F8F3F4","#FAF4F6","#FBF7F8","#FBF9FA","#FDFBFB","#FEFDFD","#000001","#050303","#0A0507","#0F070A","#14090C","#190A0F","#1D0C13","#210E14","#251117","#27131A","#2B141B","#2F161E","#321721","#361923","#391A25","#3D1B27","#401E2A","#431F2B","#46212E","#492230","#4C2331","#502534","#532636","#562738","#592A39","#5B2B3C","#5E2C3E","#612E3F","#642F41","#673044","#6A3145","#6D3247","#703549","#72364B","#75374C","#78384F","#7B3951","#7E3B52","#813C54","#843D56","#863F57","#884059","#8B415B","#8E435D","#91445E","#934560","#964662","#994763","#9C4965","#9D4A67","#A04B68","#A34C6A","#A64E6C","#A84F6E","#AB506F","#AE5171","#B05373","#B25474","#B55576","#B75678","#BA5779","#BC587B","#BF597D","#C15A7F","#C45C80","#C55E83","#C66185","#C76486","#C76788","#C86A8B","#C96D8D","#CA708F","#CC7392","#CD7593","#CD7895","#CE7B98","#CF7E9A","#D0819C","#D1849D","#D286A0","#D389A2","#D48BA4","#D58EA6","#D691A8","#D793AA","#D796AD","#D899AE","#D99CB0","#DB9EB2","#DCA0B5","#DCA3B6","#DDA6B8","#DEA8BB","#DFABBC","#E0AEBE","#E1B0C1","#E2B3C2","#E3B5C4","#E4B7C6","#E5BAC8","#E6BCCA","#E6BFCC","#E7C1CE","#E8C4D0","#EAC7D2","#EAC8D4","#EBCBD6","#ECCDD7","#EDD0D9","#EED2DC","#EFD5DD","#EFD7DF","#F1DAE1","#F2DCE3","#F3DEE5","#F3E1E7","#F4E3E9","#F5E6EA","#F6E8EC","#F7EAEF","#F8EDF0","#F9EFF2","#FAF1F4","#FBF3F6","#FBF6F7","#FCF8FA","#FDFBFB","#FEFDFD","#000001","#070003","#0C0307","#110509","#16070C","#1A090F","#1E0A11","#220C14","#270E16","#2B0E19","#2F0F1B","#32111D","#36131F","#391421","#3D1623","#401726","#451927","#48192A","#4B1A2C","#4F1B2E","#521D30","#551E31","#581F34","#5B2136","#5F2237","#622239","#65233B","#68253D","#6B263F","#6E2740","#712943","#742A45","#782B46","#7B2B48","#7E2C49","#812E4B","#842F4E","#86304F","#893151","#8C3252","#903454","#933456","#953557","#983659","#9B375A","#9D385C","#A0395E","#A33B5F","#A63C61","#A93C63","#AC3D64","#AE3E66","#B13F67","#B44069","#B6416B","#B9436C","#BC446E","#BF446F","#C14571","#C44673","#C74774","#C94876","#CC4978","#CE4A79","#D24B7B","#D24F7D","#D25280","#D35582","#D45884","#D55B86","#D65E88","#D7618A","#D7658D","#D7688F","#D86B92","#D96E93","#DA7195","#DB7498","#DC779A","#DC7A9D","#DD7E9E","#DD81A0","#DE84A3","#DF86A5","#E089A6","#E18CA9","#E18FAB","#E292AE","#E395AF","#E398B1","#E49BB4","#E59DB5","#E6A0B8","#E6A3BA","#E7A6BB","#E8A8BE","#E9ACC0","#E9AEC2","#EAB1C4","#EAB4C6","#EBB6C8","#ECB9CA","#EDBBCC","#EEBECE","#EFC1D0","#EFC4D2","#EFC7D4","#F0C9D6","#F1CCD8","#F2CEDA","#F3D1DC","#F3D3DE","#F4D7E0","#F4D9E2","#F5DCE4","#F6DEE6","#F7E1E8","#F7E3EA","#F8E6EC","#F9E8EE","#FAEBEF","#FAEEF2","#FBF0F3","#FBF3F6","#FCF5F7","#FDF7F9","#FEFAFB","#FFFCFD","#000001","#070003","#0C0307","#130309","#17050C","#1B070E","#210711","#250913","#2A0A16","#2E0A17","#310C1A","#360C1B","#390E1E","#3D0F1F","#410F22","#451123","#491326","#4C1327","#50142A","#54142C","#57162E","#5A1730","#5E1731","#611934","#651A35","#681A37","#6B1B38","#6F1B3B","#721D3C","#751E3E","#791E3F","#7C1F41","#802143","#832145","#862246","#892248","#8C2349","#8F254B","#93254E","#95264F","#992751","#9C2752","#9E2954","#A22955","#A52A57","#A72B58","#AB2B5A","#AE2C5B","#B12E5D","#B42E5E","#B62F60","#BA2F61","#BC3063","#BF3164","#C23166","#C53268","#C83469","#CB346B","#CD356C","#D1356E","#D3366F","#D63771","#D93772","#DC3874","#DF3975","#DF3D78","#E0407A","#E0457D","#E1487F","#E14B82","#E15084","#E25386","#E35788","#E35A8B","#E45D8D","#E4618F","#E56492","#E66793","#E66B96","#E66E98","#E7729B","#E7759D","#E8789F","#E87CA1","#E97FA4","#EA82A6","#EA86A8","#EA88AA","#EB8CAD","#EB8FAE","#EC92B1","#EC95B3","#ED98B5","#EE9BB7","#EE9EB9","#EFA1BB","#EFA5BD","#EFA7C0","#F0AAC1","#F0AEC4","#F1B0C6","#F2B3C8","#F2B6CA","#F3B9CD","#F3BCCE","#F3BFD1","#F4C1D2","#F4C5D5","#F5C7D7","#F6CAD9","#F6CDDB","#F7D0DC","#F7D3DF","#F7D6E1","#F8D8E3","#F8DCE5","#F9DEE7","#FAE1E9","#FAE4EB","#FBE6ED","#FBEAEF","#FBECF1","#FCEFF3","#FCF2F5","#FDF4F7","#FEF7F9","#FEFAFB","#FFFCFD","#000001","#070003","#0E0005","#130309","#19030A","#1E030E","#22050F","#270513","#2C0714","#300716","#350719","#38091A","#3D091D","#41091E","#450A21","#490A22","#4E0C25","#510C26","#550C27","#580E2A","#5C0E2B","#600E2E","#630F2F","#670F31","#6B1132","#6E1135","#721136","#751337","#791339","#7D133B","#80143D","#84143E","#871640","#8A1641","#8E1644","#911745","#941746","#981748","#9B1949","#9E194B","#A21A4C","#A51A4F","#A81A50","#AB1B51","#AE1B53","#B21B54","#B51D56","#B81D57","#BB1E59","#BE1E5A","#C11E5C","#C41F5D","#C71F5E","#CB1F60","#CD2161","#D12163","#D42264","#D72266","#DA2267","#DC2369","#E0236A","#E3236B","#E6256D","#E9256E","#EC2670","#EC2A72","#EC2F75","#ED3277","#ED377A","#ED3C7D","#EE3F7F","#EE4482","#EF4884","#EF4B86","#EF5088","#EF538B","#EF578D","#EF5B90","#F05E93","#F06294","#F16697","#F16999","#F16D9C","#F2709D","#F274A0","#F278A2","#F37BA5","#F37FA7","#F383A9","#F386AC","#F389AE","#F48CB0","#F490B2","#F493B5","#F596B7","#F59AB9","#F69DBB","#F6A0BD","#F6A4C0","#F7A6C1","#F7AAC4","#F7AEC6","#F7B0C8","#F7B4CB","#F8B7CD","#F8BACF","#F8BDD1","#F9C0D3","#F9C3D5","#F9C7D7","#FAC9D9","#FACDDC","#FBD0DE","#FBD2E0","#FBD6E2","#FBD8E4","#FBDCE6","#FBDFE8","#FCE1EA","#FCE5EC","#FDE8EF","#FDEAF1","#FDEEF3","#FEF0F5","#FEF3F7","#FEF7F9","#FFF9FB","#FFFCFD","#000001","#070003","#0E0005","#140009","#1A000A","#1F000C","#25000F","#2A0011","#2F0313","#320316","#370317","#3C0319","#40031B","#45031D","#49031E","#4E0321","#520522","#550525","#590526","#5D0527","#61052A","#65052B","#69052C","#6D052F","#710730","#740731","#780734","#7C0735","#800736","#840738","#870739","#8B073C","#8F093D","#92093E","#950940","#990941","#9D0943","#A00945","#A40946","#A70947","#AB0A49","#AE0A4A","#B10A4B","#B50A4E","#B80A4F","#BB0A50","#BF0A52","#C20A53","#C60C55","#C80C56","#CC0C57","#CF0C59","#D20C5A","#D60C5B","#D90C5D","#DC0C5E","#E00E5F","#E20E61","#E60E62","#E90E63","#EC0E65","#EF0E66","#F30E68","#F60E69","#F90F6A","#F9146D","#F91A70","#F91F72","#F92575","#F92A77","#F92F7A","#F9347D","#FA387F","#FA3C82","#FA4085","#FA4586","#FA4989","#FA4E8C","#FA528E","#FA5691","#FB5A93","#FB5D95","#FB6198","#FB659A","#FB699D","#FB6D9F","#FB71A1","#FB75A4","#FB79A6","#FB7CA8","#FB80AB","#FB84AE","#FB87AF","#FB8BB2","#FB8FB5","#FB93B6","#FC96B9","#FC99BB","#FC9DBD","#FCA0C0","#FCA4C1","#FCA7C4","#FCABC7","#FCAEC8","#FDB2CB","#FDB5CD","#FDB8CF","#FDBBD2","#FDBFD4","#FDC2D6","#FDC6D8","#FDC9DB","#FECDDC","#FECFDF","#FED2E1","#FED6E3","#FED9E6","#FEDCE7","#FEE0EA","#FEE3EC","#FFE6EE","#FFE9F0","#FFECF3","#FFEFF4","#FFF3F7","#FFF6F9","#FFF9FB","#FFFCFD","#000001","#050303","#090707","#0C0A0A","#0F0E0E","#131111","#161414","#191717","#1D1A1A","#1F1B1D","#221E1F","#252122","#272325","#2A2627","#2C292A","#2F2B2C","#322E2E","#352F30","#373132","#393435","#3C3637","#3E3839","#403B3C","#433D3E","#463F40","#484043","#4A4345","#4C4547","#4F4749","#51494B","#534B4E","#554E4F","#585051","#5A5153","#5C5355","#5E5557","#605759","#62595B","#645B5D","#665D5F","#695F61","#6B6063","#6D6265","#6F6467","#716669","#73686B","#756A6C","#776C6E","#7A6E70","#7C6F72","#7E7174","#807376","#827578","#84777A","#86797C","#877B7E","#8A7D80","#8C7E82","#8E8084","#908286","#928487","#938688","#95878A","#97898C","#9A8B8E","#9B8D90","#9D8F92","#9E9193","#A09396","#A29498","#A4969A","#A6989C","#A79B9D","#A89D9F","#AA9EA1","#ACA0A3","#AEA2A5","#AFA4A6","#B1A6A8","#B3A7AA","#B5AAAC","#B5ACAE","#B7AEAF","#B9AFB2","#BBB1B4","#BCB3B5","#BEB5B7","#C0B6B9","#C1B9BB","#C2BBBC","#C4BCBE","#C6BEC0","#C7C0C1","#C9C1C3","#CBC3C5","#CDC5C7","#CEC7C8","#CFC9CA","#D1CBCD","#D2CDCE","#D4CED0","#D6D0D2","#D7D2D3","#D9D3D5","#DBD6D7","#DCD7D8","#DDD9DA","#DFDBDC","#E1DCDD","#E2DEDF","#E4E0E1","#E6E1E2","#E7E4E4","#E8E6E6","#EAE7E8","#EBE9EA","#EDEAEB","#EFECED","#F0EEEF","#F2EFF0","#F3F2F2","#F4F3F3","#F6F5F5","#F7F7F7","#F9F8F8","#FBFAFA","#FCFBFB","#FEFDFD","#000001","#050303","#090707","#0E090A","#110C0E","#140F11","#191113","#1B1416","#1F1719","#22191B","#251B1E","#291D1F","#2B1F22","#2E2225","#312327","#34262A","#37292B","#392A2E","#3C2C30","#3F2E32","#413035","#443236","#473438","#49363B","#4C383D","#4F393F","#513C40","#543D43","#563F45","#584147","#5B4349","#5D454A","#60474C","#62484F","#644A51","#674B53","#694E54","#6B5056","#6E5158","#70535A","#73555C","#75565D","#77585F","#7A5961","#7C5B63","#7E5D65","#815E66","#836068","#86626A","#87636C","#89656E","#8C666F","#8E6871","#906A73","#936B75","#946D77","#976F78","#99707A","#9B727C","#9D737E","#9F7580","#A17781","#A47883","#A67A85","#A87C86","#A97E88","#AB808A","#AC838C","#AE858F","#AF8691","#B08993","#B28B94","#B48E96","#B59099","#B6929B","#B7949D","#B9969E","#BB98A0","#BB9BA3","#BD9DA5","#BF9FA6","#C0A1A8","#C1A3AA","#C2A6AD","#C4A7AE","#C6A9B0","#C7ACB2","#C8AEB4","#CAB0B6","#CBB2B8","#CDB4BA","#CDB6BB","#CFB8BD","#D1BAC0","#D2BCC1","#D3BEC3","#D5C1C5","#D6C2C7","#D7C4C9","#D8C7CB","#DAC8CD","#DCCACE","#DCCDD0","#DECED2","#E0D1D4","#E1D2D6","#E2D4D7","#E3D7D9","#E5D8DC","#E6DADD","#E7DCDF","#E9DEE1","#EAE1E2","#EBE2E5","#EDE4E6","#EEE6E8","#EFE8EA","#F1EAEB","#F2ECEE","#F3EEEF","#F5F0F1","#F6F2F3","#F7F3F4","#F8F6F7","#FAF7F8","#FBF9FA","#FCFBFB","#FEFDFD","#000001","#050303","#0A0507","#0E090A","#130A0C","#170C0F","#1A0F13","#1E1114","#221417","#25161A","#29171B","#2B1A1E","#2F1B21","#321D22","#351F25","#382127","#3C2329","#3E252B","#41262E","#44292F","#472A31","#4A2B34","#4C2E35","#502F37","#533139","#55323B","#58343D","#5A363F","#5D3740","#603843","#623B45","#653C46","#683E48","#6A3F4A","#6D404B","#6F434E","#724450","#754551","#774753","#7A4855","#7D4A56","#7F4B58","#824C5A","#844F5B","#86505D","#89515F","#8B5360","#8E5462","#915664","#935765","#955867","#975A69","#9A5B6A","#9D5C6C","#9E5E6E","#A15F6F","#A46171","#A66273","#A86374","#AA6576","#AD6678","#AF6779","#B1697B","#B46A7D","#B66C7E","#B76E81","#B87183","#BA7385","#BB7687","#BB7989","#BD7B8B","#BE7E8E","#C08190","#C18392","#C18694","#C38796","#C48A98","#C58D9B","#C78F9D","#C7929E","#C994A1","#CA96A3","#CB99A5","#CD9BA7","#CD9DA9","#CEA0AB","#D0A2AE","#D1A5AF","#D2A7B1","#D3A9B4","#D4ACB5","#D6AEB7","#D7B0BA","#D7B3BB","#D9B5BD","#DAB7C0","#DCBAC1","#DCBBC3","#DDBEC6","#DFC0C7","#E0C2C9","#E1C5CC","#E2C7CD","#E3C9CF","#E5CCD2","#E6CDD3","#E6D0D5","#E8D2D7","#E9D4D9","#EAD7DB","#EBD8DD","#ECDBDF","#EEDDE1","#EFDFE3","#EFE1E5","#F1E3E6","#F2E6E9","#F3E8EA","#F4EAEC","#F5ECEF","#F7EFF0","#F7F0F2","#F8F3F4","#FAF4F6","#FBF7F7","#FBF9FA","#FDFBFB","#FEFDFD","#000001","#050303","#0A0507","#0F0709","#14090C","#190A0E","#1D0C11","#210E13","#251116","#271317","#2B141A","#2F161B","#32171E","#36191F","#391A22","#3D1B25","#401E26","#431F29","#46212A","#49222C","#4C232E","#502530","#532631","#562734","#592A35","#5B2B37","#5E2C38","#612E3B","#642F3C","#67303E","#6A3140","#6D3241","#703544","#723645","#753747","#783848","#7B394A","#7E3B4B","#813C4E","#843D4F","#863F51","#884052","#8B4154","#8E4356","#914457","#934559","#96465A","#99475C","#9C495D","#9D4A5F","#A04B60","#A34C62","#A64E63","#A84F65","#AB5066","#AE5168","#B05369","#B2546B","#B5556D","#B7566E","#BA5770","#BC5871","#BF5973","#C15A74","#C45C76","#C55E78","#C6617B","#C7647D","#C76780","#C86A82","#C96D85","#CA7086","#CC7388","#CD758B","#CD788D","#CE7B90","#CF7E92","#D08194","#D18496","#D28699","#D3899B","#D48B9D","#D58E9F","#D691A2","#D793A4","#D796A6","#D899A8","#D99CAA","#DB9EAD","#DCA0AE","#DCA3B1","#DDA6B3","#DEA8B5","#DFABB7","#E0AEBA","#E1B0BB","#E2B3BE","#E3B5C0","#E4B7C2","#E5BAC4","#E6BCC6","#E6BFC8","#E7C1CA","#E8C4CD","#EAC7CE","#EAC8D1","#EBCBD2","#ECCDD5","#EDD0D7","#EED2D9","#EFD5DB","#EFD7DD","#F1DADF","#F2DCE1","#F3DEE3","#F3E1E5","#F4E3E7","#F5E6E9","#F6E8EB","#F7EAED","#F8EDEF","#F9EFF1","#FAF1F3","#FBF3F5","#FBF6F7","#FCF8F9","#FDFBFB","#FEFDFD","#000001","#070003","#0C0305","#110509","#16070A","#1A090E","#1E0A0F","#220C11","#270E14","#2B0E16","#2F0F19","#32111A","#36131B","#39141E","#3D161F","#401722","#451923","#481925","#4B1A27","#4F1B29","#521D2B","#551E2C","#581F2E","#5B2130","#5F2231","#622234","#652335","#682536","#6B2638","#6E2739","#71293C","#742A3D","#782B3E","#7B2B40","#7E2C41","#812E44","#842F45","#863046","#893148","#8C3249","#90344B","#93344C","#95354E","#983650","#9B3751","#9D3853","#A03954","#A33B55","#A63C57","#A93C58","#AC3D5A","#AE3E5B","#B13F5C","#B4405E","#B6415F","#B94361","#BC4462","#BF4463","#C14565","#C44666","#C74768","#C94869","#CC496A","#CE4A6C","#D24B6D","#D24F70","#D25272","#D35575","#D45878","#D55B7A","#D65E7D","#D7617F","#D76582","#D76885","#D86B86","#D96E89","#DA718B","#DB748E","#DC7791","#DC7A93","#DD7E95","#DD8197","#DE849A","#DF869D","#E0899E","#E18CA1","#E18FA3","#E292A6","#E395A8","#E398AA","#E49BAD","#E59DAE","#E6A0B1","#E6A3B4","#E7A6B5","#E8A8B8","#E9ACBA","#E9AEBC","#EAB1BF","#EAB4C1","#EBB6C3","#ECB9C5","#EDBBC7","#EEBECA","#EFC1CC","#EFC4CE","#EFC7D0","#F0C9D2","#F1CCD5","#F2CED7","#F3D1D9","#F3D3DB","#F4D7DD","#F4D9E0","#F5DCE1","#F6DEE4","#F7E1E6","#F7E3E8","#F8E6EA","#F9E8EC","#FAEBEF","#FAEEF0","#FBF0F3","#FBF3F5","#FCF5F7","#FDF7F9","#FEFAFB","#FFFCFD","#000001","#070003","#0C0305","#130307","#17050A","#1B070C","#21070E","#25090F","#2A0A13","#2E0A14","#310C16","#360C17","#390E1A","#3D0F1B","#410F1D","#45111F","#491321","#4C1322","#501423","#541426","#571627","#5A1729","#5E172A","#61192C","#651A2E","#681A2F","#6B1B31","#6F1B32","#721D34","#751E35","#791E37","#7C1F38","#802139","#83213B","#86223D","#89223E","#8C233F","#8F2540","#932543","#952644","#992745","#9C2747","#9E2948","#A22949","#A52A4A","#A72B4C","#AB2B4E","#AE2C4F","#B12E50","#B42E52","#B62F53","#BA2F54","#BC3056","#BF3157","#C23158","#C53259","#C8345B","#CB345C","#CD355D","#D1355E","#D33660","#D63761","#D93762","#DC3863","#DF3965","#DF3D67","#E0406A","#E0456D","#E14870","#E14B72","#E15075","#E25378","#E3577B","#E35A7D","#E45D80","#E46183","#E56486","#E66787","#E66B8A","#E66E8D","#E7728F","#E77592","#E87894","#E87C97","#E97F99","#EA829C","#EA869E","#EA88A1","#EB8CA3","#EB8FA6","#EC92A8","#EC95AA","#ED98AD","#EE9BAF","#EE9EB2","#EFA1B4","#EFA5B6","#EFA7B9","#F0AABB","#F0AEBD","#F1B0C0","#F2B3C2","#F2B6C5","#F3B9C7","#F3BCC9","#F3BFCC","#F4C1CD","#F4C5D0","#F5C7D2","#F6CAD5","#F6CDD7","#F7D0D9","#F7D3DC","#F7D6DE","#F8D8E0","#F8DCE2","#F9DEE5","#FAE1E6","#FAE4E9","#FBE6EB","#FBEAEE","#FBECEF","#FCEFF2","#FCF2F4","#FDF4F7","#FEF7F8","#FEFAFB","#FFFCFD","#000001","#070003","#0E0005","#130307","#190309","#1E030A","#22050C","#27050E","#2C0711","#300713","#350714","#380916","#3D0917","#410919","#450A1A","#490A1D","#4E0C1E","#510C1F","#550C21","#580E22","#5C0E23","#600E25","#630F27","#670F29","#6B112A","#6E112B","#72112C","#75132E","#79132F","#7D1330","#801432","#841434","#871635","#8A1636","#8E1637","#911738","#941739","#98173C","#9B193D","#9E193E","#A21A3F","#A51A40","#A81A41","#AB1B43","#AE1B45","#B21B46","#B51D47","#B81D48","#BB1E49","#BE1E4A","#C11E4B","#C41F4C","#C71F4F","#CB1F50","#CD2151","#D12152","#D42253","#D72254","#DA2255","#DC2357","#E02358","#E32359","#E6255A","#E9255B","#EC265C","#EC2A5F","#EC2F62","#ED3265","#ED3768","#ED3C6B","#EE3F6D","#EE4470","#EF4873","#EF4B76","#EF5079","#EF537C","#EF577F","#EF5B81","#F05E84","#F06286","#F16689","#F1698C","#F16D8F","#F27092","#F27494","#F27896","#F37B99","#F37F9C","#F3839E","#F386A1","#F389A4","#F48CA6","#F490A8","#F493AB","#F596AE","#F59AB0","#F69DB3","#F6A0B5","#F6A4B8","#F7A6BA","#F7AABC","#F7AEBF","#F7B0C1","#F7B4C4","#F8B7C7","#F8BAC9","#F8BDCC","#F9C0CD","#F9C3D0","#F9C7D2","#FAC9D5","#FACDD7","#FBD0DA","#FBD2DC","#FBD6DE","#FBD8E1","#FBDCE3","#FBDFE6","#FCE1E8","#FCE5EA","#FDE8ED","#FDEAEF","#FDEEF1","#FEF0F3","#FEF3F6","#FEF7F8","#FFF9FB","#FFFCFD","#000001","#070003","#0E0005","#140007","#1A0009","#1F000A","#25000C","#2A000E","#2F030F","#320311","#370313","#3C0314","#400316","#450317","#490319","#4E031A","#52051B","#55051D","#59051E","#5D051F","#610521","#650522","#690523","#6D0525","#710726","#740727","#780729","#7C072A","#80072B","#84072C","#87072E","#8B072F","#8F0930","#920931","#950932","#990934","#9D0935","#A00936","#A40937","#A70938","#AB0A39","#AE0A3B","#B10A3C","#B50A3D","#B80A3E","#BB0A3F","#BF0A40","#C20A41","#C60C43","#C80C44","#CC0C45","#CF0C46","#D20C47","#D60C48","#D90C49","#DC0C4A","#E00E4B","#E20E4C","#E60E4E","#E90E4F","#EC0E50","#EF0E51","#F30E52","#F60E53","#F90F54","#F91457","#F91A5A","#F91F5D","#F92560","#F92A63","#F92F66","#F93469","#FA386C","#FA3C6F","#FA4072","#FA4575","#FA4978","#FA4E7B","#FA527E","#FA5681","#FB5A84","#FB5D86","#FB6189","#FB658C","#FB698F","#FB6D92","#FB7194","#FB7597","#FB799A","#FB7C9D","#FB809F","#FB84A2","#FB87A5","#FB8BA7","#FB8FAA","#FB93AD","#FC96AF","#FC99B2","#FC9DB5","#FCA0B7","#FCA4BA","#FCA7BC","#FCABBF","#FCAEC1","#FDB2C4","#FDB5C7","#FDB8C9","#FDBBCC","#FDBFCE","#FDC2D1","#FDC6D3","#FDC9D6","#FECDD8","#FECFDB","#FED2DD","#FED6E0","#FED9E2","#FEDCE5","#FEE0E7","#FEE3EA","#FFE6EC","#FFE9EF","#FFECF1","#FFEFF3","#FFF3F6","#FFF6F8","#FFF9FB","#FFFCFD","#000001","#050303","#090707","#0C0A0A","#0F0E0E","#131111","#161414","#191717","#1D1A1A","#1F1B1D","#221E1F","#252122","#272323","#2A2626","#2C2929","#2F2B2B","#322E2E","#352F30","#373132","#393435","#3C3637","#3E3839","#403B3C","#433D3D","#463F3F","#484041","#4A4344","#4C4546","#4F4748","#51494A","#534B4C","#554E4F","#585051","#5A5153","#5C5354","#5E5556","#605758","#62595A","#645B5C","#665D5E","#695F60","#6B6062","#6D6264","#6F6466","#716668","#736869","#756A6B","#776C6D","#7A6E6F","#7C6F71","#7E7173","#807375","#827577","#847779","#86797B","#877B7D","#8A7D7E","#8C7E80","#8E8082","#908284","#928486","#938687","#958789","#97898B","#9A8B8D","#9B8D8F","#9D8F91","#9E9193","#A09394","#A29496","#A49698","#A6989A","#A79B9C","#A89D9E","#AA9EA0","#ACA0A2","#AEA2A4","#AFA4A6","#B1A6A7","#B3A7A9","#B5AAAB","#B5ACAD","#B7AEAE","#B9AFB0","#BBB1B3","#BCB3B5","#BEB5B6","#C0B6B8","#C1B9BA","#C2BBBB","#C4BCBD","#C6BEBF","#C7C0C1","#C9C1C2","#CBC3C4","#CDC5C7","#CEC7C8","#CFC9CA","#D1CBCC","#D2CDCD","#D4CECF","#D6D0D1","#D7D2D2","#D9D3D4","#DBD6D6","#DCD7D7","#DDD9DA","#DFDBDC","#E1DCDD","#E2DEDF","#E4E0E1","#E6E1E2","#E7E4E4","#E8E6E6","#EAE7E7","#EBE9E9","#EDEAEA","#EFECED","#F0EEEF","#F2EFF0","#F3F2F2","#F4F3F3","#F6F5F5","#F7F7F7","#F9F8F8","#FBFAFA","#FCFBFB","#FEFDFD","#000001","#050303","#090707","#0E090A","#110C0C","#140F0F","#191113","#1B1416","#1F1717","#22191A","#251B1D","#291D1F","#2B1F21","#2E2223","#312326","#342627","#37292A","#392A2C","#3C2C2F","#3F2E30","#413032","#443235","#473437","#493638","#4C383B","#4F393D","#513C3E","#543D40","#563F43","#584145","#5B4346","#5D4548","#60474A","#62484C","#644A4E","#674B50","#694E52","#6B5054","#6E5155","#705357","#735559","#75565A","#77585C","#7A595E","#7C5B60","#7E5D61","#815E63","#836065","#866267","#876368","#89656A","#8C666C","#8E686D","#906A6F","#936B71","#946D73","#976F74","#997076","#9B7278","#9D737A","#9F757B","#A1777D","#A4787F","#A67A81","#A87C82","#A97E85","#AB8086","#AC8388","#AE858A","#AF868D","#B0898F","#B28B91","#B48E93","#B59095","#B69297","#B79499","#B9969B","#BB989D","#BB9B9F","#BD9DA1","#BF9FA4","#C0A1A6","#C1A3A7","#C2A6A9","#C4A7AC","#C6A9AE","#C7ACAF","#C8AEB1","#CAB0B4","#CBB2B5","#CDB4B7","#CDB6BA","#CFB8BB","#D1BABD","#D2BCBF","#D3BEC1","#D5C1C3","#D6C2C5","#D7C4C7","#D8C7C9","#DAC8CB","#DCCACD","#DCCDCE","#DECED1","#E0D1D2","#E1D2D4","#E2D4D7","#E3D7D8","#E5D8DA","#E6DADC","#E7DCDE","#E9DEE0","#EAE1E1","#EBE2E3","#EDE4E6","#EEE6E7","#EFE8E9","#F1EAEB","#F2ECED","#F3EEEF","#F5F0F0","#F6F2F3","#F7F3F4","#F8F6F6","#FAF7F7","#FBF9FA","#FCFBFB","#FEFDFD","#000001","#050303","#0A0507","#0E0909","#130A0C","#170C0E","#1A0F11","#1E1113","#221416","#251617","#29171A","#2B1A1D","#2F1B1E","#321D21","#351F22","#382125","#3C2326","#3E2529","#41262A","#44292C","#472A2F","#4A2B30","#4C2E32","#502F34","#533136","#553237","#583439","#5A363B","#5D373D","#60383E","#623B40","#653C43","#683E44","#6A3F46","#6D4047","#6F4349","#72444A","#75454C","#77474E","#7A4850","#7D4A52","#7F4B53","#824C55","#844F56","#865058","#895159","#8B535B","#8E545C","#91565E","#93575F","#955861","#975A63","#9A5B64","#9D5C66","#9E5E67","#A15F69","#A4616A","#A6626C","#A8636D","#AA656F","#AD6671","#AF6772","#B16974","#B46A75","#B66C77","#B76E79","#B8717C","#BA737E","#BB7681","#BB7983","#BD7B85","#BE7E87","#C08189","#C1838C","#C1868E","#C38791","#C48A93","#C58D95","#C78F97","#C79299","#C9949C","#CA969D","#CB99A0","#CD9BA2","#CD9DA5","#CEA0A6","#D0A2A9","#D1A5AB","#D2A7AE","#D3A9AF","#D4ACB1","#D6AEB4","#D7B0B5","#D7B3B8","#D9B5BA","#DAB7BC","#DCBABE","#DCBBC1","#DDBEC2","#DFC0C4","#E0C2C7","#E1C5C8","#E2C7CB","#E3C9CD","#E5CCCF","#E6CDD1","#E6D0D3","#E8D2D5","#E9D4D7","#EAD7D9","#EBD8DB","#ECDBDD","#EEDDDF","#EFDFE1","#EFE1E3","#F1E3E6","#F2E6E7","#F3E8EA","#F4EAEB","#F5ECED","#F7EFEF","#F7F0F1","#F8F3F3","#FAF4F5","#FBF7F7","#FBF9F9","#FDFBFB","#FEFDFD","#000001","#050303","#0A0505","#0F0709","#14090A","#190A0C","#1D0C0F","#210E11","#251113","#271316","#2B1417","#2F161A","#32171B","#36191D","#391A1F","#3D1B21","#401E22","#431F25","#462126","#492229","#4C232A","#50252B","#53262E","#56272F","#592A30","#5B2B32","#5E2C34","#612E36","#642F37","#673038","#6A313B","#6D323C","#70353D","#72363F","#753740","#783841","#7B3944","#7E3B45","#813C47","#843D48","#863F49","#88404B","#8B414C","#8E434E","#914450","#934551","#964653","#994754","#9C4955","#9D4A57","#A04B58","#A34C59","#A64E5B","#A84F5C","#AB505E","#AE515F","#B05360","#B25462","#B55563","#B75664","#BA5766","#BC5867","#BF5969","#C15A6A","#C45C6B","#C55E6E","#C66171","#C76473","#C76776","#C86A78","#C96D7B","#CA707E","#CC7380","#CD7583","#CD7886","#CE7B87","#CF7E8A","#D0818C","#D1848F","#D28692","#D38993","#D48B96","#D58E99","#D6919B","#D7939D","#D7969F","#D899A2","#D99CA5","#DB9EA6","#DCA0A9","#DCA3AC","#DDA6AE","#DEA8B0","#DFABB2","#E0AEB5","#E1B0B7","#E2B3B9","#E3B5BB","#E4B7BE","#E5BAC0","#E6BCC2","#E6BFC5","#E7C1C7","#E8C4C9","#EAC7CB","#EAC8CD","#EBCBD0","#ECCDD2","#EDD0D4","#EED2D7","#EFD5D8","#EFD7DB","#F1DADC","#F2DCDF","#F3DEE1","#F3E1E3","#F4E3E6","#F5E6E8","#F6E8EA","#F7EAEC","#F8EDEE","#F9EFF0","#FAF1F3","#FBF3F4","#FBF6F7","#FCF8F9","#FDFBFB","#FEFDFD","#000001","#070003","#0C0305","#110507","#160709","#1A090A","#1E0A0E","#220C0F","#270E11","#2B0E13","#2F0F14","#321117","#361319","#39141A","#3D161B","#40171D","#45191F","#481921","#4B1A22","#4F1B23","#521D25","#551E27","#581F29","#5B212A","#5F222B","#62222C","#65232E","#682530","#6B2631","#6E2732","#712934","#742A35","#782B37","#7B2B38","#7E2C39","#812E3B","#842F3C","#86303E","#89313F","#8C3240","#903441","#933443","#953545","#983646","#9B3747","#9D3848","#A03949","#A33B4A","#A63C4C","#A93C4E","#AC3D4F","#AE3E50","#B13F51","#B44053","#B64154","#B94355","#BC4456","#BF4457","#C14559","#C4465A","#C7475B","#C9485C","#CC495D","#CE4A5F","#D24B60","#D24F63","#D25265","#D35568","#D4586B","#D55B6E","#D65E71","#D76173","#D76576","#D76879","#D86B7C","#D96E7F","#DA7181","#DB7484","#DC7786","#DC7A89","#DD7E8C","#DD818E","#DE8491","#DF8693","#E08996","#E18C99","#E18F9C","#E2929D","#E395A0","#E398A3","#E49BA6","#E59DA8","#E6A0AA","#E6A3AD","#E7A6AF","#E8A8B2","#E9ACB5","#E9AEB6","#EAB1B9","#EAB4BB","#EBB6BE","#ECB9C1","#EDBBC2","#EEBEC5","#EFC1C7","#EFC4CA","#EFC7CD","#F0C9CF","#F1CCD1","#F2CED3","#F3D1D6","#F3D3D8","#F4D7DB","#F4D9DC","#F5DCDF","#F6DEE1","#F7E1E4","#F7E3E6","#F8E6E8","#F9E8EA","#FAEBED","#FAEEEF","#FBF0F2","#FBF3F3","#FCF5F6","#FDF7F8","#FEFAFB","#FFFCFD","#000001","#070003","#0C0305","#130307","#170509","#1B070A","#21070C","#25090E","#2A0A0F","#2E0A11","#310C13","#360C14","#390E16","#3D0F17","#410F19","#45111A","#49131B","#4C131D","#50141E","#54141F","#571621","#5A1722","#5E1723","#611925","#651A26","#681A27","#6B1B29","#6F1B2A","#721D2B","#751E2C","#791E2E","#7C1F2F","#802130","#832131","#862232","#892234","#8C2335","#8F2536","#932537","#952638","#992739","#9C273B","#9E293C","#A2293D","#A52A3E","#A72B3F","#AB2B40","#AE2C41","#B12E43","#B42E44","#B62F45","#BA2F46","#BC3047","#BF3148","#C23149","#C5324A","#C8344B","#CB344C","#CD354E","#D1354F","#D33650","#D63751","#D93752","#DC3853","#DF3954","#DF3D57","#E0405A","#E0455D","#E14860","#E14B63","#E15066","#E25369","#E3576C","#E35A6F","#E45D72","#E46175","#E56478","#E6677B","#E66B7E","#E66E81","#E77284","#E77586","#E87889","#E87C8C","#E97F8F","#EA8292","#EA8694","#EA8897","#EB8C9A","#EB8F9D","#EC929F","#EC95A2","#ED98A5","#EE9BA7","#EE9EAA","#EFA1AD","#EFA5AF","#EFA7B2","#F0AAB5","#F0AEB7","#F1B0BA","#F2B3BC","#F2B6BF","#F3B9C1","#F3BCC4","#F3BFC7","#F4C1C9","#F4C5CC","#F5C7CE","#F6CAD1","#F6CDD3","#F7D0D6","#F7D3D8","#F7D6DB","#F8D8DD","#F8DCE0","#F9DEE2","#FAE1E5","#FAE4E7","#FBE6EA","#FBEAEC","#FBECEF","#FCEFF1","#FCF2F3","#FDF4F6","#FEF7F8","#FEFAFB","#FFFCFD","#000001","#070000","#0E0003","#130305","#190307","#1E0309","#220509","#27050A","#2C070C","#30070E","#35070F","#380911","#3D0911","#410913","#450A14","#490A16","#4E0C17","#510C19","#550C19","#580E1A","#5C0E1B","#600E1D","#630F1E","#670F1F","#6B111F","#6E1121","#721122","#751323","#791325","#7D1326","#801426","#841427","#871629","#8A162A","#8E162B","#91172C","#94172C","#98172E","#9B192F","#9E1930","#A21A31","#A51A32","#A81A32","#AB1B34","#AE1B35","#B21B36","#B51D37","#B81D38","#BB1E38","#BE1E39","#C11E3B","#C41F3C","#C71F3D","#CB1F3E","#CD213E","#D1213F","#D42240","#D72241","#DA2243","#DC2344","#E02344","#E32345","#E62546","#E92547","#EC2648","#EC2A4B","#EC2F4F","#ED3252","#ED3755","#ED3C59","#EE3F5C","#EE445F","#EF4862","#EF4B65","#EF5068","#EF536C","#EF576F","#EF5B72","#F05E75","#F06278","#F1667B","#F1697F","#F16D82","#F27085","#F27487","#F2788A","#F37B8D","#F37F91","#F38393","#F38696","#F38999","#F48C9C","#F4909E","#F493A2","#F596A5","#F59AA7","#F69DAA","#F6A0AD","#F6A4AF","#F7A6B3","#F7AAB5","#F7AEB8","#F7B0BB","#F7B4BD","#F8B7C0","#F8BAC3","#F8BDC6","#F9C0C8","#F9C3CB","#F9C7CD","#FAC9D0","#FACDD3","#FBD0D6","#FBD2D8","#FBD6DB","#FBD8DD","#FBDCE0","#FBDFE3","#FCE1E6","#FCE5E8","#FDE8EA","#FDEAED","#FDEEEF","#FEF0F3","#FEF3F5","#FEF7F7","#FFF9FA","#FFFCFC","#000001","#070000","#0E0003","#140003","#1A0005","#1F0007","#250007","#2A0009","#2F030A","#32030A","#37030C","#3C030E","#40030E","#45030F","#490311","#4E0311","#520513","#550514","#590514","#5D0516","#610517","#650517","#690519","#6D051A","#71071A","#74071B","#78071B","#7C071D","#80071E","#84071E","#87071F","#8B0721","#8F0921","#920922","#950923","#990923","#9D0925","#A00926","#A40926","#A70927","#AB0A29","#AE0A29","#B10A2A","#B50A2B","#B80A2B","#BB0A2C","#BF0A2E","#C20A2E","#C60C2F","#C80C2F","#CC0C30","#CF0C31","#D20C31","#D60C32","#D90C34","#DC0C34","#E00E35","#E20E36","#E60E36","#E90E37","#EC0E38","#EF0E38","#F30E39","#F60E3B","#F90F3B","#F9143F","#F91A43","#F91F46","#F9254A","#F92A4E","#F92F51","#F93455","#FA3858","#FA3C5B","#FA405F","#FA4562","#FA4965","#FA4E69","#FA526C","#FA566F","#FB5A73","#FB5D76","#FB617A","#FB657D","#FB6980","#FB6D84","#FB7186","#FB7589","#FB798D","#FB7C90","#FB8093","#FB8496","#FB8799","#FB8B9C","#FB8F9F","#FB93A2","#FC96A5","#FC99A8","#FC9DAB","#FCA0AE","#FCA4B1","#FCA7B4","#FCABB6","#FCAEBA","#FDB2BC","#FDB5C0","#FDB8C2","#FDBBC5","#FDBFC8","#FDC2CB","#FDC6CD","#FDC9D1","#FECDD3","#FECFD6","#FED2D9","#FED6DC","#FED9DE","#FEDCE1","#FEE0E4","#FEE3E6","#FFE6EA","#FFE9EC","#FFECEF","#FFEFF2","#FFF3F4","#FFF6F7","#FFF9FA","#FFFCFC","#000001","#050303","#090707","#0C0A0A","#0F0E0E","#131111","#161414","#191717","#1D1A1A","#1F1B1B","#221E1E","#252121","#272323","#2A2626","#2C2929","#2F2B2B","#322E2E","#352F30","#373131","#393434","#3C3636","#3E3838","#403B3B","#433D3D","#463F3F","#484041","#4A4344","#4C4545","#4F4747","#514949","#534B4B","#554E4E","#585050","#5A5152","#5C5354","#5E5556","#605757","#625959","#645B5B","#665D5D","#695F5F","#6B6061","#6D6263","#6F6465","#716667","#736868","#756A6A","#776C6C","#7A6E6E","#7C6F70","#7E7172","#807374","#827576","#847777","#867979","#877B7B","#8A7D7D","#8C7E7F","#8E8081","#908283","#928485","#938686","#958787","#978989","#9A8B8B","#9B8D8D","#9D8F8F","#9E9192","#A09393","#A29495","#A49697","#A69899","#A79B9B","#A89D9D","#AA9E9E","#ACA0A0","#AEA2A3","#AFA4A5","#B1A6A6","#B3A7A8","#B5AAAA","#B5ACAC","#B7AEAE","#B9AFAF","#BBB1B2","#BCB3B4","#BEB5B5","#C0B6B7","#C1B9B9","#C2BBBB","#C4BCBC","#C6BEBE","#C7C0C0","#C9C1C2","#CBC3C4","#CDC5C6","#CEC7C7","#CFC9C9","#D1CBCB","#D2CDCD","#D4CECE","#D6D0D0","#D7D2D2","#D9D3D4","#DBD6D6","#DCD7D7","#DDD9D9","#DFDBDB","#E1DCDC","#E2DEDE","#E4E0E0","#E6E1E2","#E7E4E4","#E8E6E6","#EAE7E7","#EBE9E9","#EDEAEA","#EFECEC","#F0EEEE","#F2EFEF","#F3F2F2","#F4F3F3","#F6F5F5","#F7F7F7","#F9F8F8","#FBFAFA","#FCFBFB","#FEFDFD","#000001","#050303","#090707","#0E0909","#110C0C","#140F0F","#191111","#1B1414","#1F1717","#221919","#251B1B","#291D1E","#2B1F1F","#2E2222","#312325","#342626","#372929","#392A2B","#3C2C2C","#3F2E2F","#413031","#443232","#473435","#493637","#4C3838","#4F393B","#513C3D","#543D3E","#563F40","#584143","#5B4344","#5D4546","#604748","#624849","#644A4B","#674B4E","#694E4F","#6B5051","#6E5153","#705354","#735556","#755658","#775859","#7A595B","#7C5B5D","#7E5D5E","#815E60","#836062","#866263","#876365","#896567","#8C6668","#8E686A","#906A6B","#936B6D","#946D6F","#976F70","#997072","#9B7274","#9D7375","#9F7577","#A17779","#A4787A","#A67A7C","#A87C7E","#A97E80","#AB8082","#AC8385","#AE8586","#AF8688","#B0898B","#B28B8D","#B48E8F","#B59092","#B69293","#B79495","#B99698","#BB989A","#BB9B9D","#BD9D9E","#BF9FA0","#C0A1A3","#C1A3A5","#C2A6A6","#C4A7A9","#C6A9AB","#C7ACAD","#C8AEAF","#CAB0B1","#CBB2B3","#CDB4B5","#CDB6B7","#CFB8B9","#D1BABB","#D2BCBD","#D3BEBF","#D5C1C1","#D6C2C3","#D7C4C5","#D8C7C7","#DAC8C9","#DCCACB","#DCCDCD","#DECECF","#E0D1D1","#E1D2D3","#E2D4D5","#E3D7D7","#E5D8D9","#E6DADB","#E7DCDC","#E9DEDF","#EAE1E1","#EBE2E2","#EDE4E5","#EEE6E6","#EFE8E8","#F1EAEA","#F2ECEC","#F3EEEE","#F5F0F0","#F6F2F2","#F7F3F3","#F8F6F6","#FAF7F7","#FBF9F9","#FCFBFB","#FEFDFD","#000001","#050303","#0A0505","#0E0909","#130A0A","#170C0E","#1A0F0F","#1E1113","#221414","#251616","#291719","#2B1A1A","#2F1B1D","#321D1E","#351F21","#382122","#3C2323","#3E2526","#412627","#44292A","#472A2B","#4A2B2E","#4C2E2F","#502F30","#533132","#553234","#583436","#5A3637","#5D3739","#60383B","#623B3D","#653C3E","#683E3F","#6A3F41","#6D4043","#6F4345","#724446","#754548","#774749","#7A484A","#7D4A4C","#7F4B4E","#824C50","#844F51","#865053","#895154","#8B5355","#8E5457","#915658","#93575A","#95585B","#975A5D","#9A5B5E","#9D5C5F","#9E5E61","#A15F62","#A46164","#A66265","#A86367","#AA6568","#AD666A","#AF676B","#B1696C","#B46A6E","#B66C6F","#B76E72","#B87174","#BA7377","#BB767A","#BB797C","#BD7B7F","#BE7E81","#C08184","#C18386","#C18688","#C3878A","#C48A8D","#C58D90","#C78F92","#C79294","#C99496","#CA9699","#CB999B","#CD9B9D","#CD9DA0","#CEA0A2","#D0A2A5","#D1A5A6","#D2A7A9","#D3A9AB","#D4ACAE","#D6AEB0","#D7B0B2","#D7B3B5","#D9B5B6","#DAB7B9","#DCBABB","#DCBBBD","#DDBEC0","#DFC0C1","#E0C2C4","#E1C5C6","#E2C7C8","#E3C9CA","#E5CCCD","#E6CDCE","#E6D0D1","#E8D2D3","#E9D4D5","#EAD7D7","#EBD8D9","#ECDBDC","#EEDDDD","#EFDFE0","#EFE1E2","#F1E3E4","#F2E6E6","#F3E8E8","#F4EAEA","#F5ECEC","#F7EFEF","#F7F0F1","#F8F3F3","#FAF4F5","#FBF7F7","#FBF9F9","#FDFBFB","#FEFDFD","#000001","#050303","#0A0505","#0F0707","#140909","#190A0C","#1D0C0E","#210E0F","#251111","#271313","#2B1416","#2F1617","#321719","#36191A","#391A1B","#3D1B1E","#401E1F","#431F21","#462122","#492223","#4C2326","#502527","#532629","#56272A","#592A2B","#5B2B2E","#5E2C2F","#612E30","#642F31","#673034","#6A3135","#6D3236","#703537","#723638","#75373B","#78383C","#7B393D","#7E3B3E","#813C3F","#843D41","#863F43","#884044","#8B4145","#8E4346","#914448","#934549","#96464A","#99474B","#9C494C","#9D4A4F","#A04B50","#A34C51","#A64E52","#A84F53","#AB5055","#AE5156","#B05357","#B25458","#B5555A","#B7565B","#BA575C","#BC585D","#BF595E","#C15A60","#C45C61","#C55E64","#C66166","#C76469","#C7676C","#C86A6F","#C96D72","#CA7074","#CC7377","#CD757A","#CD787D","#CE7B7F","#CF7E82","#D08185","#D18487","#D2868A","#D3898C","#D48B8F","#D58E92","#D69194","#D79397","#D79699","#D8999C","#D99C9E","#DB9EA1","#DCA0A4","#DCA3A6","#DDA6A8","#DEA8AB","#DFABAE","#E0AEB0","#E1B0B2","#E2B3B5","#E3B5B7","#E4B7BA","#E5BABC","#E6BCBE","#E6BFC1","#E7C1C3","#E8C4C6","#EAC7C7","#EAC8CA","#EBCBCD","#ECCDCF","#EDD0D2","#EED2D3","#EFD5D6","#EFD7D8","#F1DADB","#F2DCDD","#F3DEDF","#F3E1E1","#F4E3E4","#F5E6E6","#F6E8E9","#F7EAEA","#F8EDED","#F9EFEF","#FAF1F2","#FBF3F4","#FBF6F6","#FCF8F8","#FDFBFB","#FEFDFD","#000001","#070000","#0C0303","#110505","#160707","#1A0909","#1E0A0A","#220C0C","#270E0E","#2B0E0F","#2F0F11","#321113","#361314","#391416","#3D1617","#401719","#45191A","#48191B","#4B1A1D","#4F1B1E","#521D1F","#551E21","#581F22","#5B2123","#5F2225","#622226","#652327","#682529","#6B262A","#6E272B","#71292C","#742A2E","#782B2F","#7B2B30","#7E2C31","#812E32","#842F34","#863035","#893136","#8C3237","#903438","#933439","#95353B","#98363C","#9B373D","#9D383E","#A0393F","#A33B40","#A63C41","#A93C43","#AC3D44","#AE3E45","#B13F45","#B44046","#B64147","#B94348","#BC4449","#BF444A","#C1454B","#C4464C","#C7474E","#C9484F","#CC4950","#CE4A51","#D24B52","#D24F55","#D25258","#D3555B","#D4585E","#D55B61","#D65E64","#D76167","#D7656A","#D7686D","#D86B70","#D96E73","#DA7176","#DB747A","#DC777D","#DC7A80","#DD7E83","#DD8186","#DE8488","#DF868B","#E0898E","#E18C91","#E18F93","#E29296","#E39599","#E3989C","#E49B9E","#E59DA1","#E6A0A4","#E6A3A6","#E7A6A9","#E8A8AC","#E9ACAE","#E9AEB1","#EAB1B4","#EAB4B6","#EBB6B9","#ECB9BB","#EDBBBE","#EEBEC1","#EFC1C3","#EFC4C6","#EFC7C8","#F0C9CB","#F1CCCD","#F2CED0","#F3D1D2","#F3D3D5","#F4D7D7","#F4D9DA","#F5DCDC","#F6DEDF","#F7E1E1","#F7E3E4","#F8E6E6","#F9E8E9","#FAEBEB","#FAEEEE","#FBF0F0","#FBF3F3","#FCF5F5","#FDF7F7","#FEFAFA","#FFFCFC","#000001","#070000","#0C0303","#130305","#170507","#1B0707","#210709","#25090A","#2A0A0C","#2E0A0C","#310C0E","#360C0F","#390E11","#3D0F11","#410F13","#451114","#491316","#4C1316","#501417","#541419","#57161A","#5A171A","#5E171B","#61191D","#651A1E","#681A1E","#6B1B1F","#6F1B21","#721D22","#751E22","#791E23","#7C1F25","#802126","#832126","#862227","#892229","#8C232A","#8F252A","#93252B","#95262C","#99272E","#9C272E","#9E292F","#A22930","#A52A31","#A72B31","#AB2B32","#AE2C34","#B12E35","#B42E35","#B62F36","#BA2F37","#BC3038","#BF3138","#C23139","#C5323B","#C8343C","#CB343C","#CD353D","#D1353E","#D3363F","#D6373F","#D93740","#DC3841","#DF3943","#DF3D46","#E04049","#E0454C","#E14851","#E14B54","#E15057","#E2535A","#E3575E","#E35A61","#E45D64","#E46167","#E5646B","#E6676E","#E66B71","#E66E74","#E77278","#E7757B","#E8787E","#E87C81","#E97F85","#EA8287","#EA868A","#EA888D","#EB8C91","#EB8F93","#EC9296","#EC9599","#ED989D","#EE9B9F","#EE9EA2","#EFA1A5","#EFA5A8","#EFA7AB","#F0AAAE","#F0AEB0","#F1B0B4","#F2B3B6","#F2B6B9","#F3B9BB","#F3BCBF","#F3BFC1","#F4C1C4","#F4C5C7","#F5C7CA","#F6CACD","#F6CDCF","#F7D0D2","#F7D3D5","#F7D6D7","#F8D8DA","#F8DCDC","#F9DEE0","#FAE1E2","#FAE4E5","#FBE6E7","#FBEAEA","#FBECED","#FCEFEF","#FCF2F2","#FDF4F5","#FEF7F7","#FEFAFA","#FFFCFC","#000001","#070000","#0E0003","#130303","#190305","#1E0305","#220507","#270507","#2C0709","#300709","#35070A","#38090A","#3D090C","#41090C","#450A0E","#490A0E","#4E0C0F","#510C0F","#550C11","#580E13","#5C0E13","#600E14","#630F14","#670F16","#6B1116","#6E1117","#721117","#751319","#791319","#7D131A","#80141A","#84141B","#87161B","#8A161D","#8E161D","#91171E","#94171E","#98171F","#9B1921","#9E1921","#A21A22","#A51A22","#A81A23","#AB1B23","#AE1B25","#B21B25","#B51D26","#B81D26","#BB1E27","#BE1E27","#C11E29","#C41F29","#C71F2A","#CB1F2A","#CD212B","#D1212C","#D4222C","#D7222E","#DA222E","#DC232F","#E0232F","#E32330","#E62530","#E92531","#EC2631","#EC2A36","#EC2F39","#ED323E","#ED3741","#ED3C46","#EE3F49","#EE444E","#EF4851","#EF4B55","#EF5058","#EF535B","#EF575F","#EF5B62","#F05E66","#F06269","#F1666D","#F16970","#F16D74","#F27077","#F2747B","#F2787E","#F37B82","#F37F85","#F38388","#F3868B","#F3898F","#F48C92","#F49094","#F49398","#F5969B","#F59A9E","#F69DA1","#F6A0A5","#F6A4A7","#F7A6AB","#F7AAAE","#F7AEB1","#F7B0B4","#F7B4B7","#F8B7BA","#F8BABD","#F8BDC0","#F9C0C3","#F9C3C6","#F9C7C9","#FAC9CC","#FACDCE","#FBD0D2","#FBD2D4","#FBD6D7","#FBD8DA","#FBDCDD","#FBDFE0","#FCE1E3","#FCE5E6","#FDE8E9","#FDEAEB","#FDEEEF","#FEF0F1","#FEF3F4","#FEF7F7","#FFF9FA","#FFFCFC","#000001","#070000","#0E0000","#140000","#1A0003","#1F0003","#250003","#2A0005","#2F0305","#320305","#370307","#3C0307","#400307","#450307","#490309","#4E0309","#520509","#55050A","#59050A","#5D050A","#61050C","#65050C","#69050C","#6D050C","#71070E","#74070E","#78070E","#7C070F","#80070F","#84070F","#870711","#8B0711","#8F0911","#920911","#950913","#990913","#9D0913","#A00914","#A40914","#A70914","#AB0A16","#AE0A16","#B10A16","#B50A16","#B80A17","#BB0A17","#BF0A17","#C20A19","#C60C19","#C80C19","#CC0C1A","#CF0C1A","#D20C1A","#D60C1A","#D90C1B","#DC0C1B","#E00E1B","#E20E1D","#E60E1D","#E90E1D","#EC0E1E","#EF0E1E","#F30E1E","#F60E1E","#F90F1F","#F91423","#F91A29","#F91F2E","#F92532","#F92A36","#F92F3B","#F9343F","#FA3843","#FA3C47","#FA404B","#FA454F","#FA4953","#FA4E57","#FA525B","#FA565E","#FB5A62","#FB5D66","#FB6169","#FB656D","#FB6971","#FB6D74","#FB7178","#FB757C","#FB7980","#FB7C83","#FB8086","#FB848A","#FB878D","#FB8B91","#FB8F94","#FB9397","#FC969B","#FC999E","#FC9DA2","#FCA0A5","#FCA4A8","#FCA7AC","#FCABAE","#FCAEB2","#FDB2B5","#FDB5B8","#FDB8BB","#FDBBBF","#FDBFC2","#FDC2C5","#FDC6C8","#FDC9CC","#FECDCE","#FECFD2","#FED2D5","#FED6D7","#FED9DB","#FEDCDE","#FEE0E1","#FEE3E4","#FFE6E7","#FFE9EA","#FFECED","#FFEFF0","#FFF3F3","#FFF6F6","#FFF9F9","#FFFCFC"];