import { ChatEngine } from 'react-chat-engine';

import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />
    
        return (
           <ChatEngine
                height="100vh"
                projectID="82a1d6a7-b395-44ab-92d9-2cbf93e06c69"
                userName={localStorage.getItem('username')}
                userPassword= {localStorage.getItem('password')}
                renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />
            } 
        />
    );
    }

export default App;