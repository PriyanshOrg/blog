import Link from "next/link";
import { PostMetaData } from "./PostMetaData";

const PostPreview = (props: PostMetaData) => {
    return (
        <div className="border border-gray-700 p-4 rounded-md shadow-md bg-gray-800 hover:bg-gray-700 transition-colors duration-200">
            <Link href={`./${props.slug}`}>
                <h2 className="font-bold text-purple-400 hover:underline hover:text-purple-300">
                    {props.title}
                </h2>
            </Link>
            <p className="text-sm text-gray-400 mt-2">{props.date}</p>
            <p className="text-gray-300 mt-2">{props.subtitle}</p>
        </div>
    );
};

export default PostPreview;