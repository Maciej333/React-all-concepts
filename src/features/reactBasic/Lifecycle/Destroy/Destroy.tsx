import { useEffect } from "react"
import './Destroy.style.scss';

export default function Destroy(props: { setParentState: React.Dispatch<React.SetStateAction<string>> }) {

    const { setParentState } = props;

    useEffect(() => {
        setParentState("element in");
        return () => {
            setParentState("El. Destroyed")
        }
    }, [setParentState])

    return (
        <div className="destroy">element</div>
    )
}
