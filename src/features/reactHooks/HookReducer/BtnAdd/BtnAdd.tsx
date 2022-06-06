
export default function BtnAdd(props: { click: () => void }) {

    const handleClick = () => {
        props.click();
    }

    return (
        <button onClick={handleClick}>Add element</button>
    )
}
