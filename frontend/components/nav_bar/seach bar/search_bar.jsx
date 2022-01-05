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
    let searchList, searchItem;
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
              <SearchItem key={searchItem.id} user={searchItem}/>
            ))
          }
        </ul>
      )
    }
    if (this.state.searchWord !== '') {
      searchList = (
        <>
          <div className="search-drop-down">
            <div className="square" style={{width: "15px", height: "15px", backgroundColor: "#ffffff", position: "absolute", top: "-8px", right: "175px", zIndex: "0", transform: "rotateZ(45deg)", boxShadow: "-2px -2px 2px 0px rgb(0 0 0 / 10%)"}}/>
            {searchItem}
          </div>
          <div className="search-clear" onClick={() => this.setState({ searchWord: '' })}></div>
        </>
      )
    }
    else {
       searchList = (<div className="search-icon"></div>)
    }

    return (
      <>
        <input type="text" className="search-box" placeholder="  Search" value={this.state.searchWord} onChange={this.updateSearchWord()}/>
        {searchList}
      </>
    )
  }
}

export default SearchBar;