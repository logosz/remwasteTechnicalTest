import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { PostPage } from '../pages/PostPage';

test.describe('Edit Post', () => {
    test('should successfully edit a post', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const postPage = new PostPage(page);
        
        await loginPage.goto();

        await loginPage.login('usersatu@mailinator.com', '12345678');

        await new Promise(resolve => setTimeout(resolve, 3000));

        await expect(page).toHaveURL('https://xery-blog-mern.vercel.app/authorpanel/dashboard');

        await page.waitForTimeout(3000);

        await postPage.postsSide.click();

        const savedTitle = await postPage.firstPostTitle.textContent();

        await postPage.editPostFirstButton.click();

        await expect(page.getByRole('heading', { name: 'Edit Blog Post' })).toBeVisible();

        const randomTwoDigit = Math.floor(10 + Math.random() * 90);
        const editTitle = `Edit ${randomTwoDigit} by Playwright UI Automation`;

        await postPage.inputTitle.fill(editTitle);

        await postPage.updateButton.click();

        await expect(page.getByText('Post updated successfully')).toBeVisible();
        const titleAfterEdit = await postPage.firstPostTitle.textContent();
        await expect(titleAfterEdit).not.toBe(savedTitle);
        await expect(titleAfterEdit).toBe(editTitle);

    });
});