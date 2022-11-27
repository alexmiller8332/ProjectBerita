import { TopNavLayout } from '../layout/TopNavigation';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import ForgotPassword from '../pages/ForgotPassword';
import ChangePassword from '../pages/ChangePassword';
import { ReadNewsPage } from '../pages/ReadNews(User)';
import { UserProfile } from '../pages/UserProfile';
import { UpdateUserProfile } from '../pages/UpdateUserProfile';
import { AuthorNews, CreateAuthorAccountForm, CreateNewsForm } from '../pages/UserDashboardNews';
import { SideNavBar } from '../layout/SideNavBar';
import Footer from '../layout/Footer';
import { TopNavLayoutLoggedIn } from '../layout/TopNavigationLoggedIn';
import { SubTopicTopNav } from '../layout/SubTopicTopNav';
import { TopicHome } from '../pages/TopicHome';
import { UserDashboardCreateAuthorReceivingAccount, UserDashboardAuthorReceivingAccount } from '../pages/UserDashboardAuthorReceivingAccount';
import { AuthorHasWriteNews } from '../layout/AuthorHasWriteNews';
export function MainComp() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<><TopNavLayoutLoggedIn /><Home /><Footer /></>} />
                <Route path='/topic' element={<><TopNavLayoutLoggedIn /><SubTopicTopNav /><TopicHome /> <Footer /></>} />
                <Route path='/signup' element={<><SignUp /><Footer /></>} />
                <Route path='/signin' element={<><SignIn /><Footer /></>} />
                <Route path='/forgetpassword' element={<ForgotPassword />} />
                <Route path='/changepassword' element={<ChangePassword />} />
                <Route path='/readnews' element={<><TopNavLayoutLoggedIn /><SubTopicTopNav /><ReadNewsPage /><Footer /></>} />
                <Route path='/userdashboard/userprofile' element={<><TopNavLayoutLoggedIn /><SideNavBar /><UserProfile /><Footer /></>} />
                <Route path='/userdashboard/userprofile/update' element={<><TopNavLayoutLoggedIn /><SideNavBar /><UpdateUserProfile /> <Footer /></>} />
                <Route path='/userdashboard/news' element={<><TopNavLayoutLoggedIn /><SideNavBar /><AuthorHasWriteNews /><Footer /></>} />
                <Route path='/userdashboard/news/createauthoraccount' element={<><TopNavLayoutLoggedIn /><SideNavBar /><CreateAuthorAccountForm /><Footer /></>} />
                <Route path='/userdashboard/news/createnews' element={<><TopNavLayoutLoggedIn /><SideNavBar /><CreateNewsForm /><Footer /></>} />
                <Route path='/userdashboard/authoraccountbalance/createaccountbalance' element={<><TopNavLayoutLoggedIn /><SideNavBar /><UserDashboardCreateAuthorReceivingAccount /><Footer /></>} />
                <Route path='/userdashboard/authoraccountbalance/' element={<><TopNavLayoutLoggedIn /><SideNavBar /><UserDashboardAuthorReceivingAccount /><Footer /></>} />
            </Routes>
        </Router>
    )
}