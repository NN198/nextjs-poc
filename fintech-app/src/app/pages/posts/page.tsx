import React from 'react';


const getPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data.map((post:any) => post.title);
  };


export default async function Posts() {
    let posts = await getPosts();

    return (
        <div>
            <p className="text-3xl">
                Posts
            </p>
            <ul className = "list-disc pl-6 mt-4 space-y-2">
                {
                    posts.map((post:any, id:any) => (<li key={id}>
                        {post}
                    </li>))
                }
            </ul>
        </div>
    )
}

