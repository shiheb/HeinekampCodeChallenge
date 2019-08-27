import React from 'react';


const Child = ({nbPosts, posts , loading }) => {
	
	if(loading) {
		return <h2> Loading... </h2>;

	}


	return (
	
        <div>
             <ul >
       {posts.slice(0,nbPosts).map(post=> (
               
           <li key = {post.id}> {post.title} <p>{post.body}</p>
            </li>         
      
        ))}
            </ul>
       
          </div>
				    );
	

};

export default Child;