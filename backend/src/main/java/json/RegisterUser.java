package json;

import java.io.BufferedReader;
import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;
import org.json.simple.JSONValue;

import controller.LoginController;

@WebServlet(name = "RegisterUser", urlPatterns = { "/RegisterUser" })
public class RegisterUser extends HttpServlet {
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
            String pass = (String) req.get("pass");
            //userNameを取得
            String userName = (String) req.get("userName");
            
            LoginController lc = new LoginController();
            
            int lcData = lc.registerUser(email, pass, userName);
            
            if(lcData == -1) {
                response.getWriter().write(
                        "{"
                        + "\"returnStatus\":-1,"
                        + "\"errorCode\":\"EMAIL_DUPLICATE\","
                        + "\"errorMessage\":\"このメールアドレスは既に使用されています\""
                        + "}"
                );
                return;
            }else {
    	        response.getWriter().write(
    		            "{"
    		            + "\"returnStatus\":0"
    		            + "}"
    		        );
            }

		}catch (Exception e) {
			e.printStackTrace(); 
            response.setStatus(500);
            response.getWriter().write(
            	"{\"returnStatus\":-1,\"errorCode\":\"ユーザー登録に失敗しました\"}"
            );
            return;			
		}
	}
}
