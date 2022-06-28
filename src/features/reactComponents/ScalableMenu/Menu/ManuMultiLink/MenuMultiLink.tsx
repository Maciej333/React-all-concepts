import { useState } from 'react';
import MenuLink from '../MenuLink/MenuLink';
import './MenuMultiLink.style.scss';

export default function MenuMultiLink(props: { mainName: string, elements: { path: string, name: string }[] }) {

  const { mainName, elements } = props;
  const [showElements, setShowElements] = useState(false);

  const handleMouseEnter = () => {
    setShowElements(true);
  }

  const handleMouseLeave = () => {
    setShowElements(false);
  }

  return (
    <div className='menu-multi-link' onMouseEnter={handleMouseEnter} >
      <div className={`main-name ${showElements ? 'active' : ''}`}>{mainName}</div>
      {
        showElements ?
          <div className='elements-list' onMouseLeave={handleMouseLeave}>
            {
              elements.map((el, id) => {
                return <MenuLink key={`[Link List ${mainName}] = ${id}`} path={el.path} name={el.name} />
              })
            }
          </div>
          :
          null
      }
    </div>
  )
}
