import Link from "next/link";
import { Post } from "@/data/posts";

type Props = {
  post: Post;
  onDelete?: (id: number) => void;
};

export default function PostCard({ post, onDelete }: Props) {
  return (
    <div className="card bg-base-100 shadow-xl border border-primary">
      <div className="card-body">
        <h2 className="card-title text-secondary">{post.title}</h2>
        <p className="text-sm opacity-80">{post.content}</p>
        <div className="card-actions justify-end mt-4 flex gap-2">
          <Link href={`/detail/${post.id}`}>
            <button className="btn btn-sm btn-primary">Detail</button>
          </Link>
          <Link href={`/edit/${post.id}`}>
            <button className="btn btn-sm btn-warning">Edit</button>
          </Link>
          {onDelete && (
            <button
              onClick={() => onDelete(post.id)}
              className="btn btn-sm btn-error"
            >
              Hapus
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
