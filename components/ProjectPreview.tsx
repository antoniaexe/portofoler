import { useEffect, useState } from "react";

export const ProjectPreview = ({ name }) => {
    const [image, setImage] = useState('')
    useEffect(() => {
        fetch(`https://api.github.com/repos/antoniaexe/moredesignstudio-owner/contents/projects/${name}/1.webp`, {
            method: 'GET',
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setImage(data.download_url);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);
    return (
        <div>
            <h1>
                {name}
            </h1>
            <img src={`${image}`}></img>
        </div>


    );
};
