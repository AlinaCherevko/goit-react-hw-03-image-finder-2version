import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
// import Loader from './Loader/Loader';
import { getData } from 'servises/api';
// import Modal from './Modal/Modal';
// // import Modal from './Modal/Modal';

export class App extends Component {
  state = {
    searchValue: '',
    hits: [],
    // status: 'idle',
    page: 1,
    isVisibleLoadMoreBtn: false,

    error: null,
  };

  //ств метод який буде забирати значееня яке ми вводимо у форму
  //також ми скидуємо стейт до початкових значень
  handleSearch = value => {
    this.setState({
      searchValue: value,
      hits: [],
      // status: 'idle',
      page: 1,
      isVisibleLoadMoreBtn: false,
    });
  };

  componentDidUpdate = async (prevProps, prevState) => {
    if (
      this.state.searchValue !== prevState.searchValue ||
      this.state.page !== prevState.page
    ) {
      const { hits, totalHits } = await getData(
        this.state.searchValue,
        this.state.page
      );

      this.setState(prevState => ({
        hits: [...prevState.hits, ...hits],
        isVisibleLoadMoreBtn:
          this.state.page < Math.ceil(totalHits / hits.length),
      }));
      if (hits.length === 0 || this.state.searchValue === '') {
        alert(
          'Sorry, there are no images matching your search query. Please try again.'
        );
        // this.handleSearch();
        return;
      }
    }
  };
  onLoadMoreClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  render() {
    return (
      <div className="container">
        <Searchbar handleSearch={this.handleSearch} />
        {this.state.searchValue !== '' ? (
          <ImageGallery hits={this.state.hits} />
        ) : (
          <ImageGallery hits={[]} />
        )}

        {/* <ImageGallery hits={this.state.hits} /> */}

        {this.state.isVisibleLoadMoreBtn && this.state.searchValue !== '' && (
          <Button onClick={this.onLoadMoreClick} />
        )}
      </div>
    );
  }
}
