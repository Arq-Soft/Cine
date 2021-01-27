package com.arquisoft.cine;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.By.ById;
import org.openqa.selenium.By.ByName;
import org.openqa.selenium.By.ByXPath;
import org.openqa.selenium.support.ui.Select;

public class TestingMethods {
    private WebDriver driver;

    public TestingMethods(WebDriver driver){
        this.driver=driver;
    }

    public void inciarSesion(String id, String pass) {
        driver.findElement(By.linkText("Log in")).click();
		driver.findElement(ByName.name("username")).sendKeys(id);
		driver.findElement(ByName.name("password")).sendKeys(pass);
		driver.findElement(ByXPath.xpath("//*[@id=\"root\"]/div/div/div/div[2]/form/div[3]/button[2]")).click();
    }   

    public void registrar(String nom, String ape, String id, String mail, String pass, String idtype,String dir, String tel, String bday){
        driver.findElement(By.linkText("Sign Up")).click();

		Select idTypeSelect = new Select(driver.findElement(ById.id("id_type")));

		driver.findElement(ById.id("name")).sendKeys(nom);
		driver.findElement(ById.id("lastname")).sendKeys(ape);
		driver.findElement(ById.id("id")).sendKeys(id);
		driver.findElement(ById.id("email")).sendKeys(mail);
		driver.findElement(ById.id("password")).sendKeys(pass);
		if(!idtype.equals("")){
			idTypeSelect.selectByValue("Identity card");
			idTypeSelect.selectByValue(idtype);
		}
		driver.findElement(ById.id("adress")).sendKeys(dir);
		driver.findElement(ById.id("phone")).sendKeys(tel);
		driver.findElement(ByXPath.xpath("//*[@id=\"root\"]/div/div/div/div[2]/form/div[9]/input")).sendKeys(bday);;
		
		driver.findElement(ByXPath.xpath("//*[@id=\"root\"]/div/div/div/div[2]/form/div[10]/button[2]")).click();
    }
}
