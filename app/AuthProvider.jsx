"use client"
import React, { useEffect, useState } from 'react'
import { useMutation } from 'convex/react';  
import { api } from '@/convex/_generated/api';
import { useUser } from '@stackframe/stack';
import { UserContext } from './_contex/UserContex';

function AuthProvider({ children }) {
    const user = useUser();
    const CreateUser = useMutation(api.users.createUser);
    const [userData,setUserData]= useState();
    useEffect(() => {
        console.log("user", user)
        user && CreateNewUser();
    }, [user]);
    const CreateNewUser = async () => {
       const result = await CreateUser({
            name: user?.displayName,
            email: user.primaryEmail,
        });
        console.log("result", result);
        setUserData(result);
    }
  return (
    <div>
      <UserContext.Provider value={{userData,setUserData}}>
        {children}
      </UserContext.Provider>
    </div>
  )
}

export default AuthProvider