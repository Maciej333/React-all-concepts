export default function CustomButton(props: {
    data?: string,
    buttonText?: string,
    bgColor?: string
}) {

    const { data = "custom button", buttonText = "custom", bgColor = "blue" } = props;

    const handleClick = () => {
        alert(data)
    }

    return (
        <button
            style={{ "backgroundColor": bgColor }}
            onClick={handleClick}
        >
            {buttonText}
        </button>
    )
}
