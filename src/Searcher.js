import React, { Component } from 'react';

class Searcher extends Component {
    constructor(props){
        super(props);

        this.state = {
            isOpen: false,
        }

        this.descolapsar = this.descolapsar.bind(this);
    }

    descolapsar(){
        console.log(this);
        this.setState((estadoAnterios)=>{
            return {
                isOpen: !estadoAnterios.isOpen,
            };
        });
    }

    render(){
        return <div>
        <input
          onInput={(event) => {
            //this.props.onSearch(event.target.value);
          }}
          //value={this.props.value}
          type="text" 
          className={`form-control border-bottom inputSearch ${this.state.isOpen == true ? "descolapsado" : ""}`}/>

          <img src="https://image.flaticon.com/icons/svg/149/149852.svg" className="imgSearch" onClick={this.descolapsar}/>
    </div>;
    }
}

export default Searcher;