import { test, describe, expect } from '@playwright/test'

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('http://localhost:8080/')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(
      page.getByText(
        'Pokémon and Pokémon character names are trademarks of Nintendo.',
      ),
    ).toBeVisible()
  })

  test('check the content of hidden ability is visible', async ({ page }) => {
    await page.goto('http://localhost:8080/')
    await page.getByRole('link', { name: 'ivysaur' }).click()
    await expect(page.getByText('chlorophyll')).toBeVisible()
    await expect(page.getByTestId('hiddenAbility')).toContainText(
      'chlorophyll',
    )
  })
})
