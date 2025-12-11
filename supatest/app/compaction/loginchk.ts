'use client';
import { useEffect } from 'react';
import { handleLoginChk } from '@/app/serveraction/loginchk/loginchkaction';

export const LoginChk = () => {
    useEffect(() => {
        const checkLogin = async () => {
            const currsession = await handleLoginChk();
            if(currsession) {
                return true;
            }else{
                return false;
            }
        };
        checkLogin();
    }, []);
    return null;
}