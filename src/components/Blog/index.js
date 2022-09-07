import "./style.css";
import Title from "../Title/index.js";
import Typography from "../Typography/index.js";
import Blogwrapper from "../Blogwrapper/index.js";


function Blog ()
{
  return(
    <section className="blogsection">
<Title className="title">Blog Post</Title>
<Typography type="H1">Recent News Latest Posts <span>From My Blog </span></Typography>
<div className='blog-wrapper-container'>
<Blogwrapper
 src="https://demos.codexcoder.com/labartisan/html/maxino/assets/images/blog/01.jpg"
 alt="logo"
 />
 <Blogwrapper
 src="https://demos.codexcoder.com/labartisan/html/maxino/assets/images/blog/02.jpg"
 alt="logo"
 />
 </div>
    </section>
  );
}
export default Blog;