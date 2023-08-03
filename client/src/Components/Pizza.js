import React,{useState} from 'react'
import  {Modal}  from 'react-bootstrap';

export default function Pizza({pizza}) {
  const[quantity, setquantity] = useState(1)
  const[varient, setvarient] = useState("small")
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div >
      <div onClick={handleShow}>
      <h1>{pizza.name}</h1>
      <img src={pizza.image} className='img-fliud'></img>
      </div>

      <div className='flex-container'>
        <div className='m-1 w-100'>
            <p>Sizes</p>
            <select className='form-control' value={varient} onChange={(e)=>{setvarient(e.target.value)}}>
              {pizza.varients.map(varients=>{
                return <option value={varients}>{varients}</option>
              })}
            </select>
            
        </div>

        <div className='m-1 w-100'>
            <p>Quantity</p>
            <select className='form-control' value={quantity} onChange={(e)=>{setquantity(e.target.value)}}>
              {[...Array(10).keys()].map((x, i)=>{
                return <option value = {i+1}>{i+1}</option>
              })}
            </select>
        </div>
      </div>
      <div className='flex-container'>
        <div className='mt-3 w-100'>
              <h1>Price:{pizza.prices[0][varient]*quantity}</h1>
        </div>

        <div className='m-1 w-100'>
              <button className='btn'>Add To Cart</button>
        </div>

      </div>

      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={pizza.image} className='img-fluid' style={{height:'200px', width:"300px"}}></img>
          <p>{pizza.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className='btn' onClick={handleClose}>Close</button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}
