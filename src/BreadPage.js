export default function BreadPage({page}) {
  return (
    <>
      <h1>{page.title}</h1>
      <div>{page.introduction}</div>
      <img
        height="375"
        width="500"
        src={`http://localhost:8000${page.image.meta.download_url}`}
        alt={page.image.title}
      />
    </>
  );
}
