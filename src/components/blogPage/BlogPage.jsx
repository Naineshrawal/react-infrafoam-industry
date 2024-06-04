import React, { useEffect,  } from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useTitle } from '../../hooks/useTitle';
import MyContext from '../../context/data/MyContext';


const BlogPage = () => {
    useTitle("Blog")

    const context = useContext(MyContext)
    
    
        const {getAllBlog} = context
    

    const {id} = useParams() 
    let blog =  getAllBlog.find(blog=>blog.id === parseInt(id))

    

    useEffect(()=>{
        window.scrollTo(0,0, )
        
    })
//     const [blog, setBlog] = useState(null)


//    useState(()=>{
//     let blog = blogList.find(blog=>blog.id===parseInt(id))
//     console.log(blog);
//     if(blog){
//             setBlog(blog)
//         }})
   

  return (
    <>
        
    {blog?

        
    <section className="section-container ">
        <Link className='flex justify-center items-center gap-1 bg-gray-400 w-32 rounded-xl mt-4' to='/blog'>
            <span className='font-bold text-xl '>	&#x2B05;</span>
            <p className='text-[#e3e3ff] hover:text-[#5d5dea]'>Go Back</p>
        </Link>
        <h1 className='text-2xl sm:text-4xl md:text-5xl font-bold text-center my-10'>{blog.blogs.title}</h1>
        <div className='px-4 sm:px-6 md:px-10 lg:px-20'>
            <img className='w-full mx-auto'  src={blog.thumbnail} alt="" />
            <div className='flex items-center gap-3 text-[#929292] '>
                <p className='font-RobotoCondensed capitalize font-medium '>{blog.blogs.category}</p>
                <div className='flex gap-1'>
                    <img width='14px'  src="../../../public/images/time-gray.svg" alt="hours" />
                    <span className='text-sm'>{blog.date}</span>
                </div>
            </div>
        </div>
        <div className='mt-10'>

            {blog.blogs.content}
        </div>

        {/* {parseInt(id) === 1 ? 
        <div className='mt-10'>
            <p className='py-4'>
                In today’s fast-paced world, achieving a good night’s sleep is more important than ever. Enter the <strong>Infrafoam</strong> mattress, a revolutionary sleep solution that promises unparalleled comfort and support. In this comprehensive guide, we will delve deep into the world of <strong>Infrafoam</strong> mattresses, exploring their unique features, benefits, and why they’re the key to a truly restful night. Join us on this journey to discover how Our mattresses are redefining the way we sleep.
            </p>
            <p className='py-4'>
                <strong>Unveil the Secret to Superior Sleep</strong>: <strong>Infrafoam</strong> mattresses are not just about sleep; they’re about the kind of sleep that leaves you feeling refreshed and revitalized. The innovative technology behind these mattresses has redefined the sleep experience, offering unparalleled comfort and support. Our Mattress adapts to your body, cradling you in a cocoon of relaxation, all while regulating your body’s temperature for the ideal sleep environment. If you’re ready to transform your nights and wake up ready to conquer the day, it’s time to discover the magic of Our mattresses
            </p>
            <p className='py-4'>
                <strong>Elevate Your Comfort, Anywhere</strong>: <strong>Infrafoam</strong> mattresses aren’t confined to the bedroom. Their versatility makes them an excellent choice for various settings. Whether you’re outfitting your home with the ultimate sleep solution, ensuring your guests enjoy a luxurious stay, or enhancing the comfort of your mobile lifestyle in an RV, Our mattresses are designed to adapt seamlessly. Wherever you are, <strong>Infrafoam</strong> technology ensures that comfort and support follow you, making every moment of rest a true delight.
            </p>
            <h2 className='text-2xl font-bold mt-6'>Reason 1: Understanding Infrafoam Technology</h2>
            <p className='py-4'>
                Our technology is at the heart of these extraordinary mattresses. In this section, we’ll unravel the science behind <strong>Infrafoam</strong>, detailing its composition and how it differs from traditional mattress materials. Get ready to explore the groundbreaking innovation that makes Us the ultimate choice for those seeking exceptional comfort
            </p>
            <h2 className='text-2xl font-bold mt-6'>Reason 2: The Benefits of Infrafoam Mattresses</h2>
            <p className='py-4'>
                Discover the myriad advantages of <strong>Infrafoam</strong> mattresses, from superior support to temperature regulation. We’ll also discuss how Our Foam adapts to your body, ensuring a personalized and relaxing experience every time you lay down to rest. Say goodbye to restless nights and wake up rejuvenated.
            </p>
            <h2 className='text-2xl font-bold mt-6'>Reason 3: Transforming Your Sleep Experience</h2>
            <img className='mt-4'  src="../../../public/images/reason-3.jpeg" alt="reason-3" />
            <p className='py-4'>
                Explore the transformative effects of <strong>Infrafoam</strong> on your sleep experience. We’ll delve into how this innovative material reduces pressure points, minimizes motion transfer, and provides a peaceful, undisturbed night’s sleep. Uncover the secrets to waking up feeling refreshed and ready to conquer the day.
            </p>
            <h2 className='text-2xl font-bold mt-6'>Reason 4: Applications Beyond the Bedroom</h2>
            <div className='w-full gap-4 flex'>
                <img className='mt-4 w-[30%]' src="../../../public/images/reason-4_1.jpeg" alt="reason-4_1" />
                <img className='mt-4 w-[30%]' src="../../../public/images/reason-4_2.jpeg" alt="reason-4_2" />
                <img className='mt-4 w-[30%]' src="../../../public/images/reason-4_3.jpeg" alt="reason-4_3" />
            </div>
            <p className='py-4'>
                <strong>Infrafoam</strong> mattresses are not limited to just the bedroom. Discover their diverse applications across different areas of your life, including guest rooms, recreational vehicles, and more. We’ll also discuss how <strong>Infrafoam</strong> technology is changing the way we think about comfort, whether you’re at home or on the go.
            </p>
            <h2 className='text-2xl font-bold mt-6'>Reason 5: Customer Testimonials</h2>
            <p className='py-4'>
             Hear from real individuals who have experienced the <strong>Infrafoam</strong> mattress difference firsthand. Through their stories, you’ll gain insights into the life-changing effects of <strong>Infrafoam</strong> technology on sleep quality and overall well-being.
            </p>
            <h2 className='text-2xl font-bold mt-6'>Reason 6: Where to Find Infrafoam Mattresses</h2>
            <p className='py-4'>
                Ready to upgrade your sleep experience? We’ll guide you on where to find <strong>Infrafoam</strong> mattresses, both online and in physical stores. Discover how to connect with reputable retailers and manufacturers to ensure you can enjoy the benefits of this cutting-edge sleep technology.
            </p>
            <h2 className='text-2xl font-bold mt-6'>Reason 7: Making the Switch to Infrafoam</h2>
            <p className='py-4'>
                As you consider making the switch to an <strong>Infrafoam</strong> mattress, we’ll provide you with practical tips and considerations. Learn how to select the right <strong>Infrafoam</strong> mattress for your unique needs and how to seamlessly integrate it into your bedroom decor.
            </p>
            <h2 className='text-2xl font-bold mt-6'>Conclusion</h2>
            <p className='py-4'>
                In conclusion, the world of sleep has been forever changed by <strong>Infrafoam</strong> mattresses. These innovative sleep solutions offer an unparalleled combination of support, comfort, and adaptability, promising a truly restful night’s sleep. Whether you’re seeking relief from sleep-related issues or simply looking to enhance your overall sleep quality, <strong>Infrafoam</strong> mattresses are here to transform your nights
            </p>
            <p className='py-4'>
                Embrace the future of sleep with <strong>Infrafoam</strong> and bid farewell to restless nights. Say hello to blissful   sleep with <strong>Infrafoam</strong> mattresses, where innovation and relaxation converge for the ultimate comfort experience.
            </p>
        </div>
        :
        <div>
            <p className='py-4'>
                Discover the groundbreaking world of Infrafoam, an innovative foam technology that is taking the comfort industry by storm, brought to you by a renowned manufacturer. In this blog, we delve deep into the science behind Infrafoam, offering a comprehensive exploration of its unique properties and composition. Learn how this cutting-edge material is engineered to adapt to your body, providing unparalleled comfort and support. Discover the diverse applications of Infrafoam across various industries, from bedding to automotive, and witness firsthand accounts through customer testimonials. Whether you’re seeking better sleep, enhanced relaxation, or superior support, Infrafoam promises to redefine your comfort experience. Find out where you can access Infrafoam products and embark on a journey to embrace the future of comfort with foam. Say goodbye to ordinary comfort and hello to the extraordinary world of foam, where innovation meets relaxation in the most extraordinary way.
            </p>
            <p className='py-4'>
                In the realm of comfort and support, one element that plays a pivotal role is the type of foam used in various products. Whether it’s a mattress, cushion, or upholstery, the quality of foam can make all the difference in your comfort experience. Today, we’ll explore the world of “Infrafoam Foam,” a groundbreaking creation by a distinguished foam manufacturer. We’ll dive deep into what makes Infrafoam Foam special and why it has become a top choice for those in search of superior comfort and reliability.
            </p>
            <h2 className='text-2xl font-bold mt-6'>Understanding Infrafoam Foam</h2>
            <p className='py-4'>
                Infrafoam Foam is a product of relentless innovation and extensive research, designed and crafted by a leading foam manufacturer. It represents a paradigm shift in foam technology, offering a level of comfort and performance that stands out from traditional foam products. At the heart of this extraordinary innovation is the use of cutting-edge foam materials.
            </p>
            
            <p className='py-4'>
                <strong>The Power of Foam</strong>
            </p>
            <p className='py-4'>
                Foam, as a material, has been gaining widespread recognition due to its exceptional qualities. It provides a unique combination of comfort, durability, and support, catering to various needs and preferences. Our Foam elevates this concept by incorporating advanced foam technology.
            </p>
            <p className='py-4'>
                Foam, as a material, has been gaining widespread recognition due to its exceptional qualities. It provides a unique combination of comfort, durability, and support, catering to various needs and preferences. Our Foam elevates this concept by incorporating advanced foam technology.
            </p>
            <p className='py-4'>
                Rather than relying on conventional foam structures, which can vary in quality, Our Foam uses a specialized blend of foam materials known for their resilience and adaptability. This ensures consistent quality and performance across all products made with Infrafoam Foam.
            </p>
            <p className='py-4'>
                <strong>Innovative Features of Infrafoam Foam</strong>
            </p>
            <div className='w-full gap-4 flex mb-6'>
                <img className='mt-4 w-[30%]' src="../../../public/images/foam-10.jpg" alt="foam-10" />
                <img className='mt-4 w-[30%]' src="../../../public/images/foam-4.png" alt="foam-4" />
                <img className='mt-4 w-[30%]' src="../../../public/images/foam_8.png" alt="foam-8" />
            </div>
            
            
                <div className='ml-4 sm:ml-6 md:ml-20'>
                <p ><strong>1.Exceptional Comfort:</strong>Our Foam is celebrated for its superior cushioning and contouring properties. It conforms to your body’s shape, providing an unparalleled level of comfort and pressure relief. </p>
                <p ><strong>2.Durability:</strong> Durability is a key concern when choosing foam products. our Foam’s unique composition is designed for long-lasting performance, ensuring that your products stay comfortable and supportive over time.</p>
                <p ><strong>3.Temperature Neutrality:</strong> One of the standout features of Infrafoam Foam is its ability to maintain a neutral temperature. Unlike some foams that can trap heat, Our Foam is engineered to dissipate heat, ensuring you stay cool and comfortable.</p>
                <p ><strong>4.Versatility:</strong> Our Foam is suitable for a wide range of applications, from mattresses and pillows to seat cushions and upholstery. Its adaptability makes it a top choice for both residential and commercial use.</p>
                <p ><strong>5.Environmentally Friendly:</strong> The foam manufacturer behind Foam prioritizes sustainability. Their production processes are eco-friendly, and the foam itself is often recyclable, contributing to a greener future.</p>
                </div>
                
            
            <p className='py-4'>
                Choosing the Right Foam Manufacturer
            </p>
            <p className='py-4'>
                When considering products made with Infrafoam Foam, it’s crucial to select a reputable foam manufacturer. Look for a manufacturer with a strong track record of quality and customer satisfaction. A trustworthy foam manufacturer will stand behind their products, offering warranties and guarantees to ensure your peace of mind.
            </p>
            <p className='py-4'>
                In conclusion, we represents a revolution in comfort and support. Its innovative use of advanced foam materials ensures an unparalleled level of quality, making it the perfect choice for a wide range of applications. When seeking foam-based products, be sure to explore options from a reputable foam manufacturer that values excellence and customer satisfaction. Experience the next level of comfort and innovation with Infrafoam Foam – where comfort meets performance!
            </p>
        </div>
        } */}
    </section>
    :
    <h1>Not Found</h1>
    }
    </>
  )
}

export default BlogPage
