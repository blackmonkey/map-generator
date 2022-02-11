# Map Generator

This is a procedural dungeon generator written in JavaScript. This utility is rewritten from [Dungeon Generator](https://github.com/domasx2/dungeon-generator/).

[Live demo](http://blackmonkey.github.io/map-generator/)

## Features

1. Pre-defined, tagged rooms
2. Highly configurable
3. Seeded rng
5. Feedback about exits, perimeter, etc
4. (Optional) corridors
5. (Optional) circular paths


## Output examples

![Sample 1](http://domasx2.github.io/dungeon-generator/samples/sample1.png)
![Sample 2](http://domasx2.github.io/dungeon-generator/samples/sample2.png)
![Sample 3](http://domasx2.github.io/dungeon-generator/samples/sample3.png)
![Sample 4](http://domasx2.github.io/dungeon-generator/samples/sample4.png)

## Usage

@TODO

```javascript
let dungeon = new Dungeon({
  size: [100, 100], 
  seed: 'abcd', // omit for generated seed
  rooms: {
    initial: {
      minSize: [3, 3],
      maxSize: [3, 3],
      maxExits: 1,
      pos: [0, 0] // OPTIONAL pos of initial room 
    },
    any: {
      minSize: [2, 2],
      maxSize: [5, 5],
      maxExits: 4
    }
  },
  maxCorridorLength: 6,
  minCorridorLength: 2,
  corridorDensity: 0.5, // corridors per room
  symmetricRooms: false, // exits must be in the center of a wall if true
  interconnects: 1, // extra corridors to connect rooms and make circular paths. not 100% guaranteed
  maxInterconnectLength: 10,
  roomCount: 10
});

dungeon.generate();
dungeon.print(); // outputs wall map to console.log

dungeon.width;
dungeon.height;
dungeon.walls.get(new Pos(x, y)); // return true if position is wall, false if empty

for(let piece of dungeon.children) {
  piece.left; // left border of the piece within dungeon
  piece.right; // right border of the piece within dungeon
  piece.top; // top border of the piece within dungeon
  piece.bottom; // bottom border of the piece within dungeon
  piece.width;
  piece.height;
  piece.tag; // 'any', 'initial' or any other key of 'rooms' options property
  piece.walls.get(new Pos(x, y)); // (x, y) is the position of piece within dungeon, returns true if it is wall, false if it is empty
  for (let exit of piece.exits) {
    let [pos, destPiece] = exit; // local position of exit and piece it exits to
    piece.globalPos(pos); // get the global position of the exit
  }

  piece.localPos(dungeon.startPos); // get local position within the piece of dungeon's global position
}

dungeon.initialRoom; //piece tagged as 'initial'
dungeon.startPos; // Pos(x, y) center of 'initial' piece 
```