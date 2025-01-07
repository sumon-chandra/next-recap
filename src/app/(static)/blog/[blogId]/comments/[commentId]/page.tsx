import { notFound } from "next/navigation";

export default async function CommentDetails({
  params,
}: {
  params: Promise<{ commentId: string; blogId: string }>;
}) {
  const commentId = (await params).commentId;
  const blogId = (await params).blogId;

  if (parseInt(commentId) > 100) {
    notFound();
  }
  return (
    <div>
      <h3>
        Comment ID {commentId} for Blog ID {blogId}
      </h3>
    </div>
  );
}
