import { useEffect, useState } from 'react';
import { deleteServer, getServer, postServer, putServer } from '../../../core/api/reactHTTP.api';
import { IHttpModel } from '../../../core/models/HttpModel';
import { deleteFailureUrl, deleteSuccessUrl, getFailureUrl, getSuccessUrl, postFailureUrl, postSuccessUrl, putFailureUrl, putSuccessUrl } from '../httpUrl';
import './HTTPserverApi.style.scss';

export default function HTTPserverApi() {

    const postData: IHttpModel = {
        name: "postName api",
        age: 21
    }
    const putData: IHttpModel = {
        name: "putName api",
        age: 31
    }
    const [stateGet, setStateGet] = useState({
        url: getSuccessUrl,
        value: {
            name: ""
        },
        error: "",
        loading: true
    });
    const [statePost, setStatePost] = useState({
        url: postSuccessUrl,
        value: {
            msg: ""
        },
        error: "",
        loading: true
    });
    const [statePut, setStatePut] = useState({
        url: putSuccessUrl,
        value: {
            msg: ""
        },
        error: "",
        loading: true
    });
    const [stateDelete, setStateDelete] = useState({
        url: deleteSuccessUrl,
        value: {
            msg: ""
        },
        error: "",
        loading: true
    });

    useEffect(() => {
        setStateGet(prev => { return { ...prev, loading: true } });
        getServer(stateGet.url)
            .then(res => {
                setStateGet(prev => { return { ...prev, value: res.data, error: "" } })
            })
            .catch(err => {
                setStateGet(prev => { return { ...prev, value: { name: "" }, error: err.message } })
            })
            .finally(() => {
                setStateGet(prev => { return { ...prev, loading: false } });
            })
    }, [stateGet.url]);
    useEffect(() => {
        setStatePost(prev => { return { ...prev, loading: true } });
        postServer(statePost.url, postData)
            .then(res => {
                setStatePost(prev => { return { ...prev, value: res.data, error: "" } })
            })
            .catch(err => {
                setStatePost(prev => { return { ...prev, value: { msg: "" }, error: err.message } })
            })
            .finally(() => {
                setStatePost(prev => { return { ...prev, loading: false } });
            })
    }, [statePost.url]);
    useEffect(() => {
        setStatePut(prev => { return { ...prev, loading: true } });
        putServer(statePut.url, putData)
            .then(res => {
                setStatePut(prev => { return { ...prev, value: res.data, error: "" } })
            })
            .catch(err => {
                setStatePut(prev => { return { ...prev, value: { msg: "" }, error: err.message } })
            })
            .finally(() => {
                setStatePut(prev => { return { ...prev, loading: false } });
            })
    }, [statePut.url]);
    useEffect(() => {
        setStateDelete(prev => { return { ...prev, loading: true } });
        deleteServer(stateDelete.url)
            .then(res => {
                setStateDelete(prev => { return { ...prev, value: res.data, error: "" } })
            })
            .catch(err => {
                setStateDelete(prev => { return { ...prev, value: { msg: "" }, error: err.message } })
            })
            .finally(() => {
                setStateDelete(prev => { return { ...prev, loading: false } });
            })
    }, [stateDelete.url]);

    return (
        <div className='HTTP-server-api'>

            <span>Get:</span>
            <span className='state'>{stateGet.loading ? "Loading..." : stateGet.error ? stateGet.error : stateGet.value.name}</span>
            <div className='operations'>
                <button onClick={() => setStateGet(prev => { return { ...prev, url: getSuccessUrl } })}>Success</button>
                <button onClick={() => setStateGet(prev => { return { ...prev, url: getFailureUrl } })}>Failure</button>
            </div>

            <span>Post:</span>
            <span className='state'>{statePost.loading ? "Loading..." : statePost.error ? statePost.error : statePost.value.msg}</span>
            <div className='operations'>
                <button onClick={() => setStatePost(prev => { return { ...prev, url: postSuccessUrl } })}>Success</button>
                <button onClick={() => setStatePost(prev => { return { ...prev, url: postFailureUrl } })}>Failure</button>
            </div>

            <span>Put:</span>
            <span className='state'>{statePut.loading ? "Loading..." : statePut.error ? statePut.error : statePut.value.msg}</span>
            <div className='operations'>
                <button onClick={() => setStatePut(prev => { return { ...prev, url: putSuccessUrl } })}>Success</button>
                <button onClick={() => setStatePut(prev => { return { ...prev, url: putFailureUrl } })}>Failure</button>
            </div>

            <span>Delete:</span>
            <span className='state'>{stateDelete.loading ? "Loading..." : stateDelete.error ? stateDelete.error : stateDelete.value.msg}</span>
            <div className='operations'>
                <button onClick={() => setStateDelete(prev => { return { ...prev, url: deleteSuccessUrl } })}>Success</button>
                <button onClick={() => setStateDelete(prev => { return { ...prev, url: deleteFailureUrl } })}>Failure</button>
            </div>

        </div>
    )
}
