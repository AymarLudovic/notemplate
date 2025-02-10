import React, { createContext, useContext } from "react";

type ProfileContextValue = {
  // Profile data
  profile: Profile | null;
  setProfile: (profile: Profile | null) => void;

  // Loading state
  loading: boolean;
  setLoading: (loading: boolean) => void;
};

const ProfileContext = createContext<ProfileContextValue | null>(null);

const useProfileContext = () => {
  const context = useContext(ProfileContext);
  if (context === null) {
    throw new Error("useProfileContext must be used within a ProfileContext.Provider");
  }
  return context;
};

export { ProfileContext, useProfileContext };