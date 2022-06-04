import React, { useEffect, useState } from "react";

interface PropCurrency {
    money: string;
}

export function withCurrency<T extends PropCurrency>(Component: React.ComponentType<T>, currency: string) {

    const NewComponent = (props: T) => {
        const { money } = props;

        const [newMoney, setNewMoney] = useState(money);
        const [error, setError] = useState(false);

        useEffect(() => {
            if (money.match(/^[\d]+([.,]?[\d]+)?$/)) {
                const moneyTab = money.split(/[,.]/);
                let newCurrency = "";
                if (moneyTab.length > 1) {
                    newCurrency += `${parseFloat(money).toFixed(2)} ${currency} `
                } else {
                    newCurrency += `${Number(moneyTab[0])}.00 ${currency} `
                }
                setNewMoney(newCurrency);
                setError(false);
            } else {
                setError(true);
            }
        }, [money])

        return <Component {...(props as T)} money={newMoney} error={error} />;
    };

    return NewComponent;
}