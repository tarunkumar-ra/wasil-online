import React , { useState } from "react";

import  style  from "../single_products_Description/description.module.scss";

const Desciption = ()  => {

const  [  descripition , setDescription  ]  = useState(true);

const  [ additional , setAdditional ] = useState(false);

const [ reviews , setReviews ]  = useState(false); 


const  handleclickdesciption  =  ()  => {

       setDescription(true);
       setAdditional(false);
       setReviews(false);

}

const  handleclickadditonal = () =>{

        setDescription(false);
        setAdditional(true);
        setReviews(false);


}

const handleclickReivews = () => {


  setDescription(false);
  setAdditional(false);
  setReviews(true);

}

    return(
            <>
            <div  className={ style.descrip_bg }>
             <div  className="container" >
             <div  className={ style.Desciption }  >
             <div  className={ style.content_related } >
                  <span  onClick={ handleclickdesciption }  className={  style.descri } >DESCRIPTION</span>
                   <span  onClick={ handleclickadditonal } className={ style.add_info }>ADDITIONAL INFORMATION</span>
                   <span onClick={ handleclickReivews } className={ style.reviews }>REVIEWS (1)</span>
                   </div>
                   <div  className={ descripition ? style.Desciption_contents  :  style.Desciption_contents2  } >
                   <p  className={ style.p1 } >Vinyl
                   5 KG
                   Orange, glossy texture,
                   Hexagonal shape
                   Product weight: 5 KG
                   </p>
                   <p className={ style.p1 }>
                   Vinyl
                   5 KG
                   Orange, glossy texture,
                   Hexagonal shape
                   Product weight: 5 KG</p>
                   </div>
      
                   <div  className={ additional ? style.Additional_information_contents : style.Additional_information_contents2  }  >
                   <p  className={ style.addtional_contents } >Lorem ipsum dolor sit amet, consectetur qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non</p>
                   </div>
      
                   <div className={ reviews ? style.Reviews_contents : style.Reviews_contents2 } >
                   <p   className={ style.review_paragrah }  >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non</p>
                   </div>
             </div>


              <div  className={ style.lastdesciption_bottom } ></div>
             </div>
             </div>
            </>
          );

}
export default Desciption;