import { Outlet } from 'react-router-dom';

import links from '../data/links';

import Header from './Header';
import Navigation from './Navigation';

const MainLayout = () => {
  return (
    <>
      <div className="grid-wrapper">
        <header className="header">
          <Header />
        </header>
        <aside className="sidebar">
          <nav>
            <Navigation links={links} />
          </nav>
        </aside>
        <main className="main" id="mainContent">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default MainLayout;
