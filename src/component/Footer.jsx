import React from 'react'

 function Footer() {
  return (
    <footer class="bg-white rounded-lg shadow m-4 my-0 dark:bg-gray-800 mb-2">
      <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="/NeeluUpdatedResume.pdf"
              class="hover:underline me-4 md:me-6"
              target="_blank"
            >
              Resume
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/neelumishra/"
              class="hover:underline me-4 md:me-6"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Neelumishra"
              class="hover:underline me-4 md:me-6"
              target="_blank"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="mailto:neelumishra0397@gmail.com"
              class="hover:underline"
              target="_blank"
            >
              Email
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer