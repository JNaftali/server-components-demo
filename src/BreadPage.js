import {fetch} from 'react-fetch';

/**
 *
 * @param {string} thing
 */
function getImage(thing) {
  const response = fetch(
    `https://en.wikipedia.org/api/rest_v1/page/summary/${thing}`
  );

  if (response.status >= 300) return undefined;

  const wikipediaPage = response.json();

  if (wikipediaPage) return wikipediaPage.thumbnail;
}

export default function BreadPage({page}) {
  const image = getImage(page.title);

  return (
    <>
      <h1>{page.title}</h1>
      <div>{page.introduction}</div>
      {image && (
        <img
          height={image.height}
          width={image.width}
          src={image.source}
          alt="bread pic"
        />
      )}
    </>
  );
}
