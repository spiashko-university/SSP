
export const DATA_LOADING = 'DATA_LOADING';
export const DATA_LOADED = 'DATA_LOADED';

export function loadData(data) {
  return { type: DATA_LOADED, data }
}

export function loadingData() {
  return { type: DATA_LOADING }
}