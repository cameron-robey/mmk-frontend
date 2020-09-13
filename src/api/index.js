//Config
import { serverPath } from './config.js';

export const get = async (path) => {
  let response = await fetch(serverPath + path);
  let json = await response.json();
  return json;
}