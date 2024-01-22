import React from 'react'
import { useParams } from 'react-router-dom'
import Review from './Review';
import PopularPost from './PopularPost'
import Tags from './Tags'
import PageHeader from '../components/PageHeader'
import ProductDisplay from './ProductDisplay';
import data from "/public/products.json"

const SpecificProduct = () => {
    const [product, setProduct] = React.useState(data)
    const { id } = useParams()

    // React.useEffect(() => {
    //     fetch("/products.json")
    //         .then(res => res.json())
    //         .then(data => setProduct(data))
    // }, [])

    const result = product.filter((product) => product.id === id)

    return (
        <div>
            <PageHeader title={"Our Product Detail"} curPage={"Shop/Specific Product"} />
            <div className='shop-single padding-tb aside-bg'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className='col-lg-8 col-12'>
                            <article>
                                <div className='product-details'>
                                    <div className='row align-items-center'>
                                        <div className='col-md-6 col-12'>
                                            <div className='product-thumb'>
                                                <div className='swiper-container pro-single-to p'>
                                                    
                                                        {
                                                            result.map((item, i) => (
                                           
                                                                    <div key={i} className="single-thumb">
                                                                        <img src={item.img} alt="" />
                                                                    </div>
                                                          
                                                            ))
                                                        }
                                                    <div className='pro-single-next'>
                                                        <i className='icofont-rounded-left'>
                                                        </i>
                                                    </div>
                                                    <div className='pro-single-prev'>
                                                        <i className='icofont-rounded-right'>
                                                        </i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-6 col-12'>
                                            <div className="post-content">
                                                <div>
                                                    {
                                                        result.map((item) => (
                                                            <ProductDisplay key={item.id} item={item}/>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Reviews */}
                                <div className='review'>
                                    <Review/>
                                </div>
                            </article>
                        </div>
                        <div className='col-lg-4 col-12'>
                            <aside className='ps-lg-4'>
                                <PopularPost/>
                                <Tags/>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SpecificProduct 