import { Carousel } from "flowbite-react";
import Work1 from "./Work1";
import Work2 from "./Work2"
export default function CarouselSilde() {
 
    return (
      <div className="custom">
        <Carousel pauseOnHover slideInterval={1000} >
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <Work1 />
          </div>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <Work2 />
          </div>
        </Carousel>
      </div>
    );
  };

