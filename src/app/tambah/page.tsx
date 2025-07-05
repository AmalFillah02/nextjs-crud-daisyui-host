"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getPosts, savePosts } from "@/lib/storage";
import { Post } from "@/data/posts";
import toast from "react-hot-toast";

export default function TambahPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const posts = getPosts();
    const newPost: Post = {
      id: Date.now(), // ID unik
      title,
      content,
    };
    const updatedPosts = [...posts, newPost];
    savePosts(updatedPosts);

    toast.success('Data berhasil ditambahkan');
    router.push("/");
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Tambah Post Baru</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          className="input input-bordered w-full"
          placeholder="Judul"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          className="textarea textarea-bordered w-full"
          placeholder="Konten"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
        <button type="submit" className="btn btn-primary">Simpan</button>
      </form>
    </div>
  );
}