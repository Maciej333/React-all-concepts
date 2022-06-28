import { UserRoles } from '../../../core/utils/userRoles.enum';
import MenuMultiLink from './Menu/ManuMultiLink/MenuMultiLink';
import Menu from './Menu/Menu';
import MenuLink from './Menu/MenuLink/MenuLink';
import MenuProtectedLink from './Menu/MenuProtectedLink/MenuProtectedLink';
import MenuUser from './Menu/MenuUser/MenuUser';
import './ScalableMenu.style.scss';

export default function ScalableMenu() {
    return (
        <div className='scalable-menu'>
            <Menu
                links={[
                    <MenuLink path="/" name="link 1" />,
                    <MenuLink path="/" name="link 2" />,
                    <MenuLink path="/" name="link 3" />,
                    <MenuLink path="/" name="link 4" />,
                    <MenuLink path="/" name="link 5" />,
                    <MenuLink path="/" name="link 6" />,
                    <MenuMultiLink
                        mainName="multi 1"
                        elements={[
                            {
                                path: "/",
                                name: "multi link 1"
                            },
                            {
                                path: "/",
                                name: "multi link 2"
                            },
                            {
                                path: "/",
                                name: "multi link 3"
                            },
                        ]}
                    />
                ]}
            />
            <Menu
                user={
                    <MenuUser pathToProfile="/profile" />
                }
                links={[
                    <MenuLink path="/" name="link 11" />,
                    <MenuLink path="/" name="link 12" />,
                    <MenuLink path="/" name="link 13" />,
                    <MenuLink path="/" name="link 14" />,
                    <MenuMultiLink
                        mainName="multi 11"
                        elements={[
                            {
                                path: "/",
                                name: "multi link 11"
                            },
                            {
                                path: "/",
                                name: "multi link 12"
                            },
                            {
                                path: "/",
                                name: "multi link 13"
                            },
                            {
                                path: "/",
                                name: "multi link long 14"
                            },
                        ]}
                    />
                ]}
                protectedLinks={[
                    <MenuProtectedLink path="/" name="protected 1" role={UserRoles.AUTH} />,
                    <MenuProtectedLink path="/" name="protected 2" role={UserRoles.NO_AUTH} />,
                ]}
            />
        </div>
    )
}
