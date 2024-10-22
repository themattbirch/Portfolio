import rss from "@astrojs/rss"
import { getCollection } from "astro:content"
import sanitizeHtml from "sanitize-html"
import MarkdownIt from "markdown-it"
import type { APIContext } from "astro"
import type { CollectionEntry } from 'astro:content';

const parser = new MarkdownIt();

export async function get(context: APIContext) {
    const posts = await getCollection("posts")
    return rss({
        title: "Matt Birch - Web Developer",
        description: `Transforming ideas into powerful web experiences.
        I combine technical expertise with creative problem-solving to deliver 
        websites that not only look great but perform exceptionally.`,
        site: context.site?.toString() ?? "",
        items: posts.map((post: CollectionEntry<'posts'>) => ({
            title: post.data.title,
            link: `/blog/${post.slug}`,
            pubDate: post.data.date.raw,
            content: sanitizeHtml(parser.render(post.body)),
            image: post.data.image,
        })),
    })
}