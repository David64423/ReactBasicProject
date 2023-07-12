import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import {routes} from './createRoutes/createRoutes';
function App(){

  return <RouterProvider router={routes}/>
}

export default App