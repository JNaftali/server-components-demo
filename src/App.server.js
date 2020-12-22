/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
// @ts-check
import {Suspense} from 'react';

import Router from './Router.server';

export default function App({location}) {
  return (
    <Suspense fallback={<div>boop</div>}>
      <Router location={location} />
    </Suspense>
  );
}
