/*
 * action types
 */

export const ADD_ITEM = 'ADD_ITEM';

/*
 * action creators
 */

export function addItem(text) {
  return { type: ADD_ITEM, text }
}