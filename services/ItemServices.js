import { db } from '../constants/db';

export const Additem = (item) => {
    db.ref('/TodoList/' + item.id).set({
        ...item
    });
};

export const RemoveItem = (id) => {
    db.ref('/TodoList/' + id).remove();
}

export const UpdateItem = (id, data, status) => {
    if (status === "Active") {
        status = "Done";
    }
    else {
        status = "Active";
    }
    if (data !== '') {
        db.ref('/TodoList/' + id).update({
            'body': data,
            'status': status
        });
    }
    else{
        db.ref('/TodoList/' + id).update({
            'status': status
        }); 
    }
}
