import React from 'react'
import {
    Radio,
    RadioGroup,
  } from '@headlessui/react'
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const SizeSelecter = ({sizes,selectedSize,setSelectedSize}) => {
  return (
    <div>
      <div className="flex items-center justify-between">
                <h2 className="text-sm font-medium text-gray-900">Size</h2>
                <a href="#" className="text-sm font-medium text-primary-600 hover:text-primary-500">
                  See sizing chart
                </a>
              </div>

              <fieldset aria-label="Choose a size" className="mt-2">
                <RadioGroup
                  value={selectedSize}
                  onChange={setSelectedSize}
                  className="grid grid-cols-3 gap-3 sm:grid-cols-6"
                >
                  {sizes.map((size) => (
                    <Radio
                      key={size.name}
                      value={size}
                      className={({ focus, checked }) =>
                        classNames(
                          size.inStock ? 'cursor-pointer focus:outline-none' : 'cursor-not-allowed opacity-25',
                          focus ? 'ring-2 ring-primary-500 ring-offset-2' : '',
                          checked
                            ? 'border-transparent bg-primary-600 text-white hover:bg-primary-700'
                            : 'border-gray-200 bg-white text-gray-900 hover:bg-gray-50',
                          'flex items-center justify-center rounded-md border px-3 py-3 text-sm font-medium uppercase sm:flex-1',
                        )
                      }
                      disabled={!size.inStock}
                    >
                      {size.name}
                    </Radio>
                  ))}
                </RadioGroup>
              </fieldset>
    </div>
  )
}

export default SizeSelecter
