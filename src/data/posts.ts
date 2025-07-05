export type Post = {
  id: number;
  title: string;
  content: string;
};

export const posts: Post[] = [
  { id: 1, title: "Post Pertama", content: "Ini isi post pertama." },
  { id: 2, title: "Post Kedua", content: "Ini isi post kedua." },
];