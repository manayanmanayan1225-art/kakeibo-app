CREATE OR REPLACE FUNCTION get_login_data (
	i_email varchar,
	i_pass varchar
) RETURNS SETOF login_data AS
$$
/*
	ログイン情報の取得をします
	パラメータ：
	 i_email: メールアドレス
	 i_pass:　パスワード
	戻り値:
	 user_id: ユーザーID
	 user_name: ユーザー名
**/
DECLARE
	sql text;
BEGIN
	sql := ''; 
	sql := sql || ' SELECT'; 
	sql := sql || '  user_id,'; 
	sql := sql || '  user_name';
	sql := sql || ' FROM';
	sql := sql || '  user_mst';
	sql := sql || ' WHERE';
	sql := sql || '  email = $1';
	sql := sql || '  AND pass = crypt($2, pass)';
	RETURN QUERY EXECUTE sql USING i_email, i_pass;
END 
$$ LANGUAGE plpgsql;