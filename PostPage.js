import * as React from 'react';
import {useParams} from 'react-router-dom';
import {getPostById} from './getPosts'

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

function PostPage() {
  const params = useParams();
  const [post, setPost] = React.useState([]);
  const [images, setImages] = React.useState([]);

  React.useEffect(() => {
    async function fetchPost() {
      try {
        const res = await getPostById(params.id);
        setPost(res[0]);
        setImages(res[0].image);
      } catch (err) {
        console.log(err);
      }
    }
    fetchPost();
  }, [params.id]);

  return (
    <div>
      <div><h1>{post.title}</h1></div>
      <div><p><i>{new Date(post.date).getFullYear()} {months[new Date(post.date).getMonth()]} {new Date(post.date).getDate()}</i></p></div>
      <div><p>{post.description}</p></div>
      <div>
      {
        images.map(image => (
          <img key={image.url} src={image.url} alt={post.imageLabel} width='200px'/>
        ))
      }
      </div>
    </div>
  );
}

export default PostPage;
