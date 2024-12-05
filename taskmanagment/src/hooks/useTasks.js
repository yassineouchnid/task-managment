import { useEffect,useState } from "react";
import axios from "axios";

function useTasks(){
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        const fetchTasks = async () => {
            const respose = await axios.get(
                "http://localhost:5000/"
            );
            setTasks(respose.data);
        };
        fetchTasks();
    }, []);
    
    return tasks;
}
export default useTasks