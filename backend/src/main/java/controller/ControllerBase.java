package controller;

import java.sql.Connection;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.sql.DataSource;

public class ControllerBase {

	public Connection getDBConnection() throws Exception {
        Context ctx = new InitialContext();
        DataSource ds =
            (DataSource) ctx.lookup("java:/comp/env/jdbc/kakeibo");
        return ds.getConnection();
    }
    
}
