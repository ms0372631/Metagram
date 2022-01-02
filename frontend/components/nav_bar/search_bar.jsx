import React from 'react';

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
    if (prevState.searchWord != this.state.searchWord) {
      if (this.state.searchWord.length !== 0) {
        let searchW = this.state.searchWord;
        let searchS = [];
        for (let i = 0; i < this.props.users.length; ++i) {
          if (searchW.length > this.props.users[i].username.length)
            continue;
          let j = 0, k = 0;
          while (j < searchW.length && k < this.props.users[i].username.length) {
            console.log(this.state.searchWord)
            if (j === searchW.length - 1 && searchW[j] === this.props.users[i].username[k]) {
              searchS.push(this.props.users[i]);
            }
            if (searchW[j] !== this.props.users[i].username[k]) {
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
        console.log(this.state.searchShown)
    }
  }


  updateSearchWord() {
    return e => this.setState({
      searchWord: e.currentTarget.value
    })
  }

  render() {
    return (
      <>  
        <input type="text" style={{textTransform: 'lowercase'}} className="search-box" placeholder="search" onChange={this.updateSearchWord()}/>
      </>
    )
  }

}

export default SearchBar;