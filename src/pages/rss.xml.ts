import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
import type { APIContext } from "astro";
import type { CollectionEntry } from "astro:content";

const parser = new MarkdownIt();

export async function get(context: APIContext) {
  const posts = await getCollection("posts");
  return rss({
    title: "Matt Birch: Full Stack Web Developer",
    description: `A creative web developer dedicated to crafting engaging, user-centered digital experiences.`,
    site: context.site?.toString() ?? "",
    items: posts.map((post: CollectionEntry<"posts">) => ({
      title: post.data.title,
      link: `/blog/${post.slug}`,
      pubDate: post.data.date.raw,
      content: sanitizeHtml(parser.render(post.body)),
      image: post.data.image,
    })),
  });
}
