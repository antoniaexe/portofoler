// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import ProjectDatabase from '../../database';
type Data = {
  name: string
}


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if(req.method==='GET'){
    res.status(200).json(Object.values(ProjectDatabase.JSON()));
  }else if (req.method==='POST'){
    const newProject =JSON.parse( req.body);
    const uid = Date.now();
    newProject.id= uid;
    ProjectDatabase.set(uid, newProject );
    res.status(200).json(Object.values(ProjectDatabase.JSON()));

    // dbstudios.push(newStudio);
  }
 
}

