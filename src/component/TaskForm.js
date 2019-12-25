import React, { Component } from 'react'

export default class TaskForm extends Component {
    render() {
        return (

            <div class="panel panel-warning">
                <div class="panel-heading">
                    <h3 class="panel-title">
                        Thêm Công Việc
                        <span className="fa fa-times-circle text-right mr-5"></span>
                    </h3>
                </div>
                <div class="panel-body">
                    <form>
                        <div class="form-group">
                            <label for="">Tên :</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Input field"
                                name="name"
                            />
                        </div>
                        <div class="form-group">
                            <label for="">Trạng Thái :</label>
                            <select
                                name="status"
                                className="form-control"
                                required="required"
                            >
                                <option value={true}>Active</option>
                                <option value={false}>Hide</option>
                            </select>
                        </div>
                        <div className="text-center">

                            <button type="button" class="btn btn-warning">
                                <span className="fa fa-plus mr-5"></span>Save
                            </button>
                            &nbsp;
                            <button type="submit" class="btn btn-danger">
                                <span className="fa fa-close mr-5"></span>Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        );
    }
}