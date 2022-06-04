import { withCurrency } from '../withCurrency';
import './WrapMe.style.scss';

const WrapMeComponent = (props: { money: string, error?: boolean }) => {
    const { money, error = false } = props;
    return (
        <div className='wrap-me'>
            {
                error ?
                    <span>[Error] Invalid money</span>
                    :
                    <>
                        <span>Value </span>
                        <span>{money}</span>
                    </>
            }
        </div>
    )
}

const WrapMe = withCurrency(WrapMeComponent, "PLN");
export default WrapMe;