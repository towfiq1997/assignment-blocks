import { useState, useEffect } from "@wordpress/element";
import { PanelBody } from "@wordpress/components";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { TextControl } from "@wordpress/components";
import { compose } from "@wordpress/compose";
import AddDevicetype from "./components/addDevicetype";
import ResponsiveSlider from "./components/ResponsiveSlider";
import ResponsiveToggle from "./components/ResponsiveToggle";
import processCss from "./components/processCss";
const edit = ({
  attributes: { fontsizeDesktop, fontsizeTablet, fontsizeMobile },
  setAttributes,
}) => {
  console.log(processCss({ fontsizeDesktop, fontsizeTablet, fontsizeMobile }));
  const blockprops = useBlockProps();
  return (
    <div {...blockprops}>
      <InspectorControls key="setting">
        <PanelBody initialOpen={true} title="User Table">
          <ResponsiveToggle />
          <ResponsiveSlider
            data={{
              desktop: { value: fontsizeDesktop, label: "fontsizeDesktop" },
              tablet: { value: fontsizeTablet, label: "fontsizeTablet" },
              mobile: { value: fontsizeMobile, label: "fontsizeMobile" },
            }}
            setAttributes={setAttributes}
          />
        </PanelBody>
      </InspectorControls>
      <style>
        {processCss({ fontsizeDesktop, fontsizeTablet, fontsizeMobile })}
      </style>
      <button className="umar-eg-com">Click</button>
    </div>
  );
};

export default compose(AddDevicetype(edit));
