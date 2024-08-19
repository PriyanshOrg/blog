import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetaData from "@/components/getPostMetaData";

const getPostContent = (slug: string) => {
    const folder = "posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
};

export const generateStaticParams = async () => {
    const posts = getPostMetaData();
    return posts.map((post) => ({
        slug: post.slug,
    }));
};

const PostPage = (props: any) => {
    const slug = props.params.slug;
    const post = getPostContent(slug);

    return (
        <div className="bg-gray-900 text-gray-100 p-6">
            <h1 className="text-4xl font-bold text-purple-400 mb-4">
                {post.data.title}
            </h1>
            <article className="prose prose-invert lg:prose-xl max-w-none">
                <Markdown>{post.content}</Markdown>
            </article>
        </div>
    );
};

export default PostPage;