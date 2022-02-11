const TOP = 0;
const RIGHT = 90;
const BOTTOM = 180;
const LEFT = 270;
const FACING = [TOP, RIGHT, BOTTOM, LEFT];
const FACING_INVERSE = {
  [TOP]: BOTTOM,
  [RIGHT]: LEFT,
  [BOTTOM]: TOP,
  [LEFT]: RIGHT
};
const FACING_TO_MOD = {
  [TOP]: [0, -1],
  [RIGHT]: [1, 0],
  [BOTTOM]: [0, 1],
  [LEFT]: [-1, 0]
};


class Pos {
  /**
   * Construct a Pos instance.
   * @param {number} x the x coordinate of the position.
   * @param {number} y the y coordinate of the position.
   * @return {Pos} this Pos instance.
   */
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
    return this;
  }

  toString() {
    return `[Pos (${this.x}, ${this.y})]`;
  };
}


class Size extends Pos {
  toString() {
    return `[Size (${this.x} x ${this.y})]`;
  };
}


/**
 * Add two vectors.
 * @param {Pos} p1 the first vector.
 * @param {[number, number]} p2 the second vector.
 * @return {Pos} the sum vector.
 */
function add(p1, p2) {
  return new Pos(p1.x + p2[0], p1.y + p2[1]);
}


/**
 * Rotate facing at the specific center.
 * @param {Pos} pos the rotating center.
 * @param {number} facing one of `FACING`.
 * @return {Pos} the position with rotated facing.
 */
function shift(pos, facing) {
  return add(pos, FACING_TO_MOD[facing]);
}


/**
 * Anticlockwise rotate facing at the specific center.
 * @param {Pos} pos the rotating center.
 * @param {number} facing one of `FACING`.
 * @return {Pos} the position with rotated facing.
 */
function shiftLeft(pos, facing) {
  return shift(pos,(facing - 90 + 360) % 360);
}


/**
 * Clockwise rotate facing at the specific center.
 * @param {Pos} pos the rotating center.
 * @param {number} facing one of `FACING`.
 * @return {Pos} the position with rotated facing.
 */
function shiftRight(pos, facing) {
  return shift(pos, (facing + 90 + 360) % 360);
}


/**
 * Clamp number between two values with the following line:
 * @param {number} num the number to clamp.
 * @param {number} min the minimal value of the clamp range.
 * @param {number} max the maximal value of the clamp range.
 * @return {number}
 */
function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max);
}


/**
 * Executes a provided function once for each iterated position.
 * @param {Pos} fromPos the left-top corner of iterating area, inclusive.
 * @param {Pos} toPos the right-bottom corner of iterating area, inclusive.
 * @param {Function} callback
 */
function iterRange(fromPos, toPos, callback) {
  let fx = Math.min(fromPos.x, toPos.x);
  let fy = Math.min(fromPos.y, toPos.y);
  let tx = Math.max(fromPos.x, toPos.x);
  let ty = Math.max(fromPos.y, toPos.y);
  for (let y = fy; y <= ty; y++) {
    for (let x = fx; x <= tx; x++) {
      callback(new Pos(x, y));
    }
  }
}


/**
 * Executes a provided function once for each iterated position.
 * @param {number} width the width of iterating area.
 * @param {number} height the height of iterating area.
 * @param {Function} callback
 */
function iterArea(width, height, callback) {
  iterRange(new Pos(), new Pos(width - 1, height - 1), callback);
}


class Random {
  constructor(seed) {
    /*
     * Use https://github.com/davidbau/seedrandom if it is imported.
     */
    this.rng = ('seedrandom' in Math) ? new Math.seedrandom(seed) : Math.random;
  }

  /**
   * Get random integer in a specified range
   * @param {number} min the minimal value of the range, inclusive.
   * @param {number} max the maximal value of the range, exclusive.
   * @return {number} the generated random integer.
   */
  int(min, max) {
    return Math.floor(this.rng() * (max - min + 1) + min);
  }

  /**
   * Get random float in a specified range
   * @param {number} min the minimal value of the range, inclusive.
   * @param {number} max the maximal value of the range, exclusive.
   * @return {number} the generated random float.
   */
  float(min = 0, max = 1) {
    return this.rng() * (max - min + 1) + min;
  }

  /**
   * Get random vector.
   * @param {Pos} min the minimal vector, inclusive.
   * @param {Pos} max the maximal vector, exclusive.
   * @return {Pos} the generated random vector.
   */
  vec(min, max) {
    return new Pos(this.int(min.x, max.x), this.int(min.y, max.y));
  }

