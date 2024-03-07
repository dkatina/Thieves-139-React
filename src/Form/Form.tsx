import { FaFacebook, FaTwitter, FaGoogle } from "react-icons/fa";
import "./Form.css";
import { useState } from "react";

interface IPost {
    img_url: string,
    caption: string,
    location: string,
    user_id: number   
}

const Form = () => {
  const [post, setPost] = useState<IPost>({
    img_url: '',
    caption: '',
    location: '',
    user_id: 1
  });

  const createPost = async () => {
    const response = await fetch('http://127.0.0.1:5000/api/create_post', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(post)
    })
    const data = await response.json()
    console.log(data)
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await createPost()
  };

  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h1 className="login-txt">Create a Post</h1>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Image URL
            </label>
            <input
              type="text"
              className="form-control username"
              id="username"
              placeholder="Enter Image URL"
              value={post.img_url}
              onChange={(event) => setPost({...post, img_url: event.target.value})}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Caption
            </label>
            <input
              type="text"
              className="form-control password"
              id="password"
              placeholder="Enter Caption"
              value={post.caption}
              onChange={(event) => setPost({...post, caption: event.target.value})}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Location
            </label>
            <input
              type="text"
              className="form-control password"
              id="password"
              placeholder="Enter Location"
              value={post.location}
              onChange={(event) => setPost({...post, location: event.target.value})}
            />
          </div>
          <a href="#" className="text-decoration-none text-dark d-block">
            Forgot password?
          </a>
          <button type="submit" className="login-btn">
            Create Post
          </button>
        </form>
        <div className="bottom-container">
          <p>Or Sign Up Using</p>
          <FaFacebook size={40} className="me-2" />
          <FaTwitter size={40} className="me-2" />
          <FaGoogle size={40} />
          <a className="d-block text-decoration-none text-dark mt-3" href="#">
            SIGN UP
          </a>
        </div>
      </div>
    </>
  );
};
export default Form;
