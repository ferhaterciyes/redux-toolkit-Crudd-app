import Button from "react-bootstrap/Button";
import { Stack, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormModal from "./component/FormModal";
import { useState } from "react";
import { removeTask } from "./App/cruddSlice";

function App() {
  const state = useSelector((store) => store.cruddReducer);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);

  const handleRemove = (task) => {
    dispatch(removeTask(task));
  };

  return (
    <>
      <FormModal
        isOpen={isOpen}
        close={() => setIsOpen(false)}
        editItem={editItem}
        setEditItem={()=>setEditItem(null)}
      />

      <div className="crud">
        <h1 className="text-danger">CRUD_APP / TOOLKİT</h1>
        <Button onClick={() => setIsOpen(true)} variant="primary">
          Görev Ekle
        </Button>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>id</th>
              <th>Görev</th>
              <th>Yazar</th>
              <th>Atanan</th>
              <th>Tarih</th>
              <th>İşlem</th>
            </tr>
          </thead>
          {state.tasks.map((task, i) => (
            <tbody key={i}>
              <tr>
                <td>{i}</td>
                <td>{task.title}</td>
                <td>{task.assignet_to}</td>
                <td>{task.author}</td>
                <td>{task.end_date}</td>
                <td>
                  <Stack direction="horizontal">
                    <Button
                      onClick={() => handleRemove(task.id)}
                      variant="danger"
                    >
                      Sil
                    </Button>
                    <Button
                      onClick={() => {
                        setEditItem(task);
                        setIsOpen(true);
                      }}
                      variant="primary"
                    >
                      Düzenle
                    </Button>
                  </Stack>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </>
  );
}

export default App;
