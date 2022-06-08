import { useState } from 'react';
import useApi from '../../../core/hooks/useApi';
import { IHttpModel } from '../../../core/models/HttpModel';
import { IHttpResponse } from '../../../core/models/HttpResponse';
import { deleteFailureUrl, deleteSuccessUrl, getFailureUrl, getSuccessUrl, postFailureUrl, postSuccessUrl, putFailureUrl, putSuccessUrl } from '../httpUrl';
import './HTTPuseApi.style.scss';

export default function HTTPuseApi() {

  const initResponse: IHttpResponse = {
    msg: ""
  }
  const postData: IHttpModel = {
    name: "postName useApi",
    age: 21
  }
  const putData: IHttpModel = {
    name: "putName useApi",
    age: 31
  }

  const [urlGet, setUrlGet] = useState(getSuccessUrl);
  const [urlPost, setUrlPost] = useState(postSuccessUrl);
  const [urlPut, setUrlPut] = useState(putSuccessUrl);
  const [urlDelete, setUrlDelete] = useState(deleteSuccessUrl);

  const useGet = useApi(urlGet, "get", { name: '' });
  const usePost = useApi(urlPost, "post", initResponse, postData);
  const usePut = useApi(urlPut, "put", initResponse, putData);
  const useDelete = useApi(urlDelete, "delete", initResponse);

  return (
    <div className='HTTP-use-api'>

      <span>Get:</span>
      <span className='state'>
        {
          useGet.loading ?
            "loading get"
            :
            useGet.error ?
              useGet.error
              :
              (useGet.data ? useGet.data.name : "")
        }
      </span>
      <div className='operations'>
        <button onClick={() => setUrlGet(getSuccessUrl)}>Success</button>
        <button onClick={() => setUrlGet(getFailureUrl)}>Failure</button>
      </div>

      <span>Post:</span>
      <span className='state'>
        {
          usePost.loading ?
            "loading post"
            :
            usePost.error ?
              usePost.error
              :
              (usePost.data ? usePost.data.msg : "")
        }
      </span>
      <div className='operations'>
        <button onClick={() => setUrlPost(postSuccessUrl)}>Success</button>
        <button onClick={() => setUrlPost(postFailureUrl)}>Failure</button>
      </div>

      <span>Put:</span>
      <span className='state'>
        {
          usePut.loading ?
            "loading put"
            :
            usePut.error ?
              usePut.error
              :
              (usePut.data ? usePut.data.msg : "")
        }
      </span>
      <div className='operations'>
        <button onClick={() => setUrlPut(putSuccessUrl)}>Success</button>
        <button onClick={() => setUrlPut(putFailureUrl)}>Failure</button>
      </div>

      <span>Delete:</span>
      <span className='state'>
        {
          useDelete.loading ?
            "loading put"
            :
            useDelete.error ?
              useDelete.error
              :
              (useDelete.data ? useDelete.data.msg : "")
        }
      </span>
      <div className='operations'>
        <button onClick={() => setUrlDelete(deleteSuccessUrl)}>Success</button>
        <button onClick={() => setUrlDelete(deleteFailureUrl)}>Failure</button>
      </div>

    </div>
  )
}
