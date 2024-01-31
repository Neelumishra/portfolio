import React from "react";
import { Badge } from "flowbite-react";
export default function Aboutcard() {
  return (
    <div class=" mt-4 mx-4 pt-10 bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700">
      <div class="flex justify-end "></div>
      <div class="flex flex-col items-center">
        <img
          class="customeImage mb-6 rounded-full shadow-lg"
          src="/Profile.png"
          alt="Bonnie image"
        />
        <h5 class="mb-2 text-3xl font-medium text-gray-900 dark:text-white">
          Neelu Mishra
        </h5>
        <span class="text-lg text-gray-500 dark:text-gray-400">
          Software Developer
          <hr />
        </span>
        <div className="flex gap-2  mt-6 h-20 w-70">
          <Badge color="pink">Javascript</Badge>
          <Badge color="pink">React</Badge>
          <Badge color="pink">NextJS</Badge>
          <Badge color="pink">Tailwind</Badge>
          <Badge color="pink">Angular</Badge>
          <Badge color="pink">Express</Badge>
          <Badge color="pink">Redux</Badge>
          <Badge color="pink">Javascript</Badge>
          <Badge color="pink">React</Badge>
        </div>
      </div>
    </div>
  );
}
