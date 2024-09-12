import { Login } from "../../components/Login";
import { Navbar } from "../../components/Navbar";
export const AuthLogin = () => {
    return (
        <>
            <Navbar/>
            <main className="flex justify-center items-center mt-32">
                <Login/>
            </main>
        </>
    )
}