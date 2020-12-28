import React, { Component } from 'react'

export default class ListsKeys extends Component {
    constructor(props){
        super(props);
        this.state = {
            listData: [
                {name: 'Trinh',  age: 18},
                {name: 'An',  age: 28},
                {name: 'Linh',  age: 38},
                {name: 'Minh',  age: 8},
            ],
        };
    }

    renderTable = () =>{
        const {listData} = this.state;
        return listData.map((item, index) => { 
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                </tr>
            );
        });
    };

    render() {
        return (
            <div>
                <h3>*ListsKeys</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>stt</th>
                            <th>name</th>
                            <th>age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable()}
                    </tbody>
                </table>
            </div>
        )
    }
}
