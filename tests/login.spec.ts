import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login Tests', () => {

  const testCases: { title: string; username: string; password: string; errorMessage: string }[] = [
    { title: 'should show error on invalid credentials: User Not Found', username: 'usersatu@mailinator.co', password: '12345678', errorMessage: 'User Not Found' },
    { title: 'should show error on invalid credentials: Invalid Password', username: 'usersatu@mailinator.com', password: '123456789', errorMessage: 'Invalid Password' }
  ];

  test('should login successfully with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    
    await loginPage.login('usersatu@mailinator.com', '12345678');

    await expect(page).toHaveURL('https://xery-blog-mern.vercel.app/authorpanel/dashboard');
    await expect(loginPage.userMenu).toBeVisible();
  });

  for (const {title, username, password, errorMessage} of testCases){
    test(title, async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        
        await loginPage.login(username, password);

        //await expect(loginPage.errorMessage).toBeVisible();
        await expect(page.getByText(errorMessage)).toBeVisible();
    });
  }
  
});
