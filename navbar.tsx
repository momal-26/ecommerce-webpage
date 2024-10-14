import Link from "next/link";
import React from "react";

const NavBar= ()  => {
return(
<div className="hidden lg:block">
       <div className="container">
            <div className=" flex w-fit gap-10 mx-auto font-medium py-4 text-teal-800" >
             <Link className="navbar__link relative" href="#">HOME</Link>
              <Link className="navbar__link relative" href="#">PRODUCTS</Link>
              <Link className="navbar__link relative" href="#">CONTACTUS</Link>
             </div>
        </div>

</div>
)
};

export default NavBar;