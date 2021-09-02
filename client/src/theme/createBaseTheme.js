import { createTheme } from "@material-ui/core/styles";

import vhCheck from "vh-check";
import merge from "deepmerge";

const defaultOptions = {
  subtract: [],
  includeUnit: true,
};

const sum = (numbers) => {
  const reducer = (result, current) => result + current;
  return numbers.reduce(reducer, 0);
};

const verticalHeight = (v, options, vhResult) => {
  const normOptions = { ...defaultOptions, ...options };

  const height = vhResult.vh - vhResult.offset;
  const minsSum = sum(normOptions.subtract);
  const result = (v * height) / 100;
  const finalResult = result - minsSum;

  if (normOptions.includeUnit) {
    return `${finalResult}px`;
  }

  return finalResult;
};

const base = (overrides = {}) => {
  const vhResult = vhCheck();

  const options = {
    layout: {
      vh: (v, opts) => verticalHeight(v, opts, vhResult),
    },
  };

  const t = createTheme(overrides);
  return merge(t, options);
};

export default base;
