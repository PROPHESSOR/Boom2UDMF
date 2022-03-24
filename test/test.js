'use strict';

const [
	Linedef,
	Sector,
	Thing,
	Sidedef,
	Vertex
] = [
	require('../src/Boom2UDMF/structures/linedef'),
	require('../src/Boom2UDMF/structures/sector'),
	require('../src/Boom2UDMF/structures/thing'),
	require('../src/Boom2UDMF/structures/sidedef'),
	require('../src/Boom2UDMF/structures/vertex')
];

console.log((new Vertex(0, 5, -5)).toString());
console.log((new Linedef(0, 0, 1, 1, 0, 0, 0, 0)).toString());
console.log((new Sidedef(0, 3, 3, 0, 0, 0, 0)).toString());
console.log((new Thing(0, 3, 2, 90, 3, 7)).toString());
console.log((new Sector(0, 0, 128, 1, 1, 128, 0, 0)).toString());
