'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const Progress = ({ children }) => {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#d80000"
        options={{ showSpinner: true }}
        shallowRouting
      />
    </>
  );
};
export default Progress;