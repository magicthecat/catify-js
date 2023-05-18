Catify Pagination
================

Catify Pagination is a utility class that provides pagination functionality for a given dataset. It allows you to navigate through the data in a paginated manner and provides callbacks to update the UI when the page changes.

Usage
-----

To use Catify Pagination, follow these steps:

1.  Import the Pagination class:


`import { Pagination } from 'catify-pagination';`

2.  Create an instance of the Pagination class:


`const pagination = new Pagination(data, itemsPerPage, renderCallback);`

-   `data`: The array of data to be paginated.
-   `itemsPerPage`: The number of items to be displayed per page.
-   `renderCallback`: A callback function that will be called when the pagination needs to be rendered. It should accept three arguments: the current page data, the current page number, and the total number of pages.

3.  Render the initial pagination:


`pagination.render();`

4.  Implement the rendering logic in the `renderCallback` function provided during initialization. This function will be called whenever the page changes, and it should update the UI with the current page data, page number, and total pages.

5.  Use the pagination methods to navigate through the data:

-   `nextPage()`: Moves to the next page if available.
-   `previousPage()`: Moves to the previous page if available.
-   `goToPage(pageNumber, maintainFocus)`: Moves to the specified page number. If `maintainFocus` is set to `true`, it will maintain focus on the active pagination link after the page change.


Example
-------

Here is a codebox vanilla javascript implementation:
<https://codesandbox.io/s/catify-pagination-vanilla-javascript-example-5ms6gc>

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