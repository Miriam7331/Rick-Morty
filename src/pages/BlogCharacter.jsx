import { StorageContext } from "../App"
import { useContext } from "react"

export default function BlogCharacter() {    

    const {storage, setStorage} = useContext(StorageContext);
    
    console.log(storage)

    return (    
        <div>    
            Blog
        </div>    
    )    
}