import { ThreeCircles } from 'react-loader-spinner';

const Loader = () => (
  <ThreeCircles
    height="100"
    width="100"
    color="grey"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    ariaLabel="three-circles-rotating"
    outerCircleColor=""
    innerCircleColor=""
    middleCircleColor=""
  />
);

export default Loader;