  /**
   * Choose random item from the specific array.
   * @param {*[]} items the array of optional items.
   * @param {boolean} remove `true` to remove the picked one from `items`, `false` not to.
   * @return {any} the randomly picked item.
   */
  choose(items, remove = false) {
    let idx = this.int(0, items.length - 1);
    if (remove) {
      return items.splice(idx, 1)[0];
    }
    return items[idx];
  }

  /**
   * Randomly decide probability.
   * @param probability the probability of a thing to happen.
   * @return {boolean} `true` if the thing happened, `false` or not.
   */
  maybe(probability) {
    return this.float() <= probability;
  }
}


class Array2D {
  /**
   * Construct an Array2D instance.
   * @param {number} width the width of this Rect, default 0.
   * @param {number} height the height of this Rect, default 0.
   * @param cellVal the initial cell value, default `null`.
   * @return {Array2D} this Array2D instance.
   */
  constructor(width = 0, height = 0, cellVal = null) {
    this.cells = Array.from(Array(height), () => new Array(width).fill(cellVal));
    return this;
  }

  /**
   * @return {number} the row count of this 2D array.
   */
  get rowCount() {
    return this.cells.length;
  }

  /**
   * @return {number} the column count of this 2D array.
   */
  get colCount() {
    return this.cells.length > 0 ? this.cells[0].length : 0;
  }

  /**
   * Executes a provided function once for each 2D array element.
   * @param {Function} callback Function to execute on each element. It accepts one or two arguments:
   * <ul>
   *   <li>element: The current element being processed in the array.</li>
   *   <li>pos: The position of the element in the array.</li>
   * </ul>
   */
  forEach(callback) {
    let h = this.rowCount, w = this.colCount;
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        callback(this.cells[y][x], new Pos(x, y));
      }
    }
  }

  /**
   * Fetch the specific item.
   * @param {Pos} pos the position of the item to fetch.
   * @return {undefined|*} the item's value if the position is within the array, `undefined` otherwise.
   */
  get(pos) {
    if (pos.y < this.rowCount || pos.x < this.colCount) {
      return this.cells[pos.y][pos.x];
    }
    return undefined;
  }

  /**
   * Set the specific item.
   * @param {Pos} pos the position of the item to set.
   * @param val the new value to set when the position is within the array.
   */
  set(pos, val) {
    if (pos.y < this.rowCount || pos.x < this.colCount) {
      this.cells[pos.y][pos.x] = val;
    }
  }

  /**
   * Set horizontal cells.
   * @param {number} startX the start column of the cells.
   * @param {number} startY the row of the cells.
   * @param {number} deltaX the horizontal length and direction, while positive value to fill right, and negative value
   * to fill left.
   * @param val the new value to set when the position is within the array.
   */
  setHorizontalLine(startX, startY, deltaX, val) {
    let colCount = this.colCount;
    let endX = clamp(startX + deltaX, 0, colCount);
    startX = clamp(startX, 0, colCount);
    startY = clamp(startY, 0, this.rowCount);
    if (endX < startX) {
      // swap two numbers without using temporary variable
      // see https://www.geeksforgeeks.org/swap-two-numbers-without-using-temporary-variable/
      startX = startX + endX;
      endX = startX - endX;
      startX = startX - endX;
    }

    for (let x = startX; x < endX; x++) {
      this.cells[startY][x] = val;
    }
  }

  /**
   * Set vertical cells.
   * @param {number} startX the column of the cells.
   * @param {number} startY the start row of the cells.
   * @param {number} deltaY the vertical length and direction, while positive value to fill down, and negative value
   * to fill up.
   * @param val the new value to set when the position is within the array.
   */
  setVerticalLine(startX, startY, deltaY, val) {
    let endY = clamp(startY + deltaY, 0, this.rowCount);
    startX = clamp(startX, 0, this.colCount);
    startY = clamp(startY, 0, this.rowCount);
    if (endY < startY) {
      // swap two numbers without using temporary variable
      // see https://www.geeksforgeeks.org/swap-two-numbers-without-using-temporary-variable/
      startY = startY + endY;
      endY = startY - endY;
      startY = startY - endY;
    }

    for (let y = startY; y < endY; y++) {
      this.cells[y][startX] = val;
    }
  }

  /**
   * Get cell values of the specific area in the array.
   * @param {number} left the left border of the area.
   * @param {number} top the top border of the area.
   * @param {number} width the width of the area.
   * @param {number} height the height of the area.
   * @return {Array2D} the requested cell values.
   */
  getSquare(left = 0, top = 0, width = 0, height = 0) {
    let colCount = this.colCount;
    let right = clamp(left + width, 0, colCount);
    let bottom = clamp(top + height, 0, this.rowCount);
    left = clamp(left, 0, colCount);
    top = clamp(top, 0, this.rowCount);

    let res = new Array2D(right - left, bottom - top);
    for (let y = top; y < bottom; y++) {
      for (let x = left; x < right; x++) {
        res.cells[y - top][x - left] = this.cells[y][x];
      }
    }
    return res;
  }

  /**
   * Set cell values of the specific area in the array.
   * @param {number} left the left border of the area.
   * @param {number} top the top border of the area.
   * @param {number} width the width of the area.
   * @param {number} height the height of the area.
   * @param val the value to set.
   * @param {boolean} fill `true` to fill whole specific area, `false` to only set the border of the area.
   */
  setSquare(left = 0, top = 0, width = 0, height = 0, val, fill = false) {
    let colCount = this.colCount;
    let right = clamp(left + width, 0, colCount);
    let bottom = clamp(top + height, 0, this.rowCount);
    left = clamp(left, 0, colCount);
    top = clamp(top, 0, this.rowCount);
    if (fill) {
      for (let y = top; y < bottom; y++) {
        for (let x = left; x < right; x++) {
          this.cells[y][x] = val;
        }
      }
    } else {
      width = right - left;
      height = bottom - top;
      this.setHorizontalLine(left, top, width, val);
      this.setHorizontalLine(left, clamp(bottom - 1, 0, this.rowCount), width, val);
      this.setVerticalLine(left, top, height, val);
      this.setVerticalLine(clamp(right - 1, 0, colCount), top, height, val);
    }
  }
}


