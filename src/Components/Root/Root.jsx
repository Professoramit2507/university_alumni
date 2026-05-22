import Navbar from '../Layout/Navber';
import { Outlet } from 'react-router';
import Footer from '../Layout/Footer';

const Root = () => {
    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Root;