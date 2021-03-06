
import ProductList from './products';
import ProductDetail from "./product_details";
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { ChevronDownIcon, FilterIcon, MinusSmIcon, PlusSmIcon, ViewGridIcon } from '@heroicons/react/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

    const [id, setID] = useState();

    const [checkPD, setCheckPD] = useState(false);

    const changeCheckPD = (value) => {
        setCheckPD(value);
    } 

    const updateCurrProduct = (title, imageurl, brand, price, producturl, sku, color_size, type, fabric, fit, collar, sleeves, cuff_style) => {
        setCurrTitle(title);
        setCurrPrice(price);
        setCurrBrand(brand);
        setCurrImageUrl(imageurl);
        setCurrProductUrl(producturl);
        setCurrSku(sku);
        setCurrColorSize(color_size);
        setCurrType(type);
        setCurrFabric(fabric);
        setCurrFit(fit);
        setCurrCollar(collar);
        setCurrSleeves(sleeves);
        setCurrCuffStyle(cuff_style);
    }

    const [filters,setFilters] =  useState([
    
      {
        id: 'Brand',
        name: 'Brand',
        options: [
          { value: 'Diners', label: 'Diners',checked:false  },
          { value: 'Uniworth', label: 'Uniworth',checked:false },
          { value: 'Marks & Jacobs', label: 'Marks & Jacobs',checked:false  },
        ],
      },
    
      {
        id: 'Color',
        name: 'Color',
        options: [
          { value: 'White', label: 'White',checked:false },
          { value: 'Sea Green', label: 'Sea Green',checked:false },
          { value: 'Blue', label: 'Blue',checked:false },
          { value: 'Brown', label: 'Brown',checked:false  },
          { value: 'Peach', label: 'Peach',checked:false },
          { value: 'Yellow', label: 'Yellow',checked:false },
          { value: 'Purple', label: 'Purple',checked:false },
          { value: 'Black', label: 'Black',checked:false},
          { value: 'Grey', label: 'Grey',checked:false },
          { value: 'Fawn', label: 'Fawn',checked:false},
        ],
      },
    
    
    ]);
    
    const onClickCheckBoxHandler = (sectionId,optionValue) =>{
      const filterStateList = filters;
      const changeCheckedfilters = filterStateList.map((item)=>
        item.id === sectionId ? {...item, options : item.options.map((items)=>items.value === optionValue ? {...items,checked:!items.checked} : items),} : item);
      setFilters(changeCheckedfilters);
    };

  return (
    <div className="bg-orange">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setMobileFiltersOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
                <div className="px-4 flex items-center justify-between">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    type="button"
                    className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Filters */}
                <form className="mt-4 border-t border-gray-200">
                  <h3 className="sr-only">Categories</h3>
            

                  {filters.map((section) => (
                    <Disclosure as="div" key={section.id} className="border-t border-orange-200 px-4 py-6">
                      {({ open }) => (
                        <>
                          <h3 className="-mx-2 -my-3 flow-root">
                            <Disclosure.Button className="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500">
                              <span className="font-medium text-gray-900">{section.name}</span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                                ) : (
                                  <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-6">
                              {section.options.map((option, optionIdx) => (
                                <div key={option.value} className="flex items-center">
                                  <input
                                    id={`filter-mobile-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type="checkbox"
                                    defaultChecked={option.checked}
                                    onChange = {()=>onClickCheckBoxHandler(section.id,option.value)}
                                    className="h-4 w-4 border-gray-300 rounded text-orange-600 focus:ring-orange-500"
                                  />
                                  <label
                                    htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                    className="ml-3 min-w-0 flex-1 text-gray-500"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </form>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Filters</h1>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 d-none d-lg-flex">Products</h1>

            <div className="flex items-center">
              
              <button type="button" className="p-2 -m-2 ml-5 sm:ml-7 text-gray-400 hover:text-gray-500">
                <span className="sr-only">View grid</span>
                <ViewGridIcon className="w-5 h-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FilterIcon className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
          

                {filters.map((section) => (
                  <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="py-3 bg-orange w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">{section.name}</span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                              ) : (
                                <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div key={option.value} className="flex items-center">
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  onChange = {()=>onClickCheckBoxHandler(section.id,option.value)}
                                  className="h-4 w-4 border-gray-300 rounded text-orange-600 focus:ring-orange-500"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                    <div className='mt-10'>
                        <ProductList filterList={filters} changePD={changeCheckPD} updateProduct={updateCurrProduct}/>
                        {checkPD ? (<ProductDetail id={id} changePD={changeCheckPD} />) : null}
                    </div>
                {/* /End replace */}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
