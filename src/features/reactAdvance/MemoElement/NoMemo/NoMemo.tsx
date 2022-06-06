export const NoMemo = (props: { data: string }) => {

    console.log("-- No memo ");
    const { data } = props;

    return (
        <div className="memo-container">
            <p>No Memo</p>
            <span>{data}</span>
        </div>
    )
}