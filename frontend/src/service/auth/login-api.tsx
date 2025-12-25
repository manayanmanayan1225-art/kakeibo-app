import type { LoginRequest, LoginResponse } from "../../types/api/auth"
import { useRestService } from "../rest-service"
import React from 'react'

export const useApiLoginService = () => {

    const restService = useRestService();

    /**
     * ログインデータの取得
     * @param req 
     * @returns 
     */
    const getLoginData = async (
        req: LoginRequest
    ): Promise<LoginResponse> => {
        return restService.callPost('/Login', req)
    }

    return {
        getLoginData: getLoginData
    }
}

export default useApiLoginService;


