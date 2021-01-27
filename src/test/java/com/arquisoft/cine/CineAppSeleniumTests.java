package com.arquisoft.cine;

//Imports de TestNG
import org.testng.annotations.*;
import static org.testng.Assert.*;

//Imports de JAVA
import java.util.List;

//Imports de Selenium
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By.ById;
import org.openqa.selenium.By.ByName;
import org.openqa.selenium.By.ByXPath;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.chrome.ChromeDriver;

import org.openqa.selenium.By;

//Otros imports

@Listeners(JyperionListener.class)
public class CineAppSeleniumTests {
	private WebDriver driver;

	@BeforeTest
	public void preTests(){
		DataProviderClass.generarRandoms();
	}

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
	@Test(priority = 3, dataProviderClass = DataProviderClass.class, dataProvider = "WrongPassData")
	public void loginContrasenaIncorrecta(String id, String pass) throws InterruptedException {
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
		String expectedResult = "All fields are required";

		assertTrue(result.equals(expectedResult));
	}

	/**
	 * Prueba el inicio de sesión de un cliente registrado que introdujo sus datos correctamente
	 */
	@Test(priority = 4, dataProviderClass = DataProviderClass.class, dataProvider = "GreatPassData")
	public void loginCorrecto(String id, String pass) throws InterruptedException {
			Alert alerta;
	
			driver.findElement(By.linkText("Log in")).click();
			driver.findElement(ByName.name("username")).sendKeys(id);
			driver.findElement(ByName.name("password")).sendKeys(pass);
			driver.findElement(ByXPath.xpath("//*[@id=\"root\"]/div/div/div/div[2]/form/div[3]/button[2]")).click();
			
			Thread.sleep(500);
			alerta = driver.switchTo().alert();
	
			String result = alerta.getText();
			String expectedResult = "Valid credentials";
	
			assertTrue(result.equals(expectedResult));

		assertTrue(true);
	}

	/**
	 * Prueba el salida de sesión
	 * 
	 * @throws InterruptedException
	 */
	@Test(priority = 5, dataProviderClass = DataProviderClass.class, dataProvider = "GreatPassData")
	public void logout(String id, String pass) throws InterruptedException {
		Alert alerta;
	
		driver.findElement(By.linkText("Log in")).click();
		driver.findElement(ByName.name("username")).sendKeys(id);
		driver.findElement(ByName.name("password")).sendKeys(pass);
		driver.findElement(ByXPath.xpath("//*[@id=\"root\"]/div/div/div/div[2]/form/div[3]/button[2]")).click();
		
		Thread.sleep(500);
		alerta = driver.switchTo().alert();
		alerta.accept();

		
		driver.findElement(ByXPath.xpath("//*[@id=\"content\"]/nav/div/ul/button/li/a")).click();
		List<WebElement> elements = driver.findElements(By.xpath("//h3[contains(.,\'Sign In\')]"));
		assertTrue(elements.size() == 1);
	}


	//** ************************************************************
	//** Puebas de registro
	//** ************************************************************

	/**
	 * Prueba el registro correcto de un cliente
	 * 
	 * @throws InterruptedException
	 */
	@Test(priority = 2, dataProviderClass = DataProviderClass.class, dataProvider = "RegistroNuevoData")
	public void registroNuevo(String nom, String ape, String id, String mail, String pass, String idtype, String dir,
			String tel, String bday) throws InterruptedException {
		String expectedResult = "Sign In";
		
		driver.findElement(By.linkText("Sign Up")).click();

		Select idTypeSelect = new Select(driver.findElement(ById.id("id_type")));

		driver.findElement(ById.id("name")).sendKeys(nom);
		driver.findElement(ById.id("lastname")).sendKeys(ape);
		driver.findElement(ById.id("id")).sendKeys(id);
		driver.findElement(ById.id("email")).sendKeys(mail);
		driver.findElement(ById.id("password")).sendKeys(pass);
		idTypeSelect.selectByValue("Identity card");
		idTypeSelect.selectByValue(idtype);
		driver.findElement(ById.id("adress")).sendKeys(dir);
		driver.findElement(ById.id("phone")).sendKeys(tel);
		driver.findElement(ByXPath.xpath("//*[@id=\"root\"]/div/div/div/div[2]/form/div[9]/input")).sendKeys(bday);;
		
		driver.findElement(ByXPath.xpath("//*[@id=\"root\"]/div/div/div/div[2]/form/div[10]/button[2]")).click();
		
		Thread.sleep(150);
		String result = driver.findElement(ByXPath.xpath("//*[@id=\"root\"]/div/div/div/div[1]/h3")).getText();
		
		assertTrue(expectedResult.equals(result));
	}

	/**
	 * Prueba el registro de un cliente que ya está registrado
	 * 
	 * @throws InterruptedException
	 */
	@Test(priority = 3, dataProviderClass = DataProviderClass.class, dataProvider = "RegistroNuevoData")
	public void registroDuplicado(String nom, String ape, String id, String mail, String pass, String idtype, String dir, String tel, String bday) throws InterruptedException {
		//String expectedResult = "Ya registrado";
		//String result;
		//Alert alerta;

		driver.findElement(By.linkText("Sign Up")).click();

		Select idTypeSelect = new Select(driver.findElement(ById.id("id_type")));

		driver.findElement(ById.id("name")).sendKeys(nom);
		driver.findElement(ById.id("lastname")).sendKeys(ape);
		driver.findElement(ById.id("id")).sendKeys(id);
		driver.findElement(ById.id("email")).sendKeys(mail);
		driver.findElement(ById.id("password")).sendKeys(pass);
		idTypeSelect.selectByValue("Identity card");
		idTypeSelect.selectByValue(idtype);
		driver.findElement(ById.id("adress")).sendKeys(dir);
		driver.findElement(ById.id("phone")).sendKeys(tel);
		driver.findElement(ByXPath.xpath("//*[@id=\"root\"]/div/div/div/div[2]/form/div[9]/input")).sendKeys(bday);;
		
		driver.findElement(ByXPath.xpath("//*[@id=\"root\"]/div/div/div/div[2]/form/div[10]/button[2]")).click();

		//Thread.sleep(500);

		//try {
		//	alerta = driver.switchTo().alert();
		//	result = alerta.getText();
		//} catch (Exception e) {
		//	result = "No hubo alerta";
		//}
		

		//assertTrue(expectedResult.equals(result));
		List<WebElement> elements = driver.findElements(By.xpath("//h3[contains(.,\'Sign In\')]"));
		assertTrue(elements.size() == 0);
	}

