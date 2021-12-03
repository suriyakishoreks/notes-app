import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDrop } from 'react-dnd';
import {ItemTypes} from '../ItemTypes';

function Header(props) {

    // eslint-disable-next-line no-unused-vars
    const [{isOver}, delRef] = useDrop({
        accept: ItemTypes.Note,
        drop: (item, monitor) => {
            props.onDelete(item.id);
        },
        collect: (monitor) => ({
            isOver : !!monitor.isOver(),
        }),
    });

    return (
        <header>
            <h1>
                Keeper App
            </h1>
            <button ref={delRef}><DeleteIcon /></button>
        </header>
    );
}

export default Header;