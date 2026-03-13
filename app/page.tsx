"use client";

import { useState } from "react";

const sidebarItems = [
  { label: "Overview", href: "#overview" },
  { label: "Water Monitoring", href: "#water-monitoring" },
  { label: "Leak Detection Map", href: "#leak-detection-map" },
  { label: "Carbon Emissions", href: "#carbon-emissions" },
  { label: "AI Optimization", href: "#ai-optimization" },
  { label: "Wastewater Marketplace", href: "#wastewater-marketplace" },
  { label: "Reports", href: "#reports" },
  // { label: "Settings", href: "#settings" },
];

const kpiData = [
  { title: "Total Water Consumption (Today)", value: "1.26M L", change: "+4.8%", color: "bg-sky-500" },
  { title: "Detected Pipe Leaks", value: "12", change: "-15%", color: "bg-emerald-500" },
  { title: "Carbon Emissions", value: "8.9k tCO2", change: "-2.3%", color: "bg-indigo-500" },
  { title: "Water Saved (Optimization)", value: "92k L", change: "+12%", color: "bg-teal-500" },
];

const usagePoints = [680, 720, 690, 740, 765, 790, 830, 810, 860, 900, 880];
const emissionsFacilities = [
  { name: "Plant A", value: 220 },
  { name: "Plant B", value: 170 },
  { name: "Data Center", value: 250 },
  { name: "Municipal", value: 190 },
];

const alerts = [
  { type: "Critical", title: "Pipe leak detected on Sector 12", time: "2m ago" },
  { type: "Warning", title: "Groundwater extraction above safe threshold", time: "8m ago" },
  { type: "Alert", title: "Carbon emission threshold exceeded at Plant B", time: "12m ago" },
];

const marketplace = {
  supply: "280,000 L/day",
  demand: "4 industries requesting",
  prices: "₹8.40/L",
};

function Sidebar() {
  return (
    <aside className="hidden md:flex md:w-64 flex-col gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm sticky top-4 self-start overflow-auto">
      <div className="mb-3">
        <div className="flex items-center gap-2 text-slate-900">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500" />
          <div>
            <p className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-400">CCD ~ Team Kuch Bhi</p>
            <p className="font-semibold text-lg text-slate-800">Company Climate Dashboard</p>
          </div>
        </div>
      </div>
      <nav className="space-y-1">
        {sidebarItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
          >
            <span>{item.label}</span>
            <span className="text-xs text-slate-400">›</span>
          </a>
        ))}
      </nav>
      <div className="mt-auto rounded-xl bg-sky-50 p-3 text-xs text-sky-700">
        <div className="font-semibold">Health Score</div>
        <div className="mt-1 font-bold text-sky-900">95%</div>
      </div>
    </aside>
  );
}

function Header({ onBellClick }: { onBellClick: () => void }) {
  return (
    <header id="overview" className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-sm md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Company Climate Dashboard</p>
        <h1 className="text-xl font-semibold text-slate-900">Water Management And Carbon Footprint Tracker</h1>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <div className="relative w-64">
          <input
            className="w-full rounded-xl border border-slate-200 px-3 py-2 pr-10 text-sm outline-none focus:border-sky-400"
            placeholder="Search assets, leaks, reports..."
          />
          <span className="absolute right-2 top-2 text-slate-400">🔍</span>
        </div>
        <button onClick={onBellClick} className="relative rounded-xl bg-slate-100 px-3 py-2 text-sm text-slate-700 hover:bg-slate-200 cursor-pointer">
          🔔
          <span className="absolute -right-1 -top-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">3</span>
        </button>
        <button className="relative rounded-xl bg-slate-100 px-3 py-2 text-sm text-slate-700 hover:bg-slate-200 cursor-pointer">
          ⚙️
          <span className="absolute -right-1 -top-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">3</span>
        </button>
        <button className="rounded-xl bg-slate-100 px-3 py-2 text-sm text-slate-700 cursor-pointer">👤</button>
      </div>
    </header>
  );
}