class Rect {
  /**
   * Construct a Rect instance.
   * @param {number} x the left border, default 0.
   * @param {number} y the top border, default 0.
   * @param {number} width the width of this Rect, default 0.
   * @param {number} height the height of this Rect, default 0.
   * @return {Rect} this Rect instance.
   */
  constructor(x = 0, y = 0, width = 0, height = 0) {
    this.setPos(x, y);
    this.setSize(width, height);
    return this;
  }

  setPos(x, y) {
    this.left = x;
    this.top = y;
    if ('width' in this) {
      this.right = x + this.width;
    }
    if ('height' in this) {
      this.bottom = y + this.height;
    }
  }

  setSize(width, height) {
    this.width = width;
    this.height = height;
    this.right = this.left + width;
    this.bottom = this.top + height;
  }

  /**
   * Check whether this Rect fully encloses the specific point or rectangle.
   *
   * Note: to specify a point, do NOT specify width or height.
   * @param {number} x x position of the point or the left border of the rectangle.
   * @param {number} y y position of the point or the top border of the rectangle.
   * @param {number} width the width of the rectangle, default 1.
   * @param {number} height the height of the rectangle, default 1.
   * @return `true` if this Rect fully encloses the specific point or rectangle, `false` otherwise.
   */
  contains(x, y, width = 1, height = 1) {
    let right = x + width;
    let bottom = y + height;
    return x >= this.left && right <= this.right && y >= this.top && bottom <= this.bottom;
  }

  /**
   * Calculate the intersection (overlap) of this Rect and the specific rectangle.
   * @param {Rect} rect The rectangle to calculate an intersection with.
   * @return {Rect} `null` if the two Rects do not intersect, or a new rectangle describing the intersection otherwise.
   */
  intersection(rect) {
    let left = Math.max(this.left, rect.left);
    let top = Math.max(this.top, rect.top);
    let right = Math.min(this.right, rect.right);
    let bottom = Math.min(this.bottom, rect.bottom);
    return (right <= left || bottom <= top) ? null : new Rect(left, top, right - left, bottom - top);
  }

  /**
   * Check whether this Rect and the specific rectangle intersect.
   * @param {Rect} rect The rectangle to calculate an intersection with.
   * @return {boolean} `true` if the two Rects intersect, `false` otherwise.
   */
  intersects(rect) {
    return rect.left <= this.right && this.left <= rect.right && rect.top <= this.bottom && this.top <= rect.bottom;
  }

  toString() {
    return `[Rectangle (${this.left}, ${this.top}) - (${this.right}, ${this.bottom})]`;
  };
}


