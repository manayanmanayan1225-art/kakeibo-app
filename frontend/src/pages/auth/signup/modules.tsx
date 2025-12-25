import React, { isValidElement } from 'react'
import { useNavigate } from 'react-router-dom';

import { popup } from '../../../components/popup/popup';
import { registerUserAction } from '../../../features/auth/registerUserAction';

const modules = () => {
    const navigate = useNavigate();

    /**
     * 登録ボタン押下時処理
     * @param email 
     * @param pass 
     * @param userName 
     */
    const onClickRegisterBtn = async (email: string,pass: string, userName: string) => {
        const errors: string[] = [];
        //emailバリテーションチェック
        const emailError = isValidEmail(email);
        if(emailError) errors.push(emailError);
        //passバリテーションチェック
        const passError = isValidPass(pass);
        if(passError) errors.push(passError);
        //userNameバリテーションチェック
        const userNamelError = isValidUserName(userName);
        if(userNamelError) errors.push(userNamelError);
        
        if(emailError || passError || userNamelError) {
            popup({
                type: 'alert',
                messages: errors
            });
            return;
        }
        
        const res = await registerUserAction.load({
            email:email,
            pass:pass,
            userName:userName
        });
        if(res.returnStatus === 0) {
            popup({
                type: 'confirm',
                messages: ['ユーザー情報を登録しました。ログインしてください。'],
                okButton: {
                    label: 'OK',
                    onClick: () => {
                        navigate("/login");
                    }
                }
            })
        }else if (res.returnStatus === -1) {
            popup({
                type: 'alert',
                messages: [res.errorMessage ?? '登録に失敗しました']
            })
        }
    }

    //emailバリテーションチェック
    const isValidEmail = (email: string) => {
        if (!email) {
            return 'メールアドレスを入力してください';
        }
        if (email.length > 254) {
            return 'メールアドレスは254文字以内で入力してください';
        }
        // 使用不可文字（空白・全角・制御文字を弾く）
        if (/[^\x21-\x7E]/.test(email)) {
            return '使用できない文字が含まれています';
        }
        // Email形式
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return 'メールアドレスの形式が正しくありません';
        }
        return null;
    };
    //passバリテーションチェック
    const isValidPass = (pass:string) => {
        if(!pass) {
            return 'パスワードを入力してください'
        }
        if (pass.length > 32) {
            return 'パスワードは32文字以内で入力してください';
        }
        if (/[^\x21-\x7E]/.test(pass)) {
            return '使用できない文字が含まれています';
        }
        // 英数字混合チェック
        const hasLetter = /[a-zA-Z]/.test(pass);
        const hasNumber = /[0-9]/.test(pass);

        if (!hasLetter || !hasNumber) {
            return 'パスワードは英字と数字を含めてください';
        }
        return null; // OK
    }
    //userNameバリテーションチェック
    const isValidUserName = (userName:string) => {
        if(!userName) {
            return 'ユーザー名を入力してください'
        }
        if (userName.length > 32) {
            return 'ユーザー名はは32文字以内で入力してください';
        }

    }

    return {
        onClickRegisterBtn:onClickRegisterBtn
    }
  
}



export default modules
