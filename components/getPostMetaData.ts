import fs from "fs";
import Link from "next/link";
import matter from "gray-matter";
import { PostMetaData } from "@/components/PostMetaData";


const getPostMetaData = (): PostMetaData[] => {
    const folder = "posts/";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));

    const posts = markdownPosts.map((filename) => {
        const fileContents = fs.readFileSync(`posts/${filename}`, "utf8");
        const matterResult = matter(fileContents);
        return {
            title: matterResult.data.title,
            date: matterResult.data.date,
            subtitle: matterResult.data.subtitle,
            slug: filename.replace(".md", ""),
        };
    });

    return posts;
};

export default getPostMetaData;