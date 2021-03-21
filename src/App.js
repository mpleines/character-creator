import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';

function App() {
  return (
    <div class="rel">
      <div class="backdrop"></div>
      <CharacterEditor />
      <Footer />
    </div>
  );
}

export default App;
