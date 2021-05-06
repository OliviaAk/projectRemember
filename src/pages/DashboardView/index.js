import React from 'react';
import ViewDashboard from '../../components/AdminPanel/Admin/ViewDashboard';
import Navbar from '../../adminLayouts';

export default function ViewDashPage() {
  return (
    <Navbar>
      <ViewDashboard />
    </Navbar>
  );
}
