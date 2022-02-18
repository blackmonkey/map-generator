# Map Generator

This is a procedural dungeon generator written in JavaScript. This utility is rewritten from the following projects:

1. [Dungeon Generator](https://github.com/domasx2/dungeon-generator/).
2. [watabou's One Page Dungeon](https://watabou.itch.io/one-page-dungeon).

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

## Getting started
This tool works with the following libraries. So, make sure you load them before you include this tool in your page.
- [jQuery](https://jquery.com/)
- [Fontpicker jQuery Plugin](https://github.com/av01d/fontpicker-jquery-plugin)
- [jQuery MiniColors](https://github.com/claviska/jquery-minicolors)

With a copy on your server:
```html
<link href="/path/to/dist/jquery.fontpicker.min.css" rel="stylesheet">
<link href="/path/to/dist/jquery.minicolors.min.css" rel="stylesheet">
<script src="/path/to/dist/jquery.min.js"></script>
<script src="/path/to/dist/jquery.fontpicker.min.js"></script>
<script src="/path/to/dist/jquery.minicolors.min.js"></script>
<script src="/path/to/dist/map-generator.js"></script>
```

You can also load it from cdnjs:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-fontpicker/1.5/jquery.fontpicker.min.css" integrity="sha512-uJUBCPYgjwO2/2XiWW0UxlqlF7wX3neoE2bf84niljfavkDGHtvkPqBUWIcIFjhHysuEca3Fl9k2C7j1Z45Qrw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-minicolors/2.3.6/jquery.minicolors.min.css" integrity="sha512-BVeRnUOL0G7d4gXmj+0VxpoiQuEibKQtlkclADKvCdNrESs0LA6+H8s1lU455VqWFtHBfF/pKDGw/CMat2hqOg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" type="text/javascript" charset="utf-8"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-fontpicker/1.5/jquery.fontpicker.min.js" integrity="sha512-x1EmGH1DcQPP0ICawrFLwTcl3XualoQYxX+2k2hD1RnfnlfP1JMvAktqLGaKw2WxXKZnpo92/0Nk1eKENydFxA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-minicolors/2.3.6/jquery.minicolors.min.js" integrity="sha512-vBqPkpOdZM0O7YezzE8xaoUdyt4Z2d+gLrY0AMvmNPLdLuNzvreTopyuaM9/FiRzHs1bwWzYDJgH6STcuNXpqg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="/TODO/map-generator.js"></script>
```

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