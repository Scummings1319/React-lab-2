import { Post } from "./SocialPosts";
import "./PostInList.css";
interface PostProps {
  post: Post;
  onDelete: (post: Post) => void;
}
export default function PostInList({ post, onDelete }: PostProps) {
  return (
    <div className="post">
      <div className="postInfo">
        <p className="postTitle">{post.title}</p>
        <p className="thoughts">{post.thought}</p>
      </div>
      <button className="trash" onClick={(e) => onDelete(post)}></button>
    </div>
  );
}
