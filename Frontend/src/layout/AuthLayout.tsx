import { Outlet } from "react-router-dom";

export default function AuthLayout(){
    return(
        <div className="grid grid-cols-2 items-center min-h-screen">
            {/* kiri */}
            <div className="bg-gray-50 h-screen flex flex-col items-center justify-center">
                <img 
                    src="https://www.invofest-harkatnegeri.com/assets/text-image.png" 
                    alt="Invofest Text" 
                    className="w-125 h-auto drop-shadow-sm" 
                />
                <h2>Informatika Vocational Festival</h2>
            </div>

            {/* kanan */}
            <div>
                <Outlet />
            </div>
        </div>
    )
}