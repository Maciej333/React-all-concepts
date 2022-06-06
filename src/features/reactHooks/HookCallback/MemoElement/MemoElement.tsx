import { memo, useEffect } from 'react'

export const MemoElement = memo((props: { function: () => number }) => {

    useEffect(() => {
        console.log("-- memo rerender")
    }, [props.function])

    return (
        <span>{props.function()}</span>
    )
});
