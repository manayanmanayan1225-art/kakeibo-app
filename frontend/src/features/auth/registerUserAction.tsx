import useApiRegisterUserService from "../../service/auth/register-user-api";
import type { RegisterUserRequest } from "../../types/api/registerUser";
import { actions } from "../../store/action";


const useApi = useApiRegisterUserService();

const fetch = (
    req:RegisterUserRequest
) => {
    return useApi.registerUser(req);
}


const load = (req:RegisterUserRequest) => {
    return actions.screenAction.app.loading(() => fetch(req))
}

export const registerUserAction = {
    fetch:fetch,
    load:load
}
