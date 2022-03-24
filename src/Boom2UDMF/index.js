// Copyright (c) 2018-2022 PROPHESSOR
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Linedef, Sector, Thing, Sidedef, Vertex } from './structures';
import ByteTools from './utils/ByteTools';

const MapParser = require('./MapParser');
const BoomParser = require('./BoomParser');

/**
 * 
 * @param {ByteTools} thingBuffer 
 * @param {ByteTools} vertexBuffer 
 * @param {ByteTools} lineBuffer 
 * @param {ByteTools} sideBuffer 
 * @param {ByteTools} sectorBuffer 
 * @returns 
 */
export function generateUdmf(thingBuffer, vertexBuffer, lineBuffer, sideBuffer, sectorBuffer) {
	let output = '// Generated by Boom2UDMF\n\nnamespace = "ZDoom";\n';

	output += parseThings(thingBuffer);
	output += parseVertexes(vertexBuffer);
	output += parseLinedefs(lineBuffer);
	output += parseSidedefs(sideBuffer);
	output += parseSectors(sectorBuffer);
	output += '\n\n// End of file';

	return output;
}

/**
 * 
 * @param {ByteTools} buffer 
 * @returns
 */
function parseVertexes(buffer) {
	const vertexes = MapParser.getVertexes(buffer);

	const out = [];

	for (const i in vertexes) {
		const vertex = vertexes[i];

		out.push(new Vertex(i, vertex.x, vertex.y));
	}

	let outstring = '// Vertexes\n';

	for (const vertex of out) {
		console.log(vertex.toString());
		outstring += vertex.toString();
	}

	return outstring;
}

/**
 *
 * @param {ByteTools} buffer
 * @returns
 */
function parseThings(buffer) {
	const things = MapParser.getThings(buffer);

	const out = [];

	for (const i in things) {
		const thing = things[i];

		out.push(new Thing(i, thing.x, thing.y, thing.angle, thing.tid, BoomParser.Thing.getUDMFflags(thing.flags)));
	}

	let outstring = '// Things\n';

	for (const thing of out) {
		console.log(thing.toString());
		outstring += thing.toString();
	}

	return outstring;
}

/**
 *
 * @param {ByteTools} buffer
 * @returns
 */
function parseSectors(buffer) {
	const sectors = MapParser.getSectors(buffer);

	const out = [];

	for (const i in sectors) {
		const sector = sectors[i];

		out.push(new Sector(i, sector.floor, sector.height, sector.floortex, sector.ceiltex, sector.light, sector.special, sector.tag));
	}

	let outstring = '// Sectors\n';

	for (const sector of out) {
		console.log(sector.toString());
		outstring += sector.toString();
	}

	return outstring;
}

/**
 *
 * @param {ByteTools} buffer
 * @returns
 */
function parseLinedefs(buffer) {
	const linedefs = MapParser.getLinedefs(buffer);

	const out = [];

	for (const i in linedefs) {
		const linedef = linedefs[i];

		const boom2udmf = new BoomParser.Action(
			linedef.action, //
			{
				'flags': linedef.flags,
				'tag': linedef.tag,
				'front': linedef.front,
				'back': linedef.back,
				'lineid': i
			}
		);

		const attributes = {
			'arg1': boom2udmf.arg1,
			'arg2': boom2udmf.arg2,
			'arg3': boom2udmf.arg3,
			'arg4': boom2udmf.arg4,
			'arg5': boom2udmf.arg5
		};

		out.push(new Linedef(i, linedef.v1, linedef.v2, boom2udmf.UDMFflags, boom2udmf.UDMFaction, attributes, linedef.front, linedef.back, { 'flag': linedef.flags }));
	}

	let outstring = '// LineDefs\n';

	for (const linedef of out) {
		console.log(linedef.toString());
		outstring += linedef.toString();
	}

	return outstring;
}

/**
 *
 * @param {ByteTools} buffer
 * @returns
 */
function parseSidedefs(buffer) {
	const sidedefs = MapParser.getSides(buffer);

	const out = [];

	for (const i in sidedefs) {
		const sidedef = sidedefs[i];

		out.push(new Sidedef(i, sidedef.offsetx, sidedef.offsety, sidedef.uppertex, sidedef.lowertex, sidedef.middletex, sidedef.sector));
	}

	let outstring = '// SideDefs\n';

	for (const sidedef of out) {
		console.log(sidedef.toString());
		outstring += sidedef.toString();
	}

	return outstring;
}
