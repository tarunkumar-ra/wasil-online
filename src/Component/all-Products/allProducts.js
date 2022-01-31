import  React from "react";

import  style  from "../all-Products/allProducts.module.scss";

const  AllProducts = ()  => {

    return(
             <>
             <div className={ style.bg_border } >
             <div  className="container">
                 <div  className={ style.AllProducts_images_contents } >
                 
                    <div   className={ style.pro_details_images } >
                            <div  className={ style.store_category } >
                            <ul>
                                <li  className={  style.category }  >Store Category</li>
                                <li>Clothing & Apparel</li>
                                <li>Consumer Electrics</li>
                                <li>Computers & Technologies</li>
                                <li>Garden & Kitchen</li>
                                <li>Health & Beauty</li>
                                <li>Speakers</li>
                                <li>Calculators</li>
                            </ul>
                            </div>
                         <div  className={ style.banner_images } ><img src={ process.env.PUBLIC_URL+"items/side-banner.png" }  alt="side-banner.png"  /></div>
                    </div>
                 
                    <div  className={ style.AllProducts_images } >
                         <div className={ style.wasil_online }  >
                         <img  src={ process.env.PUBLIC_URL+"items/MyStore.png" }  alt="MyStore.png" />
                          <h1>Wasil-Online</h1>
                         </div>



                    </div>

                 </div>
             </div>
             </div>
             </>
          );

} 
export default  AllProducts;