import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { MainLayout } from './components/layout/MainLayout.jsx';
import LoginPage from './pages/auth/LoginPage.jsx'
import UserDashboardOverall from './pages/dashboard-user/UserDashboardOverall.jsx'
import RegisterPage from './pages/auth/RegisterPage.jsx';
import { store } from './redux/feature/store.js';
import VerifyCode from './pages/auth/VerifyCode.jsx';
import HomeNotLogin from './pages/home-page/HomeNotLogin.jsx';
import ProviderProfile from './pages/Provider_Profile/ProviderProfile.jsx';
import { UserSetting } from './pages/dashboard-user/UserSetting.jsx';
import ServiceProviderCard from './components/provider-components/ServiceCover.jsx';
import ServiceDetailPage from './pages/Provider_Profile/ServiceDetailPage.jsx';
import ProviderDashboardOverall from './pages/Provider_Profile/ProviderDashboardOverall.jsx';
import MyServicePage from './pages/Provider_Profile/MyServicePage.jsx';
import ProviderSettingPage from './pages/Provider_Profile/ProviderSettingPage.jsx';
import ProviderReviewPage from './pages/Provider_Profile/ProviderReviewPage.jsx';
import AddServicePage from './pages/Provider_Profile/AddServicePage.jsx';
import ProviderPassword from './pages/Provider_Profile/ProviderPassword.jsx';
import UserPasswordChange from './pages/dashboard-user/UserPasswordChange.jsx';
import UserFavoritePage from './pages/dashboard-user/UserFavoritePage.jsx';
import UserReview from './pages/dashboard-user/UserReview.jsx';
import PieChartWithCustomizedLabel from './components/common/PieChartWithCustomizedLabel.jsx';
import BasicStacking from './components/common/BasicStacking.jsx';
import AdminDashboard from './pages/admin/AdminDashboard.jsx';
import ManageUser from './pages/admin/ManageUser.jsx';
import ManageProvider from './pages/admin/MangeProvider.jsx';
import ManageService from './pages/admin/ManageService.jsx';
import ManageCategory from './pages/admin/ManageCategory.jsx';
import ManageReview from './pages/admin/ManageReview.jsx';
import { ContactUsNew } from './pages/contact-us/ContactUsNew.jsx';
import AdminSetting from './pages/admin/AdminSetting.jsx';
import AdminPassword from './pages/admin/AdminPassword.jsx';
import AboutUs from './pages/aboutUs/AboutUs.jsx';
import { Categories } from './pages/category/CategoryPage.jsx';
import { Metadata } from './lib/Metadata.jsx';
import { HelmetProvider } from 'react-helmet-async';
import { SearchFilterVertical } from './pages/search-filter/SearchFilterVertical.jsx'
import { SearchFilterHorizontal } from './pages/search-filter/SearchFilterHorizontal.jsx'
import UpdateServicePage from './pages/Provider_Profile/UpdateServicePage.jsx';
// import { NotFoundPage } from './pages/not-found/NotFoundPage.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    // errorElement: <NotFoundPage/>,
    children: [
      {
        path: '/',
        element: <HomeNotLogin/>
      },
      {
        path: "/service",
        element: <SearchFilterVertical/>
      },
      {
        path: "/service-filter",
        element: <SearchFilterHorizontal/>
      },
      {
        path: "/category",
        element: <Categories/>
      },
      {
        path: "/contact-us",
        element: <ContactUsNew/>
      },
      {
        path: "/about-us",
        element: <AboutUs/>
      },
      {
        path: "/dashboard-provider",
        element: <ProviderDashboardOverall/>
      },
      {
        path: "/provider-profile/:id",
        element: <ProviderProfile />
      },
      {
        path: "/my-service",
        element: <MyServicePage/>
      },
      {
        path: "/services/update/:serviceId",
        element: <UpdateServicePage/>
      },
      { 
        path: "/service-detail/:id",
        element: <ServiceDetailPage />
      },
      {
        path: "/provider-setting",
        element: <ProviderSettingPage/>
      },
      {
        path: "/provider-review",
        element: <ProviderReviewPage/>
      },
      {
        path: "/provider-password",
        element: <ProviderPassword/>
      },
      {
        path: "/add-service",
        element: <AddServicePage/>
      },
      {
        path: "/service-cover",
        element: <ServiceProviderCard />
      },

      
      {
        path: "/dashboard-user",
        element: <UserDashboardOverall />
      },
      {
        path: "/user-review",
        element: <UserReview/>
      },
      {
        path: "/user-setting",
        element: <UserSetting />
      },
      {
        path: "/user-password",
        element: <UserPasswordChange/>
      },
      {
        path: "/user-favorite",
        element: <UserFavoritePage/>
      },
      
    ],

  },

  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/register',
    element: <RegisterPage />
  },
  {
    path: "/verify-code",
    element: <VerifyCode />
  },
  {
    path: "/pie-chart",
    element: <PieChartWithCustomizedLabel/>
  },
  {
    path: "/basic-stacking",
    element: <BasicStacking/>
  },
  {
    path: "/admin",
    element: <AdminDashboard/>
  },
  {
    path: "/manage-user",
    element: <ManageUser/>
  },
  {
    path: "/manage-provider",
    element: <ManageProvider/>
  },
  {
    path: "/manage-service",
    element: <ManageService/>
  },
  {
    path: "/manage-category",
    element: <ManageCategory/>
  },
  {
    path: "/manage-review",
    element: <ManageReview/>
  },
  {
    path: "/admin-setting",
    element: <AdminSetting/> 
  },
  {
    path: "/admin-password",
    element: <AdminPassword/>
  },
 

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider context={Metadata}>
        <RouterProvider router={router}/>
      </HelmetProvider>
    </Provider>
  </React.StrictMode>
);
