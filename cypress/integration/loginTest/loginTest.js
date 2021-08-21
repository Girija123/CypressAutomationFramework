import{Given,When,Then,And} from "cypress-cucumber-preprocessor/steps"
import BasePage from "../../pages/basePage";
import LoginPage from "../../pages/loginPage";
import ProductPage from "../../pages/productPage";


const BasePage = new BasePage();
const LoginPage = new LoginPage();
const ProductPage = new ProductPage();

Given('I am on home page',()=>{
   BasePage.navigate('');
});

When('When I enter username {string} and password {string}',(username,password)=>{
   LoginPage.typeUsernameAndPassword(username,password)
});

And('And I click login button',()=>{
   LoginPage.clickLoginButton();
});

Then('Then I should login successfully and get redirected to products page',()=>{
   ProductPage.verifyProductPageTitle();
});