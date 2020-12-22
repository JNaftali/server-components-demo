export default function BreadPage({page}) {
  return (
    <>
      <h1>{page.title}</h1>
      <div>{page.introduction}</div>
    </>
  );
}
