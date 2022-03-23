const NoteViewMode_NORMAL = 0;
const NoteViewMode_TAILED = 1;
const NoteViewMode_LEGEND = 2;
const NoteViewMode_SYMBOLS = 3;
const NoteViewMode_HIDDEN = 4;

const GridType_HIDDEN = 0;
const GridType_DOTTED = 1;
const GridType_DASHED = 2;
const GridType_SOLID = 3;

const SMALL_ROOM = 0;
const LARGE_ROOM = 1;
const CORRIDOR_ROOM = 2;
const JUNCTION_ROOM = 3;

const PresetMapStyle_DEFAULT = {
  colorInk: '#222022FF',
  colorWater: '#CCCECEFF',
  colorShading: '#CCCECEFF',
  colorBg: '#F8F8F4FF',
  colorPaper: '#F8F8F4FF',
  strokeThin: 0.5,
  strokeHatching: 0.8,
  strokeNormal: 1.5,
  strokeThick: 3,
  shadowColor: '#CCCCCCFF',
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
const PresetMapStyle_ANCIENT = {
  colorInk: '#2C241DFF',
  colorWater: '#99665CFF',
  colorShading: '#BFBEB6FF',
  colorBg: '#D9D5C3FF',
  colorPaper: '#E5E2CFFF',
  strokeThin: 0.5,
  strokeHatching: 0.5,
  strokeNormal: 1.5,
  strokeThick: 3,
  shadowColor: '#B2A097FF',
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
const PresetMapStyle_BLACKBOARD = {
  colorInk: '#EEEEEEFF',
  colorWater: '#646070FF',
  colorShading: '#333333FF',
  colorBg: '#333333FF',
  colorPaper: '#222222FF',
  strokeThin: 0.5,
  strokeHatching: 1,
  strokeNormal: 1.5,
  strokeThick: 3,
  shadowColor: '#A9A0B2FF',
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
const PresetMapStyle_MODERN = {
  colorInk: '#000000FF',
  colorWater: '#DAE5E3FF',
  colorShading: '#000000FF',
  colorBg: '#F2F2F2FF',
  colorPaper: '#FFFFFFFF',
  strokeThin: 0.5,
  strokeHatching: 0.5,
  strokeNormal: 1,
  strokeThick: 2,
  shadowColor: '#FFFFFFFF',
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
const MapStyle_EMPTY = {
  colorInk: '',
  colorWater: '',
  colorShading: '',
  colorBg: '',
  colorPaper: '',
  strokeThin: 0,
  strokeHatching: 0,
  strokeNormal: 0,
  strokeThick: 0,
  shadowColor: '',
  shadowDist: 0,
  hatchingStyle: '',
  hatchingStrokes: 0,
  hatchingSize: 0,
  hatchingDistance: 0,
  fontTitle: {
    italic: false,
    weight: 0,
    face: '',
    size: 0
  },
  fontStory: {
    italic: false,
    weight: 0,
    face: '',
    size: 0
  },
  fontNotes: {
    italic: false,
    weight: 0,
    face: '',
    size: 0
  },
  fontLegend: {
    italic: false,
    weight: 0,
    face: '',
    size: 0
  },
  fontSymbols: {
    italic: false,
    weight: 0,
    face: '',
    size: 0
  }
};

const Dot_UP = new paper.Point(0, -1);
const Dot_DOWN = new paper.Point(0, 1);
const Dot_LEFT = new paper.Point(-1, 0);
const Dot_RIGHT = new paper.Point(1, 0);

const TAG_ANCHORS = {
  'abbey': ['dwelling', 'large', 'secret', 'temple'],
  'archive': ['compact', 'large', 'ordered', 'round'],
  'asylum': ['compact', 'dangerous', 'dwelling', 'square'],
  'basilica': ['colonnades', 'compact', 'ordered', 'square'],
  'catacombs': ['chaotic', 'dangerous', 'large', 'wet'],
  'chambers': ['dwelling'],
  'chaos': ['chaotic'],
  'chapel': ['compact', 'small', 'temple'],
  'crypt': ['cramped', 'tomb'],
  'desert': ['dry'],
  'dungeon': ['chaotic', 'dangerous', 'secret'],
  'emperor': ['dwelling'],
  'frozen': ['dry'],
  'hall': ['chaotic', 'dwelling', 'small', 'spacious'],
  'halls': ['chaotic', 'dwelling', 'large', 'spacious'],
  'house': ['compact', 'dwelling', 'secret', 'small', 'square'],
  'king': ['dwelling'],
  'labyrinth': ['large', 'winding'],
  'lair': ['chaotic', 'dangerous', 'treasure', 'winding'],
  'library': ['compact', 'large', 'ordered', 'round'],
  'manor': ['dwelling'],
  'mansion': ['dwelling'],
  'mausoleum': ['cramped', 'tomb'],
  'maze': ['chaotic', 'colonnades', 'dangerous', 'winding'],
  'monastery': ['dwelling', 'large', 'temple'],
  'mountain': ['crumbling'],
  'observatory': ['compact', 'round'],
  'palace': ['colonnades', 'dwelling', 'large', 'ordered', 'treasure'],
  'prison': ['compact', 'dangerous', 'dwelling', 'large', 'square'],
  'pyramid': ['ordered', 'square', 'tomb'],
  'queen': ['dwelling'],
  'ruined': ['crumbling'],
  'sanctum': ['colonnades', 'temple'],
  'sepulcher': ['tomb'],
  'shattered': ['crumbling'],
  'shrine': ['temple'],
  'subterranean': ['crumbling'],
  'sunken': ['flooded'],
  'swamp': ['wet'],
  'temple': ['colonnades', 'large', 'ordered', 'round', 'spacious', 'temple'],
  'tomb': ['colonnades', 'tomb'],
  'undead': ['tomb'],
  'undeground': ['crumbling'],
  'underwater': ['flooded'],
  'vampire': ['tomb'],
  'vault': ['secret', 'treasure'],
};
const TAG_INFOS = {
  'chaotic': 'No symmetry',
  'colonnades': 'More colonnades',
  'compact': 'No corridors',
  'cramped': 'Small rooms',
  'crumbling': 'More cracks and rubble',
  'dangerous': 'More dead bodies',
  'dry': 'No water',
  'dwelling': 'A throne at the last room, more wells and tapestries',
  'flooded': 'Much water',
  'large': 'Larger dungeon',
  'multi-level': 'Stairs down at the last room',
  'ordered': 'More symmetry',
  'round': 'More round rooms',
  'secret': 'More secret rooms',
  'small': 'Smaller dungeon',
  'spacious': 'More large rooms',
  'square': 'No round rooms',
  'temple': 'Some altars',
  'tomb': 'Some coffins, fewer fountains',
  'treasure': 'More valuable or exotic loot',
  'wet': 'Some water',
  'winding': 'More corridors',
}
const TAG_EXCEPTIONS = [
  ['chaotic', 'ordered'],
  ['winding', 'compact'],
  ['cramped', 'spacious'],
  ['large', 'small'],
  ['round', 'square'],
  ['dry', 'wet', 'flooded']
];

const STORY_SPELL_BOOK = {
  'dramaticEntity' : ['#dramaticNoun#', '#dungName1# #symbol#'],
  'dramaticNoun' : [
    'Ash', 'Bones', 'Chaos', 'Darkness', 'Death', 'Doom', 'Dreams', 'Evil', 'Fate', 'Madness',
    'Secrets', 'Shadows', 'Sorrows', 'Tears', 'Terror', 'Void', 'Blood', 'Reflection', 'Twilight',
    'Thunder', 'Fear', 'Spirits', 'Sorrows', 'Pain', 'Fire', 'Illusions', 'Embers', 'Blades',
    'Ghosts', 'Sky', 'Deep'
  ],
  'symbol' : [
    'cross', 'skull', 'moon', 'star', 'eye', 'arrow', 'fish', 'crown', 'bat', 'heart', 'bird',
    'lily', 'leaf', 'palm', 'claw', 'seashell', 'snail', 'fist'
  ],
  'native' : ['#race#'],
  'raider' : [
    'orc', 'goblin', 'hobgoblin', 'kobold', 'gnoll', 'pirate', 'bandit', 'cultist', 'thug', 'ogre'
  ],
  'creature' : ['#race#', '#animal#', '#raider#', '#native#'],
  'enemy' : ['#native#', '#raider#'],
  'person' : ['#race#', '#native#', '#raider#', '#npc_class#'],
  'race' : ['human', 'elf', 'dwarf', 'halfling', 'gnome'],
  'animal' : [
    'snake', 'lizard', 'spider', 'rabbit', 'cat', 'bear', 'lion', 'sparrow', 'turtle', 'wasp',
    'mammoth', 'goat', 'rat', 'chicken', 'boar', 'wolf', 'crow', 'rhino', 'eagle', 'owl',
    'scorpion', 'ant', 'pig', 'ape', 'pigeon', 'worm', 'bat', 'centipede', 'monkey',
    'were#animal#', 'beast', 'WATER?-seal', 'WATER?-octopus', 'WATER?-alligator', 'WATER?-shark',
    'WATER?-piranha'],
  'monster' : [
    'dragon', 'basilisk', 'manticore', 'beholder', 'sphinx', 'chimera', 'hydra', 'wyvern', 'wyrm'
  ],
  'beast' : ['#monster_adj# #animal#', '#monster#'],
  'monster_adj' : [
    'venomous', 'mutant', 'man-eating', 'albino', 'blood-sucking', 'soul-{eating|sucking}',
    'intelligent', 'fire-breathing', 'invisible'
  ],
  'north' : ['to the north', 'on the northern wall{ of the #room#}'],
  'south' : ['to the south', 'on the southern wall{ of the #room#}'],
  'east' : ['to the east', 'on the eastern wall{ of the #room#}'],
  'west' : ['to the west', 'on the western wall{ of the #room#}'],
  'color' : ['red', 'yellow', 'green', 'blue', 'purple', 'black', 'white'],
  'loot' : [
    '#loot_container#', '#loot_container#', '#loot_ground#', '#loot_corpse#', '#loot_display#',
    'TREASURE?-#loot_display#', 'TREASURE?-#loot_display#', 'DANGEROUS?-#loot_corpse#',
    'DANGEROUS?-#loot_corpse#', 'CRUMBLING?-#loot_ground#', 'CRUMBLING?-#loot_ground#'
  ],
  'loot_container' : [
    '#container.a.capitalize# containing #treasure#.',
    '#container.a.capitalize# with #treasure#{ in it}.',
    '#treasure.capitalize# in #container.a#.',
    '#container.a.capitalize# holds #treasure#.'
  ],
  'loot_ground' : [
    '#treasure.capitalize# among rubble on the ground.',
    '#treasure.capitalize# hidden in a {crack|crevice} of the {wall|floor}.',
    '#treasure.capitalize# tucked under some debris.',
    'A {{giant|large} }pile of rubble hides #treasure#.',
    'WATER?-#treasure.capitalize# at the bottom of a {small }pool.',
    'DWELLING?-#treasure.capitalize# under pieces of broken furniture.',
    'DWELLING?-A wall panel conceals #treasure#.'
  ],
  'loot_corpse' : [
    'A corpse of #person.a#, #treasure# #nearby#.',
    'A dying #person#, #treasure# among his belongings.',
    'Remains of #person.a#{ apparently killed by #creature.s#}, #treasure# {clutched }in his hands.',
    '#body_state.a.capitalize# body of #person.a#, #treasure# #nearby#.'
  ],
  'loot_display' : [
    'A {lifelike }{statue|sculpture} of #native.a#{ #npc_class#}, #special_item# in its hands.',
    'A stuffed #race#{ #npc_class#} with #special_item# in their hands.',
    '#special_item.capitalize# in a {magically locked |shattered |glass |}{display|trophy|curio} case.',
    '#special_item.capitalize# on a pedestal{ table}.',
    '#special_item.capitalize# locked in a {magical |mechanical | }safe.',
    '#special_item.capitalize# in the middle of a {pentagram|circle of runes} on the ground.',
    '#special_item.capitalize# hovering in the middle of the #room#.',
    'TEMPLE?-#special_item.capitalize# on an altar.'
  ],
  'special_item' : '{#magic_item#|#mystery_item#}',
  'nearby' : ['nearby', 'close to it', 'close by'],
  'body_state' : [
    'decapitated', 'incenerated', 'petrified', 'mutilated', '{mold|ooze|slime}-covered',
    'half-eaten', '{fungus|moss|ivy|lichen}-covered', 'crystalized', 'still warm', 'desiccated',
    'skinless', 'jellyfied', 'frozen'
  ],
  'container' : '{#container_adj# }#container_noun#',
  'container_noun' : [
    'chest', 'chest', 'chest', 'crate', 'crate', 'box', 'trunk', 'basket', 'TOMB?-coffin',
    'TOMB?-sarcophagus', 'locker', 'strongbox'
  ],
  'container_adj' : ['medium', 'large', 'battered', 'reinforced', 'broken', 'rotten'],
  'treasure' : ['#loot_item#', '#loot_list# and #loot_item#', '#treasure_item#'],
  'loot_list' : ['#loot_item#', '#loot_item#', '#loot_item#', '#loot_list#, #loot_item#'],
  'loot_item' : ['some gold', '#weapon.a#', '#armor.a#', '#gear#'],
  'weapon' : '{#weapon_adj# }#weapon_noun#',
  'weapon_noun' : [
    'sword', 'axe', 'dagger', 'spear', 'mace', 'hammer', 'spear', 'flail', 'rapier', 'halberd',
    'long sword', 'katana', 'glaive', 'sword', 'staff'
  ],
  'weapon_adj' : [
    'rusty', 'enchanted', 'cursed', 'ornate', 'ancient', 'blood-stained', 'exotic', 'regular',
    'vorpal'
  ],
  'armor' : [
    'chainmail', 'leather armor', 'scale mail', 'breastplate', 'shield', 'helm', '{cloak|mantle}',
    'scarf'
  ],
  'gear' : [
    'candles', 'a crowbar', 'a flask of holy water', 'a lamp', 'a rope', 'rations', 'a torch',
    'a healing potion', 'arrows', 'a bottle of wine', 'a map{ of the #dung_noun#}', 'lockpicks'
  ],
  'treasure_item' : [
    'gems', '#jewelry_adj.a# #jewelry_noun#', '#magic_item#', '#mystery_item#'
  ],
  'jewelry_adj' : [
    'silver', 'golden', '{carved }ivory', 'bronze', '{jeweled|jewel-encrusted}', 'magic'
  ],
  'jewelry_noun' : [
    'statuette', 'bracelet', 'ring', 'ring', 'necklace', '{crown|tiara}', 'idol', 'brooch',
    'chain', 'figurine', 'mirror', 'box', 'pin', 'chess piece', 'comb', 'mask', 'egg', 'dice',
    'medallion'
  ],
  'magic_item' : '#magic_adj.a# #magic_noun#',
  'magic_adj' : ['magic', 'magic', 'magic', 'eldritch', 'holy', 'unholy', 'enchanted'],
  'magic_noun' : [
    'staff', 'wand', 'rod', 'orb', 'ball', 'tarot deck', 'stone', 'horn', 'tome', 'doll', 'coin',
    'gem', 'compass', 'cube', 'niddle', 'quill', 'flask', 'knife', 'cape', 'lamp', 'book', 'rod',
    'scroll', 'amulet', 'blade', 'bow', 'lantern', 'relic', 'tablet', 'looking glass', 'censer',
    'skull', '{spellbook|grimoire}', 'hourglass', 'flute', '#jewelry_noun#'
  ],
  'mystery_item' : '#mysterious_adj.a#, #mysterious_trait# {#magic_noun#|#weapon_noun#|#armor#|#jewelry_noun#|object}',
  'mysterious_adj' : ['mysterious', 'strange', 'uncanny', 'weird'],
  'mysterious_trait' : [
    'covered with {glyphs|runes|hieroglyphs|carvings|sigils}', '{ice-cold|warm|sticky} to touch',
    '{slightly }{vibrating|humming|glowing|sprakling|translucent}', 'unnaturally {light|heavy}',
    'made of an unknown material', '{whispering|singing|bleeding|smoking|burning|vibrating}'
  ],
  'event' : ['#curiosity#', '#npc#', '#enviro#'],
  'curiosity' : [
    'A bottomless {well|pit}, #action# if a coin is dropped into it.',
    'A {stone|iron|jeweled} throne, #action# when sat on.',
    'A {simple|stone|wooden|blood-covered} altar, #action# when {the candles on it are lit|a sacrifice is made}.',
    'A {dusty }{book|tome} on a lectern, #action# when opened.',
    'A {mundane-looking|suspicious} door, #action# when the knob is touched.',
    'A {burning }fire in a {brazier|fireplace}, #action# when touched.',
    'A {pool|puddle} of {{dark|murky|clear} }water, #action# when drank from.',
    'A fresco on the {ceiling|wall}, #action# when looked at.',
    'A statue of a #creature#, #action# when touched.',
    '{A brain|An eye|A heart} preserved in a jar, #action# when shaken.',
    'A {rusty|ticking} {gearwork|clockwork} {machine|apparatus}, #action# when the lever is pulled.',
    'The #room# is filled with {dense|swirly} {mist|fog|haze|vapour|smoke}. It #action# when {breathed in|inhaled}.',
    'A {tapestry|mural|painting} on the wall, #action# when {brushed|examined}.',
    'A {floor|wall} mirror, #action# when looked in.',
    'A creepy doll, #action# when picked up.',
    'An ornate {lantern|lamp}, #action# when lit.',
    'An {intricate|impossible} puzzle, #action# when solved.',
    'A skeleton on the ground, #action# if disturbed.',
    'A {giant }stuffed #animal#, #action# when stroked.',
    'An enormous {#color# }crystal, #action# if struck hard.'
  ],
  'action' : [
    'ages a person', 'makes a person {slightly }{smaller|bigger}', 'puts a person to sleep',
    'animates', 'turns into {dust|ashes}', 'tells a story of {this place|the #dung_noun#}',
    'wails loudly', 'makes a person forget his name', 'heals a person', 'sounds the alarm',
    'teleports a person outside the #dung_noun#', 'transforms a person into #creature.a#',
    'turns a person to stone', 'answers one question', 'tells where a treasure is hidden',
    'tells an unwanted truth', 'turns out to be a mimic', 'swears', 'pleads to be killed',
    'spawns #special_item#', 'bursts into flames', 'drives a person mad',
    'shows visions of the distant {past|future}', '{blinds|mutes|deafens} a person',
    'allows a person to {breath under water|see in darkness|speak to the spirits}',
    'makes a person {hallucinate|giggle|glow|cough|puke|hiccup}'
  ],
  'npc' : [
    '#npc_desc.a.capitalize#, {sitting|lying|sleeping} {in a corner|on the ground}.',
    '#npc_desc.a.capitalize#. #npc_desire.capitalize#.',
    '#npc_desc.a.capitalize#, #npc_state#.'
  ],
  'npc_desc' : ['{#npc_trait# }{#npc_look# }{#npc_class#|#race#}', '#civilian#'],
  'npc_class' : [
    'bard', '{cleric|priest}', 'barbarian', 'knight', '{hunter|ranger}', '{thief|rogue}', 'wizard',
    'monk', 'druid', 'warlock', 'artificer', 'shaman'
  ],
  'npc_trait': [
    'charming', 'brash', 'suspicious', 'shy', 'fierce', 'arrogant', 'subtle', 'enigmatic', 'calm',
    'cheerful', 'polite', 'sarcastic', 'creepy', 'cold', 'confident', 'mysterious', 'quiet'
  ],
  'npc_look' : [
    'large', 'slim', 'short', 'bony', 'maimed', 'tall', 'rough', 'old', 'mute', 'pockmarked',
    'young', 'stout', 'bearded', 'handsome', 'elegant', 'bald', 'scarred', 'tattoed', 'sad-eyed',
    'dead-eyed', 'one-eyed', 'tanned', 'hooded', 'wild-haired', 'ugly', 'naked', 'long-haired',
    'dark', 'rough', 'one-armed', 'well-dressed', 'blind'
  ],
  'npc_state' : [
    'mortally wounded', 'slightly drunk', 'chained to the wall', '{tightly }tied to a stake',
    'cooking over a campfire', 'apparently expecting you', 'standing over a killed #enemy#',
    'lying in ambush', 'utterly surprised', 'trying to hide {something|#mystery_item#} behind their back',
    'weak of starvation', 'shaking out of fear', 'lost and confused', 'eager to talk',
    'muttering gibberish', 'looking sick', 'talking to an invisible friend',
    'whistling tunelessly', 'checking the content of #container.a#', 'locked in a cage',
    'examining #mystery_item#'
  ],
  'npc_desire' : [
    'needs help to get out from the #dung_noun#', 'desperately needs help',
    'claims to have a message for you', 'wants to join you',
    'would like to join you for a reward', 'pleads to borrow #gear#',
    'has #loot_item# for trade', 'has a quest for you',
    'would like to hire you for a job', 'wants to pay you to get rid of #mystery_item#',
    'can be convinced to help you in your mission'
  ],
  'civilian' : [
    'child', 'teenager', 'girl', 'smith', 'travelling merchant', 'noble', 'old lady',
    'artist', 'hooded figure', 'adventurer', 'old friend', 'villager', 'soldier', 'pilgrim',
    '#raider#', '#race#'
  ],
  'enviro' : ['#enviro_walls#'],
  'enviro_walls' : [
    '#painting_depicting.capitalize#',
    '#painting.a.capitalize#, totally destroyed by {fire|mold|#raider# vandals}.',
    'A mosaic of #symbol.a# pattern on the {floor|walls|ceiling}',
    '#writing.a.capitalize# on the {wall|0.5?-floor|0.1?-ceiling}{ painted in blood}: #sign.caps#'
  ],
  'painting_depicting' : [
    '#painting.a# depicting a scene of #scene#.',
    '#painting.a# depicting #depictedNPC#{ with #magic_noun.a# in one hand and a symbol of #symbol# in the other}.',
    '#painting.a# depicting the {landscape|land|#location#} around the #dung_noun#{ as it looked in the distant past}.'
  ],
  'painting' : '{painting|tapestry|fresco|relief|{colorful }mosaic|graffiti|carving}{ on the wall}',
  'scene' : [
    'battle', 'wedding', 'sacrifice', 'hunt', 'celebration', 'ascension', 'execution', 'inauguration', 'siege'
  ],
  'writing' : ['sign', 'writing'],
  'sign' : [
    'the road of #dramaticNoun# leads to the palace of #dramaticNoun#',
    "{beware of|don't pet} #animal.s#",
    '#animal.s# are not what they seem',
    '#native.s# {rule|suck|unite!|power}',
    'death to #raider.s#',
    'BOSS?-{beware of|all hail} #boss#{!}',
    'BOSS?-#boss# {must die|lives|is back}',
    'BOSS?-#boss# brings #dramaticNoun#',
    '#[noun:#dramaticNoun#][_:#noun# #noun.is#]_# {#dramaticNoun#|coming}',
    '{no more|embrace the} #dramaticNoun#',
    '#demonicName#{ was here}',
    'this {is the {best|worst} #dung_noun#|#dung_noun# is the {best|worst}}{ ever}',
    'where {in hell }is my {{damned|bloody} }{#weapon#|#armor#}',
    "it's not #dung_adj# if it's {not }#dung_adj#",
    '{reveal|uncover} your {{inner }#dramaticNoun#|inner {#npc_class#|#animal#}}'
  ],
  'enviro_statue' : [
    'A {crumbling }{stone|marble|granite} statue of #depictedNPC# {fighting|strangling|slaying|feeding|healing|talking to|blessing|sacrificing|confronting} #creature.a#.'
  ],
  'depictedNPC' :['BOSS?-#boss#', '#npc_look.a# #native#'],
  'enviro_fire' : [
    'A {crackling|cold|hot|magical|smoldering|roaring} fire is burning in #fireplace.a#.',
    '#fireplace.a.capitalize# full of {ash|ashes|embers|cinders}.',
    'A recently abandoned camp, {ashes are still warm|#treasure# {#nearby#|left in a hurry}}.'
  ],
  'fireplace' : ['fireplace', 'hearth'],
  'gate_nokey' : '#gate_desc.a.capitalize# #dir#.',
  'gate_onekey' : '#gate_desc.a.capitalize# with a keyhole #dir#.',
  'gate_manykeys' : '#gate_desc.a.capitalize# with #num# keyholes #dir#.',
  'gate_desc' : '#gate_adj# {#gate_material# }#gate_noun#',
  'gate_noun' : ['door', 'gate', 'double door'],
  'gate_adj' : ['large', 'huge', 'massive', 'notable', 'round', 'mouth-shaped', 'lavishly decorated', 'battered', 'scorched', 'great'],
  'gate_material' : ['wooden', '{iron|ironclad|ironbound}', 'stone'],
  'key' : ['{{#symbol#-shaped|#key_adj#} }key'],
  'key_adj' : ['iron', 'iron', 'brass', 'golden', 'silver', 'copper'],
  'BOSS?-name' : ['#dung# of #boss#'],
  'BOSS?-mention' : ['the #dung_noun# of #boss#'],
  'name' : ['#dung# of {the }#dramaticEntity.capitalizeAll#', '#compound_name#'],
  'mention' : ['the #dung_noun#'],
  'dung' : '{#dung_adj.capitalize# }#dung_noun.capitalize#',
  'dung_adj' : [
    'lost', 'forgotten', 'forsaken', 'hidden', 'secret', 'abandoned', 'ruined', 'frozen', 'sunken',
    'haunted', 'shattered', 'forbidden', 'eternal', 'desert', 'mountain', 'undeground', 'swamp',
    'subterranean', 'underwater', 'twilight', 'forlorn', 'veiled', 'mystery', 'infected', 'lower',
    'upper', 'ancient'
  ],
  'dung_noun' : [
    'BOSS?-lair', 'BOSS?-den', 'BOSS?-sepulcher', 'maze', 'catacombs', 'tomb', 'crypt', 'pyramid',
    'mausoleum', 'hall', 'temple', 'shrine', 'monastery', 'abbey', 'chapel', 'chambers', 'halls',
    'house', 'mansion', 'palace', 'dungeon', 'vault', 'castle', 'stronghold', 'citadel', 'keep',
    'library', 'archive', 'prison', 'labyrinth', 'hold', 'sanctum', 'manor', 'asylum',
    'fort{ress}', 'observatory', 'basilica'
  ],
  'dungName1' : [
    'rage', 'shadow', 'black', 'ice', 'hell', 'way', 'iron', 'storm', 'dark', 'under', 'grim',
    'blood', 'frost', 'night', 'silver', 'scarlet', 'plague', 'ebon', 'dawn', 'death', 'thunder',
    'dusk', 'proud', 'dread', 'blight'
  ],
  'dungName2' : [
    'fire', 'fang', 'rock', 'wing', 'crown', 'moon', 'crest', 'throne', 'heart', 'stone', 'root',
    'blade', 'hill', 'mist', 'sun', 'star', 'spear', 'scar', 'fall', 'wind', 'fist', 'tooth',
    'claw', 'ring', 'skull', 'scar'],
  'compound_name' : '#dungName1.capitalize##dungName2# #dung_noun.capitalize#',
  'boss_adj' : [
    'serpent', 'viper', 'spider', 'raven', 'dread', 'mad', 'shadow', 'dark', 'blood', 'cursed',
    'iron', 'golden', 'diamond', 'jade', 'storm', 'fire', 'ice', 'void', 'purple', 'black', 'red',
    'white', 'vampire', 'undead', 'zombie', 'silent', 'moon', 'immortal', 'shadow', 'fallen',
    'obsidian', 'scarlet', 'great', 'one-eyed', 'lich', 'amber', 'leper', 'grey', 'blind', 'demon',
    'blasphemous'
  ],
  'boss_noun' : [
    'king', 'queen', 'prince', 'emperor', 'lord', 'lady', 'baron', 'magus', 'savant', 'titan',
    'god', 'dragon', 'one', 'master', 'general', 'beast', 'knight', 'witch', 'lady', 'reaper',
    'messiah', 'priest', 'oracle'
  ],
  'bossTitle' : 'the #boss_adj.capitalize# #boss_noun.capitalize#',
  'boss' : ['#bossTitle#', '#bossTitle#', '#demonicName#'],
  'story' : '#storyIntro# #rumorInhabitated#{ #rumorReward#}',
  'storyIntro' : ['BOSS?-#storyBoss#', '#storyAbandoned#', '#storyLocation#'],
  'storyBoss' : [
    '#boss.capitalize# is long {dead|gone}, but people are still {reluctant|afraid} to come close to the #dung_noun#.',
    '{Since|After} the #demise# of #boss# the #dung_noun# has changed hands many times.',
    "Long after #boss#'s #demise# the #dung_noun# remained #deserted#."
  ],
  'demise' : ['demise', 'death', 'fall', 'defeat'],
  'deserted' : ['deserted', 'abandoned', 'uninhabited'],
  'storyAbandoned' : [
    'For #longTime# #mention# #dung_noun.was# considered lost.',
    'For #longTime# #mention# remained {#deserted#|sealed}.',
    'After being destroyed {by #terrible.a# #disaster#|in #terrible.a# battle} #longTime# ago #mention# remained #deserted#.'
  ],
  'storyLocation' : '#mention.capitalize# #dung_noun.is# situated {#locationDeep#|#locationFar#}.',
  'locationDeep' : 'deep in the #location#, {#farFrom#|protected by the {#protection#|#protection# and #protection#}}',
  'locationFar' : [
    'on a {remote|distant|lonely} island', 'high in the #proper.capitalize# {mountains|peaks}',
    'at the center of a {{{mist|fog}-shrouded|tranquil|dark} }lake',
    'on a {forgotten|distant|remote} {shore|coast}', 'at a bend of the river #proper.capitalize#'
  ],
  'longTime' : ['{several }centuries', '{many }years', 'a long time', 'decades', 'a millenium'],
  'recently' : ['recently', 'lately'],
  'currently' : ['currently', 'these days'],
  'terrible' : ['terrible', 'horrible', 'great', 'devastating'],
  'disaster' : ['fire', 'flood', '{magic }storm', 'arcane disaster', 'earthquake'],
  'rumorInhabitated' : ['#rumorBand#', '#rumorFauna#', '#rumorBeast#'],
  'rumorReward' : ['#rumorFlora#', '#rumorArtifact#', '#rumorTreasure#'],
  'rumor' : ['#rumorFauna#', '#rumorFlora#', '#rumorLair#', '#rumorBand#', '#rumorArtifact#', '#rumorTreasure#'],
  'rumorFauna' : "#currently.capitalize# #dung_noun.they# #dung_noun.is# {{badly }infested by|overrun with} #animal.s#{, {which don't care about|indifferent to} the {history|past} of the place}.",
  'rumorFlora' : '#mention.capitalize# #dung_noun.is# {home to|a place of growth of} a {rare|valuable|highly valued} specie of {fungi|flowers|mushrooms|plants|herbs|berries|blooms}.',
  'rumorBeast' : '#recently.capitalize# {#beastAdj.a# #beast# has|0.5?-a pack of #beast.s# have} made its {home|lair} here.',
  'rumorBand' : [
    '#recently.capitalize# #gang.a# of #raider.s# rediscovered #dung_noun.them#{, making #dung_noun.them# their {headquarters|center of operation}}.',
    '#recently.capitalize# #dung_noun.they# #dung_noun.was# squatted by a #gang# of #raider.s#.',
    'Now #dung_noun.they# #dung_noun.is# controlled by #gang.a# of #raider.s#.'
  ],
  'rumorArtifact' : '#rumorsSay# {#demonicName#, a legendary #magic_noun#,|a legendary #magic_noun# #demonicName#} is {still }hidden here.',
  'rumorTreasure' : [
    '#rumorsSay# {countless|untold} treasures of {#treasures#|#treasures# and #treasures#} {are stored|can be found} here.',
    '#rumorsSay# the #dung_noun# #dung_noun.is# rich with {treasures of }{#treasures#|#treasures# and #treasures#}.'
  ],
  'rumorsSay' : ['Rumors say that', 'It is said that', 'Word is that', 'It is rumored that'],
  'treasures' : ['gold{ and jewels}', 'ancient books', 'magical artifacts', '0.1?-maps and charts'],
  'gang' : ['gang', 'party', 'band'],
  'beastAdj' : ['{huge|giant}', '{terryfying|fearsome}', 'undead'],
  'location' : [
    '{dark|enchanted} {forest|wood{s}}', '{high }mountains', '{sun-drenched }dessert',
    '{swamps|{salt }marshes}', '{dense }jungle', '{frozen lands|snowy plains}'
  ],
  'farFrom' : [
    'far from the nearest {town|settlement}', 'away from busy roads', 'in uncharted lands',
    'far from civilization'
  ],
  'protection' : ['harsh weather', 'dangerous local fauna', 'impassable terrain'],
  'proper' : ['#demonicName#', '#dungName1##dungName2#']
};
const DEMONS = [
  'Ahazu', 'Akmenos', 'Akra', 'Akta', 'Amnon', 'Anakis', 'Archimonde', 'Ardranax', 'Argaz',
  'Arjhan', 'Arkeveron', 'Azarax', 'Azgalor', 'Baelmon', 'Balasar', 'Barakas', 'Bharash', 'Biri',
  'Bryseis', 'Criella', 'Daar', 'Damaia', 'Damakos', 'Dimensius', 'Donaar', 'Ekemon', 'Esketra',
  'Farideh', 'Ghesh', 'Hakkar', 'Harann', 'Havilar', 'Heskan', 'Iados', 'Jheri', 'Kairon',
  'Kallista', 'Kazzak', 'Kava', 'Kethtera', 'Korinn', 'Korvaeth', 'Kylastra', 'Kyronax', 'Lerissa',
  'Leucis', 'Magtheridon', 'Makaria', 'Mannoroth', 'Medrash', 'Mehen', 'Melech', 'Mephistrot',
  'Mishann', 'Mordai', 'Morthos', 'Nadarr', 'Nala', 'Nemeia', 'Orianna', 'Oryxus', 'Pandjed',
  'Patrin', 'Pelaios', 'Perra', 'Phelaia', 'Raiann', 'Rhogar', 'Rieta', 'Sevraxis', 'Shahraz',
  'Shamash', 'Shedinn', 'Skamos', 'Sora', 'Supremus', 'Surina', 'Talgath', 'Tarhun', 'Thava',
  'Therai', 'Torinn', 'Tyranna', 'Tyraxis', 'Uadjit', 'Vaskari', 'Xavius', 'Voldranai',
  'Zalvroxos', 'Zmodlor'
];


class Random {
  /**
   * Get random integer in a specified range
   * @param {number} arg0 the minimal value of the range, inclusive.
   * @param {number} arg1 the maximal value of the range, exclusive.
   * @return {number} the generated random integer.
   */
  static int(arg0, arg1) {
    let min, max;
    let hasArg0 = arg0 !== undefined && arg0 !== null;
    let hasArg1 = arg1 !== undefined && arg1 !== null;
    if (hasArg0 && hasArg1) {
      min = arg0;
      max = arg1;
    } else if (hasArg0) {
      min = 0;
      max = arg0;
    } else if (hasArg1) {
      min = 0;
      max = arg1;
    } else {
      min = 0;
      max = Number.MAX_SAFE_INTEGER;
    }
    return Math.floor(Math.random() * (max - min) + min);
  }

  /**
   * Get random float in a specified range
   * @param {number} arg0 the minimal value of the range, inclusive.
   * @param {number} arg1 the maximal value of the range, exclusive.
   * @return {number} the generated random float.
   */
  static float(arg0, arg1) {
    let min, max;
    let hasArg0 = arg0 !== undefined && arg0 !== null;
    let hasArg1 = arg1 !== undefined && arg1 !== null;
    if (hasArg0 && hasArg1) {
      min = arg0;
      max = arg1;
    } else if (hasArg0) {
      min = 0;
      max = arg0;
    } else if (hasArg1) {
      min = 0;
      max = arg1;
    } else {
      min = 0;
      max = 1;
    }
    return Math.random() * (max - min) + min;
  }

  /**
   * Choose random item from the specific array.
   * @param {*[]} items the array of optional items.
   * @param {boolean} remove `true` to remove the picked one from `items`, `false` not to.
   * @return {any} the randomly picked item.
   */
  static choose(items, remove = false) {
    if (items === undefined || items === null || items.length == 0) {
      return undefined;
    }
    let idx = Random.int(items.length);
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
  static maybe(probability) {
    return Math.random() <= probability;
  }

  /**
   * N times random value
   * @param {number} n the count of times
   * @return {number} the generated average random float.
   */
  static times(n=1) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
      sum += Math.random();
    }
    return sum / n;
  }

  /**
   * random value ^ n
   * @param {number} n the pow value
   * @return {number} the generated average random float.
   */
  static pow(n=1) {
    return Math.pow(Random.float(), n);
  }

  /**
   * @param {number} n
   * @return {number} integer
   */
  static log(n) {
    let f = Math.log(n);
    let f0 = f|0;
    return f0 + (Random.maybe(f - f0) ? 1 : 0);
  }
}


class Utils {
  /**
   * @param {string} txt
   * @return {boolean}
   */
  static isPlural(txt) {
    return /[^s]s$/i.test(txt);
  }

  /**
   * Capitalize the specific text. Support Unicode text.
   * @param {string} [first, ...rest] the text to capitalize.
   * @param {string} locale the locale of the text, default is the language of current session.
   * @return {string} the capitalized text.
   */
  static capitalize([first, ...rest], locale = navigator.language) {
    return first.toLocaleUpperCase(locale) + rest.join('');
  }


  static NUM_TEXTS = ['zero', 'one', 'two', 'three', 'four', 'five', 'many'];

  /**
   * @param {number} n
   * @return {string}
   */
  static num2text(n) {
    return n > Utils.NUM_TEXTS.length - 1 ? Utils.NUM_TEXTS[Utils.NUM_TEXTS.length - 1] : Utils.NUM_TEXTS[n];
  }

  /**
   * Randomize an array
   * @param {any[]} ary the array to be shuffled.
   * @return {any[]} the shuffled copy of `ary`.
   */
  static shuffle(ary) {
    let result = [];
    for (let e of ary) {
      result.splice(Random.int(result.length + 1), 0, e);
    }
    return result;
  }

  /**
   * Randomly choose specific count of items from an array.
   * @param {any[]} ary the array to query.
   * @param {number} n the number of items to choose.
   * @return {any[]} the chose items.
   */
  static subset(ary, n) {
    return Utils.shuffle(ary).slice(0, n);
  }

  /**
   * Check whether the array contains the specific item.
   * @param {any[]} ary the array to query.
   * @param {any} val the item to check.
   * @return {boolean} whether the array contains the item.
   */
  static includes(ary, val) {
    let valHasEquals = typeof val === 'object' && val !== null && val.hasOwnProperty('equals');
    return ary.some(item => (valHasEquals && val.equals(item)) || (!valHasEquals && item === val) || false);
  }

  /**
   * Merge two specific arrays and keep the items unique.
   * @param {any[]} ary1 the array to change.
   * @param {any[]} ary2 the array to merge.
   * @param {any[]} the updated array, i.e. `ary1`.
   */
  static addAll(ary1, ary2) {
    ary2.forEach((val) => {
      if (!Utils.includes(ary1, val)) {
        ary1.push(val);
      }
    });
    return ary1;
  }

  /**
   * Remove the specific item from an array.
   * @param {any[]} ary the array to change.
   * @param {any} val the item's value.
   * @return the modified array.
   */
  static arrayRemove(ary, val) {
    let valHasEquals = typeof val === 'object' && val !== null && val.hasOwnProperty('equals');
    for(let i = 0; i < ary.length; i++) {
      if ((valHasEquals && val.equals(ary[i])) || (!valHasEquals && ary[i] === val) || false) {
        ary.splice(i, 1);
        i--;
      }
    }
    return ary;
  }

  /**
   * @param {any[]} ary
   * @param {number[]} weights
   * @return {any}
   */
  static weighted(ary, weights) {
    let z = Random.float(weights.reduce((prev, curr) => prev + curr, 0));
    let acc = 0;
    for (let i = 0; i < ary.length; i++) {
      if (z <= (acc += weights[i])) {
        return ary[i];
      }
    }
    return ary[0];
  }

  /**
   * Convert axis to angle in degrees.
   *
   * @param {number|paper.Point} arg0 x coordinate value of the axis or the axis instance
   * @param {number|undefined} arg1 x coordinate value of the axis
   * @return {number} corresponding angle in degrees.
   */
  static axis2angle(arg0, arg1) {
    let p;
    if (arg1 !== undefined && arg1 !== null) {
      p = new paper.Point(arg0, arg1);
    } else {
      p = arg0;
    }
    if (p.equals(Dot_UP)) {
      return 90;
    }
    if (p.equals(Dot_LEFT)) {
      return 180;
    }
    if (p.equals(Dot_DOWN)) {
      return 270;
    }
    return 0;
  }

  /**
   * @param {number} a
   * @param {number} b
   * @param {number} w
   * @return {number}
   */
  static interpolate(a, b, w) {
    return a + (b - a) * w;
  }

  /**
   * Align the specific value to closed integer.
   * @param {number} val the value to align.
   * @return {number} the closed integer.
   */
  static snapInt(val) {
    let floor = Math.floor(val), ceil = Math.ceil(val);
    let floorError = Math.abs(val - floor), ceilError = Math.abs(val - ceil);
    return floorError <= ceilError ? floor : ceil;
  }
}


class PerlinNoise {
  static permutation = [
    151, 160, 137,  91,  90,  15, 131,  13, 201,  95,  96,  53, 194, 233,   7, 225,
    140,  36, 103,  30,  69, 142,   8,  99,  37, 240,  21,  10,  23, 190,   6, 148,
    247, 120, 234,  75,   0,  26, 197,  62,  94, 252, 219, 203, 117,  35,  11,  32,
     57, 177,  33,  88, 237, 149,  56,  87, 174,  20, 125, 136, 171, 168,  68, 175,
     74, 165,  71, 134, 139,  48,  27, 166,  77, 146, 158, 231,  83, 111, 229, 122,
     60, 211, 133, 230, 220, 105,  92,  41,  55,  46, 245,  40, 244, 102, 143,  54,
     65,  25,  63, 161,   1, 216,  80,  73, 209,  76, 132, 187, 208,  89,  18, 169,
    200, 196, 135, 130, 116, 188, 159,  86, 164, 100, 109, 198, 173, 186,   3,  64,
     52, 217, 226, 250, 124, 123,   5, 202,  38, 147, 118, 126, 255,  82,  85, 212,
    207, 206,  59, 227,  47,  16,  58,  17, 182, 189,  28,  42, 223, 183, 170, 213,
    119, 248, 152,   2,  44, 154, 163,  70, 221, 153, 101, 155, 167,  43, 172,   9,
    129,  22,  39, 253,  19,  98, 108, 110,  79, 113, 224, 232, 178, 185, 112, 104,
    218, 246,  97, 228, 251,  34, 242, 193, 238, 210, 144,  12, 191, 179, 162, 241,
     81,  51, 145, 235, 249,  14, 239, 107,  49, 192, 214,  31, 181, 199, 106, 157,
    184,  84, 204, 176, 115, 121,  50,  45, 127,   4, 150, 254, 138, 236, 205,  93,
    222, 114,  67,  29,  24,  72, 243, 141, 128, 195,  78,  66, 215,  61, 156, 180
  ];
  static ease = null;

  /**
   * @param {number} seed
   * @return {PerlinNoise}
   */
  constructor() {
    let idx = Random.int(PerlinNoise.permutation.length);
    this.p = PerlinNoise.permutation.slice(idx).concat(PerlinNoise.permutation.slice(0, idx));
    this.p = this.p.concat(this.p);
    if (PerlinNoise.ease == null) {
      let t, data = [];
      for (let i = 0; i < 4096; i++) {
        t = i / 4096;
        data.push(t * t * t * (t * (6 * t - 15) + 10));
      }
      PerlinNoise.ease = data;
    }
  }

  /**
   * @param {number} hash
   * @param {number} x
   * @param {number} y
   * @return {number}
   */
  dot(hash, x, y) {
    switch (hash & 3) {
      case 0:
        return x + y;
      case 1:
        return x - y;
      case 2:
        return -x + y;
      case 3:
        return -x - y;
      default:
        return 0;
    }
  }

  /**
   * @param {number} x
   * @param {number} y
   * @param {number} gridSize
   * @return {number}
   */
  noise(x, y, gridSize=1) {
    x *= gridSize;
    y *= gridSize;
    let j0 = x | 0;
    let j1 = j0 + 1;
    let fx = x - j0;
    let wx = PerlinNoise.ease[fx * 4096 | 0];
    let i0 = y | 0;
    let i1 = i0 + 1;
    let fy = y - i0;
    let wy = PerlinNoise.ease[fy * 4096 | 0];
    let aa = this.p[this.p[j0] + i0];
    let ab = this.p[this.p[j1] + i0];
    let ba = this.p[this.p[j0] + i1];
    let bb = this.p[this.p[j1] + i1];
    let v0 = this.dot(aa, fx, fy);
    let x1 = fx - 1;
    let v1 = this.dot(ab, x1, fy);
    let val0 = Utils.interpolate(v0, v1, wx);
    let y1 = fy - 1;
    let v01 = this.dot(ba, fx, y1);
    let x2 = fx - 1;
    let y2 = fy - 1;
    let v11 = this.dot(bb, x2, y2);
    let val1 = Utils.interpolate(v01, v11, wx);
    return Utils.interpolate(val0, val1, wy);
  }

  /**
   * @param {number} width
   * @param {number} height
   * @param {number} gridSize
   * @param {paper.Point} offset
   * @return {number[][]}
   */
  noiseMap(width, height, gridSize=1, offset=null) {
    let grid = new Array(height);
    let xStep = gridSize / width; // TODO: whether the result is a float?
    let yStep = gridSize / width; // TODO: whether the result is a float?
    let ofsx = offset != null ? offset.x : 0;
    let ofsy = offset != null ? offset.y : 0;
    let y = ofsy;
    for (let h = 0; h < height; h++) {
      let x = ofsx;
      grid[h] = new Array(width);
      for (let w = 0; w < width; w++) {
        grid[h][w] = this.noise(x, y);
        x += xStep;
      }
      y += yStep;
    }
    return grid;
  }

  /**
   * @param {number} x
   * @param {number} y
   * @param {number} octaves
   * @param {number} gridSize
   * @param {number} persistance
   * @return {number}
   */
  noiseHigh(x, y, octaves, gridSize=1, persistance=0.5) {
    let result = this.noise(x, y, gridSize);
    let amplitude = persistance;
    for (let i = 1; i < octaves; i++) {
      gridSize *= 2;
      result += this.noise(x, y, gridSize) * amplitude;
      amplitude *= persistance;
    }
    return result;
  }

  /**
   * @param {number} width
   * @param {number} height
   * @param {number} octaves
   * @param {number} gridSize
   * @param {number} persistance
   * @param {paper.Point[]} offsets
   * @return {number[][]}
   */
  noiseMapHigh(width, height, octaves, gridSize=1, persistance=0.5, offsets=null) {
    let result = this.noiseMap(width, height, gridSize, offsets != null ? offsets[0] : null);
    let amplitude = persistance;
    for (let i = 1; i < octaves; i++) {
      gridSize *= 2;
      let o = this.noiseMap(width, height, gridSize, offsets != null ? offsets[i] : null);
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          result[y][x] += o[y][x] * amplitude;
        }
      }
      amplitude *= persistance;
    }
    return result;
  }
}


const NLP_Markov_HISTORY = 2;
const NLP_Markov_EOW = '';
class NLP_Markov {
  /**
   * Construct a NLP_Markov instance.
   * @param {string[]} words
   * @return {NLP_Markov} this NLP_Markov instance.
   */
  constructor(words) {
    this.phonemes = NLP_Syllables_VOWELS.concat(NLP_Syllables_CONSONANTS);
    this.phonemes.sort((s1, s2) => s2.length - s1.length);
    this.map = {};
    this.source = words;
    for (let word of words) {
      if (word === '') {
        continue;
      }

      let sylls = this.split(word.toLowerCase());
      let prev = [];
      for (let syll of sylls) {
        let prevStr = prev.join('');
        if (this.map.hasOwnProperty(prevStr)) {
          this.map[prevStr].push(syll);
        } else {
          this.map[prevStr] = [syll];
        }
        prev.push(syll);
        if (prev.length > 2) {
          prev.shift();
        }
      }
      let prevStr = prev.join('');
      if (this.map.hasOwnProperty(prevStr)) {
        this.map[prevStr].push('');
      } else {
        this.map[prevStr] = [''];
      }
    }
  }

  /**
   * @param {string} word
   * @return {string[]}
   */
  split(word) {
    let result = [];
    while (word !== '') {
      let phonemeFound = false;
      for (let ph of this.phonemes) {
        if (word.endsWith(ph)) {
          result.unshift(ph);
          word = word.substring(0, word.length - ph.length);
          phonemeFound = true;
          break;
        }
      }
      if (!phonemeFound) {
        word = word.substring(0, word.length - 1);
      }
    }
    return result;
  }

  /**
   * @param {number} maxSylls
   * @returns {string}
   */
  generate(maxSylls=-1) {
    while (true) {
      let result = '';
      let hist = [];
      let next = Random.choose(this.map['']);
      while (next !== '') {
        result += next;
        hist.push(next);
        if (hist.length > 2) {
          hist.shift();
        }
        next = Random.choose(this.map[hist.join('')]);
      }
      if (maxSylls == -1 || NLP_Syllables.splitWord(result).length <= maxSylls) {
        return result;
      }
    }
  }
}


const NLP_Syllables_VOWELS = [
  'you', 'ye', 'yo', 'ya', 'ie', 'ee', 'oo', 'ea', 'ei', 'ey', 'oi', 'ou', 'ai', 'ay', 'au', 'oi',
  'oy', 'ue', 'ua', 'u', 'o', 'a', 'e', 'i', 'y'
];
const NLP_Syllables_CONSONANTS = [
  'wh', 'th', 'ck', 'ch', 'sh', 'gh', 'ph', 'qu', 'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm',
  'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'
];
class NLP_Syllables {
  /**
   * @param {string} word
   * @return {string[]}
   */
  static splitWord(word) {
    let result = [];
    while (word.length > 0) {
      let syll = result.length == 0 && word.endsWith('e') ? NLP_Syllables.pinch(word.substring(0, word.length - 1)) + 'e' : NLP_Syllables.pinch(word);
      result.unshift(syll);
      word = word.substring(0, word.length - syll.length);
      if (NLP_Syllables_VOWELS.every(v => !word.includes(v))) {
        result[0] = word + result[0];
        word = '';
      }
    }
    return result;
  }

  /**
   * @param {string} word
   * @return {string}
   */
  static pinch(word) {
    let pos = word.length - 1;
    while (pos >= 0 && !NLP_Syllables_VOWELS.includes(word.charAt(pos))) {
      --pos;
    }
    if (pos < 0) {
      return word;
    }

    for (let v of NLP_Syllables_VOWELS) {
      if (word.substring(pos - (v.length - 1), pos + 1) === v) {
        pos -= v.length;
        break;
      }
    }
    if (pos < 0) {
      return word;
    }

    for (let c of NLP_Syllables_CONSONANTS) {
      if (word.substring(pos - (c.length - 1), pos + 1) === c) {
        return word.substring(pos - (c.length - 1));
      }
    }
    return word.substring(pos + 1);
  }
}


class Story {
  static demonic = new NLP_Markov(DEMONS);

  /**
   * Construct a Story instance.
   * @param {MapGenerator} generator
   * @return {Story} this Story instance.
   */
  constructor(generator) {
    this.grammar = Story.createGrammar();
    this.name = this.grammar.flatten('#name#');

    let tags = Tags.deriveTags(this.name);
    generator.tags.push(...tags);
    if (Random.maybe(0.5)) {
      generator.tags.push('multi-level');
    }
    generator.tags.forEach(t => this.grammar.setFlag(t));

    this.hook = this.grammar.flatten('#story#');
  }

  static createGrammar() {
    let grammar = tracery.createGrammar(STORY_SPELL_BOOK);
    grammar.modifiers.caps = function(str) {
      return str.toUpperCase();
    };
    grammar.modifiers.they = function(str) {
      return Utils.isPlural(str) ? 'they' : 'it';
    };
    grammar.modifiers.them = function(str) {
      return Utils.isPlural(str) ? 'them' : 'it';
    };
    grammar.modifiers.is = function(str) {
      return Utils.isPlural(str) ? 'are' : 'is';
    };
    grammar.modifiers.was = function(str) {
      return Utils.isPlural(str) ? 'were' : 'was';
    };

    grammar.symbols.demonicName = grammar.addOrGetSymbol('demonicName');
    grammar.symbols.demonicName.grammar = grammar;
    grammar.symbols.demonicName.key = 'demonicName';
    grammar.symbols.demonicName.loadFrom('');
    grammar.symbols.demonicName.currentRules.rules[0].getParsed = function() {
      if (Random.maybe(0.25)) {
        this.raw = Utils.capitalize(Story.demonic.generate(3)) + '-' + Utils.capitalize(Story.demonic.generate(3));
      } else {
        this.raw = Utils.capitalize(Story.demonic.generate(4));
      }
      this.sections = [this.raw];
      return this.sections;
    };

    grammar.flags = [];
    grammar.setFlag = function(flag) {
      flag = flag.toUpperCase();
      if (!this.flags.includes(flag)) {
        this.flags.push(flag);
      }
    };
    grammar.fix = function(key) {
      let value = this.flatten('#' + key + '#');
      this.pushRules(key, [value]);
      return value;
    };
    if (Random.maybe(2/3)) {
      grammar.setFlag('boss');
      grammar.fix('boss');
    }
    grammar.fix('dung_noun');
    grammar.fix('dung');
    grammar.fix('raider');
    grammar.fix('native');
    grammar.fix('symbol');
    grammar.fix('location');
    return grammar;
  }

  /**
   * @param {string} flag
   */
  setFlag(flag) {
    this.grammar.setFlag(flag);
  }

  /**
   * @param {Room} room
   * @param {Door} door
   * @return {string}
   */
  dir2text(room, door) {
    let dir = room.equals(door.from) ? door.dir : new paper.Point(-door.dir.x, -door.dir.y);
    if (Dot_UP.equals(dir)) {
      return this.grammar.flatten('#north#');
    }
    if (Dot_DOWN.equals(dir)) {
      return this.grammar.flatten('#south#');
    }
    if (Dot_LEFT.equals(dir)) {
      return this.grammar.flatten('#west#');
    }
    return this.grammar.flatten('#east#');
  }

  /**
   * @param {any} planner
   */
  initKeys(planner) {
    let key = this.grammar.flatten('#key.a#');
    this.keys = new Array(planner.nKeys).fill(key);
  }

  /**
   * @param {any} planner
   * @param {Room} room
   * @return {string}
   */
  getRoomDesc(planner, room) {
    this.grammar.pushRules('room', [room.word()]);
    let desc = [];
    if (room.event) {
      desc.push(this.getEventText(planner, room));
    }
    if (room.gate) {
      desc.push(this.getGateText(planner, room));
    }
    if (room.loot) {
      desc.push(this.getLootText(planner, room));
    }
    if (room.key) {
      desc.push(this.getKeyText(planner, room));
    }
    this.grammar.popRules('room');
    return desc.length > 0 ? desc.join(' ') : null;
  }

  /**
   * @param {any} planner
   * @param {Room} room
   * @return {string}
   */
  getGateText(planner, room) {
    let gate = undefined;
    for (let v of room.getExits()) {
      if (v.type == Door.SPECIAL) {
        gate = v;
        break;
      }
    }
    let dir = this.dir2text(room, gate);
    this.grammar.pushRules('dir', [dir]);
    this.grammar.pushRules('num', [Utils.num2text(planner.nKeys)]);
    let key;
    switch (planner.nKeys) {
      case 0:
        key = '#gate_nokey#';
        break;
      case 1:
        key = '#gate_onekey#';
        break;
      default:
        key = '#gate_manykeys#';
    }
    let text = this.grammar.flatten(key);
    this.grammar.popRules('num');
    this.grammar.popRules('dir');
    return text;
  }

  /**
   * @param {any} planner
   * @param {Room} room
   * @return {string}
   */
  getKeyText(planner, room) {
    let key = this.keys.pop();
    this.grammar.pushRules('treasure', [key]);
    this.grammar.pushRules('special_item', [key]);
    let text = this.grammar.flatten('#loot#');
    this.grammar.popRules('special_item');
    this.grammar.popRules('treasure');
    return text;
  }

  /**
   * @param {any} planner
   * @param {Room} room
   * @return {string}
   */
  getLootText(planner, room) {
    return this.grammar.flatten('#loot#');
  }

  /**
   * @param {any} planner
   * @param {Room} room
   * @return {string}
   */
  getEventText(planner, room) {
    return this.grammar.flatten('#event#');
  }
}


class Tags {
  /**
   * @param {string} text
   * @return {string[]}
   */
  static deriveTags(text) {
    let result = [];
    for (let word of text.split(' ')) {
      result.push(...TAG_ANCHORS[word.toLowerCase()]||[]);
    }
    return result;
  }

  /**
   * @return {string[]}
   */
  static getPublic() {
    return TAG_INFOS.keys();
  }

  /**
   * @param {string} tag
   * @return {string}
   */
  static getInfo(tag) {
    return TAG_INFOS[tag];
  }

  /**
   * @param {string[]} tags
   * @param {string} another
   */
  static resolve(tags, another) {
    for (let exp of TAG_EXCEPTIONS) {
      if (exp.includes(another)) {
        exp = exp.filter(t => another !== t);
        for (let e of exp) {
          let idx = tags.indexOf(e);
          if (idx != -1) {
            tags.splice(idx, 1);
          }
        }
      }
    }
    if (another !== null) {
      tags.push(another);
    }
  }
}


class Deck {
  /**
   * Constructor a shuffling machine
   * @param {number[]}} cards the cards to be shuffled
   * @return {Deck} the shuffling machine instance
   */
  constructor(cards) {
    this.cards = Utils.shuffle(cards);
    this.pile = [];
  }

  /**
   * Pick a card from the shuffling machine.
   * @return {any} the picked card.
   */
  pick() {
    if (this.cards.length == 0) {
      if (this.pile.length == 0) {
        return null;
      }
      this.cards = Utils.shuffle(this.pile);
      this.pile = [];
    }
    let card = this.cards.pop();
    this.pile.push(card);
    return card;
  }
}


class Poly {
  /**
   * @param {paper.Point[]} poly
   * @param {number|paper.Point} arg1
   * @param {[number]} arg2
   */
  static translate(poly, arg1, arg2) {
    let dp, type1 = typeof arg1;
    if (type1 === 'object') {
      dp = arg1;
    } else {
      dp = new paper.Point(arg1, arg2);
    }
    return poly.map(v => v.add(dp));
  }

  /**
   * @param {paper.Point[]} poly
   * @param {number|paper.Point} arg1
   * @param {[number]} arg2
   */
  static asTranslate(poly, arg1, arg2) {
    let dx, dy, type1 = typeof arg1;
    if (type1 === 'object') {
      dx = arg1.x;
      dy = arg1.y;
    } else {
      dx = arg1;
      dy = arg2;
    }
    for (let i = 0; i < poly.length; i++) {
      poly[i].x += dx;
      poly[i].y += dy;
    }
  }

  /**
   * @param {paper.Point[]} poly
   * @param {number} s
   */
  static scale(poly, s) {
    return poly.map(v => v.multiply(s));
  }

  /**
   * @param {paper.Point[]} poly
   * @param {number} s
   */
  static asScale(poly, s) {
    for (let i = 0; i < poly.length; i++) {
      poly[i].x *= s;
      poly[i].y *= s;
    }
  }

  /**
   * @param {paper.Point[]} poly
   * @param {number} sin
   * @param {number} cos
   */
  static rotateYX(poly, sin, cos) {
    // TODO: convert (sin, cos) to angle, and use Point.rotate():
    // 1. compare (sin, cos) with Dot_* to get n * 90;
    // 2. otherwise return new paper.Point(sin, cos).angle
    return poly.map(v => new paper.Point(v.x * cos - v.y * sin, v.x * sin + v.y * cos));
  }

  /**
   * @param {paper.Point[]} poly
   * @param {number} sin
   * @param {number} cos
   */
  static asRotateYX(poly, sin, cos) {
    // TODO: convert (sin, cos) to angle, and use Point.rotate():
    // 1. compare (sin, cos) with Dot_* to get n * 90;
    // 2. otherwise return new paper.Point(sin, cos).angle
    for (let i = 0; i < poly.length; i++) {
      poly[i].x = poly[i].x * cos - poly[i].y * sin;
      poly[i].y = poly[i].x * sin + poly[i].y * cos;
    }
  }

  /**
   * Create a rectangle poly.
   * @param {number} width
   * @param {number} height
   * @return {paper.Point[]} the created poly.
   */
  static rect(width, height) { // TODO: directly return a Path.
    let w2 = width / 2, h2 = height / 2;
    return [
      new paper.Point(-w2, -h2),
      new paper.Point(w2, -h2),
      new paper.Point(w2, h2),
      new paper.Point(-w2, h2)
    ];
  }

  /**
   * Creates a regular polygon poly.
   * @param {number} sides the number of sides of the polygon
   * @param {number} radius the radius of the polygon
   * @return {paper.Point[]} the created poly.
   */
  static regular(sides, radius) { // TODO: directly return a Path.
    let p = new paper.Path.RegularPolygon({
      center: [0, 0],
      sides: sides,
      radius: radius,
      visible: false
    });
    let poly = p.segments.map(s => s.point);
    p.remove();
    return poly;
  }

  /**
   * @param {paper.Point[]} points
   * @param {boolean} closed
   * @param {number} order
   * @param {paper.Point[]} exclude
   * @return {paper.Point[]}
   */
  static chaikinRender(points, closed, order=1, exclude=[]) {
    for (let i = 0; i < order; i++) {
      let result = [];
      let n = points.length;
      let p;
      for (let j = 1; j < n - 1; j++) {
        p = points[j];
        if (Utils.includes(exclude, p)) {
          result.push(p);
        } else {
          result.push(Poly.lerp(p, points[j - 1], 0.25));
          result.push(Poly.lerp(p, points[j + 1], 0.25));
        }
      }
      if (closed) {
        p = points[n - 1];
        if (Utils.includes(exclude, p)) {
          result.push(p);
        } else {
          result.push(Poly.lerp(p, points[n - 2], 0.25));
          result.push(Poly.lerp(p, points[0], 0.25));
        }
        p = points[0];
        if (Utils.includes(exclude, p)) {
          result.push(p);
        } else {
          result.push(Poly.lerp(p, points[n - 1], 0.25));
          result.push(Poly.lerp(p, points[1], 0.25));
        }
      } else {
        result.unshift(points[0]);
        result.push(points[n - 1]);
      }
      points = result;
    }
    return points;
  }

  /**
   * TODO: 看起来是在找两根线的交叉点，待确认。
   * @param {paper.Point} p1
   * @param {paper.Point} d1
   * @param {paper.Point} p2
   * @param {paper.Point} d2
   * @return {paper.Point}
   */
  static intersectLines(p1, d1, p2, d2) {
    if (d1.isCollinear(d2)) {
      return null;
    }
    let d = d1.cross(d2);
    let t2 = (d1.y * (p2.x - p1.x) - d1.x * (p2.y - p1.y)) / d;
    let t1 = Math.abs(d1.x) > Math.abs(d1.y) ? (p2.x - p1.x + d2.x * t2) / d1.x : (p2.y - p1.y + d2.y * t2) / d1.y;
    return new paper.Point(t1, t2);
  }

  /**
   * @param {paper.Point} p1
   * @param {paper.Point} p2
   * @param {number} ratio
   * @return {paper.Point}
   */
  static lerp(p1, p2, ratio=0.5) {
    return new paper.Point(
      (1 - ratio) * p1.x + ratio * p2.x,
      (1 - ratio) * p1.y + ratio * p2.y
    );
  }

  /**
   * @param {paper.Point[]} poly
   * @param {number} step
   * @return {paper.Point[]}
   */
  static resample(poly, step) {
    if (poly.length < 3) {
      return poly;
    }

    let len = 0;
    let res = [poly[0]];
    let ofs = step;
    let seg = 1;
    let p0 = poly[0];
    let p1 = poly[1];
    let segLen = p0.getDistance(p1);
    while (true) {
      if (len + segLen > ofs) {
        res.push(Poly.lerp(p0, p1, (ofs - len) / segLen));
        ofs += step;
      } else {
        if (++seg >= poly.length) {
          break;
        }
        len += segLen;
        p0 = p1;
        p1 = poly[seg];
        segLen = p0.getDistance(p1);
      }
    }
    let end = poly[poly.length - 1];
    if (res[res.length - 1].getDistance(end) > 0) {
      res.push(end);
    } else {
      res[res.length - 1] = end;
    }
    return res;
  }

  /**
   * @param {paper.Point[]} poly
   * @return {number}
   */
  static pathLength(poly) {
    let l = 0;
    for (let i = 1; i < poly.length; i++) {
      l += poly[i - 1].getDistance(poly[i]);
    }
    return l;
  };

  /**
   * @param {paper.Path} path
   * @param {number} d the expanding distance in every dimentions.
   * @return {paper.Path} the expanded clone path.
   */
  static expandPath(path, d) {
    path.translate(new paper.Point(-d, -d));
    d *= 2;
    return path.scale((path.bounds.width + d)/path.bounds.width, (path.bounds.height + d)/path.bounds.height);
  }

  /**
   * @param {paper.Path} path
   * @return {paper.Point}
   */
  static pickPoint(path) {
    let p = new paper.Point();
    let bounds = path.bounds;
    while (true) {
      p.x = Random.int(bounds.left, bounds.right);
      p.y = Random.int(bounds.top, bounds.bottom);
      if (path.contains(p)) {
        return p;
      }
    }
  }
}


class PathCollection { // <= com_watabou_dungeon_utils_PoissonDiskShapeCollection
  /**
   * @param {paper.Path[]} shapes
   * @return {PathCollection}
   */
  constructor(shapes) {
    this.shapes = shapes;
  }

  /**
   * @return {paper.Rectangle}
   */
  getBounds() {
    let bounds = new paper.Rectangle();
    this.shapes.forEach(shape => bounds = bounds.unite(shape));
    return bounds;
  }

  /**
   * @return {paper.Point}
   */
  pickPoint() {
    return Poly.pickPoint(Random.choose(this.shapes));
  }

  /**
   * @param {paper.Point} p
   * @returns {boolean}
   */
  contains(p) {
    return this.shapes.some(shape => shape.contains(p));
  }
}


class PoissonDisk {
  /**
   * @param {number} r
   * @param {any} shape
   * @return {PoissonDisk}
   */
  constructor(r, shape) {
    this.r = r;
    this.shape = shape;
    this.points = [];
    this.queue = [];
    this.cellSize = r / Math.sqrt(2);
    if (shape != null) {
      this.init(shape.getBounds());
      this.emit(shape.pickPoint());
    }
  }

  /**
   * @param {paper.Rectangle} bounds
   */
  init(bounds) {
    this.xmin = bounds.left;
    this.ymin = bounds.top;
    this.xmax = bounds.right;
    this.ymax = bounds.bottom;
    this.gridWidth = Math.ceil((this.xmax - this.xmin) / this.cellSize);
    this.gridHeight = Math.ceil((this.ymax - this.ymin) / this.cellSize);
    this.grid = new Array(this.gridWidth * this.gridHeight).fill(null);
  }

  /**
   * @return {boolean}
   */
  step() {
    if (this.queue.length == 0) {
      return false;
    }
    let p = Random.choose(this.queue);
    let emitted = false;
    for (let i = 0; i < 30; i++) {
      let q = new paper.Point({length: Random.float(this.r, 2 * this.r), angle: Random.float(360)}).add(p);
      if (this.shape.contains(q) && this.contains(q)) {
        emitted = true;
        this.emit(q);
      }
    }
    if (!emitted) {
      Utils.arrayRemove(this.queue, p);
    }
    return this.queue.length > 0;
  }

  /**
   * @param {paper.Point} p
   * @returns {boolean}
   */
  contains(p) {
    let x = Math.floor((p.x - this.xmin) / this.cellSize);
    let y = Math.floor((p.y - this.ymin) / this.cellSize);
    if (x < 0 || y < 0 || x >= this.gridWidth || y >= this.gridHeight) {
      return false;
    }
    let n = 2;
    let left = Math.max(x - n, 0);
    let top = Math.max(y - n, 0);
    let right = Math.min(x + n + 1, this.gridWidth);
    let bottom = Math.min(y + n + 1, this.gridHeight);
    for (y = top; y < bottom; y++) {
      let o = y * this.gridWidth;
      for (x = left; x < right; x++) {
        let q = this.grid[o + x];
        if (q != null && p.getDistance(q) < this.r) {
          return false;
        }
      }
    }
    return true;
  }

  /**
   * @param {paper.Point} p
   */
  emit(p) {
    this.points.push(p);
    this.queue.push(p);
    this.grid[Math.floor((p.y - this.ymin) / this.cellSize) * this.gridWidth + Math.floor((p.x - this.xmin) / this.cellSize)] = p;
  }

  /**
   * @param {paper.Point} p
   * @returns {paper.Point[]}
   */
  getNeighbours(p) {
    let res = [];
    let n = 2;
    let x = Math.floor((p.x - this.xmin) / this.cellSize);
    let y = Math.floor((p.y - this.ymin) / this.cellSize);
    let left = Math.max(x - n, 0);
    let top = Math.max(y - n, 0);
    let right = Math.min(x + n + 1, this.gridWidth);
    let bottom = Math.min(y + n + 1, this.gridHeight);
    for (y = top; y < bottom; y++) {
      let o = y * this.gridWidth;
      for (x = left; x < right; x++) {
        let q = this.grid[o + x];
        if (q != null) {
          res.push(q);
        }
      }
    }
    return res;
  }
}


class Shading {
  /**
   * @param {paper.Path[]} shapes
   * @param {Map} config
   */
  static getPoisson(shapes, config) {
    let shape = new PathCollection(shapes);
    let pd = new PoissonDisk(config.style.hatchingSize, shape);
    while (pd.step()) {}
    return pd;
  };

  /**
   * @param {paper.Layer} layer
   * @param {Map} config
   * @param {paper.Point} p1
   * @param {paper.Point} p2
   */
  static stroke(layer, config, p1, p2) {
    if (config.brushShadingStrokes) {
      let v = p2.subtract(p1).rotate(90).normalize(config.style.strokeHatching * 1.5);
      let po = Poly.lerp(p1, p2, 0.3).add(v);
      let pp = Poly.lerp(p1, p2, 0.6).add(v);
      layer.addChild(new paper.Path({
        segments: Poly.chaikinRender([p1, po, pp, p2], false, 1),
        fillColor: config.style.colorInk,
        closed: true
      }));
    } else {
      layer.addChild(new paper.Path.Line({
        from: p1,
        to: p2,
        strokeWidth: config.style.strokeHatching,
        strokeColor: config.style.colorInk
      }));
    }
  }

  /**
   * @param {paper.Layer} layer
   * @param {paper.Path[]} shapes
   * @param {Map} config
   */
  static draw(layer, shapes, config) {
    if (config.style.hatchingStyle == 'Stonework') {
      Shading.doStonework(layer, shapes, config);
    } else if (config.style.hatchingStyle == 'Bricks') {
      Shading.doBricks(layer, shapes, config);
    } else {
      shapes = shapes.map(shape => Poly.expandPath(shape, config.style.hatchingDistance));
      if (!config.blackAndWhite && config.style.colorShading != config.style.colorPaper) {
        Shading.doShading(layer, shapes, config);
      }
      if (config.style.hatchingStyle == 'Default') {
        let d = -config.style.hatchingDistance - config.style.hatchingSize * 2 / 3;
        let excludes = shapes.map(shape => Poly.expandPath(shape.clone(), d));
        if (config.preciseShadingStrokes) {
          Shading.doImprovedHatching(layer, shapes, config, excludes);
        } else {
          Shading.doHatching(layer, shapes, config, excludes);
        }
        excludes.forEach(e => e.remove());
      }
    }
    shapes.forEach(s => s.remove());
  }

  /**
   * @param {paper.Layer} layer
   * @param {paper.Path[]} shapes
   * @param {Map} config
   * @param {paper.Path[]} excludes
   */
  static doHatching(layer, shapes, config, excludes) {
    let pd = Shading.getPoisson(shapes, config);
    let points = pd.points;
    let strokeWidth = config.style.hatchingStrokes;
    let strokeHalfWidth = (strokeWidth - 1) / 2;
    for (let point of points) {
      if (excludes.some(shape => shape.contains(point))) {
        continue;
      }
      let neighbours = pd.getNeighbours(point);
      let c = neighbours.reduce((pre, cur) => {
        let d1 = pre.equals(point) ? Infinity : pre.getDistance(point);
        let d2 = cur.equals(point) ? Infinity : cur.getDistance(point);
        return d1 > d2 ? cur : pre;
      });
      let a = point.subtract(c).angle;
      if (a > 0) {
        a += 60;
      }
      let v = new paper.Point({length: point.getDistance(c) / 2, angle: a});
      let p1 = point.subtract(v);
      let p2 = point.add(v);
      v = v.rotate(90);
      for (let i = 0; i < strokeWidth; i++) {
        let o = v.multiply((i - strokeHalfWidth) / strokeHalfWidth);
        Shading.stroke(layer, config, p1.add(o), p2.add(o));
      }
    }
  }

  /**
   * @param {paper.Layer} layer
   * @param {paper.Path[]} shapes
   * @param {Map} config
   * @param {paper.Path[]} excludes
   */
  static doImprovedHatching(layer, shapes, config, excludes) {
    let pd = Shading.getPoisson(shapes, config);
    let points = pd.points;
    let strokeWidth = config.style.hatchingStrokes;
    let strokeHalfWidth = (strokeWidth - 1) / 2;
    let clusters = new Map();
    for (let point of points) {
      if (excludes.some(shape => shape.contains(point))) {
        continue;
      }
      let strokes = [];
      clusters.set(point, strokes);
      let neighbours = pd.getNeighbours(point);
      let c = neighbours.reduce((pre, cur) => {
        let d1 = pre.equals(point) ? Infinity : pre.getDistance(point);
        let d2 = cur.equals(point) ? Infinity : cur.getDistance(point);
        return d1 > d2 ? cur : pre;
      });
      let a = point.subtract(c).angle;
      if (a > 0) {
        a += 60;
      }
      let dir = new paper.Point({length: config.style.hatchingSize / 2, angle: a});
      for (let i = 0; i < strokeWidth; i++) {
        let rate = (i - strokeHalfWidth) / strokeHalfWidth;
        let v0 = dir.rotate(90).multiply(rate).add(point);
        let ends = [];
        let d0 = dir.negate();
        let minLen = 1.5;
        for (let n of neighbours) {
          let segs = clusters.get(n);
          if (segs != null) {
            for (let seg of segs) {
              let p = Poly.intersectLines(v0, d0, seg[0], seg[1].subtract(seg[0]));
              if (p != null && p.x > 0 && p.x < minLen && p.y >= 0 && p.y <= 1) {
                minLen = p.x;
              }
            }
          }
        }
        ends.push(v0.add(d0.multiply(minLen)));

        minLen = 1.5;
        for (let n of neighbours) {
          let segs = clusters.get(n);
          if (segs != null) {
            for (let seg of segs) {
              let p = Poly.intersectLines(v0, dir, seg[0], seg[1].subtract(seg[0]));
              if (p != null && p.x > 0 && p.x < minLen && p.y >= 0 && p.y <= 1) {
                minLen = p.x;
              }
            }
          }
        }
        ends.push(v0.add(dir.multiply(minLen)));

        strokes.push(ends);
        Shading.stroke(layer, ends[0], ends[1]);
      }
    }
  }

  /**
   * @param {paper.Layer} layer
   * @param {paper.Path[]} shapes
   * @param {Map} config
   */
  static doShading(layer, shapes, config) {
    let strokeColor = new paper.Color(config.style.colorShading);
    strokeColor.alpha = 0.4;
    for (let shape of shapes) {
      if ((shape instanceof paper.Path.Rectangle)) {
        layer.addChild(new paper.Path.Rectangle({
          point: shape.point,
          size: shape.size,
          radius: config.style.hatchingDistance * 2,
          fillColor: config.style.colorShading,
          strokeWidth: config.style.strokeThick,
          strokeColor: strokeColor,
        }));
      } else {
        layer.addChild(new paper.Path.Circle({
          center: shape.center,
          radius: config.style.hatchingDistance * 2,
          fillColor: config.style.colorShading,
          strokeWidth: config.style.strokeThick,
          strokeColor: strokeColor,
        }));
      }
    }
  }

  /**
   * @param {paper.Layer} layer
   * @param {paper.Path[]} shapes
   * @param {Map} config
   */
  static doStonework(layer, shapes, config) {
    let fillColor = config.blackAndWhite ? config.style.colorPaper : config.style.colorShading;
    let overlapping = config.style.hatchingStrokes > 2;
    for (let shape of shapes) {
      if (shape instanceof paper.Path.Rectangle) {
        let rect = shape.bounds;
        let stonework = [];
        let n = Math.ceil(rect.width / config.style.hatchingSize);
        for (let i = 0; i < n; i++) {
          stonework.push({
            x: rect.left + rect.width * i / n,
            y: rect.top,
            hor: false
          });
        }
        for (let i = 0; i < n; i++) {
          stonework.push({
            x: rect.left + rect.width * (1 - i / n),
            y: rect.bottom,
            hor: false
          });
        }
        n = Math.ceil(rect.height / config.style.hatchingSize);
        for (let i = 0; i < n; i++) {
          stonework.push({
            x: right,
            y: rect.top + rect.height * i / n,
            hor: true
          });
        }
        for (let i = 0; i < n; i++) {
          stonework.push({
            x: rect.left,
            y: rect.top + rect.height * (1 - i / n),
            hor: true
          });
        }
        if (overlapping) {
          stonework = Utils.shuffle(stonework);
        }
        for (let stone of stonework) {
          let width = config.style.hatchingSize * (overlapping ? 1 + Math.abs(Random.times(4) * 2 - 1) : 1);
          let height = config.style.hatchingDistance * Random.times(3) * 2;
          let poly = stone.hor ? Poly.rect(height, width) : Poly.rect(width, height);
          Poly.asTranslate(poly, stone);
          layer.addChild(new paper.Path({
            segments: poly,
            strokeWidth: config.style.strokeNormal,
            strokeColor: config.style.colorInk,
            fillColor: fillColor,
            closed: true
          }));
        }
      } else {
        let circle = shape.bounds;

        /*
         * 这段算法是计算出一个比path稍大（一个像素？）的边框，还有两处相似的地方，可以用下面的正则表达式搜索：
         * Math.sqrt.*?\+\s*1
         *
         * TODO: 可以优化成直接找放大后的path的尺寸+1像素的边框。
         */
        let r = circle.bounds.width / 60;
        r = Math.sqrt(r * r * 4 + 1) / 2;
        r *= 30;

        let n = Math.ceil(Math.PI * 2 * r / config.style.hatchingSize);
        let step = Math.PI * 2 / n;
        let stonework = [];
        for (let i = 0; i < n; i++) {
          stonework.push(step * i);
        }
        if (overlapping) {
          stonework = Utils.shuffle(stonework);
        }
        for (let stone of stonework) {
          let width = step * (overlapping ? 1 + Math.abs(Random.times(4) * 2 - 1) : 1) / 2;
          let height = config.style.hatchingDistance * Random.times(3);
          let poly = [
            new paper.Point({length: r + height, angleInRadians: stone - width}),
            new paper.Point({length: r + height, angleInRadians: stone + width}),
            new paper.Point({length: r - height, angleInRadians: stone + width}),
            new paper.Point({length: r - height, angleInRadians: stone - width})
          ];
          Poly.asTranslate(poly, circle.center);
          layer.addChild(new paper.Path({
            segments: poly,
            strokeWidth: config.style.strokeNormal,
            strokeColor: config.style.colorInk,
            fillColor: fillColor,
            closed: true
          }));
        }
      }
    }
  }

  /**
   * @param {paper.Layer} layer
   * @param {paper.Path[]} shapes
   * @param {Map} config
   */
  static doBricks(layer, shapes, config) {
    let strokeWidth = config.style.strokeNormal;
    let t = (config.style.hatchingDistance - strokeWidth) / 2;
    for (let shape of shapes) {
      shape = Poly.expandPath(shape.clone(), t + strokeWidth);
      shape.fillColor = config.style.colorInk;
    }
    let shadingColor = config.blackAndWhite ? config.style.colorPaper : config.style.colorShading;
    if (shadingColor == config.style.colorInk) {
      return;
    }
    let up = new paper.Point(0, -t);
    let down = new paper.Point(0, t);
    let left = new paper.Point(-t, 0);
    let right = new paper.Point(t, 0);
    let step = config.style.hatchingSize;
    for (let shape of shapes) {
      let segs = [];
      Poly.expandPath(shape.clone(), t).fillColor = shadingColor;
      if (shape instanceof paper.Path.Rectangle) {
        let rect = shape.bounds;
        let n = Math.ceil(rect.w / step);
        for (let i = 0; i < n; i++) {
          segs.push([new paper.Point(rect.x + rect.w * (i + Random.times(3)) / n,rect.y), up]);
          segs.push([new paper.Point(rect.x + rect.w * (1 - (i + Random.times(3)) / n),rect.y + rect.h), down]);
        }
        n = Math.ceil(rect.h / step);
        for (let i = 0; i < n; i++) {
          segs.push([new paper.Point(rect.x + rect.w,rect.y + rect.h * (i + Random.times(3)) / n), right]);
          segs.push([new paper.Point(rect.x,rect.y + rect.h * (1 - (i + Random.times(3)) / n)), left]);
        }
      } else {
        let circle = shape.bounds;
        let n = Math.ceil(shape.length / step);
        for (let i = 0; i < n; i++) {
          let d1 = new paper.Point({length: 1, angleInRadians: Math.PI * 2 * (i + Random.times(3)) / n});
          let p1 = circle.center;
          segs.push([p1.add(d1.multiply(circle.width/2)), d1.multiply(t)]);
        }
      }
      for (let [p, d] of segs) {
        layer.addChild(new paper.Path.Line({
          from: p,
          to: p.add(d),
          strokeWidth: config.style.strokeNormal,
          strokeColor: config.style.colorInk
        }));
      }
    }
  }
}


class Drawing extends paper.Group {  // <= com_watabou_dungeon_visuals_drawings_Drawing
  /**
   * @param {paper.Item[]} children the points of this shape.
   * @param {Map} config the current config.
   */
  constructor(children=[], config=null) {
    super(children);
    this.setStyle(config);
  }

  /**
   * @param {Map} config the current config.
   */
  setStyle(config) {
    if (config != null) {
      this.children.forEach(p => p.setStyle(config));
    }
  }

  /**
   * @param {paper.Point} pos
   * @param {number} angle
   * @param {number} scale
   * @return {Drawing}
   */
  place(pos, angle=0, scale=1) {  // <= com_watabou_dungeon_visuals_drawings_Instance
    this.visible = true;
    this.rotate(angle);
    this.scale(scale * 30);
    this.position = pos.multiply(30).add(this.bounds.size.divide(2));
    return this;
  }
}


class Shape extends paper.Path {
  /**
   * @param {paper.Point[]} points the points of this shape.
   * @param {boolean} closed whether the path is closed.
   * @param {Map} config the current config.
   */
  constructor(points, closed=true, config=null) {
    super(points);
    this.closed = closed;
    this.setStyle(config);
  }

  /**
   * @param {Map} config the current config.
   */
  setStyle(config) {
    if (config != null) {
      this.strokeColor = config.style.colorInk;
      this.fillColor = config.blackAndWhite ? config.style.colorPaper : config.style.colorBg;
    }
  }

  /**
   * @param {paper.Point} pos
   * @param {number} angle
   * @param {number} scale
   * @return {Shape}
   */
  place(pos, angle=0, scale=1) {
    this.visible = true;
    this.rotate(angle);
    this.scale(scale * 30);
    this.position = pos.multiply(30).add(this.bounds.size.divide(2));
    return this;
  }
}


class NoStokeShape extends Shape {
  /**
   * @param {Map} config the current config.
   */
  setStyle(config) {
    super.setStyle(config);
    this.strokeWidth = 0;
  }
}


class NoStokeInkShape extends NoStokeShape {
  /**
   * @param {Map} config the current config.
   */
  setStyle(config) {
    super.setStyle(config);
    if (config != null) {
      this.fillColor = config.style.colorInk;
    }
  }
}


class NoFillShape extends Shape {
  /**
   * @param {Map} config the current config.
   */
  setStyle(config) {
    super.setStyle(config);
    this.fillColor = undefined;
  }
}


class WaterShape extends Shape {
  /**
   * @param {Map} config the current config.
   */
  setStyle(config) {
    super.setStyle(config);
    if (config != null) {
      this.fillColor = config.style.colorWater;
    }
  }
}


class Boulder extends Shape {
  /**
   * @param {Map} config the current config.
   * @return {Boulder}
   */
  constructor(config) {
    let poly = [
      new paper.Point({length: 0.5, angle: Random.float(90)}),
      new paper.Point({length: 0.5, angle: Random.float(90, 180)}),
      new paper.Point({length: 0.5, angle: Random.float(180, 270)}),
      new paper.Point({length: 0.5, angle: Random.float(270, 360)})
    ];
    super(Poly.chaikinRender(poly, true, 2), true, config);
  }
}


class Tapestry extends Shape {
  /**
   * @param {number} len
   * @param {Map} config the current config.
   * @return {Tapestry}
   */
  constructor(len, config) {
    let poly = [], len2 = len / 2;
    for (let i = 0; i < len; i++) {
      poly.push(new paper.Point(i + 0.00 - len2, -0.4));
      poly.push(new paper.Point(i + 0.05 - len2, -0.2));
      poly.push(new paper.Point(i + 0.25 - len2, -0.2));
      poly.push(new paper.Point(i + 0.30 - len2, -0.4));
      poly.push(new paper.Point(i + 0.50 - len2, -0.4));
      poly.push(new paper.Point(i + 0.55 - len2, -0.2));
      poly.push(new paper.Point(i + 0.75 - len2, -0.2));
      poly.push(new paper.Point(i + 0.80 - len2, -0.4));
    }
    poly.shift();
    poly = Poly.chaikinRender(poly, false, 2);
    poly.shift();
    poly.pop();
    super(poly, false, config);
  }
}


class Statue extends Drawing {
  /**
   * @param {Map} config the current config.
   * @return {Statue}
   */
  constructor(config) {
    let shape1 = new Shape(Poly.regular(16, 1/3));

    let poly = [];
    for (let i = 0; i < 10; i++) {
      poly.push(
        new paper.Point({
          length: ((i & 1) == 0 ? 0.9 : 0.4) / 3,
          angle: 36 * (i - 2.5)
        })
      );
    }
    let shape2 = new NoStokeInkShape(poly);
    super([shape1, shape2], config);
  }
}


class Sarcophagus extends Drawing {
  /**
   * @param {Map} config the current config.
   * @return {Sarcophagus}
   */
  constructor(config) {
    let poly = [
      new paper.Point(-0.25, -0.2),
      new paper.Point(-0.15, -0.45),
      new paper.Point(0.15, -0.45),
      new paper.Point(0.25, -0.2),
      new paper.Point(0.15, 0.45),
      new paper.Point(-0.15, 0.45)
    ];
    let shape1 = new Shape(poly);
    let shape2 = new NoFillShape(Poly.scale(poly, 0.7));
    super([shape1, shape2], config);
  }
}


class Altar extends Drawing {
  /**
   * @param {Map} config the current config.
   * @return {Altar}
   */
  constructor(config) {
    let poly = Poly.rect(0.4, 0.8);
    let shape1 = new Shape(Poly.translate(poly, 0.2, 0));

    poly = Poly.regular(6, 0.01);
    let shape2 = new Shape(Poly.translate(poly, 0.2, -0.2));
    let shape3 = new Shape(Poly.translate(poly, 0.2, 0.2));
    super([shape1, shape2, shape3], config);
  }
}


class Throne extends Drawing {
  /**
   * @param {Map} config the current config.
   * @return {Throne}
   */
  constructor(config) {
    let shape1 = new Shape(Poly.rect(0.4, 0.5));
    let shape2 = new Shape(Poly.translate(Poly.rect(0.3, 0.3), -0.1, 0));
    super([shape1, shape2], config);
  }
}


class Well extends Drawing {
  /**
   * @param {Map} config the current config.
   * @return {Well}
   */
  constructor(config) {
    let r = 0.4;
    let shape1 = new Shape(Poly.regular(16, r));
    let shape2 = new WaterShape(Poly.regular(16, r * 0.6));
    super([shape1, shape2], config);
  }
}


class Chest extends Drawing {
  /**
   * @param {Map} config the current config.
   * @return {Chest}
   */
  constructor(config) {
    super([
      new Shape(Poly.rect(0.6, 0.8)),
      new Shape([new paper.Point(-0.3, -0.25), new paper.Point(0.3, -0.25)], false),
      new Shape([new paper.Point(-0.3, -0.15), new paper.Point(0.3, -0.15)], false),
      new Shape([new paper.Point(-0.3, 0.15), new paper.Point(0.3, 0.15)], false),
      new Shape([new paper.Point(-0.3, 0.25), new paper.Point(0.3, 0.25)], false)
    ], config);
  }
}


class Box extends Drawing {
  /**
   * @param {Map} config the current config.
   * @return {Box}
   */
  constructor(config) {
    super([
      new Shape(Poly.rect(0.6, 0.6)),
      new Shape([new paper.Point(-0.1, -0.3), new paper.Point(-0.1, 0.3)], false),
      new Shape([new paper.Point(0.1, -0.3), new paper.Point(0.1, 0.3)], false)
    ], config);
  }
}


class Barrel extends Drawing {
  /**
   * @param {Map} config the current config.
   * @return {Barrel}
   */
  constructor(config) {
    let r = 0.25, s = Math.cos(Math.PI/6);
    let r2 = r / 2, rs = r * s;
    super([
      new Shape(Poly.regular(16, r)),
      new Shape([new paper.Point(-r, 0), new paper.Point(r, 0)], false),
      new Shape([new paper.Point(-rs, -r2), new paper.Point(rs, -r2)], false),
      new Shape([new paper.Point(-rs, r2), new paper.Point(rs, r2)], false)
    ], config);
  }
}


class Fountain extends Drawing {
  /**
   * @param {Map} config the current config.
   * @return {Fountain}
   */
  constructor(config) {
    let r = 0.5;
    super([
      new Shape(Poly.regular(24, r)),
      new WaterShape(Poly.regular(24, r * 0.8)),
      new Shape(Poly.regular(12, r * 0.2))
    ], config);
  }
}


class Dais extends Drawing {
  /**
   * @param {Map} config the current config.
   * @return {Dais}
   */
  constructor(config) {
    let r1 = 1.50, r2 = 1.25, da = 11.25 /* degrees */;
    let poly = [], p;
    for (let i = -8; i < 9; i++) {
      p = new paper.Point({length: r1, angle: 180 + i * da});
      poly.push(p.add([0.5, 0]));
    }
    let shape1 = new NoStokeShape(poly);
    let shape2 = new Shape(poly);
    shape2.closed = false;

    poly = [];
    for (let i = -8; i < 9; i++) {
      p = new paper.Point({length: r2, angle: 180 + i * da});
      poly.push(p.add([0.5, 0]));
    }
    let shape3 = new Shape(poly);
    shape3.closed = false;

    super([shape1, shape2, shape3], config);
  }
}


class SmallDais extends Drawing {
  /**
   * @param {Map} config the current config.
   * @return {SmallDais}
   */
  constructor(config) {
    super([new Shape(Poly.regular(32, 1.25)), new NoFillShape(Poly.regular(32, 1))], config);
  }
}


class Room extends paper.Rectangle {
  /**
   * Construct a Room instance.
   * @param {paper.Point} origin
   * @param {paper.Point} yAxis
   * @param {paper.Size} size the size of the room in its own coordinate system.
   * @param {number} mirror
   * @return {Room} this Room instance.
   */
  constructor(origin, yAxis, size, mirror=1) {
    let tl = new paper.Point(), sz = new paper.Size(), w2 = size.width >> 1;
    /*
     * The door of the room is inside the room, while it occupies 1x1 block whose top-left corner
     * locates at room's origin. That's why the distnace between top and origin.y is NOT
     * `size.height` but `size.height - 1` when the yAxis is UP. Same reason for the case when
     * yAxis is LEFT.
     */
    if (Dot_UP.equals(yAxis)) {
      tl.set(origin.x - w2, origin.y - size.height + 1);
      sz.set(size);
    } else if (Dot_DOWN.equals(yAxis)) {
      tl.set(origin.x - w2, origin.y);
      sz.set(size);
    } else if (Dot_LEFT.equals(yAxis)) {
      tl.set(origin.x - size.height + 1, origin.y - w2);
      sz.set(size.height, size.width);
    } else if (Dot_RIGHT.equals(yAxis)) {
      tl.set(origin.x, origin.y - w2);
      sz.set(size.height, size.width);
    } else {
      console.warn(`Unknown axis: Room(origin=${origin}, y-axis=${yAxis}, size=${size}, mirror=${mirror})`);
      tl.set(origin.x, 0);
      sz.set(size.width, 0);
    }
    super(tl, sz);
    this.hidden = false;
    this.enemy = false;
    this.key = false;
    this.loot = false;
    this.gate = false;
    this.event = false;
    this.enviro = false;
    this.round = false;
    this.columns = false;
    this.dungeon = null;
    this.desc = null;
    this.origin = origin;
    this.yAxis = yAxis;
    this.mirror = mirror;
    this.props = [];
    this.oWidth = size.width; // the room's width in its own coordinate system.
    this.oHeight = size.height; // the room's height in its own coordinate system.
    this.inner = this.expand(-2);
  }

  /**
   * @param {paper.Point} p
   * @return {paper.Point|null}
   */
  out(p) {
    if (p.x == this.left) {
      return Dot_LEFT;
    }
    if (p.x == this.right - 1) {
      return Dot_RIGHT;
    }
    if (p.y == this.top) {
      return Dot_UP;
    }
    if (p.y == this.bottom - 1) {
      return Dot_DOWN;
    }
    return null;
  }

  /**
   * @return {boolean}
   */
  isCorridor() {
    return (this.width == 3 && this.height > 3) || (this.height == 3 && this.width > 3);
  }

  /**
   * @return {boolean}
   */
  isJunction() {
    return this.width == 3 && this.height == 3;
  }

  /**
   * @return {boolean}
   */
  isNormal() {
    return this.width > 3 && this.height > 3;
  }

  /**
   * @return {string}
   */
  word() {
    if (!this.isNormal()) {
      return Random.choose(['corridor', 'passage']);
    }
    let innerArea = this.inner.area;
    if (innerArea >= 21) {
      return Random.choose(['large room', 'large chamber', 'hall']);
    }
    if (innerArea >= 15) {
      return Random.choose(['room', 'chamber']);
    }
    return Random.choose(['small room', 'small chamber']);
  }

  /**
   * @return {paper.Point[]}
   */
  getPoly() {
    let poly = [];
    if (this.round) {
      let n = 36, c = this.inner.center;
      let r = Math.sqrt(this.inner.width * this.inner.width + 1) / 2;
      let p = c.add([r, 0]);
      for (let i = 0; i < n; i++) {
        poly.push(p.rotate(360 * i / n, c));
      }
    } else {
      poly = [
        this.inner.topLeft,
        this.inner.topRight,
        this.inner.bottomRight,
        this.inner.bottomLeft
      ];
    }
    return poly;
  }

  /**
   * @return {paper.Rectangle}
   */
  getHatchingArea() {
    if (this.round) {
      let c = this.inner.center, r = this.inner.width / 2;
      return new paper.Path.Circle(c.multiply(30), r * 30);
    }
    return new paper.Path.Rectangle(this.inner.point.multiply(30), this.inner.size.multiply(30));
  }

  /**
   * @return {paper.Point[]}
   */
  getSeams() {
    return [];
  }

  /**
   * Project the room's inner point to global canvas.
   *
   * `this.yAxis` is the global vector for the y-axis of the room's inner coordinate system.
   *
   * `this.mirror` indicates whether the x coordinate in the room's inner coordinates should be
   * flipped or not.
   *
   * @param {number} px the inner x coordinate of the point.
   * @param {number} py the inner y coordinate of the point.
   * @return {paper.Point} the corresponding coordinates in global canvas, whose coordinates value
   * are integer.
   */
  local2global(px, py) {
    // during projection:
    let res = new paper.Point(
        px * this.mirror, // flip the x.
        -py               // the room's inner y axis is up, while global canvas's y axis is down.
      )
      // - when room's y axis is right, vector (px, py) should be rotated clockwise for 90 degrees.
      // - when room's y axis is up, vector (px, py) should not be rotated.
      // - when room's y axis is left, vector (px, py) should be rotated counterclockwise for 90 degrees.
      // - when room's y axis is down, vector (px, py) should be rotated for 180 degrees.
      .rotate(90 - Utils.axis2angle(this.yAxis))
      // then move vector (px, py) according to room's origin
      .add(this.origin);
    return new paper.Point(Utils.snapInt(res.x), Utils.snapInt(res.y));
  }

  /**
   * @return {Door[]}
   */
  getDoors() {
    return this.dungeon.doors.map(door => this.equals(door.from) || this.equals(door.to));
  }

  /**
   * @return {Door|null}
   */
  getDoor(room) {
    let doors = this.dungeon.doors.filter(
      door => (this.equals(door.from) && room.equals(door.to)) || (room.equals(door.from) && this.equals(door.to))
    );
    return doors.length > 0 ? doors[0] : null;
  }

  /**
   * @return {Door|null}
   */
  getDoorW() {
    let doors = this.dungeon.doors.filter(
      door => door.x == this.left && door.y >= this.top && door.y < this.bottom
    );
    return doors.length > 0 ? doors[0] : null;
  }

  /**
   * @return {Door|null}
   */
  getDoorE() {
    let doors = this.dungeon.doors.filter(
      door => door.x == this.right - 1 && door.y >= this.top && door.y < this.bottom
    );
    return doors.length > 0 ? doors[0] : null;
  }

  /**
   * @return {Door|null}
   */
  getDoorN() {
    let doors = this.dungeon.doors.filter(
      door => door.y == this.top && door.x >= this.left && door.x < this.right
    );
    return doors.length > 0 ? doors[0] : null;
  }

  /**
   * @return {Door|null}
   */
  getDoorS() {
    let doors = this.dungeon.doors.filter(
      door => door.y == this.bottom - 1 && door.x >= this.left && door.x < this.right
    );
    return doors.length > 0 ? doors[0] : null;
  }

  /**
   * @param {paper.Point} dir
   * @return {Door|null}
   */
  getWallDoor(dir) {
    if (Dot_LEFT.equals(dir)) {
      return this.getDoorW();
    }
    if (Dot_RIGHT.equals(dir)) {
      return this.getDoorE();
    }
    if (Dot_UP.equals(dir)) {
      return this.getDoorN();
    }
    if (Dot_DOWN.equals(dir)) {
      return this.getDoorS();
    }
    return null;
  }

  /**
   * @param {paper.Point} dir
   * @return {boolean}
   */
  isSolid(dir) {
    let door = this.getWallDoor(dir);
    return door == null || door.type == Door.SECRET;
  }

  /**
   * @return {Door|null}
   */
  getEntrance() {
    let doors = this.dungeon.doors.filter(door => this.equals(door.to));
    return doors.length > 0 ? doors[0] : null;
  }

  /**
   * @return {Door[]}
   */
  getExits() {
    return this.dungeon.doors.filter(door => this.equals(door.from));
  }

  /**
   * @return {boolean}
   */
  checkDesc(words) {
    if (this.desc == null) {
      return false;
    }
    let desc = this.desc.toLowerCase();
    return words.some(w => desc.includes(w));
  }

  /**
   * @return {boolean}
   */
  aisleAvailable() {
    let door = this.dungeon.getDoor(this.local2global(0, this.oHeight - 1));
    return door == null || door.type == Door.SECRET;
  }

  /**
   * @param {number} size
   * @return {paper.Point}
   */
  scatter(size) {
    if (this.round) {
      let c = this.center;
      let p = new paper.Point({
        length: (this.inner.width - size) / 2 * Random.pow(0.25),
        angle: Random.float(360)
      });
      return p.add(c);
    }
    let px = Random.pow(1/3) * (Random.maybe(0.5) ? 0.5 : -0.5) + 0.5;
    let py = Random.pow(1/3) * (Random.maybe(0.5) ? 0.5 : -0.5) + 0.5;
    return new paper.Point(
      this.inner.x + size / 2 + px * (this.inner.width - size),
      this.inner.y + size / 2 + py * (this.inner.height - size)
    );
  }

  /**
   * @return {paper.Point}
   */
  aisle() {
    return this.local2global(0, this.oHeight - 2).add(0.5);
  }

  createProps() {
    let area = this.inner.area;
    let crumbling = this.dungeon.tags.includes('crumbling');
    let nRubble = Random.int(1, area / (crumbling ? 2 : 4) + 1);
    if (this.checkDesc(['rubble', 'debris'])) {
      nRubble += 3;
    }
    while (nRubble-- > 0) {
      let size = 0.1 + (crumbling ? 0.6 : 0.4) * Random.pow(3);
      let p = this.scatter(size);
      this.props.push(new Boulder(this.dungeon.config).place(p, Random.float(180), size));
    }
    let aisleAvailable = this.aisleAvailable();
    let object =
      this.checkDesc(['throne']) && aisleAvailable ? this.addThrone() :
        this.checkDesc(['well']) && aisleAvailable ? this.addWell() :
          this.checkDesc(['statue', 'sculpture']) && aisleAvailable ? this.addStatue() :
            this.checkDesc(['sarcophagus', 'coffin']) && aisleAvailable ? this.addSarcophagus() :
              this.checkDesc(['altar', 'pedestal']) && aisleAvailable ? this.addAltar() :
                this.checkDesc(['chest']) && aisleAvailable ? this.addChest() :
                  this.checkDesc(['crate', 'box', 'trunk']) && !this.columns ? this.addCrate() :
                    this.checkDesc(['tapestry']) && !this.round ? this.addTapestry() : null;
    if (this.checkDesc(['pool', 'puddle'])) {
      this.addPool();
    }
    if (this.isNormal() && !this.columns && !this.dungeon.planner.isSpecial(this) && object == null) {
      if (this.desc == null && Random.maybe(this.dungeon.config.fountainChance)) {
        this.dungeon.config.fountainChance /= 2;
        this.addFountain();
      } else if (this.desc == null && Random.maybe(this.dungeon.config.wellChance * (this.round ? 2 : 1))) {
        this.dungeon.config.wellChance = 0;
        this.props.push(new Well(this.dungeon.config).place(this.center));
      } else if (Random.maybe(1/3)) {
        let n = Random.float(area / 5);
        if (Random.maybe(2/3)) {
          while (n-- > 0) {
            this.addCrate();
          }
        } else {
          let size = 0.6 + 0.4 * Random.times(3);
          while (n-- > 0) {
            this.addBarrel(size);
          }
        }
      }
      if (!this.round) {
        let door = this.dungeon.getDoor(this.local2global(0, this.oHeight - 1));
        if ((door != null && door.type == Door.SECRET) || (door == null && Random.maybe(this.dungeon.config.tapestryChance / this.oWidth))) {
          this.addTapestry();
        }
      }
    }
    if (this.equals(this.dungeon.planner.last)) {
      if (this.oWidth <= 5) {
        this.columns = false;
      }
      if (this.dungeon.tags.includes('multi-level')) {
        if (Random.maybe(0.5)) {
          this.props.push(new Statue(this.dungeon.config).place(this.center));
        } else if (!this.round) {
          this.props.push(new Dais(this.dungeon.config).place(this.aisle(), Utils.axis2angle(this.yAxis)));
        }
      } else {
        let pos = this.round ? this.center : this.aisle();
        let drawing = this.round ? new SmallDais(this.dungeon.config) : new Dais(this.dungeon.config);
        let rotation = Utils.axis2angle(this.yAxis);
        this.props.push(drawing.place(pos, rotation));

        if (this.dungeon.tags.includes('temple')) {
          drawing = new Altar(this.dungeon.config);
        } else if (this.dungeon.tags.includes('tomb')) {
          drawing = new Sarcophagus(this.dungeon.config);
          rotation = Utils.axis2angle(this.yAxis.abs());
        } else if (this.dungeon.tags.includes('dwelling')) {
          drawing = new Throne(this.dungeon.config);
        } else {
          drawing = new Statue(this.dungeon.config);
          rotation = 0;
        }
        this.props.push(drawing.place(pos, rotation));
      }
    }
  }

  addTapestry() {
    let inst = new Tapestry(this.oWidth - 2, this.dungeon.config);
    inst.place(this.aisle(), Utils.axis2angle(-this.yAxis.y, this.yAxis.x));
    this.props.push(inst);
    return inst;
  }

  addStatue() {
    let inst = new Statue(this.dungeon.config).place(this.aisle());
    this.props.push(inst);
    return inst;
  }

  addSarcophagus() {
    let inst = new Sarcophagus(this.dungeon.config).place(this.aisle(), Utils.axis2angle(this.yAxis.abs()));
    this.props.push(inst);
    return inst;
  }

  addAltar() {
    let inst = new Altar(this.dungeon.config).place(this.aisle(), Utils.axis2angle(this.yAxis));
    this.props.push(inst);
    return inst;
  }

  addThrone() {
    let inst = new Throne(this.dungeon.config).place(this.aisle(), Utils.axis2angle(this.yAxis));
    this.props.push(inst);
    return inst;
  }

  addWell() {
    let inst = new Well(this.dungeon.config).place(this.aisle());
    this.props.push(inst);
    return inst;
  }

  addChest() {
    let inst = new Chest(this.dungeon.config).place(this.aisle(), Utils.axis2angle(this.yAxis));
    this.props.push(inst);
    return inst;
  }

  addCrate() {
    let size = 0.4 + 0.6 * Random.times(3);
    let p = this.scatter(size);
    let inst = new Box(this.dungeon.config).place(p, Random.float(180), size);
    this.props.push(inst);
    return inst;
  }

  addBarrel(size) {
    let p = this.scatter(size);
    let inst = new Barrel(this.dungeon.config).place(p, Random.float(180), size);
    this.props.push(inst);
    return inst;
  }

  addPool() {
    this.dungeon.flood.addPool(this.topLeft.add(1));
  }

  addFountain() {
    let size = Math.sqrt(Math.min(this.inner.width, this.inner.height) / 3) * 1.5;
    let inst = new Fountain(this.dungeon.config).place(this.center, 0, size);
    this.props.push(inst);
    return inst;
  }

  canBeRound() {
    if (this.width != this.height || this.width <= 3) {
      return false;
    }
    let w2 = this.oWidth >> 1, d2 = this.oHeight >> 1;
    let a = this.local2global(0, 0);
    let b = this.local2global(-w2, d2);
    let c = this.local2global(w2, d2);
    let d = this.local2global(0, this.oHeight - 1);
    return this.getDoors().every(door => a.equals(door) || b.equals(door) || c.equals(door) || d.equals(door));
  }

  getBounds(angle=0) {
    if (this.round) {
      return new paper.Rectangle(this.center.rotate(angle).subtract(this.width / 2), new paper.Size(this.width, this.width));
    } else {
      let poly = new paper.Path.Rectangle(this);
      poly.rotate(angle, [0, 0]);
      let bounds = poly.bounds.clone();
      poly.remove();
      return bounds;
    }
  }

  getGrown() {
    if (Dot_UP.equals(this.yAxis)) {
      return new paper.Rectangle(this.left, this.top - 1, this.width, this.height + 1);
    }
    if (Dot_DOWN.equals(this.yAxis)) {
      return new paper.Rectangle(this.left, this.top, this.width, this.height + 1);
    }
    if (Dot_LEFT.equals(this.yAxis)) {
      return new paper.Rectangle(this.left - 1, this.top, this.width + 1, this.height);
    }
    if (Dot_RIGHT.equals(this.yAxis)) {
      return new paper.Rectangle(this.left, this.top, this.width + 1, this.height);
    }
    return null;
  }

  /**
   * @param {paper.Layer} layer
   */
  drawCorners(layer) {
    if (!this.round) {
      let o = this.dungeon.config.style.strokeNormal * 1.5;
      if (this.dungeon.getDoor(this.inner.topLeft.subtract([1, 0])) == null && this.dungeon.getDoor(this.inner.topLeft.subtract([0, 1])) == null) {
        this.drawCorner(layer, this.inner.left * 30 + o, this.inner.top * 30 + o, 1, 0);
      }
      if (this.dungeon.getDoor(this.inner.topRight) == null && this.dungeon.getDoor(this.inner.topRight.subtract(1)) == null) {
        this.drawCorner(layer, this.inner.right * 30 - o, this.inner.top * 30 + o, 0, 1);
      }
      if (this.dungeon.getDoor(this.inner.bottomLeft) == null && this.dungeon.getDoor(this.inner.bottomLeft.subtract(1)) == null) {
        this.drawCorner(layer, this.inner.left * 30 + o, this.inner.bottom * 30 - o, 0, -1);
      }
      if (this.dungeon.getDoor(this.inner.bottomRight.subtract([1, 0])) == null && this.dungeon.getDoor(this.inner.bottomRight.subtract([0, 1])) == null) {
        this.drawCorner(layer, this.inner.right * 30 - o, this.inner.bottom * 30 - o, -1, 0);
      }
    }
  }

  /**
   * @param {paper.Layer} layer
   * @param {number} x
   * @param {number} y
   * @param {number} rx
   * @param {number} ry
   */
  drawCorner(layer, x, y, rx, ry) {
    let config = this.dungeon.config;
    let n2 = config.style.strokeNormal / 2;
    let span = 30 - config.style.strokeNormal * 2;
    let poly = [
      new paper.Point(-n2, -n2),
      new paper.Point(n2 + span * Random.times(3), -n2),
      new paper.Point(n2, n2),
      new paper.Point(-n2, n2 + span * Random.times(3))
    ];
    Poly.asRotateYX(poly, ry, rx);
    Poly.asTranslate(poly, x, y);
    layer.addChild(new paper.Path({
      segments: Poly.chaikinRender(poly, true, 2, [poly[0]]),
      fillColor: config.style.colorInk,
      closed: true
    }));
  };

  /**
   * @param {paper.Layer} layer
   */
  drawGrid(layer) {
    let config = this.dungeon.config;
    if (config.showProps && this.isNormal()) {
      this.drawCracks(layer);
    }
    if (config.gridMode == GridType_HIDDEN) {
      return;
    }

    if (this.round) {
      this.drawCircGrid(layer);
    } else {
      this.drawRectGrid(layer);
    }
  }

  /**
   * @param {paper.Layer} layer
   */
  drawCracks(layer) {
    let r = this.round ? Math.sqrt(Math.pow(this.oWidth - 2, 2) + 1) / 2 : 0;
    let p = this.round ? Math.PI * r : 2 * (this.oWidth + this.oHeight - 4);
    let n = p * Random.times(3) * this.dungeon.config.crackChance;
    for (let i = 0; i < n; i++) {
      let pos = this.center.clone();
      let dir = null;
      if (this.round) {
        dir = new paper.Point({length: 1, angle: Random.float(360)});
        let q = dir.multiply(r);
        pos.x += q.x;
        pos.y += q.y;
      } else {
        let a, b;
        switch (Random.int(3)) {
          case 0:
            p = this.yAxis;
            a = this.oHeight;
            b = this.oWidth;
            break;
          case 1:
            p = this.yAxis.rotate(90);
            a = this.oWidth;
            b = this.oHeight;
            break;
          case 2:
            p = this.yAxis.rotate(-90);
            a = this.oWidth;
            b = this.oHeight;
            break;
        }
        if (this.isSolid(p)) {
          dir = p;
          pos = pos.add(dir.multiply(a / 2 - 1).add(dir.rotate(90).multiply(Random.float(b / 2 - 2))));
        }
      }
      if (dir != null) {
        this.drawCrack(layer, pos, dir, Math.random());
      }
    }
  }

  /**
   * @param {paper.Layer} layer
   * @param {paper.Point} pos
   * @param {paper.Point} dir
   * @param {number} size
   */
  drawCrack(layer, pos, dir, size) {
    let segs = Math.ceil(size * 5);
    dir = dir.multiply(-30 * size / segs);
    pos = pos.multiply(30);
    let poly = [pos.subtract(dir.normalize(0.5 * this.dungeon.config.style.strokeThick)), pos];
    let t = Random.maybe(0.5) ? 1 : -1;
    for (let i = 0; i < segs; i++) {
      t = -t;
      pos = pos.add(dir.rotate(t * Random.float(45)));
      poly.push(pos);
    }
    this.drawStroke(layer, poly, this.dungeon.config.style.strokeThick * size);
  }

  /**
   * @param {paper.Layer} layer the layer to put this stroke.
   * @param {paper.Point[]} poly the points of this stroke path.
   * @param {number} start the stroke size in beginning.
   * @param {number} end the stroke size at the end.
   */
  drawStroke(layer, poly, start, end=0) {
    let polyLength = Poly.pathLength(poly);
    let progress = 0;
    let p1 = poly[0];
    let p2 = poly[1];
    let v1 = p2.subtract(p1);
    let delta = v1.length;
    v1 = v1.normalize();
    let n = v1.rotate(90).multiply(start / 2);
    let a = [p1.add(n)];
    let b = [p1.subtract(n)];
    for (let i = 2; i < poly.length; i++) {
      progress += delta;
      p1 = p2;
      p2 = poly[i];
      let v0 = v1;
      v1 = p2.subtract(p1);
      delta = v1.length;
      v1 = v1.normalize();
      let cos = Math.sqrt((1 + v0.dot(v1)) / 2); // == cos(thelta/2), thelta is the angle between v0 and v1.
      let p = progress / polyLength;
      let strokeWidth = Math.max(Utils.interpolate(start, end, p), 0.1);
      n = v0.add(v1).rotate(90).normalize(strokeWidth / 2 / cos);
      a.push(p1.add(n));
      b.unshift(p1.subtract(n));
    }
    n = v1.rotate(90).multiply(end / 2);
    a.push(p2.add(n));
    b.unshift(p2.subtract(n));
    layer.addChild(new paper.Path({
      segments: a.concat(b),
      fillColor: this.dungeon.config.style.colorInk,
      closed: true
    }));
  }

  /**
   * @param {paper.Layer} layer the layer to put this stroke.
   */
  drawRectGrid(layer) {
    let config = this.dungeon.config;
    let strokeWidth = config.gridMode == GridType_DOTTED ? config.style.strokeNormal : config.style.strokeThin;
    let x, y;
    for (let i = 1; i < this.height; i++) {
      y = (this.top + i) * 30;
      layer.addChild(new paper.Path.Line({
        from: [this.left * 30, y],
        to: [this.right * 30, y],
        strokeWidth: strokeWidth,
        strokeColor: config.style.colorInk,
        dashArray: config.gridPattern
      }));
    }
    for (let i = 1; i < this.width; i++) {
      x = (this.left + i) * 30;
      layer.addChild(new paper.Path.Line({
        from: [x, this.top * 30],
        to: [x, this.bottom * 30],
        strokeWidth: strokeWidth,
        strokeColor: config.style.colorInk,
        dashArray: config.gridPattern
      }));
    }
  }

  /**
   * @param {paper.Layer} layer the layer to put this stroke.
   */
  drawCircGrid(layer) {
    let config = this.dungeon.config;
    let strokeWidth = config.gridMode == GridType_DOTTED ? config.style.strokeNormal : config.style.strokeThin;
    let c = this.center;
    let r = this.width * 30 / 2;
    let x, y, s;
    for (let i = 1; i < this.height; i++) {
      s = Math.cos(Math.asin(i / this.height * 2 - 1)) * r;
      x = (this.left + i) * 30;
      y = (this.top + i) * 30;
      layer.addChild(new paper.Path.Line({
        from: [c.x * 30 + s, y],
        to: [c.x * 30 - s, y],
        strokeWidth: strokeWidth,
        strokeColor: config.style.colorInk,
        dashArray: config.gridPattern
      }));
      layer.addChild(new paper.Path.Line({
        from: [x, c.y * 30 + s],
        to: [x, c.y * 30 - s],
        strokeWidth: strokeWidth,
        strokeColor: config.style.colorInk,
        dashArray: config.gridPattern
      }));
    }
  }

  /**
   * @param {paper.Layer} layer the layer to put this stroke.
   */
  drawColonnades(layer) {
    if (!this.columns) {
      return;
    }

    // TODO: directly create circle or rectangle path for the room.

    let inner = this.inner;
    if (this.round) {
      let R = inner.w / 2 - 1;
      let n = Math.floor(Math.PI * R / 2) * 4;
      for (let i = 0; i < n; i++) {
        let a = (i + 0.5) / n * 360;
        let p = new paper.Point({length:R, angle:a}).add(inner.center);
        this.drawColumn(layer, p.multiply(30), a);
      }
    } else if (this.yAxis.x != 0) {
      for (let i = inner.left + 1; i < inner.right; i++) {
        this.drawColumn(layer, new paper.Point(i * 30, (inner.top + 1) * 30));
        this.drawColumn(layer, new paper.Point(i * 30, (inner.bottom - 1) * 30));
      }
    } else {
      for (let i = inner.top + 1; i < inner.bottom; i++) {
        this.drawColumn(layer, new paper.Point((inner.left + 1) * 30, i * 30));
        this.drawColumn(layer, new paper.Point((inner.right - 1) * 30, i * 30));
      }
    }
  }

  /**
   * @param {paper.Layer} layer the layer to put this stroke.
   * @param {paper.Point} pos
   * @param {number} angle
   */
  drawColumn(layer, pos, angle=0) {
    let config = this.dungeon.config;
    let strokeColor = config.style.colorInk;
    let strokeWidth, fillColor;
    if (Random.maybe(config.columnShattered)) {
      strokeWidth = config.style.strokeNormal;
      fillColor = config.blackAndWhite ? config.style.colorPaper : config.style.colorBg;
    } else {
      strokeWidth = config.style.strokeThick;
      fillColor = config.blackAndWhite ? config.style.colorPaper : config.style.colorShading;
    }
    let r = config.columnRadius * 30;
    if (config.columnSquare) {
      let path = new paper.Path.Rectangle({
        point: pos.subtract(r),
        size: [r * 2, r * 2],
        strokeWidth: strokeWidth,
        strokeColor: strokeColor,
        fillColor: fillColor
      })
      if (angle != 0) {
        path.rotate(angle, [0, 0]);
      }
      layer.addChild(path);
    } else {
      layer.addChild(new paper.Path.Circle({
        center: pos,
        radius: r,
        strokeWidth: strokeWidth,
        strokeColor: strokeColor,
        fillColor: fillColor
      }));
    }
  }
}


class Door extends paper.Point {
  static EMPTY = 0;
  static NORMAL = 1;
  static ARCHWAY = 2;
  static STAIRS = 3;
  static PORTCULLIS = 4;
  static SPECIAL = 5;
  static SECRET = 6;
  static BARRED = 7;
  static EXIT = 8;

  static front = [new paper.Point(15, -15), new paper.Point(15, 15)];

  /**
   * @param {paper.Point} pos
   * @param {Room} from
   * @param {Room} to
   */
  constructor(pos, from, to) {
    super(pos);
    this.from = from;
    this.to = to;
    this.type = Door.autoType(from, to);
    this.dir = null;
    if (from != null) {
      this.dir = from.out(this);
    } else if (to != null) {
      this.dir = to.out(this).negate();
    }
    if (this.dir == null) {
      console.error(`Failed to set Door.dir when pos=${pos}, from=${from}, to=${to}`);
    }
  }

  /**
   * @param {Room} from
   * @param {Room} to
   */
  static autoType(from, to) {
    if (to == null) {
      return Door.EXIT;
    }
    if (from == null) {
      return Door.STAIRS;
    }
    if (!from.isNormal() && !to.isNormal()) {
      return Door.EMPTY;
    }
    return Random.choose([Door.EMPTY, Door.NORMAL, Door.ARCHWAY]);
  }

  getPoly() {
    let poly;
    switch (this.type) {
      case Door.NORMAL:
      case Door.ARCHWAY:
      case Door.PORTCULLIS:
      case Door.SPECIAL:
        poly = [
          new paper.Point(-0.5, -0.5),  //
          new paper.Point(0.5, -0.5),   //  +--------+
          new paper.Point(0.5, -0.25),  //  |        |
          new paper.Point(0.3, -0.25),  //  +--+  +--+
          new paper.Point(0.3, 0.25),   //     |  |
          new paper.Point(0.5, 0.25),   //  +--+  +--+
          new paper.Point(0.5, 0.5),    //  |        |
          new paper.Point(-0.5, 0.5),   //  +--------+
          new paper.Point(-0.5, 0.25),  //
          new paper.Point(-0.3, 0.25),  //
          new paper.Point(-0.3, -0.25), //
          new paper.Point(-0.5, -0.25)  //
        ];
        Poly.asRotateYX(poly, -this.dir.x, this.dir.y);
        Poly.asTranslate(poly, this.add(0.5));
        return poly;
      case Door.SECRET:
        poly = Poly.rect(1, 0.5);
        Poly.asTranslate(poly, 0, 0.25);
        Poly.asRotateYX(poly, -this.dir.x, this.dir.y);
        Poly.asTranslate(poly, this.add(0.5));
        return poly;
      case Door.BARRED:
        poly = [
          new paper.Point(-0.5, 0.5),  //
          new paper.Point(0.5, 0.5),   //
          new paper.Point(0.5, 0),     //     +--+
          new paper.Point(0.3, 0),     //     |  |
          new paper.Point(0.3, -0.5),  //  +--+  +--+
          new paper.Point(-0.3, -0.5), //  |        |
          new paper.Point(-0.3, 0),    //  +--------+
          new paper.Point(-0.5, 0)     //
        ];
        Poly.asRotateYX(poly, -this.dir.x, this.dir.y);
        Poly.asTranslate(poly, this.add(0.5));
        return poly;
      default:
        return [
          new paper.Point(this.x, this.y),         //  +---+
          new paper.Point(this.x + 1, this.y),     //  |   |
          new paper.Point(this.x + 1, this.y + 1), //  +---+
          new paper.Point(this.x, this.y + 1)      //
        ];
    }
  }

  getHatchingArea() {
    return new paper.Path.Rectangle(this.x * 30, this.y * 30, 30, 30);
  }

  getSeams() {
    let seams = [];
    switch (this.type) {
      case Door.STAIRS:
      case Door.SECRET:
        seams = [[new paper.Point(0.5, -0.5), new paper.Point(0.5, 0.5)]];
        break;
      case Door.EXIT:
        seams = [[new paper.Point(-0.5, -0.5), new paper.Point(-0.5, 0.5)]];
        break;
      default:
        seams = [
          [new paper.Point(0.5, -0.5), new paper.Point(0.5, 0.5)],
          [new paper.Point(-0.5, -0.5), new paper.Point(-0.5, 0.5)]
        ];
    }
    for (let seam of seams) {
      Poly.asRotateYX(seam, this.dir.y, this.dir.x);
      Poly.asTranslate(seam, this.add(0.5));
    }
    return seams;
  }

  /**
   * @param {paper.Layer} layer
   * @param {Map} config
   */
  drawGrid(layer, config) {
    if (config.gridMode == GridType_HIDDEN) {
      return;
    }
    switch (this.type) {
      case Door.STAIRS:
      case Door.SECRET:
      case Door.BARRED:
        layer.addChild(this.frontPath(config, true));
        break;
      case Door.EXIT:
        break;
      default:
        layer.addChild(this.frontPath(config, true));
        layer.addChild(this.frontPath(config, false));
    }
  }

  /**
   * @param {Map} config the style config
   * @param {boolean} toOrFrom `true` if to this door, `false` otherwise.
   * @param {paper.Path}
   */
  frontPath(config, toOrFrom) {
    let i = toOrFrom ? 1 : -1;
    let line = Poly.rotateYX(Door.front, i * this.dir.y, i * this.dir.x);
    Poly.asTranslate(line, this.add(0.5).multiply(30));
    return new paper.Path({
      segments: line,
      strokeWidth: config.gridMode == GridType_DOTTED ? config.style.strokeNormal : config.style.strokeThin,
      strokeColor: config.style.colorInk,
      dashArray: config.gridPattern
    });
  }

  /**
   * @param {paper.Layer} layer the layer to put this stroke.
   * @param {Map} config
   */
  draw(layer, config) {
    let thick = config.style.hatchingStyle == 'Stonework' || config.style.hatchingStyle == 'Bricks' ? config.style.strokeNormal : config.style.strokeThick;
    let white = config.blackAndWhite ? config.style.colorPaper : config.style.colorBg;
    let dir = this.dir;
    let pos = this.add(0.5).multiply(30);
    let size;
    switch (this.type) {
      case Door.NORMAL:
      case Door.SPECIAL:
        if (dir.y != 0) {
          size = new paper.Point(18 + thick, 7.5);
        } else {
          size = new paper.Point(7.5, 18 + thick);
        }
        layer.addChild(new paper.Path.Rectangle({
          point: pos.subtract(size.divide(2)),
          size: size,
          strokeWidth: thick,
          strokeColor: config.style.colorInk,
          fillColor: white
        }));
        if (this.type == Door.SPECIAL) {
          layer.addChild(new paper.Path.Line({
            from: pos.subtract(dir.multiply(30/8)),
            to: pos.add(dir.multiply(30/8)),
            strokeWidth: thick,
            strokeColor: config.style.colorInk
          }));
        }
        break;
      case Door.PORTCULLIS:
        for (let i = -1; i < 2; i++) {
          layer.addChild(new paper.Path.Circle({
            center: pos.add(dir.multiply(18 * i / 3)),
            radius: thick / 2,
            fillColor: config.style.colorInk
          }));
        }
        break;
      case Door.BARRED:
        if (dir.y != 0) {
          size = new paper.Point(18, 7.5);
        } else {
          size = new paper.Point(7.5, 18);
        }
        layer.addChild(new paper.Path.Rectangle({
          point: pos.subtract(size.divide(2)),
          size: size,
          strokeWidth: thick,
          strokeColor: config.style.colorInk,
          fillColor: white
        }));

        let d = dir.multiply(9).rotate(90);
        layer.addChild(new paper.Path.Line({
          from: pos.subtract(d),
          to: pos.add(d),
          strokeWidth: config.style.strokeNormal,
          strokeColor: config.style.colorInk
        }));
        break;
      case Door.STAIRS:
      case Door.EXIT:
        for (let i = 1; i < 5; i++) {
          let w2 = 30 * (5 - i) / 5 * 0.5;
          let s = 30 * i / 5 - 15;
          let d1 = dir.multiply(s);
          let d2 = dir.multiply(w2).rotate(90);
            layer.addChild(new paper.Path.Line({
            from: pos.add(d1).subtract(d2),
            to: pos.add(d1).add(d2),
            strokeWidth: config.style.strokeNormal,
            strokeColor: config.style.colorInk
          }));
        }
        break;
    }
  }
}


class Flood {
  /**
   * @param {MapGenerator} dungeon
   * @param {number} level
   * @return {Flood}
   */
  constructor(dungeon, level=0.3) {
    this.align = true;
    this.scale = 1;
    this.dungeon = dungeon;
    this.rect = dungeon.getRect();
    this.width = this.rect.width * this.scale;
    this.height = this.rect.height * this.scale;
    let size = Math.max(this.width, this.height);
    let octaves = Random.log(Math.log(size) / Math.log(2));
    this.map = new PerlinNoise().noiseMapHigh(size, size, octaves, 1, 0.5 + 0.3 * Math.abs(Random.times(4) * 2 - 1));
    this.min = Infinity;
    this.max = -Infinity;
    for (let row of this.map) {
      for (let v of row) {
        if (this.min > v) {
          this.min = v;
        }
        if (this.max < v) {
          this.max = v;
        }
      }
    }
    this.pools = [];
    this.edges = [];
    this.ripples1 = [];
    this.ripples2 = [];
    if (level > 0) {
      this.setLevel(level);
    }
  }

  /**
   * @param {paper.Point} pos
   */
  addPool(pos) {
    this.pools.push(pos);
  }

  /**
   * @param {number} lvl
   */
  setLevel(lvl) {
    let threshold = Utils.interpolate(this.min, this.max, lvl);
    this.bitmap = new Array(this.map.length).fill(new Array(this.map[0].length).fill(false));

    let x, y;
    let rect = this.dungeon.getRect();
    for (let r of this.dungeon.rooms) {
      let r1 = new paper.Rectangle(r.point.subtract(rect.point), r.size);
      for (y = r1.top + 1; y < r1.bottom - 1; y++) {
        for (x = r1.left + 1; x < r1.right - 1; x++) {
          this.bitmap[y][x] = this.map[y][x] < threshold;
        }
      }
      for (y = r1.top + 1; y < r1.bottom - 1; y++) {
        x = r1.left;
        this.bitmap[y][x] = this.bitmap[y][x] || this.bitmap[y][x + 1];
        x = r1.right - 1;
        this.bitmap[y][x] = this.bitmap[y][x] || this.bitmap[y][x - 1];
      }
      for (x = r1.left + 1; x < r1.right - 1; x++) {
        y = r1.top;
        this.bitmap[y][x] = this.bitmap[y][x] || this.bitmap[y + 1][x];
        y = r1.bottom - 1;
        this.bitmap[y][x] = this.bitmap[y][x] || this.bitmap[y - 1][x];
      }
    }
    this.pools.forEach(pool => this.bitmap[pool.y - rect.y][pool.x - rect.x] = true);
    this.ofs = new paper.Point(0.5 / this.scale, 0.5 / this.scale);
    this.points = new Array(this.height + 1).fill(new Array(this.width + 1).fill(null));
    let segments = this.buildSegments();
    this.edges = this.linkSegments(segments);
    this.ripples1 = this.edges.map(poly => this.offset(poly, 0.2 / this.scale));
    this.ripples2 = this.edges.map(poly => this.offset(poly, 0.4 / this.scale));
  }

  /**
   * @param {number} x
   * @param {number} y
   * @return {paper.Point}
   */
  gp(x, y) {
    let p = this.points[y][x];
    if (p == null) {
      p = new paper.Point(x / this.scale + this.rect.x, y / this.scale + this.rect.y);
      p = p.add(new paper.Point({length: 0.3 / this.scale * (Random.times(3) * 2 - 1), angle: Random.float(180)}));
      if (!this.align) {
        p = p.add(this.ofs);
      }
      this.points[y][x] = p;
    }
    return p;
  }

  /**
   * @return {Segment[]}
   */
  buildSegments() {
    let segments = [];
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        if (this.bitmap[y][x]) {
          if (y == 0 || !this.bitmap[y - 1][x]) {
            segments.push(new Segment(this.gp(x, y), this.gp(x + 1, y)));
          }
          if (y == this.height - 1 || !this.bitmap[y + 1][x]) {
            segments.push(new Segment(this.gp(x + 1, y + 1), this.gp(x, y + 1)));
          }
          if (x == 0 || !this.bitmap[y][x - 1]) {
            segments.push(new Segment(this.gp(x, y + 1), this.gp(x, y)));
          }
          if (x == this.width - 1 || !this.bitmap[y][x + 1]) {
            segments.push(new Segment(this.gp(x + 1, y), this.gp(x + 1, y + 1)));
          }
        }
      }
    }
    return segments;
  }

  /**
   * @param {Segment[]} segments
   * @return {paper.Point[][]}
   */
  linkSegments(segments) {
    let list = [];
    while (segments.length > 0) {
      let segment = segments.shift();
      let poly = [segment.start, segment.end];
      while (true) {
        let toPush = null;
        for (let s of segments) {
          if (s.start.equals(poly[poly.length - 1])) {
            toPush = s;
            break;
          }
        }
        if (toPush == null) {
          break;
        }
        poly.push(toPush.end);
        Utils.arrayRemove(segments, toPush);
      }
      while (true) {
        let toUnshift = null;
        for (let s of segments) {
          if (s.end.equals(poly[0])) {
            toUnshift = s1;
            break;
          }
        }
        if (toUnshift == null) {
          break;
        }
        poly.unshift(toUnshift.start);
        Utils.arrayRemove(segments, toUnshift);
      }
      poly = Poly.resample(poly, 1);
      poly = Poly.chaikinRender(poly, false);
      poly = Poly.resample(poly, 0.5);
      poly.pop();
      poly = this.wavy(poly, 0.3);
      list.push(poly);
    }
    return list;
  }

  /**
   * @param {paper.Point[]} poly
   * @param {number} d
   * @return {paper.Point[]}
   */
  offset(poly, d=1) {
    let curve = [];
    for (let i = 0; i < poly.length; i++) {
      let t = poly[i].subtract(poly[poly.length - i - 1]);
      curve.push(poly[i].add(new paper.Point(-t.y, t.x).normalize(d)));
    }
    return curve;
  }

  /**
   * @param {paper.Point[]} poly
   * @param {number} d
   * @return {paper.Point[]}
   */
  wavy(poly, d) {
    let curve = [];
    for (let i = 0; i < poly.length; i++) {
      let t = poly[i].subtract(poly[poly.length - i - 1]);
      d = ((i & 2) == 0 ? d : -d) * (1 - Math.abs(Random.times(4) * 2 - 1)) || 1;
      curve.push(poly[i].add(new paper.Point(-t.y, t.x).normalize(d)));
    }
    return curve;
  }

  /**
   * @return {paper.Point[]} the points in any rooms.
   */
  getData() {
    if (this.bitmap == null) {
      return [];
    }
    let tiles = [];
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        if (this.bitmap[i][j]) {
          let x = j + this.rect.x;
          let y = i + this.rect.y;
          if (this.dungeon.rooms.some(room => room.contains(x, y))) {
            tiles.push(new paper.Point(x,y));
          }
        }
      }
    }
    return tiles;
  }
}