/**
 * Base dungeon piece class, to be extended.
 *
 * The `left`, `top`, `right` and `bottom` are the coordinates of this Piece in its parent.
 */
class Piece extends Rect {
  static nextId = 0;

  /**
   * Construct a Piece instance.
   * @param {Object} opts the options to initialize the Piece instance, which supports the following items:
   *  <ul>
   *   <li>pos: the position of left-top corner of the Piece in its parent, default (0, 0).</li>
   *   <li>size: the size of the Piece, default (1, 1).</li>
   *   <li>parent: the parent of the Piece, default `null`.</li>
   *   <li>maxExits: the maximum exit count of the Piece, default 10.</li>
   *   <li>tag: the tag of the Piece, default ''.</li>
   *  </ul>
   * @return {Piece} this Piece instance.
   */
  constructor(opts) {
    super(0, 0, 1, 1);
    this.id = Piece.nextId++;
    this.perimeter = []; // element format: [Pos (in this Piece), FACING]
    this.exits = []; // element format: [Pos (in this Piece), Piece]
    this.children = []; // element format: Piece
    this.parent = null; // format: Piece
    this.maxExits = 10;
    this.tag = '';

    if ('pos' in opts && opts.pos) {
      this.setPos(opts.pos.x, opts.pos.y);
      delete opts.pos;
    }
    if ('size' in opts && opts.size) {
      this.setSize(opts.size.x, opts.size.y);
      delete opts.size;
    }
    Object.assign(this, opts);

    this.walls = new Array2D(this.width, this.height, true);

    return this;
  }

  /**
   * Check whether the specific position is an exit.
   * @param {Pos} pos the coordinates of the position in this Piece.
   * @return {boolean} `true` if there is an exit on the specific position, `false` otherwise.
   */
  isExit(pos) {
    return this.exits.some(([ePos, dst]) => ePos.x === pos.x && ePos.y === pos.y);
  }

  /**
   * Find the perimeters by specific facing.
   * @param {number} facing one of `FACING`.
   * @return {*[]} the found perimeters.
   */
  getPerimeterByFacing(facing) {
    return this.perimeter.filter(([pos, f]) => facing === f);
  }

  /**
   * Convert the position in this Piece to the corresponding one in parent.
   * @param {Pos} pos the position in this Piece.
   * @return {Pos} the position in parent.
   */
  parentPos(pos) {
    return new Pos(this.left + pos.x, this.top + pos.y);
  }

  /**
   * Convert the position in parent to the one in this Piece.
   * @param {Pos} pos the position in parent.
   * @return {Pos} the position in this Piece.
   */
  localPos(pos) {
    return new Pos(pos.x - this.left, pos.y - this.top);
  }

  /**
   * Convert the position in this Piece to the corresponding global one.
   * @param {Pos} pos the position in this Piece.
   * @return {Pos} the global position.
   */
  globalPos(pos) {
    pos = this.parentPos(pos);
    if (this.parent) {
      pos = this.parent.globalPos(pos);
    }
    return pos;
  }

  /**
   * Calculate the roughly center tile position for this Piece.
   * @return {Pos} the center tile position in this Piece.
   */
  get center() {
    return new Pos(Math.floor(this.width / 2), Math.floor(this.height / 2));
  }

  /**
   * Add perimeter in the specific rectangle.
   * @param {Pos} fromPos the left-top corner position of the rectangle in this Piece, inclusive.
   * @param {Pos} toPos the right-bottom corner position of the rectangle in this Piece, inclusive.
   * @param {number} facing the facing of the perimeter, one of `FACING`.
   */
  addPerimeter(fromPos, toPos, facing) {
    iterRange(fromPos, toPos, pos => this.perimeter.push([pos, facing]));
  }

  /**
   * Remove all the perimeter in the specific rectangle.
   * @param {Rect} rect the rectangle to check.
   */
  removePerimeter(rect) {
    this.perimeter = this.perimeter.filter(([pos, facing]) => !rect.contains(pos.x, pos.y));
  }

  /**
   * Paste child Piece's walls into this Piece.
   * @param {Piece} piece the child Piece.
   */
  pasteWalls(piece) {
    iterArea(piece.width, piece.height, pos => this.walls.set(piece.parentPos(pos), piece.walls.get(pos) === true));
  }

  /**
   * Add the specific Piece as a child of this Piece. If the specific Piece is already the child of this Piece, it won't
   * be added.
   * @param {Piece} piece the Piece instance to add.
   * @param {Pos} pos the position of the child Piece to place in this Piece.
   */
  addPiece(piece, pos = null) {
    if (this.children.some(c => c.id === piece.id)) {
      return;
    }
    piece.parent = this;
    if (pos) {
      piece.setPos(pos.x, pos.y);
    }
    this.children.push(piece);
    this.pasteWalls(piece);
  }

