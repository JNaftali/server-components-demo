// @ts-check
import {fetch} from 'react-fetch';

import {wagtailConfig} from './wagtail.config';

/**
 *
 * @param {object} props
 * @param {string} props.location
 */
export default function Router({location}) {
  const response = fetch(
    `${wagtailConfig.domain}/api/v2/pages/find/?html_path=${location}`
  );

  if (response.status >= 500) {
    return (
      <>
        <div>Server's dead</div>
        <h1>
          {response.status} - {response.statusText}
        </h1>
      </>
    );
  }

  if (response.status === 404) {
    return <div>couldn't find wagtail page</div>;
  }

  // console.log('should be working: ', response.headers.location);

  const page = fetch(response.headers.location).json();

  const PageComponent = wagtailConfig.pageTypes[page.meta.type];
  if (PageComponent) return <PageComponent page={page} />;

  return (
    <>
      <h1>{page.title}</h1>
      <pre>
        <code>{JSON.stringify(page, null, 2)}</code>
      </pre>
    </>
  );
}
