function generate_dungeon() {
  console.log('generate_dungeon');
}

function generate_with_selected_tags() {
  console.log('generate_with_selected_tags');
}

function generate_with_random_tags() {
  console.log('generate_with_random_tags');
}

function reroll_notes() {
  console.log('reroll_notes');
}

function rearrange_notes() {
  console.log('rearrange_notes');
}

function set_notes_mode(mode) {
  console.log('set_notes_mode:' + mode);
  switch (mode) {
    case 'off':
      break;
    case 'tailed':
      break;
    case 'legend':
      break;
    case 'numbers':
      break;
    case 'default':
    default:
      break;
  }
}

function rotate_to_fit(dom) {
  let doRotate = dom.checked;
  console.log('rotate_to_fit:' + doRotate);
}

function show_secret_rooms(dom) {
  let show = dom.checked;
  console.log('show_secret_rooms:' + show);
}

function show_monochrome(dom) {
  let show = dom.checked;
  console.log('show_monochrome:' + show);
}

function set_grid_mode(mode) {
  console.log('set_grid_mode:' + mode);
  switch (mode) {
    case 'off':
      break;
    case 'dashed':
      break;
    case 'solid':
      break;
    case 'dotted':
    default:
      break;
  }
}

function show_title_story_layer(dom) {
  let show = dom.checked;
  console.log('show_title_story_layer:' + show);
}

function show_water_layer(dom) {
  let show = dom.checked;
  console.log('show_water_layer:' + show);
}

function show_props_layer(dom) {
  let show = dom.checked;
  console.log('show_props_layer:' + show);
}

function show_corners_layer(dom) {
  let show = dom.checked;
  console.log('show_corners_layer:' + show);
}

function show_shadow_layer(dom) {
  let show = dom.checked;
  console.log('show_shadow_layer:' + show);
}

function save_as_png() {
  console.log('save_as_png');
}

function export_as_png(cellSize) {
  console.log('export_as_png:' + cellSize);
}

function export_as_svg() {
  console.log('export_as_svg');
}

function export_as_json() {
  console.log('export_as_json');
}

function export_as_vox() {
  console.log('export_as_vox');
}

function load_preset_style(name) {
  console.log('load_preset_style:' + name);
  switch (name) {
    case 'ancient':
      break;
    case 'blackboard':
      break;
    case 'modern':
      break;
    case 'default':
    default:
      break;
  }
}

function loadMapStyle() {
  console.log('loadMapStyle');
}

function saveMapStyle() {
  console.log('saveMapStyle');
}

function applyMapStyle() {
  console.log('applyMapStyle');
}
