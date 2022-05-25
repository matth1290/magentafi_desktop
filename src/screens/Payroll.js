import { useEffect, useState } from "react";
import Modal from 'react-modal';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { StreamInitToken } from "../api/zebec";


function Payroll(props) {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [recipientName, setRecipientName] = useState("");
    const [recipientAddress, setRecipientAddress] = useState("");
    const [amount, setAmount] = useState(0);

    
    
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

    const changeAddress = (address) => {
        //check if this is a valid address
        setRecipientAddress(address);
    }

    const changeAmount = (amount) => {
        //check if this is a valid amount
        setAmount(amount);
    }

    
   
    return (
        <div>
            <h1>Payroll</h1>
            {/* <button onClick={openModal}>Add New Payment</button> */}
            <button onClick={StreamInitToken}>Add New Payment</button>
            {/* <Modal
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
                        <input type="text" value={recipientName} onChange={name => setRecipientName(name)} />
                    </label>
                    <label>
                        Recipient Wallet Address
                        <input type="text" value={recipientAddress} onChange={address => changeAddress(address)}/>
                    </label>
                    <label>
                        Amount
                        <input type="text" value={recipientAddress} onChange={address => changeAddress(address)} />
                    </label>
                    <label>
                        Start Date:
                    <DatePicker
                        selected={startDate}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        onChange={date => setStartDate(date)}
                    />
                    </label>
                    <label>
                        End Date:
                    <DatePicker
                        selected={endDate}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        onChange={date => setEndDate(date)}
                    />
                    </label>
                <input type="submit" value="Submit" onSubmit={submitForm}/> 
                </form>
          </Modal> */}
        </div>
    )
}

export default Payroll;