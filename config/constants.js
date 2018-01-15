// Copyright (c) 2018 PROPHESSOR
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

"use strict";

/* eslint quotes:["error", "double"] */

// FIXME: 0x00 - не заполненные поля

module.exports = {
	"Door": {
		"Speed": {
			"Slow": 16,
			"Normal": 32,
			"Fast": 64,
			"Turbo": 128
		},
		"Key": {
			"YellowCard": 0x00,
			"YellowSkull": 0x00,
			"RedCard": 0x00,
			"RedSkull": 0x00,
			"BlueCard": 0x00,
			"BlueSkull": 0x00,
			"AllCards": 0x00,
			"AllSkulls": 0x00,
			"AllKeys": 0x00,
			"AnyKey": 100,
			"AnyKeys": 0x00,
			"AnySkull": 128,
			"NoKey": 0x00
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
	"ML_BLOCKING": 0x00000001,
	"ML_BLOCKMONSTERS": 0x00000002,
	"ML_TWOSIDED": 0x00000004,
	"ML_DONTPEGTOP": 0x00000008,
	"ML_DONTPEGBOTTOM": 0x00000010,
	"ML_SECRET": 0x00000020,
	"ML_SOUNDBLOCK": 0x00000040,
	"ML_DONTDRAW": 0x00000080,
	"ML_MAPPED": 0x00000100,

	// Extended flags
	"ML_MONSTERSCANACTIVATE": 0x00002000,
	"ML_BLOCK_PLAYERS": 0x00004000,
	"ML_BLOCKEVERYTHING": 0x00008000,
	"ML_ZONEBOUNDARY": 0x00010000,
	"ML_RAILING": 0x00020000,
	"ML_BLOCK_FLOATERS": 0x00040000,
	"ML_CLIP_MIDTEX": 0x00080000,
	"ML_WRAP_MIDTEX": 0x00100000,
	"ML_3DMIDTEX": 0x00200000,
	"ML_CHECKSWITCHRANGE": 0x00400000,
	"ML_FIRSTSIDEONLY": 0x00800000,
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
	"Wind_East_Medium": 0x00,
	"Wind_East_Strong": 0x00,
	"Wind_North_Weak": 0x00,
	"Wind_North_Medium": 0x00,
	"Wind_North_Strong": 0x00,
	"Wind_South_Weak": 0x00,
	"Wind_South_Medium": 0x00,
	"Wind_South_Strong": 0x00,
	"Wind_West_Weak": 0x00,
	"Wind_West_Medium": 0x00,
	"Wind_West_Strong": 0x00
};