import React from 'react';
import Select from 'react-select';



const options = [
    { value: 'Robinson+Heights', label: 'Robinson Heights' },
    { value: 'Hoi+deen+Court', label: 'Hoi deen Court' },
    { value: 'Lime+Stardom', label: 'Lime Stardom' },
    { value: 'AKVO+Hotel', label: 'AKVO Hotel' },
];

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            items:[],
            selectedOption: null
        }
    }

    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    };

    handleSubmit = (selectedOption) => {
        console.log(this.state.selectedOption.value);
        console.log('/rent/jpaginate?estate=' + this.state.selectedOption.value);
        fetch('/rent/jpaginate?estate=' + this.state.selectedOption.value)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.setState({
                items: data
            })
        })
        selectedOption.preventDefault(); //阻止跳转
    }

    render() {
        const { selectedOption } = this.state;
        const { items } = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <Select
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={options}
                    />
                    <button type="submit" value="提交">提交</button>
                </form>
                {
                    items.length > 0 ?
                    <ul>
                        {
                            items.map((element,index) =>{
                                return <li key={index}> { element.title } </li>
                            })
                        }
                    </ul>
                    : <div>等待数据加载...</div>
                }
            </div>
        );
    }
}