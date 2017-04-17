import React, { Component } from 'react';
import { inject, observer } from "mobx-react";

@inject("timerStore")
@observer
class Modal extends Component {
    render() {

        const { modalOpen, modalHeading } = this.props.timerStore

        return(
            <div>
                {modalOpen ?
                <div className="modal-container">
                    <div className="content-card">
                        <h3 className="title">{modalHeading}</h3>
                        <div className="button-container">
                            <button
                                className="button"
                                onClick={() => this.props.timerStore.closeModal()}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div> : null}
            </div>
        )
    }
}

export default Modal;
