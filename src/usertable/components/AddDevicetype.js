import { useDeviceType } from "./getDevieType";

const AddDevicetype = (Component) => {
  return (props) => {
    return <Component {...props} deviceType={useDeviceType()} />;
  };
};

export default AddDevicetype;
