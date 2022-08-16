import axios from 'axios'
import { useEffect,useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { Link } from "react-router-dom"
import './dashboard.css'

const Dasboard = () => {
    const [data, setData] = useState([])
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    useEffect(() => {
        getData()
    },[])

    const getData = () => {
        axios
        .get('https://reqres.in/api/users?page=2')
        .then((res) => setData(res.data.data))
        .catch((err) => console.log(err))
    }

    const handleDelete = (id) => {
        console.log(id)
        // axios
        // .delete(`https://reqres.in/api/users/${id}`)
        // // .then(toggle)
        // .then((res)=>{
        //     if (res.status == 204){
        //         setModal(false)
        //     }
        // })
        // .catch((err) => console.log(err))
    }

    //pakai async await
    // const handleDelete2 = async(id) => {
    //     try {
    //         const res =  await axios.delete(`https://reqres.in/api/users/${id}`)

    //     } catch (err){
    //         console.log(err)
    //     }
    // }


    return ( 
        <div className="dashboard">
            <h4>Dashboard</h4>
            <div className='list-user'>
                {data.map((item) => (
                    <div>
                        <div className='user-item'>
                            <p>{item.first_name}</p>
                            <img src={item.avatar} className="img-fluid"/>
                            <Button onClick={toggle}>Delete</Button>&nbsp;
                            <Link to="/detail"><Button>Edit</Button></Link>
                        </div>
                        <Modal isOpen={modal} toggle={toggle} centered size="sm">
                            <ModalHeader toggle={toggle}>Hapus Data</ModalHeader>

                            <ModalBody>
                                Apakah anda yakin ingin menghapus data ini?
                            </ModalBody>

                            <ModalFooter>
                                <Button color="secondary" onClick={() => handleDelete(item.id)}>
                                    Ok
                                </Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                ))}
            </div>
        </div>
    )
}
 
export default Dasboard;