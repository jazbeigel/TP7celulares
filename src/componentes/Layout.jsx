import Header from "./Header/Header.jsx";
import Footer from './Footer.jsx';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <Header />
      <main className="container"><Outlet /></main>
      <Footer/>
    </>
  );
}
