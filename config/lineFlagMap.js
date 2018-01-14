"use strict";

const Constant = require("./actionConstants");

/* eslint quotes:["error", "double"] */

module.exports = {
	"0": Constant.ML_BLOCKING,
	"1": Constant.ML_BLOCKMONSTERS,
	"2": Constant.ML_TWOSIDED,
	"3": Constant.ML_DONTPEGTOP,
	"4": Constant.ML_DONTPEGBOTTOM,
	"5": Constant.ML_SECRET,
	"6": Constant.ML_SOUNDBLOCK,
	"7": Constant.ML_DONTDRAW,
	"8": Constant.ML_MAPPED,
	"9": Constant.ML_PASSTHROUGH,
	"10": Constant.ML_3DMIDTEX,
	"11": /* & */ (
		Constant.ML_BLOCKING |
		Constant.ML_BLOCKMONSTERS |
		Constant.ML_TWOSIDED |
		Constant.ML_DONTPEGTOP |
		Constant.ML_DONTPEGBOTTOM |
		Constant.ML_SECRET |
		Constant.ML_SOUNDBLOCK |
		Constant.ML_DONTDRAW |
		Constant.ML_MAPPED
	)

};