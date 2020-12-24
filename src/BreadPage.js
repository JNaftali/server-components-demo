import {fetch} from 'react-fetch';
import {wagtailConfig} from './wagtail.config';

export default function BreadPage({page}) {
  const wikipediaPage = fetch(
    `https://en.wikipedia.org/api/rest_v1/page/summary/${page.title}`
  ).json();

  const image = wikipediaPage.thumbnail;

  return (
    <>
      <h1>{page.title}</h1>
      <div>{page.introduction}</div>
      <img
        height={image.height}
        width={image.width}
        src={image.source}
        alt="bread pic"
      />
    </>
  );
}
