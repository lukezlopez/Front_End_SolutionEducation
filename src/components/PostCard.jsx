import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function PostCard({ post }) {
    return (
        <motion.article
            layout
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="card"
        >
            <Link to={`/post/${post._id}`}>
                <h3 className="text-xl font-semibold mb-2 text-textPrimary">{post.title}</h3>
                <p className="text-textSecondary text-sm mb-4 line-clamp-3">
                    {post.description || (post.content?.slice(0, 140) + "...")}
                </p>

                <div className="flex items-center justify-between mt-4">
                    <div className="text-xs text-textSecondary">Por {post.author || "Anônimo"}</div>
                    <div className="text-xs text-textSecondary">
                        {new Date(post.createdAt || Date.now()).toLocaleString("pt-BR")}
                    </div>
                </div>
            </Link>
        </motion.article>
    );
}
