import React from "react";

import { useSelector } from "react-redux";
import PageLayout from "../components/PageLayout";

const UserDetails = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <PageLayout>
      <div className="user-details">
        <h2>Kullanıcı Bilgileri</h2>
        <p>
          <strong>Ad:</strong> {user.firstName}
        </p>
        <p>
          <strong>Soyad:</strong> {user.lastName}
        </p>
        <p>
          <strong>Şifre:</strong> {user.password}
        </p>
      </div>
    </PageLayout>
  );
};

export default UserDetails;
