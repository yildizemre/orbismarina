import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Anchor, Shield, AlertTriangle, Wrench, X, Activity } from 'lucide-react';
import AISimulatorModal from '../components/AISimulatorModal';

interface LiveEvent {
  id: number;
  time: string;
  type: string;
  message: string;
  severity: 'success' | 'warning' | 'error';
}

export default function Dashboard() {
  const [showModal, setShowModal] = useState(false);
  const [liveEvents, setLiveEvents] = useState<LiveEvent[]>([
    { id: 1, time: '14:23', type: 'VIP', message: 'VIP Algılandı: Mehmet B. - Batı Giriş', severity: 'success' },
    { id: 2, time: '14:21', type: 'Tekne', message: 'Yeni Tekne Girişi: Ponton C-12', severity: 'success' },
    { id: 3, time: '14:19', type: 'İSG', message: 'Can Yeleği Kontrolü Başarılı - Personel: Ali K.', severity: 'success' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newEvent: LiveEvent = {
        id: Date.now(),
        time: new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' }),
        type: ['VIP', 'Tekne', 'İSG', 'Güvenlik'][Math.floor(Math.random() * 4)],
        message: [
          'Düzenli Devriye Tamamlandı - Bölge A',
          'Tekne Hareketi Algılandı - Ponton B',
          'Çöp Kutusu Doluluk Kontrolü - %45',
          'Yüz Tanıma Başarılı - Personel Girişi'
        ][Math.floor(Math.random() * 4)],
        severity: 'success'
      };
      setLiveEvents(prev => [newEvent, ...prev].slice(0, 10));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      label: 'Toplam Tekne',
      value: '142/200',
      icon: Anchor,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      textColor: 'text-blue-400'
    },
    {
      label: 'Anlık VIP Sayısı',
      value: '4',
      icon: Shield,
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-500/10',
      textColor: 'text-amber-400'
    },
    {
      label: 'Aktif İSG İhlali',
      value: '0',
      icon: AlertTriangle,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      textColor: 'text-green-400'
    },
    {
      label: 'Teknik Arıza',
      value: '2',
      icon: Wrench,
      color: 'from-red-500 to-rose-500',
      bgColor: 'bg-red-500/10',
      textColor: 'text-red-400'
    }
  ];

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Genel Bakış</h1>
          <p className="text-slate-400">KIYI MARİNA - Anlık Durum Kontrol Paneli</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowModal(true)}
          className="relative bg-gradient-to-r from-red-600 to-rose-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg shadow-red-500/30 flex items-center space-x-2"
        >
          <Activity className="w-5 h-5" />
          <span>CANLI AI ANALİZ SİMÜLATÖRÜ</span>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
        </motion.button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`${stat.bgColor} p-3 rounded-lg`}>
                <stat.icon className={`w-6 h-6 ${stat.textColor}`} />
              </div>
              <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
            </div>
            <p className="text-slate-400 text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center">
              <Activity className="w-5 h-5 mr-2 text-cyan-400" />
              Sistem Özeti
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800/50 rounded-lg p-4">
                <p className="text-slate-400 text-sm mb-2">Toplam Kamera</p>
                <p className="text-2xl font-bold text-white">24</p>
                <p className="text-xs text-green-400 mt-1">24 Aktif</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <p className="text-slate-400 text-sm mb-2">Günlük Algılama</p>
                <p className="text-2xl font-bold text-white">1,847</p>
                <p className="text-xs text-cyan-400 mt-1">+12% Önceki güne göre</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <p className="text-slate-400 text-sm mb-2">Aktif Personel</p>
                <p className="text-2xl font-bold text-white">18</p>
                <p className="text-xs text-blue-400 mt-1">2 Vardiya</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <p className="text-slate-400 text-sm mb-2">Sistem Uptime</p>
                <p className="text-2xl font-bold text-white">99.8%</p>
                <p className="text-xs text-green-400 mt-1">Son 30 gün</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse mr-2"></div>
            LIVE STATUS
          </h2>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            <AnimatePresence>
              {liveEvents.map((event) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-slate-800/50 rounded-lg p-3 border-l-4 border-cyan-500"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-xs text-slate-400 mb-1">{event.time} - {event.type}</p>
                      <p className="text-sm text-white">{event.message}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <AISimulatorModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
