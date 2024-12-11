import { useEffect } from "react"

const ChiSono = () => {
    const handleChiSono = async () => {
        try {
            const response = await fetch("http://localhost:3000/users/chi-sono", {
                method: "GET",
                headers: {'Authorization': `Bearer ${localStorage.getItem("auth")}`},
            });
            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(handleChiSono, []);

    return (<div>chi sono</div>);
}

export default ChiSono;