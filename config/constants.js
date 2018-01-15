// Copyright (c) 2018 PROPHESSOR
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

"use strict";

/* eslint quotes:["error", "double"] */

// FIXME: 0x01 - не заполненные поля

module.exports = {
	"FLAGS": {
		"WALK": (0),
		"USE": (2),
		"SHOOT": (6),
		"MONST": (16),
		"MONWALK": (4),
		"REP": (1),
		"FIRSTSIDE":	(32)
	},
	"Door": {
		"Speed": {
			"Slow": 16,
			"Normal": 32,
			"Fast": 64,
			"Turbo": 128
		},
		"Key": {
			"YellowCard": 0x01,
			"YellowSkull": 0x01,
			"RedCard": 0x01,
			"RedSkull": 0x01,
			"BlueCard": 0x01,
			"BlueSkull": 0x01,
			"AllCards": 0x01,
			"AllSkulls": 0x01,
			"AllKeys": 0x01,
			"AnyKey": 100,
			"AnyKeys": 0x01,
			"AnySkull": 128,
			"NoKey": 0x01
		},
		"Delay": { //
			"Normal": 150
		}
	},

	// ZDoom XLAT constants

	// Скорость потолка и дробилки
	"C_SLOW": 8,
	"C_NORMAL": 16,
	"C_FAST": 32,
	"C_TURBO": 64,
	// Скорость пола,
	"F_SLOW": 8,
	"F_NORMAL": 16,
	"F_FAST": 32,
	"F_TURBO": 64,
	// Скорость дверей
	"D_SLOW": 16,
	"D_NORMAL": 32,
	"D_FAST": 64,
	"D_TURBO": 128,
	"VDOORWAIT": 150,
	// Скорость подъема лестницы
	"ST_SLOW": 2,
	"ST_NORMAL": 4,
	"ST_FAST": 16,
	"ST_TURBO": 32,
	// Скорость платформы / лифта,
	"P_SLOW": 8,
	"P_NORMAL": 16,
	"P_FAST": 32,
	"P_TURBO": 64,
	"PLATWAIT": 105,
	"ELEVATORSPEED": 32,
	// Скорость столба,
	"DORATE": 4,
	// Скроллеры текстур,
	"SCROLL_UNIT": 64,

	// ZDoom XLAT Flags
	"ML_BLOCKING": 0x01000001,
	"ML_BLOCKMONSTERS": 0x01000002,
	"ML_TWOSIDED": 0x01000004,
	"ML_DONTPEGTOP": 0x01000008,
	"ML_DONTPEGBOTTOM": 0x01000010,
	"ML_SECRET": 0x01000020,
	"ML_SOUNDBLOCK": 0x01000040,
	"ML_DONTDRAW": 0x01000080,
	"ML_MAPPED": 0x01000100,

	// Extended flags
	"ML_MONSTERSCANACTIVATE": 0x01002000,
	"ML_BLOCK_PLAYERS": 0x01004000,
	"ML_BLOCKEVERYTHING": 0x01008000,
	"ML_ZONEBOUNDARY": 0x01010000,
	"ML_RAILING": 0x01020000,
	"ML_BLOCK_FLOATERS": 0x01040000,
	"ML_CLIP_MIDTEX": 0x01080000,
	"ML_WRAP_MIDTEX": 0x01100000,
	"ML_3DMIDTEX": 0x01200000,
	"ML_CHECKSWITCHRANGE": 0x01400000,
	"ML_FIRSTSIDEONLY": 0x01800000,
	"ML_BLOCKPROJECTILE": 0x01000000,
	"ML_BLOCKUSE": 0x02000000,
	"ML_PASSTHROUGH": -1,
	"ML_TRANSLUCENT": -2,
	"ML_TRANSPARENT": -3,

	// [RH] Equivalents for BOOM's generalized sector types
	"DAMAGE_MASK": (0x0300),
	"SECRET_MASK": (0x0400),
	"FRICTION_MASK": (0x0800),
	"PUSH_MASK": (0x1000),

	// Sector specials
	"Light_Phased": 1,
	"LightSequenceStart": 2,
	"LightSequenceSpecial1": 3,
	"LightSequenceSpecial2": 4,

	"Stairs_Special1": 26,
	"Stairs_Special2": 27,

	"Wind_East_Weak": 40,
	"Wind_East_Medium": 0x01,
	"Wind_East_Strong": 0x01,
	"Wind_North_Weak": 0x01,
	"Wind_North_Medium": 0x01,
	"Wind_North_Strong": 0x01,
	"Wind_South_Weak": 0x01,
	"Wind_South_Medium": 0x01,
	"Wind_South_Strong": 0x01,
	"Wind_West_Weak": 0x01,
	"Wind_West_Medium": 0x01,
	"Wind_West_Strong": 0x01,

	// Ключи
	"RCard": 0x01,
	"BCard": 0x01,
	"YCard": 0x01,
	"RSkull": 0x01,
	"BSkull": 0x01,
	"YSkull": 0x01,
	"AnyKey": 0x01,
	"AllKeys": 0x01,
	"CardIsSkull": 0x01
};