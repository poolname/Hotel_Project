// import Header from '../common/Header';
// import Footer from '../common/Footer';
import { Outlet } from 'react-router-dom';

function SuiteTemp() {
    return (
        <>
            {/* <Header /> */}
            <Outlet />
            {/* <Footer /> */}
        </>
    );
}

export default SuiteTemp;