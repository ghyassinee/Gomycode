import React, { lazy, Suspense } from 'react';

const LazyFirstComp = lazy(() => import('./FirstComp'));

const FirstComp = props => (
  <Suspense fallback={null}>
    <LazyFirstComp {...props} />
  </Suspense>
);

export default FirstComp;
