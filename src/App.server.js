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
import Link from './Link.client';

export default function App({pathname}) {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/">Go home</Link>
          </li>
          <li>
            <Link href="/breads">Go to breads</Link>
          </li>
        </ul>
      </nav>
      <Suspense fallback={<div>boop</div>}>
        <Router pathname={pathname} />
      </Suspense>
    </>
  );
}
