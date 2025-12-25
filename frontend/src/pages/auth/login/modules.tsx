import { useNavigate } from 'react-router-dom';
import { popup } from '../../../components/popup/popup';
import { loginAction } from '../../../features/auth/loginDataAction';
import { useDispatch } from 'react-redux';
import { setAuth } from '../../../store/auth/authSlice';

const modules = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onclickLogin = async (email: string, pass: string) => {
        const res = await loginAction.load({
            email: email,
            pass: pass
        })
        if(res.returnStatus === 0) {

            //ローカルストレージにtokenを保存
            localStorage.setItem('auth_token',res.token!);

            //ユーザー情報保存
            dispatch(
                setAuth({
                    userId:res.userId!,
                    userName:res.userName!
                })
            )

            navigate("/home")
        }else if(res.returnStatus === -1){
            popup({
                type: 'alert',
                messages: [res.errorMessage ?? 'ログインに失敗しました']
            })
        }
    }

    return {
        onclickLogin:onclickLogin
    }
}

export default modules
