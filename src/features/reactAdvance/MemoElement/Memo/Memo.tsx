import { memo } from "react";

const MemoComponent = (props: { data: string }) => {

    console.log("-- Memo ");
    const { data } = props;

    return (
        <div className="memo-container">
            <p>Memo</p>
            <span>{data}</span>
        </div>
    )
}
export const Memo = memo(MemoComponent);