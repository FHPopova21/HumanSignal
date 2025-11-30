import React from 'react';
import logo from '../styles/logo.png';

export const Logo = ({ width = 32, height = 32 }: { width?: number; height?: number }) => (
  <img src={logo} width={width} height={height} alt="Logo" />
);