class Segment {
  /**
   * @param {paper.Point} start
   * @param {paper.Point} end
   * @return {Segment}
   */
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}


class Graph {
  constructor() {
    this.nodes = [];
  }

  /**
   * @param {Room} room
   */
  add(room) {
    let node = new GraphNode(room);
    this.nodes.push(node);
    return node;
  }

  /**
   * @param {GraphNode} node
   */
  remove(node) {
    node.unlinkAll();
    Utils.arrayRemove(this.nodes, node);
  }

  /**
   * @param {Room} room
   * @return {GraphNode}
   */
  getNode(room) {
    let nodes = this.nodes.filter(node => node.room.equals(room));
    return nodes.length > 0 ? nodes[0] : null;
  }

  /**
   * @param {GraphNode} start
   * @param {GraphNode} goal
   * @return {GraphNode[]}
   */
  aStar(start, goal) {
    let closedSet = [];
    let openSet = [start];
    let cameFrom = new Map();
    let gScore = new Map();
    gScore.set(start, 0);
    while (openSet.length > 0) {
      let current = openSet.shift();
      if (current == goal) {
        return this.buildPath(cameFrom, current);
      }
      Utils.arrayRemove(openSet, current);
      closedSet.push(current);
      let curScore = gScore.get(current);
      for (let [neighbour, edge] of current.links) {
        if (Utils.includes(closedSet, neighbour)) {
          continue;
        }
        let score = curScore + edge.price;
        if (!Utils.includes(openSet, neighbour)) {
          openSet.push(neighbour);
        } else if (score >= gScore.get(neighbour)) {
          continue;
        }
        cameFrom.set(neighbour, current);
        gScore.set(neighbour, score);
      }
    }
    return null;
  }