function KPIs() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {kpiData.map((kpi) => (
        <div key={kpi.title} className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
          <div className="mb-2 text-xs font-semibold uppercase text-slate-500">{kpi.title}</div>
          <div className="flex items-end justify-between gap-2">
            <div>
              <div className="text-2xl font-bold text-slate-900">{kpi.value}</div>
              <div className="mt-1 text-xs text-slate-500">vs yesterday</div>
            </div>
            <div className={`rounded-full px-2 py-1 text-[10px] font-semibold text-white ${kpi.color}`}>{kpi.change}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function MapPanel() {
  return (
    <section id="leak-detection-map" className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-slate-900">Leak Detection Map</h2>
          <p className="text-xs text-slate-500">Live water pipeline network and detected alerts</p>
        </div>
        <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700">Live</span>
      </div>
      <div className="relative h-72 overflow-hidden rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 via-cyan-50 to-sky-100 p-3">
        <div className="absolute left-6 top-8 h-2 w-40 rounded-full bg-sky-300/50" />
        <div className="absolute left-24 top-20 h-2 w-56 rounded-full bg-emerald-300/40" />
        <div className="absolute left-14 top-36 h-2 w-48 rounded-full bg-yellow-300/40" />
        <div className="absolute left-44 top-54 h-2 w-52 rounded-full bg-sky-300/40" />
        <div className="absolute left-32 top-24 h-2 w-2 rounded-full bg-red-500" />
        <div className="absolute left-56 top-40 h-2 w-2 rounded-full bg-red-500" />
        <div className="absolute left-70 top-18 h-2 w-2 rounded-full bg-red-500" />
        <div className="absolute inset-x-4 bottom-3 text-[11px] text-slate-500">Pipeline flow and leak hotspots</div>
      </div>
    </section>
  );
}

function ChartsPanel() {
  return (
    <section className="grid gap-3 xl:grid-cols-[1.2fr_1fr]">
      <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
        <div className="mb-2 flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Water Usage (7 days)</h3>
            <p className="text-xs text-slate-500">Trend across city assets</p>
          </div>
          <span className="rounded-full bg-sky-50 px-2 py-1 text-xs text-sky-700">+6.2% vs wk</span>
        </div>
        <div className="h-40 w-full rounded-xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-2">
          <svg viewBox="0 0 320 120" className="h-full w-full">
            <polyline fill="none" stroke="#0ea5e9" strokeWidth="3" points="0,86 26,80 52,84 78,74 104,70 130,64 156,56 182,60 208,44 234,46 260,40 286,34 312,30" />
            {usagePoints.map((v, i) => (
              <circle key={i} cx={24 + i * 25} cy={112 - (v - 640) * 0.2} r={3} fill="#0ea5e9" />
            ))}
          </svg>
        </div>
      </div>
      <div className="grid gap-3">
        <div id="carbon-emissions" className="rounded-2xl border border-slate-100 bg-white p-3 shadow-sm">
          <div className="mb-2 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold text-slate-900">Carbon Emissions</h3>
              <p className="text-xs text-slate-500">tons CO2 per facility</p>
            </div>
            <span className="rounded-full bg-indigo-50 px-2 py-1 text-xs text-indigo-700">Goal 7.5k t</span>
          </div>
          <div className="space-y-2 text-xs">
            {emissionsFacilities.map((f) => (
              <div key={f.name} className="flex items-center gap-2">
                <span className="w-20 text-slate-600">{f.name}</span>
                <div className="h-2 flex-1 rounded-full bg-slate-200">
                  <div className="h-2 rounded-full bg-indigo-500" style={{ width: `${Math.min(100, (f.value / 260) * 100)}%` }} />
                </div>
                <div className="w-10 text-right font-semibold text-slate-700">{f.value}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-slate-100 bg-white p-3 shadow-sm">
          <div className="mb-2 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold text-slate-900">Wastewater Recycling Rate</h3>
              <p className="text-xs text-slate-500">Current percentage</p>
            </div>
            <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700">68%</span>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-28 w-28">
              <svg viewBox="0 0 100 100" className="h-full w-full">
                <circle cx="50" cy="50" r="32" fill="none" stroke="#e2e8f0" strokeWidth="10" />
                <circle cx="50" cy="50" r="32" fill="none" stroke="#0ea5e9" strokeWidth="10" strokeDasharray="201" strokeDashoffset="64" transform="rotate(-90 50 50)" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <div className="text-sm font-semibold text-slate-700">68%</div>
                <div className="text-[10px] text-slate-500">recycled</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AIOptimizationPanel() {
  return (
    <section id="ai-optimization" className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
      <div className="mb-2 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-slate-900">AI Optimization Recommendations</h3>
          <p className="text-xs text-slate-500">Actions to lower consumption and emissions</p>
        </div>
        <button className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 cursor-pointer">Refresh</button>
      </div>
      <ul className="space-y-2 text-sm text-slate-700">
        <li className="rounded-xl border border-emerald-100 bg-emerald-50 px-3 py-2">• Shift server workload to night windows to reduce cooling water usage by 18%.</li>
        <li className="rounded-xl border border-sky-100 bg-sky-50 px-3 py-2">• Use recycled wastewater from Plant A to support industrial zone 3.</li>
        <li className="rounded-xl border border-yellow-100 bg-yellow-50 px-3 py-2">• Schedule a leak inspection on pipeline corridor C before Friday.</li>
          <li className="rounded-xl border border-emerald-100 bg-emerald-50 px-3 py-2">• Shift server workload to night windows to reduce cooling water usage by 18%.</li>
        <li className="rounded-xl border border-sky-100 bg-sky-50 px-3 py-2">• Use recycled wastewater from Plant A to support industrial zone 3.</li>
        <li className="rounded-xl border border-yellow-100 bg-yellow-50 px-3 py-2">• Schedule a leak inspection on pipeline corridor C before Friday.</li>
      </ul>
    </section>
  );
}

function AlertsPanel() {
  return (
    <section className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
      <div className="mb-2 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-slate-900">Real-time Alerts</h3>
          <p className="text-xs text-slate-500">Critical system notifications</p>
        </div>
        <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-semibold text-red-700">3 active</span>
      </div>
      <div className="space-y-2">
        {alerts.map((a) => (
          <div key={a.title} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-slate-700">{a.type}</span>
              <span>{a.time}</span>
            </div>
            <div className="mt-1 text-sm text-slate-800">{a.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function MarketplaceWidget() {
  return (
    <section id="wastewater-marketplace" className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
      <div className="mb-2 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-slate-900">Wastewater Marketplace</h3>
          <p className="text-xs text-slate-500">B2B treated-water trading panel</p>
        </div>
        <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700">Market Open</span>
      </div>
      <div className="grid gap-2 text-sm text-slate-700 sm:grid-cols-3">
        <div className="rounded-xl bg-slate-50 p-2">
          <div className="text-[10px] uppercase text-slate-400">Supply</div>
          <div className="mt-1 font-semibold text-slate-900">{marketplace.supply}</div>
        </div>
        <div className="rounded-xl bg-slate-50 p-2">
          <div className="text-[10px] uppercase text-slate-400">Demand</div>
          <div className="mt-1 font-semibold text-slate-900">{marketplace.demand}</div>
        </div>
        <div className="rounded-xl bg-slate-50 p-2">
          <div className="text-[10px] uppercase text-slate-400">Price</div>
          <div className="mt-1 font-semibold text-slate-900">{marketplace.prices}</div>
        </div>
      </div>
      <button className="mt-3 w-full rounded-xl bg-sky-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-sky-700 cursor-pointer">Initiate Water Trade</button>
    </section>
  );
}

export default function Home() {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 p-2 text-slate-900 md:p-6">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 md:grid-cols-[260px_minmax(0,1fr)]">
        <Sidebar />
        <div className="relative space-y-4 min-w-0 overflow-y-auto max-h-[calc(100vh-2rem)] p-1 scroll-smooth">
          <Header onBellClick={() => setShowNotifications((prev) => !prev)} />
          <div id="water-monitoring" className="rounded-2xl border border-slate-200 bg-white p-3 text-sm text-slate-700 shadow-sm">
            <div className="font-semibold text-slate-900">Water Monitoring Summary</div>
            <div className="text-xs text-slate-500">Sensor coverage: 96% across city zones</div>
          </div>
          {showNotifications && (
            <div className="absolute right-2 top-24 z-30 w-80 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl">
              <div className="mb-2 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">Notifications</h3>
                  <p className="text-xs text-slate-500">Recent system alerts</p>
                </div>
                <button onClick={() => setShowNotifications(false)} className="text-xs text-slate-500 hover:text-slate-900">Close</button>
              </div>
              <div className="space-y-2 text-sm">
                <div className="rounded-xl bg-slate-50 p-2">
                  <div className="font-semibold text-slate-800">Leak detected on pipeline C4</div>
                  <div className="text-xs text-slate-500">2 min ago</div>
                </div>
                <div className="rounded-xl bg-slate-50 p-2">
                  <div className="font-semibold text-slate-800">Optimization recommended for Plant B</div>
                  <div className="text-xs text-slate-500">10 min ago</div>
                </div>
                <div className="rounded-xl bg-slate-50 p-2">
                  <div className="font-semibold text-slate-800">Groundwater usage high in zone 5</div>
                  <div className="text-xs text-slate-500">18 min ago</div>
                </div>
              </div>
            </div>
          )}
          <KPIs />
          <div className="grid gap-3 xl:grid-cols-[2fr_1fr]">
            <MapPanel />
            <div className="space-y-3 min-w-0">
              <AIOptimizationPanel />
              <AlertsPanel />
            </div>
          </div>
          <ChartsPanel />
          <MarketplaceWidget />
          <div id="reports" className="pt-2 text-xs text-slate-500">   <button className="mt-3 w-50 rounded-xl bg-sky-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-sky-700 cursor-pointer">Generate and get report via email</button></div>
        </div>
      </div>
    </div>
  );
}
