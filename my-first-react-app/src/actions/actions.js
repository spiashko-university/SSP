
export const DATA_LOADING = 'DATA_LOADING';
export const DATA_LOADED = 'DATA_LOADED';
export const CHANGE_EDITABLE = 'CHANGE_EDITABLE';

export function loadData(data) {
  return { type: DATA_LOADED, data }
}

export function loadingData() {
  return { type: DATA_LOADING }
}

export function changeEditable(frame, value) {
  return { type: CHANGE_EDITABLE, frame, value }
}