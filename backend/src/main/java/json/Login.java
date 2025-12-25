package json;

import java.io.BufferedReader;
import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;
import org.json.simple.JSONValue;

import controller.LoginController;
import model.LoginData;
import util.JwtUtil;

/**
 * ログイン情報を取得するクラス
 */
@WebServlet(name = "Login", urlPatterns = { "/Login" })
public class Login extends HttpServlet {
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		try {
			response.setContentType("application/json;charset=UTF-8");
			
            // JSON読み取り
            BufferedReader reader = request.getReader();
            StringBuilder sb = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                sb.append(line);
            }

            JSONObject req = (JSONObject) JSONValue.parse(sb.toString());
            //emailを取得
            String email = (String) req.get("email");
            //passを取得
            String pass  = (String) req.get("pass");
			
            
			LoginController lc = new LoginController();
			
			List<LoginData> lcList = lc.getLoginData(email, pass);
			if(lcList.size() == 0) {
	            response.getWriter().write(
	                    "{"
	                    + "\"returnStatus\":-1,"
	                    + "\"errorCode\":\"INVALID_CREDENTIALS\","
	                    + "\"errorMessage\":\"メールアドレスまたはパスワードが違います\""
	                    + "}"
	            );
	            return;
			}
			
	        LoginData data = lcList.get(0);
			
	        String token = JwtUtil.createToken(data.getUserId());

	        response.getWriter().write(
	            "{"
	            + "\"returnStatus\":0,"
	            + "\"userId\":\"" + data.getUserId() + "\","
	            + "\"userName\":\"" + data.getUserName() + "\","
	            + "\"token\":\"" + token + "\""
	            + "}"
	        );
			
		}catch (Exception e) {
			e.printStackTrace(); 
            response.setStatus(500);
            response.getWriter().write(
            	"{\"returnStatus\":-1,\"errorCode\":\"ログインに失敗しました\"}"
            );
            return;
		}
	}
}
