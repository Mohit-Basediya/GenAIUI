// import Menus from "./Menus";
import logo from '../../images/logo.png'
import DeepeshPhoto from '../../images/Deepesh_photo.webp'

const Sidebar = () => {

    
  return (
    <nav id="sidebar" className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
    <div className="position-sticky">
        <div className="navbar-brand">
            <img src={logo} alt="InteliGenius" /> 
        </div>
  
        <ul className="nav flex-column">
            <li className="nav-header">Tools</li>
            <li className="nav-item">
                <a className="active nav-link" href="/image_generation">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.0312 2.96875H2.96875C2.65381 2.96875 2.35176 3.09386 2.12906 3.31656C1.90636 3.53926 1.78125 3.84131 1.78125 4.15625V14.8438C1.78125 15.1587 1.90636 15.4607 2.12906 15.6834C2.35176 15.9061 2.65381 16.0312 2.96875 16.0312H16.0312C16.3462 16.0312 16.6482 15.9061 16.8709 15.6834C17.0936 15.4607 17.2188 15.1587 17.2188 14.8438V4.15625C17.2188 3.84131 17.0936 3.53926 16.8709 3.31656C16.6482 3.09386 16.3462 2.96875 16.0312 2.96875ZM16.0312 4.15625V11.7822L14.0964 9.84809C13.9861 9.73779 13.8552 9.65029 13.7111 9.5906C13.567 9.5309 13.4125 9.50018 13.2566 9.50018C13.1006 9.50018 12.9462 9.5309 12.8021 9.5906C12.658 9.65029 12.5271 9.73779 12.4168 9.84809L10.9324 11.3325L7.6668 8.06684C7.44412 7.8443 7.14219 7.7193 6.82738 7.7193C6.51257 7.7193 6.21065 7.8443 5.98797 8.06684L2.96875 11.0861V4.15625H16.0312ZM2.96875 12.7656L6.82812 8.90625L12.7656 14.8438H2.96875V12.7656ZM16.0312 14.8438H14.4452L11.7733 12.1719L13.2577 10.6875L16.0312 13.4618V14.8438ZM10.6875 7.42188C10.6875 7.24573 10.7397 7.07353 10.8376 6.92707C10.9355 6.78061 11.0746 6.66645 11.2373 6.59904C11.4 6.53164 11.5791 6.514 11.7519 6.54836C11.9246 6.58273 12.0833 6.66755 12.2079 6.79211C12.3324 6.91666 12.4173 7.07536 12.4516 7.24812C12.486 7.42089 12.4684 7.59996 12.401 7.7627C12.3335 7.92544 12.2194 8.06454 12.0729 8.1624C11.9265 8.26027 11.7543 8.3125 11.5781 8.3125C11.3419 8.3125 11.1154 8.21867 10.9484 8.05164C10.7813 7.88462 10.6875 7.65808 10.6875 7.42188Z" fill="white"/>
                        </svg>
                      Contract Document
                </a>
            </li>
        </ul>

        <ul className="nav flex-column bottom-nav">
            <li className="nav-item mb-0">
                <a className="nav-link active" href="/">
                    <span className="user-photo">
                        <img src={DeepeshPhoto} alt="photo" />
                    </span>
                    Deepesh Bhatia
                </a>
            </li>                      
        </ul>
    </div>
</nav>
  );
};

export default Sidebar;
