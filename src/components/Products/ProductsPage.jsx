"use client"
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
import { useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


// TODO : replace with api data
import * as productss from '../../mockData/products.json'
import ProductGrid from './ProductGrid'

const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]
const filters = [
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'new-arrivals', label: 'All New Arrivals', checked: false },
      { value: 'tees', label: 'Tees', checked: false },
      { value: 'objects', label: 'Objects', checked: true },
      { value: 'sweatshirts', label: 'Sweatshirts', checked: false },
      { value: 'pants-shorts', label: 'Pants & Shorts', checked: false },
    ],
  },
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White', checked: false },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'blue', label: 'Blue', checked: false },
      { value: 'brown', label: 'Brown', checked: false },
      { value: 'green', label: 'Green', checked: false },
      { value: 'purple', label: 'Purple', checked: false },
    ],
  },
  {
    id: 'sizes',
    name: 'Sizes',
    options: [
      { value: 'xs', label: 'XS', checked: false },
      { value: 's', label: 'S', checked: false },
      { value: 'm', label: 'M', checked: false },
      { value: 'l', label: 'L', checked: false },
      { value: 'xl', label: 'XL', checked: false },
      { value: '2xl', label: '2XL', checked: false },
    ],
  },
]
const activeFilters = [{ value: 'objects', label: 'Objects' }]

const products = Array.from({length:40}).map((a,idx) => ({
  id: idx + 1,
  ...productss[Math.floor(Math.random() * 100)%4]
}));

const footerNavigation = {
  products: [
    { name: 'Bags', href: '#' },
    { name: 'Tees', href: '#' },
    { name: 'Objects', href: '#' },
    { name: 'Home Goods', href: '#' },
    { name: 'Accessories', href: '#' },
  ],
  company: [
    { name: 'Who we are', href: '#' },
    { name: 'Sustainability', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Privacy', href: '#' },
  ],
  customerService: [
    { name: 'Contact', href: '#' },
    { name: 'Shipping', href: '#' },
    { name: 'Returns', href: '#' },
    { name: 'Warranty', href: '#' },
    { name: 'Secure Payments', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Find a store', href: '#' },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductsPage() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  return (
      <div>

          <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">Workspace sale</h1>
              <p className="mt-4 max-w-xl text-sm text-gray-700">
                Our thoughtfully designed workspace objects are crafted in limited runs. Improve your productivity and
                organization with these sale items before we run out.
              </p>
            </div>
          </div>

          {/* Filters */}
          <section aria-labelledby="filter-heading">
            <h2 id="filter-heading" className="sr-only">
              Filters
            </h2>

            <div className="border-b border-gray-200 bg-white pb-4">
              <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                      Sort
                      <ChevronDownIcon
                        className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                    </MenuButton>
                  </div>
                  <MenuItems
                    transition
                    className="absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <MenuItem key={option.name}>
                          {({ focus }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                focus ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm',
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </MenuItem>
                      ))}
                    </div>
                  </MenuItems>
                </Menu>

                <button
                  type="button"
                  className="inline-block text-sm font-medium text-gray-700 hover:text-gray-900 sm:hidden"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  Filters
                </button>

                <div className="hidden sm:block">
                  <div className="flow-root">
                    <PopoverGroup className="-mx-4 flex items-center divide-x divide-gray-200">
                      {filters.map((section, sectionIdx) => (
                        <Popover key={section.name} className="relative inline-block px-4 text-left">
                          <PopoverButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                            <span>{section.name}</span>
                            {sectionIdx === 0 ? (
                              <span className="ml-1.5 rounded bg-gray-200 px-1.5 py-0.5 text-xs font-semibold tabular-nums text-gray-700">
                                1
                              </span>
                            ) : null}
                            <ChevronDownIcon
                              className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                              aria-hidden="true"
                            />
                          </PopoverButton>

                          <PopoverPanel
                            transition
                            className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white p-4 shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                          >
                            <form className="space-y-4">
                              {section.options.map((option, optionIdx) => (
                                <div key={option.value} className="flex items-center">
                                  <input
                                    id={`filter-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type="checkbox"
                                    defaultChecked={option.checked}
                                    className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                  />
                                  <label
                                    htmlFor={`filter-${section.id}-${optionIdx}`}
                                    className="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </form>
                          </PopoverPanel>
                        </Popover>
                      ))}
                    </PopoverGroup>
                  </div>
                </div>
              </div>
            </div>

            {/* Active filters */}
            <div className="bg-gray-100">
              <div className="mx-auto max-w-7xl px-4 py-3 sm:flex sm:items-center sm:px-6 lg:px-8">
                <h3 className="text-sm font-medium text-gray-500">
                  Filters
                  <span className="sr-only">, active</span>
                </h3>

                <div aria-hidden="true" className="hidden h-5 w-px bg-gray-300 sm:ml-4 sm:block" />

                <div className="mt-2 sm:ml-4 sm:mt-0">
                  <div className="-m-1 flex flex-wrap items-center">
                    {activeFilters.map((activeFilter) => (
                      <span
                        key={activeFilter.value}
                        className="m-1 inline-flex items-center rounded-full border border-gray-200 bg-white py-1.5 pl-3 pr-2 text-sm font-medium text-gray-900"
                      >
                        <span>{activeFilter.label}</span>
                        <button
                          type="button"
                          className="ml-1 inline-flex h-4 w-4 flex-shrink-0 rounded-full p-1 text-gray-400 hover:bg-gray-200 hover:text-gray-500"
                        >
                          <span className="sr-only">Remove filter for {activeFilter.label}</span>
                          <svg className="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                            <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7" />
                          </svg>
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <ProductGrid products={products}/>
      </div>
  )
}
