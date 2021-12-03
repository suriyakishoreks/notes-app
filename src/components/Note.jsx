import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDrag } from 'react-dnd';
import {ItemTypes} from '../ItemTypes';

function Note(props) {

    const [{isDragging}, noteRef] = useDrag({
        type: ItemTypes.Note,
        item: () => ({  
            id: props.id  
        }),
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        }),
    });

    return (
        <div className="note" style={{opacity: isDragging ? 0.5 : 1}} ref={noteRef}>
            <h1>
                {props.title}
            </h1>
            <p>
                {props.content}
            </p>
            <button onClick={()=>{props.onDelete(props.id)}}><DeleteIcon /></button>
        </div>
    );
}

export default Note;