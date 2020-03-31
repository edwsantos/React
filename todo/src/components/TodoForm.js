import React, { Component } from 'react';

class TodoForm extends Component{
    constructor(){
        super();
        this.state = {
            title: '',
            responsible: '',
            description: '',
            priority: 'Low'
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleInput(e){
        const {value, name} = e.target;
        this.setState({
            [name]: value
        });
    }

    handleFormSubmit(e){
        e.preventDefault();
        this.props.onAddTask(this.state);
    }

    render(){
        return(
            <div className="card">
                <form className="card-body" onSubmit={this.handleFormSubmit}>
                    <div className="form-group">
                        <input type="text" name="title" className="form-control" placeholder="Task title" onChange={this.handleInput} />
                    </div>
                    <div className="form-group">
                        <input type="text" name="responsible" className="form-control" placeholder="Task responsible" onChange={this.handleInput} />
                    </div>
                    <div className="form-group">
                        <input type="text" name="description" className="form-control" placeholder="Description" onChange={this.handleInput} />
                    </div>
                    <div className="form-group">
                        <select name="priority" className="form-control" onChange={this.handleInput}>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Save" className="btn btn-primary" />
                    </div>
                </form>

            </div>
        );
    }
}

export default TodoForm;