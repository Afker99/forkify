import View from './View.js';
import icons from 'url:../../img/icons.svg';

class ResultsView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function(e) {
        const btn = e.target.closest('.btn--inline');
        
        if(!btn) return;
        
        const goToPage = +btn.dataset.goto;
        handler(goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage,
    );

    // 1. Page 1 and there are other pages
    if (curPage === 1 && numPages > 1) {
      return this._generateMarkupButton('next', curPage);
    }

    // 3. Last page
    if (curPage === numPages && numPages > 1) {
      return this._generateMarkupButton('prev', curPage);
    }

    // Other page
    if (curPage < numPages) {
        return `
        ${this._generateMarkupButton('prev', curPage)}
        ${this._generateMarkupButton('next', curPage)}
        `
    }

    // 2. Page 1 and there are no other pages
    return '';
  }

  _generateMarkupButton(btnType, curPage) {
    if (btnType === 'prev')
      return `
            <button data-goTo="${curPage - 1}" class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                    <use href="${icons}#icon-arrow-left"></use>
                </svg>
                <span>Page ${curPage - 1}</span>
            </button>
        `;

    if (btnType === 'next')
      return `
            <button data-goTo="${curPage + 1}" class="btn--inline pagination__btn--next">
                <span>Page ${curPage + 1}</span>
                    <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
                </svg>
            </button>
        `;
  }
}

export default new ResultsView();
