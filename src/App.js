
import './App.css';
import routerConfig from "./route/config"
import { useRoutes } from 'react-router-dom';

function App() {
  let useRoute = useRoutes(routerConfig)
  return useRoute;
}

export default App;