  /**
   * @param {Map} cameFrom
   * @param {GraphNode} current
   * @return {GraphNode[]}
   */
  buildPath(cameFrom, current) {
    let path = [current];
    while (cameFrom.get(current) !== undefined) {
      current = cameFrom.get(current);
      path.unshift(current);
    }
    return path;
  }

  /**
   * @param {GraphNode[]} path
   * @return {number}
   */
  calculatePrice(path) {
    let price = 0;
    for (let i = 1; i < path.length; i++) {
      let curr = path[i - 1];
      let next = path[i];
      price += curr.links.get(next).price;
    }
    return price;
  }
}


class GraphNode {
  /**
   * @param {Room} room
   * @return {GraphNode}
   */
  constructor(room) {
    this.links = new Map();
    this.room = room;
  }

  /**
   * @param {GraphNode} node
   * @param {any} edgeData
   * @param {number} price
   * @param {boolean} symmetrical
   */
  link(node, edgeData, price=1, symmetrical=true) {
    let edge = new GraphEdge(edgeData, price);
    this.links.set(node, edge);
    if (symmetrical) {
      node.links.set(this, edge);
    }
  }

  /**
   * @param {GraphNode} node
   * @param {boolean} symmetrical
   */
  unlink(node, symmetrical=true) {
    this.links.remove(node);
    if (symmetrical) {
      node.links.remove(this);
    }
  }

