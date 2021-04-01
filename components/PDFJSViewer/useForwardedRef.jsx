import { useRef, useEffect } from 'react';
// See https://github.com/wojtekmaj/react-pdf/issues/271 for the impetus here
// And see
// https://medium.com/the-non-traditional-developer/how-to-use-the-forwarded-ref-in-react-1fb108f4e6af
// And https://github.com/wojtekmaj/merge-refs
// For what it's supposed to do

const useForwardedRef = (ref) => {
  const innerRef = useRef(null);
  useEffect(() => {
    if (!ref) {
      return;
    }
    if (typeof ref === 'function') {
      ref(innerRef.current);
    } else {
      ref.current = innerRef.current;
    }
  });

  return innerRef;
};

export default useForwardedRef;
