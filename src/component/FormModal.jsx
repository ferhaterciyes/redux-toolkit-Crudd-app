import { Button, Modal, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTask, editTask } from "../App/cruddSlice";

const FormModal = ({ isOpen, close, editItem, setEditItem }) => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const newTask = Object.fromEntries(form.entries());
  if(editItem){
    dispatch(editTask({ ...newTask, id: editItem.id }));

  }else{

      dispatch(addTask(newTask));
  }
    close();
};

  return (
    <Modal
      className="text-dark"
      show={isOpen}
      onHide={close}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        closeButton
        onClick={() => {
          close();
          setEditItem(null);
        }}
      >
        <Modal.Title id="contained-modal-title-vcenter" className="text-center">
          {editItem ? "Düzenleme Modu" : "Yeni Görev Ekle"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Görev Başlığı</Form.Label>
            <Form.Control
              defaultValue={editItem?.title}
              required
              name="title"
              type="text"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Yazan</Form.Label>
            <Form.Control
              defaultValue={editItem?.assignet_to}
              required
              name="assignet_to"
              type="text"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Atanan Kişi</Form.Label>
            <Form.Control
              defaultValue={editItem?.author}
              required
              name="author"
              type="text"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Son Teslim Tarihi</Form.Label>
            <Form.Control
              defaultValue={editItem?.end_date}
              required
              name="end_date"
              type="date"
            />
          </Form.Group>
          <Modal.Footer>
            <Button
              onClick={() => {
                close();
                setEditItem(null);
              }}
              variant="primary"
            >
              Close
            </Button>

            <Button variant="success" type="submit">
              {editItem ? "Güncelle" : "Kaydet"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FormModal;