  unlinkAll() {
    let nodes = this.links.keys();
    while (nodes.hasNext()) {;
      this.unlink(nodes.next());
    }
  }
}

class GraphEdge {
  /**
   * @param {any} data
   * @param {number} price
   * @return {GraphEdge}
   */
  constructor(data, price) {
    this.data = data;
    this.price = price;
  }
}


class Planner {
  /**
   * @param {MapGenerator} dungeon
   * @return {Planner}
   */
  constructor(dungeon) {
    this.dungeon = dungeon;
    this.graph = dungeon.getGraph();
    this.wings = new Map();
    this.secrets = [];
  }

  plan() {
    this.entrance = this.dungeon.doors[0];
    this.first = this.dungeon.rooms[0];
    this.first.enviro = true;
    this.buildCulmination();
    this.buildApproach();
    this.buildSecrets();
    this.regular = this.addWing(this.first);
    this.spawnKeys();
    let nLoot = Random.log(this.normal(this.dungeon.rooms).length);
    let available = Utils.subset(this.getAvailable(), nLoot);
    for (let room of available) {
      if (!room.key && !room.event) {
        room.loot = true;
      }
    }
    available = Utils.subset(this.getAvailable(), 1);
    for (let room of available) {
      if (!room.loot && !room.key && !room.enemy) {
        room.event = true;
      }
    }
    this.rollNotes();
  }

