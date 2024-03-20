import { registerBlockType } from "@wordpress/blocks";
import edit from "./edit";
import save from "./save";

registerBlockType("assignment-blocks/usertable", {
  attributes: {
    tabletitle: {
      type: "string",
      default: "User Table",
    },
    tabledata: {
      type: "array",
    },
    fontsizeDesktop: {
      type: "string",
      default: "20",
    },
    fontsizeTablet: {
      type: "string",
      default: "15",
    },
    fontsizeMobile: {
      type: "string",
      default: "10",
    },
  },
  edit,
  save,
});
