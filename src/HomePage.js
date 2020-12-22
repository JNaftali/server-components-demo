export default function HomePage({page}) {
  return (
    <>
      <h1>{page.title}</h1>
      <pre>
        <code>{JSON.stringify(page, null, 2)}</code>
      </pre>
    </>
  );
}
