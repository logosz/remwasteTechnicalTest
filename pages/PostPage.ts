import { Page } from '@playwright/test';

export class PostPage {
  readonly page: Page;
  readonly dashboardSide;
  readonly postsSide;
  readonly profileSide;
  readonly newPostButton;
  readonly inputImage;
  readonly inputTitle;
  readonly inputSummary;
  readonly categoryDropdown;
  readonly inputDescription;
  readonly submitPostButton;
  readonly cropButton;
  readonly frameLocator;
  readonly deletePostFirstButton;
  readonly editPostFirstButton;
  readonly deleteModal;
  readonly confirmDeleteButton;
  readonly confirmCancelButton;
  readonly firstPostTitle;
  readonly updateButton;

  constructor(page: Page) {
    this.page = page;
    this.dashboardSide = page.getByText('Dashboard');
    this.postsSide = page.getByText('Posts');
    this.profileSide = page.getByText('Profile');
    this.newPostButton = page.getByText('New Post');
    this.inputImage = page.locator('input[type="file"]');
    this.inputTitle = page.locator('input[name="title"]');
    this.inputSummary = page.locator('textarea[id="summary"]');
    this.categoryDropdown = page.locator('select[id="category"]');
    this.inputDescription = page.locator('body[id="tinymce"]');
    this.cropButton = page.getByRole('button',{name: 'Crop' });
    this.frameLocator = page.frameLocator('iframe[title="Rich Text Area"]');
    this.submitPostButton = page.getByText('Create Post');
    this.deletePostFirstButton = page.getByText('Delete Post').locator('nth=0');
    this.editPostFirstButton = page.getByText('Edit Post').locator('nth=0');
    //this.deleteModal = page.locator('div[aria-modal="true"]');
    this.deleteModal = page.locator('div[id="headlessui-portal-root"]');
    this.confirmDeleteButton = page.getByText('Delete It!');
    this.confirmCancelButton = page.getByText('No! Keep it');
    this.firstPostTitle = page.locator('xpath=//main/descendant::h1[2]');
    this.updateButton = page.getByRole('button', { name: 'Update Post' });

  }

  async chooseCategory(category: string) {
    await this.page.selectOption('select[id="category"]',category)
  }
}
