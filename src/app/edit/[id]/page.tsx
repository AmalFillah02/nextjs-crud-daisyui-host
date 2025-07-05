"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { getPosts, savePosts } from "@/lib/storage";
import toast from "react-hot-toast";

export default function EditPostPage() {
  const { id } = useParams();
  const router = useRouter();
  const postId = parseInt(id as string); // pastikan dikonversi ke number

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const posts = getPosts();
    const post = posts.find((p) => p.id === postId);
    if (post) {
      setTitle(post.title);
      setContent(post.content);
    } else {
      router.push("/");
    }
  }, [postId, router]);

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    const posts = getPosts();
    const updatedPosts = posts.map((p) =>
      p.id === postId ? { ...p, title, content } : p
    );
    savePosts(updatedPosts);
    toast.success("Post berhasil diupdate!");
    router.push("/");
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Post</h1>
      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          type="text"
          className="input input-bordered w-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          className="textarea textarea-bordered w-full"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-warning">Update</button>
      </form>
    </div>
  );
}