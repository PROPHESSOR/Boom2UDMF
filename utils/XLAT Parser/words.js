var xlat = [
    {
        "boom": "1",
        "flags": "USE|MONST|REP",
        "udmf": "Door_Raise (0, D_SLOW, VDOORWAIT, tag)"
    },
    {
        "boom": "2",
        "flags": "WALK",
        "udmf": "Door_Open (tag, D_SLOW)"
    },
    {
        "boom": "3",
        "flags": "WALK",
        "udmf": "Door_Close (tag, D_SLOW)"
    },
    {
        "boom": "4",
        "flags": "WALK|MONST",
        "udmf": "Door_Raise (tag, D_SLOW, VDOORWAIT)"
    },
    {
        "boom": "5",
        "flags": "WALK",
        "udmf": "Floor_RaiseToLowestCeiling (tag, F_SLOW)"
    },
    {
        "boom": "6",
        "flags": "WALK",
        "udmf": "Ceiling_CrushAndRaiseA (tag, C_NORMAL, C_NORMAL, 10)"
    },
    {
        "boom": "7",
        "flags": "USE",
        "udmf": "Stairs_BuildUpDoom (tag, ST_SLOW, 8)"
    },
    {
        "boom": "8",
        "flags": "WALK",
        "udmf": "Stairs_BuildUpDoom (tag, ST_SLOW, 8)"
    },
    {
        "boom": "9",
        "flags": "USE",
        "udmf": "Floor_Donut (tag, DORATE, DORATE)"
    },
    {
        "boom": "10",
        "flags": "WALK|MONST",
        "udmf": "Plat_DownWaitUpStayLip (tag, P_FAST, PLATWAIT, 0)"
    },
    {
        "boom": "11",
        "flags": "USE",
        "udmf": "Exit_Normal (0)"
    },
    {
        "boom": "12",
        "flags": "WALK",
        "udmf": "Light_MaxNeighbor (tag)"
    },
    {
        "boom": "13",
        "flags": "WALK",
        "udmf": "Light_ChangeToValue (tag, 255)"
    },
    {
        "boom": "14",
        "flags": "USE",
        "udmf": "Plat_UpByValueStayTx (tag, P_SLOW"
    },
    {
        "boom": "15",
        "flags": "USE",
        "udmf": "Plat_UpByValueStayTx (tag, P_SLOW"
    },
    {
        "boom": "16",
        "flags": "WALK",
        "udmf": "Door_CloseWaitOpen (tag, D_SLOW, 240)"
    },
    {
        "boom": "17",
        "flags": "WALK",
        "udmf": "Light_StrobeDoom (tag, 5, 35)"
    },
    {
        "boom": "18",
        "flags": "USE",
        "udmf": "Floor_RaiseToNearest (tag, F_SLOW)"
    },
    {
        "boom": "19",
        "flags": "WALK",
        "udmf": "Floor_LowerToHighest (tag, F_SLOW, 128)"
    },
    {
        "boom": "20",
        "flags": "USE",
        "udmf": "Plat_RaiseAndStayTx0 (tag, P_SLOW"
    },
    {
        "boom": "21",
        "flags": "USE",
        "udmf": "Plat_DownWaitUpStayLip (tag, P_FAST, PLATWAIT)"
    },
    {
        "boom": "22",
        "flags": "WALK",
        "udmf": "Plat_RaiseAndStayTx0 (tag, P_SLOW"
    },
    {
        "boom": "23",
        "flags": "USE",
        "udmf": "Floor_LowerToLowest (tag, F_SLOW)"
    },
    {
        "boom": "24",
        "flags": "SHOOT",
        "udmf": "Floor_RaiseToLowestCeiling (tag, F_SLOW)"
    },
    {
        "boom": "25",
        "flags": "WALK",
        "udmf": "Ceiling_CrushAndRaiseA (tag, C_SLOW, C_SLOW, 10)"
    },
    {
        "boom": "26",
        "flags": "USE|REP",
        "udmf": "Door_LockedRaise (0, D_SLOW, VDOORWAIT, BCard "
    },
    {
        "boom": "27",
        "flags": "USE|REP",
        "udmf": "Door_LockedRaise (0, D_SLOW, VDOORWAIT, YCard "
    },
    {
        "boom": "28",
        "flags": "USE|REP",
        "udmf": "Door_LockedRaise (0, D_SLOW, VDOORWAIT, RCard "
    },
    {
        "boom": "29",
        "flags": "USE",
        "udmf": "Door_Raise (tag, D_SLOW, VDOORWAIT)"
    },
    {
        "boom": "30",
        "flags": "WALK",
        "udmf": "Floor_RaiseByTexture (tag, F_SLOW)"
    },
    {
        "boom": "31",
        "flags": "USE",
        "udmf": "Door_Open (0, D_SLOW, tag)"
    },
    {
        "boom": "32",
        "flags": "USE|MONST",
        "udmf": "Door_LockedRaise (0, D_SLOW, 0, BCard "
    },
    {
        "boom": "33",
        "flags": "USE|MONST",
        "udmf": "Door_LockedRaise (0, D_SLOW, 0, RCard "
    },
    {
        "boom": "34",
        "flags": "USE|MONST",
        "udmf": "Door_LockedRaise (0, D_SLOW, 0, YCard "
    },
    {
        "boom": "35",
        "flags": "WALK",
        "udmf": "Light_ChangeToValue (tag, 35)"
    },
    {
        "boom": "36",
        "flags": "WALK",
        "udmf": "Floor_LowerToHighest (tag, F_FAST, 136)"
    },
    {
        "boom": "37",
        "flags": "WALK",
        "udmf": "Floor_LowerToLowestTxTy (tag, F_SLOW)"
    },
    {
        "boom": "38",
        "flags": "WALK",
        "udmf": "Floor_LowerToLowest (tag, F_SLOW)"
    },
    {
        "boom": "39",
        "flags": "WALK|MONST",
        "udmf": "Teleport (0, tag)"
    },
    {
        "boom": "40",
        "flags": "WALK",
        "udmf": "Generic_Ceiling (tag, C_SLOW, 0, 1, 8)"
    },
    {
        "boom": "41",
        "flags": "USE",
        "udmf": "Ceiling_LowerToFloor (tag, C_SLOW)"
    },
    {
        "boom": "42",
        "flags": "USE|REP",
        "udmf": "Door_Close (tag, D_SLOW)"
    },
    {
        "boom": "43",
        "flags": "USE|REP",
        "udmf": "Ceiling_LowerToFloor (tag, C_SLOW)"
    },
    {
        "boom": "44",
        "flags": "WALK",
        "udmf": "Ceiling_LowerAndCrush (tag, C_SLOW, 0, 2)"
    },
    {
        "boom": "45",
        "flags": "USE|REP",
        "udmf": "Floor_LowerToHighest (tag, F_SLOW, 128)"
    },
    {
        "boom": "46",
        "flags": "SHOOT|REP|MONST",
        "udmf": "Door_Open (tag, D_SLOW)"
    },
    {
        "boom": "47",
        "flags": "SHOOT",
        "udmf": "Plat_RaiseAndStayTx0 (tag, P_SLOW"
    },
    {
        "boom": "48",
        "flags": "0",
        "udmf": "Scroll_Texture_Left (SCROLL_UNIT)"
    },
    {
        "boom": "49",
        "flags": "USE",
        "udmf": "Ceiling_CrushAndRaiseDist (tag, 8, C_SLOW, 10)"
    },
    {
        "boom": "50",
        "flags": "USE",
        "udmf": "Door_Close (tag, D_SLOW)"
    },
    {
        "boom": "51",
        "flags": "USE",
        "udmf": "Exit_Secret (0)"
    },
    {
        "boom": "52",
        "flags": "WALK",
        "udmf": "Exit_Normal (0)"
    },
    {
        "boom": "53",
        "flags": "WALK",
        "udmf": "Plat_PerpetualRaiseLip (tag, P_SLOW, PLATWAIT, 0)"
    },
    {
        "boom": "54",
        "flags": "WALK",
        "udmf": "Plat_Stop (tag)"
    },
    {
        "boom": "55",
        "flags": "USE",
        "udmf": "Floor_RaiseAndCrushDoom (tag, F_SLOW, 10, 2)"
    },
    {
        "boom": "56",
        "flags": "WALK",
        "udmf": "Floor_RaiseAndCrushDoom (tag, F_SLOW, 10, 2)"
    },
    {
        "boom": "57",
        "flags": "WALK",
        "udmf": "Ceiling_CrushStop (tag)"
    },
    {
        "boom": "58",
        "flags": "WALK",
        "udmf": "Floor_RaiseByValue (tag, F_SLOW, 24)"
    },
    {
        "boom": "59",
        "flags": "WALK",
        "udmf": "Floor_RaiseByValueTxTy (tag, F_SLOW, 24)"
    },
    {
        "boom": "60",
        "flags": "USE|REP",
        "udmf": "Floor_LowerToLowest (tag, F_SLOW)"
    },
    {
        "boom": "61",
        "flags": "USE|REP",
        "udmf": "Door_Open (tag, D_SLOW)"
    },
    {
        "boom": "62",
        "flags": "USE|REP",
        "udmf": "Plat_DownWaitUpStayLip (tag, P_FAST, PLATWAIT, 0)"
    },
    {
        "boom": "63",
        "flags": "USE|REP",
        "udmf": "Door_Raise (tag, D_SLOW, VDOORWAIT)"
    },
    {
        "boom": "64",
        "flags": "USE|REP",
        "udmf": "Floor_RaiseToLowestCeiling (tag, F_SLOW)"
    },
    {
        "boom": "65",
        "flags": "USE|REP",
        "udmf": "Floor_RaiseAndCrushDoom (tag, F_SLOW, 10, 2)"
    },
    {
        "boom": "66",
        "flags": "USE|REP",
        "udmf": "Plat_UpByValueStayTx (tag, P_SLOW"
    },
    {
        "boom": "67",
        "flags": "USE|REP",
        "udmf": "Plat_UpByValueStayTx (tag, P_SLOW"
    },
    {
        "boom": "68",
        "flags": "USE|REP",
        "udmf": "Plat_RaiseAndStayTx0 (tag, P_SLOW"
    },
    {
        "boom": "69",
        "flags": "USE|REP",
        "udmf": "Floor_RaiseToNearest (tag, F_SLOW)"
    },
    {
        "boom": "70",
        "flags": "USE|REP",
        "udmf": "Floor_LowerToHighest (tag, F_FAST, 136)"
    },
    {
        "boom": "71",
        "flags": "USE",
        "udmf": "Floor_LowerToHighest (tag, F_FAST, 136)"
    },
    {
        "boom": "72",
        "flags": "WALK|REP",
        "udmf": "Ceiling_LowerAndCrush (tag, C_SLOW, 0, 2)"
    },
    {
        "boom": "73",
        "flags": "WALK|REP",
        "udmf": "Ceiling_CrushAndRaiseA (tag, C_SLOW, C_SLOW, 10)"
    },
    {
        "boom": "74",
        "flags": "WALK|REP",
        "udmf": "Ceiling_CrushStop (tag)"
    },
    {
        "boom": "75",
        "flags": "WALK|REP",
        "udmf": "Door_Close (tag, D_SLOW)"
    },
    {
        "boom": "76",
        "flags": "WALK|REP",
        "udmf": "Door_CloseWaitOpen (tag, D_SLOW, 240)"
    },
    {
        "boom": "77",
        "flags": "WALK|REP",
        "udmf": "Ceiling_CrushAndRaiseA (tag, C_NORMAL, C_NORMAL, 10)"
    },
    {
        "boom": "78",
        "flags": "USE|REP",
        "udmf": "Floor_TransferNumeric (tag)",
        "comment": "\t\t\t// <- BOOM special"
    },
    {
        "boom": "79",
        "flags": "WALK|REP",
        "udmf": "Light_ChangeToValue (tag, 35)"
    },
    {
        "boom": "80",
        "flags": "WALK|REP",
        "udmf": "Light_MaxNeighbor (tag)"
    },
    {
        "boom": "81",
        "flags": "WALK|REP",
        "udmf": "Light_ChangeToValue (tag, 255)"
    },
    {
        "boom": "82",
        "flags": "WALK|REP",
        "udmf": "Floor_LowerToLowest (tag, F_SLOW)"
    },
    {
        "boom": "83",
        "flags": "WALK|REP",
        "udmf": "Floor_LowerToHighest (tag, F_SLOW, 128)"
    },
    {
        "boom": "84",
        "flags": "WALK|REP",
        "udmf": "Floor_LowerToLowestTxTy (tag, F_SLOW)"
    },
    {
        "boom": "85",
        "flags": "0",
        "udmf": "Scroll_Texture_Right (SCROLL_UNIT) "
    },
    {
        "boom": "86",
        "flags": "WALK|REP",
        "udmf": "Door_Open (tag, D_SLOW)"
    },
    {
        "boom": "87",
        "flags": "WALK|REP",
        "udmf": "Plat_PerpetualRaiseLip (tag, P_SLOW, PLATWAIT, 0)"
    },
    {
        "boom": "88",
        "flags": "WALK|REP|MONST",
        "udmf": "Plat_DownWaitUpStayLip (tag, P_FAST, PLATWAIT, 0)"
    },
    {
        "boom": "89",
        "flags": "WALK|REP",
        "udmf": "Plat_Stop (tag)"
    },
    {
        "boom": "90",
        "flags": "WALK|REP",
        "udmf": "Door_Raise (tag, D_SLOW, VDOORWAIT)"
    },
    {
        "boom": "91",
        "flags": "WALK|REP",
        "udmf": "Floor_RaiseToLowestCeiling (tag, F_SLOW)"
    },
    {
        "boom": "92",
        "flags": "WALK|REP",
        "udmf": "Floor_RaiseByValue (tag, F_SLOW, 24)"
    },
    {
        "boom": "93",
        "flags": "WALK|REP",
        "udmf": "Floor_RaiseByValueTxTy (tag, F_SLOW, 24)"
    },
    {
        "boom": "94",
        "flags": "WALK|REP",
        "udmf": "Floor_RaiseAndCrushDoom (tag, F_SLOW, 10, 2)"
    },
    {
        "boom": "95",
        "flags": "WALK|REP",
        "udmf": "Plat_RaiseAndStayTx0 (tag, P_SLOW"
    },
    {
        "boom": "96",
        "flags": "WALK|REP",
        "udmf": "Floor_RaiseByTexture (tag, F_SLOW)"
    },
    {
        "boom": "97",
        "flags": "WALK|REP|MONST",
        "udmf": "Teleport (0, tag)"
    },
    {
        "boom": "98",
        "flags": "WALK|REP",
        "udmf": "Floor_LowerToHighest (tag, F_FAST, 136)"
    },
    {
        "boom": "99",
        "flags": "USE|REP",
        "udmf": "Door_LockedRaise (tag, D_FAST, 0, BCard "
    },
    {
        "boom": "100",
        "flags": "WALK",
        "udmf": "Stairs_BuildUpDoom (tag, ST_TURBO, 16, 0, 0)"
    },
    {
        "boom": "101",
        "flags": "USE",
        "udmf": "Floor_RaiseToLowestCeiling (tag, F_SLOW)"
    },
    {
        "boom": "102",
        "flags": "USE",
        "udmf": "Floor_LowerToHighest (tag, F_SLOW, 128)"
    },
    {
        "boom": "103",
        "flags": "USE",
        "udmf": "Door_Open (tag, D_SLOW)"
    },
    {
        "boom": "104",
        "flags": "WALK",
        "udmf": "Light_MinNeighbor (tag)"
    },
    {
        "boom": "105",
        "flags": "WALK|REP",
        "udmf": "Door_Raise (tag, D_FAST, VDOORWAIT)"
    },
    {
        "boom": "106",
        "flags": "WALK|REP",
        "udmf": "Door_Open (tag, D_FAST)"
    },
    {
        "boom": "107",
        "flags": "WALK|REP",
        "udmf": "Door_Close (tag, D_FAST)"
    },
    {
        "boom": "108",
        "flags": "WALK",
        "udmf": "Door_Raise (tag, D_FAST, VDOORWAIT)"
    },
    {
        "boom": "109",
        "flags": "WALK",
        "udmf": "Door_Open (tag, D_FAST)"
    },
    {
        "boom": "110",
        "flags": "WALK",
        "udmf": "Door_Close (tag, D_FAST)"
    },
    {
        "boom": "111",
        "flags": "USE",
        "udmf": "Door_Raise (tag, D_FAST, VDOORWAIT)"
    },
    {
        "boom": "112",
        "flags": "USE",
        "udmf": "Door_Open (tag, D_FAST)"
    },
    {
        "boom": "113",
        "flags": "USE",
        "udmf": "Door_Close (tag, D_FAST)"
    },
    {
        "boom": "114",
        "flags": "USE|REP",
        "udmf": "Door_Raise (tag, D_FAST, VDOORWAIT)"
    },
    {
        "boom": "115",
        "flags": "USE|REP",
        "udmf": "Door_Open (tag, D_FAST)"
    },
    {
        "boom": "116",
        "flags": "USE|REP",
        "udmf": "Door_Close (tag, D_FAST)"
    },
    {
        "boom": "117",
        "flags": "USE|REP",
        "udmf": "Door_Raise (0, D_FAST, VDOORWAIT, tag)"
    },
    {
        "boom": "118",
        "flags": "USE",
        "udmf": "Door_Open (0, D_FAST, tag)"
    },
    {
        "boom": "119",
        "flags": "WALK",
        "udmf": "Floor_RaiseToNearest (tag, F_SLOW)"
    },
    {
        "boom": "120",
        "flags": "WALK|REP",
        "udmf": "Plat_DownWaitUpStayLip (tag, P_TURBO, PLATWAIT, 0)"
    },
    {
        "boom": "121",
        "flags": "WALK",
        "udmf": "Plat_DownWaitUpStayLip (tag, P_TURBO, PLATWAIT, 0)"
    },
    {
        "boom": "122",
        "flags": "USE",
        "udmf": "Plat_DownWaitUpStayLip (tag, P_TURBO, PLATWAIT, 0)"
    },
    {
        "boom": "123",
        "flags": "USE|REP",
        "udmf": "Plat_DownWaitUpStayLip (tag, P_TURBO, PLATWAIT, 0)"
    },
    {
        "boom": "124",
        "flags": "WALK",
        "udmf": "Exit_Secret (0)"
    },
    {
        "boom": "125",
        "flags": "MONWALK",
        "udmf": "Teleport (0, tag)"
    },
    {
        "boom": "126",
        "flags": "MONWALK|REP",
        "udmf": "Teleport (0, tag)"
    },
    {
        "boom": "127",
        "flags": "USE",
        "udmf": "Stairs_BuildUpDoom (tag, ST_TURBO, 16, 0, 0)"
    },
    {
        "boom": "128",
        "flags": "WALK|REP",
        "udmf": "Floor_RaiseToNearest (tag, F_SLOW)"
    },
    {
        "boom": "129",
        "flags": "WALK|REP",
        "udmf": "Floor_RaiseToNearest (tag, F_FAST)"
    },
    {
        "boom": "130",
        "flags": "WALK",
        "udmf": "Floor_RaiseToNearest (tag, F_FAST)"
    },
    {
        "boom": "131",
        "flags": "USE",
        "udmf": "Floor_RaiseToNearest (tag, F_FAST)"
    },
    {
        "boom": "132",
        "flags": "USE|REP",
        "udmf": "Floor_RaiseToNearest (tag, F_FAST)"
    },
    {
        "boom": "133",
        "flags": "USE",
        "udmf": "Door_LockedRaise (tag, D_FAST, 0, BCard "
    },
    {
        "boom": "134",
        "flags": "USE|REP",
        "udmf": "Door_LockedRaise (tag, D_FAST, 0, RCard "
    },
    {
        "boom": "135",
        "flags": "USE",
        "udmf": "Door_LockedRaise (tag, D_FAST, 0, RCard "
    },
    {
        "boom": "136",
        "flags": "USE|REP",
        "udmf": "Door_LockedRaise (tag, D_FAST, 0, YCard "
    },
    {
        "boom": "137",
        "flags": "USE",
        "udmf": "Door_LockedRaise (tag, D_FAST, 0, YCard "
    },
    {
        "boom": "138",
        "flags": "USE|REP",
        "udmf": "Light_ChangeToValue (tag, 255)"
    },
    {
        "boom": "139",
        "flags": "USE|REP",
        "udmf": "Light_ChangeToValue (tag, 35)"
    },
    {
        "boom": "140",
        "flags": "USE",
        "udmf": "Floor_RaiseByValueTimes8 (tag, F_SLOW, 64)"
    },
    {
        "boom": "141",
        "flags": "WALK",
        "udmf": "Ceiling_CrushAndRaiseSilentA (tag, C_SLOW, C_SLOW, 10)"
    },
    {
        "boom": "142",
        "flags": "WALK",
        "udmf": "Floor_RaiseByValueTimes8 (tag, F_SLOW, 64)"
    },
    {
        "boom": "143",
        "flags": "WALK",
        "udmf": "Plat_UpByValueStayTx (tag, P_SLOW"
    },
    {
        "boom": "144",
        "flags": "WALK",
        "udmf": "Plat_UpByValueStayTx (tag, P_SLOW"
    },
    {
        "boom": "145",
        "flags": "WALK",
        "udmf": "Ceiling_LowerToFloor (tag, C_SLOW)"
    },
    {
        "boom": "146",
        "flags": "WALK",
        "udmf": "Floor_Donut (tag, DORATE, DORATE)"
    },
    {
        "boom": "147",
        "flags": "WALK|REP",
        "udmf": "Floor_RaiseByValueTimes8 (tag, F_SLOW, 64)"
    },
    {
        "boom": "148",
        "flags": "WALK|REP",
        "udmf": "Plat_UpByValueStayTx (tag, P_SLOW"
    },
    {
        "boom": "149",
        "flags": "WALK|REP",
        "udmf": "Plat_UpByValueStayTx (tag, P_SLOW"
    },
    {
        "boom": "150",
        "flags": "WALK|REP",
        "udmf": "Ceiling_CrushAndRaiseSilentA (tag, C_SLOW, C_SLOW, 10)"
    },
    {
        "boom": "151",
        "flags": "WALK|REP",
        "udmf": "FloorAndCeiling_LowerRaise (tag, F_SLOW, C_SLOW)"
    },
    {
        "boom": "152",
        "flags": "WALK|REP",
        "udmf": "Ceiling_LowerToFloor (tag, C_SLOW)"
    },
    {
        "boom": "153",
        "flags": "WALK",
        "udmf": "Floor_TransferTrigger (tag)"
    },
    {
        "boom": "154",
        "flags": "WALK|REP",
        "udmf": "Floor_TransferTrigger (tag)"
    },
    {
        "boom": "155",
        "flags": "WALK|REP",
        "udmf": "Floor_Donut (tag, DORATE, DORATE)"
    },
    {
        "boom": "156",
        "flags": "WALK|REP",
        "udmf": "Light_StrobeDoom (tag, 5, 35)"
    },
    {
        "boom": "157",
        "flags": "WALK|REP",
        "udmf": "Light_MinNeighbor (tag)"
    },
    {
        "boom": "158",
        "flags": "USE",
        "udmf": "Floor_RaiseByTexture (tag, F_SLOW)"
    },
    {
        "boom": "159",
        "flags": "USE",
        "udmf": "Floor_LowerToLowestTxTy (tag, F_SLOW)"
    },
    {
        "boom": "160",
        "flags": "USE",
        "udmf": "Floor_RaiseByValueTxTy (tag, F_SLOW, 24)"
    },
    {
        "boom": "161",
        "flags": "USE",
        "udmf": "Floor_RaiseByValue (tag, F_SLOW, 24)"
    },
    {
        "boom": "162",
        "flags": "USE",
        "udmf": "Plat_PerpetualRaiseLip (tag, P_SLOW, PLATWAIT, 0)"
    },
    {
        "boom": "163",
        "flags": "USE",
        "udmf": "Plat_Stop (tag)"
    },
    {
        "boom": "164",
        "flags": "USE",
        "udmf": "Ceiling_CrushAndRaiseA (tag, C_NORMAL, C_NORMAL, 10)"
    },
    {
        "boom": "165",
        "flags": "USE",
        "udmf": "Ceiling_CrushAndRaiseSilentA (tag, C_SLOW, C_SLOW, 10)"
    },
    {
        "boom": "166",
        "flags": "USE",
        "udmf": "FloorAndCeiling_LowerRaise (tag, F_SLOW, C_SLOW, 1998)"
    },
    {
        "boom": "167",
        "flags": "USE",
        "udmf": "Ceiling_LowerAndCrush (tag, C_SLOW, 0, 2)"
    },
    {
        "boom": "168",
        "flags": "USE",
        "udmf": "Ceiling_CrushStop (tag)"
    },
    {
        "boom": "169",
        "flags": "USE",
        "udmf": "Light_MaxNeighbor (tag)"
    },
    {
        "boom": "170",
        "flags": "USE",
        "udmf": "Light_ChangeToValue (tag, 35)"
    },
    {
        "boom": "171",
        "flags": "USE",
        "udmf": "Light_ChangeToValue (tag, 255)"
    },
    {
        "boom": "172",
        "flags": "USE",
        "udmf": "Light_StrobeDoom (tag, 5, 35)"
    },
    {
        "boom": "173",
        "flags": "USE",
        "udmf": "Light_MinNeighbor (tag)"
    },
    {
        "boom": "174",
        "flags": "USE|MONST",
        "udmf": "Teleport (0, tag)"
    },
    {
        "boom": "175",
        "flags": "USE",
        "udmf": "Door_CloseWaitOpen (tag, D_SLOW, 240)"
    },
    {
        "boom": "176",
        "flags": "USE|REP",
        "udmf": "Floor_RaiseByTexture (tag, F_SLOW)"
    },
    {
        "boom": "177",
        "flags": "USE|REP",
        "udmf": "Floor_LowerToLowestTxTy (tag, F_SLOW)"
    },
    {
        "boom": "178",
        "flags": "USE|REP",
        "udmf": "Floor_RaiseByValueTimes8 (tag, F_SLOW, 64)"
    },
    {
        "boom": "179",
        "flags": "USE|REP",
        "udmf": "Floor_RaiseByValueTxTy (tag, F_SLOW, 24)"
    },
    {
        "boom": "180",
        "flags": "USE|REP",
        "udmf": "Floor_RaiseByValue (tag, F_SLOW, 24)"
    },
    {
        "boom": "181",
        "flags": "USE|REP",
        "udmf": "Plat_PerpetualRaiseLip (tag, P_SLOW, PLATWAIT, 0)"
    },
    {
        "boom": "182",
        "flags": "USE|REP",
        "udmf": "Plat_Stop (tag)"
    },
    {
        "boom": "183",
        "flags": "USE|REP",
        "udmf": "Ceiling_CrushAndRaiseA (tag, C_NORMAL, C_NORMAL, 10)"
    },
    {
        "boom": "184",
        "flags": "USE|REP",
        "udmf": "Ceiling_CrushAndRaiseA (tag, C_SLOW, C_SLOW, 10)"
    },
    {
        "boom": "185",
        "flags": "USE|REP",
        "udmf": "Ceiling_CrushAndRaiseSilentA (tag, C_SLOW, C_SLOW, 10)"
    },
    {
        "boom": "186",
        "flags": "USE|REP",
        "udmf": "FloorAndCeiling_LowerRaise (tag, F_SLOW, C_SLOW, 1998)"
    },
    {
        "boom": "187",
        "flags": "USE|REP",
        "udmf": "Ceiling_LowerAndCrush (tag, C_SLOW, 0, 2)"
    },
    {
        "boom": "188",
        "flags": "USE|REP",
        "udmf": "Ceiling_CrushStop (tag)"
    },
    {
        "boom": "189",
        "flags": "USE",
        "udmf": "Floor_TransferTrigger (tag)"
    },
    {
        "boom": "190",
        "flags": "USE|REP",
        "udmf": "Floor_TransferTrigger (tag)"
    },
    {
        "boom": "191",
        "flags": "USE|REP",
        "udmf": "Floor_Donut (tag, DORATE, DORATE)"
    },
    {
        "boom": "192",
        "flags": "USE|REP",
        "udmf": "Light_MaxNeighbor (tag)"
    },
    {
        "boom": "193",
        "flags": "USE|REP",
        "udmf": "Light_StrobeDoom (tag, 5, 35)"
    },
    {
        "boom": "194",
        "flags": "USE|REP",
        "udmf": "Light_MinNeighbor (tag)"
    },
    {
        "boom": "195",
        "flags": "USE|REP|MONST",
        "udmf": "Teleport (0, tag)"
    },
    {
        "boom": "196",
        "flags": "USE|REP",
        "udmf": "Door_CloseWaitOpen (tag, D_SLOW, 240)"
    },
    {
        "boom": "197",
        "flags": "SHOOT",
        "udmf": "Exit_Normal (0)"
    },
    {
        "boom": "198",
        "flags": "SHOOT",
        "udmf": "Exit_Secret (0)"
    },
    {
        "boom": "199",
        "flags": "WALK",
        "udmf": "Ceiling_LowerToLowest (tag, C_SLOW)"
    },
    {
        "boom": "200",
        "flags": "WALK",
        "udmf": "Ceiling_LowerToHighestFloor (tag, C_SLOW)"
    },
    {
        "boom": "201",
        "flags": "WALK|REP",
        "udmf": "Ceiling_LowerToLowest (tag, C_SLOW)"
    },
    {
        "boom": "202",
        "flags": "WALK|REP",
        "udmf": "Ceiling_LowerToHighestFloor (tag, C_SLOW)"
    },
    {
        "boom": "203",
        "flags": "USE",
        "udmf": "Ceiling_LowerToLowest (tag, C_SLOW)"
    },
    {
        "boom": "204",
        "flags": "USE",
        "udmf": "Ceiling_LowerToHighestFloor (tag, C_SLOW)"
    },
    {
        "boom": "205",
        "flags": "USE|REP",
        "udmf": "Ceiling_LowerToLowest (tag, C_SLOW)"
    },
    {
        "boom": "206",
        "flags": "USE|REP",
        "udmf": "Ceiling_LowerToHighestFloor (tag, C_SLOW)"
    },
    {
        "boom": "207",
        "flags": "WALK|MONST",
        "udmf": "Teleport_NoFog (0, 0, tag, 1)"
    },
    {
        "boom": "208",
        "flags": "WALK|REP|MONST",
        "udmf": "Teleport_NoFog (0, 0, tag, 1)"
    },
    {
        "boom": "209",
        "flags": "USE|MONST",
        "udmf": "Teleport_NoFog (0, 0, tag, 1)"
    },
    {
        "boom": "210",
        "flags": "USE|REP|MONST",
        "udmf": "Teleport_NoFog (0, 0, tag, 1)"
    },
    {
        "boom": "211",
        "flags": "USE|REP",
        "udmf": "Plat_ToggleCeiling (tag)"
    },
    {
        "boom": "212",
        "flags": "WALK|REP",
        "udmf": "Plat_ToggleCeiling (tag)"
    },
    {
        "boom": "213",
        "flags": "0",
        "udmf": "Transfer_FloorLight (tag)"
    },
    {
        "boom": "214",
        "flags": "0",
        "udmf": "Scroll_Ceiling (tag, 6, 0, 0, 0)"
    },
    {
        "boom": "215",
        "flags": "0",
        "udmf": "Scroll_Floor (tag, 6, 0, 0, 0)"
    },
    {
        "boom": "216",
        "flags": "0",
        "udmf": "Scroll_Floor (tag, 6, 1, 0, 0)"
    },
    {
        "boom": "217",
        "flags": "0",
        "udmf": "Scroll_Floor (tag, 6, 2, 0, 0)"
    },
    {
        "boom": "218",
        "flags": "0",
        "udmf": "Scroll_Texture_Model (lineid, 2)"
    },
    {
        "boom": "219",
        "flags": "WALK",
        "udmf": "Floor_LowerToNearest (tag, F_SLOW)"
    },
    {
        "boom": "220",
        "flags": "WALK|REP",
        "udmf": "Floor_LowerToNearest (tag, F_SLOW)"
    },
    {
        "boom": "221",
        "flags": "USE",
        "udmf": "Floor_LowerToNearest (tag, F_SLOW)"
    },
    {
        "boom": "222",
        "flags": "USE|REP",
        "udmf": "Floor_LowerToNearest (tag, F_SLOW)"
    },
    {
        "boom": "223",
        "flags": "0",
        "udmf": "Sector_SetFriction (tag, 0)"
    },
    {
        "boom": "224",
        "flags": "0",
        "udmf": "Sector_SetWind (tag, 0, 0, 1)"
    },
    {
        "boom": "225",
        "flags": "0",
        "udmf": "Sector_SetCurrent (tag, 0, 0, 1)"
    },
    {
        "boom": "226",
        "flags": "0",
        "udmf": "PointPush_SetForce (tag, 0, 0, 1)"
    },
    {
        "boom": "227",
        "flags": "WALK",
        "udmf": "Elevator_RaiseToNearest (tag, ELEVATORSPEED)"
    },
    {
        "boom": "228",
        "flags": "WALK|REP",
        "udmf": "Elevator_RaiseToNearest (tag, ELEVATORSPEED)"
    },
    {
        "boom": "229",
        "flags": "USE",
        "udmf": "Elevator_RaiseToNearest (tag, ELEVATORSPEED)"
    },
    {
        "boom": "230",
        "flags": "USE|REP",
        "udmf": "Elevator_RaiseToNearest (tag, ELEVATORSPEED)"
    },
    {
        "boom": "231",
        "flags": "WALK",
        "udmf": "Elevator_LowerToNearest (tag, ELEVATORSPEED)"
    },
    {
        "boom": "232",
        "flags": "WALK|REP",
        "udmf": "Elevator_LowerToNearest (tag, ELEVATORSPEED)"
    },
    {
        "boom": "233",
        "flags": "USE",
        "udmf": "Elevator_LowerToNearest (tag, ELEVATORSPEED)"
    },
    {
        "boom": "234",
        "flags": "USE|REP",
        "udmf": "Elevator_LowerToNearest (tag, ELEVATORSPEED)"
    },
    {
        "boom": "235",
        "flags": "WALK",
        "udmf": "Elevator_MoveToFloor (tag, ELEVATORSPEED)"
    },
    {
        "boom": "236",
        "flags": "WALK|REP",
        "udmf": "Elevator_MoveToFloor (tag, ELEVATORSPEED)"
    },
    {
        "boom": "237",
        "flags": "USE",
        "udmf": "Elevator_MoveToFloor (tag, ELEVATORSPEED)"
    },
    {
        "boom": "238",
        "flags": "USE|REP",
        "udmf": "Elevator_MoveToFloor (tag, ELEVATORSPEED)"
    },
    {
        "boom": "239",
        "flags": "WALK",
        "udmf": "Floor_TransferNumeric (tag)"
    },
    {
        "boom": "240",
        "flags": "WALK|REP",
        "udmf": "Floor_TransferNumeric (tag)"
    },
    {
        "boom": "241",
        "flags": "USE",
        "udmf": "Floor_TransferNumeric (tag)"
    },
    {
        "boom": "242",
        "flags": "0",
        "udmf": "Transfer_Heights (tag)"
    },
    {
        "boom": "243",
        "flags": "WALK|MONST",
        "udmf": "Teleport_Line (tag, tag, 0)"
    },
    {
        "boom": "244",
        "flags": "WALK|REP|MONST",
        "udmf": "Teleport_Line (tag, tag, 0)"
    },
    {
        "boom": "245",
        "flags": "0",
        "udmf": "Scroll_Ceiling (tag, 5, 0, 0, 0)"
    },
    {
        "boom": "246",
        "flags": "0",
        "udmf": "Scroll_Floor (tag, 5, 0, 0, 0)"
    },
    {
        "boom": "247",
        "flags": "0",
        "udmf": "Scroll_Floor (tag, 5, 1, 0, 0)"
    },
    {
        "boom": "248",
        "flags": "0",
        "udmf": "Scroll_Floor (tag, 5, 2, 0, 0)"
    },
    {
        "boom": "249",
        "flags": "0",
        "udmf": "Scroll_Texture_Model (lineid, 1)"
    },
    {
        "boom": "250",
        "flags": "0",
        "udmf": "Scroll_Ceiling (tag, 4, 0, 0, 0)"
    },
    {
        "boom": "251",
        "flags": "0",
        "udmf": "Scroll_Floor (tag, 4, 0, 0, 0)"
    },
    {
        "boom": "252",
        "flags": "0",
        "udmf": "Scroll_Floor (tag, 4, 1, 0, 0)"
    },
    {
        "boom": "253",
        "flags": "0",
        "udmf": "Scroll_Floor (tag, 4, 2, 0, 0)"
    },
    {
        "boom": "254",
        "flags": "0",
        "udmf": "Scroll_Texture_Model (lineid, 0)"
    },
    {
        "boom": "255",
        "flags": "0",
        "udmf": "Scroll_Texture_Offsets ()"
    },
    {
        "boom": "256",
        "flags": "WALK|REP",
        "udmf": "Stairs_BuildUpDoom (tag, ST_SLOW, 8, 0, 0)"
    },
    {
        "boom": "257",
        "flags": "WALK|REP",
        "udmf": "Stairs_BuildUpDoom (tag, ST_TURBO, 16, 0, 0)"
    },
    {
        "boom": "258",
        "flags": "USE|REP",
        "udmf": "Stairs_BuildUpDoom (tag, ST_SLOW, 8, 0, 0)"
    },
    {
        "boom": "259",
        "flags": "USE|REP",
        "udmf": "Stairs_BuildUpDoom (tag, ST_TURBO, 16, 0, 0)"
    },
    {
        "boom": "260",
        "flags": "0",
        "udmf": "TranslucentLine (lineid, 128)",
        "comment": "\t// Changed to better reflect the BOOM default"
    },
    {
        "boom": "261",
        "flags": "0",
        "udmf": "Transfer_CeilingLight (tag)"
    },
    {
        "boom": "262",
        "flags": "WALK|MONST",
        "udmf": "Teleport_Line (tag, tag, 1)"
    },
    {
        "boom": "263",
        "flags": "WALK|REP|MONST",
        "udmf": "Teleport_Line (tag, tag, 1)"
    },
    {
        "boom": "264",
        "flags": "MONWALK",
        "udmf": "Teleport_Line (tag, tag, 1)"
    },
    {
        "boom": "265",
        "flags": "MONWALK|REP",
        "udmf": "Teleport_Line (tag, tag, 1)"
    },
    {
        "boom": "266",
        "flags": "MONWALK",
        "udmf": "Teleport_Line (tag, tag, 0)"
    },
    {
        "boom": "267",
        "flags": "MONWALK|REP",
        "udmf": "Teleport_Line (tag, tag, 0)"
    },
    {
        "boom": "268",
        "flags": "MONWALK",
        "udmf": "Teleport_NoFog (0, 0, tag, 1)"
    },
    {
        "boom": "269",
        "flags": "MONWALK|REP",
        "udmf": "Teleport_NoFog (0, 0, tag, 1)"
    },
    {
        "boom": "270",
        "flags": "WALK|REP",
        "udmf": "FS_Execute(tag)"
    },
    {
        "boom": "271",
        "flags": "0",
        "udmf": "Static_Init (tag, Init_TransferSky, 0)"
    },
    {
        "boom": "272",
        "flags": "0",
        "udmf": "Static_Init (tag, Init_TransferSky, 1)"
    },
    {
        "boom": "273",
        "flags": "WALK|REP",
        "udmf": "FS_Execute(tag, 1)"
    },
    {
        "boom": "274",
        "flags": "WALK",
        "udmf": "FS_Execute(tag)"
    },
    {
        "boom": "275",
        "flags": "WALK",
        "udmf": "FS_Execute(tag, 1)"
    },
    {
        "boom": "276",
        "flags": "USE|REP",
        "udmf": "FS_Execute(tag)"
    },
    {
        "boom": "277",
        "flags": "USE",
        "udmf": "FS_Execute(tag)"
    },
    {
        "boom": "278",
        "flags": "SHOOT|REP",
        "udmf": "FS_Execute(tag)"
    },
    {
        "boom": "279",
        "flags": "SHOOT",
        "udmf": "FS_Execute(tag)"
    },
    {
        "boom": "280",
        "flags": "0",
        "udmf": "Transfer_Heights (tag, 12)"
    },
    {
        "boom": "281",
        "flags": "0",
        "udmf": "Sector_Set3DFloor(tag, 1, 0, 255)"
    },
    {
        "boom": "282",
        "flags": "0",
        "udmf": "Static_Init(tag, 1)"
    },
    {
        "boom": "284",
        "flags": "0",
        "udmf": "TranslucentLine (lineid, 128, 0)"
    },
    {
        "boom": "285",
        "flags": "0",
        "udmf": "TranslucentLine (lineid, 192, 0)"
    },
    {
        "boom": "286",
        "flags": "0",
        "udmf": "TranslucentLine (lineid,  48, 0)"
    },
    {
        "boom": "287",
        "flags": "0",
        "udmf": "TranslucentLine (lineid, 128, 1)"
    },
    {
        "boom": "288",
        "flags": "0",
        "udmf": "TranslucentLine(lineid, 255, 0)"
    },
    {
        "boom": "289",
        "flags": "0",
        "udmf": "Sector_Set3DFloor(tag, 1, 1, 255)"
    },
    {
        "boom": "300",
        "flags": "0",
        "udmf": "Sector_Set3DFloor(tag, 1, 1, 127)"
    },
    {
        "boom": "301",
        "flags": "0",
        "udmf": "Sector_Set3DFloor(tag, 2, 2, 127)"
    },
    {
        "boom": "302",
        "flags": "0",
        "udmf": "Sector_Set3DFloor(tag, 3, 6, 127)"
    },
    {
        "boom": "303",
        "flags": "0",
        "udmf": "Sector_Set3DFloor(tag, 3)"
    },
    {
        "boom": "304",
        "flags": "0",
        "udmf": "Sector_Set3DFloor(tag, 2, 2, 255)"
    },
    {
        "boom": "305",
        "flags": "0",
        "udmf": "Sector_Set3DFloor(tag, 3, 2)"
    },
    {
        "boom": "306",
        "flags": "0",
        "udmf": "Sector_Set3DFloor(tag, 1)"
    },
    {
        "boom": "332",
        "flags": "0",
        "udmf": "Sector_Set3DFloor(tag, 4)"
    },
    {
        "boom": "333",
        "flags": "0",
        "udmf": "Static_Init (tag, Init_Gravity)"
    },
    {
        "boom": "334",
        "flags": "0",
        "udmf": "Static_Init (tag, Init_Color)"
    },
    {
        "boom": "335",
        "flags": "0",
        "udmf": "Static_Init (tag, Init_Damage)"
    },
    {
        "boom": "336",
        "flags": "0",
        "udmf": "Line_Mirror ()"
    },
    {
        "boom": "337",
        "flags": "0",
        "udmf": "Line_Horizon ()"
    },
    {
        "boom": "338",
        "flags": "WALK",
        "udmf": "Floor_Waggle (tag, 24, 32, 0, 0)"
    },
    {
        "boom": "339",
        "flags": "WALK",
        "udmf": "Floor_Waggle (tag, 12, 32, 0, 0)"
    },
    {
        "boom": "340",
        "flags": "0",
        "udmf": "Plane_Align (1, 0)",
        "comment": "\t// Slope front floor"
    },
    {
        "boom": "341",
        "flags": "0",
        "udmf": "Plane_Align (0, 1)",
        "comment": "\t// Slope front ceiling"
    },
    {
        "boom": "342",
        "flags": "0",
        "udmf": "Plane_Align (1, 1)",
        "comment": "\t// Slope front floor and ceiling"
    },
    {
        "boom": "343",
        "flags": "0",
        "udmf": "Plane_Align (2, 0)",
        "comment": "\t// Slope back floor"
    },
    {
        "boom": "344",
        "flags": "0",
        "udmf": "Plane_Align (0, 2)",
        "comment": "\t// Slope back ceiling"
    },
    {
        "boom": "345",
        "flags": "0",
        "udmf": "Plane_Align (2, 2)",
        "comment": "\t// Slope back floor and ceiling"
    },
    {
        "boom": "346",
        "flags": "0",
        "udmf": "Plane_Align (2, 1)",
        "comment": "\t// Slope b.f. and f.c."
    },
    {
        "boom": "347",
        "flags": "0",
        "udmf": "Plane_Align (1, 2)",
        "comment": "\t// Slope f.f. and b.c."
    },
    {
        "boom": "348",
        "flags": "WALK",
        "udmf": "Autosave ()"
    },
    {
        "boom": "349",
        "flags": "USE",
        "udmf": "Autosave ()"
    },
    {
        "boom": "350",
        "flags": "0",
        "udmf": "Transfer_Heights (tag, 2)",
        "comment": "\t// Just fake the floor"
    },
    {
        "boom": "351",
        "flags": "0",
        "udmf": "Transfer_Heights (tag, 6)",
        "comment": "\t// Just fake the floor and clip it too"
    },
    {
        "boom": "352",
        "flags": "0",
        "udmf": "Sector_CopyScroller(tag, 1)",
        "comment": "\t// copy ceiling scroller"
    },
    {
        "boom": "353",
        "flags": "0",
        "udmf": "Sector_CopyScroller(tag, 2)",
        "comment": "\t// copy floor scroller"
    },
    {
        "boom": "354",
        "flags": "0",
        "udmf": "Sector_CopyScroller(tag, 6)",
        "comment": "\t// copy carrying floor scroller"
    },
    {
        "boom": "400",
        "flags": "0",
        "udmf": "Sector_Set3DFloor(tag, 1, 0, 255)"
    },
    {
        "boom": "401",
        "flags": "0",
        "udmf": "Sector_Set3DFloor(tag, 1, 16, 255)"
    },
    {
        "boom": "402",
        "flags": "0",
        "udmf": "Sector_Set3DFloor(tag, 1, 32, 255)"
    },
    {
        "boom": "403",
        "flags": "0",
        "udmf": "Sector_Set3DFloor(tag, 2, 2, 255)"
    },
    {
        "boom": "404",
        "flags": "0",
        "udmf": "Sector_Set3DFloor(tag, 2, 2, 204)"
    },
    {
        "boom": "405",
        "flags": "0",
        "udmf": "Sector_Set3DFloor(tag, 2, 2, 153)"
    },
    {
        "boom": "406",
        "flags": "0",
        "udmf": "Sector_Set3DFloor(tag, 2, 2, 102)"
    },
    {
        "boom": "407",
        "flags": "0",
        "udmf": "Sector_Set3DFloor(tag, 2, 2, 51)"
    },
    {
        "boom": "408",
        "flags": "0",
        "udmf": "Sector_Set3DFloor(tag, 2, 2)"
    },
    {
        "boom": "413",
        "flags": "0",
        "udmf": "Sector_Set3DFloor(tag, 1, 8, 255)"
    },
    {
        "boom": "414",
        "flags": "0",
        "udmf": "Sector_Set3DFloor(tag, 1, 8, 204)"
    },
    {
        "boom": "415",
        "flags": "0",
        "udmf": "Sector_Set3DFloor(tag, 1, 8, 153)"
    },
    {
        "boom": "416",
        "flags": "0",
        "udmf": "Sector_Set3DFloor(tag, 1, 8, 102)"
    },
    {
        "boom": "417",
        "flags": "0",
        "udmf": "Sector_Set3DFloor(tag, 1, 8, 51)"
    },
    {
        "boom": "409",
        "flags": "0",
        "udmf": "TranslucentLine (lineid, 204)",
        "comment": "\t// 80% translucent"
    },
    {
        "boom": "410",
        "flags": "0",
        "udmf": "TranslucentLine (lineid, 153)",
        "comment": "\t// 60% translucent"
    },
    {
        "boom": "411",
        "flags": "0",
        "udmf": "TranslucentLine (lineid, 101)",
        "comment": "\t// 40% translucent"
    },
    {
        "boom": "412",
        "flags": "0",
        "udmf": "TranslucentLine (lineid, 50)",
        "comment": "\t// 20% translucent"
    },
    {
        "boom": "422",
        "flags": "0",
        "udmf": "Scroll_Texture_Right (SCROLL_UNIT)"
    },
    {
        "boom": "423",
        "flags": "0",
        "udmf": "Scroll_Texture_Up (SCROLL_UNIT)"
    },
    {
        "boom": "424",
        "flags": "0",
        "udmf": "Scroll_Texture_Down (SCROLL_UNIT)"
    },
    {
        "boom": "425",
        "flags": "0",
        "udmf": "Scroll_Texture_Both (0, SCROLL_UNIT, 0, 0, SCROLL_UNIT)"
    },
    {
        "boom": "426",
        "flags": "0",
        "udmf": "Scroll_Texture_Both (0, SCROLL_UNIT, 0, SCROLL_UNIT, 0)"
    },
    {
        "boom": "427",
        "flags": "0",
        "udmf": "Scroll_Texture_Both (0, 0, SCROLL_UNIT, 0, SCROLL_UNIT)"
    },
    {
        "boom": "428",
        "flags": "0",
        "udmf": "Scroll_Texture_Both (0, 0, SCROLL_UNIT, SCROLL_UNIT, 0)"
    },
    {
        "boom": "434",
        "flags": "USE",
        "udmf": "Floor_RaiseByValue (tag, F_SLOW, 2)"
    },
    {
        "boom": "435",
        "flags": "USE|REP",
        "udmf": "Floor_RaiseByValue (tag, F_SLOW, 2)"
    },
    {
        "boom": "436",
        "flags": "WALK",
        "udmf": "Floor_RaiseByValue (tag, F_SLOW, 2)"
    },
    {
        "boom": "437",
        "flags": "WALK|REP",
        "udmf": "Floor_RaiseByValue (tag, F_SLOW, 2)"
    },
    {
        "boom": "438",
        "flags": "SHOOT",
        "udmf": "Floor_RaiseByValue (tag, F_SLOW, 2)"
    },
    {
        "boom": "439",
        "flags": "SHOOT|REP",
        "udmf": "Floor_RaiseByValue (tag, F_SLOW, 2)"
    }
];