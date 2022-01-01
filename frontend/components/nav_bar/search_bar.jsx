import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      searchWord: '',
      searchShown: []
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchWord != this.state.searchWord) {
      thi
    }

  }

  updateSearch() {
    return e => this.setState({
      searchWord: e.currentTarget.value
    })
  }

  render() {
    return (
      <>  
        <input type="text" className="search-box" placeholder="search" onChange={this.updateSearch}/>
      </>
    )
  }

}

export default SearchBar;