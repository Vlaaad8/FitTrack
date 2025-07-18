package org.example;

import org.mindrot.jbcrypt.BCrypt;

public class CryptUtils {

    public static String hashPassword(String password) {
        return BCrypt.hashpw(password, BCrypt.gensalt());
    }

}
