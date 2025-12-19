package json;

import java.io.IOException;
import java.sql.Connection;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import controller.ControllerBase;

@WebServlet("/DbTest")
public class DbTest extends HttpServlet {
  protected void doGet(HttpServletRequest req, HttpServletResponse res)
      throws IOException {
    try {
      Connection conn = new ControllerBase().getDBConnection();
      res.getWriter().write("DB OK");
      conn.close();
    } catch (Exception e) {
      e.printStackTrace();
      res.getWriter().write("DB NG");
    }
  }
}
