import React from 'react';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { FarmConditions } from '../components/dashboard/farmer/FarmConditions';
import { VendorConnections } from '../components/dashboard/farmer/VendorConnections';
import { CropManagement } from '../components/dashboard/farmer/CropManagement';
import { OrdersPipeline } from '../components/dashboard/OrdersPipeline';

export const FarmerDashboard: React.FC = () => {
  return (
    <DashboardLayout userType="farmer" userName="Suresh Patel">
      <div className="space-y-8">
        <FarmConditions />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
                <OrdersPipeline />
            </div>
            <div className="lg:col-span-1">
                <VendorConnections />
            </div>
        </div>
        <CropManagement />
      </div>
    </DashboardLayout>
  );
};
