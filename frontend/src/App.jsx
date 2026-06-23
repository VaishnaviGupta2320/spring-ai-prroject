import { useState } from 'react';
import ChatComponent from './components/ChatComponent';
import RecipeGenerator from './components/RecipeGenerator';
import './App.css';

function App() {
  const [activeTab, setactiveTab] = useState('chat');

  const handleTabChange = (tab) => {
    // alert(tab)
    setactiveTab(tab);
  };

  return (
    // <div className='App'>
    //   <button className={activeTab === 'chat' ? 'active' : ''}
    //     onClick={() => handleTabChange('chat')}>Ask AI</button>
    //   <button className={activeTab === 'recipe-generator' ? 'active' : ''}
    //     onClick={() => handleTabChange('recipe-generator')}>Recipe Generator</button>
    //   <div>
    //     {activeTab === 'chat' && <ChatComponent />}
    //     {activeTab === 'recipe-generator' && <RecipeGenerator />}
    //   </div>
    // </div>

    <div className="App">

    <div className="top-nav">

        <button
            className={activeTab === 'chat' ? 'active-pill' : 'pill'}
            onClick={() => handleTabChange('chat')}
        >
            💬 Chat
        </button>

        <button
            className={activeTab === 'recipe-generator' ? 'active-pill' : 'pill'}
            onClick={() => handleTabChange('recipe-generator')}
        >
            🍳 Recipes
        </button>

    </div>

    <div>

        {activeTab === 'chat' && <ChatComponent />}
        {activeTab === 'recipe-generator' && <RecipeGenerator />}

    </div>

</div>
  )
}

export default App
