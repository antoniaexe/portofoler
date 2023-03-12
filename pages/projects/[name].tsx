import { useRouter } from "next/router";
import React, { useEffect, useState } from "react"
import { Layout } from "../../components/Layout";

const Project= () => {
  const router = useRouter();
  const { name } = router.query
  const [images, setImages] = useState([]);
  useEffect(() => {
    if (name) {
      fetch(`https://api.github.com/repos/antoniaexe/moredesignstudio-owner/contents/projects/${name}`,
        { method: 'GET' },)
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          setImages(data)
        })
        .catch((err) => {
          console.error(err)
        })
    }
  }, [name]);
  const [details, setDetails] = useState();
  useEffect(() => {
    if (name) {
      fetch(`https://raw.githubusercontent.com/antoniaexe/moredesignstudio-owner/main/projects/${name}/details.yaml`,
        { method: 'GET' },)
        .then((res) => {
          return res.text()
        })
        .then((data) => {
          setDetails(data)
        })
        .catch((err) => {
          console.error(err)
        })}
    }, [name]);
  const [text, setText] = useState();
  useEffect(() => {
      if(name){
      fetch(`https://raw.githubusercontent.com/antoniaexe/moredesignstudio-owner/main/projects/${name}/text.md`,
        { method: 'GET' },)
        .then((res) => {
          return res.text()
        })
        .then((data) => {
          setText(data)
        })
        .catch((err) => {
          console.error(err)
        })}
    }, [name]);
  console.log(images, name,details, text,)

  return (
    <Layout>
      <h1>{name}</h1>
        {images && images.filter((image) => (image.name.endsWith(".webp"))).map((image) => {
        return <img width={100} src={image.download_url}></img>
        })}
      <p>{text}</p>
      <br/>
      <br/>
      <p>{details?.split("\n").map((lineText)=>{ return <>{lineText}<br/></>})}</p>  
    </Layout>
  )
}
export default Project;