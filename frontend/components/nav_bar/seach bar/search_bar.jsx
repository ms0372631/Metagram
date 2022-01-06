import React from 'react';
import SearchItem from './search_item'

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      searchWord: '',
      searchShown: []
    });
  }

  componentDidMount() {
    this.props.requestUsers();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchWord != this.state.searchWord && this.state.searchWord != '') {
      let searchW = this.state.searchWord;
      let searchS = [];
      for (let i = 0; i < this.props.users.length; ++i) {
        if (searchW.length > this.props.users[i].username.length)
          continue;
        let j = 0, k = 0;
        while (j < searchW.length) {
          if (j === searchW.length - 1 && searchW[j] === this.props.users[i].username[k]) {
            searchS.push(this.props.users[i]);
            break;
          }
          if (searchW[j] !== this.props.users[i].username[k]) {
            break;
          }
          else {
            ++j;
            ++k;
          }
        }
      }
      this.setState({
        searchShown: searchS
      })
    }
  }

  updateSearchWord() {
    return e => this.setState({
      searchWord: e.currentTarget.value
    })
  }

  render() {
    let searchList, searchItem, searchIcon, searchClear;
    if (this.state.searchShown.length === 0 && this.state.searchWord !== '') {
      searchItem = (
        <div className='no-found'>No results found.</div>
      )
    }
    else {
      searchItem = (
        <ul>
          {
            this.state.searchShown.map(searchItem => (
              <SearchItem user={searchItem}/>
            ))
          }
        </ul>
      )
    }
    if (this.state.searchWord !== '') {
      searchList = (
          <div className="search-drop-down">
            <div className="square" style={{width: "15px", height: "15px", backgroundColor: "#ffffff", position: "absolute", top: "-8px", right: "175px", zIndex: "0", transform: "rotateZ(45deg)", boxShadow: "-2px -2px 2px 0px rgb(0 0 0 / 10%)"}}/>
            {searchItem}
          </div>
      )
      searchClear = (
        <div className="search-clear" onClick={() => this.setState({ searchWord: '' })}></div>
      )
    }
    else {
       searchIcon = (
          <>
            <svg aria-label="Search" class="search-icon " color="#8e8e8e" fill="#8e8e8e" height="16" role="img" viewBox="0 0 24 24" width="16"><path d="M19 10.5A8.5 8.5 0 1110.5 2a8.5 8.5 0 018.5 8.5z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="16.511" x2="22" y1="16.511" y2="22"></line></svg>
          </>
       )
    }

    return (
      <>
        <div className='search-box-container'>
          <input type="text" className="search-box" placeholder="Search" autoCapitalize='none' value={this.state.searchWord} onChange={this.updateSearchWord()}/>
          {searchList}
        {searchIcon}
        {searchClear}
        </div>
      </>
    )
  }
}

export default SearchBar;