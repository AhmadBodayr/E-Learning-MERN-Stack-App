import Homepage from '../components/homepage/Homepage'
import LandingPage from "../components/landing/LandingPage";
import Pricing from "../components/pricing/Pricing";
import Layout from "../components/Layout";
import ContactUs from '../components/contactus/ContactUs';
import Features from '../components/landing/Features';
import Login from '../components/login/Login';
import Signup from '../components/signup/Signup';
import { useContext } from 'react';
import NavStateContext from '../context/NavStateContext';
import CurrentViewContext from '../context/CurrentViewContext';
import ForgetPasswordContainer from '../components/forgetPassword/ForgetPasswordContainer';
import AccountInfo from '../components/LoggedIn/AccountInfo';
const ClientPage = () => {
    const { navIdx } = useContext(NavStateContext);
    const { view } = useContext(CurrentViewContext);

    return (
        <Layout>
            <LandingPage visible={navIdx === 0} />
            <Features visible={navIdx === 0} />
            <Homepage visible={navIdx === 1} />
            <Pricing visible={navIdx === 2} />
            <ContactUs visible={navIdx === 4} />
            <Login visible={navIdx === 5} />
            <Signup visible={navIdx === 6} />
            <ForgetPasswordContainer visible={navIdx === 7} />
            <AccountInfo visible={navIdx === 8 && view === 'user'} />
        </Layout>

    )
}

export default ClientPage