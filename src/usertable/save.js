import { useBlockProps } from "@wordpress/block-editor";
const save = ({ attributes: { tabledata, tabletitle } }) => {
  return (
    <div {...useBlockProps.save()} className="font-Outfit">
      <button className="umar-eg-com">Click</button>
    </div>
  );
};

export default save;
