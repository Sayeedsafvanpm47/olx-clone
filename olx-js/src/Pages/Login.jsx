import React, { lazy,Suspense } from 'react';

const Login = lazy(()=>import('../Components/Login/Login'))

function LoginPage() {

  return (
    <div>
<Suspense fallback={<div style={{alignContent:'center'}} className='spinner-border text-primary'>Loading...</div>}>

<Login />
</Suspense>
   
    </div>
  );
}

export default LoginPage;