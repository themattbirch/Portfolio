import type { BlogPost } from "@/types/blog";

export function sortPostsByDate(posts: BlogPost[]) {
    return posts.sort((a, b) => {
        const dateA = new Date(a.data.date.raw);
        const dateB = new Date(b.data.date.raw);
        return dateB.getTime() - dateA.getTime();
    });
}