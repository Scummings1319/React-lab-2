import { useState } from "react";
import "./PostForm.css";
import { Post } from "./SocialPosts";

interface PostFormProps {
  onSubmit: (post: Post) => void;
  onClose: () => void;
}

export default function PostForm({ onSubmit, onClose }: PostFormProps) {
  const [title, setTitle] = useState("");
  const [thought, setThought] = useState("");
  return (
    <div className="postForm">
      <button className="closeButton" onClick={onClose}></button>
      <form
        onSubmit={(e) => {
          // do other stuff
          e.preventDefault();
          const id = Math.random();
          onSubmit({ id, title, thought });
        }}
      >
        <label htmlFor="title">Title</label>
        <input
          id="title"
          value={title}
          type="text"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="thought">Thought</label>

        <textarea
          id="thought"
          value={thought}
          rows={10}
          onChange={(e) => setThought(e.target.value)}
        ></textarea>
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
}