  /**
   * Add the specific exit.
   * @param {Pos} pos the exit's position in this Piece.
   * @param {Piece} dst the exit's destination.
   */
  addExit(pos, dst) {
    this.walls.set(pos, false);
    if (this.parent) {
      this.parent.pasteWalls(this);
    }
    this.exits.push([pos, dst]);
  }

  hasOpenExit() {
    return this.exits.length < this.maxExits;
  }

  /**
   * Print ASCII map of this Piece.
   */
  print() {
    let row, pos;
    for (let y = 0; y < this.height; y++) {
      row = [];
      for (let x = 0; x < this.width; x++) {
        pos = new Pos(x, y);
        if (this.walls.get(pos)) {
          row.push('w');
        } else if (this.isExit(pos)) {
          row.push('e');
        } else {
          row.push(' ');
        }
      }
      console.log(row.join(''))
    }
  }

  toString() {
    return `[Piece ${this.id} (${this.left}, ${this.top}) - (${this.right}, ${this.bottom})]`;
  };
}


class Room extends Piece {
  /**
   * Construct a Room instance.
   * @param {Object} opts the options to initialize the Room instance, which supports the following items:
   *  <ul>
   *   <li>pos: the position of left-top corner of the Room, default (0, 0).</li>
   *   <li>size: the size of the Room without walls, default (1, 1). The wall's width is 1.</li>
   *   <li>parent: the parent of the Room, default `null`.</li>
   *   <li>maxExits: the maximum exit count of the Room, default 10.</li>
   *   <li>tag: the tag of the Room, default ''.</li>
   *   <li>symmetric: whether any point at any wall can be exit, default `false`. If `false`, only the middle point of
   *   each wall can be exit.</li>
   *  </ul>
   * @return {Room} this Room instance.
   */
  constructor(opts) {
    let roomSize = opts.size || new Size(1, 1);
    opts.size = new Size(roomSize.x + 2, roomSize.y + 2);

    let symmetric = opts.symmetric || false;
    delete opts.symmetric;

    super(opts);
    this.roomSize = roomSize;
    this.symmetric = symmetric;

    this.walls.setSquare(1, 1, this.roomSize.x, this.roomSize.y, false, true);

    if (symmetric) {
      let center = this.center;
      this.perimeter = [
        [new Pos(center.x, 0), BOTTOM],
        [new Pos(center.x, this.height - 1), TOP],
        [new Pos(0, center.y), RIGHT],
        [new Pos(this.right - 1, center.y), LEFT]
      ];
    } else {
      // TODO: mark the four corners as perimeter too.
      this.addPerimeter(new Pos(1, 0), new Pos(this.width - 2, 0), BOTTOM);
      this.addPerimeter(new Pos(1, this.height - 1), new Pos(this.width - 2, this.height - 1), TOP);
      this.addPerimeter(new Pos(0, 1), new Pos(0, this.height - 2), RIGHT);
      this.addPerimeter(new Pos(this.width - 1, 1), new Pos(this.width - 1, this.height - 2), LEFT);
    }
    return this;
  }

  toString() {
    return `[Room ${this.id} ${this.tag} (${this.left}, ${this.top}) - (${this.right}, ${this.bottom})]`;
  };
}


