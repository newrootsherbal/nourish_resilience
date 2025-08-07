'use client'

import type { ReactElement } from 'react'

// Define a type for an ingredient
type Ingredient = {
  name: string
  benefit: string
  image: string
}

// Define a type for an ingredient category
type IngredientCategory = {
  category: string
  description: string
  ingredients: Ingredient[]
}

const ingredientCategories: IngredientCategory[] = [
  {
    category: 'Organic Vegan Protein',
    description: 'Supports muscle maintenance, repair body tissues, and build antibodies.',
    ingredients: [
      {
        name: 'Mung Bean',
        benefit: 'Complete amino acid profile for muscle recovery',
        image: '/almond.webp',
      },
      { name: 'Almond', benefit: '...', image: '...' },
      { name: 'Pumpkin Seed', benefit: '...', image: '...' },
    ],
  },
  {
    category: 'Fermented Botanicals',
    description: 'Enhanced absorption for digestive health.',
    ingredients: [
      {
        name: 'Ginger',
        benefit: 'Enhanced curcumin absorption for inflammation support',
        image: '/cumin.webp',
      },
      { name: 'Black Cumin Seed', benefit: '...', image: '...' },
    ],
  },
  {
    category: 'Medicinal Mushrooms',
    description: 'Strengthen immune recovery.',
    ingredients: [
      {
        name: 'Reishi',
        benefit: 'Stress reduction and immune system modulation',
        image: '/reishi.webp',
      },
      { name: 'Shiitake', benefit: '...', image: '...' },
      { name: 'Maitake', benefit: '...', image: '...' },
    ],
  },
  {
    category: 'Antioxidants & Adaptogens',
    description: 'Energize and cleanse.',
    ingredients: [
      {
        name: 'Matcha Green Tea',
        benefit: 'Mental clarity and fatigue resistance',
        image: '/GreenTea.webp',
      },
      { name: 'Ashwagandha', benefit: '...', image: '...' },
      { name: 'Dandelion Root', benefit: '...', image: '...' },
    ],
  },
  {
    category: 'Prebiotic Fibre',
    description: 'Supports gut microbiome and healthy digestion.',
    ingredients: [
      {
        name: 'Inulin',
        benefit: 'Feeds beneficial gut bacteria for digestive health',
        image: '/artichoke.jpg',
      },
    ],
  },
  {
    category: 'Spices',
    description: 'Antioxidant benefits and comforting taste.',
    ingredients: [
      {
        name: 'Cinnamon',
        benefit: 'Blood sugar support and warming comfort',
        image: '/cinnamon.jpg',
      },
      { name: 'Cardamom', benefit: '...', image: '...' },
      { name: 'Cocoa', benefit: '...', image: '...' },
      { name: 'Clove', benefit: '...', image: '...' },
    ],
  },
]

export default function IngredientsGridSection() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap gap-8 justify-center">
        {ingredientCategories.map((category, index) => (
          <div
            key={index}
            className="relative h-96 w-[450px] overflow-hidden rounded-2xl shadow-lg"
            style={{
              backgroundImage: `url(${category.ingredients[0].image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
            <div className="relative h-full flex flex-col justify-start p-6 text-white">
              <h3 className="text-3xl font-bold mb-2 mt-20">{category.category}</h3>
              <p className="text-xl text-gray-200 min-h-[2lh]">{category.description}</p>
              <div className="mt-4 border-t border-white/20 pt-4">
                <p className="font-semibold text-base mb-2">Includes:</p>
                <ul className="space-y-1">
                  {category.ingredients.map((ing) => (
                    <li key={ing.name} className="text-sm text-gray-300">
                      {ing.name}
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
