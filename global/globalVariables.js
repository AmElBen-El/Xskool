import { createContext, useState } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
    const [docID, setDocID] = useState("");
    const [userUID, setUserUID] = useState("93JAktlBxBeeIT3HXqWit6bswOH2");
    const [preloader, setPreloader] = useState(false);
    const [userInfo, setUserInfo] = useState({ image: null, firstname: "", lastname: "", email: "" });
    const [courses, setCourses] = useState([]);

    

    return (
        <AppContext.Provider value={{
            docID, setDocID,
            userUID, setUserUID,
            courses, setCourses,
            userInfo, setUserInfo,
            preloader, setPreloader,          
        }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider }