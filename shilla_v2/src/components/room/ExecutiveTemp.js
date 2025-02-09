// import Header from '../common/Header';
// import Footer from '../common/Footer';
import { Outlet } from 'react-router-dom';

function ExecutiveTemp() {
    return (
        <>
            {/* <Header /> */}
            <Outlet />
            {/* <Footer /> */}
        </>
    );
}

export default ExecutiveTemp;