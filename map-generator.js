const NoteViewMode_NORMAL = 0;
const NoteViewMode_TAILED = 1;
const NoteViewMode_LEGEND = 2;
const NoteViewMode_SYMBOLS = 3;
const NoteViewMode_HIDDEN = 4;

const GridType_HIDDEN = 0;
const GridType_DOTTED = 1;
const GridType_DASHED = 2;
const GridType_SOLID = 3;

const PresetStyle_DEFAULT = {
  colorInk: '#222022',
  colorWater: '#CCCECE',
  colorShading: '#CCCECE',
  colorBg: '#F8F8F4',
  colorPaper: '#F8F8F4',
  strokeThin: 0.5,
  strokeHatching: 0.8,
  strokeNormal: 1.5,
  strokeThick: 3.0,
  shadowColor: '#CCCCCC',
  shadowDist: 0.2,
  hatchingStyle: 'Default',
  hatchingStrokes: 3,
  hatchingSize: 0.33,
  hatchingDistance: 0.5,
  fontTitle: {
    italic: false,
    weight: 700,
    face: 'Grenze',
    size: 48
  },
  fontStory: {
    italic: true,
    weight: 400,
    face: 'Neuton',
    size: 24
  },
  fontNotes: {
    italic: false,
    weight: 400,
    face: 'Neuton',
    size: 20
  },
  fontLegend: {
    italic: false,
    weight: 400,
    face: 'Neuton',
    size: 24
  },
  fontSymbols: {
    italic: false,
    weight: 800,
    face: 'Neuton',
    size: 30
  }
};
const PresetStyle_ANCIENT = {
  colorInk: '#2C241D',
  colorWater: '#99665C',
  colorShading: '#BFBEB6',
  colorBg: '#D9D5C3',
  colorPaper: '#E5E2CF',
  strokeThin: 0.5,
  strokeHatching: 0.5,
  strokeNormal: 1.5,
  strokeThick: 3.0,
  shadowColor: '#B2A097',
  shadowDist: 0.4,
  hatchingStyle: 'Stonework',
  hatchingStrokes: 3,
  hatchingSize: 0.4,
  hatchingDistance: 0.6,
  fontTitle: {
    italic: false,
    weight: 700,
    face: 'Grenze',
    size: 48
  },
  fontStory: {
    italic: true,
    weight: 400,
    face: 'Neuton',
    size: 24
  },
  fontNotes: {
    italic: false,
    weight: 400,
    face: 'Neuton',
    size: 20
  },
  fontLegend: {
    italic: false,
    weight: 400,
    face: 'Neuton',
    size: 24
  },
  fontSymbols: {
    italic: false,
    weight: 800,
    face: 'Neuton',
    size: 30
  }
};
const PresetStyle_BLACKBOARD = {
  colorInk: '#EEEEEE',
  colorWater: '#646070',
  colorShading: '#333333',
  colorBg: '#333333',
  colorPaper: '#222222',
  strokeThin: 0.5,
  strokeHatching: 1.0,
  strokeNormal: 1.5,
  strokeThick: 3.0,
  shadowColor: '#A9A0B2',
  shadowDist: 0.3,
  hatchingStyle: 'Default',
  hatchingStrokes: 3,
  hatchingSize: 0.5,
  hatchingDistance: 0.5,
  fontTitle: {
    italic: false,
    weight: 700,
    face: 'Grenze',
    size: 48
  },
  fontStory: {
    italic: true,
    weight: 400,
    face: 'Neuton',
    size: 24
  },
  fontNotes: {
    italic: false,
    weight: 400,
    face: 'Neuton',
    size: 20
  },
  fontLegend: {
    italic: false,
    weight: 400,
    face: 'Neuton',
    size: 24
  },
  fontSymbols: {
    italic: false,
    weight: 800,
    face: 'Neuton',
    size: 30
  }
};
const PresetStyle_MODERN = {
  colorInk: '#000000',
  colorWater: '#DAE5E3',
  colorShading: '#000000',
  colorBg: '#F2F2F2',
  colorPaper: '#FFFFFF',
  strokeThin: 0.5,
  strokeHatching: 0.5,
  strokeNormal: 1.0,
  strokeThick: 2.0,
  shadowColor: '#FFFFFF',
  shadowDist: 0.1,
  hatchingStyle: 'Bricks',
  hatchingStrokes: 3,
  hatchingSize: 0.5,
  hatchingDistance: 0.67,
  fontTitle: {
    italic: false,
    weight: 700,
    face: 'Grenze',
    size: 48
  },
  fontStory: {
    italic: true,
    weight: 400,
    face: 'Neuton',
    size: 24
  },
  fontNotes: {
    italic: false,
    weight: 400,
    face: 'Neuton',
    size: 20
  },
  fontLegend: {
    italic: false,
    weight: 400,
    face: 'Neuton',
    size: 24
  },
  fontSymbols: {
    italic: false,
    weight: 800,
    face: 'Neuton',
    size: 30
  }
};

