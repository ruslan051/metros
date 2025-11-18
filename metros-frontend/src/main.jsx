import { createRoot } from 'react-dom/client'
import { AppConfig } from './AppConfig.jsx'
import './App.css'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<AppConfig />);