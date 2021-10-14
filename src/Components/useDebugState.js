import React, { useState, useEffect } from 'react';

const useDebugState = (descriptor, value) => {
  const [state, setState] = useState(value);

  useEffect(() => {
    console.log({ descriptor });
  }, [state]);

  return { state, setState };
};

export default useDebugState;
