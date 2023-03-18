import React from 'react';
import styled from "styled-components";

type PropsType = {
    status: string
}

export class ProfileStatus extends React.Component<any> {
    state = {
        editMode: false
    }

    activateEditMode() {
        // this.state.editMode=true
        // this.forceUpdate()
        this.setState(
            {
                editMode: true
            }
        )
    }

    deActivateEditMode() {
        this.setState(
            {
                editMode: false
            }
        )
    }

    render() {
        return (
            <Wrapper>
                {!this.state.editMode
                    ? <div>
                    <span onDoubleClick={this.activateEditMode.bind(this)}>
                         {this.props.status}
                     </span>
                    </div>
                    : <div>
                        <input type="text" onBlur={this.deActivateEditMode.bind(this)} autoFocus value={this.props.status}/>
                    </div>
                }
            </Wrapper>
        );
    }

};

const Wrapper = styled.div`
  margin-left: 20px;
  margin-top: 40px;

`