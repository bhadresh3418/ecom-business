/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

import CategorySection from "./CategorySection"
import CtaSection from "./CtaSection"
import FavoritesSection from "./FavoritesSection"
import FeaturedSection from "./FeaturedSection"
import Hero from "./Hero"




export default function Example() {
  return (
    <div>
      <main>
        <Hero/>
        {/* Category section */}
        <CategorySection/>

        {/* Featured section */}
        <FeaturedSection/>

        {/* Favorites section */}
        <FavoritesSection/>

        {/* CTA section */}
        <CtaSection/>
      </main>                                                                        
    </div>
  )
}
