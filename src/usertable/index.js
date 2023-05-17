import { registerBlockType } from "@wordpress/blocks";
import edit from "./edit";
import save from "./save";

registerBlockType('assignment-blocks/usertable', {
    attributes: {
        tabletitle: {
            type: "string",
            default: "User Table"
        },
        tabledata: {
            type: "array"
        }
    },
    edit,
    save
})