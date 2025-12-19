package model;

public class LoginData {

	/* ユーザーID */
    private String userId;
    /* ユーザー名 */
    private String userName;
    /* メールアドレス */
    private String email;
    /* パスワード */
    private String pass;

    /**
     * ユーザーIDを取得
     * @return
     */
    public String getUserId() {
        return userId;
    }
    /**
     * ユーザーIDを設定
     * @param userId
     */
    public void setUserId(String userId) {
        this.userId = userId;
    }
    
    /**
     * ユーザー名を取得
     * @return
     */
    public String getUserName() {
        return userName;
    }
    /**
     * ユーザー名を設定
     * @param userName
     */
    public void setUserName(String userName) {
        this.userName = userName;
    }
    
    /**
     * メールアドレスを取得
     * @return
     */
    public String getEmail() {
    	return email;
    }
    /**
     * メールアドレスを設定
     * @param email
     */
    public void setEmail(String email) {
    	this.email = email;
    }

    /**
     * パスワードを取得
     * @return
     */
    public String getPass() {
        return pass;
    }
    /**
     * パスワードを設定
     * @param pass
     */
    public void setPass(String pass) {
        this.pass = pass;
    }
}