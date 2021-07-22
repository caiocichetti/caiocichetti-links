import React from 'react';
import { Link } from 'react-router-dom';

function Setup() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='column'>
          <Link to='/' className='button'>
            Dashboard ↩
          </Link>
          <h3>🖥 Computer - 🐧 POP OS 21.04: </h3>
          <p>🧠 Ryzen 3 2220G</p>
          <p>👩🏻‍💻 ASUS - A320MK/BR</p>
          <p>🐸 Crucial Ballistix 8gb</p>
          <p>📺 GT 1030</p>
          <p>🔌 Corsair CX 450 Watt</p>
          <p>📂 SSD 128GB LEXAR</p>

          <h3>🖥️ Monitor: </h3>
          <p>📺 LG Ultrawide 25</p>

          <h3>⌨️🖱️ keyboard and mouse: </h3>
          <p>⌨️ Redragon Kumara - switch outemu blue</p>
          <p>🖱️ Hyperx Pulsefire Core</p>
          <br />
          <br />
          <br />
          <br />
          <p>
            Built by ©Caio Cichetti | Forked LittleLink | Deployed at Vercel
          </p>
        </div>
      </div>
    </div>
  );
}

export default Setup;
