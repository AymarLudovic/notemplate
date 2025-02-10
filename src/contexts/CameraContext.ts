import { createContext, useContext, useState } from 'react';

interface CameraContextState {
  cameraRef: React.MutableRefObject<HTMLVideoElement | null>;
  facingMode: 'user' | 'environment';
  setFacingMode: (mode: 'user' | 'environment') => void;
  toggleFacingMode: () => void;
}

const CameraContext = createContext<CameraContextState | null>(null);

const useCameraContext = () => {
  const context = useContext(CameraContext);
  if (!context) {
    throw new Error('useCameraContext must be used within a CameraContext.Provider');
  }
  return context;
};

const CameraProvider = ({ children }: { children: React.ReactNode }) => {
  const [cameraRef, setCameraRef] = useState<HTMLVideoElement | null>(null);
  const [facingMode, setFacingMode] = useState<'user' | 'environment'>('user');

  const toggleFacingMode = () => {
    facingMode === 'user' ? setFacingMode('environment') : setFacingMode('user');
  };

  return (
    <CameraContext.Provider
      value={{
        cameraRef,
        facingMode,
        setFacingMode,
        toggleFacingMode,
      }}
    >
      {children}
    </CameraContext.Provider>
  );
};

export { CameraContext, CameraProvider, useCameraContext };