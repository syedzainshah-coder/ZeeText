import React from 'react'
export default function Alert(prop) {
    const capitalize = (word) => {
        let low = word.toLowerCase();
        let upper = low.charAt(0).toUpperCase() + low.slice(1);
        return upper + "!";
    }
    return (
        prop.alert && <div class="alert alert-success alert-dismissible fade show" role="alert">
            <strong className={`text-${prop.alert.type} type-text`}>{capitalize(prop.alert.type)}</strong>  {prop.alert.msg}

        </div>
    )
}
