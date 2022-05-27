import { useState } from "react";
import PostForm from "./PostForm";
import PostInList from "./PostInList";
import "./SocialPosts.css";
export interface Post {
  id: number;
  title: string;
  thought: string;
}

export default function SocialPosts() {
  const [posts, setPosts] = useState<Post[]>([
    { id: 1, title: "Grand Circus", thought: "Grand Circus is so cool!" },
    { id: 2, title: "React", thought: "React give me power!!" },
    {
      id: 3,
      title: "Beatrice",
      thought:
        "My friend Beatrice has mad skills. She made the top 10! I'm just so proud of her!",
    },
  ]);
  const [showModel, setShowModel] = useState(false);

  const deletePost = (post: Post) => {
    const filteredPosts = posts.filter((listPost) => listPost.id !== post.id);
    setPosts(filteredPosts);
  };
  const closeModel = () => {
    setShowModel(false);
  };

  const addPost = (post: Post) => {
    setPosts([...posts, post]);
  };
  return (
    <div>
      <button className="newThoughtButton" onClick={(e) => setShowModel(true)}>
        New Thought
      </button>
      <div className="Main">
        {posts.length > 0
          ? posts.map((post, index) => (
              <PostInList key={post.id} post={post} onDelete={deletePost} />
            ))
          : "No posts exist"}
      </div>

      {!showModel || <PostForm onClose={closeModel} onSubmit={addPost} />}
    </div>
  );
}
