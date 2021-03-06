// Copyright (c) 2018 PROPHESSOR
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

'use strict';

const fs = require('fs');
const dataParser = require('data-file-parser');
const {
	Constants,
	actionIDs
} = require('../../config');

const FROM = 'actions.txt';
const TO = 'parsed.js';

console.log(`\x1b[33m\x1b[1m
					#====\x1b[36mXLAT actions parser\x1b[33m\x1b[1m====#
					#\x1b[36m© Copyright PROPHESSOR 2018\x1b[33m\x1b[1m#
					#===========================#\x1b[0m
`);

dataParser.parse({
		'in': FROM,
		'regex': /^\s*(\d+)\s+=\s+([A-Z|0]+),\s+([\w \d()_,]+)(\s+\/\/\s*(.+))?/gm,
		'as': 'boom|flags|udmf|comment'
	})
	.then((actions) => {
		console.log(`Parsed ${actions.length} actions`);

		const out = {};

		for (const action of actions) {
			// Split the flags
			action.flags = action.flags.split('|');

			// Split the udmf property
			action.udmf = action.udmf
				.replace(/[()]/g, '')
				.split(/,?\s+/);

			// Apply constants & actionIDs and parse numbers from strings
			for (const i in action.udmf) {
				const act = action.udmf[i];

				action.udmf[i] = actionIDs[act]
					|| Constants[act]
					|| act;
				if (!isNaN(Number(act))) action.udmf[i] = Number(act);
			}

			// Remove comments artifacts
			if (action.comment) action.comment = action.comment.replace(/(\t|\n|\r|\/\/\s*)/g, '');
			else Reflect.deleteProperty(action, 'comment');

			console.dir(action);

			const { boom } = action;

			Reflect.deleteProperty(action, 'boom');

			out[boom] = action;
		}

		const output = '// Generated by XLAT actions parser\n\nmodule.exports = ' + JSON.stringify(out, null, 4);

		fs.writeFileSync(TO, output, 'utf8');

		console.log(`\x1b[33m\x1b[1m
					#====\x1b[36mXLAT actions parser\x1b[33m\x1b[1m====#
					#\x1b[36m© Copyright PROPHESSOR 2018\x1b[33m\x1b[1m#
					#===========================#\x1b[0m
		`);
	})
	.catch((err) => {
		console.error('\n\n\x1b[31m', err, '\n\n');
		console.error('\x1b[31mОп! Я поймал ошибку =D');
		console.error('\x1b[31mOp! I caught the error');
	});