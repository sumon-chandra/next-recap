export default async function BlogComments({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const blogId = (await params).blogId;
  return (
    <div>
      <h3>List of comments for Blog ID {blogId}</h3>
    </div>
  );
}
