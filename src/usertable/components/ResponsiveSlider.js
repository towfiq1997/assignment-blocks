import { useDeviceType } from "./getDevieType";
import { RangeControl } from "@wordpress/components";

const ResponsiveSlider = (props) => {
  const deviceType = useDeviceType();
  const output = {};

  output.Desktop = (
    <>
      <RangeControl
        label="Columns"
        value={parseInt(props.data.desktop.value)}
        onChange={(value) =>
          props.setAttributes({ [props.data.desktop.label]: value })
        }
        min={2}
        max={100}
      />
    </>
  );

  output.Tablet = (
    <>
      <RangeControl
        label="Columns"
        value={parseInt(props.data.tablet.value)}
        onChange={(value) =>
          props.setAttributes({ [props.data.tablet.label]: value })
        }
        min={2}
        max={100}
      />
    </>
  );

  output.Mobile = (
    <>
      <RangeControl
        label="Columns"
        value={parseInt(props.data.mobile.value)}
        onChange={(value) =>
          props.setAttributes({ [props.data.mobile.label]: value })
        }
        min={2}
        max={100}
      />
    </>
  );

  return (
    <div className="responsive-slider">
      {output[deviceType] ? output[deviceType] : output["Desktop"]}
    </div>
  );
};

export default ResponsiveSlider;
