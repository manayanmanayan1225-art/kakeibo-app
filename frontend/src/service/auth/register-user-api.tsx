import React from 'react'
import type { RegisterUserRequest, RegisterUserResponse } from '../../types/api/registerUser';
import { useRestService } from '../rest-service';

const useApiRegisterUserService = () => {

    const restService = useRestService();

    const registerUser = async (
        req:RegisterUserRequest
    ): Promise<RegisterUserResponse> => {
         return restService.callPost('/RegisterUser', req)
    }

    return {
        registerUser:registerUser
    }
}

export default useApiRegisterUserService
