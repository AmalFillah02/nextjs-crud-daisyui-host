"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Post } from "@/data/posts";
import { getPosts } from "@/lib/storage";

export default function DetailPostPage() {
  const { id } = useParams();
  const postId = parseInt(id as string);
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const posts = getPosts();
    const found = posts.find((p) => p.id === postId);
    setPost(found || null);
  }, [postId]);

  if (!post) {
    return <div className="p-8 text-center text-red-500">Post tidak ditemukan.</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-lg">{post.content}</p>
    </div>
  );
}