import { useMemo } from 'react';

const useViewportDimensions = (page, scale) => {
  let style = {};
  const viewport = useMemo(() => page?.getViewport({ scale }), [page, scale]);
  const height = viewport?.height;
  const width = viewport?.width;
  if (viewport) {
    style = {
      height: `${height}px`,
      width: `${width}px`,
    };
  }
  return {
    height,
    style,
    viewport,
    width,
  };
};

export default useViewportDimensions;
