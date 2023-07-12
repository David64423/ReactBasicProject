import {RouterProvider, createBrowserRouter, Outlet} from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { AllPeople } from '../pages/AllPeople';
import { AddPerson } from '../pages/AddPerson';
import { UpdatePerson } from '../pages/UpdatePerson';
export const routes= createBrowserRouter([{
    element:<><Navbar/> <Outlet/></>,
    path:'/',
    children:[{
        index:true,
        element:<AllPeople/>
    },
    {
        path:'/add',
        element: <AddPerson/>,
    },
    {
        path:'/update',
        element: <UpdatePerson/>,
    }
]
}]);