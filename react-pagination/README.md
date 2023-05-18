Catify React Pagination
================

Catify React Pagination is a utility component that provides pagination functionality for a given dataset in React applications. It allows you to easily implement pagination and navigate through data in a paginated manner. This component is part of the Catify JS library. It uses <https://www.npmjs.com/package/catify-pagination> underneath the hood.

Usage
-------

1.  Import the necessary dependencies:


`import { Pagination } from "catify-pagination";
import { useState, useEffect, useRef } from "react";`

2.  Import the `catify-react-pagination` component:

javascriptCopy code

`import { PaginationComponent } from "catify-react-pagination";`

3.  Create a React component that uses the `PaginationComponent`:


`const YourComponent = () => {
  // Define your data and itemsPerPage

  const renderCallback = (data, page, totalPages) => {
    // Implement your logic to update the UI with the current page data, page number, and total pages
  };

  useEffect(() => {
    // Initialize pagination
    const paginationRef = new Pagination(data, itemsPerPage, renderCallback);

    // Render initial pagination
    paginationRef.render();

    // Clean up by destroying the pagination instance
    return () => {
      paginationRef.destroy();
    };
  }, [data, itemsPerPage]);

  return (
    <div>
      {/* Render your content */}
      <PaginationComponent data={data} itemsPerPage={itemsPerPage} />
    </div>
  );
};`

4.  Customize the `renderCallback` function to update your UI with the current page data, page number, and total pages.

5.  Implement the rendering logic in your component's JSX to display the paginated data and the pagination links.

6.  Make sure to provide a valid DOM element with the id `"pagination"` where the pagination links will be rendered.

Props
-----

The `PaginationComponent` accepts the following props:

-   `data` (array): The array of data to be paginated.
-   `itemsPerPage` (number): The number of items to be displayed per page.


Example
-------

Here is a codebox vanilla javascript implementation:
<https://codesandbox.io/s/catify-pagination-react-example-l7b693>

License
-------

This project is licensed under the MIT License.

Issues
------

If you encounter any issues or have suggestions for improvements, please create an issue on the [GitHub repository](https://github.com/magicthecat/catify-js/issues).


Author
------

This utility was developed by MagicTheCat.



More Information
----------------

For more information, please visit the [GitHub repository](https://github.com/magicthecat/catify-js#readme).