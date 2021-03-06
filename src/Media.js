import React, { useEffect, useState } from 'react';
import { base } from '../BaseUrl'

const Media = (props) => {
    let [path, setPath] = useState();
    const getPath = () => {
        let type = props.type[0].toUpperCase() + props.type.slice(1);
        return `${base}/projects/${props.directory}/${type}/desktop/${props.src}`
    }

    useEffect(() => {
        setPath(getPath());
    }, [props.src])



    const drag = (e) => {
        e.dataTransfer.setData("id", props.id);
    }



    const allowDrop = (e) => {
        e.preventDefault();
    }

    return <div id={`media_${props.id}`} className="media">
        <button onClick={props.delete}>delete</button>
        {
            path ? props.type === 'image' ?
                <img style={{ width: `${props.ratio * 250}px` }} draggable="true" onDragOver={allowDrop} onDragStart={drag} onDrop={props.drop} alt="img" src={path} ></img> :
                <video style={{ width: `${props.ratio * 250}px` }} draggable="true" onDragOver={allowDrop} onDragStart={drag} onDrop={props.drop} src={path.includes('.mp4') ? path : `${path}.mp4`} controls></video> : null
        }
    </div>
}

export default Media