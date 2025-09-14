import React from 'react';
import Header from './components/Header';
import InventoryPanel from './components/InventoryPanel';
import PaymentsPanel from './components/PaymentsPanel';
import LoyaltyPanel from './components/LoyaltyPanel';
import AnalyticsPanel from './components/AnalyticsPanel';
import OrdersPanel from './components/OrdersPanel';
import DailySummary from './components/DailySummary';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans bg-slate-900 text-gray-200">
      <div className="absolute inset-0 -z-10 h-full w-full bg-slate-900 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/30 opacity-20 blur-[100px]"></div>
      </div>
      <div className="relative z-10">
        <Header />
        <main className="p-4 sm:p-6 lg:p-8">
          <DailySummary />
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <InventoryPanel />
            <PaymentsPanel />
            <LoyaltyPanel />
            <OrdersPanel />
            <div className="lg:col-span-2">
              <AnalyticsPanel />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;