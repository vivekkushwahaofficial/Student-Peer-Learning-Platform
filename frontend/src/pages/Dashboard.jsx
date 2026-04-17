import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  PlusCircle, 
  MessageSquare, 
  Search, 
  Star, 
  Code, 
  ChevronRight,
  Bell,
  CheckCircle2,
  Users
} from 'lucide-react';

/**
 * MOCK API SERVICE
 * Consolidated here to fix environment resolution errors.
 * In your local VS Code, this code belongs in src/services/api.js
 */
const ApiService = {
  fetchRequests: async () => {
    // This simulates a call to your future Spring Boot backend
    return [
      { 
        id: 1, 
        title: "DBMS Normalization HELP", 
        user: "Kumar", 
        time: "10 min ago", 
        tags: ["#DBMS", "#Normal"], 
        priority: "Critical",
        description: "Need help with BCNF and 3NF normalization. Stuck on a complex relational table involving transitive dependencies."
      },
      { 
        id: 2, 
        title: "React State Management Bug", 
        user: "Ananya", 
        time: "25 min ago", 
        tags: ["#React", "#Hooks"], 
        priority: "High",
        description: "Unexpected re-renders when updating nested state objects in a multi-step form."
      },
      { 
        id: 3, 
        title: "Java Multi-threading Logic", 
        user: "Vivek", 
        time: "1 hr ago", 
        tags: ["#Java", "#Threads"], 
        priority: "Medium",
        description: "Clarification needed on synchronized blocks vs reentrant locks for a shared resource manager."
      },
    ];
  }
};

const Badge = ({ children, variant = "default" }) => {
  const styles = {
    default: "bg-slate-100 text-slate-600",
    critical: "bg-rose-100 text-rose-600",
    success: "bg-emerald-100 text-emerald-600",
    blue: "bg-blue-100 text-blue-600",
    purple: "bg-purple-100 text-purple-600"
  };
  return (
    <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${styles[variant]}`}>
      {children}
    </span>
  );
};

const Dashboard = ({ onSelectChat }) => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('hub');

  useEffect(() => {
    const loadRequests = async () => {
      try {
        const data = await ApiService.fetchRequests();
        setRequests(data);
      } catch (err) {
        console.error("Failed to load requests");
      } finally {
        setLoading(false);
      }
    };
    loadRequests();
  }, []);

  return (
    <div className="flex min-h-screen bg-[#F8FAFC] text-slate-900 font-sans">
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-200 bg-white p-6 flex flex-col gap-8 sticky top-0 h-screen">
        <div className="flex items-center gap-2 px-2">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-indigo-200 shadow-lg">
            <Users size={24} />
          </div>
          <div>
            <h1 className="font-black text-xl tracking-tight text-indigo-900 leading-none">PeerNexus</h1>
            <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mt-1">Learning Platform</p>
          </div>
        </div>

        <nav className="flex flex-col gap-2 flex-1">
          <button 
            onClick={() => setActiveTab('hub')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'hub' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' : 'text-slate-500 hover:bg-slate-100'}`}
          >
            <LayoutDashboard size={20} />
            <span className="font-medium">Community Hub</span>
          </button>
          <button 
            onClick={() => setActiveTab('requests')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'requests' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' : 'text-slate-500 hover:bg-slate-100'}`}
          >
            <PlusCircle size={20} />
            <span className="font-medium">Raise Request</span>
          </button>
        </nav>

        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center border-2 border-white shadow-sm overflow-hidden">
               <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Vivek" alt="Avatar" />
            </div>
            <div className="overflow-hidden">
              <p className="font-bold text-sm truncate">Vivek Kumar</p>
              <p className="text-[10px] text-slate-400">3rd Yr, OIST</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              {activeTab === 'hub' ? 'Live Community Requests' : 'Post Your Query'}
            </h2>
            <p className="text-slate-500 text-sm">Welcome back to PeerNexus, Vivek.</p>
          </div>
          <div className="flex gap-4">
            <button className="p-2 bg-white border border-slate-200 rounded-lg text-slate-400 hover:text-indigo-600 transition-colors">
              <Bell size={20} />
            </button>
            <div className="flex items-center bg-white border border-slate-200 rounded-lg px-3 py-1 gap-2">
              <Star className="text-amber-400" size={16} fill="currentColor" />
              <span className="text-sm font-bold">1,250 PNT</span>
            </div>
          </div>
        </header>

        {activeTab === 'hub' ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in fade-in duration-500">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white p-2 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-2">
                <Search size={18} className="ml-4 text-slate-400" />
                <input className="flex-1 py-3 outline-none text-sm bg-transparent" placeholder="Search for doubts, subjects or experts..." />
                <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-xl text-slate-600 text-xs font-bold hover:bg-slate-200 transition-colors">
                  Filter
                </button>
              </div>

              {loading ? (
                <div className="space-y-4">
                  {[1, 2].map(i => (
                    <div key={i} className="h-32 bg-slate-100 animate-pulse rounded-2xl border border-slate-200" />
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {requests.map(req => (
                    <div key={req.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-indigo-300 transition-all group">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center">
                            <Code size={20} className="text-indigo-600" />
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">{req.title}</h4>
                            <p className="text-[10px] text-slate-400 mt-1 uppercase font-bold tracking-tight">
                              Poster {req.user} • {req.time}
                            </p>
                          </div>
                        </div>
                        <Badge variant={req.priority === 'Critical' ? 'critical' : 'blue'}>{req.priority}</Badge>
                      </div>
                      
                      <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                        {req.description}
                      </p>

                      <div className="flex items-center justify-between border-t border-slate-50 pt-5">
                        <div className="flex gap-2">
                          {req.tags.map(tag => <Badge key={tag}>{tag}</Badge>)}
                        </div>
                        <button 
                          onClick={onSelectChat}
                          className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white rounded-xl text-xs font-bold shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all active:scale-95"
                        >
                          View & Help <ChevronRight size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <MessageSquare size={18} className="text-indigo-600" />
                  Quick Practice
                </h3>
                <div className="space-y-3">
                  {[1, 2].map(i => (
                    <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-indigo-100 border border-white" />
                        <div>
                          <p className="text-xs font-bold">Vivek & Ananya</p>
                          <p className="text-[10px] text-slate-400">DBMS Study Session</p>
                        </div>
                      </div>
                      <button className="text-[10px] bg-indigo-600 text-white px-3 py-1.5 rounded-lg font-bold">Join</button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-900 to-indigo-700 rounded-2xl p-6 text-white text-center shadow-lg">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Star size={24} className="text-amber-300" />
                </div>
                <h4 className="font-bold mb-2">Host a Session</h4>
                <p className="text-xs text-indigo-200 mb-5 leading-relaxed">Earn double Peer Points by helping classmates in a group session!</p>
                <button className="w-full py-3 bg-white text-indigo-900 rounded-xl text-xs font-bold hover:bg-indigo-50 transition-colors">
                  Create Session
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl border border-slate-200 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
             <div className="space-y-6">
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase mb-2 block">Request Title</label>
                  <input className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-100 bg-slate-50/50" placeholder="e.g. Help with BCNF Decomposition" />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase mb-2 block">Problem Description</label>
                  <textarea rows={5} className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-100 bg-slate-50/50" placeholder="Describe the error or concept you are stuck with..." />
                </div>
                <button 
                  onClick={() => setActiveTab('hub')}
                  className="w-full py-4 bg-indigo-600 text-white font-bold rounded-xl shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all flex items-center justify-center gap-2"
                >
                  Post to Community <CheckCircle2 size={18} />
                </button>
             </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;