class Corridor extends Room {
  /**
   * Construct a Corridor instance.
   * @param {Object} opts the options to initialize the Corridor instance, which supports the following items:
   *  <ul>
   *   <li>pos: the position of left-top corner of the Corridor, default (0, 0).</li>
   *   <li>size: the size of the Corridor without walls, default (1, 1). The wall's width is 1.</li>
   *   <li>parent: the parent of the Corridor, default `null`.</li>
   *   <li>maxExits: the maximum exit count of the Corridor, default 4.</li>
   *   <li>tag: the tag of the Corridor, default ''.</li>
   *   <li>length: the length of the Corridor, default 2.</li>
   *   <li>facing: the facing of the Corridor, one of `FACING`, default `TOP`.</li>
   *  </ul>
   * @return {Corridor} this Corridor instance.
   */
  constructor(opts) {
    let length = opts.length || 2;
    let facing = opts.facing || TOP;
    let maxExits = opts.maxExits || 4;
    delete opts.length;
    delete opts.facing;
    delete opts.maxExits;

    opts.size = (facing === TOP || facing === BOTTOM) ? new Size(1, length) : new Size(length, 1);

    super(opts);
    this.length = length;
    this.facing = facing;
    this.maxExits = maxExits;

    let r = this.width - 1, b = this.height - 1;
    switch (facing) {
      case BOTTOM:
        this.perimeter = [
          [new Pos(1, b), TOP],
          [new Pos(1, 0), BOTTOM],
          [new Pos(2, 1), LEFT],
          [new Pos(0, 1), RIGHT]
        ];
        break;
      case TOP:
        this.perimeter = [
          [new Pos(1, b), TOP],
          [new Pos(1, 0), BOTTOM],
          [new Pos(2, b - 1), LEFT],
          [new Pos(0, b - 1), RIGHT]
        ];
        break;
      case LEFT:
        this.perimeter = [
          [new Pos(0, 1), RIGHT],
          [new Pos(r, 1), LEFT],
          [new Pos(r - 1, 2), TOP],
          [new Pos(r - 1, 0), BOTTOM]
        ];
        break;
      case RIGHT:
        this.perimeter = [
          [new Pos(0, 1), RIGHT],
          [new Pos(r, 1), LEFT],
          [new Pos(1, 2), TOP],
          [new Pos(1, 0), BOTTOM]
        ];
        break;
    }
  }
}


class Generator extends Piece {
  /**
   * Construct a Generator instance.
   * @param {Object} opts the options to initialize the Generator instance, which supports the following items:
   *  <ul>
   *   <li>size: the size of whole map, default (20, 20).</li>
   *   <li>maxExits: the maximum exit count of room, default 10.</li>
   *   <li>symmetric: whether any point at any wall can be exit, default `false`. If `false`, only the middle point of
   *   each wall can be exit.</li>
   *  </ul>
   * @return {Generator} this Generator instance.
   */
  constructor(opts) {
    super(opts);
    this.random = new Random(this.seed);
    this.startPos = new Pos(0, 0);
    this.minX = this.width;
    this.minY = this.height;
    this.maxX = 0;
    this.maxY = 0;
    return this;
  }

  addPiece(piece, pos = null) {
    super.addPiece(piece, pos);

    this.minX = Math.min(this.minX, piece.left);
    this.minY = Math.min(this.minY, piece.top);
    this.maxX = Math.max(this.maxX, piece.right);
    this.maxY = Math.max(this.maxY, piece.bottom);
  }

  /**
   * Remove map margins.
   */
  trim() {
    this.setSize(this.maxX - this.minX, this.maxY - this.minY);
    this.children.forEach(c => c.setPos(c.left - this.minX, c.top - this.minY));

    this.startPos.x -= this.minX;
    this.startPos.y -= this.minY;

    this.walls = this.walls.getSquare(this.minX, this.minY, this.width, this.height);

    this.minX = 0;
    this.minY = 0;
    this.maxX = this.width;
    this.maxY = this.height;
  }

  /**
   * Check whether the specific Piece can be put into this Piece
   * @param {Piece} piece the Piece to place
   * @param {Pos} pos the desired position in this Piece.
   * @return {boolean} `true` if the Piece can be placed, `false` otherwise.
   */
  fits(piece, pos) {
    let p, x, y;
    for (y = 0; y < piece.height; y++) {
      for (x = 0; x < piece.width; x++) {
        p = this.walls.get(new Pos(pos.x + x, pos.y + y));
        if (p === false  // this tile is occupied by other Piece
          || p === null || p === undefined  // this tile is out of this Piece
        ) {
          return false;
        }
      }
    }
    return true;
  }

  /**
   * Register an exit with each piece, remove intersecting perimeter tiles
   *
   * @param {Piece} piece1 the first Piece.
   * @param {Pos} exit1Pos the position of the exit from `piece1` to `piece2`.
   * @param {Piece} piece2 the second Piece.
   * @param {Pos} exit2Pos the position of the exit from `piece2` to `piece1`.
   */
  joinExits(piece1, exit1Pos, piece2, exit2Pos) {
    piece1.addExit(exit1Pos, piece2);
    piece2.addExit(exit2Pos, piece1);

    let ic = piece1.intersection(piece2);
    if (ic) {
      let posInThisPiece = new Pos(ic.left, ic.top);
      let pieceLocalPos = piece1.localPos(posInThisPiece);
      piece1.removePerimeter(new Rect(pieceLocalPos.x, pieceLocalPos.y, ic.width, ic.height));
      pieceLocalPos = piece2.localPos(posInThisPiece);
      piece2.removePerimeter(new Rect(pieceLocalPos.x, pieceLocalPos.y, ic.width, ic.height));
    }
  }

