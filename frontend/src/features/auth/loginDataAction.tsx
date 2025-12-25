import useApiLoginService from "../../service/auth/login-api";
import type { LoginRequest } from "../../types/api/auth";
import { actions } from "../../store/action";


const useApi = useApiLoginService();

const fetch = (
    req:LoginRequest
) => {
    return useApi.getLoginData(req);
}


const load = (req:LoginRequest) => {
    return actions.screenAction.app.loading(() => fetch(req))
}

export const loginAction = {
    fetch:fetch,
    load:load
}
