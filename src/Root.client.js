/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {useState, Suspense, useCallback, useRef, useEffect} from 'react';
import {ErrorBoundary} from 'react-error-boundary';

import {useServerResponse} from './Cache.client';
import {LocationContext} from './LocationContext.client';
import {createBrowserHistory} from 'history';

const history = createBrowserHistory();

export default function Root({initialCache}) {
  return (
    <Suspense fallback={null}>
      <ErrorBoundary FallbackComponent={Error}>
        <Content />
      </ErrorBoundary>
    </Suspense>
  );
}

function getLocation() {
  const url = new URL(window.location);
  return url.toString().replace(url.origin, '');
}

function Content() {
  const [location, oldSetLocation] = useState(getLocation());

  const initialLoadRef = useRef(true);
  useEffect(() => {
    if (initialLoadRef.current) {
      initialLoadRef.current = false;
    } else {
      history.push(location);
    }
  });

  const setLocation = useCallback(
    /**
     *
     * @param {URL} newUrl
     */
    (newUrl) => {
      oldSetLocation(newUrl.toString().replace(newUrl.origin, ''));
    },
    [setLocation]
  );
  const response = useServerResponse(location);
  return (
    <LocationContext.Provider value={[location, setLocation]}>
      {response.readRoot()}
    </LocationContext.Provider>
  );
}

function Error({error}) {
  return (
    <div>
      <h1>Application Error</h1>
      <pre style={{whiteSpace: 'pre-wrap'}}>{error.stack}</pre>
    </div>
  );
}
