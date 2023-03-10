import React ,{ useState ,useEffect} from 'react';
import './Navbar.scss';
import {Link, useLocation} from 'react-router-dom';
import newRequest from "../../utils/newRequest";
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const [active , setActive] = useState(false);
    const [open , setOpen] = useState(false);
    const navigate = useNavigate();

    const {pathname} = useLocation()

    const isActive = () => {
        scrollY > 0 ? setActive(true) : setActive(false);
    }

    useEffect(() => {
        window.addEventListener("scroll" , isActive);

        return () => {
            window.removeEventListener("scroll" , isActive)
        }
    },[])

  const currentUser = JSON.parse(localStorage.getItem("currentUser"))
  console.log("dar home currentuser chie?" , currentUser);

  const handleLogout = async () => {
    console.log("bye")
    try {
      await newRequest.post("/auth/logout");
      console.log("url is :::: " , )
      localStorage.setItem("currentUser", null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };



  return (
    <div className={active || pathname !== "/" ? "active navbar" : "navbar"}>
        <div className='container'>
            <div className='logo'>
                <Link to="/" className='link'> <span>fiverr</span></Link>
            
            <span className='dot'>.</span>
            </div>
            <div className='links'>
                <span>Fiverr Business</span>
                <span>Explore</span>
                <span>English</span>
                {!currentUser &&  <Link to="/login" className='link'>Sign in</Link>}
                {/* {!currentUser &&  <Link to="/register" className='link'>Sign up</Link>} */}
            {!currentUser?.isSeller && <span>Become a Seller</span>}
               {!currentUser && <Link to="/register" className='link'><button>Join</button></Link>}
               {currentUser && (
                <div className='user'  onClick={()=>setOpen(!open)}>
                    <img src={currentUser.img ||  "/img/noavatar.jpg"} alt="" />
                    <span>{currentUser?.username}</span>

                   {open &&  <div className='options'>
                            {currentUser?.isSeller && (
                                <>
                                <Link className='link' to="/mygigs">Gigs</Link>
                                <Link className='link' to="/add">Add New Gig</Link>
                                
                                </>
                            )
                            }
                            <Link className='link' to="orders">Orders</Link>
                            <Link  className='link'to="messages">Messages</Link>
                            <Link className='link' onClick={handleLogout}>Logout</Link>
                             </div>
                    
                    }
                    

                </div>
               )}
            </div>
        </div>


        {(active || pathname !== "/") &&
            <>
             <hr />
          <div className="menu">
            <Link className="link menuLink" to="/">
              Graphics & Design
            </Link>
            <Link className="link menuLink" to="/">
              Video & Animation
            </Link>
            <Link className="link menuLink" to="/">
              Writing & Translation
            </Link>
            <Link className="link menuLink" to="/">
              AI Services
            </Link>
            <Link className="link menuLink" to="/">
              Digital Marketing
            </Link>
            <Link className="link menuLink" to="/">
              Music & Audio
            </Link>
            <Link className="link menuLink" to="/">
              Programming & Tech
            </Link>
            <Link className="link menuLink" to="/">
              Business
            </Link>
            <Link className="link menuLink" to="/">
              Lifestyle
            </Link>
          </div>
          <hr />

            </>
        }
    </div>
  )
}

export default Navbar