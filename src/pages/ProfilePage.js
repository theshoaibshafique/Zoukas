import React from "react";
import ProfileNavbar from "../components/profileComponents/profile-navbar/ProfileNavbar";
import ProfileDetails from "../components/profileComponents/profileDetails/ProfileDetails";
import ProfileMiddle from "../components/profileComponents/profileMiddle/ProfileMiddle";

const ProfilePage = () => {
  return (
    <>
      <ProfileNavbar />
      <ProfileDetails />
      <ProfileMiddle />
    </>
  );
};

export default ProfilePage;
