package controller;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import model.LoginData;

public class LoginController extends ControllerBase {
		
	/**
	 * ログイン情報を取得
	 * @param email
	 * @param pass
	 * @return
	 * @throws Exception
	 */
	public List<LoginData> getLoginData(
				String email,
				String pass
			)  throws Exception {
		List <LoginData> list;
		LoginData data = null;
		
		// DBアクセス関連
		Connection conn        = null;
		CallableStatement stmt = null;
		ResultSet rset         = null;
		
		try {
			// コネクション取得
			conn = getDBConnection();
			
			//PreparedStatement作成
			stmt = conn.prepareCall("SELECT * FROM get_login_data( ?, ?)");
			stmt.setString(1, email);
			stmt.setString(2,pass);
			
			// SQL実行
			stmt.execute();
			
			//取得結果を格納
			rset = stmt.getResultSet();
			list = new ArrayList<LoginData>();
			
			while(rset.next()) {
				data = new LoginData();
				data.setUserId(rset.getString(1));
				data.setUserName(rset.getString(2));
				list.add(data);
			}
		}finally {
			if( rset != null ) { try{ rset.close(); }catch(Exception e){} }
			if( stmt != null ) { try{ stmt.close(); }catch(Exception e){} }
			if( conn != null ) { try{ conn.close(); }catch(Exception e){} }
		}
		return list;
	}
	
	public int registerUser(
				String email,
				String pass,
				String userName
			) throws Exception {
		
		int ret = 0;
		
		// DBアクセス関連
		Connection conn        = null;
		CallableStatement stmt = null;
		
		try {
			//コネクション取得
			conn = getDBConnection();
			
			//PreparedStatement作成
			stmt = conn.prepareCall("{ ? = call register_user_data(?, ?, ?) }");
			stmt.registerOutParameter(1, java.sql.Types.INTEGER);
			stmt.setString(2, email);
			stmt.setString(3, pass);
			stmt.setString(4, userName);
			
			// SQL実行
			stmt.executeUpdate();

			ret = stmt.getInt(1);
			
		}finally {
			if( stmt != null ) { try{ stmt.close(); }catch(Exception e){} }
			if( conn != null ) { try{ conn.close(); }catch(Exception e){} }			
		}
		
		return ret;
	}

}
