CREATE OR REPLACE FUNCTION register_user_data (
	i_email varchar,
	i_pass varchar,
	i_user_name varchar
) RETURNS integer AS
$$
/*
	ユーザー情報を登録します。
	パラメータ：
	 i_email: メールアドレス
	 i_pass: パスワード
	 i_user_name:　ユーザー名
	戻り値
	 status ステータス 
 **/
DECLARE
	sql text;
	emailDup integer;
BEGIN
	-- email重複チェック
	SELECT COUNT(*)
	INTO emailDup
	FROM user_mst um
	WHERE um.email = i_email;
	
	IF emailDup > 0 THEN
        RETURN -1;
	END IF;
	
	sql := ''; 
	sql := sql || ' INSERT INTO user_mst ('; 
	sql := sql || '   user_id,';
	sql := sql || '   user_name,';
	sql := sql || '   email,';
	sql := sql || '   pass,';
	sql := sql || '   register_stamp';
	sql := sql || ' ) VALUES (';
	sql := sql || '   uuid_generate_v4(),';
	sql := sql || '   $1,';
	sql := sql || '   $2,';
	sql := sql || '   crypt($3,gen_salt(''bf'')),';
	sql := sql || '   CURRENT_TIMESTAMP';
	sql := sql || ' )';
	
    EXECUTE sql
        USING i_user_name, i_email, i_pass;

    RETURN 0;
END 
$$ LANGUAGE plpgsql;