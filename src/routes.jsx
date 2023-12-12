import { createHashRouter } from 'react-router-dom';
import RootLayout from './layout/RootLayout/RootLayout';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Order from './pages/Order/Order';
import LogIn from './pages/LogIn/LogIn';
import SignUp from './pages/SignUp/SignUp';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Gallery from './pages/Gallery/GalleryPage';
import About from './pages/About/About';
import Mypage from './pages/MyPage/MyPage';
import EditProfile from './pages/EditProfile/EditProfile';

const router = createHashRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'cart', element: <Cart /> },
      {
        path: 'order',
        element: (
          <Order />
        ),
      },
      {
        path: 'login',
        element: (
          <LogIn />
        ),
      },
      {
        path: 'signup',
        element: (
          <SignUp />
        ),
      },
      { path: 'productdetails/:productId', element: <ProductDetails /> },
      { path: 'signup', element: <SignUp /> },
      { path: 'productdetails', element: <ProductDetails /> },
      {
        path: 'gallery',
        element: (
          <Gallery />
        ),
      },
      { path: 'about', element: <About /> },
      { path: 'mypage', element: <Mypage /> },
      { path: 'editprofile', element: <EditProfile /> },
    ],
  },
]);

export default router;
