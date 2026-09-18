'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Users, Briefcase, DollarSign, TrendingUp, Building2, Package, CheckCircle, AlertTriangle } from 'lucide-react';

// Demo data for MVP
const demoStats = {
  totalLeads: 47,
  activeDeals: 12,
  monthlyRecurringRevenue: 24500,
  grossProfit: 14700,
  netMargin: 60,
  activeClients: 8,
  activeVendors: 15,
  tasksDueToday: 5,
};

const demoHotLeads = [
  { id: 1, company: 'TechStart Inc', website: 'techstart.com', score: 92, industry: 'SaaS' },
  { id: 2, company: 'GrowthCo', website: 'growthco.io', score: 88, industry: 'E-commerce' },
  { id: 3, company: 'ServicePro', website: 'servicepro.com', score: 85, industry: 'Professional Services' },
];

const demoAtRiskClients = [
  { id: 1, company: 'OldClient Ltd', reason: 'SLA breach last week', margin: 35 },
  { id: 2, company: 'StartupXYZ', reason: 'Payment overdue', margin: 45 },
];

export default function DashboardPage() {
  const [stats, setStats] = useState(demoStats);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Dashboard</h1>
            <nav className="flex items-center gap-4">
              <Link href="/leads" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">Leads</Link>
              <Link href="/deals" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">Deals</Link>
              <Link href="/vendors" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">Vendors</Link>
              <Link href="/clients" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">Clients</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Leads"
            value={stats.totalLeads.toString()}
            icon={Users}
            color="blue"
          />
          <StatCard
            title="Active Deals"
            value={stats.activeDeals.toString()}
            icon={Briefcase}
            color="purple"
          />
          <StatCard
            title="Monthly Revenue"
            value={`$${stats.monthlyRecurringRevenue.toLocaleString()}`}
            icon={DollarSign}
            color="green"
          />
          <StatCard
            title="Gross Profit"
            value={`$${stats.grossProfit.toLocaleString()}`}
            icon={TrendingUp}
            color="emerald"
          />
          <StatCard
            title="Active Clients"
            value={stats.activeClients.toString()}
            icon={Building2}
            color="indigo"
          />
          <StatCard
            title="Active Vendors"
            value={stats.activeVendors.toString()}
            icon={Package}
            color="orange"
          />
          <StatCard
            title="Tasks Due Today"
            value={stats.tasksDueToday.toString()}
            icon={CheckCircle}
            color="teal"
          />
          <StatCard
            title="Net Margin"
            value={`${stats.netMargin}%`}
            icon={TrendingUp}
            color="cyan"
          />
        </div>

        {/* Hot Leads & At Risk Clients */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Hot Leads */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow border border-gray-200 dark:border-gray-800 p-6">
            <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">🔥 Hot Leads</h2>
            <div className="space-y-3">
              {demoHotLeads.map((lead) => (
                <div key={lead.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-gray-100">{lead.company}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{lead.industry} • {lead.website}</p>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                    Score: {lead.score}
                  </span>
                </div>
              ))}
            </div>
            <Link href="/leads" className="mt-4 block text-center text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400">
              View all leads →
            </Link>
          </div>

          {/* At Risk Clients */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow border border-gray-200 dark:border-gray-800 p-6">
            <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">⚠️ At Risk Clients</h2>
            <div className="space-y-3">
              {demoAtRiskClients.map((client) => (
                <div key={client.id} className="flex items-center justify-between p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-gray-100">{client.company}</p>
                    <p className="text-sm text-red-600 dark:text-red-400">{client.reason}</p>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                    {client.margin}% margin
                  </span>
                </div>
              ))}
            </div>
            <Link href="/clients" className="mt-4 block text-center text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400">
              View all clients →
            </Link>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white dark:bg-gray-900 rounded-lg shadow border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/leads" className="flex items-center gap-2 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
              <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="font-medium text-blue-700 dark:text-blue-300">Add Lead</span>
            </Link>
            <Link href="/deals" className="flex items-center gap-2 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors">
              <Briefcase className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <span className="font-medium text-purple-700 dark:text-purple-300">Create Deal</span>
            </Link>
            <Link href="/proposals" className="flex items-center gap-2 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors">
              <Package className="w-5 h-5 text-green-600 dark:text-green-400" />
              <span className="font-medium text-green-700 dark:text-green-300">New Proposal</span>
            </Link>
            <Link href="/vendors" className="flex items-center gap-2 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-colors">
              <Users className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              <span className="font-medium text-orange-700 dark:text-orange-300">Add Vendor</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

function StatCard({ title, value, icon: Icon, color }: { title: string; value: string; icon: any; color: string }) {
  const colorClasses: Record<string, string> = {
    blue: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
    purple: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400',
    green: 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400',
    emerald: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400',
    indigo: 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400',
    orange: 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400',
    teal: 'bg-teal-100 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400',
    cyan: 'bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400',
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow border border-gray-200 dark:border-gray-800 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-1">{value}</p>
        </div>
        <div className={`p-3 rounded-lg ${colorClasses[color]}`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}
