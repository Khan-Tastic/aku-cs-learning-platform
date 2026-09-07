/**
 * Main layout component
 */

import React, { ReactNode } from 'react';
import { useUIStore } from '@store/index';
import Sidebar from './Sidebar';
import Header from './Header';
import ModeBar from './ModeBar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { sidebarOpen } = useUIStore();

  return (
    <div className="flex h-screen bg-light">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header />

        {/* Mode bar */}
        <ModeBar />

        {/* Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="container-fluid py-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
