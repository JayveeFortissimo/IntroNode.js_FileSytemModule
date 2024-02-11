const { unlink } = require("fs");
const fs = require("fs/promises");

const CreateFile = async (filename,Content) =>{

    try{
        const data = await fs.writeFile(filename,Content);

    }catch(err){
   console.log(err)
    }


}


CreateFile("Faith.txt","Hello miss na kita Crush ko mula pagka bata");


//read 

const ReadFile = async(filename) =>{
try{
    await fs.readFile(filename,'utf8');
    
}catch(err){
    console.log(err)
}
}

ReadFile("Faith.txt");

//To delete

const Delete = async (filename) =>{

    try{
        const datas = await fs.unlink(filename);
        console.log("Success")
    }catch(err){
        console.log(err)
    }
}


Delete("Faith");

////

const Rename = async (Oldname,latest) =>{
    try{
     const data = await fs.rename(Oldname,latest)
    }catch(err){
        console.log(err)
    }
}

Rename("Erick.txt","UraraShiraishi.txt")