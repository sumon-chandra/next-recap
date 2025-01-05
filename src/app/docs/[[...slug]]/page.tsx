export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;

  if (slug?.length === 2) {
    return (
      <div>
        <h3>
          Viewing docs for feature {slug[0]} and segment {slug[1]}
        </h3>
      </div>
    );
  } else if (slug?.length === 1) {
    return (
      <div>
        <h3>This is the docs for feature {slug[0]}</h3>
      </div>
    );
  }
  return (
    <div>
      <h3>Hello</h3>
    </div>
  );
}
