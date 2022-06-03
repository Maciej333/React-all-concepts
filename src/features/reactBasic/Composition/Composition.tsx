import './Composition.style.scss';
import CustomButton from './CustomButton/CustomButton';
import ErrorButton from './CustomButton/ErrorButton/ErrorButton';
import SuccessButton from './CustomButton/SuccessButton/SuccessButton';

export default function Composition() {
  return (
    <div className="composition">
      <p>Basic custom Button [ default props ]</p>
      <CustomButton />

      <p>SUCCESS Button</p>
      <SuccessButton />

      <p>ERROR Button</p>
      <ErrorButton />
    </div>
  )
}
