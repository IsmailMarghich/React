import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(
    window.location.pathname
  ); /*piece of state to track path url*/

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(
        window.location.pathname
      ); /*change state based on path url*/
    };

    window.addEventListener("popstate", onLocationChange);

    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);

  return currentPath === path
    ? children
    : null; /*change what component gets rendered based on path url*/
};

export default Route;
