import { lazy, Suspense } from 'react';
import './CodeSplit.style.scss';
import Element from './Element/Element';

const ElementLazy = lazy(() => import('./ElementLazy/ElementLazy'));

export default function CodeSplit() {
    return (
        <div className='code-split'>
            <p>Element with normal loading</p>
            <Element />

            <p>Element with lazy loading [ change network speed 'good 2D' ]</p>
            <Suspense fallback={<span>...loading</span>}>
                <ElementLazy />
            </Suspense>
        </div>
    )
}
