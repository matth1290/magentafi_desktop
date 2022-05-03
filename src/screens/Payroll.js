import { useEffect, useState } from "react";
import Modal from 'react-modal';
import ReactDOM from 'react-dom';

function Payroll(props) {
    const [modalIsOpen, setIsOpen] = useState(false);
    
    useEffect(() => {
       
    }, [])

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const payout = () => {
        
    }

    const submitForm = () => {
        //set state values here
        payout();
    }
   
    return (
        <div>
            <h1>Payroll</h1>
            <button onClick={openModal}>Add New Payment</button>
            <Modal
                isOpen={modalIsOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                // style={customStyles}
                contentLabel="Payment Information"
            >
                <button onClick={closeModal}>close</button>
                <form>
                    <h1>Create New Payment</h1>
                    <label>
                        Recipient Name
                        <input type="text" /*value={this.state.value} onChange={this.handleChange}*/ />
                    </label>
                    <label>
                        Recipient Wallet Address
                        <input type="text" /*value={this.state.value} onChange={this.handleChange}*/ />
                    </label>
                    <label>
                        Amount
                        <input type="text" /*value={this.state.value} onChange={this.handleChange}*/ />
                    </label>
                    <label>
                        Date Begin
                        <input type="text" /*value={this.state.value} onChange={this.handleChange}*/ />
                    </label>
                    <label>
                        Date End
                        <input type="text" /*value={this.state.value} onChange={this.handleChange}*/ />
                    </label>
                <input type="submit" value="Submit" onSubmit={submitForm}/> 
                </form>
          </Modal>
        </div>
    )
}

export default Payroll;