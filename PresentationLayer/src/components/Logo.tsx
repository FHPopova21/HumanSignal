import React from 'react';

export const Logo = ({ width = 32, height = 32 }: { width?: number; height?: number }) => (
  <img src="../styles/logo.png" width={width} height={height} alt="Logo" />
);
