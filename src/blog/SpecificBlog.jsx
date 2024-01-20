import React from 'react'
import blogList from '../utilis/blogdata'
import { useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Tags from '../shop/Tags'
import PopularPost from '../shop/PopularPost'

const socialList = [
  {
    link: "#",
    iconName: "icofont-facebook",
    className: "facebook",
  },
  {
    link: "#",
    iconName: "icofont-twitter",
    className: "twitter",
  },
  {
    link: "#",
    iconName: "icofont-linkedin",
    className: "linkedin",
  },
  {
    link: "#",
    iconName: "icofont-instagram",
    className: "instagram",
  },
  {
    link: "#",
    iconName: "icofont-pinterest",
    className: "pinterest",
  },
];

const SpecificBlog = () => {
  const [blog, setBlog] = React.useState(blogList)
  const { id } = useParams()
  const result = blog.filter((product) => product.id === Number(id))

  return (
    <div>
      <PageHeader title={"Blog Page"} curPage={"Blog/Blog Details"} />
      <div className="blog-section blog-single padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          {
                            result.map((item) => (
                              <div key={item.id}>
                                <div className="post-thumb">
                                  <img src={item.imgUrl} alt="" className='w-100' />
                                </div>
                                <div className="post-content">
                                  <h3>{item.title}</h3>
                                  <div className="meta-post">
                                    <ul className='lab-ul'>
                                      {
                                        item.metaList.map((val, i) => (
                                          <li key={i}>
                                            <i className={val.iconName}>
                                              {val.text}
                                            </i>
                                          </li>
                                        ))
                                      }
                                    </ul>
                                  </div>
                                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad eveniet nisi minima quo, aspernatur ab sequi, enim nemo iusto deleniti nobis libero numquam non commodi laboriosam, sit rerum quasi porro.
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad eveniet nisi minima quo, aspernatur ab sequi, enim nemo iusto deleniti nobis libero numquam non commodi laboriosam, sit rerum quasi porro
                                  </p>

                                  <blockquote>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad eveniet nisi minima quo, aspernatur ab sequi, enim nemo iusto deleniti nobis libero numquam non commodi laboriosam, sit rerum quasi porro</p>
                                    <cite>
                                      <a href="#">...Melissa Hunter</a>
                                    </cite>
                                  </blockquote>
                                  <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga cupiditate impedit sit quidem nemo vitae cumque! Molestiae, provident quo, nemo esse illum omnis nisi dolore ea error eius officiis odit.
                                  </p>
                                  <img src="/src/assets/images/blog/single/01.jpg" alt="" />
                                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam ut minima ea iste, repellendus sed. Quidem non quae, reiciendis nostrum labore quaerat fuga inventore, magni pariatur itaque rerum! Sapiente, doloribus!</p>

                                  <div className="video-thumb">
                                    <img src="/src/assets/images/blog/single/02.jpg" alt="" />
                                    <a href="https://youtube.com" className='video-button popup' target='_blank'>
                                      <i className='icofont-ui-play'></i>
                                    </a>
                                  </div>
                                  <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sed sequi deserunt suscipit, nisi unde provident error eaque rerum dolorum neque dicta. Praesentium necessitatibus officiis, dolor inventore quos labore dicta.
                                  </p>
                                  <div className="tags-section">
                                    <ul className='tags lab-ul'>
                                      <li>
                                        <a href="$">Agency</a>
                                        <a href="$">Business</a>
                                        <a href="$">Personal</a>
                                      </li>
                                    </ul>
                                    <ul className='lab-ul social-icons'>
                                      {
                                        socialList.map((val,i)=>(
                                          <li key={i}>
                                            <a href="#" className={val.className}>
                                              <i className='val.iconName'></i>
                                            </a>
                                          </li>
                                        ))
                                      }
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            ))
                          }
                        </div>
                      </div>
                    </div>
                    <div className="navigations-part">
                      <div className="left">
                        <a href="#" className='prev'>
                          <i className='icofont-double-left'></i>
                          Previous Blog
                        </a>
                        <a href="#" className='title'>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, dignissimos?
                        </a>
                      </div>
                      <div className="right">
                        <a href="#" className='prev'>
                          <i className='icofont-double-right'></i>
                          Next Blog
                        </a>
                        <a href="#" className='title'>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, dignissimos?
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {/* right side */}
            <div className="col-lg-4 col-12">
              <aside>
                <Tags/>
                <PopularPost/>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpecificBlog