import React, { useState, useEffect } from 'react';
import Child from './Posts';
import axios from 'axios';
import { Button } from "reactstrap";

const Parent = () => {

 const [posts, setPosts] = useState([]);
 const [loading, setLoading] = useState(false);
 const [visible, setAlertVisibility] = useState(false);
 const [nbPosts] = useState(2);


useEffect( () => {

const fetchPosts = async () => {
    setLoading(true);
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setPosts(res.data);
    setLoading(false);
  }

  fetchPosts();

}, []);


 

useEffect(() => {
    setAlertVisibility(visible);
  }, [visible]);

  if (!visible) return <Button color="primary" onClick={() => setAlertVisibility(!visible)}>
                  Show Posts
            </Button>;

 
    return (
    
        <div>
                <Button color="primary" onClick={() => setAlertVisibility(!visible)}>
                  Show Posts
            </Button>
                  <Child 
                      nbPosts= {nbPosts}
                      posts={posts} 
                      loading={loading} 
                    />
      
        </div>
                    );
    

};



export default Parent;