  buildCulmination() {
    let fromNode = this.graph.getNode(this.first);
    let farthest = [];
    let maxDist = 0;
    for (let room of this.normal(this.dungeon.rooms)) {
      let path = this.graph.aStar(fromNode, this.graph.getNode(room));
      let dist = this.graph.calculatePrice(path);
      if (this.dungeon.isUnique(room)) {
        dist *= 2;
      }
      if (farthest.length == 0 || dist > maxDist) {
        farthest = [room];
        maxDist = dist;
      } else if (dist == maxDist) {
        farthest.push(room);
      }
    }
    this.last = Utils.weighted(farthest, farthest.map(r => r.area));
    this.last.enviro = true;
    this.last.enemy = true;
    this.culmination = this.addWing(this.last);
  }

  buildApproach() {
    let route = [];
    let parent = this.last.getEntrance().from;
    while (parent != null) {
      route.unshift(parent);
      parent = parent.getEntrance().from;
    }
    route = this.normal(route);
    let gate;
    if (route.length > 0) {
      let from = Random.choose(route);
      let path = this.graph.aStar(this.graph.getNode(from), this.graph.getNode(this.last));
      gate = from.getDoor(path[1].room);
      if (!gate.to.equals(this.last)) {
        this.approach = this.addWing(gate.to);
      }
      let ante = route[route.length - 1];
      if (!from.equals(ante) && Random.maybe(1 - this.approach.length / this.dungeon.rooms.length)) {
        this.ante = ante;
        this.ante.enviro = true;
        this.ante.enemy = true;
      }
    } else {
      gate = this.last.getEntrance();
    }
    gate.type = Door.SPECIAL;
    this.gateRoom = gate.from;
    if (this.gateRoom == null) {
      console.error(`buildApproach() no from in gate ${gate}`);
    } else {
      this.gateRoom.gate = true;
    }
  }

