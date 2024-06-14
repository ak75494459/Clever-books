import Key from "./components/Key";
import Layout from "./layouts/Layout";
import { Navigate, Route, Routes} from "react-router-dom"

const AppRoutes = ()=>{
    return(
        <Routes>
            <Route path = "/" element = {<Layout><Key/></Layout>} />
            <Route path="*" element={<Navigate to= "/"/>} />
        </Routes>
    )
}

export default AppRoutes;