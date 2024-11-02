import React from 'react'
import PropertyCard from '../Components/PropertyCard'
import { properties } from '../data/data'

export default function AvailableRooms() {
  return (
    // <!-- =========== Available ============= -->
    <section>
      <div className="container">
        <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
          <span className="mb-2 block text-lg font-semibold text-primary">
            Properties
          </span>
          <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
            Grab your Dream Property
          </h2>
          <p className="text-base text-body-color dark:text-dark-6">
            There are many variations of passages of Lorem Ipsum available
            but the majority have suffered alteration in some form.
          </p>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
   
        {properties.map((property) => (
            <PropertyCard
              key={property.id}
              title={property.title}
              price={property.price}
              bedrooms={property.bedrooms}
              bathrooms={property.bathrooms}
              image={property.image}
            />
          ))}
   
        </div>
      </div>
  
    </section>
  )
}
