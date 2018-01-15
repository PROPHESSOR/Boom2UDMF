'use strict';

const [
	Linedef,
	Sector,
	Thing,
	Sidedef,
	Vertex,
	MapParser
] = [
	require('../structures/linedef'),
	require('../structures/sector'),
	require('../structures/thing'),
	require('../structures/sidedef'),
	require('../structures/vertex'),
	require('../MapParser')
];

console.log((new Vertex(0, 5, -5)).toString());
console.log((new Linedef(0, 0, 1, 1, 0, 0, 0, 0)).toString());
console.log((new Sidedef(0, 3, 3, 0, 0, 0, 0)).toString());
console.log((new Thing(0, 3, 2, 90, 3, 7)).toString());
console.log((new Sector(0, 0, 128, 1, 1, 128, 0, 0)).toString());