import React from 'react';
import Admin from '../../components/AdminPanel/Admin/Main';
import Navbar from '../../adminLayouts';

export default function AdminPage() {
  return (
    <Navbar>
      <Admin />
    </Navbar>
  );
}
