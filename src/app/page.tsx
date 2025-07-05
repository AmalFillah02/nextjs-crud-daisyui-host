"use client";

import { useEffect, useState } from "react";
import PostCard from "@/components/PostCard";
import { Post } from "@/data/posts";
import { getPosts, savePosts } from "@/lib/storage";
import toast from "react-hot-toast";
import Link from "next/link";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const storedPosts = getPosts();
    setPosts(storedPosts);
  }, []);

  const handleDelete = (id: number) => {
    const confirmed = confirm("Yakin ingin menghapus post ini?");
    if (confirmed) {
      const updated = posts.filter((post) => post.id !== id);
      setPosts(updated);
      savePosts(updated);
      toast.success("Post berhasil dihapus!");
    }
  };

  return (
    <main className="min-h-screen p-8 bg-base-200">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-4xl font-black text-primary">📝 Daftar Post</h1>
          <p className="text-sm opacity-70">
            Total Post:{" "}
            <span className="badge badge-primary badge-sm">{posts.length}</span>
          </p>
        </div>
        <Link href="/tambah" className="btn btn-accent btn-md gap-2">
          <span className="text-xl">＋</span> Tambah Post
        </Link>
      </div>

      {posts.length === 0 ? (
        <div className="text-center text-neutral-content py-20">
          <h2 className="text-xl">Belum ada post.</h2>
          <p className="text-sm opacity-70">Klik &quot;Tambah Post&quot; untuk mulai menambahkan.</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </main>
  );
}