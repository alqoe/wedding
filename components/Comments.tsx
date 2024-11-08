"use client";

import { useState } from "react";
import Image from "next/image";

interface Comment {
  name: string;
  comment: string;
  avatar_url: string;
}

export default function Comments() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [error, setError] = useState("");

  const handleSubmitComment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const comment = formData.get("comment") as string;

    if (!name || !comment) {
      setError("All fields are required.");
      return;
    }

    const avatarUrl = `https://api.dicebear.com/9.x/thumbs/svg?seed=${encodeURIComponent(name.replace(" ", ""))}`;

    const newComment = {
      name,
      comment,
      avatar_url: avatarUrl,
    };

    setComments([newComment, ...comments]);
    form.reset();
    setError("");
  };

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">Wish for the couple</h3>
      <p className="text-sm text-gray-400 mb-2">{comments.length} Comments</p>

      <div className="space-y-4 max-h-80 overflow-y-auto bg-[#552020] p-4 rounded-lg">
        {comments.map((comment, index) => (
          <div key={index} className="p-2 rounded-lg flex items-start space-x-2">
            <Image
              src={comment.avatar_url}
              alt="Avatar"
              width={32}
              height={32}
              className="rounded-full"
            />
            <div>
              <p className="font-semibold text-green-500 capitalize">{comment.name}</p>
              <p className="text-gray-300">{comment.comment}</p>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmitComment} className="mt-6">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-300">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 p-2 block w-full rounded-md bg-[#552020] border-gray-600 text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="comment" className="block text-sm font-medium text-gray-300">
            Comment
          </label>
          <textarea
            id="comment"
            name="comment"
            rows={3}
            className="mt-1 block w-full rounded-md bg-[#552020] border-gray-600 text-white"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          Submit Comment
        </button>
      </form>

      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
}