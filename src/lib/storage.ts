import {Post} from "@/data/posts";

const STORAGE_KEY= "posts";

export function getPosts(): Post[]{
    if (typeof window === "undefined") return [];
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
}

export function savePosts(posts: Post[]){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
}