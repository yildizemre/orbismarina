import { motion } from 'framer-motion';
import { Users, Search } from 'lucide-react';

export default function Personnel() {
  const personnel = [
    { name: 'Caner K.', role: 'Palamar', zone: 'İskele C', vest: 'Başarılı', lastSeen: '13:05', color: 'text-green-400', bg: 'bg-green-500/20', border: 'border-green-500/30' },
    { name: 'Mehmet A.', role: 'Teknisyen', zone: 'Teknik Bölge', vest: 'Başarılı', lastSeen: '13:02', color: 'text-green-400', bg: 'bg-green-500/20', border: 'border-green-500/30' },
    { name: 'Ali Y.', role: 'Güvenlik', zone: 'Ana Giriş', vest: 'Başarılı', lastSeen: '13:00', color: 'text-green-400', bg: 'bg-green-500/20', border: 'border-green-500/30' },
    { name: 'Zeynep D.', role: 'Resepsiyon', zone: 'Lounge', vest: 'N/A', lastSeen: '12:58', color: 'text-slate-400', bg: 'bg-slate-500/20', border: 'border-slate-500/30' },
    { name: 'Ahmet K.', role: 'Palamar', zone: 'İskele A', vest: 'İhlal', lastSeen: '12:55', color: 'text-red-400', bg: 'bg-red-500/20', border: 'border-red-500/30' },
    { name: 'Fatma B.', role: 'Temizlik', zone: 'Sosyal Tesis', vest: 'Başarılı', lastSeen: '12:50', color: 'text-green-400', bg: 'bg-green-500/20', border: 'border-green-500/30' },
    { name: 'Can M.', role: 'Teknisyen', zone: 'Ponton B', vest: 'Başarılı', lastSeen: '12:45', color: 'text-green-400', bg: 'bg-green-500/20', border: 'border-green-500/30' },
    { name: 'Ayşe T.', role: 'Yönetici', zone: 'Ofis', vest: 'N/A', lastSeen: '12:40', color: 'text-slate-400', bg: 'bg-slate-500/20', border: 'border-slate-500/30' },
    { name: 'Burak S.', role: 'Palamar', zone: 'İskele D', vest: 'Başarılı', lastSeen: '12:35', color: 'text-green-400', bg: 'bg-green-500/20', border: 'border-green-500/30' },
    { name: 'Elif K.', role: 'Güvenlik', zone: 'Otopark', vest: 'Başarılı', lastSeen: '12:30', color: 'text-green-400', bg: 'bg-green-500/20', border: 'border-green-500/30' },
  ];

  const stats = [
    { label: 'Toplam Personel', value: '42', color: 'text-blue-400' },
    { label: 'Aktif Vardiya', value: '18', color: 'text-green-400' },
    { label: 'İSG İhlali', value: '1', color: 'text-red-400' },
    { label: 'Uyumluluk Oranı', value: '%94', color: 'text-cyan-400' },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2 flex items-center">
          <Users className="w-8 h-8 mr-3 text-cyan-400" />
          İSG & Personel Takip
        </h1>
        <p className="text-slate-400">İş sağlığı güvenliği ve personel izleme sistemi</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-4"
          >
            <p className="text-slate-400 text-sm mb-1">{stat.label}</p>
            <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl overflow-hidden">
        <div className="p-6 border-b border-slate-800">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">Personel Durum Tablosu</h2>
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Ara..."
                className="pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-800/50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Personel Adı
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Görev
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Bölge
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Can Yeleği Kontrolü
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Son Görülme
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {personnel.map((person, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.02 }}
                  className="hover:bg-slate-800/30 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-white font-medium">{person.name}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-slate-300">{person.role}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-cyan-400">{person.zone}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${person.bg} ${person.color} border ${person.border}`}
                    >
                      {person.vest}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-slate-300 font-mono">{person.lastSeen}</span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
