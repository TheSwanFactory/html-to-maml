#!/usr/bin/env node
import { Frame } from "hclang";
export { Frame } from "hclang";
import * as h from "himalaya";

import { translate } from "./translate";

export const convert = (html: string): string => {
  let json = h.parse(html);
  let maml = translate(json);
  return maml.toString();
};
