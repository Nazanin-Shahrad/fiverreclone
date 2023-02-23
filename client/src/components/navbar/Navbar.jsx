import React ,{ useState ,useEffect} from 'react';
import './Navbar.scss';


const Navbar = () => {
    const [active , setActive] = useState(false);

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
             <span>fiverr</span>
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
                <div className='user'>
                    <img src="" alt="" />
                    <span>{currentUser?.username}</span>
                    <div className='options'>
                        {currentUser?.isSeller && (
                            <>
                            <span>Gigs</span>
                            <span>Add New Gig</span>
                            
                            </>
                        )}
                        <span>Orders</span>
                        <span>Messages</span>
                        <span>Logout</span>
                    </div>
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