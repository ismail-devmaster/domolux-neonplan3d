import { DOMOLUX_COLLECTION_30 as PART1 } from "./domolux_definitions_part1.mjs";
import { DOMOLUX_COLLECTION_PART2 as PART2 } from "./domolux_definitions_part2.mjs";
import { DOMOLUX_COLLECTION_PART3 as PART3 } from "./domolux_definitions_part3.mjs";
import { DOMOLUX_COLLECTION_PART4 as PART4 } from "./domolux_definitions_part4.mjs";
import { DOMOLUX_COLLECTION_PART5 as PART5 } from "./domolux_definitions_part5.mjs";
import { DOMOLUX_COLLECTION_PART6 as PART6 } from "./domolux_definitions_part6.mjs";

export const DOMOLUX_COLLECTION_30 = [
  ...PART1,
  ...PART2,
  ...PART3,
  ...PART4,
  ...PART5,
  ...PART6
];

if (DOMOLUX_COLLECTION_30.length !== 30) {
  throw new Error(`Expected exactly 30 products, but found ${DOMOLUX_COLLECTION_30.length}`);
}