	/**
	 * Prueba que no acepte registros donde falten datos
	 * 
	 * @throws InterruptedException
	 */
	@Test(priority = 1, dataProviderClass = DataProviderClass.class, dataProvider = "RegistroDatosFaltantesData")
	public void registroDatosFaltantes(String nom, String ape, String id, String mail, String pass, String idtype,String dir, String tel, String bday) throws InterruptedException {
		String expectedResult = "los campos requeridos";
		
		String result;
		Alert alerta;

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
		
		Thread.sleep(500);
		alerta = driver.switchTo().alert();
		result = alerta.getText();
		assertTrue(expectedResult.equals(result));
	}

	/**
	 * Prueba que no acepte regostros vacios
	 * 
	 * @throws InterruptedException
	 */
	@Test(priority = 1)
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
	 * Prueba que no acepte registros donde el tipo de los datos introducidos no
	 * conincidan con los tipos de los datos requeridos
	 * 
	 * @throws InterruptedException
	 */
	@Test(priority = 2, dataProviderClass = DataProviderClass.class, dataProvider = "RegistroRaroData")
	public void registroTiposRaros(String nom, String ape, String id, String mail, String pass, String idtype, String dir, String tel, String bday) throws InterruptedException {
		//Alert alerta;
		//String expectedResult = "Invalid";
		
		driver.findElement(By.linkText("Sign Up")).click();

		Select idTypeSelect = new Select(driver.findElement(ById.id("id_type")));

		driver.findElement(ById.id("name")).sendKeys(nom);
		driver.findElement(ById.id("lastname")).sendKeys(ape);
		driver.findElement(ById.id("id")).sendKeys(id);
		driver.findElement(ById.id("email")).sendKeys(mail);
		driver.findElement(ById.id("password")).sendKeys(pass);
		idTypeSelect.selectByValue("Identity card");
		idTypeSelect.selectByValue(idtype);
		driver.findElement(ById.id("adress")).sendKeys(dir);
		driver.findElement(ById.id("phone")).sendKeys(tel);
		driver.findElement(ByXPath.xpath("//*[@id=\"root\"]/div/div/div/div[2]/form/div[9]/input")).sendKeys(bday);
		
		driver.findElement(ByXPath.xpath("//*[@id=\"root\"]/div/div/div/div[2]/form/div[10]/button[2]")).click();
		
		Thread.sleep(150);
		//alerta = driver.switchTo().alert();

		//String result = alerta.getText();
		//assertTrue(result.contains(expectedResult));
		List<WebElement> elements = driver.findElements(By.xpath("//h3[contains(.,\'Sign In\')]"));
		assertTrue(elements.size() == 0);
	}

	//** ************************************************************
	//** Puebas de reservas
	//** ************************************************************

	/**
	 * Prueba que al consultar el catalogo sin inciar sesión, me pida hacerlo
	 * 
	 * @throws InterruptedException
	 */
	@Test(priority = 1)
	public void reservaSinInicio() throws InterruptedException {
		driver.findElement(ByXPath.xpath("//*[@id=\"content\"]/div/div[1]/button[2]")).click();
		Thread.sleep(150);
		List<WebElement> elements = driver.findElements(By.xpath("//button[contains(.,\'Log in\')]"));
		assertTrue(elements.size() > 1);
	}

	/**
	 * Prueba que al consultar el catalogo con la sesión iniciada, me deje reservar
	 */
	@Test(priority = 6, dataProviderClass = DataProviderClass.class, dataProvider = "GreatPassData")
	public void reservaConInicio(String id, String pass) throws InterruptedException {
		Alert alerta;
		String expectedResult = "Reserva creada";
	
		driver.findElement(By.linkText("Log in")).click();
		driver.findElement(ByName.name("username")).sendKeys(id);
		driver.findElement(ByName.name("password")).sendKeys(pass);
		driver.findElement(ByXPath.xpath("//*[@id=\"root\"]/div/div/div/div[2]/form/div[3]/button[2]")).click();
		
		Thread.sleep(500);
		alerta = driver.switchTo().alert();
		alerta.accept();

		driver.findElement(ByXPath.xpath("//*[@id=\"content\"]/div/div[1]/button[2]")).click();

		List<WebElement> elements = driver.findElements(By.xpath("//button[contains(.,\'Reserve\')]"));
		assertTrue(elements.size() > 1);
		
		elements.get(0).click();

		driver.findElement(ByXPath.xpath("//*[@id=\"main\"]/div[2]/div[1]/ul/button")).click();
		Thread.sleep(500);
		alerta = driver.switchTo().alert();

		String result = alerta.getText();
		assertTrue(result.contains(expectedResult));

	}

	
	@AfterMethod
	public void tearDown(){
		driver.quit();
	}


}
