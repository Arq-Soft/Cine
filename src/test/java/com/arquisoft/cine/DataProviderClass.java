package com.arquisoft.cine;

import org.testng.annotations.DataProvider;

public class DataProviderClass {
    int random1 =  (int)(Math.random()*3277);
    int random2 =  (int)(Math.random()*3277);
    int random3 =  (int)(Math.random()*3277);
    int random4 =  (int)(Math.random()*3277);

    @DataProvider(name = "LoginIncorrectoData")
    public Object[][] getLoginIncorrectoData() {
        return new Object[][]{
            {"incorrecto","00000000"},
            {"0000000","incorrecto"},
            {"False1234","False1234"},
            {"","0000"}
        };
    }
    
    @DataProvider(name = "RegistroNuevoData")
    public Object[][] getRegistroNuevoData() {
        return new Object[][]{
            {"Alfa","apellido","0101"+random1,"Alfa."+random1+"@gmail.com","1010Alfa","Calle 60 Medellin","3001115566"},
            {"Beta","apellido","0202"+random2,"Beta."+random2+"@outlook.com.co","2020Beta","Calle 80 Medellin","3002225566"},
            {"Charlie","apellido","0303"+random3,"Charlie."+random3+"@microsoft.com","3030Charlie","Calle 100 Medellin","3003335566"}
        };
    }
}