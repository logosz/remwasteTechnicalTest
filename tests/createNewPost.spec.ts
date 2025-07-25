import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { PostPage } from '../pages/PostPage';
import path from 'path';

test.describe('Create and delete Post', () => {

    test('should successfully create a new post', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const postPage = new PostPage(page);
        const filePath = path.resolve(__dirname, '../assets/powerRanger.jpeg');

        await loginPage.goto();
    
        await loginPage.login('usersatu@mailinator.com', '12345678');

        await new Promise(resolve => setTimeout(resolve, 3000));

        await expect(page).toHaveURL('https://xery-blog-mern.vercel.app/authorpanel/dashboard');

        await page.waitForTimeout(3000);

        await postPage.postsSide.click();

        await postPage.newPostButton.click();

        await postPage.inputImage.setInputFiles(filePath);
        await postPage.cropButton.click();
        await postPage.inputTitle.fill('Playwright UI Automation');
        await postPage.inputSummary.fill('Summary by Playwright UI Automation');
        await postPage.chooseCategory('Fashion');

        const frameLocator = postPage.frameLocator;
        const editor = frameLocator.locator('[contenteditable="true"]');
        await editor.type('Description by Playwright UI Automoation');

        await page.waitForTimeout(3000);

        await postPage.submitPostButton.click();

        await expect(page.getByText('Post created successfully')).toBeVisible();
        await expect(page).toHaveURL('https://xery-blog-mern.vercel.app/authorpanel/blogs');

        await page.waitForTimeout(3000);

        await expect(page.locator('xpath=//main/descendant::div[7]/descendant::h1[text()="Playwright UI Automation"]')).toBeVisible();
    });

    test('should successfully delete a post', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const postPage = new PostPage(page);

        await loginPage.goto();

        await loginPage.login('usersatu@mailinator.com', '12345678');

        await new Promise(resolve => setTimeout(resolve, 3000));

        await expect(page).toHaveURL('https://xery-blog-mern.vercel.app/authorpanel/dashboard');

        await page.waitForTimeout(3000);

        await postPage.postsSide.click();

        const firstTitle = await postPage.firstPostTitle.textContent();

        await postPage.deletePostFirstButton.click();

        await expect(postPage.deleteModal).toBeAttached();
        await expect(page.getByRole('heading', { name: 'Delete Blog Post' })).toBeVisible();

        await postPage.confirmDeleteButton.click();

        await expect(page.getByText('Post deleted successfully')).toBeVisible();
        await expect(postPage.firstPostTitle).not.toBe(firstTitle);
    });
});