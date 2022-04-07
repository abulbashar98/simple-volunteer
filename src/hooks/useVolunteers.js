import { useState } from "react";
import { useEffect } from "react";

const useVolunteers = () => {
    const [volunteers, setVolunteers] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setVolunteers(data));
    }, []);
    return [volunteers, setVolunteers];
}
export default useVolunteers;