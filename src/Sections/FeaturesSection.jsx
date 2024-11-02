import React from 'react'
import { GiftIcon, GridIcon, LandIcon, LayerIcon } from '../Components/SVGIcons'

export default function FeaturesSection() {
  return (
    // Features Section Start
    <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Features
              </span>
              <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
                Main Features Of Play
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <div className=" group mb-12">
              <div
                className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary">
                <span
                  className="absolute left-0 top-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"></span>
                <GiftIcon/>
              </div>
              <h4 className="mb-3 text-xl font-bold text-dark dark:text-white">
                Premium Property Listings
              </h4>
              <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-9">
                Discover an array of hand-picked properties that meet the highest standards of luxury and comfort.
              </p>
              <a href="#"
                className="text-base font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary">
                Learn More
              </a>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <div className=" group mb-12">
              <div
                className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary">
                <span
                  className="absolute left-0 top-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"></span>
                <LandIcon/>
              </div>
              <h4 className="mb-3 text-xl font-bold text-dark dark:text-white">
                Personalized Property Matching
              </h4>
              <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-9">
                Our advanced matching system pairs you with properties that align with your specific needs and desires.
              </p>
              <a href="#"
                className="text-base font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary">
                Learn More
              </a>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <div className=" group mb-12">
              <div
                className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary">
                <span
                  className="absolute left-0 top-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"></span>
                 <LayerIcon/>
              </div>
              <h4 className="mb-3 text-xl font-bold text-dark dark:text-white">
                Expert Guidance and Support
              </h4>
              <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-9">
                Benefit from the expertise of our dedicated team of real estate professionals.
              </p>
              <a href="#"
                className="text-base font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary">
                Learn More
              </a>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <div className=" group mb-12">
              <div
                className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary">
                <span
                  className="absolute left-0 top-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"></span>
                <GridIcon/>
              </div>
              <h4 className="mb-3 text-xl font-bold text-dark dark:text-white">
                Virtual Tours
              </h4>
              <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-9">
                Take advantage of our cutting-edge virtual tours and 3D walkthroughs to explore properties from the
                comfort of your home.
              </p>
              <a href="#"
                className="text-base font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
//    Features Section End
  )
}
