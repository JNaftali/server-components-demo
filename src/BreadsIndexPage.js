import Link from './Link.client';

export default function BreadsIndexPage({page}) {
  return (
    <>
      <h1>{page.title}</h1>
      <ul>
        {page.breads.map((bread) => (
          <li key={bread.url}>
            <Link href={bread.url}>{bread.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
