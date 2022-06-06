import { memo, useEffect } from 'react'

export const FunElement = memo((props: { function: () => number }) => {

    useEffect(() => {
        console.log("-- fun rerender")
    }, [props.function])

    return (
        <span>{props.function()}</span>
    )
});
