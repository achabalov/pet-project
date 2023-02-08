import {useState} from "react";

export const useModalVisibility = (bool: boolean = false) => {

    const [visibility, setVisibility] = useState(bool)

    const toggleVisibility = () => setVisibility(prev => !prev);

    const visibilityTrue = () => setVisibility(true)
    const visibilityFalse = () => setVisibility(false)

    return {
        visibility,
        toggleVisibility,
        visibilityTrue,
        visibilityFalse
    }
}