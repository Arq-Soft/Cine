package com.arquisoft.cine;

import org.testng.annotations.DataProvider;

public class DataProviderClass {

    static int random1;
    static int random2;
    static int random3;
    static int random4;

    public static void generarRandoms(){
        random1 =  (int)(Math.random()*3277);
        random2 =  (int)(Math.random()*3277);
        random3 =  (int)(Math.random()*3277);
        random4 =  (int)(Math.random()*3277);
    }

    @DataProvider(name = "LoginIncorrectoData")
    public Object[][] getLoginIncorrectoData() {
        return new Object[][]{
            {"incorrecto","00000000"},
            {"0000000","incorrecto"},
            {"False1234","False1234"},
            {"ADMIN","ADMIN"}
        };
    }

    @DataProvider(name = "WrongPassData")
    public Object[][] getWrongPassData() {
        return new Object[][]{
            {"0101"+random1,"00000000"},
            {"0101"+random1,"1010Alf"},
            {"0202"+random2,"incorrecto"},
            {"0202"+random2,"Beta2020"},
            {"0303"+random3,"False1234"},
            {"0303"+random3,"30Charlie30"},
        };
    }

    @DataProvider(name = "GreatPassData")
    public Object[][] getGreatPassData() {
        return new Object[][]{
            {"0101"+random1,"1010Alfa"},
            {"0202"+random2,"2020Beta"},
            {"0303"+random3,"3030Charlie"},
        };
    }
    
    @DataProvider(name = "RegistroNuevoData")
    public Object[][] getRegistroNuevoData() {
        return new Object[][]{
            {"Alfa","apellido","0101"+random1,"Alfa."+random1+"@gmail.com","1010Alfa","Citizenship card","Calle 60 Medellin","3001115566","05031990"},
            {"Beta","apellido","0202"+random2,"Beta."+random2+"@outlook.com.co","2020Beta","Identity card","Calle 80 Medellin","3002225566","28091970"},
            {"Charlie","apellido","0303"+random3,"Charlie."+random3+"@microsoft.com","3030Charlie","Passport","Calle 100 Medellin","3003335566","31122000"}
        };
    }
    
    @DataProvider(name = "RegistroDatosFaltantesData")
    public Object[][] getRegistroDatosFaltantesData() {
        return new Object[][]{
            {"","apellido","0102"+random1,"Alfa."+random1+"@gmail.com.es","1010Alfa","Citizenship card","Calle 60 Medellin","3001115566","05031990"},
            {"Beta","","0203"+random2,"Beta."+random2+"@outlook.com.co.es","2020Beta","Identity card","Calle 80 Medellin","3002225566","28091970"},
            {"Charlie","apellido","","Charlie."+random3+"@microsoft.com.es","3030Charlie","Passport","Calle 100 Medellin","3003335566","31122000"},
            {"Alfa","apellido","0103"+random1,"","1010Alfa","Citizenship card","Calle 60 Medellin","3001115566","05031990"},
            {"Beta","apellido","0203"+random2,"Beta."+random2+"@outlook.com.co.es","","Identity card","Calle 80 Medellin","3002225566","28091970"},
            {"Charlie","apellido","0304"+random3,"Charlie."+random3+"@microsoft.com.es","3030Charlie","Passport","","3003335566","31122000"},
            {"Alfa","apellido","0102"+random1,"Alfa."+random1+"@gmail.com.es","1010Alfa","Citizenship card","Calle 60 Medellin","","05031990"},
            {"Beta","apellido","0203"+random2,"Beta."+random2+"@outlook.com.co.es","2020Beta","Identity card","Calle 80 Medellin","3002225566",""},
            {"Charlie","apellido","0304"+random3,"Charlie."+random3+"@microsoft.com.es","3030Charlie","","Calle 100 Medellin","3003335566","31122000"}
        };
    }

    @DataProvider(name = "RegistroRaroData")
    public Object[][] getRegistroRaroData() {
        return new Object[][]{
            {"Alfa007","apellido","0102"+random1,"Alfa."+random1+"@gmail.com.es","1010Alfa","Citizenship card","Calle 60 Medellin","3001115566","05031990"},
            {"Beta","10NoOne10","0203"+random2,"Beta."+random2+"@outlook.com.co.es","2020Beta","Identity card","Calle 80 Medellin","3002225566","28091970"},
            {"Charlie","apellido","NoID","Charlie."+random3+"@microsoft.com.es","3030Charlie","Passport","Calle 100 Medellin","3003335566","31122000"},
            {"Alfa","apellido","0103"+random1,"EstoNoEsUnCorreo","1010Alfa","Citizenship card","Calle 60 Medellin","3001115566","05031990"},
            {"Charlie","apellido","0304"+random3,"Charlie."+random3+"@microsoft.com.es","3030Charlie","Passport","","3003335566","31122000"},
            {"Alfa","apellido","0102"+random1,"Alfa."+random1+"@gmail.com.es","1010Alfa","Citizenship card","Calle 60 Medellin","NoPhone","05031990"}
        };
    }

}