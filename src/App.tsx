import React from 'react';
import Theme from './Context/themeProvider/Theme';
import Modal from './components/Modal/Modal';
import Button from './components/Button/Button';

function App() {
  return (
    <Theme>
      <Button variant="primary-button" handleClick={() => console.log('clicked')}>
        Boton de prueba
      </Button>
      <Modal open={true} title="titulo">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam quae provident non est eum
        alias quis doloribus ipsam quisquam vitae animi soluta beatae nulla a recusandae, tenetur
        cum, assumenda omnis?
      </Modal>
    </Theme>
  );
}

export default App;
