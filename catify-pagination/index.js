export class Pagination {
    constructor(data, itemsPerPage, renderCallback) {
        this.data = data;
        this.itemsPerPage = itemsPerPage;
        this.currentPage = 1;
        this.paginationContainer = document.getElementById("pagination");
        this.focusTrap = null;
        this.renderCallback = renderCallback;
    }

    getCurrentPageData() {
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        return this.data.slice(startIndex, endIndex);
    }

    getTotalPages() {
        return Math.ceil(this.data.length / this.itemsPerPage);
    }

    nextPage() {
        if (this.currentPage < this.getTotalPages()) {
            this.currentPage++;
            this.render();
        }
    }

    previousPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.render();
        }
    }

    handleKeyDown(event) {
        if (event.key === "Enter") {
            const pageNumber = parseInt(event.target.textContent, 10);
            if (!isNaN(pageNumber)) {
                this.goToPage(pageNumber);
            }
        }
    }

    render() {
        this.renderCallback(
            this.getCurrentPageData(),
            this.currentPage,
            this.getTotalPages()
        );
    }

    goToPage(pageNumber, maintainFocus = false) {
        if (pageNumber >= 1 && pageNumber <= this.getTotalPages()) {
            this.currentPage = pageNumber;
            this.render();

            if (maintainFocus) {
                const selectedLink = document.querySelector(".pagination-link.active");
                selectedLink.focus();
            }
        }
    }
}