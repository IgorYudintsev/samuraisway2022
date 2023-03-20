import React, {ChangeEvent} from 'react';
import styled from "styled-components";

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<PropsType> {
    //statusInputRef=React.createRef<HTMLInputElement>()

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState(
            {
                ...this.state,
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
        this.props.updateStatus(this.state.status)
        // if(this.statusInputRef.current){
        //     console.log(this.statusInputRef.current.value)
        //     this.props.updateStatus(this.statusInputRef.current.value)
        //     this.statusInputRef.current.value=''
        // }

    }

    onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value})
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <Wrapper>
                {!this.state.editMode
                    ? <div>
                    <span onDoubleClick={this.activateEditMode}>
                         {this.props.status ? this.props.status : 'hellow'}
                     </span>
                    </div>
                    : <div>
                        <input type="text"
                               onChange={this.onChangeHandler}
                            // ref={this.statusInputRef}
                               onBlur={this.deActivateEditMode.bind(this)} autoFocus value={this.state.status}/>
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