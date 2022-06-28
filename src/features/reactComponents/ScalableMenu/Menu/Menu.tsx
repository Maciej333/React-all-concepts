import { Fragment, useState } from 'react';
import MenuSVG from './menu.svg';
import './Menu.style.scss';

export default function Menu(
    props: {
        user?: JSX.Element,
        links: JSX.Element[],
        protectedLinks?: JSX.Element[]
    }
) {
    const [showSmBar, setShowSmBar] = useState(false);

    return (
        <>
            <nav className='menu menu-lg'>
                <div className='menu-lg-links' style={{ justifyContent: props.user ? 'flex-start' : 'center' }}>
                    <MenuContent {...props} />
                </div>
                {
                    props.user || null
                }
            </nav>

            <nav className='menu menu-sm'>
                <img src={MenuSVG} alt="menu" className='action' onClick={() => setShowSmBar(prev => !prev)} />
                {
                    showSmBar ?
                        <div className='bar-sm'>
                            {
                                props.user || null
                            }
                            <MenuContent {...props} />
                        </div>
                        :
                        null
                }

            </nav>
        </>
    )
}


const MenuContent = (
    props: {
        links: JSX.Element[],
        protectedLinks?: JSX.Element[]
    }
) => {
    return (
        <>
            {
                props.links.map((el, id) => {
                    return <Fragment key={`[menu link ] = ${id}`}>
                        {el}
                    </Fragment>
                })
            }
            {
                props.protectedLinks && props.protectedLinks.map((el, id) => {
                    return <Fragment key={`[menu protected link ] = ${id}`}>
                        {el}
                    </Fragment>
                })
            }
        </>
    )
}