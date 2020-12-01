import react from 'react'




class Form extends react.Component{
    constructor(props){
        super(props)
        this.state={
            createdby:'',
            departments:'',
            assignedto:'',
            message:'',
            status:'PENDING',
            options:[],
            users:[]
        }
    }

    //at component did mount
    componentDidMount() {
        fetch('localhost:5000/api/v1/form/fetchall',{
            method:'POST',
            
        })
    }
    

    handleDepartment=()=>{

        //dispatch action 
        
    }

    render(){
        console.log(this.state.options)

        return(<div className="login-signup-header">

            <form className="login-form">
                    <div className="field">
                        <div>
                           <span>Department : </span> <select  name="department">
                                {this.state.options.map((item,index)=>{
                                    return <option key={index} value={item}>{item}</option>
                                        })}
                            </select></div>
                            <div>
                                <span>Users</span><select name="users">
                                    {this.state.users.map((item,index)=>{
                                        return <option key={index} value={item}></option>
                                    })}

                                </select>
                            </div>
                    </div>
            </form>
        </div>)
    }
}

export default Form