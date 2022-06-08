import { useState } from 'react';
import { HttpModel } from '../../../core/models/HttpModel';
import { deleteFailureUrl, deleteSuccessUrl, getFailureUrl, getSuccessUrl, postFailureUrl, postSuccessUrl, putFailureUrl, putSuccessUrl } from '../httpUrl';
import './HTTPFetch.style.scss';

export default function HTTPFetch() {

    const postData: HttpModel = {
        name: "postName",
        age: 21
    }
    const putData: HttpModel = {
        name: "putName",
        age: 31
    }
    const [stateGet, setStateGet] = useState("click");
    const [loadGet, setLoadGet] = useState(false);
    const [statePost, setStatePost] = useState("click");
    const [loadPost, setLoadPost] = useState(false);
    const [statePut, setStatePut] = useState("click");
    const [loadPut, setLoadPut] = useState(false);
    const [stateDelete, setStateDelete] = useState("click");
    const [loadDelete, setLoadDelete] = useState(false);

    const handleClickGet = (version: boolean) => {
        const url = version ? getSuccessUrl : getFailureUrl;
        setLoadGet(true);
        fetch(url)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error(res.status + "");
            })
            .then(data => {
                setStateGet(data.name);
            })
            .catch(err => {
                setStateGet("get error = " + err);
            })
            .finally(() => {
                setLoadGet(false);
            })
    }

    const handleClickPost = (version: boolean) => {
        const url = version ? postSuccessUrl : postFailureUrl;
        setLoadPost(true);
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(postData),
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error(res.status + "");
            })
            .then(data => {
                setStatePost(data.msg);
            })
            .catch(err => {
                setStatePost("post error = " + err);
            })
            .finally(() => {
                setLoadPost(false);
            })
    }

    const handleClickPut = (version: boolean) => {
        const url = version ? putSuccessUrl : putFailureUrl;
        setLoadPut(true);
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(putData),
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error(res.status + "");
            })
            .then(data => {
                setStatePut(data.msg);
            })
            .catch(err => {
                setStatePut("put error = " + err);
            })
            .finally(() => {
                setLoadPut(false);
            })
    }

    const handleClickDelete = (version: boolean) => {
        const url = version ? deleteSuccessUrl : deleteFailureUrl;
        setLoadDelete(true);
        fetch(url, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
            }
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error(res.status + "");
            })
            .then(data => {
                setStateDelete(data.msg);
            })
            .catch(err => {
                setStateDelete("delete error = " + err);
            })
            .finally(() => {
                setLoadDelete(false);
            })
    }

    return (
        <div className='HTTP-fetch'>
            <span>Get:</span>
            <span className='state'>{loadGet ? "loading get" : stateGet}</span>
            <div className='operations'>
                <button onClick={() => handleClickGet(true)}>Success</button>
                <button onClick={() => handleClickGet(false)}>Failure</button>
            </div>

            <span>Post:</span>
            <span className='state'>{loadPost ? "loading post" : statePost}</span>
            <div className='operations'>
                <button onClick={() => handleClickPost(true)}>Success</button>
                <button onClick={() => handleClickPost(false)}>Failure</button>
            </div>

            <span>Put:</span>
            <span className='state'>{loadPut ? "loading put" : statePut}</span>
            <div className='operations'>
                <button onClick={() => handleClickPut(true)}>Success</button>
                <button onClick={() => handleClickPut(false)}>Failure</button>
            </div>

            <span>Delete:</span>
            <span className='state'>{loadDelete ? "loading delete" : stateDelete}</span>
            <div className='operations'>
                <button onClick={() => handleClickDelete(true)}>Success</button>
                <button onClick={() => handleClickDelete(false)}>Failure</button>
            </div>
        </div>
    )
}
