import React from 'react';
import ThemeProvider from './stores/themeProvider/ThemeProvider';
import Button from './components/Button/Button';

function App() {
  return <ThemeProvider>Button</ThemeProvider>;
}

export default App;
