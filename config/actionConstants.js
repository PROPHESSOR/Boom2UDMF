"use strict";

/* eslint quotes:["error", "double"] */


module.exports = {
	"Door": {
		"Speed": {
			"Slow": 16,
			"Normal": 32,
			"Fast": 64,
			"Turbo": 128
		},
		"Key": {
			"YellowCard": 0,
			"YellowSkull": 0,
			"RedCard": 0,
			"RedSkull": 0,
			"BlueCard": 0,
			"BlueSkull": 0,
			"AllCards": 0,
			"AllSkulls": 0,
			"AllKeys": 0
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
	"SCROLL_UNIT": 64
};