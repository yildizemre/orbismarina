import { Outlet, NavLink } from 'react-router-dom';
import { Layout, Anchor, ShieldCheck, Users, Settings, BarChart3, FolderLock } from 'lucide-react';
import { motion } from 'framer-motion';

const menuItems = [
  { path: '/dashboard', icon: Layout, label: 'Genel Bakış' },
  { path: '/vessels', icon: Anchor, label: 'Tekne & Ponton Yönetimi' },
  { path: '/security', icon: ShieldCheck, label: 'Güvenlik & Yüz Tanıma' },
  { path: '/personnel', icon: Users, label: 'İSG & Personel Takip' },
  { path: '/technical', icon: Settings, label: 'Teknik & Peyzaj Bakım' },
  { path: '/analytics', icon: BarChart3, label: 'Ticari Analitik & Raporlar' },
  { path: '/archive', icon: FolderLock, label: 'Dijital Olay Arşivi' },
];

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-slate-950 flex">
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.3 }}
        className="w-72 bg-slate-900 border-r border-slate-800 flex flex-col"
      >
        <div className="p-6 border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-2 rounded-lg">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div>
              <h1 className="text-white font-bold text-lg">Orbistech</h1>
              <p className="text-cyan-400 text-sm font-semibold">KIYI MARİNA</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <item.icon className={`w-5 h-5 ${isActive ? 'text-white' : ''}`} />
                  <span className="font-medium text-sm">{item.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <div className="bg-slate-800/50 rounded-lg p-3">
            <p className="text-xs text-slate-400">Sistem Durumu</p>
            <div className="flex items-center mt-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
              <p className="text-sm text-green-400 font-semibold">Çevrimiçi</p>
            </div>
          </div>
        </div>
      </motion.aside>

      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