  buildSecrets() {
    let candidates = this.leaves(this.dungeon.rooms);
    Utils.arrayRemove(candidates, this.last);
    let rate = this.dungeon.tags.includes('secret') != -1 ? 2 : 1;
    for (let room of candidates) {
      if (!Random.maybe(rate * (this.dungeon.isUnique(room) ? 0.5 : 0.1))) {
        continue;
      }
      while (room != null && !room.isNormal() && room.getExits().length < 2) {
        room = room.getEntrance().from;
      }
      if (room == null || room.equals(this.last) || room.getExits().length > 1) {
        continue;
      }
      room.enviro = true;
      if (Random.maybe(1/3)) {
        room.loot = true;
      } else {
        room.event = true;
      }
      let parent = room.getEntrance().from;
      while (!parent.isNormal() && parent.getExits().length == 1) {
        room = parent;
        parent = room.getEntrance().from;
      }
      let wings = this.addWing(room, true);
      wings.forEach(r => r.getExits().forEach((d) => {
        if (d.type == Door.NORMAL) {
          d.type = Door.ARCHWAY;
        }
      }));
      this.secrets.push(room);
      room.getEntrance().type = Door.SECRET;
    }
  }

  spawnKeys() {
    let rooms = this.normal(this.regular);
    let leaves = this.leaves(rooms);
    this.nKeys = Random.choose([0, 0, 1, 1, 1, 1, 2, 2, 3, 3, 4]);
    if (this.nKeys > leaves.length) {
      this.nKeys = leaves.length;
    }
    Utils.subset(leaves, this.nKeys).forEach(room => room.key = true);
  }