  /**
   * Join two Pieces provided at least one exit.
   * @param {Piece} piece1 the first Piece, which should already be placed.
   * @param {[Pos, number]} exit2Info the information of the exit from `piece2` to `piece1`, the information format is
   * [Pos (in `piece2`), FACING].
   * @param {Piece} piece2 the second Piece.
   * @param {[Pos, number]} exit1Info the information of the exit from `piece1` to `piece2`, the information format is
   * [Pos (in `piece1`), FACING].
   * @return {boolean} `true` if successfully joined two Pieces, `false` otherwise.
   */
  join(piece1, exit2Info, piece2, exit1Info = null) {
    let [exit2LocalPos, exit2Facing] = exit2Info;
    if (!exit1Info) {
      exit1Info = this.random.choose(piece1.getPerimeterByFacing(FACING_INVERSE[exit2Facing]));
    }
    let [exit1LocalPos, exit1Facing] = exit1Info;

    // the position of exit2 in this Piece, which should close to the exit1
    let pos = piece1.parentPos(exit1LocalPos);

    // figure out piece2's position
    pos.x -= exit2LocalPos.x;
    pos.y -= exit2LocalPos.y;

    if (!this.fits(piece2, pos)) {
      return false;
    }

    this.joinExits(piece1, exit1LocalPos, piece2, exit2LocalPos);
    this.addPiece(piece2, pos);

    return true;
  }

  /**
   * Filter out pieces
   * @return {Piece[]}
   */
  getOpenPieces() {
    return this.children.filter(c => c.hasOpenExit() && c.perimeter.length > 0);
  }
}


class Dungeon extends Generator {
  /**
   * Construct a Dungeon instance.
   * @param {Object} opts the options to initialize the Dungeon instance, which supports the following items:
   *  <ul>
   *   <li>size: the size of whole map, default (20, 20).</li>
   *   <li>maxExits: the maximum exit count of room, default 10.</li>
   *   <li>symmetricRooms: whether any point at any wall can be exit, default `false`. If `false`, only the middle point
   *   of each wall can be exit.</li>
   *  </ul>
   * @return {Dungeon} this Dungeon instance.
   */
  constructor(opts) {
    super(Object.assign({
      size: new Size(100, 100),
      rooms: {
        initial: {
          minSize: new Size(3, 3),
          maxSize: new Size(3, 3),
          maxExits: 1
        },
        any: {
          minSize: new Size(2, 2),
          maxSize: new Size(5, 5),
          maxExits: 4
        }
      },
      minCorridorLength: 2,
      maxCorridorLength: 6,
      corridorDensity: 0.5, // corridors per room
      symmetricRooms: false, // exits must be in the middle of walls
      interconnects: 1, // extra corridors to connect rooms and make circular paths. not guaranteed
      maxInterconnectLength: 10,
      roomCount: 10
    }, opts));

    this.roomTags = Object.keys(this.rooms).filter(tag => (tag !== 'any' && tag !== 'initial'));
    for (let i = this.roomTags.length; i < this.roomCount; i++) {
      this.roomTags.push('any');
    }

    this.rooms = this.rooms || [];
    this.corridors = this.corridors || [];
    return this;
  }

  /**
   * Add a new room
   * @param {Room} room the Room to add
   * @param {Pos} exitPos local perimeter pos for the exit
   * @param {Room} addToRoom
   * @return {boolean} `true` if successfully added the Room, `false` otherwise.
   */
  addRoom(room, exitPos = null, addToRoom = null) {
    let paramAddToRoom = addToRoom;
    let openPieces, _addToRoom, tryCount = 0;
    while (true) {
      // pick a placed room to connect this piece to
      if (addToRoom) {
        _addToRoom = addToRoom;
        addToRoom = null;
      } else {
        openPieces = this.getOpenPieces();
        if (openPieces && openPieces.length) {
          _addToRoom = this.random.choose(openPieces);
        } else {
          console.log('ran out of choices connecting');
          break;
        }
      }

      // if exitPos is specified, try joining to this specific exit
      if (exitPos) {
        // try joining the room
        if (this.join(_addToRoom, [exitPos, TOP], room)) {
          return true;
        }
      } else { // try joining the room to certain perimeter.
        let perimeters = room.perimeter.slice();
        while (perimeters.length) {
          if (this.join(_addToRoom, this.random.choose(perimeters, true), room)) {
            return true;
          }
        }
      }

      if (tryCount++ === 100) {
        console.log('failed to connect 100 times :(', room, exitPos, paramAddToRoom);
        return false;
      }
    }
  }

