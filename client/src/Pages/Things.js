import React from 'react'
import RenderJson from '../Components/RenderJson';
import useAxiosOnMount from '../Hooks/useAxiosOnMount';

const Things = ()=>{
  const {data: things, setData: setThings, loading: thingsLoading, error: thingsError} = useAxiosOnMount('/api/things')
  return(
    <div>
      <h1>Things page</h1>
      <RenderJson json={things} />
    </div>
  );
};

export default Things;