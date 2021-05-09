import React from 'react';
import EditUsers from '../../components/AdminPanel/Admin/EditUsers';
import Navbar from '../../adminLayouts';

export default function EditUserPage() {
  return (
    <Navbar>
      <EditUsers />
    </Navbar>
  );
}
