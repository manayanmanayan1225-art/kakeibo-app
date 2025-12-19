package util;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

import java.security.Key;
import java.util.Date;

public class JwtUtil {

    // 32バイト以上必須（HS256）
    private static final String SECRET =
            "kakeibo-secret-key-kakeibo-secret-key";

    private static final Key KEY =
            Keys.hmacShaKeyFor(SECRET.getBytes());

    public static String createToken(String userId) {
        return Jwts.builder()
                .setSubject(userId)
                .setIssuedAt(new Date())
                .setExpiration(
                        new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 24)
                )
                .signWith(KEY, SignatureAlgorithm.HS256)
                .compact();
    }
}