  /**
   * @param {Room} start
   * @param {boolean} overwrite
   * @return {Room[]}
   */
  addWing(start, overwrite=false) {
    let wing = [];
    let queue = [start];
    while (queue.length > 0) {
      let room = queue.shift();
      let prevWing = this.getWing(room);
      if (overwrite || prevWing == null) {
        if (prevWing != null) {
          Utils.arrayRemove(this.wings.get(prevWing), room);
        }
        wing.push(room);
        Utils.addAll(queue, room.getExits().map(door => door.to));
      }
    }
    this.wings.set(start, wing);
    return wing;
  }

  /**
   * @param {Room} room
   * @return {Room}
   */
  getWing(room) {
    for (let [start, rooms] of this.wings) {
      if (start.equals(room) || Utils.includes(rooms, room)) {
        return start;
      }
    }
    return null;
  }

  /**
   * @param {Room} room
   * @param {boolean} hidden
   */
  hideWing(room, hidden) {
    this.wings.get(this.getWing(room)).forEach(r => r.hidden = hidden);
  }

  /**
   * Tell whether the specific room is a secret one.
   * @param {Room} room the room to check.
   * @return {boolean} whether the room is secret.
   */
  isSecret(room) {
    return Utils.includes(this.secrets, this.getWing(room));
  }

  /**
   * Tell whether the specific room is special.
   * @param {Room} room the room to check.
   * @return {boolean} whether the room is special.
   */
  isSpecial(room) {
    return room.equals(this.first) || room.equals(this.last) || room.equals(this.gateRoom)
  }

  /**
   * Find all the normal rooms from sepecific array.
   * @param {Room[]} rooms the array to search.
   * @return {Room[]} the found normal rooms.
   */
  normal(rooms) {
    return rooms.filter(room => room.isNormal());
  }

  /**
   * Find all the rooms having no exits from sepecific array.
   * @param {Room[]} rooms the array to search.
   * @return {Room[]} the found rooms.
   */
  leaves(rooms) {
    return rooms.filter(room => room.getExits().length == 0);
  }

  /**
   * Find all the available normal rooms.
   * @return {Room[]} the found rooms.
   */
  getAvailable() {
    let rooms = this.normal(this.dungeon.rooms);
    Utils.arrayRemove(rooms, this.first);
    Utils.arrayRemove(rooms, this.last);
    Utils.arrayRemove(rooms, this.gateRoom);
    Utils.arrayRemove(rooms, this.ante);
    return rooms;
  }

  rollNotes() {
    this.dungeon.story.initKeys(this);
    this.dungeon.rooms.forEach(room => room.desc = this.dungeon.story.getRoomDesc(this, room));
  }

  /**
   * @return {Room[]}
   */
  getSecrets() {
    let rooms = [];
    for (let wing of this.secrets) {
      Utils.addAll(rooms, this.wings.get(wing));
    }
    return rooms;
  }
}

function zoomCanvas(event) {
  let newZoom = paper.view.zoom;
  let oldZoom = paper.view.zoom;
  if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
    // scroll up
    newZoom = paper.view.zoom * 1.05;
  } else {
    // scroll down
    newZoom = paper.view.zoom * 0.95;
  }

  let beta = oldZoom / newZoom;

  let mousePosition = new paper.Point(event.offsetX, event.offsetY);

  //viewToProject: gives the coordinates in the Project space from the Screen Coordinates
  let viewPosition = paper.view.viewToProject(mousePosition);

  let mpos = viewPosition;
  let ctr = paper.view.center;

  let pc = mpos.subtract(ctr);
  let offset = mpos.subtract(pc.multiply(beta)).subtract(ctr);

  paper.view.zoom = newZoom;
  paper.view.center = paper.view.center.add(offset);

  event.preventDefault();
  paper.view.draw();
}

function createCanvasPanTool() {
  let tool = new paper.Tool();

  // Define a mousedown and mousedrag handler
  tool.onMouseDown = function(event) {}

  tool.onMouseDrag = function(event) {
    let offset = event.point.subtract(event.downPoint);
    paper.view.center = paper.view.center.subtract(offset);
  }

  tool.onMouseUp = function(event) {}
}


class MapGenerator {
  constructor(canvasId, opts={}, tags=[]) {
    this.roomStyles = [SMALL_ROOM, SMALL_ROOM, SMALL_ROOM, LARGE_ROOM, CORRIDOR_ROOM, JUNCTION_ROOM, JUNCTION_ROOM];
    this.rooms = [];
    this.doors = [];
    this.doorBlocks = [];
    this.planner = null;

    this.config = Object.assign({
      noteViewMode: NoteViewMode_NORMAL,
      gridMode: GridType_DOTTED,
      style: PresetMapStyle_DEFAULT,
      autoRotation: false,
      rotation: 0,
      blackAndWhite: false,
      showTitle: true,
      showWater: true,
      showProps: true,
      showCorners: true,
      showShadow: true,
      showSecrets: true,
      brushShadingStrokes: false,
      preciseShadingStrokes: true,
    }, opts);
    this.updateGridPattern();
    paper.setup(canvasId);
    $('#' + canvasId).on('mousewheel DOMMouseScroll', zoomCanvas);
    createCanvasPanTool();

    this.reset(tags);
  }

  getRect() {
    // TODO: change this.rooms to paper.Layer, then return this.rooms.bounds
    let bounds = new paper.Rectangle();
    this.rooms.forEach(room => bounds = bounds.unite(room));
    return bounds;
  }

  resolveTags(tags=[]) {
    if (tags) {
      let success = false, error = 0;
      while (!success) {
        for (let i = 0; i < 20; i++) { // try 20 times again and again ...
          this.tags = [];
          this.story = new Story(this);
          if (tags.filter(t => !this.tags.includes(t)).length <= error) {
            success = true;
            break;
          }
        }
        ++error;
      }
      tags.filter(t => !this.tags.includes(t)).forEach(t => Tags.resolve(this.tags, t));
    } else {
      this.tags = [];
      this.story = new Story(this);
    }
  }

  initParameters() {
    this.config.columnRadius = 1 / (6 + 2 * (Random.times(3) * 2 - 1));
    this.config.columnSquare = Random.maybe(0.25);
    this.config.columnShattered = this.tags.includes('crumbling') ? 0.1 : 0.0125;
    this.config.rotundaChance = this.tags.includes('round') ? 5 : this.tags.includes('square') ? 0 : 1;
    this.config.colonnadeChance = this.tags.includes('colonnades') ? 2 : 1;
    this.config.waterLevel = this.tags.includes('dry') ? 0 : this.tags.includes('flooded') ? 6 : this.tags.includes('wet') ? 3 : Math.round(Math.max(6 * Random.times(3) - 2, 0));
    if (this.config.waterLevel > 0) {
      this.story.setFlag('water');
    }
    this.config.fountainChance = this.tags.includes('tomb') ? 0.02 : 0.1;
    this.config.wellChance = this.tags.includes('dwelling') ? 0.2 : 0.02;
    this.config.tapestryChance = this.tags.includes('dwelling') ? 1 : 1/3;
    if (this.tags.includes('crumbling')) {
      this.config.tapestryChance /= 3;
    }
    if (this.tags.includes('flooded')) {
      this.config.tapestryChance /= 3;
    }
    this.config.crackChance = this.tags.includes('crumbling') ? 1/3 : 0.125;
    this.config.impassable = Random.choose([Door.PORTCULLIS, Door.BARRED]);
  }

  reset(tags=[], newDungeon=true) {
    if (newDungeon) {
      this.resolveTags(tags);
      this.initParameters();
      this.build();
      let secrets = this.planner.getSecrets();
      if (secrets.length > 0 && !this.config.showSecrets) {
        secrets.forEach(room => room.hidden = true);
      }
      this.updateDrawable();
    }
    // this.title.set_text(this.story.name); // TODO
    // this.story.set_text(this.story.hook); // TODO
    console.log('MapGenerator.reset() start drawing all...');
    this.drawAll();
    // this.recreateNotes(); // TODO
    console.log('MapGenerator.reset() DONE');
  }