  /**
   * Spawn next corridor.
   * @return {Corridor} the created Corridor.
   */
  newCorridor() {
    return new Corridor({
      length: this.random.int(this.minCorridorLength, this.maxCorridorLength),
      facing: this.random.choose(FACING)
    });
  }

  /**
   * Spawn next room
   * @param key the key of the Room
   * @return {Room} the created Room
   */
  newRoom(key) {
    key = key || this.random.choose(this.roomTags);
    let opts = this.rooms[key];
    let room = new Room({
      size: this.random.vec(opts.minSize, opts.maxSize),
      maxExits: opts.maxExits,
      symmetric: this.symmetricRooms,
      tag: key
    });

    this.roomTags.splice(this.roomTags.indexOf(key), 1);

    if (key === 'initial') {
      this.initialRoom = room;
    }
    return room;
  }

  /**
   * Add one more connection between rooms
   * @return {boolean} `true` if successfully connected the Rooms, `false` otherwise.
   */
  addInterconnect() {
    let perimeters = {}, hash, pos;

    // hash all possible exits
    this.children.forEach(child => {
      if (child.hasOpenExit()) {
        child.perimeter.forEach(([pos, facing]) => {
          pos = child.parentPos(pos);
          hash = `${pos.x}_${pos.y}`;
          perimeters[hash] = [pos, child];
        });
      }
    });

    // search each room for a possible interconnect, backwards
    let room, length, corridor, room2, exitPos, exitFacing;
    for (let i = this.children.length - 1; i--; i >= 0) {
      room = this.children[i];

      // if room has exits available
      if (room.hasOpenExit()) {

        // iterate perimeters to find an exit position
        for (let k = 0; k < room.perimeter.length; k++) {
          [exitPos, exitFacing] = room.perimeter[k];
          pos = room.parentPos(exitPos);
          length = -1;

          // try to dig a tunnel from this exit and see if it hits anything
          while (length <= this.maxInterconnectLength) {
            // check if space is not occupied
            if (!this.walls.get(pos) ||
              !this.walls.get(shiftLeft(pos, exitFacing)) ||
              !this.walls.get(shiftRight(pos, exitFacing))) {
              break;
            }
            hash = `${pos.x}_${pos.y}`;

            // is there a potential exit at these coordinates (not of the same room)
            if (perimeters[hash] && perimeters[hash][1].id !== room.id) {
              room2 = perimeters[hash][1];

              if (length > -1) { // rooms cant be joined directly, add a corridor
                corridor = new Corridor({length: length, facing: exitFacing});

                if (this.join(room, corridor.perimeter[0], corridor, [exitPos, exitFacing])) {
                  this.joinExits(room2, perimeters[hash][0], corridor, corridor.perimeter[corridor.perimeter.length - 1]);
                  return true;
                }
                return false;
              }

              // rooms can be joined directly
              this.joinExits(room2, perimeters[hash][0], room, exitPos);
              return true;
            }

            // exit not found, try to make the interconnect longer
            pos = shift(pos, exitFacing);
            length ++;
          }
        }
      }
    }
  }

  /**
   * Generate whole map.
   */
  generate() {
    let k, roomCount = this.roomCount - 1,
      room = this.newRoom(this.rooms.initial ? 'initial' : undefined),
      corridorCount = Math.round(this.corridorDensity * roomCount);

    this.addPiece(room, this.rooms.initial && this.rooms.initial.pos ? this.rooms.initial.pos : this.center);

    while (corridorCount || roomCount) {
      k = this.random.int(1, roomCount + corridorCount);
      if (k <= corridorCount) {
        let corridor = this.newCorridor();
        let added = this.addRoom(corridor, corridor.perimeter[0][0]);
        corridorCount--;

        // try to connect to this corridor next
        if (roomCount > 0 && added) {
          this.addRoom(this.newRoom(), null, corridor);
          roomCount--;
        }
      } else {
        this.addRoom(this.newRoom());
        roomCount--;
      }
    }

    for (k = 0; k < this.interconnects; k++) {
      this.addInterconnect();
    }

    this.trim();

    if (this.initialRoom) {
      this.startPos = this.initialRoom.globalPos(this.initialRoom.center);
    }
  }
}
