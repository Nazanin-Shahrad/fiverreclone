import React ,{ useState ,useEffect} from 'react';
import './Navbar.scss';
import {Link} from 'react-router-dom';


const Navbar = () => {
    const [active , setActive] = useState(false);
    const [open , setOpen] = useState(false);

    const isActive = () => {
        scrollY > 0 ? setActive(true) : setActive(false);
    }

    useEffect(() => {
        window.addEventListener("scroll" , isActive);

        return () => {
            window.removeEventListener("scroll" , isActive)
        }
    },[])

    const currentUser = {
        id:1,
        username:"Nazanin Shahrad",
        isSeller:true
    }
  return (
    <div className={active ? "active navbar" : "navbar"}>
        <div className='container'>
            <div className='logo'>
                <Link to="/" className='link'> <span>fiverr</span></Link>
            
            <span className='dot'>.</span>
            </div>
            <div className='links'>
                <span>Fiverr Business</span>
                <span>Explore</span>
                <span>English</span>
                <span>Sign in</span>
            {!currentUser.isSeller && <span>Become a Seller</span>}
               {!currentUser &&  <button>Join</button>}
               {currentUser && (
                <div className='user'  onClick={()=>setOpen(!open)}>
                    <img src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <span>{currentUser?.username}</span>

                   {open &&  <div className='options'>
                            {currentUser?.isSeller && (
                                <>
                                <span>Gigs</span>
                                <span>Add New Gig</span>
                                
                                </>
                            )
                            }
                            <span>Orders</span>
                            <span>Messages</span>
                            <span>Logout</span>
                             </div>
                    
                    }
                    

                </div>
               )}
            </div>
        </div>


        {active &&
            <>
            <hr/>
            <div className='menu'>
                <span>test</span>
                <span>test2</span>

            </div>

            </>
        }
    </div>
  )
}

export default Navbar