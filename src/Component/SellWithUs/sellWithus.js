import  React  from "react";

import  style  from  "../SellWithUs/sell.module.scss";

import Navigation  from "../Navbar2/navbar2";

const  SellWithUs  = () => {

    return(
                <>
                <Navigation/>
                 <div className="row" >
                  <img src={ process.env.PUBLIC_URL+"items/about-bg.7228b08cb8bdc3e03706.png" } alt="about-bg.7228b08cb8bdc3e03706.png"  className={ style.images }  />
                  <div className={ style.Million_Text } ><h2 className={ style.Shoppers_Text } >Millions Of Shoppers Can’t Wait To See What You Have In Store</h2>
                  </div>
                  <div  className={  style.sell_btn  }>
                  <div  className={ style.sell } >SELL WITH US</div>
                  </div>
                  
                  </div>
                  <div  className={ style.best_images_section } >
                   <div  className="container">
                     <div  className="row">
                     <div className="col-lg-6">
                     <div className={ style.best_images } >
                     <img src={ process.env.PUBLIC_URL+"items/open.png" }  className={ style.open_images }   alt="open.png" />
                     </div>
                     </div>
                     <div className="col-lg-6">
                     <div  className={ style.best_fees_text } >
                     <div  className={ style.best_content } >
                     <h2  className={ style.best_start } >BEST FEES TO START</h2>
                     <p  className={ style.Affordable } >Affordable, Transparent, and Secure</p>
                     <p  className={ style.cost_list } >It doesn’t cost a thing to list up your products, and you only pay after your stuff sells. It’s just a small percent of the money you earn.</p>
                     </div>

                     <div  className={ style.Power_support_lowfees_images } >
                          <div><img src={ process.env.PUBLIC_URL+"items/Powerfull.png" }  alt="Powerfull.png"  className={ style.powerfull }   /></div>
                          <div><img src={ process.env.PUBLIC_URL+"items/Support.png" }  alt="Support.png"   className={ style.support } /></div>
                          <div><img src={ process.env.PUBLIC_URL+"items/Lowfees.png" }  alt="Lowfees.png" className={ style.Lowfees }  /></div>
                     </div>
                     <div  className={ style.sellus_btn } >SELL WITH US</div>
                     </div>
                     </div>
                     </div>
                   </div> 
                   </div>
                   
            </>
          );

}
export default SellWithUs;