"use client"
import { useEffect, useState } from "react";


type Post = {
    title?: string;
    description?: string;
}
// async function getPostsByID(postId: string) {
//     const response = await fetch(`http://localhost:3000/pages/api/posts/${postId}`, {
//         method: 'GET'
//     });
    
//     return response.json()
// }

export default async function PostID({params}: any) {
    // const {post} = await getPostsByID(params.id)
    const [post, setPost] = useState<Post | null>(null)

    const getPostsById = async () => {
        try {
            const response = await fetch(
                `http://localhost:3000/pages/api/posts/${params.id}`,
                {method: 'GET'}
            )
            if (response) {
                // const data = await response.json()
                //  console.log(data)
                const {post} = await response.json()
                if(post) setPost(post)
            }

        }
        catch(error){
            console.log(error);
            
        }
        
    }

    useEffect(() =>{
        getPostsById()
    }, [])
    
    return(
    <main>
        {post && <h1>{post.title}</h1>}
        {post && <p>{post.description}</p>}
        </main>
    );
}

//now how to use above server components for client side




/*

async function getPostsByID(postId: string) {
    const response = await fetch(`http://localhost:3000/pages/api/posts/${postId}`, {
        method: 'GET'
    });
    
    return response.json()
}

export default async function PostID({params}: any) {
    const {post} = await getPostsByID(params.id)
    return(
    <main>
        <h1>{post.title}</h1>
        <p>{post.description}</p>
        </main>
    );
}
*/