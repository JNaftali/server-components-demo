// @ts-check
import {fetch} from 'react-fetch';

/**
 *
 * @param {object} props
 * @param {string} props.location
 */
export default function Router({location}) {
  const response = fetch(
    'http://bakerydemo.lanshark.com/api/v2/pages/find/?html_path=' +
      location.replace(/"/g, '')
  );
  const url = new URL(response.headers.location);
  url.host = 'bakerydemo.lanshark.com';
  url.port = '80';
  const page = fetch(url.toString()).json();
  return (
    <>
      <h1>{page.title}</h1>
      <pre>
        <code>{JSON.stringify(page, null, 2)}</code>
      </pre>
    </>
  );
}
