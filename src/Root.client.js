/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {useState, Suspense, useEffect} from 'react';
import {ErrorBoundary} from 'react-error-boundary';

import {useServerResponse} from './Cache.client';
import {history} from './history';

export default function Root({initialCache}) {
  return (
    <Suspense fallback={null}>
      <ErrorBoundary FallbackComponent={Error}>
        <Content />
      </ErrorBoundary>
    </Suspense>
  );
}

function Content() {
  const pathname = usePathname();

  const response = useServerResponse({pathname});
  return response.readRoot();
}

function usePathname() {
  const [pathname, setPathname] = useState(history.location.pathname);

  useEffect(() => {
    const unlisten = history.listen(function HistoryChangeListener({location}) {
      setPathname(location.pathname);
    });
    return () => {
      unlisten();
    };
  }, []);
  return pathname;
}

function Error({error}) {
  return (
    <div>
      <h1>Application Error</h1>
      <pre style={{whiteSpace: 'pre-wrap'}}>{error.stack}</pre>
    </div>
  );
}
