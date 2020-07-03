import React from "react";

const ToDoListItem = ({ label, important = false }) => {

    return (
        <>
            { important && (<b>{label}</b>) }

            { !important && (<span>{label}</span>) }
        </>
    )
}
export default ToDoListItem;