const CELL_SETS = 'cellSets';

/**
 * Updates the cells sets shown to the user with the hierarchy fetched
 * from the API.
 */
const CELL_SETS_LOADED = `${CELL_SETS}/loaded`;

/**
 * Signals to the UI that new cell set data is about to be loaded in.
 */
const CELL_SETS_LOADING = `${CELL_SETS}/loading`;

/**
 * Creates a new cell set.
 */
const CELL_SETS_CREATE = `${CELL_SETS}/create`;

/**
 * Updates a single cell set's properties.
 */
const CELL_SETS_UPDATE_PROPERTY = `${CELL_SETS}/updateProperty`;

/**
 * Updates the cell set hierarchy.
 */
const CELL_SETS_UPDATE_HIERARCHY = `${CELL_SETS}/updateHierarchy`;

/**
 * Updates the list of selected cell sets.
 */
const CELL_SETS_SET_SELECTED = `${CELL_SETS}/setSelected`;

/**
 * Deletes a cell set.
 */
const CELL_SETS_DELETE = `${CELL_SETS}/delete`;

/**
 * Saves all cell sets currently loaded.
 */
const CELL_SETS_SAVE = `${CELL_SETS}/save`;

/**
 * Creates an error condition in the cell set tool.
 */
const CELL_SETS_ERROR = `${CELL_SETS}/error`;

export {
  CELL_SETS_LOADING, CELL_SETS_LOADED,
  CELL_SETS_CREATE,
  CELL_SETS_UPDATE_PROPERTY, CELL_SETS_UPDATE_HIERARCHY, CELL_SETS_SET_SELECTED,
  CELL_SETS_DELETE,
  CELL_SETS_SAVE,
  CELL_SETS_ERROR,
};