  build() {
    let minNormalRooms; // <= com_watabou_dungeon_model_Dungeon.minSize
    let maxNormalRooms; // <= com_watabou_dungeon_model_Dungeon.maxSize
    if (this.tags.includes('small')) {
      minNormalRooms = 3;
      maxNormalRooms = 6;
    } else if (this.tags.includes('large')) {
      minNormalRooms = 12;
      maxNormalRooms = 25;
    } else {
      minNormalRooms = 6;
      maxNormalRooms = 15;
    }

    if (this.tags.includes('cramped')) {
      this.roomStyles = [SMALL_ROOM, SMALL_ROOM, SMALL_ROOM, CORRIDOR_ROOM, JUNCTION_ROOM, JUNCTION_ROOM];
    } else if (this.tags.includes('spacious')) {
      this.roomStyles = [SMALL_ROOM, SMALL_ROOM, LARGE_ROOM, LARGE_ROOM, CORRIDOR_ROOM, JUNCTION_ROOM];
    } else if (this.tags.includes('winding')) {
      this.roomStyles = [SMALL_ROOM, SMALL_ROOM, LARGE_ROOM, CORRIDOR_ROOM, CORRIDOR_ROOM, JUNCTION_ROOM, JUNCTION_ROOM, JUNCTION_ROOM, JUNCTION_ROOM];
    } else if (this.tags.includes('compact')) {
      this.roomStyles = [SMALL_ROOM, SMALL_ROOM, SMALL_ROOM, LARGE_ROOM];
    }

    let order;
    if (this.tags.includes('chaotic')) {
      order = [false];
    } else if (this.tags.includes('ordered')) {
      order = [true, true, true, true, true, true, false];
    } else {
      order = [true, true, true, true, false];
    }
    this.symmetry = new Deck(order);

    let iterCount = 0;
    while (iterCount < 500) { // FIXME: replace this condition to `true`
      this.rooms = [];
      this.doors = [];
      this.doorBlocks = [];
      this.roomQueue = []; // <= com_watabou_dungeon_model_Dungeon.queue
      let size = this.getRoomSize();
      let yAxis = Random.choose([Dot_UP, Dot_DOWN, Dot_LEFT, Dot_RIGHT]);
      this.queueRoom(null, new paper.Point(0, 0), yAxis, size);
      while (this.roomQueue.length > 0 && this.getNormalRoomCount() < maxNormalRooms && iterCount < 500) { // FIXME: remove condition `iterCount < 500`
        this.buildRoom();
        iterCount++;
      }
      iterCount++;
      if (this.getNormalRoomCount() >= minNormalRooms) {
        break;
      }
    }
    this.grow();
    this.planner = new Planner(this);
    this.planner.plan();
    if (this.tags.includes('multi-level')) {
      let last = this.planner.last;
      let exit = new Door(last.local2global(0, last.oHeight - 1), last, null);
      this.doors.push(exit);
    }
    while (this.createLoop() > 0) {}
    this.cleanUp();
    this.flood = new Flood(this, 0);
    this.shapeRooms();
    this.createProps();
    this.flood.setLevel(this.config.waterLevel / 10);
  }

  getRoomSize() { // checked
    let style = Random.choose(this.roomStyles);
    let size = null;
    switch (style) {
      case SMALL_ROOM:
        size = new paper.Size(Random.int(5, 9), Random.int(4, 7));
        break;
      case LARGE_ROOM:
        size = new paper.Size(Random.int(5, 11), Random.int(7, 10));
        break;
      case CORRIDOR_ROOM:
        size = new paper.Size(3, Random.int(4, 6));
        break;
      case JUNCTION_ROOM:
        size = new paper.Size(3, 3);
        break;
    }
    console.log(`getRoomSize() style=${style}, size=${size}`);
    return size;
  }

  getNormalRoomCount() { // checked <= com_watabou_dungeon_model_Dungeon.getSize()
    let count = 0;
    this.rooms.forEach(room => count += room.isNormal());
    return count;
  }

  /**
   * @param {Room} parent
   * @param {paper.Point} origin
   * @param {paper.Point} yAxis
   * @param {paper.Size} size
   * @param {number} mirror
   */
  queueRoom(parent, origin, yAxis, size, mirror=-1) {  // checked
    this.roomQueue.push({
      parent: parent,
      origin: origin,
      size: size,
      yAxis: yAxis,
      mirror: mirror
    });
  }

  buildRoom() {
    let info = this.roomQueue.shift();
    let parent = info.parent;
    let origin = info.origin;
    let yAxis = info.yAxis;
    let mirror = info.mirror;
    let w2 = info.size.width >> 1;
    let room = this.validateRoom(origin, yAxis, info.size, mirror);
    if (room != null) {
      this.addRoom(room);
      let symmRoom = this.symmetry.pick();
      let door = new Door(origin, parent, room);
      this.addDoor(door);
      if (parent == null) {
        this.doorBlocks.push(new paper.Rectangle(door.x - 1, door.y - 1, 3, 3));
      }
      let side = Random.maybe(0.5) ? 1 : -1;
      if (symmRoom) {
        if (room.isJunction() || Random.maybe(0.5)) {
          let y = Random.int(1, room.oHeight - 2);
          let size = this.getRoomSize();
          let p = room.local2global(-side * w2, y);
          let turn = -side * mirror;
          this.queueRoom(room, p, new paper.Point(-turn * yAxis.y, turn * yAxis.x), size, mirror);
          p = room.local2global(side * w2, y);
          this.queueRoom(room, p, new paper.Point(turn * yAxis.y, -turn * yAxis.x), size, -mirror);
        }
        if (!room.isJunction() && (room.isCorridor() || Random.maybe(0.1))) {
          let p = room.local2global(0, room.oHeight - 1);
          this.queueRoom(room, p, yAxis, this.getRoomSize(), mirror);
        }
      } else {
        if (Random.maybe(0.5)) {
          let p = room.local2global(side * w2, Random.int(1, room.oHeight - 2));
          this.queueRoom(room, p, new paper.Point(side * yAxis.y, -side * yAxis.x), this.getRoomSize());
        }
        if (Random.maybe(0.5)) {
          let p = room.local2global(-side * w2, Random.int(1, room.oHeight - 2));
          this.queueRoom(room, p, new paper.Point(-side * yAxis.y, side * yAxis.x), this.getRoomSize());
        }
        if (!room.isJunction() && (room.isCorridor() || Random.maybe(0.1))) {
          let p = room.local2global(Random.int(1 - w2, w2), room.oHeight - 1);
          this.queueRoom(room, p, yAxis, this.getRoomSize());
        }
      }
    }
    return room;
  }

  /**
   * @param {paper.Point} origin
   * @param {paper.Point} yAxis
   * @param {paper.Size} size
   * @param {number} mirror
   * @return {Room}
   */
  validateRoom(origin, yAxis, size, mirror=1) {  // checked
    let room = new Room(origin, yAxis, size, mirror);
    if (this.rooms.some(r => r.intersects(room, -1))) {
      return null;
    }
    if (this.doorBlocks.some(r => r.intersects(room))) {
      return null;
    }
    return room;
  }

  addRoom(room) {
    this.rooms.push(room);
    room.dungeon = this;
  }

  removeRoom(room) {
    Utils.arrayRemove(this.rooms, room);
    room.getDoors().forEach(door => this.removeDoor(door));
  }

  addDoor(door) {
    this.doors.push(door);
  }

  removeDoor(door) {
    Utils.arrayRemove(this.doors, door);
  }

  /**
   * @param {paper.Point} p
   * @return {Door}
   */
  getDoor(p) {
    let doors = this.doors.filter(door => door.equals(p));
    return doors.length > 0 ? doors[0] : null;
  }

  /**
   * @param {Room} room
   * @return {boolean}
   */
  isUnique(room) {
    return Random.maybe(1/3);
  }

  grow() {
    for (let r1 of this.rooms) {
      if ((r1.oWidth > 3 && Random.maybe(r1.oHeight / r1.oWidth)) || r1.oHeight >= 10) {
        continue;
      }

      let grown = r1.getGrown();
      let overlaps = false;
      for (let r2 of this.rooms) {
        if (!r2.equals(r1) && r2.intersects(grown, -1)) {
          overlaps = true;
          break;
        }
      }
      if (!overlaps) {
        for (let block of this.doorBlocks) {
          if (block.intersects(grown)) {
            overlaps = true;
            break;
          }
        }
      }
      if (!overlaps) {
        r1.set(grown);
        r1.oHeight++;
      }
    }
  }

  createLoop() {
    let q1 = null;
    let q2 = null;
    let wing1 = null;
    let wing2 = null;
    let intersection = null;
    let dist = 5;
    let graph = this.getGraph();
    for (let i = 0; i < this.rooms.length - 1; i++) {
      let r1 = this.rooms[i];
      let n1 = graph.getNode(r1);
      let w1 = this.planner.getWing(r1);
      let s1 = Utils.includes(this.planner.secrets, w1);
      for (let j = i + 1; j < this.rooms.length; j++) {
        let r2 = this.rooms[j];
        let n2 = graph.getNode(r2);
        let w2 = this.planner.getWing(r2);
        let s2 = Utils.includes(this.planner.secrets, w2);
        if (!w1.equals(w2) && (s1 || s2)) {
          continue;
        }
        if (n1.links.get(n2) == null) {
          let c = r1.intersect(r2);
          if (c.width == 1 && c.height >= 3 || c.height == 1 && c.width >= 3) {
            let pathLen = graph.calculatePrice(graph.aStar(n1, n2));
            if (pathLen > dist) {
              q1 = r1;
              wing1 = w1;
              q2 = r2;
              wing2 = w2;
              intersection = c;
              dist = pathLen;
            }
          }
        }
      }
    }
    if (q1 != null) {
      let door;
      if (intersection.height == 1) {
        door = new Door(
          new paper.Point(Random.int(intersection.left + 1, intersection.right - 2), intersection.top),
          q1,
          q2
        );
      } else {
        door = new Door(
          new paper.Point(intersection.left, Random.int(intersection.top + 1, intersection.bottom - 2)),
          q1,
          q2
        );
      }
      let connect = wing1.equals(wing2) && (!this.planner.wings.get(wing1).equals(this.planner.approach) || this.planner.ante == null);
      door.type = connect ? Door.autoType(q1, q2) : this.config.impassable;
      this.doors.push(door);
      return dist;
    }
    return 0;
  }

  getGraph() {
    let graph = new Graph();
    this.rooms.forEach(room => graph.add(room));

    for (let door of this.doors) {
      if (door.from == null || door.to == null) {
        continue;
      }
      let price = 1 + (door.from.isNormal() ? 1 : 0) + (door.to.isNormal() ? 1 : 0);
      graph.getNode(door.from).link(graph.getNode(door.to), door, price);
    }
    return graph;
  }

  cleanUp() {
    let updated;
    do {
      updated = false;
      for (let room of this.rooms) {
        if (!room.isNormal() && room.getDoors().length == 1) {
          this.removeRoom(room);
          updated = true;
        }
      }
    } while (updated);

    for (let room of this.rooms) {
      if (room.isNormal()) {
        continue;
      }

      let xy = room.local2global(0, room.oHeight - 1);
      if (this.getDoor(xy) != null) {
        continue;
      }

      console.log('Looking for a expected door...');
      let toCut = 0, foundDoor = false;
      for (toCut = 0; toCut < room.oHeight && !foundDoor; toCut++) { // TODO: Check why the original condition is `while(true)`
        let xy1 = room.local2global(-1, room.oHeight - 2 - toCut);
        let xy2 = room.local2global(1, room.oHeight - 2 - toCut);
        foundDoor = this.getDoor(xy1) != null || this.getDoor(xy2) != null;
      }
      if (toCut <= 0) {
        continue;
      }
      if (toCut >= room.oHeight) {
        console.warn("Couldn't find a neighbored door.");
        continue;
      }

      // To here, find a door at `toCut`

      if (Dot_UP.equals(room.yAxis)) {
        // shrink the room by moving the top border down for toCut points.
        room.top += toCut;
        room.height -= toCut;
      } else if (Dot_LEFT.equals(room.yAxis)) {
        // shrink the room by moving the left border right for toCut points.
        room.left += toCut;
        room.width -= toCut;
      } else if (Dot_DOWN.equals(room.yAxis)) {
        // shrink the room by moving the bottom border up for toCut points.
        room.height -= toCut;
      } else if (Dot_RIGHT.equals(room.yAxis)) {
        // shrink the room by moving the right border left for toCut points.
        room.width -= toCut;
      }
      // shrink the room's height in its own coordinate system.
      room.oHeight -= toCut;
    }
  }

  shapeRooms() {
    for (let room of this.rooms) {
      if (this.config.rotundaChance > 0) {
        let nDoors = room.getDoors().length;
        if (room.canBeRound() && Random.maybe((nDoors / 3) * ((room.width - 2) / room.width) * this.config.rotundaChance)) {
          room.round = true;
        }
      }
      if (room.isNormal()) {
        let kSize = 0.7 * (room.oHeight - 4) / room.oHeight + 0.3 * (room.oWidth - 4) / room.oWidth;
        let kShape = room.round ? 1 : 1.2 - room.oWidth / room.oHeight;
        if (room.oWidth == 5) {
          kSize /= 2;
        }
        if (Random.maybe(kSize * kShape * this.config.colonnadeChance)) {
          room.columns = true;
        }
      }
    }
  }

  createProps() {
    this.rooms.forEach(room => room.createProps());
  }

  updateDrawable() {
    this.rooms = this.rooms.filter(room => !room.hidden);
    this.doors = this.doors.filter(door => door.type == Door.STAIRS || door.type == Door.EXIT || Utils.includes(this.rooms, door.from) && Utils.includes(this.rooms, door.to));
    this.drawable = this.rooms.concat(this.doors);
  }

  drawAll() {
    this.recreateLayers();
    this.drawShading();
    let shapes = this.drawable.map(shape => Poly.scale(shape.getPoly(), 30));
    let seams = this.drawable.flatMap(shape => shape.getSeams().map(seam => Poly.scale(seam, 30)));
    this.drawShape(shapes, seams);
    this.drawWater(shapes);
    this.drawShadows(shapes);
    this.drawGrid();
    this.rooms.forEach((room) => {
      if (this.config.showCorners) {
        room.drawCorners(this.corners);
      }
      this.props.addChildren(room.props);
    });
    this.doors.forEach(door => door.draw(this.details, this.config));
    this.rooms.forEach(room => room.drawColonnades(this.details));
  }

  recreateLayers() {
    paper.project.clear();
    this.shading = paper.project.addLayer(new paper.Layer({name:'shading'}));
    this.shape = paper.project.addLayer(new paper.Layer({name:'shape'}));
    this.grid = paper.project.addLayer(new paper.Layer({name:'grid'}));
    this.water = paper.project.addLayer(new paper.Layer({name:'water'}));
    this.corners = paper.project.addLayer(new paper.Layer({name:'corners'}));
    this.props = paper.project.addLayer(new paper.Layer({name:'props'}));
    this.shadow = paper.project.addLayer(new paper.Layer({name:'shadow'}));
    this.details = paper.project.addLayer(new paper.Layer({name:'details'}));

    this.water.visible = this.config.showWater;
    this.corners.visible = this.config.showCorners;
    this.props.visible = this.config.showProps;
    this.shadow.visible = this.config.showShadow && !this.config.blackAndWhite;
  }

  drawShading() {
    Shading.draw(this.shading, this.drawable.map(shape => shape.getHatchingArea()), this.config);
  }

  drawShape(shapes, seams) {
    let thickness = this.config.style.hatchingStyle == 'Stonework' || this.config.style.hatchingStyle == 'Bricks' ? this.config.style.strokeNormal : this.config.style.strokeThick;
    let white = this.config.blackAndWhite ? this.config.style.colorPaper : this.config.style.colorBg;
    shapes.forEach(poly =>
      this.shape.addChild(new paper.Path({
        segments: poly,
        closed: true,
        strokeColor: this.config.style.colorInk,
        strokeWidth: thickness * 2,
        fillColor: white
      }))
    );
    seams.forEach(seam =>
      this.shape.addChild(new paper.Path({
        segments: seam,
        strokeColor: white,
        strokeWidth: 1
      }))
    );
  }

  drawWater(shapes) {
    if (shapes != null) {
      let mask = new paper.Path({
        segments: shapes[0],
        closed: true,
        fillColor: 'red'
      });
      shapes.forEach(poly => {
        let p = new paper.Path({
          segments: poly,
          closed: true,
          fillColor: 'red'
        });
        mask.unite(p);
        p.remove();
      });
      this.water.addChild(mask);
      this.water.clipped = true;
    }
    this.water.visible = this.config.showWater;
    this.updateWater();
  }

  updateWater() {
    let fillColor = this.config.blackAndWhite ? this.config.style.colorPaper : this.config.style.colorWater;
    let strokeWidth = this.config.style.strokeNormal;
    let strokeColor = this.config.style.colorInk;

    this.flood.edges.forEach(poly => {
      let smoothed = Poly.chaikinRender(poly, true, 3);
      this.water.addChild(new paper.Path({
        segments: Poly.scale(smoothed, 30),
        closed: true,
        fillColor: fillColor,
        strokeColor: strokeColor,
        strokeWidth: strokeWidth,
      }));
    });

    let pattern = new Array(9);
    for (let i = 0; i < pattern.length; i++) {
      pattern[i] = this.config.style.strokeNormal + 30 * Math.abs(Random.times(4) * 2 - 1);
    }
    this.flood.ripples1.forEach(poly => {
      let smoothed = Poly.chaikinRender(poly, true, 3);
      this.water.addChild(new paper.Path({
        segments: Poly.scale(smoothed, 30),
        strokeColor: strokeColor,
        strokeWidth: strokeWidth,
        dashArray: pattern
      }));
    });

    pattern = new Array(10);
    for (let i = 0; i < pattern.length; i+=2) {
      pattern[i] = this.config.style.strokeNormal + 30 * Math.abs(Random.times(4) * 2 - 1);
      pattern[i + 1] = this.config.style.strokeNormal + 30 * Math.abs(Random.times(4) * 2 - 1) * 5;
    }
    this.flood.ripples2.forEach(poly => {
      let smoothed = Poly.chaikinRender(poly, true, 3);
      this.water.addChild(new paper.Path({
        segments: Poly.scale(smoothed, 30),
        strokeColor: strokeColor,
        strokeWidth: strokeWidth,
        dashArray: pattern
      }));
    });
  }

  drawShadows(shapes) {
    if (this.config.style.shadowColor === '#FFFFFFFF') {
      return;
    }

    let mask = new paper.Path({
      segments: shapes[0],
      closed: true,
      fillColor: 'red'
    });
    shapes.forEach(poly => {
      let p = new paper.Path({
        segments: poly,
        closed: true,
        fillColor: 'red'
      });
      mask.unite(p);
      p.remove();
    });
    this.shadow.addChild(mask);
    this.shadow.clipped = true;

    let strokeWidth = 66 * this.config.style.shadowDist;
    this.shadow.blendMode = 'multiply';
    shapes.forEach(poly => {
      this.shadow.addChildren([
        new paper.Path({
          segments: poly,
          closed: true,
          strokeColor: this.config.style.shadowColor,
          strokeWidth: strokeWidth,
        }),
        new paper.Path({
          segments: poly,
          closed: true,
          fillColor: 'white',
        })
      ]);
    });

    this.adjustShadowsAngle();
  }

  adjustShadowsAngle() {
    let a = new paper.Point({length: 30 * this.config.style.shadowDist, angle: 45 - this.config.rotation});
    this.shadow.position = a;
    if (this.shadow.clipped) {
      this.shadow.firstChild.position = a.negate();
    }
  }

  drawGrid() {
    this.grid.removeChildren();
    this.rooms.forEach(room => room.drawGrid(this.grid));
    this.doors.forEach(door => door.drawGrid(this.grid, this.config));
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
    this.config.gridMode = mode;
    updateGridPattern();
    this.drawGrid();
  }

  updateGridPattern() {
    let config = this.config;
    if (config.gridMode == GridType_DASHED) {
      let g = 0.1 + 0.2 * Random.times(3);
      config.gridPattern = [0, g * 30, (1 - g * 2) * 30, g * 30];
    } else if (config.gridMode == GridType_SOLID) {
      config.gridPattern = [30 * Random.float(4), 15 * Math.abs(Random.times(4) * 2 - 1), 30 * Random.float(4, 8), 15 * Math.abs(Random.times(4) * 2 - 1)];
    } else {
      config.gridPattern = [config.style.strokeNormal * 0.5, config.style.strokeNormal * (3 + Random.times(3))];
    }
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
    this.config.waterLevel = level;
    this.flood.setLevel(level);
    this.updateWater();
  }

  /**
   * Load preset map style.
   * @param {Object} styleObj the preset map style.
   */
  loadPresetMapStyle(styleObj) {
    this.config.style = Object.assign({}, styleObj);
    console.log(`MapGenerator.loadPresetMapStyle() => ${JSON.stringify(this.config.style)})`);
  }

  /**
   * Apply map style.
   * @param {Object} styleObj the map style.
   */
  applyMapStyle(styleObj) {
    this.config.style = Object.assign({}, styleObj);
    console.log(`MapGenerator.applyMapStyle() => ${JSON.stringify(this.config.style)})`);
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

  /**
   * @param {string[]} tags
   */
  newDungeon(tags=[]) {
    this.reset(tags);
    this.layout();
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

  layout() { // TODO
    let bounds = new paper.Rectangle();
    paper.project.layers.forEach(layer => bounds=bounds.unite(layer.bounds));

    let scale = Math.min(1, Math.min(paper.view.size.width/bounds.width, paper.view.size.height/bounds.height));
    bounds = bounds.scale(scale);
    let offset = new paper.Point((paper.view.size.width - bounds.width)/2, (paper.view.size.height - bounds.height)/2);
    paper.project.layers.forEach(layer => layer.scale(scale).translate(offset));
  }
}
