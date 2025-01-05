export default async function BlogDetails({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const blogId = (await params).blogId;
  return (
    <div>
      <h3>The product id is {blogId}</h3>
    </div>
  );
}
