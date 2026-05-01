'use client'

import { useTranslations } from 'next-intl'

// Define a type for an ingredient
type Ingredient = {
  key: string
  image: string
}

// Define a type for an ingredient category
type IngredientCategory = {
  key: string
  ingredients: Ingredient[]
}

const ingredientCategories: IngredientCategory[] = [
  {
    key: 'veganProtein',
    ingredients: [
      { key: 'mungBean', image: '/mugbeans.webp' },
      { key: 'almond', image: '/almond.webp' },
      { key: 'pumpkinSeed', image: '/almond.webp' }, // Fallback to almond for now if pumpkin seed is missing
    ],
  },
  {
    key: 'fermentedBotanicals',
    ingredients: [
      { key: 'ginger', image: '/cumin.webp' },
      { key: 'blackCuminSeed', image: '/cumin.webp' },
    ],
  },
  {
    key: 'medicinalMushrooms',
    ingredients: [
      { key: 'reishi', image: '/reishi.webp' },
      { key: 'shiitake', image: '/reishi.webp' },
      { key: 'maitake', image: '/reishi.webp' },
    ],
  },
  {
    key: 'antioxidants',
    ingredients: [
      { key: 'matcha', image: '/GreenTea.webp' },
      { key: 'ashwagandha', image: '/GreenTea.webp' },
    ],
  },
  {
    key: 'prebiotic',
    ingredients: [
      { key: 'inulin', image: '/artichoke.webp' },
      { key: 'dandelionRoot', image: '/artichoke.webp' },
    ],
  },
  {
    key: 'spices',
    ingredients: [
      { key: 'cinnamon', image: '/cinnamon.webp' },
      { key: 'cardamom', image: '/cinnamon.webp' },
      { key: 'cocoa', image: '/cinnamon.webp' },
      { key: 'clove', image: '/cinnamon.webp' },
    ],
  },
]

export default function IngredientsGridSection() {
  const t = useTranslations('Ingredients')

  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap gap-8 justify-center">
        {ingredientCategories.map((category) => (
          <div
            key={category.key}
            className="relative h-96 w-[450px] overflow-hidden rounded-2xl shadow-lg"
            style={{
              backgroundImage: `url(${category.ingredients[0].image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
            <div className="relative h-full flex flex-col justify-start p-6 text-white">
              <h3 className="text-3xl font-bold mb-2 mt-20">{t(`categories.${category.key}.title`)}</h3>
              <p className="text-xl text-gray-200 min-h-[2lh]">{t(`categories.${category.key}.description`)}</p>
              <div className="mt-4 border-t border-white/20 pt-4">
                <p className="font-semibold text-base mb-2">{t('organicHeader')}</p>
                <ul className="space-y-1">
                  {category.ingredients.map((ing) => (
                    <li key={ing.key} className="text-sm text-gray-300">
                      {t(`categories.${category.key}.${ing.key}`)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
