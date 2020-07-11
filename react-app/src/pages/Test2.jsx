import React from "react"

export default class form1 extends React.Component {

    constructor() {
        super();
        this.state = {
            value: "",
            items:[],
            banners:[]
        }
    }
    // '/rent/jpaginate?estate=' + this.state.value
    handleChange = (e) => {
        this.setState({ value: e.target.value });
    }

    handleSubmit = (e) => {
        // alert('提交的名字: ' + this.state.value);
        // fetch('/rent/paginate?estate=' + this.state.value)
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         this.setState({
        //             items: data
        //         })
        //     });
        alert(this.state.value);
        fetch("/rent/jhome" + "/")
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            this.setState({
                banners:data.banner  //banner是要的内容
            })
        })
        e.preventDefault(); //阻止跳转
    }

    render() {
        const { items } = this.state
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <select type="string" class="form-control" name="estate" id="estate">
                        <option value="">--please select a estate--</option>
                        <option value={"Robinson Heights"}>Robinson Heights</option>
                        <option value="Hoi deen Court">Hoi deen Court</option>
                        <option value="Lime Stardom">Lime Stardom</option>
                        <option value="AKVO Hotel">AKVO Hotel</option>
                    </select>
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
        )
    }
}