class MapGenerator {
  constructor(opts) {
    this.config = Object.assign({
      noteViewMode: NoteViewMode_NORMAL,
      style: {}
    }, opts);
  }

  /**
   * Set notes display mode.
   * @param {number} mode one of `NoteViewMode_*`
   */
  setNotesMode(mode) {
    console.log(`MapGenerator.setNotesMode(${mode})`);
  }

  /**
   * Set grid line drawing mode.
   * @param {number} mode one of `GridType_*`
   */
  setGridMode(mode) {
    console.log(`MapGenerator.setGridMode(${mode})`);
  }

  /**
   * Show or hide title and story.
   * @param {boolean} show `true` to show title, `false` to hide.
   */
  showTitle(show) {
    console.log(`MapGenerator.showTitle(${show})`);
  }

  /**
   * Show or hide water.
   * @param {boolean} show `true` to show, `false` to hide.
   */
  showWater(show) {
    console.log(`MapGenerator.showWater(${show})`);
  }

  /**
   * Show or hide properties.
   * @param {boolean} show `true` to show, `false` to hide.
   */
  showProps(show) {
    console.log(`MapGenerator.showProps(${show})`);
  }

  /**
   * Show or hide corners.
   * @param {boolean} show `true` to show, `false` to hide.
   */
  showCorners(show) {
    console.log(`MapGenerator.showCorners(${show})`);
  }

  /**
   * Show or hide shadow.
   * @param {boolean} show `true` to show, `false` to hide.
   */
  showShadow(show) {
    console.log(`MapGenerator.showShadow(${show})`);
  }

  /**
   * Show or hide secret rooms.
   * @param {boolean} show `true` to show, `false` to hide.
   */
  showSecrets(show) {
    console.log(`MapGenerator.showSecrets(${show})`);
  }

  /**
   * Rotate the map to fit the canvas, or don't rotate it.
   * @param {boolean} rotate `true` to rotate, `false` not to.
   */
  rotateMap(rotate) {
    console.log(`MapGenerator.rotateMap(${rotate})`);
  }

  /**
   * Show the map in black and white or not.
   * @param {boolean} show `true` to show, `false` not to.
   */
  showBlackAndWhite(show) {
    console.log(`MapGenerator.showBlackAndWhite(${show})`);
  }

  /**
   * Set the level of flood.
   * @param {number} level the flood level.
   */
  setFloodLevel(level) {
    console.log(`MapGenerator.setFloodLevel(${level})`);
    this.config.floodLevel = level;
    this.updateWater();
  }

  /**
   * Load preset style.
   * @param {string} name of the preset style.
   */
  loadPresetStyle(styleObj) {
    console.log(`MapGenerator.loadPresetStyle(${styleObj})`);
    this.config.style = Object.assign({}, styleObj);
  }

  savePNG() {
    console.log(`MapGenerator.savePNG()`);
  }

  exportSVG() {
    console.log(`MapGenerator.exportSVG()`);
  }

  exportJSON() {
    console.log(`MapGenerator.exportJSON()`);
  }

  exportVOX() {
    console.log(`MapGenerator.exportVOX()`);
  }

  newDungeon() {
    console.log(`MapGenerator.newDungeon()`);
  }

  rerollNotes() {
    if (this.config.noteViewMode == NoteViewMode_SYMBOLS || this.config.noteViewMode == NoteViewMode_HIDDEN) {
      console.log(`MapGenerator.rerollNotes() do nothing`);
      return;
    }
    console.log(`MapGenerator.rerollNotes() rerolling`);
  }

  rearrangeNotes() {
    if (this.config.noteViewMode != NoteViewMode_NORMAL && this.config.noteViewMode == NoteViewMode_TAILED) {
      console.log(`MapGenerator.rearrangeNotes() do nothing`);
      return;
    }
    console.log(`MapGenerator.rearrangeNotes() rerolling`);
  }

  updateWater() {
    console.log(`MapGenerator.updateWater()`);
  }
}
