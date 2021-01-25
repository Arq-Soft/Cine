package com.arquisoft.cine;

//Imports de TestNG
import org.testng.annotations.*;
import static org.testng.Assert.*;

//Imports de JAVA
import java.util.List;
import java.util.concurrent.TimeUnit;

//Imports de Selenium
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By.ByClassName;
import org.openqa.selenium.By.ByName;
import org.openqa.selenium.By.ByXPath;
import org.openqa.selenium.chrome.ChromeDriver;

import org.openqa.selenium.By;

//Otros imports

//@Listeners(JyperionListener.class)
public class CineAppSeleniumTests {
	private WebDriver driver;

	@BeforeMethod
	public void setUp() {
		System.setProperty("webdriver.chrome.driver", "./src/main/resources/testResources/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("http://localhost:3000");
	}

	//** ************************************************************
	//** Puebas de transición de paginas entre login y registro
	//** ************************************************************

	/**
	 * Prueba que las transiciones del botón de registro, al login y desde allí nuevamente al registro
	 */
	@Test(priority = 0)
	public void transicionesDesdeRegistro() {
		driver.findElement(By.linkText("Sign Up")).click();
		driver.findElement(By.cssSelector(".links-access")).click();
		driver.findElement(By.cssSelector(".links-access")).click();
		List<WebElement> elements = driver.findElements(By.xpath("//h3[contains(.,\'Register\')]"));
		assertTrue(elements.size() == 1);
	}

    /**
	 * Prueba que las transiciones del botón de login, al registro y desde allí nuevamente al login
	 */
	@Test(priority = 0)
	public void transicionesDesdeLogin() {
		driver.findElement(By.linkText("Log in")).click();
		driver.findElement(By.cssSelector(".links-access")).click();
		driver.findElement(By.cssSelector(".links-access")).click();
		List<WebElement> elements = driver.findElements(By.xpath("//h3[contains(.,\'Sign In\')]"));
		assertTrue(elements.size() == 1);
	}

	//** ************************************************************
	//** Puebas de Login 
	//** ************************************************************

	/**
	 * Comprueba que no deje inciar sesión alguien no registrado
	 * 
	 * @throws InterruptedException
	 */
	@Test(priority = 1, dataProviderClass = DataProviderClass.class, dataProvider = "LoginIncorrectoData")
	public void loginIncorrecto(String id, String pass) throws InterruptedException {
		Alert alerta;

		driver.findElement(By.linkText("Log in")).click();
		driver.findElement(ByName.name("username")).sendKeys(id);
		driver.findElement(ByName.name("password")).sendKeys(pass);
		driver.findElement(ByXPath.xpath("//*[@id=\"root\"]/div/div/div/div[2]/form/div[3]/button[2]")).click();
		
		Thread.sleep(500);
		alerta = driver.switchTo().alert();

		String result = alerta.getText();
		String expectedResult = "Invalid credentials";

		assertTrue(result.equals(expectedResult));
	}

	/**
	 * Comprueba que no deje inciar sesión si sólo la contraseña es incorrecta
	 */
	@Test(priority = 3)
	public void loginContrasenaIncorrecta() {
		assertTrue("1"=="2");
	}

	/**
	 * Comprueba que no deje inciar sesión si no introdujo datos
	 * 
	 * @throws InterruptedException
	 */
	@Test(priority = 1)
	public void loginVacio() throws InterruptedException {
		Alert alerta;
		driver.findElement(By.linkText("Log in")).click();
		driver.findElement(ByXPath.xpath("//*[@id=\"root\"]/div/div/div/div[2]/form/div[3]/button[2]")).click();
		
		Thread.sleep(500);
		alerta = driver.switchTo().alert();

		String result = alerta.getText();
		String expectedResult = "Invalid credentials";

		assertTrue(result.equals(expectedResult));
	}

	/**
	 * Prueba el inicio de sesión de un cliente registrado que introdujo sus datos correctamente
	 */
	@Test(priority = 4)
	public void loginCorrecto() {
		assertTrue("1"=="2");
	}

	/**
	 * Prueba el salida de sesión
	 */
	@Test(priority = 5)
	public void logout() {
		assertTrue("1"=="2");
	}


	//** ************************************************************
	//** Puebas de registro
	//** ************************************************************

	/**
	 * Prueba el registro correcto de un cliente
	 */
	@Test(priority = 2)
	public void registroNuevo() {
		assertTrue("1"=="2");
	}

	/**
	 * Prueba el registro de un cliente que ya está registrado
	 */
	@Test(priority = 3)
	public void registroDuplicado() {
		assertTrue("1"=="2");
	}

	/**
	 * Prueba el registro de un cliente que
	 */
	@Test(priority = 3)
	public void registroSemiDuplicado() {
		assertTrue("1"=="2");
	}

	/**
	 * Prueba que no acepte registros donde falten datos
	 */
	@Test(priority = 2)
	public void registroDatosFaltantes() {

		assertTrue("1"=="2");
	}

	/**
	 * Prueba que no acepte regostros vacios
	 * 
	 * @throws InterruptedException
	 */
	@Test(priority = 2)
	public void registroVacio() throws InterruptedException {
		Alert alerta;
		driver.findElement(By.linkText("Sign Up")).click();
		driver.findElement(ByXPath.xpath("//*[@id=\"root\"]/div/div/div/div[2]/form/div[10]/button[2]")).click();
		
		Thread.sleep(500);
		alerta = driver.switchTo().alert();

		String result = alerta.getText();
		String expectedResult = "los campos requeridos";

		assertTrue(result.equals(expectedResult));
	}

	/**
	 * Prueba que no acepte registros donde el tipo de los datos introducidos no conincidan 
	 * con los tipos de los datos requeridos
	 */
	@Test(priority = 2)
	public void registroTiposRaros() {
		assertTrue("1"=="2");
	}

	@AfterMethod
	public void tearDown(){
		driver.quit();
	}


}
