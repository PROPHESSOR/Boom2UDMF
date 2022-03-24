import { Constants } from './constants';

/* eslint quotes:["error", "double"] */

export const lineFlagMap = {
	"0": Constants.ML_BLOCKING,
	"1": Constants.ML_BLOCKMONSTERS,
	"2": Constants.ML_TWOSIDED,
	"3": Constants.ML_DONTPEGTOP,
	"4": Constants.ML_DONTPEGBOTTOM,
	"5": Constants.ML_SECRET,
	"6": Constants.ML_SOUNDBLOCK,
	"7": Constants.ML_DONTDRAW,
	"8": Constants.ML_MAPPED,
	"9": Constants.ML_PASSTHROUGH,
	"10": Constants.ML_3DMIDTEX,
	"11": /* & */ (
		Constants.ML_BLOCKING |
		Constants.ML_BLOCKMONSTERS |
		Constants.ML_TWOSIDED |
		Constants.ML_DONTPEGTOP |
		Constants.ML_DONTPEGBOTTOM |
		Constants.ML_SECRET |
		Constants.ML_SOUNDBLOCK |
		Constants.ML_DONTDRAW |
		Constants.ML_MAPPED
	)

};
